/**
 * Slide 65: 应对"为什么他调了我没调？"
 * Content Page - Handling Objection 2: Comparative salary concerns
 */

const slideConfig = {
  type: 'content',
  index: 65,
  title: '应对"为什么他调了我没调？"'
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
        .slide-65 {
          width: 100%;
          height: 100%;
          padding: 18px 28px;
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
          padding-bottom: 10px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .header-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, ${theme.accent} 0%, ${theme.primary} 100%);
          border-radius: 10px;
          color: white;
          font-size: 18px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .slide-title {
          font-size: 22px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0;
        }

        /* Main Content Layout */
        .main-content {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 16px;
          flex: 1;
          min-height: 0;
        }

        /* Left Column */
        .left-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* Employee Meaning Card */
        .meaning-card {
          background: white;
          border-radius: 12px;
          padding: 14px 16px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          border-left: 4px solid ${theme.primary};
        }

        .card-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: ${theme.secondary};
          margin: 0 0 10px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .meaning-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .meaning-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 11.5px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .meaning-icon {
          font-size: 14px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .meaning-text {
          flex: 1;
        }

        .meaning-item.subtext {
          font-size: 10.5px;
          color: ${theme.accent};
          font-style: italic;
          padding-left: 22px;
        }

        /* Confidentiality Card */
        .confidential-card {
          background: white;
          border-radius: 12px;
          padding: 14px 16px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          border-left: 4px solid ${theme.accent};
          flex: 1;
        }

        .confidential-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 8px;
        }

        .confidential-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 11px;
        }

        .confidential-item.cannot {
          background: ${theme.primary}08;
          border: 1px solid ${theme.primary}20;
        }

        .confidential-item.can {
          background: ${theme.accent}10;
          border: 1px solid ${theme.accent}30;
        }

        .confidential-label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 600;
          font-size: 10.5px;
        }

        .confidential-item.cannot .confidential-label {
          color: ${theme.primary};
        }

        .confidential-item.can .confidential-label {
          color: ${theme.accent};
        }

        .confidential-text {
          color: ${theme.secondary};
          line-height: 1.4;
        }

        /* Right Column - Four Steps */
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .steps-title {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 6px 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Step Cards */
        .step-card {
          background: white;
          border-radius: 10px;
          padding: 12px 14px;
          box-shadow: 0 2px 6px ${theme.secondary}06;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          transition: transform 0.2s ease;
        }

        .step-card:hover {
          transform: translateX(4px);
        }

        .step-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          font-size: 13px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .step-card:nth-child(1) .step-number { background: ${theme.primary}; }
        .step-card:nth-child(2) .step-number { background: ${theme.accent}; }
        .step-card:nth-child(3) .step-number { background: ${theme.secondary}; }
        .step-card:nth-child(4) .step-number { background: ${theme.primary}; }

        .step-content {
          flex: 1;
          min-width: 0;
        }

        .step-name {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 4px 0;
        }

        .step-quote {
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.5;
          background: ${theme.bg};
          padding: 8px 10px;
          border-radius: 6px;
          border-left: 2px solid ${theme.light};
        }

        .step-card:nth-child(1) .step-quote { border-left-color: ${theme.primary}; }
        .step-card:nth-child(2) .step-quote { border-left-color: ${theme.accent}; }
        .step-card:nth-child(3) .step-quote { border-left-color: ${theme.secondary}; }
        .step-card:nth-child(4) .step-quote { border-left-color: ${theme.primary}; }

        /* Key Point Banner */
        .key-point-banner {
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 10px;
          padding: 14px 20px;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .key-icon {
          font-size: 20px;
        }

        .key-text {
          font-size: 13px;
          font-weight: 600;
          color: white;
          text-align: center;
        }

        .key-highlight {
          background: white;
          color: ${theme.primary};
          padding: 3px 10px;
          border-radius: 4px;
          font-size: 12px;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.3;
        }

        .deco-1 {
          width: 50px;
          height: 50px;
          background: ${theme.light}50;
          top: -10px;
          right: 60px;
        }

        .deco-2 {
          width: 25px;
          height: 25px;
          background: ${theme.accent}30;
          bottom: 20px;
          right: 100px;
        }

        .slide-65 {
          position: relative;
          overflow: hidden;
        }

        /* Emphasize annotation for step 3 */
        .step-card:nth-child(3) .step-quote {
          font-size: 10px;
          line-height: 1.6;
        }
      </style>

      <div class="slide-65">
        <!-- Decorative elements -->
        <div class="deco-circle deco-1"></div>
        <div class="deco-circle deco-2"></div>

        <!-- Header -->
        <div class="slide-header">
          <div class="header-badge">⚖️</div>
          <h1 class="slide-title">${slideConfig.title}</h1>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Left Column -->
          <div class="left-column">
            <!-- Employee Meaning -->
            <div class="meaning-card">
              <h3 class="card-label">
                <span>💭</span>
                员工这句话背后的意思
              </h3>
              <div class="meaning-list">
                <div class="meaning-item">
                  <span class="meaning-icon">•</span>
                  <span class="meaning-text">"我觉得不公平，你们是不是有偏见？"</span>
                </div>
                <div class="meaning-item">
                  <span class="meaning-icon">•</span>
                  <span class="meaning-text">"我的付出被低估了还是被忽视了？"</span>
                </div>
                <div class="meaning-item subtext">
                  潜台词：我在乎的是被公正对待
                </div>
              </div>
            </div>

            <!-- Confidentiality Boundaries -->
            <div class="confidential-card">
              <h3 class="card-label">
                <span>🔐</span>
                薪酬保密政策的真实边界
              </h3>
              <div class="confidential-grid">
                <div class="confidential-item cannot">
                  <div class="confidential-label">
                    <span>✗</span>
                    <span>不可以</span>
                  </div>
                  <div class="confidential-text">透露别人的具体调薪数字</div>
                </div>
                <div class="confidential-item can">
                  <div class="confidential-label">
                    <span>✓</span>
                    <span>可以</span>
                  </div>
                  <div class="confidential-text">说明内部公平性的判断逻辑</div>
                </div>
                <div class="confidential-item can" style="grid-column: 1 / -1;">
                  <div class="confidential-label">
                    <span>✓</span>
                    <span>可以</span>
                  </div>
                  <div class="confidential-text">说明不同岗位/绩效等级的差异逻辑</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Four Steps -->
          <div class="right-column">
            <h3 class="steps-title">
              <span>📌</span>
              正确的回应——四步法
            </h3>

            <!-- Step 1: Listen -->
            <div class="step-card">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4 class="step-name">倾听</h4>
                <div class="step-quote">
                  "你关心的是为什么小李的调薪结果和你不一样。"（不否认员工的感受）
                </div>
              </div>
            </div>

            <!-- Step 2: Empathize -->
            <div class="step-card">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4 class="step-name">共情</h4>
                <div class="step-quote">
                  "如果我是你，看到别人调了我没调，我也会想知道原因。"（承认感受）
                </div>
              </div>
            </div>

            <!-- Step 3: Explain -->
            <div class="step-card">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4 class="step-name">解释</h4>
                <div class="step-quote">
                  "我不能告诉你小李的具体调薪数字。但我可以说：小李是P序列，你是T序列，序列之间的调薪逻辑是不同的。另外，你的绩效等级是A，小李也是A，这个维度上你们是一样的。但你在团队里的贡献类型和他不一样，这个我需要重新评估。"
                </div>
              </div>
            </div>

            <!-- Step 4: Commit -->
            <div class="step-card">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4 class="step-name">承诺</h4>
                <div class="step-quote">
                  "你提到的贡献类型这个问题，我觉得值得重新聊一下。这周我们约个一对一，专门把你过去一年的贡献过一遍，如果结论支持重新评估，我会提交。"
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Point Banner -->
        <div class="key-point-banner">
          <span class="key-icon">🎯</span>
          <span class="key-text">
            关键点：不能比数字，但可以比
            <span class="key-highlight">判断逻辑</span>
          </span>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
