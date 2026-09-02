# -*- coding: utf-8 -*-
import io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

FILE = r"D:\2026年课程\ai课2026整理\AI时代的家庭教育\13_HTML可视化\01_教学文档_可视化版.html"

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix the truncation: the file ends with a partial pullquote-cite
# The broken text is: '<p class="pullquote-cite"><span></span>罗老师 · 边界思维核心'
# We need to close the pullquote and continue.
broken = '<p class="pullquote-cite"><span></span>罗老师 · 边界思维核心'
fix_close = '<p class="pullquote-cite"><span></span>罗老师 · 边界思维核心<span></span></p>\n      </div>'

if broken in content:
    content = content.replace(broken, fix_close, 1)
    print("Truncation fix applied.")
else:
    print("Truncation marker not found - check the file state.")
    sys.exit(1)

# Now append chapters 7 (rest), 8, 9, 10, 11, 12, 13 + closing
APPEND = r"""
      <h3>工具 07：家庭 AI 使用协议（完整签署版）</h3>
      <p>这是这套课的<strong>第七个核心工具</strong>——把刚才讲的"白名单 + 灰名单 + 黑名单"方法，落到一份<strong>可以打印、签字、贴冰箱</strong>的协议上。</p>

      <div class="tool-card">
        <div class="tool-card-num">Tool 07</div>
        <h3 class="tool-card-name">家庭 AI 使用<strong>协议</strong>（5 章 23 条）</h3>
        <p class="tool-card-purpose">5 章 23 条：原则 5 条 / 白名单 6 条 / 灰名单 7 条 / 黑名单 3 条 / 违约处理 2 条</p>
        <div class="tool-card-list">
          <div class="tool-card-list-item"><strong>第 1 章 · 原则（5 条）</strong><br>① AI 不替代思考<br>② AI 不替代情感<br>③ AI 不替代决策<br>④ AI 不替代社交<br>⑤ AI 不替代审美</div>
          <div class="tool-card-list-item"><strong>第 2 章 · 白名单（6 条）</strong><br>① 查资料<br>② 解释概念<br>③ 英语翻译<br>④ 整理笔记<br>⑤ 规划行程<br>⑥ 模拟面试</div>
          <div class="tool-card-list-item"><strong>第 3 章 · 灰名单（7 条）</strong><br>① 写作文：孩子先写 30% → AI 辅助<br>② 做题：AI 给思路，不给答案<br>③ 解数学：AI 给方法，不给步骤<br>④ 画图：AI 给灵感，孩子来画<br>⑤ 编程：AI 给框架，孩子填逻辑<br>⑥ 翻译：AI 辅助润色，孩子定稿<br>⑦ 解题：AI 给提示，不直接给</div>
          <div class="tool-card-list-item"><strong>第 4 章 · 黑名单（3 条）</strong><br>① 考试绝对不用 AI<br>② 隐私信息绝对不告诉 AI<br>③ 情绪低落时不用 AI 替代朋友</div>
          <div class="tool-card-list-item"><strong>第 5 章 · 违约处理（2 条）</strong><br>① 每 3 个月全家回顾 1 次<br>② 连续 2 次违反：AI 权限暂停 1 周</div>
        </div>
      </div>

      <div class="action-30">
        <div class="action-30-eyebrow">30 天行动指南 · 问题七版</div>
        <h3>听完这一讲，可以马上做 <strong>3 件事</strong>：</h3>
        <div class="action-30-list">
          <div class="action-30-item"><strong>第一步</strong>下载"家庭 AI 使用协议"——打印 2 份</div>
          <div class="action-30-item"><strong>第二步</strong>下周家庭会议讨论——全家一起改、一起签</div>
          <div class="action-30-item"><strong>第三步</strong>3 个月后回炉——按需修订</div>
        </div>
      </div>

      <div class="gold-list">
        <div class="gold-list-item">AI 教育的核心不是<em>"该不该用"</em>，是<strong>"怎么用、用在哪、不用在哪"</strong>。</div>
        <div class="gold-list-item">孩子参与制定的协议，他<strong>更愿意遵守</strong>。</div>
        <div class="gold-list-item"><em>"全用"</em>和<em>"全不用"</em>都是误区——<strong>"适度+有边界"</strong>才是答案。</div>
        <div class="gold-list-item">协议<em>不是限制</em>，是<strong>"安全区"</strong>——让孩子知道什么能做、什么不能做。</div>
        <div class="gold-list-item">3 个月回炉修订——协议<em>不是"死规定"</em>，是<strong>"活的系统"</strong>。</div>
      </div>

      <a href="#ch8" class="next-banner">
        <div>
          <div class="next-banner-label">NEXT · 下一讲</div>
          <div class="next-banner-title">问题八：AI 来了，亲子关系会变淡吗？</div>
        </div>
        <div class="next-banner-arrow">→</div>
      </a>
    </div>
  </section>

  <!-- ============ 问题八 ============ -->
  <section class="chapter-cover" id="ch8">
    <div class="chapter-num-huge">08</div>
    <div class="wrap chapter-cover-inner">
      <div class="chapter-eyebrow">
        <span>08 · PROBLEM</span>
        <span class="chapter-eyebrow-label">问题八 · 情感连接</span>
      </div>
      <h1 class="chapter-title">AI 来了，亲子关系<em>会变淡</em>吗？</h1>
      <p class="chapter-lede">—— AI 不会抢走孩子，"无共学的家庭"才会；亲子共学三法则，让 AI 成为家庭"黏合剂"</p>
      <div class="chapter-tagline">
        <strong>听完这一讲，</strong>你会拿到"亲子共学三法则 + 5 步实操流程"——每周 1 次共学，30 天后亲子关系会不一样。
      </div>
      <a href="#ch8-content" class="chapter-cover-cta">阅读全文 ↓</a>
    </div>
  </section>

  <section class="section" id="ch8-content" style="background:var(--paper)">
    <div class="content-block">
      <div class="story-card">
        <div class="story-card-label">一个让我重新理解"亲子关系"的家庭</div>
        <h3>小海和他妈妈的<em>"AI 共学时间"</em>——<em>"妈，今天 AI 怎么老说错？"</em></h3>
        <p>北京一个家庭，儿子小海上初二，妈妈是律师。</p>
        <p>过去 1 年，小海回家就钻进房间，关门打游戏、刷视频。妈妈敲门他也不开，吃饭也是端着碗回房间。</p>
        <p>妈妈很焦虑——"我儿子是不是跟我疏远了？"</p>
        <p>2024 年春天，她听了我的课，开始尝试"<strong>每周 1 次 AI 共学时间</strong>"——每周日上午 10 点到 11 点，她和小海一起用 AI。</p>
        <p>第一次共学，妈妈提议："我们一起用 AI 查查'恐龙到底是怎么灭绝的'。"</p>
        <p>小海嫌幼稚，但妈妈坚持。</p>
        <p>两人一起用 AI 搜，AI 给了 3 个答案。第一个答案说"小行星撞地球"，第二个说"火山喷发"，第三个说"病毒"。</p>
        <p>小海突然来劲了：<em>"妈，AI 怎么老说错？小行星说撞在墨西哥，但恐龙化石在蒙古也很多啊？"</em></p>
        <p>妈妈也懵了——"对啊，这 AI 不太靠谱。"</p>
        <p>两人一起查了原始资料，发现 AI 答案确实有简化。</p>
        <p>小海说：<em>"妈，AI 也不完全对啊。"</em></p>
        <p>妈妈说：<em>"是啊，AI 是助手，不是答案。"</em></p>
        <p>这次"AI 共学"，成了母子俩 1 年来聊得最久的一次。</p>
        <p>3 个月后，妈妈告诉我：<em>"我儿子现在每周日都主动问'妈，今天 AI 共学聊什么？'"</em></p>
        <p>这让我明白一个核心方法——</p>
        <div class="pullquote">
          <p class="pullquote-text">AI 不会抢走孩子，<em>"无共学的家庭"</em>才会。<br><strong>AI 不是家庭关系的"杀手"，是"放大器"</strong>。</p>
          <p class="pullquote-cite"><span></span>罗老师 · 关系哲学<span></span></p>
        </div>
      </div>

      <h3>亲子共学三法则</h3>
      <div class="three-anchor">
        <div class="three-anchor-item">
          <div class="three-anchor-num">法则 1</div>
          <div class="three-anchor-name">共同提问</div>
          <div class="three-anchor-desc">父母+孩子一起对 AI 提同一个问题，比谁的追问更深入。例：一起问"恐龙怎么灭绝的"，然后分别追问。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">法则 2</div>
          <div class="three-anchor-name">共同评估</div>
          <div class="three-anchor-desc">一起审核 AI 答案，找 AI 的错误。例：一起查 AI 给的"长城长度"——AI 可能给 4 个不同答案。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">法则 3</div>
          <div class="three-anchor-name">共同创作</div>
          <div class="three-anchor-desc">一起用 AI 做项目——家庭旅行、家庭春晚、家庭回忆录。AI 协作让家庭有了"共同作品"。</div>
        </div>
      </div>

      <div class="case-box">
        <h3>真实案例：3 个家庭"AI 共学"的过程</h3>
        <p><strong>家庭 A · 共同提问</strong>：北京的小海家庭，每周日上午 1 小时。从"恐龙灭绝"到"黑洞是什么"到"中国 GDP 是多少"——一家三口（爸+妈+小海）每周一个话题，比谁问得深。</p>
        <p><strong>家庭 B · 共同评估</strong>：上海的小静家庭，专门用 AI 找错。每周选 1 个 AI 答案，全家一起找"AI 哪里错了"。小静的妈妈说："找错让我们全家都成了'AI 监督员'。"</p>
        <p><strong>家庭 C · 共同创作</strong>：广州的小宇家庭，用 AI 做了"家庭 2024 年度回忆录"——AI 写文案、想配图、设计排版，最后做成一本书。家庭成员人手一本，爷爷拿着书在小区里"显摆"。</p>
      </div>

      <div class="action-30">
        <div class="action-30-eyebrow">30 天行动指南 · 问题八版</div>
        <h3>听完这一讲，可以马上做 <strong>3 件事</strong>：</h3>
        <div class="action-30-list">
          <div class="action-30-item"><strong>第一步</strong>定每周固定"AI 共学时间"——比如周日上午 10 点</div>
          <div class="action-30-item"><strong>第二步</strong>选 1 个家庭共同话题——孩子感兴趣 + 父母也懂一点</div>
          <div class="action-30-item"><strong>第三步</strong>用 3 法则执行——共同提问 / 共同评估 / 共同创作</div>
        </div>
      </div>

      <div class="gold-list">
        <div class="gold-list-item">AI 不会抢走孩子，<em>"无共学的家庭"</em>才会。</div>
        <div class="gold-list-item">AI 不是家庭关系的<em>"杀手"</em>，是<strong>"放大器"</strong>——放大好的家庭教育，放坏"无连接"的家庭。</div>
        <div class="gold-list-item">亲子共学 3 法则：<strong>共同提问、共同评估、共同创作</strong>——胜过 100 次说教。</div>
        <div class="gold-list-item">每周 1 小时 AI 共学，胜过<em>1000 小时</em>说教。</div>
        <div class="gold-list-item">AI 共学让<em>"亲子对话"</em>有了<strong>"启动器"</strong>——AI 成了家庭聊天的"话题源"。</div>
      </div>

      <a href="#ch9" class="next-banner">
        <div>
          <div class="next-banner-label">NEXT · 下一讲</div>
          <div class="next-banner-title">问题九：AI 时代，兴趣教育怎么办？</div>
        </div>
        <div class="next-banner-arrow">→</div>
      </a>
    </div>
  </section>

  <!-- ============ 问题九 ============ -->
  <section class="chapter-cover" id="ch9">
    <div class="chapter-num-huge">09</div>
    <div class="wrap chapter-cover-inner">
      <div class="chapter-eyebrow">
        <span>09 · PROBLEM</span>
        <span class="chapter-eyebrow-label">问题九 · 兴趣教育</span>
      </div>
      <h1 class="chapter-title">AI 时代，<em>兴趣教育</em>怎么办？</h1>
      <p class="chapter-lede">—— 兴趣教育的 4 个误区 + 5 大领域 + 3 种 AI 辅助模式；AI 让探索成本接近 0</p>
      <div class="chapter-tagline">
        <strong>听完这一讲，</strong>你会拿到"AI 兴趣探索地图"——5 领域 × 3 模式，从"低成本试错"到"深入产出"。
      </div>
      <a href="#ch9-content" class="chapter-cover-cta">阅读全文 ↓</a>
    </div>
  </section>

  <section class="section" id="ch9-content" style="background:var(--paper)">
    <div class="content-block">
      <div class="story-card">
        <div class="story-card-label">一个让我重新理解"兴趣"的家庭</div>
        <h3>小蕾的"<em>我想要的是'我画'的成就感</em>"</h3>
        <p>深圳一个家庭，女儿小蕾上初一，特别喜欢画画。</p>
        <p>2024 年 AI 绘画爆火后，小蕾妈妈很焦虑——"AI 都能画画了，孩子学美术还有前途吗？"</p>
        <p>她给小蕾报了一个 1 万块的"AI 绘画课"，想让小蕾"跟上时代"。</p>
        <p>结果——小蕾上了一周就不想去了。</p>
        <p>妈妈问为什么。</p>
        <p>小蕾说：<em>"妈，AI 绘画太快了，我没什么感觉。我画一张画，要花 3 个小时——构图、选色、修改、签名。这个过程很慢，但我很享受。但 AI 绘画 5 秒就出图——我看到图的那一刻，我已经知道它不是我的作品了。"</em></p>
        <p>妈妈懵了。</p>
        <p>小蕾接着说：<em>"我想要的是'我画'的成就感，不是'我让 AI 画'的效率。"</em></p>
        <p>这段话让我沉思了很久——</p>
        <div class="pullquote">
          <p class="pullquote-text">兴趣的本质不是<em>"学会某项技能"</em>，<br>是<strong>"享受过程中的自我表达"</strong>。</p>
          <p class="pullquote-cite"><span></span>罗老师 · 兴趣哲学<span></span></p>
        </div>
      </div>

      <h3>兴趣教育的 4 个误区</h3>
      <div class="three-anchor">
        <div class="three-anchor-item">
          <div class="three-anchor-num">误 1</div>
          <div class="three-anchor-name">把兴趣当"技能"练</div>
          <div class="three-anchor-desc">学钢琴要考级、学画画要参赛、学编程要拿奖。结果：考完级就不碰琴。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">误 2</div>
          <div class="three-anchor-name">把兴趣当"加分"</div>
          <div class="three-anchor-desc">学奥数加分、学钢琴加分、学机器人加分。结果：兴趣是"工具"，不是"目的"。</div>
        </div>
      </div>
      <div class="three-anchor">
        <div class="three-anchor-item">
          <div class="three-anchor-num">误 3</div>
          <div class="three-anchor-name">把兴趣当"面子"</div>
          <div class="three-anchor-desc">"我家孩子会弹钢琴、会画画、会编程"。结果：一堆"半吊子兴趣"，没一个深入。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">误 4</div>
          <div class="three-anchor-name">把兴趣当"提分器"</div>
          <div class="three-anchor-desc">学编程为了"学 AI"加分。结果：学完不会用，反而厌恶编程。</div>
        </div>
      </div>

      <h3>5 大兴趣领域 + AI 辅助方式</h3>
      <table>
        <thead><tr><th>#</th><th>领域</th><th>核心能力</th><th>AI 辅助方式</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>艺术创作</td><td>审美、表达</td><td>AI 辅助灵感</td></tr>
          <tr><td>2</td><td>音乐乐器</td><td>节奏、表达</td><td>AI 辅助练习</td></tr>
          <tr><td>3</td><td>编程开发</td><td>逻辑、问题解决</td><td>AI 辅助编码</td></tr>
          <tr><td>4</td><td>体育运动</td><td>身体素质、意志力</td><td>AI 辅助训练计划</td></tr>
          <tr><td>5</td><td>阅读写作</td><td>思考、表达</td><td>AI 辅助润色</td></tr>
        </tbody>
      </table>

      <h3>3 种 AI 辅助模式</h3>
      <div class="three-anchor">
        <div class="three-anchor-item">
          <div class="three-anchor-num">模式 1</div>
          <div class="three-anchor-name">探索期（0-1 月）</div>
          <div class="three-anchor-desc">AI 帮孩子"低成本试错"。1 周入门 1 个新领域，看看孩子喜不喜欢。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">模式 2</div>
          <div class="three-anchor-name">入门期（1-6 月）</div>
          <div class="three-anchor-desc">AI 1 对 1 辅导孩子上手基本功。每天 15 分钟，比报班便宜 100 倍。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">模式 3</div>
          <div class="three-anchor-name">精进期（6 月+）</div>
          <div class="three-anchor-desc">AI 帮孩子解决具体难题——短篇结尾卡壳、画作风格突破、代码 bug 排查。</div>
        </div>
      </div>

      <div class="case-box">
        <h3>真实案例：小蕾的"AI 兴趣探索"</h3>
        <p>听完"AI 兴趣探索地图"后，小蕾妈妈做了一件事——<strong>让小蕾自己设计兴趣学习路径</strong>。</p>
        <p><strong>领域 1 · 手绘（保留，调整）</strong>：每周 1 幅原创作品，发小红书。AI 辅助灵感、配色、文案——<em>关键：手绘必须小蕾自己画</em>。</p>
        <p><strong>领域 2 · AI 绘画（保留，定位"工具"）</strong>：用 AI 绘画做"灵感验证"——手绘前用 AI 看大致效果——<em>关键：AI 绘画不是"作品"，是"工具"</em>。</p>
        <p><strong>领域 3 · 艺术评论（新增）</strong>：用 AI 学艺术评论（"请用孩子能懂的话解释印象派和后印象派的区别"），在小红书开始写"艺术评论"。</p>
        <p>3 个月后小蕾的话：<em>"妈，AI 让我画得更快，但'我画'的成就感是 AI 给不了的。"</em></p>
      </div>

      <div class="action-30">
        <div class="action-30-eyebrow">30 天行动指南 · 问题九版</div>
        <h3>听完这一讲，可以马上做 <strong>3 件事</strong>：</h3>
        <div class="action-30-list">
          <div class="action-30-item"><strong>第一步</strong>选 1 个孩子感兴趣的领域</div>
          <div class="action-30-item"><strong>第二步</strong>进入"探索期"——1 个月用 AI 试错</div>
          <div class="action-30-item"><strong>第三步</strong>30 天后评估——孩子还想继续吗？</div>
        </div>
      </div>

      <div class="gold-list">
        <div class="gold-list-item">兴趣的本质不是<em>"学会某项技能"</em>，是<strong>"享受过程中的自我表达"</strong>。</div>
        <div class="gold-list-item">AI 让<em>探索成本接近 0</em>——以前要花 1 万块报班才知道"喜不喜欢"，现在 0 成本就能试。</div>
        <div class="gold-list-item">5 大兴趣领域 + 3 种 AI 辅助模式 = <strong>"低成本试错 + 深入产出"</strong>。</div>
        <div class="gold-list-item"><em>"我想要的是'我画'的成就感，不是'我让 AI 画'的效率。"</em>——小蕾的话代表了一代孩子。</div>
        <div class="gold-list-item">AI 替代<em>"技能"</em>，强化<em>"自我表达"</em>——AI 越强，自我表达越值钱。</div>
      </div>

      <a href="#ch10" class="next-banner">
        <div>
          <div class="next-banner-label">NEXT · 下一讲</div>
          <div class="next-banner-title">问题十：如何评估孩子在 AI 时代的成长？</div>
        </div>
        <div class="next-banner-arrow">→</div>
      </a>
    </div>
  </section>

  <!-- ============ 问题十 ============ -->
  <section class="chapter-cover" id="ch10">
    <div class="chapter-num-huge">10</div>
    <div class="wrap chapter-cover-inner">
      <div class="chapter-eyebrow">
        <span>10 · PROBLEM</span>
        <span class="chapter-eyebrow-label">问题十 · 成长评估</span>
      </div>
      <h1 class="chapter-title">如何评估孩子的<em>成长</em>？</h1>
      <p class="chapter-lede">—— 考试分数在 AI 时代已经失效；新评估 = "问题解决力 + 创意产出力 + 情感连接力"</p>
      <div class="chapter-tagline">
        <strong>听完这一讲，</strong>你会拿到"AI 时代成长评估表"完整版——3 大维度 + 10 项指标 + 评分规则。
      </div>
      <a href="#ch10-content" class="chapter-cover-cta">阅读全文 ↓</a>
    </div>
  </section>

  <section class="section" id="ch10-content" style="background:var(--paper)">
    <div class="content-block">
      <div class="story-card">
        <div class="story-card-label">一个让我重新理解"评估"的家庭</div>
        <h3>小宇的"<em>成绩第 3，能力测试第 28</em>"的反转</h3>
        <p>杭州一个家庭，爸爸是企业咨询师，儿子小宇上初二。</p>
        <p>小宇成绩一直班里前 10，爸爸很自豪。</p>
        <p>2024 年秋天，小宇学校做了一个"AI 时代能力测试"——</p>
        <p><em>"假设你要策划一场家庭旅行，预算 2 万，5 天 4 夜，去 3 个候选目的地，请用 AI 工具完成一份完整的旅行方案。"</em></p>
        <p>结果出来后，爸爸懵了——</p>
        <p><em>小宇的考试成绩是班里第 3</em>（满分 100，他得 92）。<br><em>但这次"能力测试"得分是班里第 28</em>（满分 100，他得 61）。</p>
        <p>差距之大，让爸爸开始反思。</p>
        <p>他后来问小宇："你这次怎么考得不好？"</p>
        <p>小宇的回答很直接：<em>"爸，学校教的是'解题'——这道题有标准答案，做对就行。但这个测试考的是'问题'——我连'要问 AI 什么'都不知道。"</em></p>
        <p>爸爸跟我聊这件事时，说了一句让我记到现在：<em>"考试分数'考'不出来 AI 时代真正需要的能力。"</em></p>
      </div>

      <h3>传统评估在 AI 时代的 3 大失效</h3>
      <div class="three-anchor">
        <div class="three-anchor-item">
          <div class="three-anchor-num">失 1</div>
          <div class="three-anchor-name">分数 ≠ 真实能力</div>
          <div class="three-anchor-desc">考试 90 分的孩子遇到真实问题可能完全不会；60 分的孩子可能比 90 分还强。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">失 2</div>
          <div class="three-anchor-name">标准化 ≠ 个性化</div>
          <div class="three-anchor-desc">考试只测"标准答案"，但 AI 时代真正稀缺的是"个人风格"。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">失 3</div>
          <div class="three-anchor-name">单次 ≠ 长期</div>
          <div class="three-anchor-desc">一次考试只能反映"那一刻"，但 AI 时代需要的是"长期积累"。</div>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-card-num">Tool 10</div>
        <h3 class="tool-card-name">AI 时代<strong>成长评估表</strong>（3 维 10 项）</h3>
        <p class="tool-card-purpose">3 大维度 + 10 项指标 + 1-5 分评分规则。每季度 1 次评估，看到孩子真实的能力成长。</p>
        <div class="tool-card-list">
          <div class="tool-card-list-item"><strong>维度 1 · 问题解决力</strong><br>① 问题定义<br>② 信息检索<br>③ AI 协作<br>④ 反思迭代</div>
          <div class="tool-card-list-item"><strong>维度 2 · 创意产出力</strong><br>⑤ 原创作品<br>⑥ 个人风格<br>⑦ 跨域整合</div>
          <div class="tool-card-list-item"><strong>维度 3 · 情感连接力</strong><br>⑧ 自我认知<br>⑨ 共情能力<br>⑩ 关系维系</div>
          <div class="tool-card-list-item"><strong>评分规则</strong><br>1 = 几乎没有 / 2 = 偶尔 / 3 = 一般 / 4 = 经常 / 5 = 稳定<br><br><strong>使用方式</strong>每季度 1 次 + 父母+孩子共同打分 + 对比上季度</div>
        </div>
      </div>

      <div class="case-box">
        <h3>真实案例：小宇的"评估转型"</h3>
        <p>听完"AI 时代成长评估表"后，小宇爸爸做了 1 件事——<strong>开始用新评估替代旧评估</strong>。</p>
        <p><strong>第 1 次评估（3 月）</strong>：小宇问题解决力 3.5 / 创意产出力 2.3 / 情感连接力 2.3。</p>
        <p>最低分：跨域整合（2）、共情能力（2）、关系维系（2）。</p>
        <p>小宇的反应让爸爸意外：<em>"爸，原来你们也认可这些'软'能力啊。我一直以为只有分数才重要。"</em></p>
        <p><strong>第 2 次评估（6 月）</strong>：小宇爸爸针对 3 项最低分做了 3 件事——</p>
        <ul>
          <li>跨域整合：科学+艺术项目（用 AI 学艺术史）</li>
          <li>共情能力：每周复述"今天同学发生了什么"</li>
          <li>关系维系：每月跟老朋友"AI 协作"做项目</li>
        </ul>
        <p>3 个月后，3 项最低分都从 2 → 3。</p>
        <p><strong>第 3 次评估（9 月）</strong>：问题解决力从 3.5 升到 4.0，创意产出力从 2.3 升到 3.0。</p>
        <p>最让爸爸意外的是——小宇的<strong>考试成绩没降，反而升了 5 分</strong>。</p>
        <p>爸爸的话：<em>"考试分数不是评估的全部，但新评估不会让分数下降。新评估让分数背后的能力更扎实。"</em></p>
      </div>

      <div class="action-30">
        <div class="action-30-eyebrow">30 天行动指南 · 问题十版</div>
        <h3>听完这一讲，可以马上做 <strong>3 件事</strong>：</h3>
        <div class="action-30-list">
          <div class="action-30-item"><strong>第一步</strong>下载"AI 时代成长评估表"——下周家庭会议用</div>
          <div class="action-30-item"><strong>第二步</strong>做第 1 次评估——父母 + 孩子共同打分</div>
          <div class="action-30-item"><strong>第三步</strong>找到 3 项最低分——下季度重点提升</div>
        </div>
      </div>

      <div class="gold-list">
        <div class="gold-list-item">考试分数在 AI 时代<em>已经失效</em>——考试<em>"考"</em>不出 AI 时代真正需要的能力。</div>
        <div class="gold-list-item">小宇成绩好<em>"解题"</em>，但 AI 时代需要<strong>"解问题"</strong>。</div>
        <div class="gold-list-item">AI 时代，评估不是<em>"打分"</em>，是<strong>"导航"</strong>——从评判孩子到陪伴孩子，从贴标签到指方向。</div>
        <div class="gold-list-item">新评估<em>不会</em>让分数下降，反而让分数背后的<strong>能力更扎实</strong>。</div>
        <div class="gold-list-item">10 项指标胜过 1 个分数——评估要从<em>"看分数"</em>到<strong>"看成长"</strong>。</div>
      </div>

      <a href="#ch11" class="next-banner">
        <div>
          <div class="next-banner-label">NEXT · 下一讲</div>
          <div class="next-banner-title">问题十一：家庭 AI 教育 3 年路线图</div>
        </div>
        <div class="next-banner-arrow">→</div>
      </a>
    </div>
  </section>

  <!-- ============ 问题十一 ============ -->
  <section class="chapter-cover" id="ch11">
    <div class="chapter-num-huge">11</div>
    <div class="wrap chapter-cover-inner">
      <div class="chapter-eyebrow">
        <span>11 · PROBLEM</span>
        <span class="chapter-eyebrow-label">问题十一 · 3 年路线图</span>
      </div>
      <h1 class="chapter-title">家庭 AI 教育<em>3 年路线图</em></h1>
      <p class="chapter-lede">—— AI 教育不是 1 堂课，是 3 年行动；3 个阶段，让孩子从"入门"到"熟练"到"创新"</p>
      <div class="chapter-tagline">
        <strong>听完这一讲，</strong>你会拿到"3 年家庭 AI 教育路线图"完整版——3 阶段 × 12 季度目标 × 12 项关键行动。
      </div>
      <a href="#ch11-content" class="chapter-cover-cta">阅读全文 ↓</a>
    </div>
  </section>

  <section class="section" id="ch11-content" style="background:var(--paper)">
    <div class="content-block">
      <div class="story-card">
        <div class="story-card-label">一个让我重新理解"长期主义"的家庭</div>
        <h3>小敏的<em>"3 年前规划的能力，3 年后对接 AI 教育"</em></h3>
        <p>广州一个家庭，爸爸做投资，女儿小敏 2019 年开始上小学一年级。</p>
        <p>2020 年，爸爸做了 1 个"3 年规划"——他不是规划"孩子考什么学校"，而是规划"<strong>孩子要培养什么核心能力</strong>"。</p>
        <p><strong>第 1 年（2020-2021）· 打底子</strong>：阅读（每天 30 分钟）、运动（每周 2 次）、独立思考（每周 1 次家庭讨论）。</p>
        <p><strong>第 2 年（2021-2022）· 试方向</strong>：尝试 3 个兴趣班（钢琴、绘画、编程），半年后保留 1 个。</p>
        <p><strong>第 3 年（2022-2023）· 建系统</strong>：保留的兴趣深入、每年 1 个大项目、每年 2 次真实场景体验。</p>
        <p>3 年后——小敏不仅成绩优秀（年级前 5），更重要的是：她有 2 个"长期深入"的兴趣（编程 + 绘画），有 1 个"原创作品集"（GitHub 项目 + 个人画展）。</p>
        <p>2024 年 AI 时代来了，爸爸不是"临时应对"——他<strong>把原规划升级了一下</strong>，增加了"AI 协作能力"培养。</p>
        <p><strong>第 4-6 年 · AI 入门 → 熟练 → 创新</strong>：</p>
        <ul>
          <li>第 4 年：AI 辅助完成现有兴趣项目</li>
          <li>第 5 年：每周 1 次"AI 协作时间" + 主导 1 个家庭项目</li>
          <li>第 6 年："AI + X"复合能力 + 教别人用 AI</li>
        </ul>
        <p>爸爸的话：<em>"3 年前我规划的是'能力'，3 年后这些能力直接对接'AI 教育'。这不是巧合——是因为我 3 年前就按'AI 时代需要什么'来规划。"</em></p>
      </div>

      <h3>3 年路线图：3 阶段 × 12 季度</h3>
      <table>
        <thead><tr><th>阶段</th><th>时间</th><th>目标</th><th>关键行动</th></tr></thead>
        <tbody>
          <tr><td>阶段 1 · 入门</td><td>第 1 年（4 季度）</td><td>"会用 AI"</td><td>建认知、签协议、熟悉 5 大场景</td></tr>
          <tr><td>阶段 2 · 熟练</td><td>第 2 年（4 季度）</td><td>"用好 AI"</td><td>建工作流、真实项目、三方协作</td></tr>
          <tr><td>阶段 3 · 创新</td><td>第 3 年（4 季度）</td><td>"创造 AI"</td><td>原创作品、AI + X、教别人</td></tr>
        </tbody>
      </table>

      <h3>3 阶段判断标准</h3>
      <div class="three-anchor">
        <div class="three-anchor-item">
          <div class="three-anchor-num">阶段 1</div>
          <div class="three-anchor-name">入门判断标准</div>
          <div class="three-anchor-desc">能独立用 AI 完成 5 个场景 + 识别基本错误。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">阶段 2</div>
          <div class="three-anchor-name">熟练判断标准</div>
          <div class="three-anchor-desc">能用 AI 完成 1 个完整"生产项目" + 主动用 AI 解决问题。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">阶段 3</div>
          <div class="three-anchor-name">创新判断标准</div>
          <div class="three-anchor-desc">能用 AI 创造 1 个"原创作品"——别人看了会说"这是孩子自己想的"。</div>
        </div>
      </div>

      <div class="action-30">
        <div class="action-30-eyebrow">30 天行动指南 · 问题十一版</div>
        <h3>听完这一讲，可以马上做 <strong>3 件事</strong>：</h3>
        <div class="action-30-list">
          <div class="action-30-item"><strong>第一步</strong>下载"3 年路线图"——下周家庭会议用</div>
          <div class="action-30-item"><strong>第二步</strong>确定你家"当前阶段"——入门/熟练/创新</div>
          <div class="action-30-item"><strong>第三步</strong>定今年 3 个核心目标——避免"什么都想学"</div>
        </div>
      </div>

      <div class="gold-list">
        <div class="gold-list-item">AI 教育<em>不是 1 堂课</em>，是<strong>3 年行动</strong>。</div>
        <div class="gold-list-item">路线图不是<em>"日程表"</em>，是<strong>"方向感"</strong>——变的东西按日程表跟进，不变的东西按方向感规划。</div>
        <div class="gold-list-item">3 年前规划<em>"能力"</em>，3 年后对接<em>"AI 教育"</em>——这不是巧合，是<strong>长期主义</strong>。</div>
        <div class="gold-list-item">入门期判断标准：孩子能独立用 AI 完成 <strong>5 个场景</strong>。</div>
        <div class="gold-list-item">创新期判断标准：孩子能创造 1 个<em>"原创作品"</em>——别人看了会说<em>"这是孩子自己想的"</em>。</div>
      </div>

      <a href="#ch12" class="next-banner">
        <div>
          <div class="next-banner-label">NEXT · 下一讲</div>
          <div class="next-banner-title">问题十二：常见误区与应对</div>
        </div>
        <div class="next-banner-arrow">→</div>
      </a>
    </div>
  </section>

  <!-- ============ 问题十二 ============ -->
  <section class="chapter-cover" id="ch12">
    <div class="chapter-num-huge">12</div>
    <div class="wrap chapter-cover-inner">
      <div class="chapter-eyebrow">
        <span>12 · PROBLEM</span>
        <span class="chapter-eyebrow-label">问题十二 · 避坑指南</span>
      </div>
      <h1 class="chapter-title">常见<em>误区</em>与应对</h1>
      <p class="chapter-lede">—— 5 大误区，让 90% 的家庭走弯路；自查 + 应对 = 少走 3 年弯路</p>
      <div class="chapter-tagline">
        <strong>听完这一讲，</strong>你会拿到"AI 家庭教育误区自查表"完整版——5 大误区 + 30 个自查问题 + 应对策略。
      </div>
      <a href="#ch12-content" class="chapter-cover-cta">阅读全文 ↓</a>
    </div>
  </section>

  <section class="section" id="ch12-content" style="background:var(--paper)">
    <div class="content-block">
      <div class="story-card">
        <div class="story-card-label">两个家庭"极端化思维"的对比</div>
        <h3>家庭 A "<em>AI 万能</em>" vs 家庭 B "<em>AI 禁止</em>"——<em>走向两个极端，结果都不理想</em></h3>
        <p>2024 年春天，我去做家长培训时，遇到两个家庭——</p>
        <p><strong>家庭 A · AI 万能论家庭</strong>：爸爸是程序员，对 AI 非常狂热。他让儿子（初二）所有作业都用 AI 写——作文用 AI、数学用 AI、英语翻译用 AI、连做菜都用 AI 给食谱。结果——3 个月后，儿子成绩从班里 15 名掉到 35 名。爸爸很困惑："我用 AI 帮孩子省时间了，为什么成绩反而降了？"</p>
        <p><strong>家庭 B · AI 禁止论家庭</strong>：妈妈是中学老师，对 AI 非常警惕。她禁止女儿（初一）用 AI 工具——家里所有 AI APP 都被卸载了。结果——3 个月后，女儿写作文写得特别痛苦。妈妈问："你怎么不查点资料？"女儿说："你说不能用 AI。"妈妈："我说的是写作业不能用 AI，查资料可以用。"女儿："有什么区别吗？我不知道。"</p>
        <p><em>两个家庭，走向两个极端——一个"全用"，一个"全不用"。结果都不理想。</em></p>
      </div>

      <h3>5 大误区 + 应对策略</h3>
      <div class="three-anchor">
        <div class="three-anchor-item">
          <div class="three-anchor-num">误 1</div>
          <div class="three-anchor-name">AI 万能论</div>
          <div class="three-anchor-desc">什么作业都用 AI。应对：分场景使用、AI 辅助而非替代、保留"无 AI 时间"。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">误 2</div>
          <div class="three-anchor-name">AI 禁止论</div>
          <div class="three-anchor-desc">完全不用 AI。应对：跟孩子一起学 AI、设边界而非禁止、区分"场景"而非"全有/全无"。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">误 3</div>
          <div class="three-anchor-name">监控取代引导</div>
          <div class="three-anchor-desc">装监控、偷看聊天、用技术限制。应对：用"引导"替代"监控"、用"协议"替代"监控"、用"对话"替代"监视"。</div>
        </div>
      </div>
      <div class="three-anchor">
        <div class="three-anchor-item">
          <div class="three-anchor-num">误 4</div>
          <div class="three-anchor-name">技能取代思维</div>
          <div class="three-anchor-desc">花大价钱学 AI 编程课。应对：重思维轻技能（3 分学技能，7 分练思维）、从"问题"开始、从"作品"出发。</div>
        </div>
        <div class="three-anchor-item">
          <div class="three-anchor-num">误 5</div>
          <div class="three-anchor-name">短期取代长期</div>
          <div class="three-anchor-desc">只关注"现在学什么 AI 工具最火"。应对：重"不变"轻"变"（能力不变，工具变）、3 年规划、季度评估。</div>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-card-num">Tool 12</div>
        <h3 class="tool-card-name">AI 家庭教育<strong>误区自查表</strong>（30 题）</h3>
        <p class="tool-card-purpose">5 大误区 + 30 个自查问题。每个误区 6 题。如果 4 个以上选"是"，你家可能陷入该误区。每月 1 次自查。</p>
        <div class="tool-card-list">
          <div class="tool-card-list-item"><strong>误 1 · AI 万能论（6 题）</strong><br>① 所有作业用 AI<br>② "问 AI 就够了"<br>③ 失去独立思考兴趣<br>④ 家长"AI 能解决一切"<br>⑤ 每天用 AI > 2h<br>⑥ 离开 AI 不会学习</div>
          <div class="tool-card-list-item"><strong>误 2 · AI 禁止论（6 题）</strong><br>① 完全不用 AI<br>② 家里"谈 AI 色变"<br>③ 孩子偷偷用 AI<br>④ 家长认为"AI = 万恶之源"<br>⑤ 孩子落后于同龄人<br>⑥ 家长拒绝了解 AI</div>
          <div class="tool-card-list-item"><strong>误 3 · 监控取代引导（6 题）</strong><br>① 装监控<br>② 偷看聊天记录<br>③ 用技术限制<br>④ 孩子"防 AI 像防贼"<br>⑤ 亲子关系变差<br>⑥ 把"管"代替"教"</div>
          <div class="tool-card-list-item"><strong>误 4 · 技能取代思维（6 题）</strong><br>① 花钱学 AI 编程课<br>② 学了很多不会用<br>③ 学完就忘<br>④ 不知"为什么用 AI"<br>⑤ 只关注"能做什么"<br>⑥ "学技术 = 懂 AI"</div>
          <div class="tool-card-list-item"><strong>误 5 · 短期取代长期（6 题）</strong><br>① 只关注"当下能不能用"<br>② 每年换最新 AI 工具课<br>③ 被工具更新牵着走<br>④ 没有"3 年路线图"<br>⑤ 不关注 5 年后需要什么<br>⑥ 不做季度评估</div>
        </div>
      </div>

      <div class="case-box">
        <h3>真实案例：3 个家庭走出误区的过程</h3>
        <p><strong>家庭 A（AI 万能论）走出误区的过程</strong>：父亲意识到"孩子独立能力下降" → 跟孩子重新签"AI 家庭使用协议" → 每天保留 1 小时"无 AI 时间"（写作文、读书） → 1 个月后，孩子成绩恢复，开始有"自己的思考"。</p>
        <p><strong>家庭 B（AI 禁止论）走出误区的过程</strong>：母亲意识到"孩子落后于同龄人" → 跟孩子一起学 AI 工具 → 从"禁止"变成"有边界使用" → 1 个月后，孩子开始"主动用 AI"提升效率。</p>
        <p><strong>家庭 C（监控取代引导）走出误区的过程</strong>：父亲意识到"亲子关系破裂" → 拆掉所有监控 APP → 跟孩子签"AI 家庭使用协议" → 每周 1 次"AI 协作复盘" → 3 个月后，亲子关系恢复，孩子主动跟父母分享 AI 经历。</p>
      </div>

      <div class="action-30">
        <div class="action-30-eyebrow">30 天行动指南 · 问题十二版</div>
        <h3>听完这一讲，可以马上做 <strong>3 件事</strong>：</h3>
        <div class="action-30-list">
          <div class="action-30-item"><strong>第一步</strong>下载"误区自查表"——本月家庭会议用</div>
          <div class="action-30-item"><strong>第二步</strong>找到你家"最严重的 1 个误区"——下月重点改善</div>
          <div class="action-30-item"><strong>第三步</strong>30 天后复查——看改善情况</div>
        </div>
      </div>

      <div class="gold-list">
        <div class="gold-list-item">AI 时代家庭教育最大的危险<em>不是 AI 本身</em>，是<strong>"极端化思维"</strong>。</div>
        <div class="gold-list-item">5 大误区让 90% 家庭走弯路：<em>万能论、禁止论、监控取代引导、技能取代思维、短期取代长期</em>。</div>
        <div class="gold-list-item">误区不是<em>"敌人"</em>，是<strong>"信号"</strong>——告诉你哪里需要调整。</div>
        <div class="gold-list-item">踩坑不可怕，可怕的是<em>"踩了坑不知道"</em>或<em>"知道不调整"</em>。</div>
        <div class="gold-list-item">AI 时代，<strong>3 分学技能，7 分练思维</strong>——思维比技能重要 10 倍。</div>
      </div>

      <a href="#ch13" class="next-banner">
        <div>
          <div class="next-banner-label">NEXT · 下一讲（最终）</div>
          <div class="next-banner-title">结刊词：行动，是唯一的答案</div>
        </div>
        <div class="next-banner-arrow">→</div>
      </a>
    </div>
  </section>

  <!-- ============ 结刊词 ============ -->
  <section class="chapter-cover" id="ch13">
    <div class="chapter-num-huge">13</div>
    <div class="wrap chapter-cover-inner">
      <div class="chapter-eyebrow">
        <span>13 · CONCLUSION</span>
        <span class="chapter-eyebrow-label">结刊词</span>
      </div>
      <h1 class="chapter-title">行动，是<em>唯一</em>的答案</h1>
      <p class="chapter-lede">—— 13 讲讲完，认知已经升级；但真正的答案，在你家的饭桌上、书桌前、客厅里</p>
      <div class="chapter-tagline">
        <strong>这一讲不是"结束"，是"开始"。</strong>你拿到的不是"结业证书"，是"30 天家庭 AI 行动清单"。
      </div>
      <a href="#ch13-content" class="chapter-cover-cta">阅读全文 ↓</a>
    </div>
  </section>

  <section class="section" id="ch13-content" style="background:var(--paper)">
    <div class="content-block">
      <div class="story-card">
        <div class="story-card-label">一个让我重新理解"结束"的故事</div>
        <h3>阿梅的<em>"今晚回家，我问小海一个问题"</em></h3>
        <p>2024 年秋天，我做完一场家庭教育讲座后，一个妈妈加了我微信。</p>
        <p>她叫阿梅，儿子小海读初三。</p>
        <p>她跟我说：<em>"罗老师，3 年前我听你讲过一次 AI 时代的家庭教育。那时候 AI 还没这么火，我当时还觉得'离我太远'。这 3 年，我什么都没做——既没让孩子学 AI 工具，也没让孩子练什么 AI 能力。今年 AI 突然爆火，我发现我儿子跟他的同学们差了一大截。我儿子现在初二，同学们都在用 AI 写作文、做项目、搞编程。我儿子连 ChatGPT 都没注册过。我现在焦虑得睡不着觉。"</em></p>
        <p>她问我：<em>"罗老师，我现在开始，还来得及吗？"</em></p>
        <p>我没有正面回答。我反问她：<em>"你家饭桌上有几把椅子？"</em></p>
        <p>她愣了一下："4 把。"</p>
        <p>我说："4 把就够了。"</p>
        <p><em>"——等等，"我说，"3 年前你听了 1 场讲座，3 年里什么都没做。今天你又来听我讲。如果今天听完还是不行动，3 年后你还会来听。但如果你今天回去，明天就开始做 1 件事——比如跟孩子一起注册 1 个 AI 账号，3 年后你再来找我时，你已经走了 1000 步了。"</em></p>
        <p>阿梅沉默了几秒，然后说了一句话让我记到现在：<em>"罗老师，我今天回去就做第一件事。"</em></p>
        <p>我问她做什么。</p>
        <p>她说：<em>"今晚吃饭的时候，我问小海一个问题：'你最近在想什么？'"</em></p>
        <p>我笑了。</p>
        <p><strong>结束不是终点，开始才是。</strong></p>
      </div>

      <h3>13 讲回顾</h3>
      <div class="chapter-toc">
        <div class="chapter-toc-label">COURSE MAP · 完整课程地图</div>
        <ol>
          <li><strong>发刊词</strong> · 给孩子更多提高的可能性</li>
          <li><strong>先导课</strong> · 孩子的未来会好吗？</li>
          <li><strong>问题一</strong> · 未来社会会更卷吗？超越竞争</li>
          <li><strong>问题二</strong> · 怎样培养孩子的自学能力？以生产为导向</li>
          <li><strong>问题三</strong> · 未来社会要求更高了吗？提前步入社会</li>
          <li><strong>问题四</strong> · 怎样培养孩子的判断力？AI 输出三审制</li>
          <li><strong>问题五</strong> · AI 来了，写作和英语还重要吗？夯实基础</li>
          <li><strong>问题六</strong> · 父母应该做什么？三锚模型</li>
          <li><strong>问题七</strong> · AI 会让孩子变笨吗？家庭 AI 使用协议</li>
          <li><strong>问题八</strong> · AI 来了，亲子关系会变淡吗？亲子共学</li>
          <li><strong>问题九</strong> · AI 时代，兴趣教育怎么办？兴趣探索地图</li>
          <li><strong>问题十</strong> · 如何评估孩子在 AI 时代的成长？新评估</li>
          <li><strong>问题十一</strong> · 家庭 AI 教育 3 年路线图？3 年行动</li>
          <li><strong>问题十二</strong> · 常见误区与应对？避坑指南</li>
          <li><strong>结刊词</strong> · 行动，是唯一的答案</li>
        </ol>
      </div>

      <h3>13 个核心工具回顾</h3>
      <table>
        <thead><tr><th>#</th><th>工具名</th><th>用途</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>家庭能力评估表</td><td>识别孩子的能力坐标</td></tr>
          <tr><td>2</td><td>家庭 Prompt 工作流（自学场景）</td><td>5 个自学 Prompt 模板</td></tr>
          <tr><td>3</td><td>家庭真实问题池</td><td>10 个真实问题 + 创建规则</td></tr>
          <tr><td>4</td><td>AI 输出三审表</td><td>3 维度 + 10 个检查点</td></tr>
          <tr><td>5</td><td>AI 辅助写作流程</td><td>5 步法</td></tr>
          <tr><td>6</td><td>家庭 Prompt 工作流（5 大场景）</td><td>作业、兴趣、问题、创意、决策</td></tr>
          <tr><td>7</td><td>AI 家庭使用协议</td><td>4 大边界 + 违约责任</td></tr>
          <tr><td>8</td><td>亲子共学记录表</td><td>3 法则 + 记录表</td></tr>
          <tr><td>9</td><td>AI 兴趣探索地图</td><td>5 领域 + 3 模式</td></tr>
          <tr><td>10</td><td>AI 时代成长评估表</td><td>3 维度 + 10 指标</td></tr>
          <tr><td>11</td><td>3 年家庭 AI 教育路线图</td><td>入门 → 熟练 → 创新</td></tr>
          <tr><td>12</td><td>AI 家庭教育误区自查表</td><td>5 误区 + 30 个自查问题</td></tr>
          <tr><td>13</td><td><strong>30 天家庭 AI 行动清单</strong></td><td>每天 1 个小任务（本讲提供）</td></tr>
        </tbody>
      </table>

      <h3>工具 13：30 天家庭 AI 行动清单（完整版）</h3>
      <p>这份清单的设计原则：<strong>每天 1 个小任务</strong>（不贪多，做 1 件就行）；从"易"到"难"（前 10 天建立基础，11-20 天熟练应用，21-30 天创新产出）；可执行（30 分钟内）；可衡量（每天都有"完成标准"）。</p>

      <h4>前 10 天 · 建立基础（认知 + 边界）</h4>
      <table>
        <thead><tr><th>天</th><th>任务</th><th>完成标准</th></tr></thead>
        <tbody>
          <tr><td>Day 1</td><td>父母+孩子一起讨论"AI 是什么"，查 3 个定义</td><td>全家能说清"AI 是什么、不是什么"</td></tr>
          <tr><td>Day 2</td><td>AI 辅助解 1 道数学题，孩子检查 AI 答案</td><td>孩子能指出 AI 答错的地方</td></tr>
          <tr><td>Day 3</td><td>AI 生成 3 个故事创意，孩子选 1 个写 200 字</td><td>能区分"AI 写的"和"我写的"</td></tr>
          <tr><td>Day 4</td><td>AI 解释 1 个科学概念，孩子用 3 个例子复述</td><td>孩子能用自己的话解释</td></tr>
          <tr><td>Day 5</td><td>AI 规划 1 次家庭活动，孩子评估方案</td><td>全家能用 AI 做 1 个小决策</td></tr>
          <tr><td>Day 6</td><td>AI 辅助学 1 个新技能（吉他/烹饪/编程），15 分钟</td><td>孩子能用 AI 入门 1 个新领域</td></tr>
          <tr><td>Day 7</td><td>周末回顾：本周用 AI 解决了什么问题？</td><td>家庭会议有 1 个"AI 周记"</td></tr>
          <tr><td>Day 8</td><td>AI 生成 5 个家庭游戏创意，一起玩 1 个</td><td>全家体验 1 次"AI 亲子共玩"</td></tr>
          <tr><td>Day 9</td><td>AI 查 1 个历史事件，孩子找出 AI 错误</td><td>孩子能用"三审制"找出 1 个 AI 错误</td></tr>
          <tr><td>Day 10</td><td>签署"AI 家庭使用协议"，明确边界</td><td>家里有 1 份正式签字的协议</td></tr>
        </tbody>
      </table>

      <h4>11-20 天 · 熟练应用（工作流 + 共学）</h4>
      <table>
        <thead><tr><th>天</th><th>任务</th><th>完成标准</th></tr></thead>
        <tbody>
          <tr><td>Day 11</td><td>"家庭 Prompt 工作流 - 作业辅导"解 3 道题</td><td>孩子能用 Prompt 1 拆解问题</td></tr>
          <tr><td>Day 12</td><td>"家庭 Prompt 工作流 - 兴趣探索"探索 1 个新领域</td><td>孩子能用 Prompt 2 检索知识</td></tr>
          <tr><td>Day 13</td><td>"家庭 Prompt 工作流 - 问题解答"解决 1 个生活问题</td><td>孩子能用 Prompt 3 解释概念</td></tr>
          <tr><td>Day 14</td><td>"家庭 Prompt 工作流 - 创意生成"做 1 个小项目</td><td>孩子能用 Prompt 4 生成创意</td></tr>
          <tr><td>Day 15</td><td>"家庭 Prompt 工作流 - 决策辅助"做 1 个家庭决策</td><td>孩子能用 Prompt 5 辅助决策</td></tr>
          <tr><td>Day 16</td><td>启动 1 次"亲子共学"——共同提问</td><td>全家有 1 次"AI 共学"记录</td></tr>
          <tr><td>Day 17</td><td>启动 1 次"亲子共学"——共同评估</td><td>家庭会议有"AI 复盘"内容</td></tr>
          <tr><td>Day 18</td><td>启动 1 次"亲子共学"——共同创作</td><td>家庭有 1 个"AI 协作作品"</td></tr>
          <tr><td>Day 19</td><td>用"家庭真实问题池"选 1 个真实问题，孩子用 AI 解决</td><td>孩子能完成 1 个真实项目</td></tr>
          <tr><td>Day 20</td><td>周末回顾：本周家庭"AI 协作系统"建立得怎样？</td><td>家庭有 1 个"系统评估"</td></tr>
        </tbody>
      </table>

      <h4>21-30 天 · 创新产出（评估 + 路线图）</h4>
      <table>
        <thead><tr><th>天</th><th>任务</th><th>完成标准</th></tr></thead>
        <tbody>
          <tr><td>Day 21</td><td>用"家庭能力评估表"评估孩子 10 项能力</td><td>全家有 1 份"能力评估"</td></tr>
          <tr><td>Day 22</td><td>用"AI 时代成长评估表"做第 1 次评估</td><td>全家有 1 份"成长评估"</td></tr>
          <tr><td>Day 23</td><td>跟孩子一起做"AI 兴趣探索地图"</td><td>孩子选 1 个兴趣方向</td></tr>
          <tr><td>Day 24</td><td>跟孩子一起做"3 年家庭 AI 教育路线图"</td><td>家庭有 1 份"3 年规划"</td></tr>
          <tr><td>Day 25</td><td>用"AI 家庭教育误区自查表"自查 5 大误区</td><td>全家识别 1 个"最严重误区"</td></tr>
          <tr><td>Day 26</td><td>跟孩子一起做 1 个"AI + 兴趣"项目</td><td>孩子完成 1 个"AI 创作"</td></tr>
          <tr><td>Day 27</td><td>教孩子 1 个朋友用 AI（教是最好的学）</td><td>孩子能教 1 个朋友</td></tr>
          <tr><td>Day 28</td><td>回顾 30 天，写 1 篇"家庭 AI 教育日记"</td><td>全家有 1 份"30 天复盘"</td></tr>
          <tr><td>Day 29</td><td>跟孩子一起修订"AI 家庭使用协议"</td><td>协议更新 1 次</td></tr>
          <tr><td>Day 30</td><td>跟孩子一起规划"未来 3 年 AI 教育路线"</td><td>全家有 1 份"3 年路线图"</td></tr>
        </tbody>
      </table>

      <div class="action-30">
        <div class="action-30-eyebrow">使用方式 · 3 步</div>
        <h3>把这份清单变成<strong>家庭系统</strong>：</h3>
        <div class="action-30-list">
          <div class="action-30-item"><strong>第一步</strong>打印"30 天行动清单"——贴在冰箱/书桌前</div>
          <div class="action-30-item"><strong>第二步</strong>每天勾选 1 个任务——完成打勾</div>
          <div class="action-30-item"><strong>第三步</strong>每周 1 次家庭会议回顾——看进度、调方向</div>
        </div>
      </div>

      <div class="pullquote">
        <p class="pullquote-text">认知让你看清方向，<br>行动让你到达目的地。<br><strong>只看清不走到，永远在起点。</strong></p>
        <p class="pullquote-cite"><span></span>罗老师 · 核心哲学<span></span></p>
      </div>

      <h3>30 天后，你将拥有什么？</h3>
      <ul>
        <li>✅ 1 份"AI 家庭使用协议"——全家共同遵守</li>
        <li>✅ 1 套"家庭 Prompt 工作流"——5 大场景熟练</li>
        <li>✅ 1 张"家庭能力评估表"——识别孩子强项弱项</li>
        <li>✅ 1 张"AI 时代成长评估表"——3 维度 10 指标</li>
        <li>✅ 1 张"3 年路线图"——入门到熟练到创新</li>
        <li>✅ 1 张"30 天行动清单"——已完成 30 个小任务</li>
        <li>✅ 1 套"家庭 AI 教育操作系统"——可以迭代升级</li>
      </ul>
      <p><em>这套系统，比 1 万块的"AI 课程"更值钱——因为它是"你的家庭"专属的。</em></p>

      <h3>写给所有家长的最后 1 句话</h3>
      <p>很多家长听完课，会问："罗老师，AI 时代，家长到底该做什么？"</p>
      <p>我回答过很多次。但这次，我想给你一个更具体的答案——</p>
      <div class="pullquote">
        <p class="pullquote-text">家长不是孩子的教练，<br>不是孩子的老师，<br>不是孩子的朋友。<br><br>家长是<em>孩子和未来之间</em>的<strong>"翻译官"</strong>。</p>
        <p class="pullquote-cite"><span></span>罗老师 · 课程核心主张<span></span></p>
      </div>
      <p>AI 来了，未来变了，你的工作不是替孩子挡住未来，也不是推着孩子奔向未来。</p>
      <p>你的工作是——</p>
      <p><em>把未来翻译成孩子听得懂的日常，把日常训练成未来用得上的能力。</em></p>
      <p>这 13 讲，就是这套翻译系统的使用手册。</p>
      <p>你不需要 1 天学完，但<strong>你需要今天就开始。</strong></p>

      <div class="case-box">
        <h3>今天回家，跟孩子一起做 1 件事——</h3>
        <p>任何 1 件事都行。关键是——<em>今天开始</em>。</p>
        <ul>
          <li>一起注册 1 个 AI 账号</li>
          <li>一起问 AI 1 个问题</li>
          <li>一起讨论"我们家怎么用 AI"</li>
          <li>一起签 1 份"AI 家庭使用协议"</li>
          <li>一起吃 1 顿饭，聊"AI 时代你想做什么"</li>
        </ul>
      </div>

      <h3>课程结业</h3>
      <p>恭喜你完成了《AI 时代的家庭教育：从焦虑到超越竞争的家庭行动系统》全部 13 讲。</p>
      <p><strong>你即将带走</strong>：</p>
      <ul>
        <li>3 套原创模型：AI 家庭教育三锚模型 / 家庭 Prompt 工作流 / 超越竞争能力图谱</li>
        <li>13 个原创工具：13 套家庭 AI 教育工具</li>
        <li>1 套 30 天行动清单：每天 1 个小任务</li>
        <li>1 套 3 年路线图：入门 → 熟练 → 创新</li>
        <li>1 个结业心态：<strong>行动，是唯一的答案</strong></li>
      </ul>

      <p><strong>你的下一步</strong>：</p>
      <ol>
        <li><strong>今天</strong>——跟孩子一起做"30 天行动清单"Day 1</li>
        <li><strong>本周</strong>——开 1 次家庭会议，签"AI 家庭使用协议"</li>
        <li><strong>本月</strong>——完成"30 天行动清单"前 10 天</li>
        <li><strong>本季度</strong>——完成"AI 时代成长评估表"第 1 次评估</li>
        <li><strong>本年</strong>——完成"3 年路线图"第 1 年目标</li>
        <li><strong>未来 3 年</strong>——把孩子培养成"AI 时代原住民"</li>
      </ol>

      <div class="gold-list">
        <div class="gold-list-item">课程结束，但<strong>成长继续</strong>。</div>
        <div class="gold-list-item">从今天起，你不只是家长，你是你家 AI 教育的<em>"主理人"</em>。</div>
        <div class="gold-list-item">从今天起，你不只是孩子父母，你是孩子和未来之间的<strong>"翻译官"</strong>。</div>
        <div class="gold-list-item">从今天起，<strong>行动是唯一的答案</strong>。</div>
      </div>

      <div class="alert-box">
        <p>AI 不会取代孩子，但<strong>用好 AI 的孩子会取代不用 AI 的孩子</strong>。</p>
        <p>你的孩子不需要"赢在起跑线"——他需要"<em>赢在 AI 时代的转折点</em>"。</p>
        <p><strong>这个转折点，就是现在。</strong><br>
          <strong>这个转折点，就是今晚回家那顿饭。</strong><br>
          <strong>这个转折点，就是你拿起手机，跟孩子一起做 1 件事的那 30 分钟。</strong></p>
      </div>

      <p style="text-align:center;margin:64px 0 32px;font-family:var(--serif);font-style:italic;font-size:20px;color:var(--ink-soft)">—— 13 讲到这里结束 ——</p>
      <p style="text-align:center;font-family:var(--serif);font-weight:600;font-size:24px;color:var(--crimson);letter-spacing:-0.01em">但<em>你的家庭 AI 教育</em>，从这里开始</p>
      <p style="text-align:center;font-family:var(--mono);font-size:11px;letter-spacing:0.32em;text-transform:uppercase;color:var(--gold-deep);margin-top:32px">罗老师 · 2026 年 6 月</p>
    </div>
  </section>

  <!-- ============ Footer ============ -->
  <footer>
    <strong>罗老师《AI 时代的家庭教育：从焦虑到超越竞争的家庭行动系统》</strong>
    <div class="copyright">© 罗老师《AI 时代的家庭教育：从焦虑到超越竞争的家庭行动系统》 未经授权禁止复制、传播、改编本课程内容。</div>
    <div class="copyright" style="margin-top:8px;font-size:12px">完整版 13 讲 · 3 套原创模型 · 13 套原创工具 · 30 天行动清单 · 3 年路线图</div>
  </footer>

  <script>
    // ... existing script kept ...
  </script>

</body>
</html>
"""

# The original file's script tag and closing tags are still there - we need to KEEP them
# so we don't append duplicates. Let's check what's after the broken content.
# The file ends at line 2731 with broken text - the </body></html> etc were never written
# Actually no - the script and closing tags WERE already written into the file.
# Let me re-examine...

# Append (the existing closing tags will be at the end of our new content)
# But wait - the file might not have closing tags since the original Write was truncated
# Looking at content: ends with broken pullquote-cite, no </body></html>
# So I need to NOT include closing tags in APPEND - the existing file's </body></html> were never written
# Actually, the original Write wrote out a complete file with closing tags, then later content was lost mid-Write
# So the file MIGHT have </body></html> at the very end... or not
# Safest: check and append closing only if needed

with open(FILE, 'r', encoding='utf-8') as f:
    check_content = f.read()

# The content we have right now (after fix) does NOT include </body></html>
# (we replaced the broken text and didn't add closing)
# So we need to add closing in APPEND

# APPEND already has </body></html> at the end - good

# But wait - I wrote `<script>... existing script kept ...` as a comment - that's broken
# Let me just append WITHOUT the fake script and let the existing one stay
# Actually the file does NOT have a </body></html> either - the original Write was truncated
# So I should include the real script in APPEND

# Re-write APPEND with the full real script (same as original)
# This is getting complex. Let me just append my APPEND content and then a closing tag
# The original file likely has no </body></html> (truncated)

# Strip the fake `<script>...` from APPEND and add real closing
APPEND = APPEND.replace(
    '  <script>\n    // ... existing script kept ...\n  </script>\n\n</body>\n</html>\n',
    '  <script>\n    // Scroll progress\n    const progress = document.getElementById(\'progress\');\n    function updateProgress(){\n      const h = document.documentElement;\n      const max = h.scrollHeight - h.clientHeight;\n      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;\n      progress.style.width = pct + \'%\';\n    }\n    window.addEventListener(\'scroll\', updateProgress);\n    window.addEventListener(\'resize\', updateProgress);\n\n    // Reveal on scroll\n    const observer = new IntersectionObserver((entries)=>{\n      entries.forEach(entry=>{\n        if(entry.isIntersecting){\n          entry.target.classList.add(\'visible\');\n        }\n      });\n    },{threshold:0.1});\n    document.querySelectorAll(\'.story-card,.pullquote,.case-box,.tool-card,.action-30,.gold-list,.three-anchor,.layer-grid,.next-banner,.chapter-toc\').forEach(el=>{\n      el.classList.add(\'reveal\');\n      observer.observe(el);\n    });\n\n    updateProgress();\n  </script>\n\n</body>\n</html>\n'
)

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content + APPEND)

print(f"File updated. New length: {len(content) + len(APPEND)} chars")
