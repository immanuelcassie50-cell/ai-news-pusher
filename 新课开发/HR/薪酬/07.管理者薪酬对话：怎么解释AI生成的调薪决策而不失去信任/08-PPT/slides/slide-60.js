/**
 * Slide 60: 模块四要点回顾
 * Content Page - Module 4 Summary
 */

const slideConfig = {
  type: 'content',
  index: 60,
  title: '模块四要点回顾'
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
        .slide-60 {
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
          margin-bottom: 14px;
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

        /* Main Content Area */
        .main-content {
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
          min-height: 0;
        }

        /* Scenario Table Section */
        .scenario-section {
          background: white;
          border-radius: 14px;
          padding: 14px 16px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

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

        /* Scenario Table */
        .scenario-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 9.5px;
        }

        .scenario-table th {
          background: ${theme.light}40;
          color: ${theme.secondary};
          font-weight: 600;
          padding: 7px 10px;
          text-align: left;
          border-bottom: 1px solid ${theme.light};
        }

        .scenario-table th:first-child {
          border-radius: 6px 0 0 0;
        }

        .scenario-table th:last-child {
          border-radius: 0 6px 0 0;
        }

        .scenario-table td {
          padding: 8px 10px;
          color: ${theme.secondary};
          border-bottom: 1px solid ${theme.light}50;
          vertical-align: middle;
          line-height: 1.4;
        }

        .scenario-table tbody tr:hover td {
          background: ${theme.bg};
        }

        .scenario-name {
          font-weight: 600;
          color: ${theme.primary};
        }

        .difficulty {
          color: ${theme.accent};
          letter-spacing: 1px;
        }

        .challenge {
          color: ${theme.secondary};
        }

        .strategy {
          color: ${theme.primary};
          font-weight: 500;
        }

        /* Core Insights Section */
        .insights-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .insight-card {
          background: white;
          border-radius: 14px;
          padding: 12px 14px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          position: relative;
          overflow: hidden;
        }

        .insight-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 14px 14px 0 0;
        }

        .insight-card.main::before {
          background: linear-gradient(90deg, ${theme.primary}, ${theme.accent});
        }

        .insight-card.sub::before {
          background: linear-gradient(90deg, ${theme.accent}, ${theme.light});
        }

        .insight-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 8px;
        }

        .insight-label::before {
          content: '';
          width: 3px;
          height: 11px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        .insight-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .insight-list li {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.45;
          padding-left: 14px;
          position: relative;
        }

        .insight-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: ${theme.accent};
          font-weight: 600;
        }

        .insight-list.main-list li::before {
          content: '◆';
          color: ${theme.primary};
        }

        .highlight-text {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* Bottom Highlight Box */
        .bottom-highlight {
          margin-top: 12px;
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

        .slide-60 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-60">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Module 4 Key Takeaways</p>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Scenario Table -->
          <div class="scenario-section">
            <div class="section-label">
              <span class="icon">📊</span>
              <span>五大场景对话要点回顾</span>
            </div>

            <table class="scenario-table">
              <thead>
                <tr>
                  <th style="width: 18%;">场景</th>
                  <th style="width: 12%;">难度</th>
                  <th style="width: 32%;">核心挑战</th>
                  <th style="width: 38%;">关键策略</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="scenario-name">年度调薪解读</td>
                  <td class="difficulty">★☆☆☆☆</td>
                  <td class="challenge">标准化流程</td>
                  <td class="strategy">先说结果，再双轨说明</td>
                </tr>
                <tr>
                  <td class="scenario-name">晋升调薪解释</td>
                  <td class="difficulty">★★★☆☆</td>
                  <td class="challenge">区分晋升与调薪</td>
                  <td class="strategy">先肯定晋升，分开谈两件事</td>
                </tr>
                <tr>
                  <td class="scenario-name">绩效关联薪酬</td>
                  <td class="difficulty">★★★☆☆</td>
                  <td class="challenge">数据说服+情感</td>
                  <td class="strategy">数据是基础，人文是终点</td>
                </tr>
                <tr>
                  <td class="scenario-name">市场偏低调薪</td>
                  <td class="difficulty">★★★★☆</td>
                  <td class="challenge">承认差距</td>
                  <td class="strategy">承认现实，给出路径</td>
                </tr>
                <tr>
                  <td class="scenario-name">员工质疑AI</td>
                  <td class="difficulty">★★★★★</td>
                  <td class="challenge">信任危机</td>
                  <td class="strategy">先处理情绪，再处理事实</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Core Insights Grid -->
          <div class="insights-section">
            <!-- Main Insight Card -->
            <div class="insight-card main">
              <div class="insight-label">模块四核心洞察</div>
              <ul class="insight-list main-list">
                <li>薪酬对话的核心不是<span class="highlight-text">"说服"</span>，而是<span class="highlight-text">"理解"</span></li>
                <li>先处理情绪，再处理事实</li>
                <li>每一次对话都是信任存款的机会</li>
              </ul>
            </div>

            <!-- Sub Insight Card -->
            <div class="insight-card sub">
              <div class="insight-label">关键认知</div>
              <ul class="insight-list">
                <li>同样一个数字，不同的对话方式，员工感受可能相差<span class="highlight-text">30%以上</span></li>
                <li>AI是工具，管理者是桥梁</li>
                <li>承认局限比伪装全知更值得尊敬</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom Highlight -->
        <div class="bottom-highlight">
          <div class="highlight-icon">💎</div>
          <div class="highlight-content">
            <div class="highlight-title">核心洞察</div>
            <div class="highlight-text">薪酬对话的核心不是"说服"，而是"理解"。先处理情绪，再处理事实。每一次对话都是信任存款的机会。</div>
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
