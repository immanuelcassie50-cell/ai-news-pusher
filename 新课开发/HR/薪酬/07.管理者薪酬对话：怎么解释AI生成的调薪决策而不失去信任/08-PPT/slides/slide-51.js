/**
 * Slide 51: 课程全程回顾
 * Summary Page - Complete Course Review
 */

const slideConfig = {
  type: 'summary',
  index: 51,
  title: '课程全程回顾'
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
        .slide-51 {
          width: 100%;
          height: 100%;
          padding: 14px 24px;
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

        /* Roadmap Container */
        .roadmap-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-height: 0;
        }

        /* Module Row */
        .module-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 1.5px 5px ${theme.secondary}08;
          position: relative;
          transition: transform 0.2s ease;
        }

        .module-row:hover {
          transform: translateX(4px);
        }

        .module-row::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          border-radius: 10px 0 0 10px;
        }

        .module-row.module-1::before { background: ${theme.primary}; }
        .module-row.module-2::before { background: ${theme.accent}; }
        .module-row.module-3::before { background: ${theme.secondary}; }
        .module-row.module-4::before { background: ${theme.primary}; opacity: 0.7; }
        .module-row.module-5::before { background: ${theme.accent}; opacity: 0.7; }
        .module-row.module-6::before { background: ${theme.secondary}; opacity: 0.7; }

        /* Module Number */
        .module-number {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .module-1 .module-number { background: ${theme.primary}; }
        .module-2 .module-number { background: ${theme.accent}; }
        .module-3 .module-number { background: ${theme.secondary}; }
        .module-4 .module-number { background: ${theme.primary}; opacity: 0.7; }
        .module-5 .module-number { background: ${theme.accent}; opacity: 0.7; }
        .module-6 .module-number { background: ${theme.secondary}; opacity: 0.7; }

        /* Module Content */
        .module-content {
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .module-title {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          white-space: nowrap;
          flex-shrink: 0;
        }

        .module-2 .module-title { color: ${theme.accent}; }
        .module-3 .module-title { color: ${theme.secondary}; }
        .module-4 .module-title { color: ${theme.primary}; opacity: 0.7; }
        .module-5 .module-title { color: ${theme.accent}; opacity: 0.7; }
        .module-6 .module-title { color: ${theme.secondary}; opacity: 0.7; }

        /* Module Details */
        .module-details {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          overflow: hidden;
        }

        .detail-tag {
          font-size: 8.5px;
          padding: 2px 6px;
          background: ${theme.bg};
          border-radius: 4px;
          color: ${theme.secondary};
          white-space: nowrap;
        }

        /* Connector Arrow */
        .connector {
          display: flex;
          justify-content: center;
          padding: 1px 0;
        }

        .connector-arrow {
          font-size: 12px;
          color: ${theme.light};
        }

        /* Core Formula Section */
        .formula-section {
          margin-top: 8px;
          padding: 12px 16px;
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}06 100%);
          border-radius: 12px;
          border: 1.5px solid ${theme.light};
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .formula-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .formula-content {
          flex: 1;
        }

        .formula-label {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.6;
          margin-bottom: 3px;
          font-weight: 500;
        }

        .formula-text {
          font-size: 13px;
          color: ${theme.primary};
          font-weight: 600;
          line-height: 1.4;
        }

        .formula-highlight {
          color: ${theme.accent};
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          top: 10px;
          right: 20px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.25;
        }

        .deco-dots {
          position: absolute;
          bottom: 10px;
          right: 24px;
          display: flex;
          gap: 3px;
        }

        .deco-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          opacity: 0.15;
        }

        .deco-dot:nth-child(1) { background: ${theme.primary}; }
        .deco-dot:nth-child(2) { background: ${theme.accent}; }
        .deco-dot:nth-child(3) { background: ${theme.secondary}; }

        .slide-51 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-51">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Complete Course Journey</p>
        </div>

        <!-- Roadmap -->
        <div class="roadmap-container">
          <!-- Module 1 -->
          <div class="module-row module-1">
            <div class="module-number">1</div>
            <div class="module-content">
              <div class="module-title">AI时代的薪酬对话新格局</div>
              <div class="module-details">
                <span class="detail-tag">员工担忧四种类型</span>
                <span class="detail-tag">管理者三重角色冲突</span>
              </div>
            </div>
          </div>

          <div class="connector">
            <span class="connector-arrow">↓</span>
          </div>

          <!-- Module 2 -->
          <div class="module-row module-2">
            <div class="module-number">2</div>
            <div class="module-content">
              <div class="module-title">调薪决策的双轨结构</div>
              <div class="module-details">
                <span class="detail-tag">AI数据轨</span>
                <span class="detail-tag">人工判断轨</span>
                <span class="detail-tag">双轨说明卡</span>
              </div>
            </div>
          </div>

          <div class="connector">
            <span class="connector-arrow">↓</span>
          </div>

          <!-- Module 3 -->
          <div class="module-row module-3">
            <div class="module-number">3</div>
            <div class="module-content">
              <div class="module-title">三步信任重建法</div>
              <div class="module-details">
                <span class="detail-tag">透明披露</span>
                <span class="detail-tag">逻辑呈现</span>
                <span class="detail-tag">情感连接</span>
              </div>
            </div>
          </div>

          <div class="connector">
            <span class="connector-arrow">↓</span>
          </div>

          <!-- Module 4 -->
          <div class="module-row module-4">
            <div class="module-number">4</div>
            <div class="module-content">
              <div class="module-title">薪酬对话场景实战</div>
              <div class="module-details">
                <span class="detail-tag">5个常见场景</span>
                <span class="detail-tag">完整对话模板</span>
              </div>
            </div>
          </div>

          <div class="connector">
            <span class="connector-arrow">↓</span>
          </div>

          <!-- Module 5 -->
          <div class="module-row module-5">
            <div class="module-number">5</div>
            <div class="module-content">
              <div class="module-title">应对质疑与异议</div>
              <div class="module-details">
                <span class="detail-tag">四步法</span>
                <span class="detail-tag">4种刺话应对</span>
              </div>
            </div>
          </div>

          <div class="connector">
            <span class="connector-arrow">↓</span>
          </div>

          <!-- Module 6 -->
          <div class="module-row module-6">
            <div class="module-number">6</div>
            <div class="module-content">
              <div class="module-title">持续信任维护机制</div>
              <div class="module-details">
                <span class="detail-tag">日常三原则</span>
                <span class="detail-tag">年度沟通计划</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Core Formula -->
        <div class="formula-section">
          <div class="formula-icon">🎯</div>
          <div class="formula-content">
            <div class="formula-label">核心公式</div>
            <div class="formula-text">
              薪酬公平 = <span class="formula-highlight">透明的双轨说明</span> + <span class="formula-highlight">信任重建三步法</span> + <span class="formula-highlight">持续的日常关系经营</span>
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
