/**
 * Slide 66: 应对"AI的数据准吗？"
 * Content Page - Handling Objection 3: Data Accuracy Concerns
 */

const slideConfig = {
  type: 'content',
  index: 66,
  title: '应对"AI的数据准吗？"'
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
        .slide-66 {
          width: 100%;
          height: 100%;
          padding: 14px 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .slide-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
          padding-bottom: 8px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .objection-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, ${theme.accent} 0%, ${theme.primary} 100%);
          border-radius: 9px;
          color: white;
          font-size: 18px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .slide-title {
          font-size: 20px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0;
        }

        /* Main Content Grid */
        .main-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto auto;
          gap: 10px;
          flex: 1;
          min-height: 0;
        }

        /* Employee Meaning Card */
        .meaning-card {
          grid-column: 1;
          grid-row: 1;
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          border-left: 4px solid ${theme.accent};
        }

        .card-title {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.secondary};
          margin: 0 0 10px 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .card-title .icon {
          font-size: 13px;
        }

        .meaning-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .meaning-item {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          padding: 5px 8px;
          background: ${theme.bg};
          border-radius: 6px;
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .meaning-item::before {
          content: '"';
          color: ${theme.accent};
          font-weight: 700;
          font-size: 14px;
          line-height: 1;
          flex-shrink: 0;
        }

        .meaning-item::after {
          content: '"';
          color: ${theme.accent};
          font-weight: 700;
          font-size: 14px;
          line-height: 1;
          flex-shrink: 0;
        }

        .sub-text {
          font-size: 9.5px;
          color: ${theme.secondary};
          opacity: 0.7;
          margin-top: 8px;
          padding-left: 8px;
          border-left: 2px solid ${theme.light};
          font-style: italic;
        }

        /* Data Sources Card */
        .sources-card {
          grid-column: 2;
          grid-row: 1;
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          border-left: 4px solid ${theme.primary};
        }

        .sources-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 4px;
        }

        .source-box {
          padding: 8px 10px;
          background: ${theme.bg};
          border-radius: 8px;
        }

        .source-label {
          font-size: 10px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .source-desc {
          font-size: 9px;
          color: ${theme.secondary};
          line-height: 1.35;
        }

        .limitation-box {
          grid-column: 1 / -1;
          padding: 8px 10px;
          background: linear-gradient(135deg, ${theme.accent}08 0%, ${theme.bg} 100%);
          border-radius: 8px;
          border: 1px solid ${theme.accent}20;
        }

        .limitation-label {
          font-size: 10px;
          font-weight: 600;
          color: ${theme.accent};
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .limitation-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .limitation-item {
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.35;
          padding-left: 10px;
          position: relative;
        }

        .limitation-item::before {
          content: '•';
          position: absolute;
          left: 0;
          color: ${theme.accent};
          font-weight: bold;
        }

        /* Four Steps Card */
        .four-steps-card {
          grid-column: 1 / -1;
          grid-row: 2;
          background: white;
          border-radius: 12px;
          padding: 12px 16px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          position: relative;
          overflow: hidden;
        }

        .four-steps-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, ${theme.primary} 0%, ${theme.accent} 100%);
        }

        .steps-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .steps-title {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .step-item {
          padding: 10px 12px;
          background: ${theme.bg};
          border-radius: 10px;
          position: relative;
        }

        .step-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          background: ${theme.primary};
          border-radius: 50%;
          font-size: 11px;
          font-weight: 700;
          color: white;
          margin-bottom: 6px;
        }

        .step-item:nth-child(2) .step-number { background: ${theme.accent}; }
        .step-item:nth-child(3) .step-number { background: ${theme.secondary}; }
        .step-item:nth-child(4) .step-number { background: ${theme.primary}80; }

        .step-name {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 4px;
        }

        .step-item:nth-child(2) .step-name { color: ${theme.accent}; }
        .step-item:nth-child(3) .step-name { color: ${theme.secondary}; }
        .step-item:nth-child(4) .step-name { color: ${theme.primary}80; }

        .step-desc {
          font-size: 9px;
          color: ${theme.secondary};
          line-height: 1.4;
          margin-bottom: 5px;
        }

        .step-quote {
          font-size: 8.5px;
          color: ${theme.primary};
          background: ${theme.primary}08;
          padding: 4px 6px;
          border-radius: 4px;
          line-height: 1.4;
          font-style: italic;
        }

        /* Key Takeaway Card */
        .takeaway-card {
          grid-column: 1 / -1;
          grid-row: 3;
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 12px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .takeaway-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .takeaway-content {
          flex: 1;
        }

        .takeaway-label {
          font-size: 10px;
          color: white;
          opacity: 0.8;
          margin-bottom: 2px;
          font-weight: 500;
        }

        .takeaway-text {
          font-size: 13px;
          color: white;
          font-weight: 600;
          line-height: 1.4;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.25;
        }

        .deco-1 {
          width: 50px;
          height: 50px;
          background: ${theme.light}40;
          top: -10px;
          right: 40px;
        }

        .deco-2 {
          width: 25px;
          height: 25px;
          background: ${theme.accent}25;
          bottom: 12px;
          right: 70px;
        }

        .slide-66 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-66">
        <!-- Decorative elements -->
        <div class="deco-circle deco-1"></div>
        <div class="deco-circle deco-2"></div>

        <!-- Header -->
        <div class="slide-header">
          <div class="objection-badge">!</div>
          <h1 class="slide-title">${slideConfig.title}</h1>
        </div>

        <!-- Main Content Grid -->
        <div class="main-content">
          <!-- Employee Meaning Card -->
          <div class="meaning-card">
            <h3 class="card-title">
              <span class="icon">💭</span>
              员工这句话背后的意思
            </h3>
            <div class="meaning-list">
              <div class="meaning-item">我不相信这个结果，我不知道系统用了什么数据</div>
              <div class="meaning-item">万一数据错了，我的调薪不是也跟着错了吗</div>
            </div>
            <p class="sub-text">潜台词：我需要知道这个系统的可信度</p>
          </div>

          <!-- Data Sources Card -->
          <div class="sources-card">
            <h3 class="card-title">
              <span class="icon">📊</span>
              AI薪酬数据的来源与局限
            </h3>
            <div class="sources-grid">
              <div class="source-box">
                <div class="source-label">
                  <span>📋</span> 第三方薪酬调研
                </div>
                <div class="source-desc">年度数据，有滞后性</div>
              </div>
              <div class="source-box">
                <div class="source-label">
                  <span>🏢</span> 内部HR系统
                </div>
                <div class="source-desc">实时，但只反映内部情况</div>
              </div>
              <div class="source-box">
                <div class="source-label">
                  <span>🌐</span> 公开薪资数据
                </div>
                <div class="source-desc">样本偏差问题</div>
              </div>
              <div class="limitation-box">
                <div class="limitation-label">
                  <span>⚠️</span> 数据局限
                </div>
                <div class="limitation-list">
                  <div class="limitation-item">市场数据是"平均数"，不代表你的真实市场价</div>
                  <div class="limitation-item">历史数据不代表未来市场趋势</div>
                  <div class="limitation-item">内部数据不包含员工不可量化的贡献</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Four Steps Card -->
          <div class="four-steps-card">
            <div class="steps-header">
              <span style="font-size: 14px;">📝</span>
              <h4 class="steps-title">正确的回应——四步法</h4>
            </div>
            <div class="steps-grid">
              <!-- Step 1 -->
              <div class="step-item">
                <div class="step-number">1</div>
                <div class="step-name">倾听</div>
                <div class="step-desc">确认问题</div>
                <div class="step-quote">"你担心的是系统的数据能不能准确反映你的价值。"</div>
              </div>

              <!-- Step 2 -->
              <div class="step-item">
                <div class="step-number">2</div>
                <div class="step-name">共情</div>
                <div class="step-desc">承认局限</div>
                <div class="step-quote">"这个担心是合理的。数据确实不是完美的，任何系统都有它的局限性。"</div>
              </div>

              <!-- Step 3 -->
              <div class="step-item">
                <div class="step-number">3</div>
                <div class="step-name">解释</div>
                <div class="step-desc">说明来源</div>
                <div class="step-quote">"数据有两部分：市场参照数据（第三方调研200+公司样本）+ 个人数据（绩效、晋升、项目贡献）。"</div>
              </div>

              <!-- Step 4 -->
              <div class="step-item">
                <div class="step-number">4</div>
                <div class="step-name">承诺</div>
                <div class="step-desc">开放申诉</div>
                <div class="step-quote">"如果觉得数据不对，或有其他公司offer作参照，可以提交HR重新审核。"</div>
              </div>
            </div>
          </div>

          <!-- Key Takeaway Card -->
          <div class="takeaway-card">
            <div class="takeaway-icon">💡</div>
            <div class="takeaway-content">
              <div class="takeaway-label">关键点</div>
              <div class="takeaway-text">数据是参考，不是判决；人，才是最终的责任承担者</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
