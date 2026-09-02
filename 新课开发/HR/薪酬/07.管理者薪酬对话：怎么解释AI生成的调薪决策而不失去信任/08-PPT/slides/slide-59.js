/**
 * Slide 59: 场景五：员工质疑AI决策（信任危机对话）
 * Content Page - Scenario 5: Employee questions AI decision
 */

const slideConfig = {
  type: 'content',
  index: 59,
  title: '场景五：员工质疑AI决策'
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
        .slide-59 {
          width: 100%;
          height: 100%;
          padding: 18px 30px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .slide-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
          padding-bottom: 10px;
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
          font-size: 22px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0;
        }

        /* Main Content Area */
        .main-content {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          grid-template-rows: auto auto;
          gap: 12px;
          flex: 1;
          min-height: 0;
        }

        /* Scenario Background Card */
        .scenario-bg-card {
          grid-column: 1;
          grid-row: 1;
          background: white;
          border-radius: 12px;
          padding: 14px 16px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          border-left: 4px solid ${theme.accent};
        }

        .card-title {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.secondary};
          margin: 0 0 10px 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .card-title .icon {
          font-size: 13px;
        }

        .bg-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 4px 0;
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .bg-item .label {
          font-weight: 600;
          color: ${theme.primary};
          min-width: 46px;
          flex-shrink: 0;
        }

        .difficulty-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 8px;
          padding: 4px 8px;
          background: ${theme.bg};
          border-radius: 6px;
          font-size: 10px;
          color: ${theme.secondary};
        }

        .difficulty-badge .stars {
          color: ${theme.accent};
          letter-spacing: 1px;
        }

        .core-challenge {
          margin-top: 8px;
          padding: 8px 10px;
          background: ${theme.primary}08;
          border-radius: 6px;
          border-left: 2px solid ${theme.primary}40;
        }

        .core-challenge-text {
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .core-challenge-text strong {
          color: ${theme.primary};
        }

        /* Dialogue Points Card */
        .dialogue-points-card {
          grid-column: 2;
          grid-row: 1;
          background: white;
          border-radius: 12px;
          padding: 14px 16px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          border-left: 4px solid ${theme.primary};
        }

        .points-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 7px 9px;
          background: ${theme.bg};
          border-radius: 8px;
        }

        .point-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          background: ${theme.primary};
          border-radius: 50%;
          font-size: 9px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .point-item:nth-child(2) .point-number { background: ${theme.accent}; }
        .point-item:nth-child(3) .point-number { background: ${theme.secondary}; }
        .point-item:nth-child(4) .point-number { background: ${theme.primary}80; }

        .point-text {
          flex: 1;
          font-size: 11px;
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
          padding: 16px 20px;
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
          margin-bottom: 10px;
        }

        .template-icon {
          font-size: 15px;
        }

        .template-title {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0;
        }

        .template-tag {
          margin-left: auto;
          padding: 2px 7px;
          background: ${theme.accent}15;
          color: ${theme.accent};
          border-radius: 4px;
          font-size: 9px;
          font-weight: 600;
        }

        .template-content {
          background: white;
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.7;
          box-shadow: 0 1.5px 6px ${theme.secondary}06;
        }

        .template-content .highlight {
          color: ${theme.primary};
          font-weight: 600;
        }

        .template-content .em {
          color: ${theme.accent};
          font-style: italic;
        }

        /* Reactions Section */
        .reactions-section {
          grid-column: 1 / -1;
          background: white;
          border-radius: 12px;
          padding: 12px 16px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .reactions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 8px;
        }

        .reaction-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .reaction-header {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          font-weight: 600;
          color: ${theme.secondary};
        }

        .reaction-q {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 7px 10px;
          background: ${theme.bg};
          border-radius: 6px;
          font-size: 10px;
          color: ${theme.secondary};
          border: 1px solid ${theme.light};
        }

        .reaction-q .emoji {
          font-size: 12px;
        }

        .reaction-arrow {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 9px;
          color: ${theme.accent};
          font-weight: 500;
          margin-left: 6px;
        }

        .reaction-arrow::before {
          content: '↓';
          font-weight: bold;
        }

        .reaction-response {
          padding: 5px 9px;
          background: ${theme.primary}08;
          border-radius: 5px;
          font-size: 10px;
          color: ${theme.primary};
          font-weight: 500;
          margin-left: 14px;
          border-left: 2px solid ${theme.primary}30;
          line-height: 1.5;
        }

        /* Soft decorations */
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.3;
        }

        .deco-1 {
          width: 50px;
          height: 50px;
          background: ${theme.light}40;
          top: -10px;
          right: 40px;
        }

        .deco-2 {
          width: 25px;
          height: 25px;
          background: ${theme.accent}25;
          bottom: 12px;
          right: 60px;
        }

        .slide-59 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-59">
        <!-- Decorative elements -->
        <div class="deco-circle deco-1"></div>
        <div class="deco-circle deco-2"></div>

        <!-- Header -->
        <div class="slide-header">
          <div class="scenario-badge">⚠️</div>
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
              <span>信任危机对话</span>
            </div>
            <div class="bg-item">
              <span class="label">难度：</span>
              <span class="difficulty-badge">
                <span class="stars">★★★★★</span>
                <span>极高</span>
              </span>
            </div>
            <div class="core-challenge">
              <span class="core-challenge-text">
                <strong>核心挑战：</strong>员工不信任AI系统的公正性，认为管理者只是系统的"代言人"
              </span>
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
                  <span class="key">先处理情绪：</span>员工质疑AI时，先认可情绪，不要急于解释
                </div>
              </div>
              <div class="point-item">
                <div class="point-number">2</div>
                <div class="point-text">
                  <span class="key">承认AI局限：</span>AI确实有局限性，这不是羞耻的事
                </div>
              </div>
              <div class="point-item">
                <div class="point-number">3</div>
                <div class="point-text">
                  <span class="key">说明人工做了什么：</span>管理者不是甩手掌柜，是审核者
                </div>
              </div>
              <div class="point-item">
                <div class="point-number">4</div>
                <div class="point-text">
                  <span class="key">邀请监督：</span>让员工看到审核过程，证明透明度
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
              "你提到不信任AI的决定，我理解你的担心。<span class="em">这个担心是合理的</span>，因为AI确实不是完美的——它用的是历史数据和规则，有局限性。但我想让你知道：这次调薪结果不是AI直接决定的，是我<span class="highlight">审核之后确认</span>的。我的审核内容包括：你的绩效数据是否准确，市场数据是否适用，预算分配是否合理。如果我觉得AI的结果不对，我会打回重走。至于AI有没有偏见——这个问题问得好。我不能保证AI一定没有偏见，但我想让你看我的<span class="highlight">审核记录</span>，你可以看到我对这个结果的判断依据。"
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
                  <span>"我怎么知道你的审核是真的？"</span>
                </div>
                <div class="reaction-arrow">回应方式</div>
                <div class="reaction-response">"我可以把我的审核意见发给你看，或者你可以找HR做第三方确认"</div>
              </div>
              <div class="reaction-item">
                <div class="reaction-header">
                  <span>⚡</span>
                  <span>"AI有偏见的话谁来负责？"</span>
                </div>
                <div class="reaction-arrow">回应方式</div>
                <div class="reaction-response">"最终负责人是我——因为是我审批的。如果AI的建议有问题，我需要向员工解释清楚"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
