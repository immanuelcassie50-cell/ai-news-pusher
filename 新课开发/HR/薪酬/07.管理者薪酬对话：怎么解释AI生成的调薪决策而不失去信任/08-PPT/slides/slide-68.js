/**
 * Slide 68: 模块五要点回顾
 * Content Page - Module 5 Summary
 */

const slideConfig = {
  type: 'content',
  index: 68,
  title: '模块五要点回顾'
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
        .slide-68 {
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
          font-size: 19px;
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

        /* Main Content Area */
        .main-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          min-height: 0;
        }

        /* Tables Section */
        .tables-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          flex: 1;
        }

        /* Table Card */
        .table-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
        }

        .table-card-header {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10.5px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 9px;
        }

        .table-card-header .icon {
          font-size: 12px;
        }

        .table-card-header::before {
          content: '';
          width: 3px;
          height: 12px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* Table Styles */
        .info-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 8.5px;
          flex: 1;
        }

        .info-table th {
          background: ${theme.light}40;
          color: ${theme.secondary};
          font-weight: 600;
          padding: 6px 8px;
          text-align: left;
          border-bottom: 1px solid ${theme.light};
        }

        .info-table th:first-child {
          border-radius: 5px 0 0 0;
        }

        .info-table th:last-child {
          border-radius: 0 5px 0 0;
        }

        .info-table td {
          padding: 6px 8px;
          color: ${theme.secondary};
          border-bottom: 1px solid ${theme.light}40;
          vertical-align: middle;
          line-height: 1.35;
        }

        .info-table tbody tr:hover td {
          background: ${theme.bg};
        }

        .step-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          background: ${theme.primary};
          color: white;
          border-radius: 50%;
          font-size: 8px;
          font-weight: 600;
          margin-right: 4px;
        }

        .keyword {
          color: ${theme.accent};
          font-weight: 600;
        }

        .action {
          color: ${theme.primary};
          font-weight: 500;
        }

        /* Objection Table Specific */
        .objection-text {
          color: ${theme.secondary};
          font-style: italic;
          font-size: 8px;
        }

        .appeal {
          color: ${theme.accent};
          font-weight: 500;
        }

        .strategy-text {
          color: ${theme.primary};
          font-weight: 500;
          font-size: 8px;
          line-height: 1.3;
        }

        /* Core Insight Section */
        .insight-section {
          background: white;
          border-radius: 12px;
          padding: 11px 16px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          position: relative;
          overflow: hidden;
        }

        .insight-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, ${theme.primary}, ${theme.accent});
          border-radius: 12px 12px 0 0;
        }

        .insight-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .insight-label {
          font-size: 10px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .insight-label::before {
          content: '';
          width: 3px;
          height: 11px;
          background: ${theme.accent};
          border-radius: 2px;
          margin-right: 2px;
        }

        .insight-content {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .insight-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: linear-gradient(135deg, ${theme.primary}15, ${theme.accent}15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        .insight-main {
          flex: 1;
        }

        .insight-title {
          font-size: 10.5px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 4px;
        }

        .insight-description {
          font-size: 9px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .insight-highlight {
          color: ${theme.accent};
          font-weight: 600;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          top: 8px;
          right: 26px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.25;
        }

        .deco-dots {
          position: absolute;
          bottom: 12px;
          right: 34px;
          display: flex;
          gap: 2.5px;
        }

        .deco-dot {
          width: 3.5px;
          height: 3.5px;
          border-radius: 50%;
          opacity: 0.18;
        }

        .deco-dot:nth-child(1) { background: ${theme.primary}; }
        .deco-dot:nth-child(2) { background: ${theme.accent}; }
        .deco-dot:nth-child(3) { background: ${theme.secondary}; }

        .slide-68 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-68">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Module 5 Key Takeaways</p>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Two Tables Section -->
          <div class="tables-section">
            <!-- Table 1: 异议处理四步法 -->
            <div class="table-card">
              <div class="table-card-header">
                <span class="icon">📋</span>
                <span>异议处理四步法</span>
              </div>
              <table class="info-table">
                <thead>
                  <tr>
                    <th style="width: 15%;">步骤</th>
                    <th style="width: 22%;">关键词</th>
                    <th style="width: 63%;">核心动作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="step-badge">1</span>倾听</td>
                    <td class="keyword">不打断、不防御</td>
                    <td class="action">确认理解员工的诉求</td>
                  </tr>
                  <tr>
                    <td><span class="step-badge">2</span>共情</td>
                    <td class="keyword">认可情绪</td>
                    <td class="action">承认感受的合理性</td>
                  </tr>
                  <tr>
                    <td><span class="step-badge">3</span>解释</td>
                    <td class="keyword">说事实、不甩锅</td>
                    <td class="action">说明决策依据和实际权限</td>
                  </tr>
                  <tr>
                    <td><span class="step-badge">4</span>承诺</td>
                    <td class="keyword">具体行动</td>
                    <td class="action">说明下一步、时间和结果</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Table 2: 四种典型异议的应对要点 -->
            <div class="table-card">
              <div class="table-card-header">
                <span class="icon">💬</span>
                <span>四种典型异议的应对要点</span>
              </div>
              <table class="info-table">
                <thead>
                  <tr>
                    <th style="width: 32%;">员工的话</th>
                    <th style="width: 26%;">核心诉求</th>
                    <th style="width: 42%;">关键策略</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="objection-text">"AI说了算，你也没权力改变？"</td>
                    <td class="appeal">管理者愿不愿意为我争取</td>
                    <td class="strategy-text">承认权限有限，但证明"争取过"</td>
                  </tr>
                  <tr>
                    <td class="objection-text">"为什么他调了我没调？"</td>
                    <td class="appeal">被公正对待</td>
                    <td class="strategy-text">不能比数字，但可以比判断逻辑</td>
                  </tr>
                  <tr>
                    <td class="objection-text">"AI的数据准吗？"</td>
                    <td class="appeal">系统可信度</td>
                    <td class="strategy-text">说明数据来源，承认局限性</td>
                  </tr>
                  <tr>
                    <td class="objection-text">"我就想知道你觉得我值多少"</td>
                    <td class="appeal">被认可、被看见</td>
                    <td class="strategy-text">管理者亲口说出你的价值判断</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Core Insight Section -->
          <div class="insight-section">
            <div class="insight-header">
              <span class="insight-label">模块五核心认知</span>
            </div>
            <div class="insight-content">
              <div class="insight-icon">💡</div>
              <div class="insight-main">
                <div class="insight-title">异议不是"麻烦"，是员工在告诉你"我需要被重视"</div>
                <div class="insight-description">
                  每一次处理异议，都是一次<span class="insight-highlight">信任存款</span>的机会
                </div>
              </div>
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
