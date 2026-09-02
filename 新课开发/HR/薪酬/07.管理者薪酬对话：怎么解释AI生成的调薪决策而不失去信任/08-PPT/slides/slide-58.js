/**
 * Slide 58: 场景四：市场偏低调薪解释（最难开口的对话）
 * Content Page - Scenario 4: Below-market salary adjustment explanation
 */

const slideConfig = {
  type: 'content',
  index: 58,
  title: '场景四：市场偏低调薪解释'
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
        .slide-58 {
          width: 100%;
          height: 100%;
          padding: 14px 22px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Header */
        .slide-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 8px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .header-accent {
          width: 4px;
          height: 24px;
          background: linear-gradient(180deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .header-content {
          flex: 1;
        }

        .slide-title {
          font-size: 19px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 2px 0;
          line-height: 1.3;
        }

        .slide-subtitle {
          font-size: 10px;
          color: ${theme.secondary};
          opacity: 0.6;
          margin: 0;
        }

        /* Difficulty Badge */
        .difficulty-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: ${theme.primary}12;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .difficulty-label {
          font-size: 9px;
          color: ${theme.primary};
          font-weight: 600;
        }

        .difficulty-stars {
          font-size: 9px;
          color: ${theme.accent};
          letter-spacing: 1px;
        }

        /* Main Content Layout */
        .main-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 10px;
          flex: 1;
          min-height: 0;
        }

        /* Left Column */
        .left-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Scenario Background Card */
        .scenario-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .scenario-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .scenario-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        .scenario-title {
          font-size: 12px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .scenario-type {
          font-size: 9px;
          padding: 2px 6px;
          background: ${theme.accent}15;
          color: ${theme.accent};
          border-radius: 4px;
          margin-left: auto;
          font-weight: 600;
        }

        .scenario-items {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .scenario-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .scenario-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${theme.accent};
          flex-shrink: 0;
          margin-top: 5px;
        }

        /* Dialogue Points Card */
        .dialogue-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          flex: 1;
        }

        .dialogue-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .dialogue-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: ${theme.accent}18;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        .dialogue-title {
          font-size: 12px;
          font-weight: 700;
          color: ${theme.secondary};
        }

        .dialogue-points {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .dialogue-point {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .point-number {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          background: ${theme.primary};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .dialogue-point:nth-child(2) .point-number { background: ${theme.accent}; }
        .dialogue-point:nth-child(3) .point-number { background: ${theme.secondary}; }
        .dialogue-point:nth-child(4) .point-number { background: ${theme.primary}80; }

        .point-content {
          flex: 1;
          min-width: 0;
        }

        .point-name {
          font-size: 10.5px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 2px;
        }

        .dialogue-point:nth-child(2) .point-name { color: ${theme.accent}; }
        .dialogue-point:nth-child(3) .point-name { color: ${theme.secondary}; }
        .dialogue-point:nth-child(4) .point-name { color: ${theme.primary}; opacity: 0.8; }

        .point-desc {
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.35;
          opacity: 0.85;
        }

        /* Right Column */
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Template Card */
        .template-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          border-left: 4px solid ${theme.accent};
        }

        .template-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .template-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: ${theme.accent}18;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        .template-title {
          font-size: 12px;
          font-weight: 700;
          color: ${theme.accent};
        }

        .template-quote {
          background: ${theme.bg};
          border-radius: 10px;
          padding: 12px 14px;
          position: relative;
        }

        .quote-mark {
          font-size: 24px;
          color: ${theme.accent};
          opacity: 0.3;
          position: absolute;
          top: 6px;
          left: 10px;
          line-height: 1;
        }

        .quote-text {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.6;
          padding-left: 16px;
          position: relative;
          z-index: 1;
        }

        /* Reactions Card */
        .reactions-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          flex: 1;
        }

        .reactions-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .reactions-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: ${theme.primary}15;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        .reactions-title {
          font-size: 12px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .reactions-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .reaction-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .employee-reaction {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 8px 10px;
          background: #FEF2F2;
          border-radius: 8px;
          border-left: 3px solid ${theme.primary};
        }

        .reaction-label {
          font-size: 8px;
          padding: 2px 5px;
          background: ${theme.primary};
          color: white;
          border-radius: 3px;
          font-weight: 600;
          flex-shrink: 0;
        }

        .reaction-text {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.4;
          font-style: italic;
        }

        .manager-response {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 8px 10px;
          background: #F0FDF4;
          border-radius: 8px;
          border-left: 3px solid #2E7D32;
        }

        .response-label {
          font-size: 8px;
          padding: 2px 5px;
          background: #2E7D32;
          color: white;
          border-radius: 3px;
          font-weight: 600;
          flex-shrink: 0;
        }

        .response-text {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        /* Key Insight Footer */
        .key-insight {
          padding: 10px 14px;
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}06 100%);
          border-radius: 10px;
          border-left: 4px solid ${theme.accent};
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .insight-icon {
          width: 26px;
          height: 26px;
          border-radius: 7px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
        }

        .insight-text {
          flex: 1;
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.45;
        }

        .insight-text strong {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* Decorative Elements */
        .deco-dots {
          position: absolute;
          top: 12px;
          right: 16px;
          display: flex;
          gap: 3px;
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

        .slide-58 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-58">
        <!-- Decorative dots -->
        <div class="deco-dots">
          <div class="deco-dot"></div>
          <div class="deco-dot"></div>
          <div class="deco-dot"></div>
        </div>

        <!-- Header -->
        <div class="slide-header">
          <div class="header-accent"></div>
          <div class="header-content">
            <h1 class="slide-title">${slideConfig.title}</h1>
            <p class="slide-subtitle">Scenario 4: Below-market Salary Explanation</p>
          </div>
          <div class="difficulty-badge">
            <span class="difficulty-label">难度</span>
            <span class="difficulty-stars">★★★★☆</span>
          </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Left Column -->
          <div class="left-column">
            <!-- Scenario Background -->
            <div class="scenario-card">
              <div class="scenario-header">
                <div class="scenario-icon">📋</div>
                <span class="scenario-title">场景背景</span>
                <span class="scenario-type">最难开口的对话</span>
              </div>
              <div class="scenario-items">
                <div class="scenario-item">
                  <span class="scenario-bullet"></span>
                  <span>类型：最难开口的对话</span>
                </div>
                <div class="scenario-item">
                  <span class="scenario-bullet"></span>
                  <span>难度：★★★★☆</span>
                </div>
                <div class="scenario-item">
                  <span class="scenario-bullet"></span>
                  <span>核心挑战：员工的市场价值高于当前薪资，但调薪结果不如预期</span>
                </div>
              </div>
            </div>

            <!-- Dialogue Points -->
            <div class="dialogue-card">
              <div class="dialogue-header">
                <div class="dialogue-icon">💬</div>
                <span class="dialogue-title">对话要点</span>
              </div>
              <div class="dialogue-points">
                <div class="dialogue-point">
                  <div class="point-number">1</div>
                  <div class="point-content">
                    <div class="point-name">承认现实</div>
                    <div class="point-desc">先承认市场数据反映的事实，不要否认</div>
                  </div>
                </div>

                <div class="dialogue-point">
                  <div class="point-number">2</div>
                  <div class="point-content">
                    <div class="point-name">解释约束</div>
                    <div class="point-desc">说明为什么市场价值高但调薪不多（预算、历史原因等）</div>
                  </div>
                </div>

                <div class="dialogue-point">
                  <div class="point-number">3</div>
                  <div class="point-content">
                    <div class="point-name">给出路径</div>
                    <div class="point-desc">下次调薪季会重点考虑，或有其他补偿方式</div>
                  </div>
                </div>

                <div class="dialogue-point">
                  <div class="point-number">4</div>
                  <div class="point-content">
                    <div class="point-name">表达重视</div>
                    <div class="point-desc">强调员工的价值，以及组织对他的期待</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="right-column">
            <!-- Template Dialogue -->
            <div class="template-card">
              <div class="template-header">
                <div class="template-icon">📝</div>
                <span class="template-title">话术模板</span>
              </div>
              <div class="template-quote">
                <span class="quote-mark">"</span>
                <div class="quote-text">
                  我想先跟你坦白一件事：市场数据显示，你的薪资确实低于市场中位数。这个数据是客观的，我不会否认。那为什么这次调薪只有5%？主要原因是预算限制——今年部门的调薪预算只有去年的一半，在这个情况下，我需要在团队里做平衡。你的薪资低于市场，这是历史原因造成的，不是一夜之间能改变的。但我想让你知道：我认为你是团队里最有价值的人之一，所以这5%已经是我在你这个绩效等级里能争取到的最高数字。下次调薪季，我会把你的市场竞争力问题作为优先事项提交。
                </div>
              </div>
            </div>

            <!-- Employee Reactions -->
            <div class="reactions-card">
              <div class="reactions-header">
                <div class="reactions-icon">🤔</div>
                <span class="reactions-title">员工可能的反应</span>
              </div>
              <div class="reactions-list">
                <div class="reaction-item">
                  <div class="employee-reaction">
                    <span class="reaction-label">员工</span>
                    <span class="reaction-text">"既然市场说我值更多，为什么不直接调到市场水平？"</span>
                  </div>
                  <div class="manager-response">
                    <span class="response-label">管理者</span>
                    <span class="response-text">"我理解你的想法，但薪酬体系不允许一次性调整到位，需要分步骤来"</span>
                  </div>
                </div>

                <div class="reaction-item">
                  <div class="employee-reaction">
                    <span class="reaction-label">员工</span>
                    <span class="reaction-text">"那我要等到什么时候？"</span>
                  </div>
                  <div class="manager-response">
                    <span class="response-label">管理者</span>
                    <span class="response-text">"我会承诺在下下次调薪前解决这个问题，同时看看有没有其他补偿方式"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Insight Footer -->
        <div class="key-insight">
          <div class="insight-icon">💡</div>
          <div class="insight-text">
            <strong>核心原则：</strong>当市场数据对员工有利时，要<strong>先承认再解释</strong>。坦诚面对数据比回避更能赢得信任，而解释约束条件是为了让员工理解不是意愿问题而是现实限制。
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
