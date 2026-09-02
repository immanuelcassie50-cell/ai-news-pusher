/**
 * Slide 45: 日常薪酬沟通习惯
 * Content Page - Daily Salary Communication Habits
 */

const slideConfig = {
  type: 'content',
  index: 45,
  title: '日常薪酬沟通习惯'
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
        .slide-45 {
          width: 100%;
          height: 100%;
          padding: 20px 32px;
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
          padding-bottom: 10px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .header-accent {
          width: 4px;
          height: 26px;
          background: linear-gradient(180deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 2px;
        }

        .header-content {
          flex: 1;
        }

        .slide-title {
          font-size: 22px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 2px 0;
        }

        .slide-subtitle {
          font-size: 11px;
          color: ${theme.secondary};
          opacity: 0.7;
          margin: 0;
        }

        /* Why Section */
        .why-section {
          background: linear-gradient(135deg, ${theme.primary}06 0%, ${theme.accent}04 100%);
          border-radius: 12px;
          padding: 14px 18px;
          border: 1px solid ${theme.light};
        }

        .why-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .why-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .why-title {
          font-size: 13px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .why-points {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .why-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 11.5px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .why-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${theme.accent};
          margin-top: 5px;
          flex-shrink: 0;
        }

        /* Three Principles Section */
        .principles-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .principles-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .principles-header::before {
          content: '';
          width: 3px;
          height: 16px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          flex: 1;
        }

        .principle-card {
          background: white;
          border-radius: 14px;
          padding: 16px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .principle-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .principle-card:nth-child(1)::before {
          background: linear-gradient(90deg, ${theme.primary}, ${theme.accent});
        }

        .principle-card:nth-child(2)::before {
          background: linear-gradient(90deg, ${theme.accent}, ${theme.secondary});
        }

        .principle-card:nth-child(3)::before {
          background: linear-gradient(90deg, ${theme.secondary}, ${theme.primary});
        }

        .principle-number {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: white;
          margin-bottom: 10px;
        }

        .principle-card:nth-child(1) .principle-number { background: ${theme.primary}; }
        .principle-card:nth-child(2) .principle-number { background: ${theme.accent}; }
        .principle-card:nth-child(3) .principle-number { background: ${theme.secondary}; }

        .principle-title {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .principle-card:nth-child(1) .principle-title { color: ${theme.primary}; }
        .principle-card:nth-child(2) .principle-title { color: ${theme.accent}; }
        .principle-card:nth-child(3) .principle-title { color: ${theme.secondary}; }

        /* Principle Detail Sections */
        .detail-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .detail-label {
          font-size: 10px;
          font-weight: 600;
          color: ${theme.secondary};
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .detail-content {
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .timing-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: ${theme.bg};
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 10px;
          color: ${theme.secondary};
        }

        .timing-icon {
          font-size: 10px;
        }

        .dialogue-box {
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}06 100%);
          border-left: 3px solid;
          padding: 8px 10px;
          border-radius: 0 8px 8px 0;
          font-size: 11px;
          color: ${theme.primary};
          line-height: 1.5;
          font-style: italic;
        }

        .principle-card:nth-child(1) .dialogue-box { border-left-color: ${theme.primary}; }
        .principle-card:nth-child(2) .dialogue-box { border-left-color: ${theme.accent}; }
        .principle-card:nth-child(3) .dialogue-box { border-left-color: ${theme.secondary}; }

        .purpose-box {
          background: ${theme.bg};
          border-radius: 8px;
          padding: 8px 10px;
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.5;
          margin-top: auto;
        }

        .purpose-highlight {
          font-weight: 600;
        }

        .principle-card:nth-child(1) .purpose-highlight { color: ${theme.primary}; }
        .principle-card:nth-child(2) .purpose-highlight { color: ${theme.accent}; }
        .principle-card:nth-child(3) .purpose-highlight { color: ${theme.secondary}; }

        /* Key Insight Banner */
        .key-insight {
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 10px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .insight-icon {
          font-size: 18px;
        }

        .insight-text {
          font-size: 13px;
          color: white;
          font-weight: 500;
        }

        .insight-highlight {
          background: white;
          color: ${theme.primary};
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
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

        .slide-45 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-45">
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
            <p class="slide-subtitle">Daily Salary Communication Habits</p>
          </div>
        </div>

        <!-- Why Section -->
        <div class="why-section">
          <div class="why-header">
            <div class="why-icon">💡</div>
            <span class="why-title">为什么日常沟通比年终对话更重要</span>
          </div>
          <div class="why-points">
            <div class="why-point">
              <div class="why-bullet"></div>
              <span>薪酬对话最危险的时刻：一年只谈一次，一次定生死</span>
            </div>
            <div class="why-point">
              <div class="why-bullet"></div>
              <span>员工的"不公平感"如果在平时积累，年终调薪时已经太迟</span>
            </div>
            <div class="why-point">
              <div class="why-bullet"></div>
              <span>日常对话是"信任的持续存款"，年终对话只是"结账"</span>
            </div>
          </div>
        </div>

        <!-- Three Principles Section -->
        <div class="principles-section">
          <div class="principles-header">
            <span>日常薪酬沟通的三个原则</span>
          </div>

          <div class="principles-grid">
            <!-- Principle 1 -->
            <div class="principle-card">
              <div class="principle-number">1</div>
              <div class="principle-title">聊期望，而不是聊数字</div>

              <div class="detail-section">
                <div class="detail-item">
                  <span class="detail-label">时机</span>
                  <div class="timing-badge">
                    <span class="timing-icon">📅</span>
                    <span>年初、季度末、项目结束</span>
                  </div>
                </div>

                <div class="detail-item">
                  <span class="detail-label">话术</span>
                  <div class="dialogue-box">
                    "你觉得这个阶段你的市场价值有什么变化吗？"
                  </div>
                </div>

                <div class="detail-item">
                  <span class="detail-label">目的</span>
                  <div class="purpose-box">
                    让员工<span class="purpose-highlight">主动思考</span>自己的价值，而不是被动等系统出数字
                  </div>
                </div>
              </div>
            </div>

            <!-- Principle 2 -->
            <div class="principle-card">
              <div class="principle-number">2</div>
              <div class="principle-title">给反馈，而不是等结果</div>

              <div class="detail-section">
                <div class="detail-item">
                  <span class="detail-label">时机</span>
                  <div class="timing-badge">
                    <span class="timing-icon">📅</span>
                    <span>项目完成、绩效评估后</span>
                  </div>
                </div>

                <div class="detail-item">
                  <span class="detail-label">话术</span>
                  <div class="dialogue-box">
                    "这个项目你做得不错，我觉得你的市场价值在往上走"
                  </div>
                </div>

                <div class="detail-item">
                  <span class="detail-label">目的</span>
                  <div class="purpose-box">
                    让员工感受到<span class="purpose-highlight">你在关注</span>他的成长
                  </div>
                </div>
              </div>
            </div>

            <!-- Principle 3 -->
            <div class="principle-card">
              <div class="principle-number">3</div>
              <div class="principle-title">早预警，而不是年终通知</div>

              <div class="detail-section">
                <div class="detail-item">
                  <span class="detail-label">时机</span>
                  <div class="timing-badge">
                    <span class="timing-icon">📅</span>
                    <span>发现市场变化、绩效波动时</span>
                  </div>
                </div>

                <div class="detail-item">
                  <span class="detail-label">话术</span>
                  <div class="dialogue-box">
                    "我注意到市场数据有变化，今年的调薪可能会有压力，但我会持续关注"
                  </div>
                </div>

                <div class="detail-item">
                  <span class="detail-label">目的</span>
                  <div class="purpose-box">
                    让员工有<span class="purpose-highlight">心理准备</span>，不突然接受"坏消息"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Insight Banner -->
        <div class="key-insight">
          <span class="insight-icon">🌱</span>
          <span class="insight-text">信任需要日常浇灌，不能等危机才临时抱佛脚</span>
          <span class="insight-highlight">持续存款，按时结账</span>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
