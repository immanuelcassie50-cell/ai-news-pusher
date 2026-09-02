/**
 * Slide 71: 主动沟通 vs 被动应答
 * Content Page - Proactive vs Reactive Communication
 */

const slideConfig = {
  type: 'content',
  index: 71,
  title: '主动沟通 vs 被动应答'
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
        .slide-71 {
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
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .slide-title {
          font-size: 20px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 3px 0;
          line-height: 1.3;
        }

        .slide-subtitle {
          font-size: 10px;
          color: ${theme.secondary};
          opacity: 0.55;
        }

        /* Main Content Area */
        .main-content {
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
          min-height: 0;
        }

        /* Section Label */
        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 8px;
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

        /* Comparison Table Section */
        .comparison-section {
          background: white;
          border-radius: 14px;
          padding: 14px 16px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
        }

        /* Comparison Table */
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 10px;
        }

        .comparison-table th {
          padding: 8px 12px;
          text-align: center;
          font-weight: 600;
          border-bottom: 2px solid ${theme.light};
        }

        .comparison-table th:first-child {
          text-align: left;
          width: 18%;
          color: ${theme.secondary};
        }

        .comparison-table th.col-passive {
          background: ${theme.secondary}12;
          color: ${theme.secondary};
          border-radius: 8px 8px 0 0;
        }

        .comparison-table th.col-proactive {
          background: ${theme.primary}12;
          color: ${theme.primary};
          border-radius: 8px 8px 0 0;
        }

        .comparison-table td {
          padding: 9px 12px;
          text-align: center;
          border-bottom: 1px solid ${theme.light}50;
          vertical-align: middle;
          line-height: 1.4;
        }

        .comparison-table td:first-child {
          text-align: left;
          font-weight: 600;
          color: ${theme.secondary};
        }

        .comparison-table tbody tr:last-child td {
          border-bottom: none;
        }

        .comparison-table tbody tr:hover td {
          background: ${theme.bg};
        }

        .cell-passive {
          color: ${theme.secondary};
          opacity: 0.75;
        }

        .cell-passive::before {
          content: '✗ ';
          color: ${theme.accent};
          font-weight: 600;
        }

        .cell-proactive {
          color: ${theme.primary};
          font-weight: 500;
        }

        .cell-proactive::before {
          content: '✓ ';
          color: ${theme.accent};
          font-weight: 600;
        }

        .cell-dimension {
          color: ${theme.secondary};
        }

        /* Visual indicator icons */
        .icon-bad {
          color: ${theme.accent};
          margin-right: 4px;
        }

        .icon-good {
          color: ${theme.primary};
          margin-right: 4px;
        }

        /* Three Timing Cards Section */
        .timing-section {
          margin-top: 4px;
        }

        .timing-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .timing-card {
          background: white;
          border-radius: 12px;
          padding: 14px 14px;
          box-shadow: 0 2px 10px ${theme.secondary}08;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .timing-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
        }

        .timing-card.timing-1::before {
          background: linear-gradient(90deg, ${theme.primary}, ${theme.accent});
        }

        .timing-card.timing-2::before {
          background: linear-gradient(90deg, ${theme.accent}, ${theme.primary});
        }

        .timing-card.timing-3::before {
          background: linear-gradient(90deg, ${theme.primary}, ${theme.secondary});
        }

        .timing-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 8px;
          border-radius: 5px;
          font-size: 9px;
          font-weight: 600;
          margin-bottom: 8px;
          width: fit-content;
        }

        .timing-1 .timing-badge {
          background: ${theme.primary}15;
          color: ${theme.primary};
        }

        .timing-2 .timing-badge {
          background: ${theme.accent}15;
          color: ${theme.accent};
        }

        .timing-3 .timing-badge {
          background: ${theme.secondary}15;
          color: ${theme.secondary};
        }

        .timing-title {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 8px 0;
          line-height: 1.35;
        }

        .timing-label {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.7;
          margin-bottom: 4px;
        }

        .timing-quote {
          background: ${theme.bg};
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.55;
          border-left: 3px solid ${theme.light};
          flex: 1;
        }

        .timing-card.timing-1 .timing-quote {
          border-left-color: ${theme.primary}40;
        }

        .timing-card.timing-2 .timing-quote {
          border-left-color: ${theme.accent}40;
        }

        .timing-card.timing-3 .timing-quote {
          border-left-color: ${theme.secondary}40;
        }

        .quote-mark {
          font-size: 14px;
          color: ${theme.light};
          font-weight: 700;
          line-height: 1;
          margin-bottom: 2px;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.3;
        }

        .deco-1 {
          width: 40px;
          height: 40px;
          background: ${theme.light}50;
          top: 8px;
          right: 40px;
        }

        .deco-2 {
          width: 20px;
          height: 20px;
          background: ${theme.accent}30;
          bottom: 20px;
          right: 70px;
        }

        .deco-dots {
          position: absolute;
          bottom: 14px;
          right: 36px;
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

        .slide-71 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-71">
        <!-- Decorative -->
        <div class="deco-circle deco-1"></div>
        <div class="deco-circle deco-2"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Proactive vs Reactive Communication</p>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Comparison Table Section -->
          <div class="comparison-section">
            <div class="section-label">
              <span class="icon">⚖️</span>
              <span>两种沟通模式的对比</span>
            </div>

            <table class="comparison-table">
              <thead>
                <tr>
                  <th>维度</th>
                  <th class="col-passive">被动应答模式</th>
                  <th class="col-proactive">主动沟通模式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="cell-dimension">触发点</td>
                  <td class="cell-passive">员工问了才回应</td>
                  <td class="cell-proactive">主动定期同步</td>
                </tr>
                <tr>
                  <td class="cell-dimension">时机</td>
                  <td class="cell-passive">调薪结果出来后</td>
                  <td class="cell-proactive">调薪前后都谈</td>
                </tr>
                <tr>
                  <td class="cell-dimension">内容</td>
                  <td class="cell-passive">只谈结果数字</td>
                  <td class="cell-proactive">谈过程、谈依据、谈期望</td>
                </tr>
                <tr>
                  <td class="cell-dimension">员工感受</td>
                  <td class="cell-passive">"被通知"</td>
                  <td class="cell-proactive">"被关注"</td>
                </tr>
                <tr>
                  <td class="cell-dimension">管理者感受</td>
                  <td class="cell-passive">"消防员"（一直灭火）</td>
                  <td class="cell-proactive">"园丁"（持续浇灌）</td>
                </tr>
                <tr>
                  <td class="cell-dimension">信任积累</td>
                  <td class="cell-passive">消耗型</td>
                  <td class="cell-proactive">积累型</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Three Timing Cards Section -->
          <div class="timing-section">
            <div class="section-label">
              <span class="icon">⏰</span>
              <span>主动沟通的三个黄金时机</span>
            </div>

            <div class="timing-cards">
              <!-- Timing 1 -->
              <div class="timing-card timing-1">
                <div class="timing-badge">⏱️ 时机一</div>
                <h4 class="timing-title">调薪前的"预期管理"</h4>
                <div class="timing-label">调薪前</div>
                <div class="timing-quote">
                  <div class="quote-mark">"</div>
                  "今年的调薪结果快出来了，我提前跟你说一下大环境——市场数据有一些压力，但我会尽力为你争取。"
                </div>
              </div>

              <!-- Timing 2 -->
              <div class="timing-card timing-2">
                <div class="timing-badge">⏱️ 时机二</div>
                <h4 class="timing-title">调薪后的"结果解读"</h4>
                <div class="timing-label">调薪后</div>
                <div class="timing-quote">
                  <div class="quote-mark">"</div>
                  "结果出来了，我知道你可能有疑问，我先把我的判断依据跟你说清楚。"
                </div>
              </div>

              <!-- Timing 3 -->
              <div class="timing-card timing-3">
                <div class="timing-badge">⏱️ 时机三</div>
                <h4 class="timing-title">日常的"价值认可"</h4>
                <div class="timing-label">日常</div>
                <div class="timing-quote">
                  <div class="quote-mark">"</div>
                  "你这个季度做得不错，我觉得你的市场价值在往上走，下一个调薪窗口我会重点考虑。"
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
