/**
 * Slide 42: 应对"我不在乎数据，我就想知道你觉得我值多少"
 * Content Page - Handling Objection 4: The human recognition objection
 */

const slideConfig = {
  type: 'content',
  index: 42,
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
        .slide-42 {
          width: 100%;
          height: 100%;
          padding: 24px 36px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Header */
        .slide-header {
          text-align: center;
          margin-bottom: 14px;
          padding-bottom: 12px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .slide-title {
          font-size: 22px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 4px 0;
          line-height: 1.3;
        }

        .slide-subtitle {
          font-size: 11px;
          color: ${theme.secondary};
          opacity: 0.6;
        }

        /* Main Content */
        .main-content {
          display: flex;
          gap: 18px;
          flex: 1;
          min-height: 0;
        }

        /* Left Column */
        .left-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* Section Cards */
        .section-card {
          background: white;
          border-radius: 12px;
          padding: 14px 16px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 10px;
        }

        .section-label .icon {
          font-size: 14px;
        }

        .section-label::before {
          content: '';
          width: 3px;
          height: 12px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* Emotion Card */
        .emotion-card {
          background: linear-gradient(135deg, ${theme.primary}06 0%, ${theme.accent}05 100%);
          border-left: 3px solid ${theme.accent};
        }

        .emotion-card .section-label::before {
          background: ${theme.primary};
        }

        .emotion-points {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .emotion-point {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 11.5px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .emotion-point::before {
          content: '"';
          color: ${theme.accent};
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
        }

        .emotion-point::after {
          content: '"';
          color: ${theme.accent};
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
        }

        /* Hidden meaning badge */
        .hidden-meaning {
          font-size: 10px;
          color: ${theme.primary};
          font-weight: 500;
          margin-bottom: 8px;
          padding: 4px 8px;
          background: ${theme.primary}10;
          border-radius: 4px;
          display: inline-block;
        }

        /* Reason Card */
        .reason-card {
          border-left: 3px solid ${theme.primary};
        }

        .reason-points {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .reason-point {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .reason-point .bullet {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${theme.primary};
          margin-top: 5px;
          flex-shrink: 0;
        }

        /* Right Column - 4 Steps */
        .right-column {
          flex: 1.2;
          display: flex;
          flex-direction: column;
        }

        .steps-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .steps-title {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .steps-badge {
          font-size: 9px;
          padding: 3px 8px;
          background: ${theme.accent}15;
          color: ${theme.accent};
          border-radius: 4px;
          font-weight: 600;
        }

        /* Steps Container */
        .steps-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .step-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          display: flex;
          gap: 12px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border-bottom: 3px solid transparent;
        }

        .step-card:hover {
          transform: translateX(3px);
          box-shadow: 0 3px 12px ${theme.secondary}12;
        }

        .step-card:nth-child(1) { border-bottom-color: ${theme.primary}; }
        .step-card:nth-child(2) { border-bottom-color: ${theme.accent}; }
        .step-card:nth-child(3) { border-bottom-color: ${theme.secondary}; }
        .step-card:nth-child(4) { border-bottom-color: ${theme.primary}; }

        .step-number {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .step-card:nth-child(1) .step-number { background: ${theme.primary}; }
        .step-card:nth-child(2) .step-number { background: ${theme.accent}; }
        .step-card:nth-child(3) .step-number { background: ${theme.secondary}; }
        .step-card:nth-child(4) .step-number { background: ${theme.primary}; }

        .step-content {
          flex: 1;
          min-width: 0;
        }

        .step-name {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 4px;
        }

        .step-card:nth-child(2) .step-name { color: ${theme.accent}; }
        .step-card:nth-child(3) .step-name { color: ${theme.secondary}; }

        .step-quote {
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.5;
          font-style: italic;
          margin-bottom: 4px;
          opacity: 0.9;
        }

        .step-action {
          font-size: 10px;
          color: ${theme.accent};
          font-weight: 500;
        }

        /* Key Point Footer */
        .key-point-footer {
          margin-top: 12px;
          padding: 12px 16px;
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}06 100%);
          border-radius: 10px;
          border-left: 4px solid ${theme.primary};
        }

        .key-point-label {
          font-size: 10px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .key-point-text {
          font-size: 11.5px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .key-point-text strong {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* Decorative elements */
        .deco-circle {
          position: absolute;
          top: 12px;
          right: 36px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.4;
        }

        .deco-dots {
          position: absolute;
          bottom: 20px;
          right: 50px;
          display: flex;
          gap: 4px;
        }

        .deco-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          opacity: 0.3;
        }

        .deco-dot:nth-child(1) { background: ${theme.primary}; }
        .deco-dot:nth-child(2) { background: ${theme.accent}; }
        .deco-dot:nth-child(3) { background: ${theme.secondary}; }

        /* Human element highlight */
        .human-icon {
          position: absolute;
          top: 80px;
          right: 42px;
          font-size: 28px;
          opacity: 0.15;
        }
      </style>

      <div class="slide-42">
        <!-- Decorative -->
        <div class="deco-circle"></div>
        <div class="human-icon">🤝</div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Handling Objection 4: The Human Element</p>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Left Column: Analysis -->
          <div class="left-column">
            <!-- Employee's Hidden Meaning -->
            <div class="section-card emotion-card">
              <div class="section-label">
                <span class="icon">💭</span>
                <span>员工这句话背后的意思</span>
              </div>
              <div class="hidden-meaning">潜台词：我需要被看见、被认可</div>
              <div class="emotion-points">
                <div class="emotion-point">数字不重要，我在意的是你怎么看我</div>
                <div class="emotion-point">我想听到你亲口说我的价值</div>
              </div>
            </div>

            <!-- Why This Need is Reasonable -->
            <div class="section-card reason-card">
              <div class="section-label">
                <span class="icon">✓</span>
                <span>为什么这个需求是合理的</span>
              </div>
              <div class="reason-points">
                <div class="reason-point">
                  <span class="bullet"></span>
                  <span>薪酬的本质是"用货币投票认可一个人的价值"</span>
                </div>
                <div class="reason-point">
                  <span class="bullet"></span>
                  <span>员工想知道的是：你觉得我对组织的价值，配得上多少"票数"</span>
                </div>
                <div class="reason-point">
                  <span class="bullet"></span>
                  <span>AI可以算出市场数据，但无法替代管理者对员工的人文认可</span>
                </div>
              </div>
            </div>

            <!-- Key Point Footer -->
            <div class="key-point-footer">
              <div class="key-point-label">
                <span>💡</span>
                <span>关键点</span>
              </div>
              <div class="key-point-text">
                <strong>管理者亲口认可是AI永远无法替代的</strong><br>
                薪酬对话的最终落点是关系，不是数字
              </div>
            </div>
          </div>

          <!-- Right Column: 4 Steps -->
          <div class="right-column">
            <div class="steps-header">
              <span class="steps-title">正确的回应——四步法</span>
              <span class="steps-badge">关键话术</span>
            </div>

            <div class="steps-container">
              <!-- Step 1: Listen -->
              <div class="step-card">
                <div class="step-number">1</div>
                <div class="step-content">
                  <div class="step-name">倾听</div>
                  <div class="step-quote">"你最想了解的不是数字本身，而是我对你的评价。"</div>
                  <div class="step-action">确认核心诉求</div>
                </div>
              </div>

              <!-- Step 2: Empathize -->
              <div class="step-card">
                <div class="step-number">2</div>
                <div class="step-content">
                  <div class="step-name">共情</div>
                  <div class="step-quote">"我理解。比起一个系统弹出来的数字，你更想听到我作为老板怎么看你的价值。"</div>
                  <div class="step-action">承认需求合理</div>
                </div>
              </div>

              <!-- Step 3: Explain -->
              <div class="step-card">
                <div class="step-number">3</div>
                <div class="step-content">
                  <div class="step-name">解释</div>
                  <div class="step-quote">"从我的角度，你在团队里的价值有几个层面：第一，你的技术能力，这部分市场有参考值；第二，你解决复杂问题的能力，这部分系统算不出来，但我看得见；第三，你带人的潜力，这个我认为是你的长期价值。"</div>
                  <div class="step-action">从管理者视角阐述价值</div>
                </div>
              </div>

              <!-- Step 4: Commit -->
              <div class="step-card">
                <div class="step-number">4</div>
                <div class="step-content">
                  <div class="step-name">承诺</div>
                  <div class="step-quote">"这次调薪，数字是系统的建议，但我上报的结论是基于我对你的综合评估。我对你下阶段的期待是……（说出具体期望）"</div>
                  <div class="step-action">给出管理者视角的认可和期待</div>
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
