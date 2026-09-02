/**
 * Slide 77: 课程的结束，是行动的起点
 * Content Page - Course Ending / Summary
 */

const slideConfig = {
  type: 'content',
  index: 77,
  title: '课程的结束，是行动的起点'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

function render() {
  return `
    <div class="slide" data-slide="${slideConfig.index}" style="background: ${theme.bg}; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;">
      <style>
        .slide-77 {
          width: 100%;
          height: 100%;
          padding: 16px 28px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Header */
        .slide-header {
          text-align: center;
          margin-bottom: 10px;
          padding-bottom: 8px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .slide-title {
          font-size: 22px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 3px 0;
          line-height: 1.3;
        }

        .slide-subtitle {
          font-size: 10px;
          color: ${theme.secondary};
          opacity: 0.5;
        }

        /* Header Badge */
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 14px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          border-radius: 20px;
          margin-bottom: 8px;
        }

        .header-badge-text {
          font-size: 11px;
          font-weight: 600;
          color: white;
        }

        /* Three Columns Layout */
        .three-columns {
          display: flex;
          gap: 14px;
          flex: 1;
          min-height: 0;
        }

        .column-card {
          flex: 1;
          background: white;
          border-radius: 14px;
          padding: 14px 16px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
          border-top: 4px solid;
        }

        .column-card:nth-child(1) { border-top-color: ${theme.primary}; }
        .column-card:nth-child(2) { border-top-color: ${theme.accent}; }
        .column-card:nth-child(3) { border-top-color: ${theme.secondary}; }

        .column-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 1px dashed ${theme.light};
        }

        .column-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .column-card:nth-child(1) .column-icon { background: ${theme.primary}15; }
        .column-card:nth-child(2) .column-icon { background: ${theme.accent}15; }
        .column-card:nth-child(3) .column-icon { background: ${theme.secondary}15; }

        .column-title-group {
          flex: 1;
        }

        .column-title {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 2px;
        }

        .column-card:nth-child(2) .column-title { color: ${theme.accent}; }
        .column-card:nth-child(3) .column-title { color: ${theme.secondary}; }

        .column-subtitle {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.7;
        }

        .column-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .content-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .item-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-top: 5px;
          flex-shrink: 0;
        }

        .column-card:nth-child(1) .item-bullet { background: ${theme.primary}; }
        .column-card:nth-child(2) .item-bullet { background: ${theme.accent}; }
        .column-card:nth-child(3) .item-bullet { background: ${theme.secondary}; }

        .item-text {
          flex: 1;
        }

        /* Action Section */
        .action-section {
          margin-top: 12px;
          padding: 14px 18px;
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}06 100%);
          border-radius: 14px;
          border-left: 5px solid ${theme.accent};
        }

        .action-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .action-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .action-title {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .action-badge {
          font-size: 9px;
          padding: 3px 10px;
          background: ${theme.accent};
          color: white;
          border-radius: 12px;
          font-weight: 600;
          margin-left: auto;
        }

        .action-items {
          display: flex;
          gap: 12px;
        }

        .action-item {
          flex: 1;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 6px ${theme.secondary}06;
        }

        .action-number {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: ${theme.accent};
          color: white;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .action-content {
          flex: 1;
        }

        .action-text {
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.4;
          font-weight: 500;
        }

        .action-hint {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.7;
          margin-top: 3px;
        }

        /* Closing Quote */
        .closing-quote {
          text-align: center;
          margin-top: 10px;
          padding: 8px 20px;
        }

        .quote-text {
          font-size: 11px;
          color: ${theme.secondary};
          font-style: italic;
          opacity: 0.8;
        }

        .quote-text strong {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          top: 8px;
          right: 28px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.25;
        }

        .deco-dots {
          position: absolute;
          bottom: 14px;
          right: 36px;
          display: flex;
          gap: 4px;
        }

        .deco-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          opacity: 0.2;
        }

        .deco-dot:nth-child(1) { background: ${theme.primary}; }
        .deco-dot:nth-child(2) { background: ${theme.accent}; }
        .deco-dot:nth-child(3) { background: ${theme.secondary}; }

        /* Decorative shapes */
        .deco-shape-1 {
          position: absolute;
          top: 60px;
          right: 55px;
          width: 20px;
          height: 20px;
          border-radius: 4px;
          background: ${theme.light};
          opacity: 0.3;
          transform: rotate(15deg);
        }

        .deco-shape-2 {
          position: absolute;
          top: 85px;
          right: 70px;
          width: 12px;
          height: 12px;
          border-radius: 3px;
          background: ${theme.accent};
          opacity: 0.2;
        }
      </style>

      <div class="slide-77">
        <!-- Decorative -->
        <div class="deco-circle"></div>
        <div class="deco-shape-1"></div>
        <div class="deco-shape-2"></div>

        <!-- Header -->
        <div class="slide-header">
          <div class="header-badge">
            <span class="header-badge-text">课程总结</span>
          </div>
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Course Summary: The End of Learning is the Start of Action</p>
        </div>

        <!-- Three Columns -->
        <div class="three-columns">
          <!-- Knowledge Column -->
          <div class="column-card">
            <div class="column-header">
              <div class="column-icon">📚</div>
              <div class="column-title-group">
                <div class="column-title">知识层面</div>
                <div class="column-subtitle">What You Know</div>
              </div>
            </div>
            <div class="column-content">
              <div class="content-item">
                <span class="item-bullet"></span>
                <span class="item-text">AI在薪酬决策中的角色和局限性</span>
              </div>
              <div class="content-item">
                <span class="item-bullet"></span>
                <span class="item-text">"AI数据轨"和"人工判断轨"的边界和关系</span>
              </div>
              <div class="content-item">
                <span class="item-bullet"></span>
                <span class="item-text">员工对"AI调薪"担忧的四个类型</span>
              </div>
            </div>
          </div>

          <!-- Skills Column -->
          <div class="column-card">
            <div class="column-header">
              <div class="column-icon">🛠️</div>
              <div class="column-title-group">
                <div class="column-title">技能层面</div>
                <div class="column-subtitle">What You Can Do</div>
              </div>
            </div>
            <div class="column-content">
              <div class="content-item">
                <span class="item-bullet"></span>
                <span class="item-text">双轨说明卡的使用方法</span>
              </div>
              <div class="content-item">
                <span class="item-bullet"></span>
                <span class="item-text">三步信任重建法话术模板</span>
              </div>
              <div class="content-item">
                <span class="item-bullet"></span>
                <span class="item-text">5个场景的完整对话模板</span>
              </div>
              <div class="content-item">
                <span class="item-bullet"></span>
                <span class="item-text">4种员工质疑的应对话术</span>
              </div>
            </div>
          </div>

          <!-- Habits Column -->
          <div class="column-card">
            <div class="column-header">
              <div class="column-icon">🌱</div>
              <div class="column-title-group">
                <div class="column-title">习惯层面</div>
                <div class="column-subtitle">What You Will Change</div>
              </div>
            </div>
            <div class="column-content">
              <div class="content-item">
                <span class="item-bullet"></span>
                <span class="item-text">从"等员工问了再解释"变成"主动披露决策依据"</span>
              </div>
              <div class="content-item">
                <span class="item-bullet"></span>
                <span class="item-text">从"只谈数字不谈关系"变成"数字是引子，关系是核心"</span>
              </div>
              <div class="content-item">
                <span class="item-bullet"></span>
                <span class="item-text">从"调薪谈完就结束"变成"调薪是新一年信任建设的起点"</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Section -->
        <div class="action-section">
          <div class="action-header">
            <div class="action-icon">🚀</div>
            <div class="action-title">立即行动的三个建议</div>
            <div class="action-badge">行动起来</div>
          </div>
          <div class="action-items">
            <div class="action-item">
              <div class="action-number">1</div>
              <div class="action-content">
                <div class="action-text">下次调薪季，使用"双轨说明卡"向每个员工解释调薪结果</div>
                <div class="action-hint">调薪季</div>
              </div>
            </div>
            <div class="action-item">
              <div class="action-number">2</div>
              <div class="action-content">
                <div class="action-text">本周内，与核心员工做一次"非正式薪酬对话"</div>
                <div class="action-hint">本周内</div>
              </div>
            </div>
            <div class="action-item">
              <div class="action-number">3</div>
              <div class="action-content">
                <div class="action-text">建立你的"薪酬对话年度计划"</div>
                <div class="action-hint">长期</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Closing Quote -->
        <div class="closing-quote">
          <p class="quote-text"><strong>课程的结束，是行动的起点。</strong> 期待听到你的实践故事。</p>
        </div>

        <!-- Decorative dots -->
        <div class="deco-dots">
          <div class="deco-dot"></div>
          <div class="deco-dot"></div>
          <div class="deco-dot"></div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
