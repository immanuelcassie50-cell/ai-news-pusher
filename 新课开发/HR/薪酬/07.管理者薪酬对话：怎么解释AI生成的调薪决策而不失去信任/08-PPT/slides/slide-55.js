/**
 * Slide 55: 场景一：年度调薪解读（常规对话）
 * Content Page - Scenario 1: Annual salary adjustment interpretation
 */

const slideConfig = {
  type: 'content',
  index: 55,
  title: '场景一：年度调薪解读（常规对话）'
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
        .slide-55 {
          width: 100%;
          height: 100%;
          padding: 20px 32px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .slide-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
          padding-bottom: 12px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .scenario-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 10px;
          color: white;
          font-size: 20px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .slide-title {
          font-size: 24px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0;
        }

        /* Main Content Area */
        .main-content {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          grid-template-rows: auto auto;
          gap: 14px;
          flex: 1;
          min-height: 0;
        }

        /* Scenario Background Card */
        .scenario-bg-card {
          grid-column: 1;
          grid-row: 1;
          background: white;
          border-radius: 12px;
          padding: 16px 18px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          border-left: 4px solid ${theme.accent};
        }

        .card-title {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.secondary};
          margin: 0 0 12px 0;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .card-title .icon {
          font-size: 14px;
        }

        .bg-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 5px 0;
          font-size: 12px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .bg-item .label {
          font-weight: 600;
          color: ${theme.primary};
          min-width: 50px;
          flex-shrink: 0;
        }

        .difficulty-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 10px;
          padding: 5px 10px;
          background: ${theme.bg};
          border-radius: 6px;
          font-size: 11px;
          color: ${theme.secondary};
        }

        .difficulty-badge .stars {
          color: ${theme.accent};
          letter-spacing: 1px;
        }

        /* Dialogue Points Card */
        .dialogue-points-card {
          grid-column: 2;
          grid-row: 1;
          background: white;
          border-radius: 12px;
          padding: 16px 18px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          border-left: 4px solid ${theme.primary};
        }

        .points-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 10px;
          background: ${theme.bg};
          border-radius: 8px;
        }

        .point-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background: ${theme.primary};
          border-radius: 50%;
          font-size: 10px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .point-item:nth-child(2) .point-number { background: ${theme.accent}; }
        .point-item:nth-child(3) .point-number { background: ${theme.secondary}; }
        .point-item:nth-child(4) .point-number { background: ${theme.primary}80; }

        .point-text {
          flex: 1;
          font-size: 11.5px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .point-text .key {
          font-weight: 600;
          color: ${theme.primary};
        }

        /* Template Card - Full Width */
        .template-card {
          grid-column: 1 / -1;
          grid-row: 2;
          background: linear-gradient(135deg, ${theme.primary}06 0%, ${theme.bg} 100%);
          border: 2px solid ${theme.primary}20;
          border-radius: 14px;
          padding: 18px 22px;
          position: relative;
          overflow: hidden;
        }

        .template-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, ${theme.primary} 0%, ${theme.accent} 100%);
        }

        .template-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .template-icon {
          font-size: 16px;
        }

        .template-title {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0;
        }

        .template-tag {
          margin-left: auto;
          padding: 3px 8px;
          background: ${theme.accent}15;
          color: ${theme.accent};
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
        }

        .template-content {
          background: white;
          border-radius: 10px;
          padding: 14px 18px;
          font-size: 12px;
          color: ${theme.secondary};
          line-height: 1.7;
          box-shadow: 0 1.5px 6px ${theme.secondary}06;
        }

        .template-content .highlight {
          color: ${theme.primary};
          font-weight: 600;
        }

        .template-content .track {
          display: inline-flex;
          align-items: center;
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 10.5px;
          font-weight: 500;
        }

        .track-ai {
          background: ${theme.accent}15;
          color: ${theme.accent};
        }

        .track-human {
          background: ${theme.primary}15;
          color: ${theme.primary};
        }

        /* Reactions Section */
        .reactions-section {
          grid-column: 1 / -1;
          background: white;
          border-radius: 12px;
          padding: 14px 18px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .reactions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 10px;
        }

        .reaction-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .reaction-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: ${theme.secondary};
        }

        .reaction-q {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: ${theme.bg};
          border-radius: 6px;
          font-size: 11px;
          color: ${theme.secondary};
          border: 1px solid ${theme.light};
        }

        .reaction-q .emoji {
          font-size: 13px;
        }

        .reaction-arrow {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          color: ${theme.accent};
          font-weight: 500;
          margin-left: 8px;
        }

        .reaction-arrow::before {
          content: '↓';
          font-weight: bold;
        }

        .reaction-response {
          padding: 6px 10px;
          background: ${theme.primary}08;
          border-radius: 5px;
          font-size: 10.5px;
          color: ${theme.primary};
          font-weight: 500;
          margin-left: 16px;
          border-left: 2px solid ${theme.primary}30;
        }

        /* Soft decorations */
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.35;
        }

        .deco-1 {
          width: 60px;
          height: 60px;
          background: ${theme.light}40;
          top: -15px;
          right: 50px;
        }

        .deco-2 {
          width: 30px;
          height: 30px;
          background: ${theme.accent}25;
          bottom: 15px;
          right: 80px;
        }

        .slide-55 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-55">
        <!-- Decorative elements -->
        <div class="deco-circle deco-1"></div>
        <div class="deco-circle deco-2"></div>

        <!-- Header -->
        <div class="slide-header">
          <div class="scenario-badge">📋</div>
          <h1 class="slide-title">${slideConfig.title}</h1>
        </div>

        <!-- Main Content Grid -->
        <div class="main-content">
          <!-- Scenario Background -->
          <div class="scenario-bg-card">
            <h3 class="card-title">
              <span class="icon">🎯</span>
              场景背景
            </h3>
            <div class="bg-item">
              <span class="label">类型：</span>
              <span>常规对话</span>
            </div>
            <div class="bg-item">
              <span class="label">难度：</span>
              <span class="difficulty-badge">
                <span class="stars">★☆☆☆☆</span>
                <span>低</span>
              </span>
            </div>
            <div class="bg-item" style="margin-top: 8px;">
              <span class="label">核心挑战：</span>
              <span>将标准的调薪流程和结果向员工解释清楚</span>
            </div>
          </div>

          <!-- Dialogue Points -->
          <div class="dialogue-points-card">
            <h3 class="card-title">
              <span class="icon">💬</span>
              对话要点
            </h3>
            <div class="points-list">
              <div class="point-item">
                <div class="point-number">1</div>
                <div class="point-text">
                  <span class="key">开场：</span>直接说明调薪结果，不要绕弯子
                </div>
              </div>
              <div class="point-item">
                <div class="point-number">2</div>
                <div class="point-text">
                  <span class="key">双轨说明：</span>先说市场数据（AI数据轨），再说个人表现（人工判断轨）
                </div>
              </div>
              <div class="point-item">
                <div class="point-number">3</div>
                <div class="point-text">
                  <span class="key">留出时间：</span>问员工是否有疑问
                </div>
              </div>
              <div class="point-item">
                <div class="point-number">4</div>
                <div class="point-text">
                  <span class="key">结束语：</span>表达对员工价值的认可
                </div>
              </div>
            </div>
          </div>

          <!-- Template Card -->
          <div class="template-card">
            <div class="template-header">
              <span class="template-icon">📝</span>
              <h4 class="template-title">话术模板</h4>
              <span class="template-tag">参考使用</span>
            </div>
            <div class="template-content">
              "你的年度调薪幅度是<span class="highlight">X%</span>。这个数字有两部分依据：
              <br>第一是<span class="track track-ai">市场数据</span>——我们参考了第三方薪酬调研，你的岗位在市场上的中位数是XX万，你目前是XX万，这是系统拉的客观数据。
              <br>第二是<span class="track track-human">个人表现</span>——你的绩效是A，这个评级在部门里是前10%，所以在预算范围内，我们尽量倾斜了。"
            </div>
          </div>

          <!-- Reactions Section -->
          <div class="reactions-section">
            <h3 class="card-title">
              <span class="icon">🤔</span>
              员工可能的反应
            </h3>
            <div class="reactions-grid">
              <div class="reaction-item">
                <div class="reaction-header">
                  <span>❓</span>
                  <span>"我觉得有点低了"</span>
                </div>
                <div class="reaction-arrow">回应方式</div>
                <div class="reaction-response">"我理解你的感受，这个数字在预算里已经是上限了，但我会持续关注"</div>
              </div>
              <div class="reaction-item">
                <div class="reaction-header">
                  <span>👍</span>
                  <span>"没有其他问题"</span>
                </div>
                <div class="reaction-arrow">回应方式</div>
                <div class="reaction-response">"好，如果你之后有疑问，随时可以来找我聊"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
