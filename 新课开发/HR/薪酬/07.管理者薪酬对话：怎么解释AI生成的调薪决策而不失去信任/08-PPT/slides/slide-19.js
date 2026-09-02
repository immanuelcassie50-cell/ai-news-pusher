/**
 * Slide 19: 为什么两者都重要
 * Content Page - AI Data Track vs Human Judgment Track comparison
 */

const slideConfig = {
  type: 'content',
  index: 19,
  title: '为什么两者都重要'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

// AI数据轨价值
const aiTrackValues = [
  { label: '提供客观参照', desc: '市场行情、内部基准' },
  { label: '确保公平性', desc: '标准化、数据驱动' },
  { label: '提高效率', desc: '自动化计算、快速生成' },
  { label: '可追溯', desc: '历史数据、算法逻辑' }
];

// 人工判断轨价值
const humanTrackValues = [
  { label: '处理例外情况', desc: '特殊贡献、特殊情况' },
  { label: '保持灵活性', desc: '业务变化、战略调整' },
  { label: '维护内部公平', desc: '团队平衡、相对评估' },
  { label: '注入人文关怀', desc: '员工感受、关系维护' }
];

// 两者关系
const relationshipItems = [
  { icon: '🎯', text: '效率与公平的双重保障' },
  { icon: '📊', text: 'AI数据轨 = 外部参照 + 内部基准' },
  { icon: '⚖️', text: '人工判断轨 = 弹性空间 + 人文考量' }
];

const keyInsight = '"AI数据轨告诉你\'市场怎么说\'，人工判断轨告诉你\'组织怎么看\'——两者都是决策的必要组成部分"';

function render() {
  return `
    <div class="slide" data-slide="${slideConfig.index}" style="background: ${theme.bg}; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;">
      <style>
        .slide-19 {
          width: 100%;
          height: 100%;
          padding: 40px 50px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .slide-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .slide-title {
          font-size: 32px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 8px 0;
        }

        .slide-subtitle {
          font-size: 14px;
          color: ${theme.secondary};
          opacity: 0.7;
        }

        /* 双轨对比容器 */
        .comparison-container {
          display: flex;
          gap: 30px;
          flex: 1;
          margin-bottom: 24px;
        }

        /* 轨道通用样式 */
        .track {
          flex: 1;
          border-radius: 16px;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }

        .track::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        /* AI数据轨 */
        .ai-track {
          background: linear-gradient(180deg, ${theme.primary}08 0%, ${theme.bg} 100%);
          border: 2px solid ${theme.primary}25;
        }

        .ai-track::before {
          background: linear-gradient(90deg, ${theme.primary} 0%, ${theme.accent} 100%);
        }

        /* 人工判断轨 */
        .human-track {
          background: linear-gradient(180deg, ${theme.accent}08 0%, ${theme.bg} 100%);
          border: 2px solid ${theme.accent}25;
        }

        .human-track::before {
          background: linear-gradient(90deg, ${theme.accent} 0%, ${theme.primary} 100%);
        }

        .track-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .track-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        .ai-track .track-icon {
          background: ${theme.primary}15;
        }

        .human-track .track-icon {
          background: ${theme.accent}15;
        }

        .track-title {
          font-size: 18px;
          font-weight: 600;
        }

        .ai-track .track-title {
          color: ${theme.primary};
        }

        .human-track .track-title {
          color: ${theme.accent};
        }

        .track-tag {
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 4px;
          margin-left: auto;
        }

        .ai-track .track-tag {
          background: ${theme.primary}15;
          color: ${theme.primary};
        }

        .human-track .track-tag {
          background: ${theme.accent}15;
          color: ${theme.accent};
        }

        /* 轨道项目列表 */
        .track-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .track-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 6px ${theme.secondary}10;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .track-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${theme.secondary}15;
        }

        .item-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }

        .ai-track .item-bullet {
          background: ${theme.primary};
        }

        .human-track .item-bullet {
          background: ${theme.accent};
        }

        .item-content {
          flex: 1;
        }

        .item-label {
          font-size: 15px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 4px;
        }

        .item-desc {
          font-size: 12px;
          color: ${theme.secondary};
          opacity: 0.7;
          line-height: 1.4;
        }

        /* 两者关系区域 */
        .relationship-section {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          justify-content: center;
        }

        .relationship-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
          flex: 1;
          max-width: 280px;
          justify-content: center;
        }

        .relationship-icon {
          font-size: 20px;
        }

        .relationship-text {
          font-size: 14px;
          font-weight: 500;
          color: ${theme.secondary};
          white-space: nowrap;
        }

        /* 关键洞察框 */
        .key-insight-box {
          background: linear-gradient(135deg, ${theme.primary}12 0%, ${theme.accent}12 100%);
          border: 2px solid ${theme.light};
          border-radius: 14px;
          padding: 24px 32px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .key-insight-box::before {
          content: '💡';
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 24px;
          background: ${theme.bg};
          padding: 0 12px;
        }

        .key-insight-label {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.accent};
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .key-insight-text {
          font-size: 16px;
          line-height: 1.7;
          color: ${theme.secondary};
          font-weight: 500;
        }

        .slide-19 {
          position: relative;
        }
      </style>

      <div class="slide-header">
        <h1 class="slide-title">${slideConfig.title}</h1>
        <p class="slide-subtitle">Why Both Matter</p>
      </div>

      <div class="comparison-container">
        <!-- AI数据轨 -->
        <div class="track ai-track">
          <div class="track-header">
            <div class="track-icon">🤖</div>
            <span class="track-title">AI数据轨价值</span>
            <span class="track-tag">数据驱动</span>
          </div>
          <div class="track-items">
            ${aiTrackValues.map(item => `
              <div class="track-item">
                <div class="item-bullet"></div>
                <div class="item-content">
                  <div class="item-label">${item.label}</div>
                  <div class="item-desc">${item.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 人工判断轨 -->
        <div class="track human-track">
          <div class="track-header">
            <div class="track-icon">👤</div>
            <span class="track-title">人工判断轨价值</span>
            <span class="track-tag">经验决策</span>
          </div>
          <div class="track-items">
            ${humanTrackValues.map(item => `
              <div class="track-item">
                <div class="item-bullet"></div>
                <div class="item-content">
                  <div class="item-label">${item.label}</div>
                  <div class="item-desc">${item.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="relationship-section">
        ${relationshipItems.map(item => `
          <div class="relationship-item">
            <span class="relationship-icon">${item.icon}</span>
            <span class="relationship-text">${item.text}</span>
          </div>
        `).join('')}
      </div>

      <div class="key-insight-box">
        <div class="key-insight-label">核心洞察</div>
        <div class="key-insight-text">${keyInsight}</div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
