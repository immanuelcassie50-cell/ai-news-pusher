/**
 * Slide 43: 模块五要点回顾
 * Content Page - Module 5 Summary: Handling Objections
 */

const slideConfig = {
  type: 'content',
  index: 43,
  title: '模块五要点回顾'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

// 异议处理四步法
const fourSteps = [
  {
    step: '倾听',
    keywords: '不打断、不防御',
    action: '确认理解员工的诉求'
  },
  {
    step: '共情',
    keywords: '认可情绪',
    action: '承认感受的合理性'
  },
  {
    step: '解释',
    keywords: '说事实、不甩锅',
    action: '说明决策依据和实际权限'
  },
  {
    step: '承诺',
    keywords: '具体行动',
    action: '说明下一步、时间和结果'
  }
];

// 四种典型异议
const fourObjections = [
  {
    quote: '"AI说了算，你也没权力改变？"',
    coreNeed: '管理者愿不愿意为我争取',
    strategy: '承认权限有限，但证明"争取过"'
  },
  {
    quote: '"为什么他调了我没调？"',
    coreNeed: '被公正对待',
    strategy: '不能比数字，但可以比判断逻辑'
  },
  {
    quote: '"AI的数据准吗？"',
    coreNeed: '系统可信度',
    strategy: '说明数据来源，承认局限性'
  },
  {
    quote: '"我就想知道你觉得我值多少"',
    coreNeed: '被认可、被看见',
    strategy: '管理者亲口说出你的价值判断'
  }
];

function render() {
  return `
    <div class="slide" data-slide="${slideConfig.index}" style="background: ${theme.bg}; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;">
      <style>
        .slide-43 {
          width: 100%;
          height: 100%;
          padding: 18px 30px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .slide-header {
          text-align: center;
          margin-bottom: 12px;
          padding-bottom: 10px;
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
          opacity: 0.55;
        }

        /* Main Content - 2 Columns */
        .main-content {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 14px;
          flex: 1;
          min-height: 0;
        }

        /* Section Card Base */
        .section-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        /* Section Label */
        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 10px;
        }

        .section-label .icon {
          font-size: 13px;
        }

        .section-label::before {
          content: '';
          width: 3px;
          height: 13px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* Left Column - 4 Steps */
        .left-column {
          display: flex;
          flex-direction: column;
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .step-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          padding: 8px 10px;
          background: ${theme.bg};
          border-radius: 8px;
          border-left: 3px solid transparent;
          transition: transform 0.2s ease;
        }

        .step-item:hover {
          transform: translateX(3px);
        }

        .step-item:nth-child(1) { border-left-color: ${theme.primary}; }
        .step-item:nth-child(2) { border-left-color: ${theme.accent}; }
        .step-item:nth-child(3) { border-left-color: ${theme.secondary}; }
        .step-item:nth-child(4) { border-left-color: ${theme.primary}80; }

        .step-number {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: ${theme.primary};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-item:nth-child(2) .step-number { background: ${theme.accent}; }
        .step-item:nth-child(3) .step-number { background: ${theme.secondary}; }
        .step-item:nth-child(4) .step-number { background: ${theme.primary}80; }

        .step-content {
          flex: 1;
          min-width: 0;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 3px;
        }

        .step-name {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .step-item:nth-child(2) .step-name { color: ${theme.accent}; }
        .step-item:nth-child(3) .step-name { color: ${theme.secondary}; }
        .step-item:nth-child(4) .step-name { color: ${theme.primary}80; }

        .step-keywords {
          font-size: 9px;
          color: white;
          background: ${theme.secondary}30;
          padding: 2px 6px;
          border-radius: 3px;
        }

        .step-action {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.35;
          opacity: 0.85;
        }

        /* Right Column - 4 Objections */
        .right-column {
          display: flex;
          flex-direction: column;
        }

        .objections-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .objection-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 9px 11px;
          background: ${theme.bg};
          border-radius: 8px;
          border-top: 2px solid transparent;
        }

        .objection-item:nth-child(1) { border-top-color: ${theme.primary}; }
        .objection-item:nth-child(2) { border-top-color: ${theme.accent}; }
        .objection-item:nth-child(3) { border-top-color: ${theme.secondary}; }
        .objection-item:nth-child(4) { border-top-color: ${theme.primary}60; }

        .objection-quote {
          font-size: 10.5px;
          color: ${theme.primary};
          font-weight: 500;
          font-style: italic;
          line-height: 1.3;
        }

        .objection-item:nth-child(2) .objection-quote { color: ${theme.accent}; }
        .objection-item:nth-child(3) .objection-quote { color: ${theme.secondary}; }
        .objection-item:nth-child(4) .objection-quote { color: ${theme.primary}80; }

        .objection-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
        }

        .objection-need {
          color: ${theme.secondary};
          opacity: 0.7;
        }

        .objection-need::before {
          content: '→';
          margin-right: 3px;
          opacity: 0.5;
        }

        .objection-strategy {
          color: ${theme.accent};
          font-weight: 500;
        }

        /* Core Insight Footer */
        .core-insight {
          margin-top: 10px;
          padding: 12px 16px;
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}06 100%);
          border-radius: 10px;
          border-left: 4px solid ${theme.accent};
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .insight-icon {
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

        .insight-content {
          flex: 1;
        }

        .insight-label {
          font-size: 9px;
          font-weight: 600;
          color: ${theme.accent};
          margin-bottom: 3px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .insight-text {
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .insight-text strong {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          top: 12px;
          right: 28px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.3;
        }

        .deco-dots {
          position: absolute;
          bottom: 14px;
          right: 36px;
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

        .slide-43 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-43">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Module 5 Key Points Summary</p>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Left Column: 4 Steps -->
          <div class="section-card left-column">
            <div class="section-label">
              <span class="icon">🎯</span>
              <span>异议处理四步法</span>
            </div>

            <div class="steps-list">
              ${fourSteps.map((step, idx) => `
                <div class="step-item">
                  <div class="step-number">${idx + 1}</div>
                  <div class="step-content">
                    <div class="step-header">
                      <span class="step-name">${step.step}</span>
                      <span class="step-keywords">${step.keywords}</span>
                    </div>
                    <div class="step-action">${step.action}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Right Column: 4 Objections -->
          <div class="section-card right-column">
            <div class="section-label">
              <span class="icon">💬</span>
              <span>四种典型异议的应对要点</span>
            </div>

            <div class="objections-list">
              ${fourObjections.map((obj, idx) => `
                <div class="objection-item">
                  <div class="objection-quote">${obj.quote}</div>
                  <div class="objection-meta">
                    <span class="objection-need">${obj.coreNeed}</span>
                    <span class="objection-strategy">${obj.strategy}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Core Insight Footer -->
        <div class="core-insight">
          <div class="insight-icon">💡</div>
          <div class="insight-content">
            <div class="insight-label">模块五核心认知</div>
            <div class="insight-text">
              异议不是"麻烦"，是员工在告诉你"我需要被重视"——每一次处理异议，都是一次<strong>信任存款</strong>的机会
            </div>
          </div>
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
