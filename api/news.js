const axios = require('axios');

// 微信测试号配置
const APP_ID = 'wx95631732e65ce056';
const APP_SECRET = 'a42bc08acaf94969cce600b683517aed';
const USER_OPENID = 'gh_0bdcc9e60337';  // 你的微信号

// 获取微信Access Token
async function getAccessToken() {
  const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APP_ID}&secret=${APP_SECRET}`;
  const res = await axios.get(url);
  return res.data.access_token;
}

// 发送微信模板消息
async function sendWeChatMessage(accessToken, newsList) {
  const url = `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${accessToken}`;

  // 构建新闻列表（限制50字以内）
  let newsContent = '';
  newsList.forEach((news, index) => {
    newsContent += `${index + 1}. ${news.title}\n${news.translation}\n\n`;
  });

  const data = {
    touser: USER_OPENID,
    template_id: '000000',  // 测试号需要创建模板，这里先用文本消息
    data: {
      content: {
        value: `🤖 今日AI新闻简报（${new Date().toLocaleDateString('zh-CN')}）\n\n${newsContent}来源: HackerNews`
      }
    }
  };

  // 测试号可能不支持模板消息，改用客服消息
  const kfUrl = `https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${accessToken}`;
  await axios.post(kfUrl, {
    touser: USER_OPENID,
    msgtype: 'text',
    text: {
      content: `🤖 今日AI新闻简报（${new Date().toLocaleDateString('zh-CN')}）\n\n${newsContent}来源: HackerNews`
    }
  });
}

// 获取HackerNews热门AI新闻
async function getAINews() {
  // 获取Top Stories
  const topStories = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  const storyIds = topStories.data.slice(0, 50); // 取前50条

  // 获取每条故事的详情
  const stories = await Promise.all(
    storyIds.slice(0, 30).map(async (id) => {
      try {
        const story = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return story.data;
      } catch (e) {
        return null;
      }
    })
  );

  // 过滤出AI/科技相关新闻
  const aiKeywords = ['AI', 'artificial intelligence', 'machine learning', 'deep learning', 'GPT', 'OpenAI', 'Google', 'Meta', 'Microsoft', 'Amazon', 'tech', 'software', 'startup'];
  const aiNews = stories
    .filter(s => s && s.title && s.score)
    .filter(s => {
      const title = s.title.toLowerCase();
      return aiKeywords.some(k => title.includes(k.toLowerCase())) || s.score > 50;
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return aiNews;
}

// 简单的翻译函数（使用免费API）
async function translateToChinese(text) {
  try {
    // 使用MyMemory免费翻译API
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|zh`;
    const res = await axios.get(url);
    if (res.data.responseData) {
      return res.data.responseData.translatedText;
    }
    return text;
  } catch (e) {
    return text;
  }
}

// 主函数
module.exports = async (req, res) => {
  try {
    console.log('开始获取AI新闻...');

    // 1. 获取AI新闻
    const news = await getAINews();
    console.log(`获取到${news.length}条AI新闻`);

    // 2. 翻译每条新闻
    const translatedNews = await Promise.all(
      news.map(async (n) => {
        const translation = await translateToChinese(n.title);
        // 限制50字
        const shortTitle = translation.length > 50 ? translation.substring(0, 47) + '...' : translation;
        return {
          title: n.title,
          translation: shortTitle,
          url: n.url || `https://news.ycombinator.com/item?id=${n.id}`,
          score: n.score
        };
      })
    );

    // 3. 推送到微信
    const accessToken = await getAccessToken();
    await sendWeChatMessage(accessToken, translatedNews);

    console.log('推送成功！');

    res.status(200).json({
      success: true,
      message: `成功推送${translatedNews.length}条新闻`,
      news: translatedNews
    });
  } catch (error) {
    console.error('错误:', error.message);
    res.status(500).json({ error: error.message });
  }
};
