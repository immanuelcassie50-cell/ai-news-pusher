/**
 * Slide 62: 模块五：应对质疑与异议
 * Content Page - Module 5 Introduction: Handling Objections
 */

const slideConfig = {
  type: 'content',
  index: 62,
  title: '模块五：应对质疑与异议'
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
        .slide-62 {
          width: 100%;
          height: 100%;
          padding: 18px 28px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Header */
        .slide-header {
          text-align: center;
          margin-bottom: 12px;
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
          opacity: 0.5;
        }

        /* Module Badge */
        .module-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          border-radius: 20px;
          margin-bottom: 8px;
        }

        .module-badge-text {
          font-size: 11px;
          font-weight: 600;
          color: white;
        }

        /* Main Content */
        .main-content {
          display: flex;
          gap: 16px;
          flex: 1;
          min-height: 0;
        }

        /* Left Column - Why Objections */
        .left-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Section Cards */
        .section-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 8px;
        }

        .section-label .icon {
          font-size: 13px;
        }

        .section-label::before {
          content: '';
          width: 3px;
          height: 12px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* Why Objections Card */
        .why-card {
          background: linear-gradient(135deg, ${theme.primary}06 0%, ${theme.accent}05 100%);
          border-left: 3px solid ${theme.primary};
        }

        .why-card .section-label::before {
          background: ${theme.primary};
        }

        .why-points {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .why-point {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .why-point .bullet {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${theme.accent};
          margin-top: 4px;
          flex-shrink: 0;
        }

        /* Four Sentences Card */
        .sentences-card {
          flex: 1;
          border-left: 3px solid ${theme.accent};
        }

        .sentences-points {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sentence-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.4;
          padding: 6px 8px;
          background: ${theme.bg};
          border-radius: 6px;
        }

        .sentence-number {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: ${theme.accent};
          color: white;
          font-size: 9px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sentence-text {
          flex: 1;
        }

        .sentence-quote {
          color: ${theme.primary};
          font-weight: 500;
          font-style: italic;
        }

        .sentence-meaning {
          color: ${theme.secondary};
          opacity: 0.8;
          margin-top: 2px;
        }

        /* Right Column - Four Principles */
        .right-column {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .principles-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .principles-title {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .principles-badge {
          font-size: 9px;
          padding: 3px 8px;
          background: ${theme.primary}15;
          color: ${theme.primary};
          border-radius: 4px;
          font-weight: 600;
        }

        /* Principles Container */
        .principles-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .principle-card {
          background: white;
          border-radius: 10px;
          padding: 10px 12px;
          box-shadow: 0 2px 6px ${theme.secondary}08;
          display: flex;
          gap: 10px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border-bottom: 3px solid transparent;
        }

        .principle-card:hover {
          transform: translateX(3px);
          box-shadow: 0 3px 10px ${theme.secondary}10;
        }

        .principle-card:nth-child(1) { border-bottom-color: ${theme.primary}; }
        .principle-card:nth-child(2) { border-bottom-color: ${theme.accent}; }
        .principle-card:nth-child(3) { border-bottom-color: ${theme.secondary}; }
        .principle-card:nth-child(4) { border-bottom-color: ${theme.primary}; }

        .principle-number {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .principle-card:nth-child(1) .principle-number { background: ${theme.primary}; }
        .principle-card:nth-child(2) .principle-number { background: ${theme.accent}; }
        .principle-card:nth-child(3) .principle-number { background: ${theme.secondary}; }
        .principle-card:nth-child(4) .principle-number { background: ${theme.primary}; }

        .principle-content {
          flex: 1;
          min-width: 0;
        }

        .principle-title {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 3px;
        }

        .principle-card:nth-child(2) .principle-title { color: ${theme.accent}; }
        .principle-card:nth-child(3) .principle-title { color: ${theme.secondary}; }

        .principle-desc {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.4;
          opacity: 0.9;
        }

        /* Key Insight Footer */
        .key-insight-footer {
          margin-top: 10px;
          padding: 10px 14px;
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}06 100%);
          border-radius: 10px;
          border-left: 4px solid ${theme.accent};
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .insight-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .insight-content {
          flex: 1;
        }

        .insight-label {
          font-size: 9px;
          font-weight: 600;
          color: ${theme.accent};
          margin-bottom: 2px;
        }

        .insight-text {
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .insight-text strong {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* Decorative elements */
        .deco-circle {
          position: absolute;
          top: 10px;
          right: 28px;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.3;
        }

        .deco-dots {
          position: absolute;
          bottom: 16px;
          right: 36px;
          display: flex;
          gap: 4px;
        }

        .deco-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          opacity: 0.25;
        }

        .deco-dot:nth-child(1) { background: ${theme.primary}; }
        .deco-dot:nth-child(2) { background: ${theme.accent}; }
        .deco-dot:nth-child(3) { background: ${theme.secondary}; }

        /* Module icon */
        .module-icon {
          position: absolute;
          top: 70px;
          right: 35px;
          font-size: 26px;
          opacity: 0.12;
        }
      </style>

      <div class="slide-62">
        <!-- Decorative -->
        <div class="deco-circle"></div>
        <div class="module-icon">💬</div>

        <!-- Header -->
        <div class="slide-header">
          <div class="module-badge">
            <span class="module-badge-text">模块五</span>
          </div>
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Module 5: Handling Objections and Doubt</p>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Left Column -->
          <div class="left-column">
            <!-- Why Objections -->
            <div class="section-card why-card">
              <div class="section-label">
                <span class="icon">💡</span>
                <span>员工为什么会提出异议</span>
              </div>
              <div class="why-points">
                <div class="why-point">
                  <span class="bullet"></span>
                  <span>异议不等于"不听话"，等于"我需要被重视"</span>
                </div>
                <div class="why-point">
                  <span class="bullet"></span>
                  <span>员工提出异议，是因为他在乎这件事</span>
                </div>
                <div class="why-point">
                  <span class="bullet"></span>
                  <span>异议是信任的表现——如果员工不信你，他不会说出来</span>
                </div>
              </div>
            </div>

            <!-- Four Sentences -->
            <div class="section-card sentences-card">
              <div class="section-label">
                <span class="icon">🗣️</span>
                <span>员工最常说的四句话</span>
              </div>
              <div class="sentences-points">
                <div class="sentence-item">
                  <span class="sentence-number">1</span>
                  <div class="sentence-text">
                    <div class="sentence-quote">"AI说了算，你也没权力改变？"</div>
                    <div class="sentence-meaning">——质疑管理者的权力</div>
                  </div>
                </div>
                <div class="sentence-item">
                  <span class="sentence-number">2</span>
                  <div class="sentence-text">
                    <div class="sentence-quote">"为什么他调了我没调？"</div>
                    <div class="sentence-meaning">——质疑内部公平性</div>
                  </div>
                </div>
                <div class="sentence-item">
                  <span class="sentence-number">3</span>
                  <div class="sentence-text">
                    <div class="sentence-quote">"AI的数据准吗？"</div>
                    <div class="sentence-meaning">——质疑系统可信度</div>
                  </div>
                </div>
                <div class="sentence-item">
                  <span class="sentence-number">4</span>
                  <div class="sentence-text">
                    <div class="sentence-quote">"我就想知道你觉得我值多少"</div>
                    <div class="sentence-meaning">——质疑被认可程度</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Four Principles -->
          <div class="right-column">
            <div class="principles-header">
              <span class="principles-title">处理异议的四个原则</span>
              <span class="principles-badge">核心方法</span>
            </div>

            <div class="principles-container">
              <!-- Principle 1 -->
              <div class="principle-card">
                <div class="principle-number">1</div>
                <div class="principle-content">
                  <div class="principle-title">先处理情绪，再处理事实</div>
                  <div class="principle-desc">员工情绪上头时，事实是听不进去的</div>
                </div>
              </div>

              <!-- Principle 2 -->
              <div class="principle-card">
                <div class="principle-number">2</div>
                <div class="principle-content">
                  <div class="principle-title">承认局限性，不承认失败</div>
                  <div class="principle-desc">坦诚AI和系统的局限，但坚定管理者的决策权</div>
                </div>
              </div>

              <!-- Principle 3 -->
              <div class="principle-card">
                <div class="principle-number">3</div>
                <div class="principle-content">
                  <div class="principle-title">说明能做和不能做的</div>
                  <div class="principle-desc">明确区分哪些可以调整，哪些是规则红线</div>
                </div>
              </div>

              <!-- Principle 4 -->
              <div class="principle-card">
                <div class="principle-number">4</div>
                <div class="principle-content">
                  <div class="principle-title">给出具体的下一步行动</div>
                  <div class="principle-desc">不要让对话停在疑问上，给出明确的行动方向</div>
                </div>
              </div>
            </div>

            <!-- Key Insight Footer -->
            <div class="key-insight-footer">
              <div class="insight-icon">🎯</div>
              <div class="insight-content">
                <div class="insight-label">关键认知</div>
                <div class="insight-text">
                  <strong>异议是信任的信号</strong>，不是关系的破裂——处理得好，反而是加深信任的机会
                </div>
              </div>
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
