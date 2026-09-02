/**
 * Slide 32: 场景二：晋升调薪解释（有对比的敏感对话）
 * Content Page - How to explain promotion-based salary adjustment without losing trust
 */

const slideConfig = {
  type: 'content',
  index: 32,
  title: '场景二：晋升调薪解释'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

// 场景背景数据
const scenarioBackground = {
  situation: '员工晋升，调薪幅度需要解释（可能低于预期）',
  difficulty: '★★★☆☆',
  feature: '有晋升作为正面信息，但调薪幅度可能不如预期'
};

// 对话要点
const dialoguePoints = [
  { num: '1', title: '先说晋升好消息，再解释调薪幅度', icon: '👍' },
  { num: '2', title: '区分"晋升本身的价值"和"调薪幅度"', icon: '⚖️' },
  { num: '3', title: '说明晋升后的新带宽和未来空间', icon: '📈' },
  { num: '4', title: '给出具体的发展路径', icon: '🛤️' }
];

// 员工可能的反应
const reactions = [
  {
    question: '晋升了才调8%，是不是有点少？',
    response: '→ 解释带宽和未来空间'
  },
  {
    question: '我以为晋升会调更多',
    response: '→ 区分晋升价值和调薪幅度'
  }
];

// 话术模板
const templateText = `"小李，先告诉你一个好消息——你这次晋升了，晋升到高级工程师。

关于调薪，这次调薪幅度是8%。我想跟你说清楚：

第一，晋升本身不带高调薪——晋升是对你能力的认可，调薪是对你去年表现的认可，是两件事。

第二，这次调薪8%，是基于你的绩效表现，不是基于晋升。

第三，晋升到新级别后，你的薪资带宽变了，明年你有更大的上涨空间。"`;

function render() {
  return `
    <div class="slide" data-slide="${slideConfig.index}" style="background: ${theme.bg}; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;">
      <style>
        .slide-32 {
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
          font-size: 13px;
          color: ${theme.secondary};
          opacity: 0.65;
        }

        /* 核心理念条 */
        .core-idea {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 20px;
          background: linear-gradient(135deg, ${theme.primary}10 0%, ${theme.accent}08 100%);
          border-radius: 10px;
          border-left: 4px solid ${theme.accent};
          margin-bottom: 18px;
        }

        .core-idea-icon {
          font-size: 18px;
        }

        .core-idea-text {
          font-size: 14px;
          color: ${theme.secondary};
          font-weight: 500;
        }

        .core-idea-text strong {
          color: ${theme.primary};
        }

        /* 主内容区域 */
        .main-content {
          display: flex;
          gap: 24px;
          flex: 1;
        }

        /* 左侧区域 */
        .left-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* 场景背景卡片 */
        .scenario-card {
          background: white;
          border-radius: 14px;
          padding: 18px 20px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
        }

        .scenario-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .scenario-icon {
          font-size: 18px;
        }

        .scenario-title {
          font-size: 14px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .scenario-badge {
          margin-left: auto;
          padding: 4px 10px;
          background: ${theme.accent}20;
          color: ${theme.accent};
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .scenario-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .scenario-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .scenario-label {
          font-weight: 600;
          color: ${theme.secondary};
          min-width: 50px;
        }

        .scenario-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${theme.accent};
          flex-shrink: 0;
          margin-top: 5px;
        }

        /* 对话要点卡片 */
        .dialogue-card {
          background: white;
          border-radius: 14px;
          padding: 18px 20px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
          flex: 1;
        }

        .dialogue-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .dialogue-icon {
          font-size: 18px;
        }

        .dialogue-title {
          font-size: 14px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .dialogue-points {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dialogue-point {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          background: ${theme.bg};
          border-radius: 10px;
          transition: transform 0.2s ease;
        }

        .dialogue-point:hover {
          transform: translateX(4px);
        }

        .point-num {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: ${theme.primary};
          color: white;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .point-icon {
          font-size: 16px;
        }

        .point-text {
          font-size: 13px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        /* 右侧区域 */
        .right-section {
          flex: 1.1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* 话术模板卡片 */
        .template-card {
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.bg} 100%);
          border: 2px solid ${theme.primary}30;
          border-radius: 14px;
          padding: 18px 20px;
          position: relative;
        }

        .template-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .template-icon {
          font-size: 20px;
        }

        .template-title {
          font-size: 14px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .template-badge {
          margin-left: auto;
          padding: 4px 10px;
          background: ${theme.primary};
          color: white;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }

        .template-content {
          background: white;
          border-radius: 10px;
          padding: 16px 18px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
          font-size: 12px;
          line-height: 1.7;
          color: ${theme.secondary};
        }

        .template-content p {
          margin: 0 0 10px 0;
        }

        .template-content p:last-child {
          margin-bottom: 0;
        }

        .template-highlight {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* 员工反应卡片 */
        .reactions-card {
          background: white;
          border-radius: 14px;
          padding: 18px 20px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
        }

        .reactions-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .reactions-icon {
          font-size: 18px;
        }

        .reactions-title {
          font-size: 14px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .reactions-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .reaction-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 12px 14px;
          background: ${theme.bg};
          border-radius: 10px;
          border-left: 3px solid ${theme.accent};
        }

        .reaction-question {
          font-size: 12px;
          color: ${theme.secondary};
          font-weight: 500;
        }

        .reaction-question::before {
          content: '❓ ';
        }

        .reaction-response {
          font-size: 11px;
          color: ${theme.accent};
          font-weight: 600;
        }

        /* 页脚 */
        .slide-footer {
          margin-top: 14px;
          text-align: center;
          font-size: 11px;
          color: ${theme.secondary};
          opacity: 0.5;
        }
      </style>

      <div class="slide-header">
        <h1 class="slide-title">${slideConfig.title}</h1>
        <p class="slide-subtitle">场景二：晋升调薪解释（有对比的敏感对话）</p>
      </div>

      <div class="core-idea">
        <span class="core-idea-icon">💡</span>
        <span class="core-idea-text"><strong>核心理念：</strong>晋升是认可，调薪是回顾——两件事分开说，员工更容易接受</span>
      </div>

      <div class="main-content">
        <!-- 左侧 -->
        <div class="left-section">
          <!-- 场景背景 -->
          <div class="scenario-card">
            <div class="scenario-header">
              <span class="scenario-icon">📋</span>
              <span class="scenario-title">场景背景</span>
              <span class="scenario-badge">难度 ${scenarioBackground.difficulty}</span>
            </div>
            <div class="scenario-details">
              <div class="scenario-item">
                <div class="scenario-bullet"></div>
                <div>
                  <span class="scenario-label">情境</span>
                  <span>${scenarioBackground.situation}</span>
                </div>
              </div>
              <div class="scenario-item">
                <div class="scenario-bullet"></div>
                <div>
                  <span class="scenario-label">特点</span>
                  <span>${scenarioBackground.feature}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 对话要点 -->
          <div class="dialogue-card">
            <div class="dialogue-header">
              <span class="dialogue-icon">💬</span>
              <span class="dialogue-title">对话要点</span>
            </div>
            <div class="dialogue-points">
              ${dialoguePoints.map(point => `
                <div class="dialogue-point">
                  <div class="point-num">${point.num}</div>
                  <span class="point-icon">${point.icon}</span>
                  <span class="point-text">${point.title}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 右侧 -->
        <div class="right-section">
          <!-- 话术模板 -->
          <div class="template-card">
            <div class="template-header">
              <span class="template-icon">🎯</span>
              <span class="template-title">话术模板</span>
              <span class="template-badge">直接可用</span>
            </div>
            <div class="template-content">
              <p><span class="template-highlight">"小李，先告诉你一个好消息——</span>你这次晋升了，晋升到高级工程师。"</p>
              <p>"关于调薪，这次调薪幅度是<span class="template-highlight">8%</span>。我想跟你说清楚：</p>
              <p><span class="template-highlight">第一，</span>晋升本身不带高调薪——晋升是对你能力的认可，调薪是对你去年表现的认可，是两件事。</p>
              <p><span class="template-highlight">第二，</span>这次调薪8%，是基于你的绩效表现，不是基于晋升。</p>
              <p><span class="template-highlight">第三，</span>晋升到新级别后，你的薪资带宽变了，明年你有更大的上涨空间。"</p>
            </div>
          </div>

          <!-- 员工可能的反应 -->
          <div class="reactions-card">
            <div class="reactions-header">
              <span class="reactions-icon">🤔</span>
              <span class="reactions-title">员工可能的反应</span>
            </div>
            <div class="reactions-list">
              ${reactions.map(reaction => `
                <div class="reaction-item">
                  <div class="reaction-question">"${reaction.question}"</div>
                  <div class="reaction-response">${reaction.response}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        先肯定晋升，再分开谈调薪——把"不公平"变成"有期待"
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
