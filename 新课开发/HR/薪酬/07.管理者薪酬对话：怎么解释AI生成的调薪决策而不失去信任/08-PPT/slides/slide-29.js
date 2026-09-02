/**
 * Slide 29: 三步信任重建法框架
 * Content Page - Trust Rebuilding Framework Overview
 */

const slideConfig = {
  type: 'content',
  index: 29,
  title: '三步信任重建法框架'
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
        .slide-29 {
          width: 100%;
          height: 100%;
          padding: 32px 44px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .slide-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .slide-title {
          font-size: 28px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 6px 0;
        }

        .slide-subtitle {
          font-size: 13px;
          color: ${theme.secondary};
          opacity: 0.65;
        }

        /* Three Steps Flow */
        .steps-container {
          display: flex;
          gap: 20px;
          flex: 1;
          align-items: stretch;
          padding: 0 10px;
        }

        /* Step Card */
        .step-card {
          flex: 1;
          background: white;
          border-radius: 16px;
          padding: 22px 20px;
          box-shadow: 0 3px 12px ${theme.secondary}10;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 20px ${theme.secondary}15;
        }

        /* Step number badge */
        .step-number {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 700;
          color: white;
        }

        .step-card:nth-child(1) .step-number {
          background: ${theme.primary};
        }

        .step-card:nth-child(2) .step-number {
          background: ${theme.accent};
        }

        .step-card:nth-child(3) .step-number {
          background: ${theme.secondary};
        }

        /* Step Title */
        .step-title {
          font-size: 18px;
          font-weight: 700;
          color: ${theme.primary};
          text-align: center;
          margin: 8px 0 6px 0;
          padding-top: 8px;
        }

        .step-card:nth-child(2) .step-title {
          color: ${theme.accent};
        }

        .step-card:nth-child(3) .step-title {
          color: ${theme.secondary};
        }

        /* Step Subtitle */
        .step-subtitle {
          font-size: 12px;
          color: ${theme.secondary};
          opacity: 0.6;
          text-align: center;
          margin-bottom: 16px;
        }

        /* Divider */
        .step-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, ${theme.light}, transparent);
          margin-bottom: 14px;
        }

        /* Core Idea Box */
        .core-idea {
          background: ${theme.bg};
          border-radius: 10px;
          padding: 12px 14px;
          margin-bottom: 14px;
          border-left: 3px solid;
        }

        .step-card:nth-child(1) .core-idea {
          border-left-color: ${theme.primary};
        }

        .step-card:nth-child(2) .core-idea {
          border-left-color: ${theme.accent};
        }

        .step-card:nth-child(3) .core-idea {
          border-left-color: ${theme.secondary};
        }

        .core-idea-label {
          font-size: 10px;
          font-weight: 600;
          color: ${theme.secondary};
          opacity: 0.5;
          margin-bottom: 4px;
        }

        .core-idea-text {
          font-size: 13px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .core-idea-text strong {
          color: ${theme.primary};
        }

        .step-card:nth-child(2) .core-idea-text strong {
          color: ${theme.accent};
        }

        .step-card:nth-child(3) .core-idea-text strong {
          color: ${theme.secondary};
        }

        /* Key Behavior */
        .key-behavior {
          margin-top: auto;
          padding: 10px 12px;
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}05 100%);
          border-radius: 8px;
        }

        .step-card:nth-child(2) .key-behavior {
          background: linear-gradient(135deg, ${theme.accent}08 0%, ${theme.light}50 100%);
        }

        .step-card:nth-child(3) .key-behavior {
          background: linear-gradient(135deg, ${theme.secondary}08 0%, ${theme.light}50 100%);
        }

        .key-behavior-label {
          font-size: 10px;
          font-weight: 600;
          color: ${theme.secondary};
          opacity: 0.6;
          margin-bottom: 4px;
        }

        .key-behavior-text {
          font-size: 12px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        /* Arrow connectors between cards */
        .arrow-connector {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 24px;
          color: ${theme.light};
          z-index: 10;
        }

        .arrow-connector.left {
          left: -18px;
        }

        .arrow-connector.right {
          right: -18px;
        }

        /* Core Formula Section */
        .formula-section {
          margin-top: 20px;
          padding: 18px 28px;
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}08 50%, ${theme.secondary}08 100%);
          border-radius: 14px;
          text-align: center;
        }

        .formula-label {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.secondary};
          opacity: 0.5;
          margin-bottom: 8px;
        }

        .formula-title {
          font-size: 18px;
          font-weight: 700;
          color: ${theme.primary};
          margin-bottom: 10px;
        }

        .formula-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .formula-equal {
          font-size: 28px;
          font-weight: 700;
          color: ${theme.accent};
        }

        .formula-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 2px 6px ${theme.secondary}08;
        }

        .formula-item-name {
          font-size: 14px;
          font-weight: 600;
          color: ${theme.secondary};
        }

        .formula-item-desc {
          font-size: 11px;
          color: ${theme.secondary};
          opacity: 0.6;
        }

        .formula-plus {
          font-size: 20px;
          color: ${theme.light};
          font-weight: 300;
        }

        /* Decorative elements */
        .decor-top-right {
          position: absolute;
          top: 20px;
          right: 30px;
          display: flex;
          gap: 6px;
        }

        .decor-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          opacity: 0.3;
        }

        .decor-dot:nth-child(1) { background: ${theme.primary}; }
        .decor-dot:nth-child(2) { background: ${theme.accent}; }
        .decor-dot:nth-child(3) { background: ${theme.secondary}; }
      </style>

      <div class="slide-header">
        <h1 class="slide-title">${slideConfig.title}</h1>
        <p class="slide-subtitle">Trust Rebuilding Framework Overview</p>
      </div>

      <div class="steps-container">
        <!-- Step 1: 透明披露 -->
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-title">透明披露</div>
          <div class="step-subtitle">Transparency</div>
          <div class="step-divider"></div>
          <div class="core-idea">
            <div class="core-idea-label">核心理念</div>
            <div class="core-idea-text"><strong>透明是信任的第一块砖</strong></div>
          </div>
          <div class="key-behavior">
            <div class="key-behavior-label">关键行为</div>
            <div class="key-behavior-text">不等员工问，主动说</div>
          </div>
        </div>

        <!-- Step 2: 逻辑呈现 -->
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-title">逻辑呈现</div>
          <div class="step-subtitle">Logic</div>
          <div class="step-divider"></div>
          <div class="core-idea">
            <div class="core-idea-label">核心理念</div>
            <div class="core-idea-text">让员工从<strong>"被通知"变成"被说服"</strong></div>
          </div>
          <div class="key-behavior">
            <div class="key-behavior-label">关键行为</div>
            <div class="key-behavior-text">展示完整的推导过程</div>
          </div>
        </div>

        <!-- Step 3: 情感连接 -->
        <div class="step-card">
          <div class="step-number">3</div>
          <div class="step-title">情感连接</div>
          <div class="step-subtitle">Emotion</div>
          <div class="step-divider"></div>
          <div class="core-idea">
            <div class="core-idea-label">核心理念</div>
            <div class="core-idea-text"><strong>薪酬对话不只是谈数字，是谈关系</strong></div>
          </div>
          <div class="key-behavior">
            <div class="key-behavior-label">关键行为</div>
            <div class="key-behavior-text">让员工感觉被看见、被记住</div>
          </div>
        </div>
      </div>

      <div class="formula-section">
        <div class="formula-label">核心公式</div>
        <div class="formula-title">信任 = 透明（讲清楚）+ 逻辑（说服）+ 情感（连接）</div>
        <div class="formula-content">
          <div class="formula-item">
            <span class="formula-item-name">透明</span>
            <span class="formula-item-desc">讲清楚</span>
          </div>
          <span class="formula-plus">+</span>
          <div class="formula-item">
            <span class="formula-item-name">逻辑</span>
            <span class="formula-item-desc">说服</span>
          </div>
          <span class="formula-plus">+</span>
          <div class="formula-item">
            <span class="formula-item-name">情感</span>
            <span class="formula-item-desc">连接</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
