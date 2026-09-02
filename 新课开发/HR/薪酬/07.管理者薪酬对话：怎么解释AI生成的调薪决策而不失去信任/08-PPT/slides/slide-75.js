/**
 * Slide 75: 模块六要点回顾
 * Content Page - Module 6 Summary: Daily Trust Maintenance
 */

const slideConfig = {
  type: 'content',
  index: 75,
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
        .slide-75 {
          width: 100%;
          height: 100%;
          padding: 16px 26px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .slide-header {
          text-align: center;
          margin-bottom: 12px;
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
          font-size: 9.5px;
          color: ${theme.secondary};
          opacity: 0.5;
        }

        /* Main Content */
        .main-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          min-height: 0;
        }

        /* Section Label */
        .section-label {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10.5px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 6px;
        }

        .section-label .icon {
          font-size: 12px;
        }

        .section-label::before {
          content: '';
          width: 3px;
          height: 12px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* Principles Table Section */
        .principles-section {
          background: white;
          border-radius: 14px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        /* Principles Table */
        .principles-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 9.5px;
        }

        .principles-table th {
          background: ${theme.light}40;
          color: ${theme.secondary};
          font-weight: 600;
          padding: 7px 10px;
          text-align: left;
          border-bottom: 1px solid ${theme.light};
        }

        .principles-table th:first-child {
          border-radius: 6px 0 0 0;
        }

        .principles-table th:last-child {
          border-radius: 0 6px 0 0;
        }

        .principles-table td {
          padding: 8px 10px;
          color: ${theme.secondary};
          border-bottom: 1px solid ${theme.light}50;
          vertical-align: middle;
          line-height: 1.4;
        }

        .principles-table tbody tr:last-child td {
          border-bottom: none;
        }

        .principles-table tbody tr:hover td {
          background: ${theme.bg}50;
        }

        .principle-action {
          font-weight: 600;
          color: ${theme.primary};
        }

        .principle-key {
          color: ${theme.accent};
          font-weight: 500;
        }

        .principle-idea {
          color: ${theme.secondary};
        }

        /* Two Column Layout for middle sections */
        .middle-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        /* Comparison Card */
        .comparison-card {
          background: white;
          border-radius: 14px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .comparison-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .comparison-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .comparison-badge {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .comparison-badge.passive {
          background: ${theme.secondary}20;
          color: ${theme.secondary};
        }

        .comparison-badge.active {
          background: ${theme.primary}20;
          color: ${theme.primary};
        }

        .comparison-text {
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.4;
          padding-top: 3px;
        }

        .comparison-item.passive .comparison-text {
          opacity: 0.75;
        }

        .comparison-item.active .comparison-text {
          font-weight: 500;
        }

        /* Role Upgrade Card */
        .role-card {
          background: white;
          border-radius: 14px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .role-path {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin: 8px 0;
        }

        .role-item {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          text-align: center;
        }

        .role-item.explainer {
          background: ${theme.light}50;
          color: ${theme.secondary};
        }

        .role-item.guide {
          background: ${theme.accent}20;
          color: ${theme.accent};
        }

        .role-item.partner {
          background: ${theme.primary}20;
          color: ${theme.primary};
        }

        .role-arrow {
          font-size: 14px;
          color: ${theme.light};
        }

        .role-desc {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.7;
          text-align: center;
          line-height: 1.4;
        }

        /* Compliance Card */
        .compliance-card {
          background: white;
          border-radius: 14px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .compliance-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .compliance-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .compliance-icon {
          font-size: 10px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .compliance-text {
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .compliance-text strong {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* Bottom Highlight Box */
        .bottom-highlight {
          margin-top: 10px;
          padding: 12px 18px;
          background: linear-gradient(135deg, ${theme.primary}08, ${theme.accent}08);
          border-radius: 12px;
          border-left: 4px solid ${theme.accent};
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .highlight-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: ${theme.accent};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .highlight-content {
          flex: 1;
        }

        .highlight-title {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 3px;
        }

        .highlight-text {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.45;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          top: 10px;
          right: 24px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.3;
        }

        .deco-dots {
          position: absolute;
          bottom: 10px;
          right: 32px;
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

        .slide-75 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-75">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Module 6 Key Takeaways: Daily Trust Maintenance</p>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Principles Table Section -->
          <div class="principles-section">
            <div class="section-label">
              <span class="icon">🤝</span>
              <span>日常信任维护的三个原则</span>
            </div>

            <table class="principles-table">
              <thead>
                <tr>
                  <th style="width: 28%;">原则</th>
                  <th style="width: 30%;">关键动作</th>
                  <th style="width: 42%;">核心理念</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="principle-action">聊期望，而不是聊数字</td>
                  <td class="principle-key">主动问员工对市场价值的看法</td>
                  <td class="principle-idea">引导员工主动思考自己的价值</td>
                </tr>
                <tr>
                  <td class="principle-action">给反馈，而不是等结果</td>
                  <td class="principle-key">项目完成后及时认可</td>
                  <td class="principle-idea">让员工感受到被关注</td>
                </tr>
                <tr>
                  <td class="principle-action">早预警，而不是年终通知</td>
                  <td class="principle-key">发现问题时提前沟通</td>
                  <td class="principle-idea">让员工有心理准备</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Middle Row: Comparison + Role Upgrade -->
          <div class="middle-row">
            <!-- Comparison Card -->
            <div class="comparison-card">
              <div class="section-label">
                <span class="icon">⚖️</span>
                <span>主动沟通 vs 被动应答</span>
              </div>

              <div class="comparison-list">
                <div class="comparison-item passive">
                  <div class="comparison-badge passive">被动</div>
                  <div class="comparison-text">员工问了才回应，调薪结果出来才谈</div>
                </div>
                <div class="comparison-item active">
                  <div class="comparison-badge active">主动</div>
                  <div class="comparison-text">定期同步，提前预警，持续关系经营</div>
                </div>
              </div>
            </div>

            <!-- Role Upgrade Card -->
            <div class="role-card">
              <div class="section-label">
                <span class="icon">🚀</span>
                <span>角色升级路径</span>
              </div>

              <div class="role-path">
                <div class="role-item explainer">解释者</div>
                <div class="role-arrow">→</div>
                <div class="role-item guide">引导者</div>
                <div class="role-arrow">→</div>
                <div class="role-item partner">共建者</div>
              </div>
              <div class="role-desc">从传递信息到引导思考，最终与员工共同决策</div>
            </div>
          </div>

          <!-- Compliance Card -->
          <div class="compliance-card">
            <div class="section-label">
              <span class="icon">📋</span>
              <span>薪酬透明法规提示</span>
            </div>

            <div class="compliance-list">
              <div class="compliance-item">
                <span class="compliance-icon">•</span>
                <div class="compliance-text"><strong>主动披露</strong>决策依据，比被动回应更安全</div>
              </div>
              <div class="compliance-item">
                <span class="compliance-icon">•</span>
                <div class="compliance-text"><strong>记录</strong>薪酬对话内容，以备合规审查</div>
              </div>
              <div class="compliance-item">
                <span class="compliance-icon">•</span>
                <div class="compliance-text">不确定时，<strong>"我需要确认后回复"</strong>是最佳策略</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Highlight -->
        <div class="bottom-highlight">
          <div class="highlight-icon">💎</div>
          <div class="highlight-content">
            <div class="highlight-title">核心洞察</div>
            <div class="highlight-text">持续的关系经营比一次性的解释更有价值。日常信任维护是基础，主动沟通是常态，角色升级是目标。</div>
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
