/**
 * Slide 50: 模块六要点回顾
 * Content Page - Module 6 Summary
 */

const slideConfig = {
  type: 'content',
  index: 50,
  title: '模块六要点回顾'
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
        .slide-50 {
          width: 100%;
          height: 100%;
          padding: 18px 28px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
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
          opacity: 0.55;
        }

        /* Main Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 14px;
          flex: 1;
          min-height: 0;
        }

        /* Section Card Base */
        .section-card {
          background: white;
          border-radius: 14px;
          padding: 14px 16px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .section-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 14px 14px 0 0;
        }

        .section-card.trust::before {
          background: linear-gradient(90deg, ${theme.primary}, ${theme.accent});
        }

        .section-card.contrast::before {
          background: linear-gradient(90deg, ${theme.accent}, ${theme.light});
        }

        .section-card.path::before {
          background: linear-gradient(90deg, ${theme.secondary}, ${theme.light});
        }

        .section-card.compliance::before {
          background: linear-gradient(90deg, ${theme.primary}, ${theme.secondary});
        }

        /* Section Label */
        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 10px;
        }

        .section-label .icon {
          font-size: 13px;
        }

        .section-label::before {
          content: '';
          width: 3px;
          height: 13px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* Trust Table */
        .trust-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 9.5px;
        }

        .trust-table th {
          background: ${theme.light}40;
          color: ${theme.secondary};
          font-weight: 600;
          padding: 6px 8px;
          text-align: left;
          border-bottom: 1px solid ${theme.light};
        }

        .trust-table th:first-child {
          border-radius: 6px 0 0 0;
        }

        .trust-table th:last-child {
          border-radius: 0 6px 0 0;
        }

        .trust-table td {
          padding: 7px 8px;
          color: ${theme.secondary};
          border-bottom: 1px solid ${theme.light}50;
          vertical-align: top;
          line-height: 1.4;
        }

        .trust-table tr:last-child td:first-child {
          border-radius: 0 0 0 6px;
        }

        .trust-table tr:last-child td:last-child {
          border-radius: 0 0 6px 0;
        }

        .trust-table tr:hover td {
          background: ${theme.bg};
        }

        .table-principle {
          font-weight: 600;
          color: ${theme.primary};
        }

        .table-action {
          color: ${theme.accent};
          font-weight: 500;
        }

        .table-idea {
          color: ${theme.secondary};
        }

        /* Contrast Section */
        .contrast-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contrast-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .contrast-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 9px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .contrast-badge.passive {
          background: ${theme.secondary}15;
          color: ${theme.secondary};
        }

        .contrast-badge.proactive {
          background: ${theme.accent}15;
          color: ${theme.accent};
        }

        .contrast-text {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .vs-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 4px 0;
        }

        .vs-icon {
          font-size: 12px;
          color: ${theme.light};
        }

        /* Path Section */
        .path-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 0;
          flex: 1;
        }

        .path-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .path-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .path-step:nth-child(1) .path-icon {
          background: ${theme.secondary}12;
        }

        .path-step:nth-child(3) .path-icon {
          background: ${theme.accent}12;
        }

        .path-step:nth-child(5) .path-icon {
          background: ${theme.primary}12;
        }

        .path-label {
          font-size: 10px;
          font-weight: 600;
          color: ${theme.secondary};
        }

        .path-step:nth-child(1) .path-label {
          color: ${theme.secondary};
        }

        .path-step:nth-child(3) .path-label {
          color: ${theme.accent};
        }

        .path-step:nth-child(5) .path-label {
          color: ${theme.primary};
        }

        .path-arrow {
          font-size: 16px;
          color: ${theme.accent};
          font-weight: 700;
        }

        /* Compliance Section */
        .compliance-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .compliance-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 7px 10px;
          background: ${theme.bg};
          border-radius: 8px;
          border-left: 3px solid;
        }

        .compliance-item:nth-child(1) {
          border-left-color: ${theme.primary};
        }

        .compliance-item:nth-child(2) {
          border-left-color: ${theme.accent};
        }

        .compliance-item:nth-child(3) {
          border-left-color: ${theme.secondary};
        }

        .compliance-icon {
          font-size: 12px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .compliance-text {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.45;
        }

        /* Core Insight Footer */
        .core-insight {
          margin-top: 12px;
          padding: 12px 18px;
          background: linear-gradient(135deg, ${theme.primary}08, ${theme.accent}08);
          border-radius: 12px;
          border-left: 4px solid ${theme.accent};
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .insight-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: ${theme.accent};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .insight-text {
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .insight-text strong {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          top: 10px;
          right: 28px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.3;
        }

        .deco-dots {
          position: absolute;
          bottom: 14px;
          right: 36px;
          display: flex;
          gap: 3px;
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

        .slide-50 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-50">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Module 6 Key Takeaways</p>
        </div>

        <!-- Main Content Grid -->
        <div class="content-grid">
          <!-- Trust Principles Table -->
          <div class="section-card trust">
            <div class="section-label">
              <span class="icon">💡</span>
              <span>日常信任维护的三个原则</span>
            </div>

            <table class="trust-table">
              <thead>
                <tr>
                  <th>原则</th>
                  <th>关键动作</th>
                  <th>核心理念</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="table-principle">聊期望，而不是聊数字</td>
                  <td class="table-action">主动问员工对市场价值的看法</td>
                  <td class="table-idea">引导员工主动思考自己的价值</td>
                </tr>
                <tr>
                  <td class="table-principle">给反馈，而不是等结果</td>
                  <td class="table-action">项目完成后及时认可</td>
                  <td class="table-idea">让员工感受到被关注</td>
                </tr>
                <tr>
                  <td class="table-principle">早预警，而不是年终通知</td>
                  <td class="table-action">发现问题时提前沟通</td>
                  <td class="table-idea">让员工有心理准备</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Proactive vs Reactive -->
          <div class="section-card contrast">
            <div class="section-label">
              <span class="icon">⚖️</span>
              <span>主动沟通 vs 被动应答</span>
            </div>

            <div class="contrast-content">
              <div class="contrast-item">
                <span class="contrast-badge passive">被动</span>
                <span class="contrast-text">员工问了才回应，调薪结果出来才谈</span>
              </div>

              <div class="contrast-item">
                <span class="contrast-badge proactive">主动</span>
                <span class="contrast-text">定期同步，提前预警，持续关系经营</span>
              </div>

              <div class="vs-divider">
                <span class="vs-icon">←</span>
                <span class="contrast-text" style="text-align: center; font-weight: 600; color: ${theme.primary};">主动沟通是建立信任的关键</span>
                <span class="vs-icon">→</span>
              </div>
            </div>
          </div>

          <!-- Role Upgrade Path -->
          <div class="section-card path">
            <div class="section-label">
              <span class="icon">⬆️</span>
              <span>角色升级路径</span>
            </div>

            <div class="path-content">
              <div class="path-step">
                <div class="path-icon">📢</div>
                <span class="path-label">解释者</span>
              </div>

              <span class="path-arrow">→</span>

              <div class="path-step">
                <div class="path-icon">🧭</div>
                <span class="path-label">引导者</span>
              </div>

              <span class="path-arrow">→</span>

              <div class="path-step">
                <div class="path-icon">🤝</div>
                <span class="path-label">共建者</span>
              </div>
            </div>
          </div>

          <!-- Compliance Tips -->
          <div class="section-card compliance">
            <div class="section-label">
              <span class="icon">📋</span>
              <span>薪酬透明法规提示</span>
            </div>

            <div class="compliance-list">
              <div class="compliance-item">
                <span class="compliance-icon">🔍</span>
                <span class="compliance-text">主动披露决策依据，比被动回应更安全</span>
              </div>

              <div class="compliance-item">
                <span class="compliance-icon">📝</span>
                <span class="compliance-text">记录薪酬对话内容，以备合规审查</span>
              </div>

              <div class="compliance-item">
                <span class="compliance-icon">💬</span>
                <span class="compliance-text">不确定时，"我需要确认后回复"是最佳策略</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Core Insight Footer -->
        <div class="core-insight">
          <div class="insight-icon">💎</div>
          <span class="insight-text">
            <strong>核心洞察：</strong>持续的关系经营，比一次性的解释更有价值。信任是积累出来的，不是一句"这是AI算的"能解决的。
          </span>
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
