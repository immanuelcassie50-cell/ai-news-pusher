/**
 * Slide 36: 模块四要点回顾
 * Content Page - Module 4 Summary
 */

const slideConfig = {
  type: 'content',
  index: 36,
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
        .slide-36 {
          width: 100%;
          height: 100%;
          padding: 28px 40px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .slide-header {
          text-align: center;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 2px solid ${theme.light};
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
          opacity: 0.6;
        }

        /* Main Content Area */
        .main-content {
          display: flex;
          flex-direction: column;
          gap: 18px;
          flex: 1;
        }

        /* Section Title */
        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 10px;
        }

        .section-label .icon {
          font-size: 16px;
        }

        /* Scenarios Table */
        .scenarios-table {
          background: white;
          border-radius: 14px;
          padding: 18px 20px;
          box-shadow: 0 3px 12px ${theme.secondary}10;
          overflow: hidden;
        }

        .table-header {
          display: grid;
          grid-template-columns: 2fr 0.8fr 1.5fr 1.5fr;
          gap: 12px;
          padding: 10px 16px;
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .table-header-cell {
          font-size: 12px;
          font-weight: 600;
          color: white;
          text-align: center;
        }

        .table-header-cell:first-child {
          text-align: left;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 0.8fr 1.5fr 1.5fr;
          gap: 12px;
          padding: 10px 16px;
          align-items: center;
          border-bottom: 1px dashed ${theme.light};
          transition: background 0.2s ease;
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .table-row:hover {
          background: ${theme.bg};
          border-radius: 6px;
        }

        .scenario-name {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.primary};
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .scenario-icon {
          font-size: 16px;
        }

        .difficulty {
          text-align: center;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .difficulty-easy { color: #4CAF50; }
        .difficulty-medium { color: ${theme.accent}; }
        .difficulty-hard { color: ${theme.primary}; }

        .challenge {
          font-size: 12px;
          color: ${theme.secondary};
          text-align: center;
        }

        .strategy {
          font-size: 12px;
          color: ${theme.accent};
          font-weight: 500;
          text-align: center;
        }

        /* Key Insights Section */
        .insights-section {
          margin-top: auto;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .insight-card {
          background: white;
          border-radius: 12px;
          padding: 16px 18px;
          box-shadow: 0 3px 10px ${theme.secondary}08;
          border-top: 3px solid;
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .insight-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 16px ${theme.secondary}12;
        }

        .insight-card:nth-child(1) {
          border-top-color: ${theme.primary};
        }

        .insight-card:nth-child(2) {
          border-top-color: ${theme.accent};
        }

        .insight-card:nth-child(3) {
          border-top-color: ${theme.secondary};
        }

        .insight-number {
          position: absolute;
          top: -10px;
          left: 16px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: white;
        }

        .insight-card:nth-child(1) .insight-number {
          background: ${theme.primary};
        }

        .insight-card:nth-child(2) .insight-number {
          background: ${theme.accent};
        }

        .insight-card:nth-child(3) .insight-number {
          background: ${theme.secondary};
        }

        .insight-title {
          font-size: 13px;
          font-weight: 700;
          color: ${theme.primary};
          margin: 8px 0 6px 0;
        }

        .insight-card:nth-child(2) .insight-title {
          color: ${theme.accent};
        }

        .insight-card:nth-child(3) .insight-title {
          color: ${theme.secondary};
        }

        .insight-desc {
          font-size: 12px;
          color: ${theme.secondary};
          line-height: 1.5;
          opacity: 0.8;
        }

        /* Decorative elements */
        .deco-dots {
          position: absolute;
          top: 16px;
          right: 24px;
          display: flex;
          gap: 5px;
        }

        .deco-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          opacity: 0.25;
        }

        .deco-dot:nth-child(1) { background: ${theme.primary}; }
        .deco-dot:nth-child(2) { background: ${theme.accent}; }
        .deco-dot:nth-child(3) { background: ${theme.secondary}; }

        .slide-36 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-36">
        <!-- Decorative dots -->
        <div class="deco-dots">
          <div class="deco-dot"></div>
          <div class="deco-dot"></div>
          <div class="deco-dot"></div>
        </div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Module 4 Key Points Summary</p>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Scenarios Table -->
          <div class="scenarios-table">
            <div class="section-label">
              <span class="icon">📊</span>
              <span>五大场景要点</span>
            </div>

            <div class="table-header">
              <div class="table-header-cell">场景</div>
              <div class="table-header-cell">难度</div>
              <div class="table-header-cell">核心挑战</div>
              <div class="table-header-cell">关键策略</div>
            </div>

            <div class="table-row">
              <div class="scenario-name">
                <span class="scenario-icon">📋</span>
                年度调薪解读
              </div>
              <div class="difficulty difficulty-easy">★☆☆☆☆</div>
              <div class="challenge">标准化流程</div>
              <div class="strategy">双轨说明</div>
            </div>

            <div class="table-row">
              <div class="scenario-name">
                <span class="scenario-icon">🎯</span>
                晋升调薪解释
              </div>
              <div class="difficulty difficulty-medium">★★★☆☆</div>
              <div class="challenge">区分晋升与调薪</div>
              <div class="strategy">带宽和未来空间</div>
            </div>

            <div class="table-row">
              <div class="scenario-name">
                <span class="scenario-icon">📈</span>
                绩效关联薪酬
              </div>
              <div class="difficulty difficulty-medium">★★★☆☆</div>
              <div class="challenge">数据说服</div>
              <div class="strategy">数据+情感</div>
            </div>

            <div class="table-row">
              <div class="scenario-name">
                <span class="scenario-icon">⚖️</span>
                市场偏低调薪
              </div>
              <div class="difficulty difficulty-hard">★★★★☆</div>
              <div class="challenge">承认差距</div>
              <div class="strategy">路径和承诺</div>
            </div>

            <div class="table-row">
              <div class="scenario-name">
                <span class="scenario-icon">🤖</span>
                员工质疑AI
              </div>
              <div class="difficulty difficulty-hard">★★★★★</div>
              <div class="challenge">信任危机</div>
              <div class="strategy">情绪+事实+路径</div>
            </div>
          </div>

          <!-- Key Insights -->
          <div class="insights-section">
            <div class="section-label">
              <span class="icon">💡</span>
              <span>关键洞察</span>
            </div>

            <div class="insights-grid">
              <div class="insight-card">
                <div class="insight-number">1</div>
                <div class="insight-title">理解而非说服</div>
                <div class="insight-desc">薪酬对话的核心不是"说服"而是"理解"</div>
              </div>

              <div class="insight-card">
                <div class="insight-number">2</div>
                <div class="insight-title">先处理情绪</div>
                <div class="insight-desc">先处理情绪，再处理事实</div>
              </div>

              <div class="insight-card">
                <div class="insight-number">3</div>
                <div class="insight-title">信任存款</div>
                <div class="insight-desc">每一次对话都是信任存款的机会</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
