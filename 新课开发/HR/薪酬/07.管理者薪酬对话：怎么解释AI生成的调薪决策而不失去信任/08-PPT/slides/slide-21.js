/**
 * Slide 21: 调薪决策的双轨结构
 * Content Page - Dual-track structure overview with merging visual
 */

const slideConfig = {
  type: 'content',
  index: 21,
  title: '调薪决策的双轨结构'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

// 为什么需要双轨
const whyDualTrack = [
  {
    icon: '🤖',
    title: 'AI提供数据支撑',
    desc: '市场标杆、绩效关联、潜力评估——客观、高效',
    track: 'ai'
  },
  {
    icon: '👤',
    title: '人工提供判断补充',
    desc: '业务考量、团队平衡、未来潜力——主观、灵活',
    track: 'human'
  },
  {
    icon: '⚖️',
    title: '两者结合',
    desc: '既保证效率，又兼顾公平',
    track: 'both'
  }
];

// AI数据轨内容
const aiTrackItems = [
  '市场标杆',
  '薪资带宽',
  '绩效关联',
  '潜力评估'
];

// 人工判断轨内容
const humanTrackItems = [
  '业务考量',
  '团队平衡',
  '未来潜力',
  '特殊贡献'
];

function render() {
  return `
    <div class="slide" data-slide="${slideConfig.index}" style="background: ${theme.bg}; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;">
      <style>
        .slide-21 {
          width: 100%;
          height: 100%;
          padding: 36px 48px;
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
          opacity: 0.65;
        }

        /* 为什么需要双轨区域 */
        .why-section {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 28px;
        }

        .why-card {
          flex: 1;
          max-width: 280px;
          padding: 16px 18px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px ${theme.secondary}10;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .why-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px ${theme.secondary}15;
        }

        .why-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .why-card.ai .why-icon {
          background: ${theme.primary}12;
        }

        .why-card.human .why-icon {
          background: ${theme.accent}12;
        }

        .why-card.both .why-icon {
          background: ${theme.light}50;
        }

        .why-content {
          flex: 1;
        }

        .why-title {
          font-size: 14px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 4px;
        }

        .why-desc {
          font-size: 12px;
          color: ${theme.secondary};
          opacity: 0.7;
          line-height: 1.4;
        }

        /* 双轨可视化区域 */
        .tracks-visual {
          display: flex;
          gap: 60px;
          justify-content: center;
          align-items: flex-start;
          margin-bottom: 24px;
          flex: 1;
        }

        /* 轨道样式 */
        .track-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 200px;
        }

        .track-label {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .track-label .icon {
          font-size: 20px;
        }

        .ai-track .track-label {
          color: ${theme.primary};
        }

        .human-track .track-label {
          color: ${theme.accent};
        }

        .track-box {
          width: 100%;
          border-radius: 14px;
          padding: 18px;
          position: relative;
        }

        .track-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 14px 14px 0 0;
        }

        .ai-track .track-box {
          background: linear-gradient(180deg, ${theme.primary}08 0%, white 100%);
          border: 1.5px solid ${theme.primary}20;
        }

        .ai-track .track-box::before {
          background: linear-gradient(90deg, ${theme.primary} 0%, ${theme.accent} 100%);
        }

        .human-track .track-box {
          background: linear-gradient(180deg, ${theme.accent}08 0%, white 100%);
          border: 1.5px solid ${theme.accent}20;
        }

        .human-track .track-box::before {
          background: linear-gradient(90deg, ${theme.accent} 0%, ${theme.primary} 100%);
        }

        .track-items-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .track-list-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          background: white;
          border-radius: 8px;
          font-size: 13px;
          color: ${theme.secondary};
          box-shadow: 0 1px 4px ${theme.secondary}08;
        }

        .track-list-item .bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .ai-track .track-list-item .bullet {
          background: ${theme.primary};
        }

        .human-track .track-list-item .bullet {
          background: ${theme.accent};
        }

        /* 合并箭头区域 */
        .merge-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
        }

        .merge-arrow-down {
          font-size: 32px;
          color: ${theme.secondary};
          opacity: 0.4;
          margin-bottom: 8px;
        }

        /* 整合结果区域 */
        .integration-result {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 30px;
          background: linear-gradient(135deg, ${theme.primary}10 0%, ${theme.accent}10 100%);
          border-radius: 16px;
          border: 2px dashed ${theme.light};
          min-width: 260px;
        }

        .integration-icon {
          font-size: 28px;
          margin-bottom: 10px;
        }

        .integration-title {
          font-size: 15px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 8px;
        }

        .formula {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
          margin-bottom: 10px;
        }

        .formula-part {
          font-size: 14px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 6px;
        }

        .formula-part.ai {
          background: ${theme.primary}15;
          color: ${theme.primary};
        }

        .formula-part.multiply {
          color: ${theme.secondary};
          font-size: 18px;
        }

        .formula-part.human {
          background: ${theme.accent}15;
          color: ${theme.accent};
        }

        .formula-part.equals {
          color: ${theme.secondary};
          font-size: 18px;
        }

        .formula-part.result {
          background: ${theme.primary};
          color: white;
          font-size: 13px;
        }

        .integration-note {
          font-size: 12px;
          color: ${theme.secondary};
          opacity: 0.7;
          text-align: center;
          line-height: 1.4;
        }

        /* 底部总结 */
        .summary-bar {
          display: flex;
          justify-content: center;
          margin-top: auto;
          padding-top: 16px;
        }

        .summary-content {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
        }

        .summary-icon {
          font-size: 18px;
        }

        .summary-text {
          font-size: 13px;
          color: ${theme.secondary};
        }

        .summary-highlight {
          font-weight: 600;
          color: ${theme.primary};
        }
      </style>

      <div class="slide-header">
        <h1 class="slide-title">${slideConfig.title}</h1>
        <p class="slide-subtitle">Dual-Track Compensation Decision Structure</p>
      </div>

      <div class="why-section">
        ${whyDualTrack.map(item => `
          <div class="why-card ${item.track}">
            <div class="why-icon">${item.icon}</div>
            <div class="why-content">
              <div class="why-title">${item.title}</div>
              <div class="why-desc">${item.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="tracks-visual">
        <!-- AI数据轨 -->
        <div class="track-column ai-track">
          <div class="track-label">
            <span class="icon">🤖</span>
            <span>AI数据轨</span>
          </div>
          <div class="track-box">
            <div class="track-items-list">
              ${aiTrackItems.map(item => `
                <div class="track-list-item">
                  <div class="bullet"></div>
                  <span>${item}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 合并区域 -->
        <div class="merge-section">
          <div class="merge-arrow-down">⬇️</div>
        </div>

        <!-- 人工判断轨 -->
        <div class="track-column human-track">
          <div class="track-label">
            <span class="icon">👤</span>
            <span>人工判断轨</span>
          </div>
          <div class="track-box">
            <div class="track-items-list">
              ${humanTrackItems.map(item => `
                <div class="track-list-item">
                  <div class="bullet"></div>
                  <span>${item}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 整合结果 -->
        <div class="merge-section">
          <div class="integration-result">
            <div class="integration-icon">⚡</div>
            <div class="integration-title">双轨整合</div>
            <div class="formula">
              <span class="formula-part ai">AI数据轨</span>
              <span class="formula-part multiply">×</span>
              <span class="formula-part human">人工判断轨</span>
              <span class="formula-part equals">=</span>
              <span class="formula-part result">最终调薪</span>
            </div>
            <div class="integration-note">不是简单的加法，而是综合权衡</div>
          </div>
        </div>
      </div>

      <div class="summary-bar">
        <div class="summary-content">
          <span class="summary-icon">💡</span>
          <span class="summary-text">两者结合，才能<span class="summary-highlight">既保证效率，又兼顾公平</span></span>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
