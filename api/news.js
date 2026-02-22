const axios = require('axios');

// ============================================
// ServerChan 微信推送配置 (推荐)
// 免费简单：https://sct.ftqq.com/
// ============================================
const SERVERCHAN_SENDKEY = ''; // 填入你的ServerChan SendKey

// ============================================
// 微信公众号测试号配置 (备用)
// ============================================
const APP_ID = 'wx95631732e65ce056';
const APP_SECRET = 'a42bc08acaf94969cce600b683517aed';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

// ============================================
// ServerChan 推送 (推荐方式)
// ============================================
async function sendViaServerChan(newsList) {
  if (!SERVERCHAN_SENDKEY) {
    console.log('   未配置ServerChan，跳过');
    return { success: false, error: '未配置SendKey' };
  }

  try {
    // 构建消息内容
    let content = `📰 今日AI新闻简报 (${new Date().toLocaleDateString('zh-CN')})\n\n`;

    newsList.forEach((news, index) => {
      content += `${index + 1}. ${news.translation}\n\n`;
    });

    content += `—— 来源: HackerNews`;

    // 发送请求
    const url = `https://sctapi.ftqq.com/${SERVERCHAN_SENDKEY}.send`;
    const response = await axios.post(url, {
      title: '🤖 每日AI新闻简报',
      content: content,
      channel: 3, // 微信通知
      openid: ''  // 可留空
    }, {
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data?.code === 0) {
      console.log('   ServerChan推送成功');
      return { success: true };
    } else {
      console.log('   ServerChan推送失败:', response.data?.message);
      return { success: false, error: response.data?.message };
    }
  } catch (e) {
    console.log('   ServerChan推送失败:', e.message);
    return { success: false, error: e.message };
  }
}

// ============================================
// 获取Access Token (带缓存)
// ============================================
let cachedToken = null;
let tokenExpireTime = 0;

async function getAccessToken() {
  const now = Date.now();
  if (cachedToken && now < tokenExpireTime) {
    return cachedToken;
  }

  const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APP_ID}&secret=${APP_SECRET}`;
  const res = await axios.get(url);

  if (res.data.access_token) {
    cachedToken = res.data.access_token;
    tokenExpireTime = now + (res.data.expires_in - 300) * 1000;
    return cachedToken;
  }
  throw new Error('获取Access Token失败: ' + JSON.stringify(res.data));
}

// ============================================
// 获取用户OpenID列表
// ============================================
async function getUserList(accessToken) {
  try {
    const url = `https://api.weixin.qq.com/cgi-bin/user/get?access_token=${accessToken}`;
    const res = await axios.get(url);
    return res.data.data?.openid || [];
  } catch (e) {
    console.log('获取用户列表失败:', e.message);
    return [];
  }
}

// ============================================
// 发送模板消息
// ============================================
async function sendTemplateMessage(accessToken, openid, newsList) {
  const url = `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${accessToken}`;

  let content = '';
  newsList.forEach((news, index) => {
    content += `${index + 1}. ${news.translation}\n`;
  });

  const data = {
    touser: openid,
    template_id: TEMPLATE_ID,
    data: {
      date: { value: new Date().toLocaleDateString('zh-CN') },
      content: { value: content },
      source: { value: 'HackerNews AI News' }
    }
  };

  return axios.post(url, data);
}

// ============================================
// 获取HackerNews AI相关新闻
// ============================================
async function getAINews() {
  try {
    const topStories = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json', {
      timeout: 10000
    });
    const storyIds = topStories.data.slice(0, 50);

    const stories = await Promise.all(
      storyIds.slice(0, 30).map(async (id) => {
        try {
          const story = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
            timeout: 5000
          });
          return story.data;
        } catch (e) {
          return null;
        }
      })
    );

    const aiKeywords = [
      'AI', 'artificial intelligence', 'machine learning', 'deep learning',
      'GPT', 'OpenAI', 'Google', 'Meta', 'Microsoft', 'Amazon',
      'tech', 'software', 'startup', 'neural', 'LLM', 'model',
      'Claude', 'Gemini', 'Sora', 'Llama', 'Mistral', 'Anthropic',
      'Apple', 'Nvidia', 'Tesla', 'robot', 'automation'
    ];

    const aiNews = stories
      .filter(s => s && s.title && s.score && s.score > 10)
      .filter(s => {
        const title = s.title.toLowerCase();
        return aiKeywords.some(k => title.includes(k.toLowerCase()));
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    return aiNews;
  } catch (e) {
    console.error('获取新闻失败:', e.message);
    return [];
  }
}

// ============================================
// 翻译函数
// ============================================
async function translateToChinese(text) {
  if (!text) return '';

  // 方法1: MyMemory API (免费)
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|zh`;
    const res = await axios.get(url, { timeout: 5000 });
    if (res.data?.responseData?.translatedText) {
      return res.data.responseData.translatedText;
    }
  } catch (e) {
    console.log('MyMemory翻译失败');
  }

  return text;
}

// ============================================
// 主函数
// ============================================
module.exports = async (req, res) => {
  const timestamp = new Date().toISOString();
  console.log(`\n========== ${timestamp} ==========`);

  try {
    console.log('1. 正在获取AI新闻...');
    const news = await getAINews();
    console.log(`   获取到 ${news.length} 条原始新闻`);

    if (news.length === 0) {
      return res.status(200).json({
        success: false,
        message: '暂无新闻',
        news: []
      });
    }

    console.log('2. 正在翻译新闻...');
    const translatedNews = await Promise.all(
      news.map(async (n) => {
        const translation = await translateToChinese(n.title);
        const shortTitle = translation.length > 50
          ? translation.substring(0, 47) + '...'
          : translation;

        return {
          id: n.id,
          title: n.title,
          translation: shortTitle,
          fullTranslation: translation,
          url: n.url || `https://news.ycombinator.com/item?id=${n.id}`,
          score: n.score,
          by: n.by,
          time: n.time
        };
      })
    );
    console.log('   翻译完成');

    // 推送
    console.log('3. 正在推送...');

    // 方式1: ServerChan (推荐)
    const serverChanResult = await sendViaServerChan(translatedNews);

    // 方式2: 微信公众号 (备用)
    let wechatResult = { success: false, error: '未配置' };
    if (SERVERCHAN_SENDKEY === '') {
      try {
        const accessToken = await getAccessToken();
        const userList = await getUserList(accessToken);
        if (userList.length > 0) {
          await sendTemplateMessage(accessToken, userList[0], translatedNews);
          wechatResult = { success: true };
        }
      } catch (e) {
        wechatResult = { success: false, error: e.message };
      }
    }

    console.log('========== 完成 ==========\n');

    res.status(200).json({
      success: true,
      message: serverChanResult.success ? '新闻获取并推送成功' : '新闻获取成功',
      serverChan: serverChanResult,
      wechat: wechatResult,
      date: new Date().toLocaleDateString('zh-CN'),
      news: translatedNews
    });

  } catch (error) {
    console.error('错误:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
