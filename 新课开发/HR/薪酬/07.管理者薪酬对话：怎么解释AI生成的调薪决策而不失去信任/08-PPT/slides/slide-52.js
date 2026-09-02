/**
 * Slide 52: 模块三小结：信任重建，从一次对话开始
 * Content Page - Module 3 Summary + Module 4 Preview
 */

const slideConfig = {
  type: 'content',
  index: 52,
  title: '模块三小结：信任重建，从一次对话开始'
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
        .slide-52 {
          width: 100%;
          height: 100%;
          padding: 16px 26px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .slide-header {
          text-align: center;
          margin-bottom: 10px;
          padding-bottom: 8px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .slide-title {
          font-size: 20px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 2px 0;
          line-height: 1.3;
        }

        .slide-subtitle {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.5;
        }

        /* Main Content - 2 Columns */
        .main-content {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 14px;
          flex: 1;
          min-height: 0;
        }

        /* Left Column - Core Review */
        .left-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          color: ${theme.secondary};
        }

        .section-label::before {
          content: '';
          width: 3px;
          height: 13px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* Three Steps Card */
        .steps-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          flex: 1;
        }

        .steps-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .steps-icon {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
        }

        .steps-title {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
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

        .step-number {
          width: 22px;
          height: 22px;
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

        .step-item:nth-child(2) .step-number { background: ${theme.accent}; }
        .step-item:nth-child(3) .step-number { background: ${theme.secondary}; }

        .step-content {
          flex: 1;
          min-width: 0;
        }

        .step-name {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 2px;
        }

        .step-item:nth-child(2) .step-name { color: ${theme.accent}; }
        .step-item:nth-child(3) .step-name { color: ${theme.secondary}; }

        .step-desc {
          font-size: 9.5px;
          color: ${theme.secondary};
          opacity: 0.85;
          line-height: 1.35;
        }

        /* Why Practice Section */
        .why-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .why-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .why-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.45;
        }

        .why-icon {
          font-size: 11px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Right Column - Module 4 Preview */
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .preview-card {
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}06 100%);
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          border: 1.5px solid ${theme.light};
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .preview-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .preview-icon {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: linear-gradient(135deg, ${theme.accent}, ${theme.primary});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
        }

        .preview-badge {
          font-size: 8px;
          padding: 2px 6px;
          background: ${theme.accent};
          color: white;
          border-radius: 3px;
          font-weight: 600;
          margin-left: auto;
        }

        .preview-title {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .preview-subtitle {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.7;
          margin-top: 1px;
        }

        .scenarios-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
          flex: 1;
        }

        .scenario-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 10px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 4px ${theme.secondary}06;
          transition: transform 0.2s ease;
        }

        .scenario-item:hover {
          transform: translateX(3px);
        }

        .scenario-num {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          background: ${theme.primary}15;
          color: ${theme.primary};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .scenario-item:nth-child(2) .scenario-num { background: ${theme.accent}15; color: ${theme.accent}; }
        .scenario-item:nth-child(3) .scenario-num { background: ${theme.secondary}15; color: ${theme.secondary}; }
        .scenario-item:nth-child(4) .scenario-num { background: ${theme.primary}10; color: ${theme.primary}; opacity: 0.7; }
        .scenario-item:nth-child(5) .scenario-num { background: ${theme.accent}10; color: ${theme.accent}; opacity: 0.7; }

        .scenario-text {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.3;
        }

        /* Key Quote Banner */
        .quote-banner {
          margin-top: 10px;
          padding: 10px 14px;
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .quote-icon {
          font-size: 16px;
          flex-shrink: 0;
        }

        .quote-text {
          font-size: 10px;
          color: white;
          line-height: 1.5;
          font-weight: 500;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          top: 10px;
          right: 24px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.25;
        }

        .deco-dots {
          position: absolute;
          bottom: 12px;
          right: 32px;
          display: flex;
          gap: 3px;
        }

        .deco-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          opacity: 0.15;
        }

        .deco-dot:nth-child(1) { background: ${theme.primary}; }
        .deco-dot:nth-child(2) { background: ${theme.accent}; }
        .deco-dot:nth-child(3) { background: ${theme.secondary}; }

        .slide-52 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-52">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Module 3 Summary: Trust Rebuilding Starts From One Conversation</p>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Left Column: Module 3 Core -->
          <div class="left-column">
            <div class="section-label">模块三核心回顾</div>

            <!-- Three Steps Card -->
            <div class="steps-card">
              <div class="steps-header">
                <div class="steps-icon">🔑</div>
                <span class="steps-title">三步信任重建法</span>
              </div>

              <div class="steps-list">
                <div class="step-item">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <div class="step-name">透明披露</div>
                    <div class="step-desc">主动说明AI数据和人工判断的边界</div>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <div class="step-name">逻辑呈现</div>
                    <div class="step-desc">用"因为...所以..."的结构说明决策依据</div>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <div class="step-name">情感连接</div>
                    <div class="step-desc">表达对员工贡献的认可和未来的期待</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Why Practice Section -->
            <div class="why-card">
              <div class="section-label">为什么信任重建要在每次对话中实践</div>

              <div class="why-list">
                <div class="why-item">
                  <span class="why-icon">⏰</span>
                  <span>薪酬对话不是"一次性事件"，信任是每次互动的积累</span>
                </div>
                <div class="why-item">
                  <span class="why-icon">💭</span>
                  <span>员工记住的不是数字，是对话中的感受</span>
                </div>
                <div class="why-item">
                  <span class="why-icon">🏦</span>
                  <span>管理者的每一句话，要么是"信任存款"，要么是"信任提款"</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Module 4 Preview -->
          <div class="right-column">
            <div class="section-label">模块四预告</div>

            <div class="preview-card">
              <div class="preview-header">
                <div class="preview-icon">📋</div>
                <div>
                  <div class="preview-title">薪酬对话场景实战</div>
                  <div class="preview-subtitle">5个真实场景的话术模板</div>
                </div>
                <span class="preview-badge">下节</span>
              </div>

              <div class="scenarios-list">
                <div class="scenario-item">
                  <div class="scenario-num">1</div>
                  <div class="scenario-text">年度调薪解读</div>
                </div>

                <div class="scenario-item">
                  <div class="scenario-num">2</div>
                  <div class="scenario-text">晋升调薪解释</div>
                </div>

                <div class="scenario-item">
                  <div class="scenario-num">3</div>
                  <div class="scenario-text">绩效关联薪酬说明</div>
                </div>

                <div class="scenario-item">
                  <div class="scenario-num">4</div>
                  <div class="scenario-text">市场偏低调薪解释</div>
                </div>

                <div class="scenario-item">
                  <div class="scenario-num">5</div>
                  <div class="scenario-text">员工质疑AI决策</div>
                </div>
              </div>
            </div>

            <!-- Key Quote Banner -->
            <div class="quote-banner">
              <span class="quote-icon">💬</span>
              <span class="quote-text">信任不是一次建立的，是每次对话中积累的</span>
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
