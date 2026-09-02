/**
 * Slide 67: 应对"我不在乎数据，我就想知道你觉得我值多少"
 * Content Page - Handling Objection 4: Value Recognition
 */

const slideConfig = {
  type: 'content',
  index: 67,
  title: '应对"我不在乎数据，我就想知道你觉得我值多少"'
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
        .slide-67 {
          width: 100%;
          height: 100%;
          padding: 14px 24px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Header */
        .slide-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 8px;
          border-bottom: 1.5px solid ${theme.light};
          margin-bottom: 10px;
        }

        .header-accent {
          width: 4px;
          height: 22px;
          background: linear-gradient(180deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .header-content {
          flex: 1;
        }

        .slide-title {
          font-size: 18px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 2px 0;
          line-height: 1.3;
        }

        .slide-subtitle {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.6;
          margin: 0;
        }

        /* Main Content Layout */
        .main-content {
          display: flex;
          gap: 14px;
          flex: 1;
          min-height: 0;
        }

        /* Left Column - Meaning & Reason */
        .left-column {
          width: 38%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Right Column - 4 Steps */
        .right-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Card Base Style */
        .card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        /* Section Label */
        .section-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 8px;
        }

        .section-label::before {
          content: '';
          width: 3px;
          height: 11px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* Employee Meaning Card */
        .meaning-card {
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}08 100%);
          border-left: 3px solid ${theme.primary};
        }

        .meaning-title {
          font-size: 11px;
          font-weight: 700;
          color: ${theme.primary};
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .meaning-icon {
          font-size: 14px;
        }

        .meaning-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .meaning-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .meaning-bullet {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: ${theme.primary}15;
          color: ${theme.primary};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .meaning-item:nth-child(2) .meaning-bullet { background: ${theme.accent}15; color: ${theme.accent}; }
        .meaning-item:nth-child(3) .meaning-bullet { background: ${theme.secondary}15; color: ${theme.secondary}; }

        .meaning-highlight {
          display: inline-block;
          padding: 6px 10px;
          background: ${theme.primary}10;
          border-radius: 8px;
          margin-top: 6px;
          font-size: 9.5px;
          color: ${theme.primary};
          font-weight: 600;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
        }

        /* Reason Card */
        .reason-card {
          flex: 1;
        }

        .reason-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .reason-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 8px 10px;
          background: ${theme.bg};
          border-radius: 8px;
        }

        .reason-num {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          background: ${theme.accent};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .reason-text {
          flex: 1;
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .reason-text strong {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* Steps Header */
        .steps-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2px;
        }

        .steps-title {
          font-size: 11px;
          font-weight: 700;
          color: ${theme.primary};
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .steps-icon {
          font-size: 14px;
        }

        .ai-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 3px 8px;
          background: ${theme.secondary}12;
          border-radius: 5px;
          font-size: 8px;
          color: ${theme.secondary};
        }

        .ai-badge-icon {
          font-size: 10px;
        }

        /* Step Cards */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .step-card {
          background: white;
          border-radius: 10px;
          padding: 10px 12px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          position: relative;
          overflow: hidden;
        }

        .step-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
        }

        .step-card:nth-child(1)::before { background: ${theme.primary}; }
        .step-card:nth-child(2)::before { background: ${theme.accent}; }
        .step-card:nth-child(3)::before { background: ${theme.secondary}; }
        .step-card:nth-child(4)::before { background: linear-gradient(90deg, ${theme.primary}, ${theme.accent}); }

        .step-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .step-num {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-card:nth-child(1) .step-num { background: ${theme.primary}; }
        .step-card:nth-child(2) .step-num { background: ${theme.accent}; }
        .step-card:nth-child(3) .step-num { background: ${theme.secondary}; }
        .step-card:nth-child(4) .step-num { background: linear-gradient(135deg, ${theme.primary}, ${theme.accent}); }

        .step-name {
          font-size: 10.5px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .step-card:nth-child(2) .step-name { color: ${theme.accent}; }
        .step-card:nth-child(3) .step-name { color: ${theme.secondary}; }

        .step-quote {
          background: ${theme.bg};
          border-radius: 8px;
          padding: 8px 10px;
          font-size: 9px;
          color: ${theme.secondary};
          line-height: 1.45;
        }

        .step-quote .highlight {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* Key Takeaway */
        .key-takeaway {
          background: linear-gradient(135deg, ${theme.primary}12 0%, ${theme.accent}12 100%);
          border-radius: 10px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          border-left: 3px solid ${theme.accent};
        }

        .takeaway-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        .takeaway-content {
          flex: 1;
        }

        .takeaway-label {
          font-size: 9px;
          font-weight: 700;
          color: ${theme.accent};
          margin-bottom: 2px;
        }

        .takeaway-text {
          font-size: 10px;
          color: ${theme.primary};
          font-weight: 600;
          line-height: 1.35;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          top: 8px;
          right: 20px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.25;
        }

        .deco-dots {
          position: absolute;
          bottom: 10px;
          right: 20px;
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

        /* Human vs AI Icon */
        .human-vs-ai {
          position: absolute;
          top: 50%;
          left: 42%;
          transform: translate(-50%, -50%);
          font-size: 40px;
          opacity: 0.06;
        }
      </style>

      <div class="slide-67">
        <!-- Decorative -->
        <div class="deco-circle"></div>
        <div class="human-vs-ai">🤝</div>

        <!-- Header -->
        <div class="slide-header">
          <div class="header-accent"></div>
          <div class="header-content">
            <h1 class="slide-title">${slideConfig.title}</h1>
            <p class="slide-subtitle">Handling Objection 4: Emotional Value Recognition</p>
          </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Left Column -->
          <div class="left-column">
            <!-- Employee's Hidden Meaning -->
            <div class="card meaning-card">
              <div class="meaning-title">
                <span class="meaning-icon">💭</span>
                <span>员工这句话背后的意思</span>
              </div>
              <div class="meaning-list">
                <div class="meaning-item">
                  <span class="meaning-bullet">1</span>
                  <span>"数字不重要，我在意的是你怎么看我"</span>
                </div>
                <div class="meaning-item">
                  <span class="meaning-bullet">2</span>
                  <span>"我想听到你亲口说我的价值"</span>
                </div>
                <div class="meaning-item">
                  <span class="meaning-bullet">3</span>
                  <span>潜台词：我需要被看见、被认可</span>
                </div>
              </div>
              <div class="meaning-highlight">
                薪酬的本质是"用货币投票认可一个人的价值"
              </div>
            </div>

            <!-- Why This Need is Reasonable -->
            <div class="card reason-card">
              <div class="section-label">为什么这个需求是合理的</div>
              <div class="reason-list">
                <div class="reason-item">
                  <span class="reason-num">1</span>
                  <span class="reason-text">薪酬的本质是<strong>"用货币投票认可一个人的价值"</strong></span>
                </div>
                <div class="reason-item">
                  <span class="reason-num">2</span>
                  <span class="reason-text">员工想知道：<strong>你对员工价值的判断</strong>，配得上多少"票数"</span>
                </div>
                <div class="reason-item">
                  <span class="reason-num">3</span>
                  <span class="reason-text"><strong>AI可以算出市场数据，但无法替代管理者对员工的人文认可</strong></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - 4 Steps -->
          <div class="right-column">
            <div class="steps-header">
              <div class="steps-title">
                <span class="steps-icon">📋</span>
                <span>正确的回应——四步法</span>
              </div>
              <div class="ai-badge">
                <span class="ai-badge-icon">🤖</span>
                <span>AI无法替代</span>
              </div>
            </div>

            <div class="steps-grid">
              <!-- Step 1: Listen -->
              <div class="step-card">
                <div class="step-header">
                  <span class="step-num">1</span>
                  <span class="step-name">倾听</span>
                </div>
                <div class="step-quote">
                  "你最想了解的不是数字本身，而是<sp class="highlight">我对你的评价</sp>。"（确认核心诉求）
                </div>
              </div>

              <!-- Step 2: Empathize -->
              <div class="step-card">
                <div class="step-header">
                  <span class="step-num">2</span>
                  <span class="step-name">共情</span>
                </div>
                <div class="step-quote">
                  "我理解。比起系统弹出的数字，你更想听到<sp class="highlight">我作为老板怎么看你的价值</sp>。"（承认需求合理）
                </div>
              </div>

              <!-- Step 3: Explain -->
              <div class="step-card">
                <div class="step-header">
                  <span class="step-num">3</span>
                  <span class="step-name">解释</span>
                </div>
                <div class="step-quote">
                  "从我的角度，你在团队里的价值有<sp class="highlight">三个层面</sp>：技术能力（市场参考）、解决复杂问题（系统算不出）、带人潜力（长期价值）。"
                </div>
              </div>

              <!-- Step 4: Commit -->
              <div class="step-card">
                <div class="step-header">
                  <span class="step-num">4</span>
                  <span class="step-name">承诺</span>
                </div>
                <div class="step-quote">
                  "这次调薪数字是系统建议，但<sp class="highlight">我的结论基于对你的综合评估</sp>。我对你下阶段的期待是……"（给出认可和期待）
                </div>
              </div>
            </div>

            <!-- Key Takeaway -->
            <div class="key-takeaway">
              <div class="takeaway-icon">💎</div>
              <div class="takeaway-content">
                <div class="takeaway-label">关键点</div>
                <div class="takeaway-text">管理者亲口认可是AI永远无法替代的；薪酬对话的最终落点是关系，不是数字</div>
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
