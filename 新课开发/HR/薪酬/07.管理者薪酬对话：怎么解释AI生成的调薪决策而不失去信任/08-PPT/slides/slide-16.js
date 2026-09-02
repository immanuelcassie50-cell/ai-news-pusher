/**
 * Slide 16: 双轨决策模型
 * Content Page - Dual-track compensation decision structure
 */

const slideConfig = {
  type: 'content',
  index: 16,
  title: '双轨决策模型'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

// 决策链结构数据
const decisionChain = [
  { label: '老板', icon: '👔' },
  { label: 'HR政策', icon: '📋' },
  { label: '系统(AI)', icon: '🤖' }
];

// AI数据轨内容
const aiTrackItems = [
  { label: '市场数据', desc: '第三方薪酬调研平台' },
  { label: '薪资带宽', desc: '公司薪酬Range' },
  { label: '绩效关联', desc: '个人/团队绩效评分' },
  { label: '潜力评估', desc: '未来发展潜力模型' }
];

// 人工判断轨内容
const humanTrackItems = [
  { label: '业务考量', desc: '部门战略优先级' },
  { label: '团队平衡', desc: '内部公平性' },
  { label: '未来潜力', desc: '尚未体现在数据中的价值' },
  { label: '特殊贡献', desc: '一次性/不可量化贡献' }
];

function render() {
  return `
    <div class="slide" data-slide="${slideConfig.index}" style="background: ${theme.bg}; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;">
      <style>
        .slide-16 {
          width: 100%;
          height: 100%;
          padding: 40px 50px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .slide-header {
          text-align: center;
          margin-bottom: 30px;
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

        /* 决策链 */
        .decision-chain {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 35px;
          padding: 16px 24px;
          background: linear-gradient(135deg, ${theme.light}22 0%, ${theme.bg} 100%);
          border-radius: 12px;
        }

        .chain-node {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px ${theme.secondary}15;
        }

        .chain-node .icon {
          font-size: 18px;
        }

        .chain-node .label {
          font-size: 14px;
          color: ${theme.secondary};
          font-weight: 500;
        }

        .chain-arrow {
          color: ${theme.accent};
          font-size: 18px;
          font-weight: bold;
        }

        /* 双轨容器 */
        .dual-tracks {
          display: flex;
          gap: 40px;
          flex: 1;
          margin-bottom: 30px;
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

        .track-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
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

        /* 整合区域 */
        .integration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 20px;
          background: linear-gradient(135deg, ${theme.primary}10 0%, ${theme.accent}10 100%);
          border-radius: 14px;
          border: 2px dashed ${theme.light};
        }

        .integration-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 24px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 3px 10px ${theme.secondary}15;
        }

        .integration-icon {
          font-size: 24px;
        }

        .integration-text {
          font-size: 16px;
          font-weight: 600;
          color: ${theme.secondary};
        }

        .integration-arrow {
          color: ${theme.accent};
          font-size: 24px;
          font-weight: bold;
        }

        .final-node {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: ${theme.primary};
          color: white;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
        }

        .final-node .icon {
          font-size: 18px;
        }

        /* 标签 */
        .key-label {
          position: absolute;
          top: 12px;
          right: 16px;
          font-size: 11px;
          padding: 4px 10px;
          background: ${theme.accent}20;
          color: ${theme.accent};
          border-radius: 4px;
          font-weight: 600;
        }

        .slide-16 {
          position: relative;
        }
      </style>

      <div class="slide-header">
        <h1 class="slide-title">${slideConfig.title}</h1>
        <p class="slide-subtitle">Dual-Track Compensation Decision Model</p>
      </div>

      <div class="decision-chain">
        ${decisionChain.map((node, i) => `
          <div class="chain-node">
            <span class="icon">${node.icon}</span>
            <span class="label">${node.label}</span>
          </div>
          ${i < decisionChain.length - 1 ? '<span class="chain-arrow">→</span>' : ''}
        `).join('')}
        <span class="chain-arrow">→</span>
        <div class="chain-node" style="background: ${theme.primary}15; border: 1px solid ${theme.primary}30;">
          <span class="icon">🔀</span>
          <span class="label" style="color: ${theme.primary}; font-weight: 600;">双轨分叉</span>
        </div>
      </div>

      <div class="dual-tracks">
        <!-- AI数据轨 -->
        <div class="track ai-track">
          <div class="track-header">
            <div class="track-icon">🤖</div>
            <span class="track-title">AI数据轨</span>
            <span class="track-tag">数据驱动</span>
          </div>
          <div class="track-items">
            ${aiTrackItems.map(item => `
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
            <span class="track-title">人工判断轨</span>
            <span class="track-tag">经验决策</span>
          </div>
          <div class="track-items">
            ${humanTrackItems.map(item => `
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

      <div class="integration">
        <div class="integration-box">
          <span class="integration-icon">⚡</span>
          <span class="integration-text">管理者整合两轨</span>
        </div>
        <span class="integration-arrow">→</span>
        <div class="final-node">
          <span class="icon">💬</span>
          <span>与员工对话</span>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
