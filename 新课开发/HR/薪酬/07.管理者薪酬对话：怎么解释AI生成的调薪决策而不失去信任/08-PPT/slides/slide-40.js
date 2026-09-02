/**
 * Slide 40: 应对"为什么他调了我没调？"
 * Content Page - Handling Objection 2
 */

const slideConfig = {
  type: 'content',
  index: 40,
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
        .slide-40 {
          width: 100%;
          height: 100%;
          padding: 22px 32px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* Header */
        .slide-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 12px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .header-accent {
          width: 4px;
          height: 28px;
          background: linear-gradient(180deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 2px;
        }

        .header-content {
          flex: 1;
        }

        .slide-title {
          font-size: 24px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 4px 0;
        }

        .slide-subtitle {
          font-size: 12px;
          color: ${theme.secondary};
          opacity: 0.7;
          margin: 0;
        }

        /* Top Section - Two Cards Row */
        .top-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .info-card {
          background: white;
          border-radius: 12px;
          padding: 14px 16px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          border-left: 3px solid;
        }

        .info-card.meaning {
          border-left-color: ${theme.primary};
        }

        .info-card.policy {
          border-left-color: ${theme.accent};
        }

        .card-label {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .card-label-icon {
          font-size: 14px;
        }

        .card-title {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 8px;
        }

        .info-card.policy .card-title {
          color: ${theme.accent};
        }

        .meaning-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .meaning-list li {
          font-size: 11.5px;
          color: ${theme.secondary};
          line-height: 1.6;
          padding-left: 14px;
          position: relative;
          margin-bottom: 4px;
        }

        .meaning-list li::before {
          content: '"';
          position: absolute;
          left: 0;
          color: ${theme.primary};
          font-weight: 600;
        }

        .sub-text {
          font-size: 10px;
          color: ${theme.secondary};
          opacity: 0.7;
          margin-top: 6px;
          padding-left: 14px;
          border-left: 2px solid ${theme.light};
        }

        /* Policy Grid */
        .policy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
          margin-top: 4px;
        }

        .policy-item {
          background: ${theme.bg};
          border-radius: 8px;
          padding: 10px 12px;
          text-align: center;
        }

        .policy-item.cannot {
          background: ${theme.primary}10;
          border: 1px solid ${theme.primary}20;
        }

        .policy-item.can {
          background: ${theme.accent}10;
          border: 1px solid ${theme.accent}20;
        }

        .policy-label {
          font-size: 10px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .policy-item.cannot .policy-label {
          color: ${theme.primary};
        }

        .policy-item.can .policy-label {
          color: ${theme.accent};
        }

        .policy-text {
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        /* Four Steps Section */
        .steps-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .section-label .icon {
          font-size: 16px;
        }

        /* Steps Container */
        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          flex: 1;
        }

        .step-card {
          background: white;
          border-radius: 12px;
          padding: 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
          position: relative;
          border-top: 3px solid;
        }

        .step-card:nth-child(1) {
          border-top-color: ${theme.primary};
        }

        .step-card:nth-child(2) {
          border-top-color: ${theme.accent};
        }

        .step-card:nth-child(3) {
          border-top-color: ${theme.secondary};
        }

        .step-card:nth-child(4) {
          border-top-color: ${theme.primary};
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .step-number {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
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

        .step-card:nth-child(4) {
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}08 100%);
        }

        .step-card:nth-child(4) .step-number {
          background: ${theme.primary};
        }

        .step-name {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .step-quote {
          background: ${theme.bg};
          border-radius: 8px;
          padding: 10px;
          margin-bottom: 10px;
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.5;
          font-style: italic;
          flex: 1;
        }

        .step-note {
          font-size: 10px;
          color: ${theme.secondary};
          opacity: 0.8;
          line-height: 1.4;
        }

        /* Key Point Banner */
        .key-point {
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 10px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .key-point-icon {
          font-size: 20px;
        }

        .key-point-text {
          font-size: 14px;
          font-weight: 600;
          color: white;
        }

        .key-point-highlight {
          background: white;
          color: ${theme.primary};
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
        }

        /* Decorative */
        .deco-dots {
          position: absolute;
          top: 14px;
          right: 18px;
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

        .slide-40 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-40">
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
            <p class="slide-subtitle">Handling Objection 2: Why did Xiaoli get a raise but not me?</p>
          </div>
        </div>

        <!-- Top Section: Two Cards -->
        <div class="top-section">
          <!-- Card 1: Employee's Hidden Meaning -->
          <div class="info-card meaning">
            <div class="card-label">
              <span class="card-label-icon">💭</span>
              <span>员工这句话背后的意思</span>
            </div>
            <ul class="meaning-list">
              <li>我觉得不公平，你们是不是有偏见？</li>
              <li>我的付出被低估了还是被忽视了？</li>
            </ul>
            <p class="sub-text">潜台词：我在乎的是被公正对待</p>
          </div>

          <!-- Card 2: Compensation Secrecy Policy -->
          <div class="info-card policy">
            <div class="card-label">
              <span class="card-label-icon">🔒</span>
              <span>薪酬保密政策的真实边界</span>
            </div>
            <div class="policy-grid">
              <div class="policy-item cannot">
                <div class="policy-label">不可以</div>
                <div class="policy-text">透露别人的具体调薪数字</div>
              </div>
              <div class="policy-item can">
                <div class="policy-label">可以</div>
                <div class="policy-text">说明内部公平性的判断逻辑</div>
              </div>
              <div class="policy-item can">
                <div class="policy-label">可以</div>
                <div class="policy-text">说明不同岗位/绩效等级的差异逻辑</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Four Steps Section -->
        <div class="steps-section">
          <div class="section-label">
            <span class="icon">📋</span>
            <span>正确的回应——四步法</span>
          </div>

          <div class="steps-container">
            <!-- Step 1: Listen -->
            <div class="step-card">
              <div class="step-header">
                <div class="step-number">1</div>
                <div class="step-name">倾听</div>
              </div>
              <div class="step-quote">
                "你关心的是为什么小李的调薪结果和你不一样。"
              </div>
              <div class="step-note">不否认员工的感受</div>
            </div>

            <!-- Step 2: Empathize -->
            <div class="step-card">
              <div class="step-header">
                <div class="step-number">2</div>
                <div class="step-name">共情</div>
              </div>
              <div class="step-quote">
                "如果我是你，看到别人调了我没调，我也会想知道原因。"
              </div>
              <div class="step-note">承认感受</div>
            </div>

            <!-- Step 3: Explain -->
            <div class="step-card">
              <div class="step-header">
                <div class="step-number">3</div>
                <div class="step-name">解释</div>
              </div>
              <div class="step-quote">
                "我不能告诉你小李的具体调薪数字。但我可以说：小李是P序列，你是T序列，序列之间的调薪逻辑是不同的..."
              </div>
              <div class="step-note">说明判断逻辑，但不透露数字</div>
            </div>

            <!-- Step 4: Commit -->
            <div class="step-card">
              <div class="step-header">
                <div class="step-number">4</div>
                <div class="step-name">承诺</div>
              </div>
              <div class="step-quote">
                "你提到的贡献类型这个问题，我觉得值得重新聊一下。这周我们约个一对一..."
              </div>
              <div class="step-note">具体行动承诺</div>
            </div>
          </div>
        </div>

        <!-- Key Point Banner -->
        <div class="key-point">
          <span class="key-point-icon">🎯</span>
          <span class="key-point-text">关键点</span>
          <span class="key-point-highlight">不能比数字，但可以比判断逻辑</span>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
