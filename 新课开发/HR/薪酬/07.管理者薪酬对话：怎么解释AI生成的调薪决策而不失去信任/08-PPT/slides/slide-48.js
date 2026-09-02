/**
 * Slide 48: 从"解释者"到"共建者"的升级路径
 * Content Page - Three Stage Evolution: Explainer, Guide, Co-creator
 */

const slideConfig = {
  type: 'content',
  index: 48,
  title: '从"解释者"到"共建者"的升级路径'
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
        .slide-48 {
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
          font-size: 10px;
          color: ${theme.secondary};
          opacity: 0.55;
        }

        /* Section Label */
        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 10px;
        }

        .section-label::before {
          content: '';
          width: 3px;
          height: 13px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* Three Stage Container */
        .stage-container {
          display: flex;
          gap: 12px;
          flex: 1;
          min-height: 0;
          position: relative;
        }

        /* Stage Card */
        .stage-card {
          flex: 1;
          background: white;
          border-radius: 14px;
          padding: 13px 14px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .stage-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .stage-card.explainer::before {
          background: linear-gradient(90deg, ${theme.secondary}, ${theme.light});
        }

        .stage-card.guide::before {
          background: linear-gradient(90deg, ${theme.accent}, ${theme.light});
        }

        .stage-card.co-creator::before {
          background: linear-gradient(90deg, ${theme.primary}, ${theme.accent});
        }

        /* Stage Header */
        .stage-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .stage-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .explainer .stage-icon {
          background: ${theme.secondary}15;
        }

        .guide .stage-icon {
          background: ${theme.accent}15;
        }

        .co-creator .stage-icon {
          background: ${theme.primary}15;
        }

        .stage-title-group {
          flex: 1;
        }

        .stage-name {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .explainer .stage-name {
          color: ${theme.secondary};
        }

        .guide .stage-name {
          color: ${theme.accent};
        }

        .co-creator .stage-name {
          color: ${theme.primary};
        }

        .stage-label {
          font-size: 9px;
          padding: 2px 7px;
          border-radius: 4px;
          font-weight: 600;
        }

        .explainer .stage-label {
          background: ${theme.secondary}15;
          color: ${theme.secondary};
        }

        .guide .stage-label {
          background: ${theme.accent}15;
          color: ${theme.accent};
        }

        .co-creator .stage-label {
          background: ${theme.primary}15;
          color: ${theme.primary};
        }

        /* Stage Number Badge */
        .stage-num {
          position: absolute;
          top: 10px;
          right: 12px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: white;
        }

        .explainer .stage-num {
          background: ${theme.secondary};
        }

        .guide .stage-num {
          background: ${theme.accent};
        }

        .co-creator .stage-num {
          background: ${theme.primary};
        }

        /* Stage Content */
        .stage-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .stage-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stage-item-label {
          font-size: 9px;
          font-weight: 700;
          color: ${theme.secondary};
          opacity: 0.7;
        }

        .stage-item-text {
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.45;
        }

        .stage-item-text strong {
          font-weight: 600;
        }

        .stage-divider {
          height: 1px;
          background: ${theme.light}40;
          margin: 3px 0;
        }

        /* Employee Feeling */
        .employee-feeling {
          margin-top: auto;
          padding: 8px 10px;
          border-radius: 8px;
          font-size: 9.5px;
          font-weight: 600;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-style: italic;
        }

        .explainer .employee-feeling {
          background: ${theme.secondary}10;
          color: ${theme.secondary};
        }

        .guide .employee-feeling {
          background: ${theme.accent}10;
          color: ${theme.accent};
        }

        .co-creator .employee-feeling {
          background: ${theme.primary}10;
          color: ${theme.primary};
        }

        .feeling-icon {
          font-size: 12px;
        }

        /* Arrow Between Stages */
        .stage-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          font-size: 16px;
          color: ${theme.accent};
          font-weight: 700;
        }

        .arrow-1 {
          left: calc(33.33% - 6px);
        }

        .arrow-2 {
          left: calc(66.66% - 6px);
        }

        /* Upgrade Key Section */
        .upgrade-section {
          margin-top: 12px;
          padding: 12px 16px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .upgrade-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .upgrade-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
        }

        .upgrade-title {
          font-size: 12px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .upgrade-steps {
          display: flex;
          gap: 8px;
        }

        .upgrade-step {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 9px;
          background: ${theme.bg};
          border-radius: 9px;
          position: relative;
        }

        .upgrade-step:not(:last-child)::after {
          content: '→';
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          color: ${theme.accent};
          font-size: 13px;
          font-weight: 700;
        }

        .step-num {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: ${theme.accent};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-text {
          flex: 1;
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.35;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          top: 8px;
          right: 24px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.3;
        }

        .deco-dots {
          position: absolute;
          bottom: 12px;
          right: 34px;
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

        .slide-48 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-48">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Manager Role Evolution: Explainer, Guide, Co-creator</p>
        </div>

        <!-- Section Label -->
        <div class="section-label">
          <span>管理者的三种角色演进</span>
        </div>

        <!-- Three Stage Cards -->
        <div class="stage-container">
          <!-- Arrow 1 -->
          <div class="stage-arrow arrow-1">→</div>
          <!-- Arrow 2 -->
          <div class="stage-arrow arrow-2">→</div>

          <!-- Stage 1: Explainer -->
          <div class="stage-card explainer">
            <div class="stage-num">1</div>
            <div class="stage-header">
              <div class="stage-icon">📢</div>
              <div class="stage-title-group">
                <div class="stage-name">解释者</div>
                <span class="stage-label">Explainer</span>
              </div>
            </div>

            <div class="stage-content">
              <div class="stage-item">
                <span class="stage-item-label">角色定义</span>
                <span class="stage-item-text">把系统的调薪结果"翻译"给员工</span>
              </div>
              <div class="stage-divider"></div>
              <div class="stage-item">
                <span class="stage-item-label">能力</span>
                <span class="stage-item-text">说明AI数据轨和人工判断轨的内容</span>
              </div>
              <div class="stage-divider"></div>
              <div class="stage-item">
                <span class="stage-item-label">局限</span>
                <span class="stage-item-text">被动响应，员工问什么答什么</span>
              </div>
            </div>

            <div class="employee-feeling">
              <span class="feeling-icon">😶</span>
              <span>"他告诉了我结果，但我不确定他站在谁那边"</span>
            </div>
          </div>

          <!-- Stage 2: Guide -->
          <div class="stage-card guide">
            <div class="stage-num">2</div>
            <div class="stage-header">
              <div class="stage-icon">🧭</div>
              <div class="stage-title-group">
                <div class="stage-name">引导者</div>
                <span class="stage-label">Guide</span>
              </div>
            </div>

            <div class="stage-content">
              <div class="stage-item">
                <span class="stage-item-label">角色定义</span>
                <span class="stage-item-text">帮助员工理解薪酬决策的逻辑，并提前管理预期</span>
              </div>
              <div class="stage-divider"></div>
              <div class="stage-item">
                <span class="stage-item-label">能力</span>
                <span class="stage-item-text">主动披露、三步信任重建法、异议处理</span>
              </div>
              <div class="stage-divider"></div>
              <div class="stage-item">
                <span class="stage-item-label">局限</span>
                <span class="stage-item-text">还是在"解释已经发生的决策"</span>
              </div>
            </div>

            <div class="employee-feeling">
              <span class="feeling-icon">👍</span>
              <span>"他提前跟我打过招呼，我觉得被尊重了"</span>
            </div>
          </div>

          <!-- Stage 3: Co-creator -->
          <div class="stage-card co-creator">
            <div class="stage-num">3</div>
            <div class="stage-header">
              <div class="stage-icon">🤝</div>
              <div class="stage-title-group">
                <div class="stage-name">共建者</div>
                <span class="stage-label">Co-creator</span>
              </div>
            </div>

            <div class="stage-content">
              <div class="stage-item">
                <span class="stage-item-label">角色定义</span>
                <span class="stage-item-text">与员工一起规划薪酬成长路径，把薪酬对话变成持续关系</span>
              </div>
              <div class="stage-divider"></div>
              <div class="stage-item">
                <span class="stage-item-label">能力</span>
                <span class="stage-item-text">日常信任维护、年度薪酬沟通计划、职业发展联动</span>
              </div>
              <div class="stage-divider"></div>
              <div class="stage-item">
                <span class="stage-item-label">局限</span>
                <span class="stage-item-text">需要时间和持续投入</span>
              </div>
            </div>

            <div class="employee-feeling">
              <span class="feeling-icon">💪</span>
              <span>"他不是只谈调薪，是在关心我的整体成长"</span>
            </div>
          </div>
        </div>

        <!-- Upgrade Key Section -->
        <div class="upgrade-section">
          <div class="upgrade-header">
            <div class="upgrade-icon">⬆️</div>
            <span class="upgrade-title">升级路径的关键</span>
          </div>

          <div class="upgrade-steps">
            <div class="upgrade-step">
              <div class="step-num">1</div>
              <div class="step-text">从"等员工问了再解释"变成"主动定期同步"</div>
            </div>

            <div class="upgrade-step">
              <div class="step-num">2</div>
              <div class="step-text">从"只谈数字"变成"谈关系、谈发展、谈预期"</div>
            </div>

            <div class="upgrade-step">
              <div class="step-num">3</div>
              <div class="step-text">从"一年一次的对话"变成"持续的关系经营"</div>
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
