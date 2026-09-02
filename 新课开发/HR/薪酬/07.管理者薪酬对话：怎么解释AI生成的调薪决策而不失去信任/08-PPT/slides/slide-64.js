/**
 * Slide 64: 应对异议一
 * Content Page - Handling Objection 1: "AI说了算，你也没权力改变？"
 */

const slideConfig = {
  type: 'content',
  index: 64,
  title: '应对"AI说了算，你也没权力改变？"'
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
        .slide-64 {
          width: 100%;
          height: 100%;
          padding: 18px 28px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .slide-header {
          text-align: center;
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .slide-title {
          font-size: 20px;
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

        /* Main Content Area */
        .main-content {
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
          min-height: 0;
        }

        /* Employee Need Highlight */
        .employee-need {
          background: linear-gradient(135deg, ${theme.primary}06, ${theme.accent}06);
          border-radius: 12px;
          padding: 12px 16px;
          border-left: 4px solid ${theme.accent};
          margin-bottom: 2px;
        }

        .employee-need-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 8px;
        }

        .employee-need-header .icon {
          font-size: 14px;
        }

        .employee-need-title {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 6px;
        }

        .employee-quotes {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 8px;
        }

        .employee-quote {
          font-size: 9.5px;
          color: ${theme.secondary};
          background: white;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid ${theme.light};
        }

        .hidden-meaning {
          font-size: 10px;
          color: ${theme.accent};
          font-weight: 500;
          padding-top: 6px;
          border-top: 1px dashed ${theme.light};
          margin-top: 4px;
        }

        .hidden-meaning strong {
          color: ${theme.primary};
        }

        /* Two Column Layout */
        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          flex: 1;
        }

        /* Wrong Approach Card */
        .wrong-card {
          background: white;
          border-radius: 14px;
          padding: 14px 16px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          border-top: 3px solid ${theme.light};
          display: flex;
          flex-direction: column;
        }

        .wrong-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 10px;
        }

        .wrong-label .icon {
          font-size: 14px;
        }

        .wrong-label::before {
          content: '';
          width: 3px;
          height: 14px;
          background: ${theme.light};
          border-radius: 2px;
        }

        .wrong-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .wrong-list li {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.5;
          padding: 8px 12px;
          background: ${theme.bg};
          border-radius: 8px;
          border-left: 3px solid ${theme.light};
        }

        .wrong-list li .quote-mark {
          color: ${theme.light};
          font-weight: 700;
        }

        .wrong-consequence {
          font-size: 9px;
          color: ${theme.accent};
          margin-top: 6px;
          padding-top: 6px;
          border-top: 1px dashed ${theme.light}50;
        }

        /* Right Approach Card */
        .right-card {
          background: white;
          border-radius: 14px;
          padding: 14px 16px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          border-top: 3px solid ${theme.accent};
          display: flex;
          flex-direction: column;
        }

        .right-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 10px;
        }

        .right-label .icon {
          font-size: 14px;
        }

        .right-label::before {
          content: '';
          width: 3px;
          height: 14px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* Four Steps */
        .four-steps {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 8px;
          flex: 1;
        }

        .step {
          background: ${theme.bg};
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .step-number {
          position: absolute;
          top: 8px;
          right: 10px;
          font-size: 18px;
          font-weight: 700;
          color: ${theme.accent};
          opacity: 0.25;
        }

        .step-title {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .step-title .step-icon {
          font-size: 12px;
        }

        .step-content {
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.45;
          flex: 1;
        }

        .step-content .dialogue {
          font-style: italic;
          color: ${theme.primary};
          margin-top: 4px;
          padding: 4px 8px;
          background: white;
          border-radius: 4px;
          border-left: 2px solid ${theme.accent};
        }

        /* Key Point Footer */
        .key-point {
          margin-top: 12px;
          padding: 12px 18px;
          background: linear-gradient(135deg, ${theme.primary}08, ${theme.accent}08);
          border-radius: 12px;
          border-left: 4px solid ${theme.primary};
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .key-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: ${theme.primary};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .key-content {
          flex: 1;
        }

        .key-label {
          font-size: 9px;
          font-weight: 600;
          color: ${theme.accent};
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 2px;
        }

        .key-text {
          font-size: 11px;
          color: ${theme.primary};
          font-weight: 500;
          line-height: 1.4;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          top: 10px;
          right: 28px;
          width: 32px;
          height: 32px;
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

        .slide-64 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-64">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Handling Objection 1</p>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Employee's Hidden Need -->
          <div class="employee-need">
            <div class="employee-need-header">
              <span class="icon">💭</span>
              <span>员工这句话背后的意思</span>
            </div>
            <div class="employee-quotes">
              <span class="employee-quote">"既然你说了不算，那我找你有什么用？"</span>
              <span class="employee-quote">"你是不是不愿意为我说话？"</span>
            </div>
            <div class="hidden-meaning">
              <strong>潜台词：</strong>我需要一个愿意为我争取的管理者
            </div>
          </div>

          <!-- Two Column: Wrong vs Right -->
          <div class="two-column">
            <!-- Wrong Approach -->
            <div class="wrong-card">
              <div class="wrong-label">
                <span class="icon">✗</span>
                <span>错误的回应</span>
              </div>
              <ul class="wrong-list">
                <li>
                  <span class="quote-mark">"</span>是啊，我也改不了，系统定的。<span class="quote-mark">"</span>
                  <div class="wrong-consequence">→ 甩锅给AI，失去信任</div>
                </li>
                <li>
                  <span class="quote-mark">"</span>我只是个执行者，你找HR吧。<span class="quote-mark">"</span>
                  <div class="wrong-consequence">→ 推脱责任，关闭对话</div>
                </li>
              </ul>
            </div>

            <!-- Right Approach: Four Steps -->
            <div class="right-card">
              <div class="right-label">
                <span class="icon">✓</span>
                <span>正确的回应——四步法</span>
              </div>
              <div class="four-steps">
                <!-- Step 1 -->
                <div class="step">
                  <span class="step-number">1</span>
                  <div class="step-title">
                    <span class="step-icon">👂</span>
                    <span>倾听</span>
                  </div>
                  <div class="step-content">
                    不打断，复述确认
                    <div class="dialogue">"我听到了，你对结果不满意..."</div>
                  </div>
                </div>

                <!-- Step 2 -->
                <div class="step">
                  <span class="step-number">2</span>
                  <div class="step-title">
                    <span class="step-icon">🤝</span>
                    <span>共情</span>
                  </div>
                  <div class="step-content">
                    承认需求合理
                    <div class="dialogue">"换了是我，我也希望..."</div>
                  </div>
                </div>

                <!-- Step 3 -->
                <div class="step">
                  <span class="step-number">3</span>
                  <div class="step-title">
                    <span class="step-icon">📋</span>
                    <span>解释</span>
                  </div>
                  <div class="step-content">
                    说明实际权限
                    <div class="dialogue">"AI计算+人工审核，我的权限是..."</div>
                  </div>
                </div>

                <!-- Step 4 -->
                <div class="step">
                  <span class="step-number">4</span>
                  <div class="step-title">
                    <span class="step-icon">📌</span>
                    <span>承诺</span>
                  </div>
                  <div class="step-content">
                    具体承诺下次行动
                    <div class="dialogue">"这件事我记下了，下次优先提交"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Key Point -->
          <div class="key-point">
            <div class="key-icon">💡</div>
            <div class="key-content">
              <div class="key-label">关键点</div>
              <div class="key-text">承认权限有限，但证明自己"争取过"</div>
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
