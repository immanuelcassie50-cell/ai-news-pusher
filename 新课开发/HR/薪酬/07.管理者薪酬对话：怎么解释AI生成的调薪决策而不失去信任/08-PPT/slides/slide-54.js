/**
 * Slide 54: 模块四：薪酬对话场景实战
 * Content Page - Scenario Training Overview for Module 4
 */

const slideConfig = {
  type: 'content',
  index: 54,
  title: '模块四：薪酬对话场景实战'
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
        .slide-54 {
          width: 100%;
          height: 100%;
          padding: 16px 24px;
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
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.5;
        }

        /* Scenarios Grid - 3 on top, 2 on bottom centered */
        .scenarios-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 10px;
          flex: 1;
          min-height: 0;
        }

        .scenario-row-2 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 0;
        }

        .scenario-row-2 .scenario-card:last-child {
          grid-column: 2;
        }

        /* Scenario Card */
        .scenario-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
          min-height: 0;
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .scenario-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${theme.secondary}12;
        }

        /* Card accent bar */
        .scenario-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          border-radius: 12px 0 0 12px;
        }

        .scenario-card.s1::before { background: ${theme.primary}; }
        .scenario-card.s2::before { background: ${theme.accent}; }
        .scenario-card.s3::before { background: ${theme.secondary}; }
        .scenario-card.s4::before { background: ${theme.accent}CC; }
        .scenario-card.s5::before { background: ${theme.primary}; }

        /* Card Header */
        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
          padding-left: 8px;
        }

        .scenario-name {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .scenario-card.s2 .scenario-name { color: ${theme.accent}; }
        .scenario-card.s3 .scenario-name { color: ${theme.secondary}; }

        /* Difficulty Stars */
        .difficulty {
          display: flex;
          gap: 2px;
        }

        .star {
          font-size: 10px;
          line-height: 1;
        }

        .star.filled {
          color: ${theme.accent};
        }

        .star.empty {
          color: ${theme.light};
        }

        /* Card Body */
        .card-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        /* Type Tag */
        .type-tag {
          display: inline-flex;
          align-items: center;
          padding: 3px 8px;
          background: ${theme.bg};
          border-radius: 5px;
          font-size: 9px;
          color: ${theme.secondary};
          width: fit-content;
          margin-left: 8px;
        }

        /* Key Focus */
        .key-focus {
          padding: 6px 10px;
          background: ${theme.bg};
          border-radius: 8px;
          margin-left: 8px;
        }

        .key-focus-label {
          font-size: 8px;
          color: ${theme.secondary};
          opacity: 0.6;
          margin-bottom: 2px;
          font-weight: 500;
        }

        .key-focus-text {
          font-size: 10px;
          color: ${theme.primary};
          font-weight: 500;
          line-height: 1.35;
        }

        /* Typical Question */
        .typical-question {
          padding: 6px 10px;
          background: linear-gradient(135deg, ${theme.primary}06 0%, ${theme.accent}06 100%);
          border-radius: 8px;
          border-left: 3px solid ${theme.accent};
          margin-left: 8px;
          margin-top: auto;
        }

        .question-label {
          font-size: 8px;
          color: ${theme.secondary};
          opacity: 0.6;
          margin-bottom: 2px;
          font-weight: 500;
        }

        .question-text {
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.35;
          font-style: italic;
        }

        /* Bottom Row Specific */
        .scenario-row-2 {
          margin-top: 10px;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          top: 10px;
          right: 20px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.25;
        }

        .deco-dots {
          position: absolute;
          bottom: 12px;
          right: 24px;
          display: flex;
          gap: 3px;
        }

        .deco-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          opacity: 0.15;
        }

        .deco-dot:nth-child(1) { background: ${theme.primary}; }
        .deco-dot:nth-child(2) { background: ${theme.accent}; }
        .deco-dot:nth-child(3) { background: ${theme.secondary}; }

        .slide-54 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-54">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Module 4: Compensation Dialogue Scenario Training</p>
        </div>

        <!-- Scenarios Grid - Row 1: 3 cards -->
        <div class="scenarios-grid">
          <!-- Scenario 1 -->
          <div class="scenario-card s1">
            <div class="card-header">
              <span class="scenario-name">场景1：年度调薪解读</span>
            </div>
            <div class="difficulty">
              <span class="star filled">★</span>
              <span class="star empty">☆</span>
              <span class="star empty">☆</span>
              <span class="star empty">☆</span>
              <span class="star empty">☆</span>
            </div>
            <div class="card-body">
              <div class="type-tag">类型：常规对话</div>
              <div class="key-focus">
                <div class="key-focus-label">重点</div>
                <div class="key-focus-text">标准化流程，双轨说明</div>
              </div>
              <div class="typical-question">
                <div class="question-label">员工典型问题</div>
                <div class="question-text">"我的调薪是怎么算出来的？"</div>
              </div>
            </div>
          </div>

          <!-- Scenario 2 -->
          <div class="scenario-card s2">
            <div class="card-header">
              <span class="scenario-name">场景2：晋升调薪解释</span>
            </div>
            <div class="difficulty">
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star empty">☆</span>
              <span class="star empty">☆</span>
            </div>
            <div class="card-body">
              <div class="type-tag">类型：有对比的敏感对话</div>
              <div class="key-focus">
                <div class="key-focus-label">重点</div>
                <div class="key-focus-text">处理晋升与调薪的关系</div>
              </div>
              <div class="typical-question">
                <div class="question-label">员工典型问题</div>
                <div class="question-text">"我晋升了，调薪幅度为什么不够满意？"</div>
              </div>
            </div>
          </div>

          <!-- Scenario 3 -->
          <div class="scenario-card s3">
            <div class="card-header">
              <span class="scenario-name">场景3：绩效关联薪酬说明</span>
            </div>
            <div class="difficulty">
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star empty">☆</span>
              <span class="star empty">☆</span>
            </div>
            <div class="card-body">
              <div class="type-tag">类型：数据驱动的对话</div>
              <div class="key-focus">
                <div class="key-focus-label">重点</div>
                <div class="key-focus-text">用数据说服，同时关注情感</div>
              </div>
              <div class="typical-question">
                <div class="question-label">员工典型问题</div>
                <div class="question-text">"我的绩效这么好，为什么调薪不多？"</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scenarios Grid - Row 2: 2 cards centered -->
        <div class="scenario-row-2">
          <!-- Scenario 4 -->
          <div class="scenario-card s4">
            <div class="card-header">
              <span class="scenario-name">场景4：市场偏低调薪解释</span>
            </div>
            <div class="difficulty">
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star empty">☆</span>
            </div>
            <div class="card-body">
              <div class="type-tag">类型：最难开口的对话</div>
              <div class="key-focus">
                <div class="key-focus-label">重点</div>
                <div class="key-focus-text">承认市场差距，给出未来路径</div>
              </div>
              <div class="typical-question">
                <div class="question-label">员工典型问题</div>
                <div class="question-text">"市场说我值更多，为什么我拿到的更少？"</div>
              </div>
            </div>
          </div>

          <!-- Scenario 5 -->
          <div class="scenario-card s5">
            <div class="card-header">
              <span class="scenario-name">场景5：员工质疑AI决策</span>
            </div>
            <div class="difficulty">
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
            </div>
            <div class="card-body">
              <div class="type-tag">类型：信任危机对话</div>
              <div class="key-focus">
                <div class="key-focus-label">重点</div>
                <div class="key-focus-text">重建信任，处理情绪</div>
              </div>
              <div class="typical-question">
                <div class="question-label">员工典型问题</div>
                <div class="question-text">"这是AI定的吧？你自己觉得合理吗？"</div>
              </div>
            </div>
          </div>

          <!-- Empty placeholder for centering -->
          <div style="visibility: hidden;"></div>
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
