/**
 * Slide 41: 应对"AI的数据准吗？"
 * Content Page - Handling Objection 3: AI Data Accuracy
 */

const slideConfig = {
  type: 'content',
  index: 41,
  title: '应对"AI的数据准吗？"'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

// 员工这句话背后的意思
const employeeMeaning = [
  '"我不相信这个结果，我不知道系统用了什么数据"',
  '"万一数据错了，我的调薪不是也跟着错了吗？"'
];

// AI数据来源
const dataSources = [
  { label: '第三方薪酬调研', desc: '年度数据，有滞后性' },
  { label: '内部HR系统', desc: '实时，但只反映内部情况' },
  { label: '公开薪资数据', desc: '样本偏差问题' }
];

// 数据局限
const dataLimits = [
  '市场数据是"平均数"，不代表你的真实市场价',
  '历史数据不代表未来市场趋势',
  '内部数据不包含员工不可量化的贡献'
];

// 四步法
const fourSteps = [
  {
    step: '第一步：倾听',
    content: '"你担心的是系统的数据能不能准确反映你的价值。"',
    note: '确认问题'
  },
  {
    step: '第二步：共情',
    content: '"这个担心是合理的。数据确实不是完美的，任何系统都有它的局限性。"',
    note: '承认局限'
  },
  {
    step: '第三步：解释',
    content: '"我用的数据有两部分：市场的参照数据（第三方调研，覆盖200多家公司）和你的个人数据（绩效、晋升记录、项目贡献）。两个数据加在一起，才是最终调薪的依据。"',
    note: '说明来源'
  },
  {
    step: '第四步：承诺',
    content: '"如果你觉得你的某项数据不对，或者你有其他公司的offer作为参照，我可以提交给HR做重新审核。"',
    note: '开放申诉'
  }
];

// 关键点
const keyPoint = '数据是参考，不是判决；人，才是最终的责任承担者';

function render() {
  return `
    <div class="slide" data-slide="${slideConfig.index}" style="background: ${theme.bg}; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;">
      <style>
        .slide-41 {
          width: 100%;
          height: 100%;
          padding: 24px 36px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* 页面标题 */
        .slide-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
          padding-bottom: 12px;
          border-bottom: 1px solid ${theme.light};
        }

        .slide-title {
          font-size: 26px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0;
        }

        /* 主内容区 */
        .main-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 18px;
          flex: 1;
          min-height: 0;
        }

        /* 左侧区域 */
        .left-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* 卡片通用样式 */
        .card {
          background: white;
          border-radius: 12px;
          padding: 14px 16px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .card-title {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .card-title::before {
          content: '';
          width: 3px;
          height: 12px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* 员工意思卡片 */
        .employee-card {
          border-left: 3px solid ${theme.accent};
          background: ${theme.accent}08;
        }

        .employee-quote {
          font-size: 12px;
          color: ${theme.secondary};
          line-height: 1.6;
          margin-bottom: 8px;
          font-style: italic;
        }

        .employee-quote:last-child {
          margin-bottom: 0;
        }

        .employee-hint {
          font-size: 11px;
          color: ${theme.accent};
          font-weight: 500;
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px dashed ${theme.light};
        }

        /* 数据来源与局限 */
        .data-section {
          flex: 1;
        }

        .data-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .data-sources, .data-limits {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .section-label {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 4px;
        }

        .source-item, .limit-item {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .source-item::before {
          content: '•';
          color: ${theme.accent};
          font-weight: bold;
        }

        .limit-item::before {
          content: '△';
          color: ${theme.primary};
          font-size: 9px;
          margin-top: 1px;
        }

        /* 右侧区域：四步法 */
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .steps-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .steps-title {
          font-size: 14px;
          font-weight: 600;
          color: ${theme.primary};
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .steps-card {
          flex: 1;
          background: white;
          border-radius: 12px;
          padding: 14px 16px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .step-item {
          display: flex;
          gap: 12px;
          padding: 10px 12px;
          background: ${theme.bg};
          border-radius: 8px;
          transition: transform 0.2s ease;
        }

        .step-item:hover {
          transform: translateX(4px);
        }

        .step-num {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: ${theme.primary};
          color: white;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-item:nth-child(2) .step-num { background: ${theme.accent}; }
        .step-item:nth-child(3) .step-num { background: ${theme.secondary}; }
        .step-item:nth-child(4) .step-num { background: ${theme.primary}80; }

        .step-content {
          flex: 1;
          min-width: 0;
        }

        .step-title {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 4px;
        }

        .step-item:nth-child(2) .step-title { color: ${theme.accent}; }
        .step-item:nth-child(3) .step-title { color: ${theme.secondary}; }
        .step-item:nth-child(4) .step-title { color: ${theme.primary}80; }

        .step-text {
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .step-note {
          font-size: 9px;
          color: ${theme.accent};
          font-weight: 500;
          margin-top: 4px;
        }

        /* 关键点 */
        .key-takeaway {
          margin-top: 12px;
          padding: 14px 20px;
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 10px;
          text-align: center;
        }

        .key-label {
          font-size: 10px;
          color: white;
          opacity: 0.8;
          margin-bottom: 4px;
        }

        .key-text {
          font-size: 14px;
          color: white;
          font-weight: 600;
        }

        /* 装饰 */
        .deco-dots {
          position: absolute;
          top: 20px;
          right: 30px;
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

        .slide-41 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-41">
        <!-- 装饰 -->
        <div class="deco-dots">
          <div class="deco-dot"></div>
          <div class="deco-dot"></div>
          <div class="deco-dot"></div>
        </div>

        <!-- 页面标题 -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
        </div>

        <!-- 主内容区 -->
        <div class="main-content">
          <!-- 左侧：员工意思 + 数据来源与局限 -->
          <div class="left-column">
            <!-- 员工这句话背后的意思 -->
            <div class="card employee-card">
              <div class="card-title">员工这句话背后的意思</div>
              ${employeeMeaning.map(q => `
                <div class="employee-quote">${q}</div>
              `).join('')}
              <div class="employee-hint">潜台词：我需要知道这个系统的可信度</div>
            </div>

            <!-- 数据来源与局限 -->
            <div class="card data-section">
              <div class="card-title">AI薪酬数据的来源与局限</div>
              <div class="data-grid">
                <div class="data-sources">
                  <div class="section-label">数据来源</div>
                  ${dataSources.map(s => `
                    <div class="source-item">
                      <span><strong>${s.label}</strong>：${s.desc}</span>
                    </div>
                  `).join('')}
                </div>
                <div class="data-limits">
                  <div class="section-label">数据局限</div>
                  ${dataLimits.map(l => `
                    <div class="limit-item">${l}</div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：四步法 -->
          <div class="right-column">
            <div class="steps-header">
              <div class="steps-title">正确的回应——四步法</div>
            </div>
            <div class="steps-card">
              ${fourSteps.map((step, idx) => `
                <div class="step-item">
                  <div class="step-num">${idx + 1}</div>
                  <div class="step-content">
                    <div class="step-title">${step.step}</div>
                    <div class="step-text">${step.content}</div>
                    <div class="step-note">${step.note}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 关键点 -->
        <div class="key-takeaway">
          <div class="key-label">关键点</div>
          <div class="key-text">${keyPoint}</div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
