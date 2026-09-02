/**
 * Slide 30: 模块四：薪酬对话场景实战
 * Content Page - Scenario-Based Training Overview
 */

const slideConfig = {
  type: 'content',
  index: 30,
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
        .slide-30 {
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
        }

        .slide-title {
          font-size: 26px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 5px 0;
        }

        .slide-subtitle {
          font-size: 12px;
          color: ${theme.secondary};
          opacity: 0.6;
        }

        /* Scenarios Grid */
        .scenarios-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          flex: 1;
          align-items: stretch;
        }

        /* Scenario Card */
        .scenario-card {
          background: white;
          border-radius: 14px;
          padding: 16px 14px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .scenario-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 16px ${theme.secondary}12;
        }

        /* Scenario Number Badge */
        .scenario-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          color: white;
          background: ${theme.primary};
        }

        /* Scenario Name */
        .scenario-name {
          font-size: 15px;
          font-weight: 700;
          color: ${theme.primary};
          text-align: center;
          margin: 8px 0 10px 0;
          padding-top: 6px;
          line-height: 1.3;
        }

        /* Scenario Type */
        .scenario-type {
          background: ${theme.bg};
          border-radius: 8px;
          padding: 8px 10px;
          margin-bottom: 10px;
          text-align: center;
        }

        .scenario-type-label {
          font-size: 9px;
          font-weight: 600;
          color: ${theme.secondary};
          opacity: 0.5;
          margin-bottom: 3px;
        }

        .scenario-type-text {
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.3;
        }

        /* Difficulty Stars */
        .difficulty-section {
          text-align: center;
          margin-bottom: 10px;
        }

        .difficulty-label {
          font-size: 9px;
          font-weight: 600;
          color: ${theme.secondary};
          opacity: 0.5;
          margin-bottom: 4px;
        }

        .difficulty-stars {
          display: flex;
          justify-content: center;
          gap: 3px;
        }

        .star {
          font-size: 14px;
          color: ${theme.light};
          transition: color 0.2s ease;
        }

        .star.filled {
          color: ${theme.accent};
        }

        /* Key Focus */
        .key-focus {
          margin-top: auto;
          padding: 10px 10px;
          background: linear-gradient(135deg, ${theme.primary}06 0%, ${theme.light}30 100%);
          border-radius: 8px;
          border-left: 3px solid ${theme.accent};
        }

        .key-focus-label {
          font-size: 9px;
          font-weight: 600;
          color: ${theme.secondary};
          opacity: 0.5;
          margin-bottom: 3px;
        }

        .key-focus-text {
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        /* Decorative dots */
        .decor-dots {
          position: absolute;
          top: 14px;
          right: 14px;
          display: flex;
          gap: 4px;
        }

        .decor-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          opacity: 0.25;
        }

        .decor-dot:nth-child(1) { background: ${theme.primary}; }
        .decor-dot:nth-child(2) { background: ${theme.accent}; }
        .decor-dot:nth-child(3) { background: ${theme.secondary}; }

        /* Bottom Info */
        .bottom-info {
          text-align: center;
          margin-top: 14px;
          padding: 10px 20px;
          background: linear-gradient(135deg, ${theme.primary}06 0%, ${theme.accent}06 100%);
          border-radius: 10px;
        }

        .bottom-info-text {
          font-size: 12px;
          color: ${theme.secondary};
          opacity: 0.7;
        }

        .bottom-info-text strong {
          color: ${theme.primary};
          font-weight: 600;
        }
      </style>

      <div class="slide-header">
        <h1 class="slide-title">${slideConfig.title}</h1>
        <p class="slide-subtitle">Scenario-Based Training Overview</p>
      </div>

      <div class="scenarios-grid">
        <!-- Scenario 1: 年度调薪解读 -->
        <div class="scenario-card">
          <div class="scenario-badge">1</div>
          <div class="decor-dots">
            <div class="decor-dot"></div>
            <div class="decor-dot"></div>
            <div class="decor-dot"></div>
          </div>
          <div class="scenario-name">年度调薪解读</div>
          <div class="scenario-type">
            <div class="scenario-type-label">类型</div>
            <div class="scenario-type-text">常规对话</div>
          </div>
          <div class="difficulty-section">
            <div class="difficulty-label">难度</div>
            <div class="difficulty-stars">
              <span class="star filled">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
            </div>
          </div>
          <div class="key-focus">
            <div class="key-focus-label">重点</div>
            <div class="key-focus-text">标准化流程，双轨说明</div>
          </div>
        </div>

        <!-- Scenario 2: 晋升调薪解释 -->
        <div class="scenario-card">
          <div class="scenario-badge">2</div>
          <div class="decor-dots">
            <div class="decor-dot"></div>
            <div class="decor-dot"></div>
            <div class="decor-dot"></div>
          </div>
          <div class="scenario-name">晋升调薪解释</div>
          <div class="scenario-type">
            <div class="scenario-type-label">类型</div>
            <div class="scenario-type-text">有对比的敏感对话</div>
          </div>
          <div class="difficulty-section">
            <div class="difficulty-label">难度</div>
            <div class="difficulty-stars">
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
            </div>
          </div>
          <div class="key-focus">
            <div class="key-focus-label">重点</div>
            <div class="key-focus-text">处理晋升与调薪的关系</div>
          </div>
        </div>

        <!-- Scenario 3: 绩效关联薪酬说明 -->
        <div class="scenario-card">
          <div class="scenario-badge">3</div>
          <div class="decor-dots">
            <div class="decor-dot"></div>
            <div class="decor-dot"></div>
            <div class="decor-dot"></div>
          </div>
          <div class="scenario-name">绩效关联薪酬说明</div>
          <div class="scenario-type">
            <div class="scenario-type-label">类型</div>
            <div class="scenario-type-text">数据驱动的对话</div>
          </div>
          <div class="difficulty-section">
            <div class="difficulty-label">难度</div>
            <div class="difficulty-stars">
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
            </div>
          </div>
          <div class="key-focus">
            <div class="key-focus-label">重点</div>
            <div class="key-focus-text">用数据说服，同时关注情感</div>
          </div>
        </div>

        <!-- Scenario 4: 市场偏低调薪解释 -->
        <div class="scenario-card">
          <div class="scenario-badge">4</div>
          <div class="decor-dots">
            <div class="decor-dot"></div>
            <div class="decor-dot"></div>
            <div class="decor-dot"></div>
          </div>
          <div class="scenario-name">市场偏低调薪解释</div>
          <div class="scenario-type">
            <div class="scenario-type-label">类型</div>
            <div class="scenario-type-text">最难开口的对话</div>
          </div>
          <div class="difficulty-section">
            <div class="difficulty-label">难度</div>
            <div class="difficulty-stars">
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star">★</span>
            </div>
          </div>
          <div class="key-focus">
            <div class="key-focus-label">重点</div>
            <div class="key-focus-text">承认市场差距，给出未来路径</div>
          </div>
        </div>

        <!-- Scenario 5: 员工质疑AI决策 -->
        <div class="scenario-card">
          <div class="scenario-badge">5</div>
          <div class="decor-dots">
            <div class="decor-dot"></div>
            <div class="decor-dot"></div>
            <div class="decor-dot"></div>
          </div>
          <div class="scenario-name">员工质疑AI决策</div>
          <div class="scenario-type">
            <div class="scenario-type-label">类型</div>
            <div class="scenario-type-text">信任危机对话</div>
          </div>
          <div class="difficulty-section">
            <div class="difficulty-label">难度</div>
            <div class="difficulty-stars">
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
              <span class="star filled">★</span>
            </div>
          </div>
          <div class="key-focus">
            <div class="key-focus-label">重点</div>
            <div class="key-focus-text">重建信任，处理情绪</div>
          </div>
        </div>
      </div>

      <div class="bottom-info">
        <div class="bottom-info-text">从<strong>常规对话</strong>到<strong>信任危机</strong>，循序渐进提升应对能力</div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
