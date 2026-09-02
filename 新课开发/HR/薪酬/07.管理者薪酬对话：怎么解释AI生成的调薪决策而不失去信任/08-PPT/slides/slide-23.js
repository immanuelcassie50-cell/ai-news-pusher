/**
 * Slide 23: 三步信任重建法：第二步——逻辑呈现
 * Content Page - Logic presentation for trust rebuilding
 */

const slideConfig = {
  type: 'content',
  index: 23,
  title: '三步信任重建法：第二步——逻辑呈现'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

// 为什么逻辑重要
const whyLogicMatters = [
  { text: '让员工看到决策的推导过程' },
  { text: '把"被通知"变成"被说服"' },
  { text: '减少"凭什么"的质疑' }
];

// 四个要素
const fourElements = [
  { num: '1', title: '数据来源', desc: '这个数字从哪里来的', detail: '市场数据/绩效数据/带宽政策' },
  { num: '2', title: '推导过程', desc: '数据怎么变成这个结果的', detail: '先看X，再看Y，最后Z' },
  { num: '3', title: '判断依据', desc: '人工判断考虑了哪些因素', detail: '业务考量/团队平衡/特殊贡献' },
  { num: '4', title: '结果确认', desc: '最终数字是多少，审批流程是怎样的', detail: '系统建议+管理者上报' }
];

// 话术模板
const templateLines = [
  { label: '因为', content: '你的薪资比市场低了15%', note: '（数据来源）' },
  { label: '所以', content: '系统建议调薪12%来缩小差距', note: '（推导）' },
  { label: '我又', content: '结合你去年带了两个关键项目', note: '（判断）' },
  { label: '最终', content: '这是系统建议加我的上报', note: '（结果）' }
];

function render() {
  return `
    <div class="slide" data-slide="${slideConfig.index}" style="background: ${theme.bg}; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;">
      <style>
        .slide-23 {
          width: 100%;
          height: 100%;
          padding: 36px 50px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .slide-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .slide-title {
          font-size: 30px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 6px 0;
        }

        .slide-subtitle {
          font-size: 13px;
          color: ${theme.secondary};
          opacity: 0.7;
        }

        .core-concept {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 12px 24px;
          background: linear-gradient(135deg, ${theme.primary}10 0%, ${theme.accent}08 100%);
          border-radius: 10px;
          margin-bottom: 20px;
          border-left: 4px solid ${theme.primary};
        }

        .core-concept-icon {
          font-size: 18px;
        }

        .core-concept-text {
          font-size: 15px;
          color: ${theme.secondary};
          font-weight: 500;
        }

        .core-concept-text strong {
          color: ${theme.primary};
        }

        /* 为什么逻辑重要 */
        .why-section {
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 14px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-title::before {
          content: '';
          width: 4px;
          height: 14px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        .why-items {
          display: flex;
          gap: 16px;
        }

        .why-item {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px ${theme.secondary}10;
        }

        .why-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: ${theme.light}40;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        .why-text {
          font-size: 13px;
          color: ${theme.secondary};
          line-height: 1.3;
        }

        /* 四个要素 - 流程图 */
        .elements-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }

        .flow-container {
          display: flex;
          align-items: stretch;
          gap: 12px;
          flex: 1;
        }

        .flow-step {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 12px;
          padding: 16px;
          position: relative;
          box-shadow: 0 2px 8px ${theme.secondary}10;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .flow-step:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px ${theme.secondary}15;
        }

        .flow-step::after {
          content: '';
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 10px solid ${theme.light};
        }

        .flow-step:last-child::after {
          display: none;
        }

        .step-number {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: ${theme.primary};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .step-title {
          font-size: 15px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 6px;
        }

        .step-desc {
          font-size: 12px;
          color: ${theme.secondary};
          opacity: 0.8;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .step-detail {
          font-size: 11px;
          color: white;
          background: ${theme.accent}90;
          padding: 4px 8px;
          border-radius: 4px;
          margin-top: auto;
        }

        /* 话术模板 */
        .template-section {
          background: linear-gradient(135deg, ${theme.primary}05 0%, ${theme.bg} 100%);
          border: 2px solid ${theme.light};
          border-radius: 14px;
          padding: 18px 24px;
          position: relative;
        }

        .template-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .template-icon {
          font-size: 20px;
        }

        .template-title {
          font-size: 15px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .template-badge {
          margin-left: auto;
          font-size: 11px;
          padding: 4px 10px;
          background: ${theme.primary}15;
          color: ${theme.primary};
          border-radius: 4px;
          font-weight: 600;
        }

        .template-content {
          background: white;
          border-radius: 10px;
          padding: 16px 20px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
        }

        .template-intro {
          font-size: 13px;
          color: ${theme.secondary};
          margin-bottom: 12px;
          line-height: 1.5;
        }

        .template-intro strong {
          color: ${theme.primary};
        }

        .template-lines {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .template-line {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: ${theme.bg};
          border-radius: 8px;
          border-left: 3px solid;
        }

        .template-line:nth-child(1) { border-left-color: ${theme.primary}; }
        .template-line:nth-child(2) { border-left-color: ${theme.accent}; }
        .template-line:nth-child(3) { border-left-color: ${theme.secondary}; }
        .template-line:nth-child(4) { border-left-color: ${theme.primary}; }

        .template-label {
          font-size: 12px;
          font-weight: 700;
          color: ${theme.primary};
          min-width: 36px;
        }

        .template-text {
          font-size: 12px;
          color: ${theme.secondary};
        }

        .template-note {
          font-size: 10px;
          color: ${theme.accent};
          opacity: 0.8;
        }
      </style>

      <div class="slide-header">
        <h1 class="slide-title">${slideConfig.title}</h1>
        <p class="slide-subtitle">用"因为…所以…"的结构说明决策依据</p>
      </div>

      <div class="core-concept">
        <span class="core-concept-icon">💡</span>
        <span class="core-concept-text"><strong>核心理念</strong>：用逻辑说服，而不是用权威压制</span>
      </div>

      <div class="why-section">
        <div class="section-title">为什么逻辑重要</div>
        <div class="why-items">
          ${whyLogicMatters.map(item => `
            <div class="why-item">
              <div class="why-icon">✓</div>
              <span class="why-text">${item.text}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="elements-section">
        <div class="section-title">逻辑叙事的四个要素</div>
        <div class="flow-container">
          ${fourElements.map(elem => `
            <div class="flow-step">
              <div class="step-number">${elem.num}</div>
              <div class="step-title">${elem.title}</div>
              <div class="step-desc">${elem.desc}</div>
              <div class="step-detail">${elem.detail}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="template-section">
        <div class="template-header">
          <span class="template-icon">💬</span>
          <span class="template-title">话术模板</span>
          <span class="template-badge">直接可用</span>
        </div>
        <div class="template-content">
          <p class="template-intro">
            "<strong>你的调薪是12%</strong>，这个数字是这样来的："
          </p>
          <div class="template-lines">
            ${templateLines.map(line => `
              <div class="template-line">
                <span class="template-label">${line.label}</span>
                <span class="template-text">${line.content}</span>
                <span class="template-note">${line.note}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
