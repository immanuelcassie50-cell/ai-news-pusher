/**
 * Slide 57: 场景三：绩效关联薪酬说明
 * Content Page - Scenario 3: Performance-linked Salary Explanation
 */

const slideConfig = {
  type: 'content',
  index: 57,
  title: '场景三：绩效关联薪酬说明'
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
        .slide-57 {
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
          margin-bottom: 10px;
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
          gap: 14px;
          flex: 1;
          min-height: 0;
        }

        /* Left Column */
        .left-column {
          width: 40%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Right Column */
        .right-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Section Label */
        .section-label {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10.5px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 4px;
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

        /* Scenario Card */
        .scenario-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .scenario-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .scenario-badge {
          padding: 4px 10px;
          background: ${theme.primary}12;
          border-radius: 6px;
          font-size: 9px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .scenario-type {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.7;
        }

        .difficulty {
          display: flex;
          gap: 3px;
          margin-left: auto;
        }

        .difficulty-star {
          font-size: 9px;
          color: ${theme.accent};
        }

        .difficulty-star.empty {
          opacity: 0.25;
        }

        .scenario-desc {
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.4;
          margin-bottom: 8px;
        }

        .challenge-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          background: ${theme.accent}12;
          border-radius: 6px;
          font-size: 9px;
          color: ${theme.accent};
        }

        /* Dialogue Points Card */
        .dialogue-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          flex: 1;
        }

        .dialogue-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .dialogue-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .dialogue-num {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          background: ${theme.primary};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .dialogue-item:nth-child(2) .dialogue-num { background: ${theme.accent}; }
        .dialogue-item:nth-child(3) .dialogue-num { background: ${theme.secondary}; }
        .dialogue-item:nth-child(4) .dialogue-num { background: ${theme.primary}80; }

        .dialogue-content {
          flex: 1;
          min-width: 0;
        }

        .dialogue-title {
          font-size: 10.5px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 2px;
        }

        .dialogue-item:nth-child(2) .dialogue-title { color: ${theme.accent}; }
        .dialogue-item:nth-child(3) .dialogue-title { color: ${theme.secondary}; }
        .dialogue-item:nth-child(4) .dialogue-title { color: ${theme.primary}80; }

        .dialogue-text {
          font-size: 9px;
          color: ${theme.secondary};
          line-height: 1.35;
          opacity: 0.85;
        }

        /* Script Card */
        .script-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .script-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .script-icon {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
        }

        .script-title {
          font-size: 11px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .script-quote {
          background: ${theme.bg};
          border-radius: 10px;
          padding: 12px 14px;
          border-left: 3px solid ${theme.accent};
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.55;
        }

        .script-quote .highlight {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* Reactions Card */
        .reactions-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          flex: 1;
        }

        .reactions-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .reactions-icon {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: ${theme.accent}15;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
        }

        .reactions-title {
          font-size: 11px;
          font-weight: 700;
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
          gap: 4px;
        }

        .reaction-q {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          padding: 8px 10px;
          background: ${theme.primary}08;
          border-radius: 8px;
        }

        .reaction-q-icon {
          font-size: 10px;
          color: ${theme.primary};
          flex-shrink: 0;
          margin-top: 1px;
        }

        .reaction-q-text {
          font-size: 9.5px;
          color: ${theme.primary};
          font-weight: 600;
          line-height: 1.35;
        }

        .reaction-a {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          padding: 8px 10px;
          background: ${theme.accent}08;
          border-radius: 8px;
          margin-left: 12px;
        }

        .reaction-a-icon {
          font-size: 10px;
          color: ${theme.accent};
          flex-shrink: 0;
          margin-top: 1px;
        }

        .reaction-a-text {
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.35;
        }

        .reaction-a-text strong {
          color: ${theme.accent};
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

        .slide-57 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-57">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Data-driven Dialogue • Performance-based Adjustment</p>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Left Column -->
          <div class="left-column">
            <!-- Scenario Background -->
            <div class="scenario-card">
              <div class="scenario-header">
                <span class="scenario-badge">场景背景</span>
                <span class="scenario-type">数据驱动的对话</span>
                <div class="difficulty">
                  <span class="difficulty-star">★</span>
                  <span class="difficulty-star">★</span>
                  <span class="difficulty-star">★</span>
                  <span class="difficulty-star empty">★</span>
                  <span class="difficulty-star empty">★</span>
                </div>
              </div>
              <p class="scenario-desc">用数据说服员工，同时关注情感需求</p>
              <div class="challenge-tag">
                <span>🎯</span>
                <span>核心挑战：绩效与市场的双重平衡</span>
              </div>
            </div>

            <!-- Dialogue Points -->
            <div class="dialogue-card">
              <div class="section-label">
                <span class="icon">💬</span>
                <span>对话要点</span>
              </div>

              <div class="dialogue-list">
                <div class="dialogue-item">
                  <div class="dialogue-num">1</div>
                  <div class="dialogue-content">
                    <div class="dialogue-title">先说绩效结果</div>
                    <div class="dialogue-text">绩效是调薪的核心依据之一</div>
                  </div>
                </div>

                <div class="dialogue-item">
                  <div class="dialogue-num">2</div>
                  <div class="dialogue-content">
                    <div class="dialogue-title">数据支撑</div>
                    <div class="dialogue-text">展示绩效评分、调薪幅度、市场参照的关联</div>
                  </div>
                </div>

                <div class="dialogue-item">
                  <div class="dialogue-num">3</div>
                  <div class="dialogue-content">
                    <div class="dialogue-title">承认情感</div>
                    <div class="dialogue-text">绩效好的员工往往期待更高，需要先认可情绪</div>
                  </div>
                </div>

                <div class="dialogue-item">
                  <div class="dialogue-num">4</div>
                  <div class="dialogue-content">
                    <div class="dialogue-title">给出路径</div>
                    <div class="dialogue-text">绩效好意味着下次有更大的调薪空间</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="right-column">
            <!-- Script Template -->
            <div class="script-card">
              <div class="script-header">
                <div class="script-icon">📋</div>
                <span class="script-title">话术模板</span>
              </div>
              <div class="script-quote">
                "你的绩效是<span class="highlight">A</span>，这个评级在部门里只有<span class="highlight">10%</span%的人拿到。但我需要说明一下：绩效是调薪的重要依据，但不是唯一依据。<span class="highlight">市场数据</span>也是参考维度之一。你的市场参照值是<span class="highlight">P50</span>分位，这次调薪是<span class="highlight">7%</span>，在绩效A的员工里属于中等偏上。原因是我参考了你的市场水位——你的薪资目前已经<span class="highlight">略高于市场中位数</span>，这个调薪幅度是在预算内平衡了绩效和市场双重因素的结果。"
              </div>
            </div>

            <!-- Employee Reactions -->
            <div class="reactions-card">
              <div class="reactions-header">
                <div class="reactions-icon">🤔</div>
                <span class="reactions-title">员工可能的反应</span>
              </div>

              <div class="reactions-list">
                <div class="reaction-item">
                  <div class="reaction-q">
                    <span class="reaction-q-icon">Q</span>
                    <span class="reaction-q-text">"绩效A才调7%，那绩效B呢？"</span>
                  </div>
                  <div class="reaction-a">
                    <span class="reaction-a-icon">A</span>
                    <span class="reaction-a-text">"<strong>绩效B的调薪区间大概在3%-5%</strong>，不同评级之间有合理差距"</span>
                  </div>
                </div>

                <div class="reaction-item">
                  <div class="reaction-q">
                    <span class="reaction-q-icon">Q</span>
                    <span class="reaction-q-text">"我的市场价值不是P50吗，为什么不调到P75？"</span>
                  </div>
                  <div class="reaction-a">
                    <span class="reaction-a-icon">A</span>
                    <span class="reaction-a-text">"<strong>P75需要连续2-3年保持高绩效</strong>才可能，我会持续关注你的发展"</span>
                  </div>
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
