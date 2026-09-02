/**
 * Slide 74: 年度薪酬沟通计划模板
 * Content Page - Annual Salary Communication Plan Template
 */

const slideConfig = {
  type: 'content',
  index: 74,
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
        .slide-74 {
          width: 100%;
          height: 100%;
          padding: 14px 20px;
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
          font-size: 18px;
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

        /* Why Plan Section */
        .why-section {
          background: white;
          border-radius: 12px;
          padding: 10px 14px;
          margin-bottom: 10px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          position: relative;
          overflow: hidden;
        }

        .why-section::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, ${theme.primary}, ${theme.accent});
          border-radius: 12px 0 0 12px;
        }

        .why-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
        }

        .why-icon {
          font-size: 13px;
        }

        .why-title {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0;
        }

        .why-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 16px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .why-list li {
          font-size: 10px;
          color: ${theme.secondary};
          padding-left: 14px;
          position: relative;
          line-height: 1.4;
        }

        .why-list li::before {
          content: '◆';
          position: absolute;
          left: 0;
          color: ${theme.accent};
          font-size: 7px;
          top: 2px;
        }

        /* Calendar Timeline Section */
        .calendar-section {
          background: white;
          border-radius: 14px;
          padding: 12px 14px;
          margin-bottom: 10px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 10px;
        }

        .calendar-icon {
          font-size: 13px;
        }

        .calendar-title {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.secondary};
          margin: 0;
        }

        .calendar-title::before {
          content: '';
          display: inline-block;
          width: 3px;
          height: 12px;
          background: ${theme.accent};
          border-radius: 2px;
          margin-right: 6px;
          vertical-align: middle;
        }

        /* Timeline Container */
        .timeline-container {
          display: flex;
          gap: 8px;
          flex: 1;
          position: relative;
        }

        /* Timeline Line */
        .timeline-line {
          position: absolute;
          top: 38px;
          left: 20px;
          right: 20px;
          height: 3px;
          background: linear-gradient(90deg, ${theme.primary}, ${theme.accent}, ${theme.secondary}, ${theme.light});
          border-radius: 2px;
          z-index: 1;
        }

        /* Quarter Card */
        .quarter-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }

        .quarter-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 8px;
        }

        .quarter-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: white;
          box-shadow: 0 2px 6px ${theme.secondary}20;
          margin-bottom: 4px;
        }

        .q1 .quarter-badge { background: linear-gradient(135deg, ${theme.primary}, ${theme.accent}); }
        .q2 .quarter-badge { background: linear-gradient(135deg, ${theme.accent}, ${theme.secondary}); }
        .q3 .quarter-badge { background: linear-gradient(135deg, ${theme.secondary}, ${theme.primary}99); }
        .q4 .quarter-badge { background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary}); }

        .quarter-label {
          font-size: 9px;
          color: ${theme.secondary};
          font-weight: 500;
        }

        .quarter-content {
          background: ${theme.bg};
          border-radius: 10px;
          padding: 10px 8px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
          border: 1px solid ${theme.light}60;
        }

        .content-item {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .item-label {
          font-size: 8px;
          color: ${theme.secondary};
          opacity: 0.6;
          font-weight: 500;
        }

        .item-value {
          font-size: 9px;
          color: ${theme.primary};
          font-weight: 600;
          line-height: 1.3;
        }

        .item-value.accent {
          color: ${theme.accent};
        }

        .item-value.secondary {
          color: ${theme.secondary};
          font-weight: 500;
        }

        .item-divider {
          height: 1px;
          background: ${theme.light}50;
          margin: 2px 0;
        }

        .purpose-tag {
          display: inline-block;
          padding: 2px 5px;
          background: ${theme.primary}12;
          color: ${theme.primary};
          border-radius: 3px;
          font-size: 7.5px;
          font-weight: 500;
          margin-top: 2px;
        }

        /* Self-Check Section */
        .selfcheck-section {
          background: white;
          border-radius: 12px;
          padding: 10px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          position: relative;
          overflow: hidden;
        }

        .selfcheck-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, ${theme.accent}, ${theme.primary});
          border-radius: 12px 12px 0 0;
        }

        .selfcheck-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
        }

        .selfcheck-icon {
          font-size: 13px;
        }

        .selfcheck-title {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0;
        }

        .selfcheck-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 6px 10px;
          background: ${theme.bg};
          border-radius: 8px;
          border-left: 3px solid ${theme.accent};
        }

        .check-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          background: ${theme.accent};
          border-radius: 50%;
          font-size: 8px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .check-text {
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        /* Decorative Elements */
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

        .slide-74 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-74">
        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Annual Compensation Communication Calendar</p>
        </div>

        <!-- Why Plan Section -->
        <div class="why-section">
          <div class="why-header">
            <span class="why-icon">💡</span>
            <h3 class="why-title">为什么要做年度计划</h3>
          </div>
          <ul class="why-list">
            <li>薪酬对话最危险的时刻是"临时抱佛脚"</li>
            <li>有计划的管理者，才能做到主动沟通</li>
            <li>年度计划让薪酬沟通从"被动反应"变成"主动布局"</li>
          </ul>
        </div>

        <!-- Calendar Timeline -->
        <div class="calendar-section">
          <div class="calendar-header">
            <span class="calendar-icon">📅</span>
            <h3 class="calendar-title">年度薪酬沟通日历</h3>
          </div>

          <div class="timeline-container">
            <div class="timeline-line"></div>

            <!-- Q1 -->
            <div class="quarter-card q1">
              <div class="quarter-header">
                <div class="quarter-badge">Q1</div>
                <span class="quarter-label">年初</span>
              </div>
              <div class="quarter-content">
                <div class="content-item">
                  <span class="item-label">沟通主题</span>
                  <span class="item-value">年度薪酬预期管理</span>
                </div>
                <div class="item-divider"></div>
                <div class="content-item">
                  <span class="item-label">目的</span>
                  <span class="purpose-tag">让员工了解今年调薪框架</span>
                </div>
                <div class="item-divider"></div>
                <div class="content-item">
                  <span class="item-label">关键动作</span>
                  <span class="item-value secondary">分享公司薪酬理念、团队调薪预算情况</span>
                </div>
              </div>
            </div>

            <!-- Q2 -->
            <div class="quarter-card q2">
              <div class="quarter-header">
                <div class="quarter-badge">Q2</div>
                <span class="quarter-label">年中</span>
              </div>
              <div class="quarter-content">
                <div class="content-item">
                  <span class="item-label">沟通主题</span>
                  <span class="item-value">中期回顾与反馈</span>
                </div>
                <div class="item-divider"></div>
                <div class="content-item">
                  <span class="item-label">目的</span>
                  <span class="purpose-tag">检视薪酬竞争力，及早发现问题</span>
                </div>
                <div class="item-divider"></div>
                <div class="content-item">
                  <span class="item-label">关键动作</span>
                  <span class="item-value secondary">讨论市场价值变化、绩效表现</span>
                </div>
              </div>
            </div>

            <!-- Q3 -->
            <div class="quarter-card q3">
              <div class="quarter-header">
                <div class="quarter-badge">Q3</div>
                <span class="quarter-label">下半年</span>
              </div>
              <div class="quarter-content">
                <div class="content-item">
                  <span class="item-label">沟通主题</span>
                  <span class="item-value">调薪准备与预期调整</span>
                </div>
                <div class="item-divider"></div>
                <div class="content-item">
                  <span class="item-label">目的</span>
                  <span class="purpose-tag">为年终调薪做铺垫</span>
                </div>
                <div class="item-divider"></div>
                <div class="content-item">
                  <span class="item-label">关键动作</span>
                  <span class="item-value secondary">收集员工诉求、评估调整空间</span>
                </div>
              </div>
            </div>

            <!-- Q4 -->
            <div class="quarter-card q4">
              <div class="quarter-header">
                <div class="quarter-badge">Q4</div>
                <span class="quarter-label">年终</span>
              </div>
              <div class="quarter-content">
                <div class="content-item">
                  <span class="item-label">沟通主题</span>
                  <span class="item-value">调薪结果解读</span>
                </div>
                <div class="item-divider"></div>
                <div class="content-item">
                  <span class="item-label">目的</span>
                  <span class="purpose-tag">完整的三步信任重建法</span>
                </div>
                <div class="item-divider"></div>
                <div class="content-item">
                  <span class="item-label">关键动作</span>
                  <span class="item-value secondary">透明披露、逻辑呈现、情感连接</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Self-Check Section -->
        <div class="selfcheck-section">
          <div class="selfcheck-header">
            <span class="selfcheck-icon">✅</span>
            <h3 class="selfcheck-title">管理者自检问题</h3>
          </div>
          <div class="selfcheck-list">
            <div class="check-item">
              <div class="check-number">1</div>
              <div class="check-text">今年我是否主动跟每个核心员工谈过他们的市场价值和职业期待？</div>
            </div>
            <div class="check-item">
              <div class="check-number">2</div>
              <div class="check-text">今年的调薪对话，我是否做好了"预期管理"？</div>
            </div>
            <div class="check-item">
              <div class="check-number">3</div>
              <div class="check-text">日常我是否有持续做"薪酬信任存款"？</div>
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
