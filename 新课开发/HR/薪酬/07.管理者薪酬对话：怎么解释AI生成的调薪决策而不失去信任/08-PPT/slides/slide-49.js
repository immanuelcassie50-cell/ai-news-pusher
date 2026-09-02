/**
 * Slide 49: 年度薪酬沟通计划模板
 * Content Page - Annual Salary Communication Plan Template
 */

const slideConfig = {
  type: 'content',
  index: 49,
  title: '年度薪酬沟通计划模板'
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
        .slide-49 {
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
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .slide-title {
          font-size: 21px;
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

        /* Main Content - Two Columns */
        .main-content {
          display: flex;
          gap: 16px;
          flex: 1;
          min-height: 0;
        }

        /* Left Column - Why Plan */
        .why-plan-section {
          width: 32%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 4px;
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

        /* Why Plan Card */
        .why-plan-card {
          background: white;
          border-radius: 14px;
          padding: 14px 14px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .why-plan-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .why-plan-icon {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
        }

        .why-plan-title {
          font-size: 13px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .why-plan-subtitle {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.6;
        }

        .why-plan-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .why-plan-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          padding: 10px 12px;
          background: ${theme.bg};
          border-radius: 10px;
          position: relative;
        }

        .why-plan-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          border-radius: 3px 0 0 3px;
        }

        .why-plan-item:nth-child(1)::before {
          background: ${theme.primary};
        }

        .why-plan-item:nth-child(2)::before {
          background: ${theme.accent};
        }

        .why-plan-item:nth-child(3)::before {
          background: ${theme.secondary};
        }

        .why-plan-item-icon {
          font-size: 14px;
          margin-top: 1px;
          flex-shrink: 0;
        }

        .why-plan-item:nth-child(1) .why-plan-item-icon { color: ${theme.primary}; }
        .why-plan-item:nth-child(2) .why-plan-item-icon { color: ${theme.accent}; }
        .why-plan-item:nth-child(3) .why-plan-item-icon { color: ${theme.secondary}; }

        .why-plan-item-text {
          flex: 1;
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        /* Right Column - Calendar Timeline */
        .calendar-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .calendar-card {
          background: white;
          border-radius: 14px;
          padding: 14px 16px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .calendar-icon {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: ${theme.accent}15;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
        }

        .calendar-title {
          font-size: 13px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .calendar-subtitle {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.6;
        }

        /* Timeline */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .timeline-row {
          display: flex;
          gap: 8px;
          align-items: stretch;
        }

        .timeline-quarter {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .quarter-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 10px 10px 0 0;
          position: relative;
        }

        .timeline-row:nth-child(1) .quarter-header { background: ${theme.primary}; }
        .timeline-row:nth-child(2) .quarter-header { background: ${theme.accent}; }
        .timeline-row:nth-child(3) .quarter-header { background: ${theme.secondary}; }
        .timeline-row:nth-child(4) .quarter-header { background: ${theme.primary}90; }

        .quarter-label {
          font-size: 11px;
          font-weight: 700;
          color: white;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .quarter-icon {
          font-size: 12px;
        }

        .quarter-period {
          font-size: 9px;
          color: white;
          opacity: 0.85;
          margin-left: auto;
        }

        .quarter-body {
          flex: 1;
          padding: 10px 12px;
          background: ${theme.bg};
          border-radius: 0 0 10px 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-height: 90px;
        }

        .quarter-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .quarter-item-label {
          font-size: 9px;
          font-weight: 700;
          color: ${theme.secondary};
          opacity: 0.7;
        }

        .timeline-row:nth-child(1) .quarter-item-label { color: ${theme.primary}; }
        .timeline-row:nth-child(2) .quarter-item-label { color: ${theme.accent}; }
        .timeline-row:nth-child(3) .quarter-item-label { color: ${theme.secondary}; }
        .timeline-row:nth-child(4) .quarter-item-label { color: ${theme.primary}90; }

        .quarter-item-content {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.35;
        }

        .quarter-item-action {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.65;
          line-height: 1.3;
          padding-left: 8px;
          border-left: 2px solid;
        }

        .timeline-row:nth-child(1) .quarter-item-action { border-color: ${theme.primary}40; }
        .timeline-row:nth-child(2) .quarter-item-action { border-color: ${theme.accent}40; }
        .timeline-row:nth-child(3) .quarter-item-action { border-color: ${theme.secondary}40; }
        .timeline-row:nth-child(4) .quarter-item-action { border-color: ${theme.primary}30; }

        /* Self-Check Section */
        .self-check-section {
          margin-top: 10px;
          padding: 12px 16px;
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}06 100%);
          border-radius: 12px;
          border-left: 4px solid ${theme.accent};
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .self-check-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, ${theme.accent}, ${theme.primary});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
        }

        .self-check-content {
          flex: 1;
        }

        .self-check-title {
          font-size: 11px;
          font-weight: 700;
          color: ${theme.primary};
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .self-check-list {
          display: flex;
          gap: 14px;
        }

        .self-check-item {
          flex: 1;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          padding: 8px 10px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 4px ${theme.secondary}08;
        }

        .self-check-num {
          width: 18px;
          height: 18px;
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

        .self-check-text {
          flex: 1;
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.35;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          top: 10px;
          right: 26px;
          width: 30px;
          height: 30px;
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

        .slide-49 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-49">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Annual Salary Communication Plan Template</p>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Left Column - Why Plan -->
          <div class="why-plan-section">
            <div class="section-label">
              <span class="icon">💡</span>
              <span>为什么要做年度计划</span>
            </div>

            <div class="why-plan-card">
              <div class="why-plan-header">
                <div class="why-plan-icon">📋</div>
                <div>
                  <div class="why-plan-title">主动布局</div>
                  <div class="why-plan-subtitle">从被动反应到主动沟通</div>
                </div>
              </div>

              <div class="why-plan-list">
                <div class="why-plan-item">
                  <span class="why-plan-item-icon">⚠️</span>
                  <span class="why-plan-item-text">薪酬对话最危险的时刻是"临时抱佛脚"</span>
                </div>

                <div class="why-plan-item">
                  <span class="why-plan-item-icon">🎯</span>
                  <span class="why-plan-item-text">有计划的管理者，才能做到主动沟通</span>
                </div>

                <div class="why-plan-item">
                  <span class="why-plan-item-icon">🚀</span>
                  <span class="why-plan-item-text">年度计划让薪酬沟通从"被动反应"变成"主动布局"</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Calendar Timeline -->
          <div class="calendar-section">
            <div class="section-label">
              <span class="icon">📅</span>
              <span>年度薪酬沟通日历</span>
            </div>

            <div class="calendar-card">
              <div class="calendar-header">
                <div class="calendar-icon">📆</div>
                <div>
                  <div class="calendar-title">季度沟通节点</div>
                  <div class="calendar-subtitle">全年四个关键沟通时机</div>
                </div>
              </div>

              <div class="timeline">
                <!-- Q1 -->
                <div class="timeline-row">
                  <div class="timeline-quarter">
                    <div class="quarter-header">
                      <span class="quarter-label">
                        <span class="quarter-icon">🌱</span>
                        Q1
                      </span>
                      <span class="quarter-period">年初</span>
                    </div>
                    <div class="quarter-body">
                      <div class="quarter-item">
                        <span class="quarter-item-label">沟通主题</span>
                        <span class="quarter-item-content">年度薪酬预期管理</span>
                      </div>
                      <div class="quarter-item">
                        <span class="quarter-item-label">目的</span>
                        <span class="quarter-item-content">让员工了解今年调薪框架</span>
                      </div>
                      <div class="quarter-item-action">分享公司薪酬理念、团队调薪预算情况</div>
                    </div>
                  </div>
                </div>

                <!-- Q2 -->
                <div class="timeline-row">
                  <div class="timeline-quarter">
                    <div class="quarter-header">
                      <span class="quarter-label">
                        <span class="quarter-icon">☀️</span>
                        Q2
                      </span>
                      <span class="quarter-period">年中</span>
                    </div>
                    <div class="quarter-body">
                      <div class="quarter-item">
                        <span class="quarter-item-label">沟通主题</span>
                        <span class="quarter-item-content">中期回顾与反馈</span>
                      </div>
                      <div class="quarter-item">
                        <span class="quarter-item-label">目的</span>
                        <span class="quarter-item-content">检视薪酬竞争力，及早发现问题</span>
                      </div>
                      <div class="quarter-item-action">讨论市场价值变化、绩效表现</div>
                    </div>
                  </div>
                </div>

                <!-- Q3 -->
                <div class="timeline-row">
                  <div class="timeline-quarter">
                    <div class="quarter-header">
                      <span class="quarter-label">
                        <span class="quarter-icon">🍂</span>
                        Q3
                      </span>
                      <span class="quarter-period">下半年</span>
                    </div>
                    <div class="quarter-body">
                      <div class="quarter-item">
                        <span class="quarter-item-label">沟通主题</span>
                        <span class="quarter-item-content">调薪准备与预期调整</span>
                      </div>
                      <div class="quarter-item">
                        <span class="quarter-item-label">目的</span>
                        <span class="quarter-item-content">为年终调薪做铺垫</span>
                      </div>
                      <div class="quarter-item-action">收集员工诉求、评估调整空间</div>
                    </div>
                  </div>
                </div>

                <!-- Q4 -->
                <div class="timeline-row">
                  <div class="timeline-quarter">
                    <div class="quarter-header">
                      <span class="quarter-label">
                        <span class="quarter-icon">🎄</span>
                        Q4
                      </span>
                      <span class="quarter-period">年终</span>
                    </div>
                    <div class="quarter-body">
                      <div class="quarter-item">
                        <span class="quarter-item-label">沟通主题</span>
                        <span class="quarter-item-content">调薪结果解读</span>
                      </div>
                      <div class="quarter-item">
                        <span class="quarter-item-label">目的</span>
                        <span class="quarter-item-content">完整的三步信任重建法</span>
                      </div>
                      <div class="quarter-item-action">透明披露、逻辑呈现、情感连接</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Self-Check Section -->
        <div class="self-check-section">
          <div class="self-check-icon">✅</div>
          <div class="self-check-content">
            <div class="self-check-title">
              <span>管理者自检问题</span>
            </div>
            <div class="self-check-list">
              <div class="self-check-item">
                <div class="self-check-num">1</div>
                <div class="self-check-text">今年我是否主动跟每个核心员工谈过他们的市场价值和职业期待？</div>
              </div>

              <div class="self-check-item">
                <div class="self-check-num">2</div>
                <div class="self-check-text">今年的调薪对话，我是否做好了"预期管理"？</div>
              </div>

              <div class="self-check-item">
                <div class="self-check-num">3</div>
                <div class="self-check-text">日常我是否有持续做"薪酬信任存款"？</div>
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
