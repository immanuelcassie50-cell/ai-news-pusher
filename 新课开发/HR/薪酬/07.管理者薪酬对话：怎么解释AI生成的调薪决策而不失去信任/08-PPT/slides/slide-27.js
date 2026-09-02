/**
 * Slide 27: 模块二要点回顾
 * Content Page - Module 2 Summary
 */

const slideConfig = {
  type: 'content',
  index: 27,
  title: '模块二要点回顾'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

// 双轨结构概念
const dualTrackConcept = [
  {
    track: 'AI数据轨',
    icon: '🤖',
    features: '外部参照 + 内部基准',
    traits: '客观、可量化、可追溯'
  },
  {
    track: '人工判断轨',
    icon: '👤',
    features: '弹性空间 + 人文考量',
    traits: '主观、灵活、情境相关'
  }
];

// AI数据轨四类数据
const aiDataTypes = ['市场数据', '薪资带宽', '绩效关联', '潜力评估'];

// 人工判断轨四个维度
const humanDimensions = ['业务考量', '团队平衡', '未来潜力', '特殊贡献'];

// 为什么两者都重要
const importancePoints = [
  { icon: '⚖️', text: '效率与公平的双重保障' },
  { icon: '📊', text: 'AI告诉你"市场怎么说"' },
  { icon: '💬', text: '人工告诉你"组织怎么看"' }
];

// 核心认知
const coreInsight = '管理者是翻译者——把系统语言转化成员工能理解、能接受的个人叙事';

function render() {
  return `
    <div class="slide" data-slide="${slideConfig.index}" style="background: ${theme.bg}; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;">
      <style>
        .slide-27 {
          width: 100%;
          height: 100%;
          padding: 32px 44px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .slide-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .slide-title {
          font-size: 28px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 6px 0;
        }

        .slide-subtitle {
          font-size: 12px;
          color: ${theme.secondary};
          opacity: 0.6;
        }

        /* 模块标识 */
        .module-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: ${theme.primary}12;
          color: ${theme.primary};
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        /* 主内容区域 */
        .main-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }

        /* 双轨结构区域 */
        .dual-track-section {
          display: flex;
          gap: 16px;
        }

        .track-card {
          flex: 1;
          background: white;
          border-radius: 14px;
          padding: 16px 18px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
          border-top: 4px solid;
        }

        .track-card.ai-track {
          border-top-color: ${theme.primary};
        }

        .track-card.human-track {
          border-top-color: ${theme.accent};
        }

        .track-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .track-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .ai-track .track-icon {
          background: ${theme.primary}15;
        }

        .human-track .track-icon {
          background: ${theme.accent}15;
        }

        .track-title {
          font-size: 16px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .human-track .track-title {
          color: ${theme.accent};
        }

        .track-features {
          font-size: 13px;
          color: ${theme.secondary};
          margin-bottom: 8px;
          font-weight: 500;
        }

        .track-traits {
          font-size: 11px;
          color: ${theme.secondary};
          opacity: 0.7;
          padding: 6px 10px;
          background: ${theme.bg};
          border-radius: 6px;
          display: inline-block;
        }

        /* 四类数据 / 四个维度区域 */
        .data-dimensions-section {
          display: flex;
          gap: 16px;
        }

        .data-card, .dimensions-card {
          flex: 1;
          background: white;
          border-radius: 12px;
          padding: 14px 16px;
          box-shadow: 0 2px 6px ${theme.secondary}08;
        }

        .card-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 10px;
        }

        .card-label-icon {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .data-card .card-label-icon {
          background: ${theme.primary}15;
        }

        .dimensions-card .card-label-icon {
          background: ${theme.accent}15;
        }

        .items-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .item-tag {
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
        }

        .data-card .item-tag {
          background: ${theme.primary}10;
          color: ${theme.primary};
        }

        .dimensions-card .item-tag {
          background: ${theme.accent}10;
          color: ${theme.accent};
        }

        /* 为什么重要区域 */
        .importance-section {
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}05 100%);
          border-radius: 12px;
          padding: 14px 18px;
          border-left: 4px solid ${theme.primary};
        }

        .importance-title {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .importance-items {
          display: flex;
          gap: 16px;
        }

        .importance-item {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 4px ${theme.secondary}08;
        }

        .importance-icon {
          font-size: 18px;
          flex-shrink: 0;
        }

        .importance-text {
          font-size: 12px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        /* 核心认知高亮区 */
        .core-insight-section {
          margin-top: auto;
          background: linear-gradient(135deg, ${theme.primary}12 0%, ${theme.accent}08 100%);
          border-radius: 14px;
          padding: 18px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .core-insight-section::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5px;
          background: linear-gradient(180deg, ${theme.primary}, ${theme.accent});
          border-radius: 3px 0 0 3px;
        }

        .core-insight-label {
          font-size: 11px;
          font-weight: 700;
          color: ${theme.primary};
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .core-insight-text {
          font-size: 16px;
          color: ${theme.primary};
          font-weight: 600;
          line-height: 1.5;
        }

        .core-insight-text .highlight {
          color: ${theme.accent};
          font-weight: 700;
        }

        /* 装饰元素 */
        .decor-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.06;
        }

        .decor-circle-1 {
          width: 120px;
          height: 120px;
          background: ${theme.primary};
          top: -40px;
          right: -30px;
        }

        .decor-circle-2 {
          width: 80px;
          height: 80px;
          background: ${theme.accent};
          bottom: -25px;
          left: 60px;
        }
      </style>

      <div class="slide-header">
        <div class="module-badge">
          <span>📚</span>
          <span>模块二</span>
        </div>
        <h1 class="slide-title">${slideConfig.title}</h1>
        <p class="slide-subtitle">Dual-Track Compensation Decision Framework</p>
      </div>

      <div class="main-content">
        <!-- 双轨结构概念 -->
        <div class="dual-track-section">
          ${dualTrackConcept.map(track => `
            <div class="track-card ${track.track === 'AI数据轨' ? 'ai-track' : 'human-track'}">
              <div class="track-header">
                <div class="track-icon">${track.icon}</div>
                <div class="track-title">${track.track}</div>
              </div>
              <div class="track-features">${track.features}</div>
              <div class="track-traits">${track.traits}</div>
            </div>
          `).join('')}
        </div>

        <!-- AI数据轨四类数据 / 人工判断轨四个维度 -->
        <div class="data-dimensions-section">
          <div class="data-card">
            <div class="card-label">
              <div class="card-label-icon">📊</div>
              <span>AI数据轨 · 四类数据</span>
            </div>
            <div class="items-grid">
              ${aiDataTypes.map(item => `
                <span class="item-tag">${item}</span>
              `).join('')}
            </div>
          </div>
          <div class="dimensions-card">
            <div class="card-label">
              <div class="card-label-icon">⚡</div>
              <span>人工判断轨 · 四个维度</span>
            </div>
            <div class="items-grid">
              ${humanDimensions.map(item => `
                <span class="item-tag">${item}</span>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 为什么两者都重要 -->
        <div class="importance-section">
          <div class="importance-title">
            <span>💡</span>
            <span>为什么两者都重要</span>
          </div>
          <div class="importance-items">
            ${importancePoints.map(point => `
              <div class="importance-item">
                <span class="importance-icon">${point.icon}</span>
                <span class="importance-text">${point.text}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 核心认知 -->
        <div class="core-insight-section">
          <div class="decor-circle decor-circle-1"></div>
          <div class="decor-circle decor-circle-2"></div>
          <div class="core-insight-label">✨ 核心认知</div>
          <div class="core-insight-text">
            "管理者是<span class="highlight">翻译者</span>——把系统语言转化成员工能理解、能接受的个人叙事"
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
