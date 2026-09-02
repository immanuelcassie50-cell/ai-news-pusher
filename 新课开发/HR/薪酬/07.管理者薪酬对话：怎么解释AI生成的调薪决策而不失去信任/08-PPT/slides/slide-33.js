/**
 * Slide 33: 场景三：绩效关联薪酬说明（数据驱动的对话）
 * Content Page - Scenario 3: Performance-linked compensation explanation
 */

const slideConfig = {
  type: 'content',
  index: 33,
  title: '场景三：绩效关联薪酬说明'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

// 场景背景
const scenarioInfo = {
  context: '绩效评分与薪酬调整强关联，需要用数据说服员工',
  difficulty: '★★★☆☆',
  features: '数据密集、需要清晰解释绩效与薪酬的关系'
};

// 对话要点
const dialoguePoints = [
  { num: '1', text: '先说绩效结果，再说调薪结果' },
  { num: '2', text: '用具体数据说明：绩效等级→调薪区间' },
  { num: '3', text: '承认数据的局限性（绩效不能反映一切）' },
  { num: '4', text: '表达对员工非量化贡献的认可' }
];

// 员工可能的反应
const reactions = [
  { question: '"为什么A的人调15%，我才是B+？"', response: '绩效对比的解释' },
  { question: '"绩效评分准吗？"', response: '绩效评估的讨论' }
];

function render() {
  return `
    <div class="slide" data-slide="${slideConfig.index}" style="background: ${theme.bg}; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;">
      <style>
        .slide-33 {
          width: 100%;
          height: 100%;
          padding: 32px 44px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .slide-header {
          text-align: center;
          margin-bottom: 18px;
        }

        .slide-title {
          font-size: 26px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 4px 0;
        }

        .slide-subtitle {
          font-size: 12px;
          color: ${theme.secondary};
          opacity: 0.6;
        }

        /* 场景背景卡片 */
        .scenario-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 14px 24px;
          background: linear-gradient(135deg, ${theme.primary}10 0%, ${theme.accent}08 100%);
          border-radius: 12px;
          border-left: 4px solid ${theme.primary};
          margin-bottom: 18px;
        }

        .scenario-badge {
          padding: 6px 14px;
          background: ${theme.primary};
          color: white;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
        }

        .scenario-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .scenario-context {
          font-size: 14px;
          color: ${theme.secondary};
          font-weight: 500;
        }

        .scenario-meta {
          display: flex;
          gap: 16px;
          font-size: 11px;
          color: ${theme.secondary};
          opacity: 0.7;
        }

        .scenario-meta span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* 主内容区域 */
        .main-content {
          display: flex;
          gap: 24px;
          flex: 1;
          min-height: 0;
        }

        /* 左侧：对话要点 */
        .left-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .section-card {
          background: white;
          border-radius: 14px;
          padding: 16px 18px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
        }

        .section-title {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-title::before {
          content: '';
          width: 4px;
          height: 14px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        .dialogue-points {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dialogue-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          background: ${theme.bg};
          border-radius: 8px;
          transition: transform 0.2s ease;
        }

        .dialogue-point:hover {
          transform: translateX(4px);
        }

        .point-num {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: ${theme.primary};
          color: white;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .point-text {
          font-size: 13px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        /* 员工反应 */
        .reactions-section {
          margin-top: auto;
        }

        .reaction-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          background: ${theme.bg};
          border-radius: 8px;
          margin-bottom: 8px;
        }

        .reaction-q {
          flex: 1;
          font-size: 12px;
          color: ${theme.accent};
          font-style: italic;
        }

        .reaction-arrow {
          color: ${theme.secondary};
          font-size: 12px;
        }

        .reaction-a {
          font-size: 12px;
          color: ${theme.secondary};
          font-weight: 500;
        }

        /* 右侧：话术模板 */
        .right-section {
          flex: 1.1;
          display: flex;
          flex-direction: column;
        }

        .template-card {
          background: white;
          border-radius: 14px;
          padding: 18px 20px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .template-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .template-icon {
          font-size: 18px;
        }

        .template-title {
          font-size: 14px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .template-badge {
          margin-left: auto;
          font-size: 10px;
          padding: 4px 10px;
          background: ${theme.accent}20;
          color: ${theme.accent};
          border-radius: 4px;
          font-weight: 600;
        }

        .template-content {
          background: ${theme.bg};
          border-radius: 10px;
          padding: 16px;
          flex: 1;
          border-left: 3px solid ${theme.primary};
        }

        .template-line {
          font-size: 12px;
          color: ${theme.secondary};
          line-height: 1.7;
          margin-bottom: 10px;
        }

        .template-line:last-child {
          margin-bottom: 0;
        }

        .template-line.highlight {
          background: ${theme.primary}10;
          padding: 8px 12px;
          border-radius: 6px;
          margin: 12px 0;
          border-left: none;
        }

        .template-line em {
          color: ${theme.primary};
          font-style: normal;
          font-weight: 600;
        }

        .template-divider {
          height: 1px;
          background: ${theme.light};
          margin: 12px 0;
        }

        /* 页脚 */
        .slide-footer {
          margin-top: 14px;
          text-align: center;
          font-size: 10px;
          color: ${theme.secondary};
          opacity: 0.5;
        }
      </style>

      <div class="slide-header">
        <h1 class="slide-title">${slideConfig.title}</h1>
        <p class="slide-subtitle">数据驱动的对话 | Data-Driven Dialogue</p>
      </div>

      <div class="scenario-header">
        <span class="scenario-badge">场景三</span>
        <div class="scenario-info">
          <div class="scenario-context">${scenarioInfo.context}</div>
          <div class="scenario-meta">
            <span>难度：${scenarioInfo.difficulty}</span>
            <span>特点：${scenarioInfo.features}</span>
          </div>
        </div>
      </div>

      <div class="main-content">
        <!-- 左侧：对话要点 + 员工反应 -->
        <div class="left-section">
          <div class="section-card">
            <div class="section-title">对话要点</div>
            <div class="dialogue-points">
              ${dialoguePoints.map(point => `
                <div class="dialogue-point">
                  <div class="point-num">${point.num}</div>
                  <span class="point-text">${point.text}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="section-card reactions-section">
            <div class="section-title">员工可能的反应</div>
            ${reactions.map(r => `
              <div class="reaction-item">
                <span class="reaction-q">${r.question}</span>
                <span class="reaction-arrow">→</span>
                <span class="reaction-a">${r.response}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 右侧：话术模板 -->
        <div class="right-section">
          <div class="template-card">
            <div class="template-header">
              <span class="template-icon">💬</span>
              <span class="template-title">话术模板</span>
              <span class="template-badge">直接可用</span>
            </div>
            <div class="template-content">
              <div class="template-line">
                小李，先说绩效结果——你这次绩效是<em>B+</em>。
              </div>
              <div class="template-line">
                这次调薪是<em>7%</em>。我想跟你解释一下这个7%是怎么来的：
              </div>
              <div class="template-divider"></div>
              <div class="template-line highlight">
                系统里，绩效<em>B+</em>对应的调薪区间是<em>5%-8%</em>，<br>
                你的市场偏差是<em>-10%</em>，两个因素加起来，系统建议是<em>7%</em>。
              </div>
              <div class="template-line">
                我也认同这个数字——你去年完成了XXX项目，这个我记在心里。
              </div>
              <div class="template-divider"></div>
              <div class="template-line">
                当然，绩效不能反映你所有的价值。你在团队协作、帮助新人这些方面，也很重要。
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        数据是基础，但信任需要人性来填充
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
