/**
 * Slide 46: 主动沟通 vs 被动应答
 * Content Page - Proactive vs Reactive Communication
 */

const slideConfig = {
  type: 'content',
  index: 46,
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
        .slide-46 {
          width: 100%;
          height: 100%;
          padding: 20px 32px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* Header */
        .slide-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 10px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .header-accent {
          width: 4px;
          height: 26px;
          background: linear-gradient(180deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 2px;
        }

        .header-content {
          flex: 1;
        }

        .slide-title {
          font-size: 22px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 2px 0;
        }

        .slide-subtitle {
          font-size: 11px;
          color: ${theme.secondary};
          opacity: 0.7;
          margin: 0;
        }

        /* Section Label */
        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 6px;
        }

        .section-label::before {
          content: '';
          width: 3px;
          height: 14px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* Comparison Table */
        .comparison-table {
          background: white;
          border-radius: 12px;
          padding: 14px 16px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          overflow: hidden;
        }

        .table-header {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1.2fr;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 8px;
        }

        .table-header.reactive {
          background: linear-gradient(135deg, ${theme.secondary} 0%, ${theme.secondary}99 100%);
        }

        .table-header.proactive {
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
        }

        .table-header-cell {
          font-size: 11px;
          font-weight: 600;
          color: white;
          text-align: center;
        }

        .table-header-cell:first-child {
          text-align: left;
          font-size: 12px;
        }

        .table-row {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1.2fr;
          gap: 8px;
          padding: 7px 12px;
          align-items: center;
          border-bottom: 1px dashed ${theme.light};
          transition: background 0.2s ease;
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .table-row:hover {
          background: ${theme.bg};
          border-radius: 6px;
        }

        .table-dim {
          font-size: 11.5px;
          font-weight: 600;
          color: ${theme.secondary};
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dim-icon {
          font-size: 12px;
          flex-shrink: 0;
        }

        .table-value {
          font-size: 11px;
          text-align: center;
          line-height: 1.4;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .table-value.reactive {
          color: ${theme.secondary};
          background: ${theme.secondary}10;
        }

        .table-value.proactive {
          color: ${theme.primary};
          background: ${theme.primary}10;
        }

        .table-value .highlight {
          font-weight: 600;
        }

        /* Label badges */
        .badge-rejective {
          display: inline-block;
          font-size: 9px;
          padding: 2px 6px;
          background: ${theme.secondary}20;
          color: ${theme.secondary};
          border-radius: 3px;
          font-weight: 600;
          margin-left: 4px;
        }

        .badge-positive {
          display: inline-block;
          font-size: 9px;
          padding: 2px 6px;
          background: ${theme.primary}15;
          color: ${theme.primary};
          border-radius: 3px;
          font-weight: 600;
          margin-left: 4px;
        }

        /* Three Timings Section */
        .timings-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .timings-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .timings-title {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.primary};
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .timings-badge {
          font-size: 9px;
          padding: 3px 10px;
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
          color: white;
          border-radius: 4px;
          font-weight: 600;
        }

        .timings-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          flex: 1;
        }

        .timing-card {
          background: white;
          border-radius: 10px;
          padding: 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .timing-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${theme.secondary}12;
        }

        .timing-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
        }

        .timing-card:nth-child(1)::before {
          background: linear-gradient(90deg, ${theme.primary} 0%, ${theme.accent} 100%);
        }

        .timing-card:nth-child(2)::before {
          background: linear-gradient(90deg, ${theme.accent} 0%, ${theme.primary} 100%);
        }

        .timing-card:nth-child(3)::before {
          background: linear-gradient(90deg, ${theme.primary} 0%, ${theme.secondary} 100%);
        }

        .timing-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .timing-number {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .timing-card:nth-child(1) .timing-number { background: ${theme.primary}; }
        .timing-card:nth-child(2) .timing-number { background: ${theme.accent}; }
        .timing-card:nth-child(3) .timing-number { background: ${theme.secondary}; }

        .timing-name {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .timing-card:nth-child(2) .timing-name { color: ${theme.accent}; }
        .timing-card:nth-child(3) .timing-name { color: ${theme.secondary}; }

        .timing-label {
          font-size: 9px;
          padding: 2px 6px;
          border-radius: 3px;
          font-weight: 600;
          margin-left: auto;
        }

        .timing-card:nth-child(1) .timing-label {
          background: ${theme.primary}15;
          color: ${theme.primary};
        }

        .timing-card:nth-child(2) .timing-label {
          background: ${theme.accent}15;
          color: ${theme.accent};
        }

        .timing-card:nth-child(3) .timing-label {
          background: ${theme.secondary}15;
          color: ${theme.secondary};
        }

        .timing-quote {
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.5;
          padding: 10px;
          background: ${theme.bg};
          border-radius: 6px;
          font-style: normal;
          flex: 1;
          border-left: 3px solid;
        }

        .timing-card:nth-child(1) .timing-quote {
          border-left-color: ${theme.primary}60;
        }

        .timing-card:nth-child(2) .timing-quote {
          border-left-color: ${theme.accent}60;
        }

        .timing-card:nth-child(3) .timing-quote {
          border-left-color: ${theme.secondary}60;
        }

        .quote-mark {
          font-size: 14px;
          color: ${theme.light};
          font-weight: 700;
        }

        /* Key Insight Banner */
        .key-insight {
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}06 100%);
          border-radius: 10px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          border: 1px solid ${theme.light};
        }

        .insight-icon {
          font-size: 18px;
        }

        .insight-text {
          font-size: 12px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .insight-highlight {
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
          color: white;
          padding: 3px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
        }

        /* Decorative */
        .deco-dots {
          position: absolute;
          top: 14px;
          right: 24px;
          display: flex;
          gap: 4px;
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

        .slide-46 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-46">
        <!-- Decorative dots -->
        <div class="deco-dots">
          <div class="deco-dot"></div>
          <div class="deco-dot"></div>
          <div class="deco-dot"></div>
        </div>

        <!-- Header -->
        <div class="slide-header">
          <div class="header-accent"></div>
          <div class="header-content">
            <h1 class="slide-title">${slideConfig.title}</h1>
            <p class="slide-subtitle">Proactive vs Reactive Communication</p>
          </div>
        </div>

        <!-- Comparison Table -->
        <div class="section-label">两种沟通模式的对比</div>
        <div class="comparison-table">
          <div class="table-header">
            <div class="table-header-cell">维度</div>
            <div class="table-header-cell">被动应答模式</div>
            <div class="table-header-cell">主动沟通模式</div>
          </div>

          <div class="table-row">
            <div class="table-dim">
              <span class="dim-icon">⚡</span>
              触发点
            </div>
            <div class="table-value reactive">
              员工问了才回应
            </div>
            <div class="table-value proactive">
              主动定期同步
            </div>
          </div>

          <div class="table-row">
            <div class="table-dim">
              <span class="dim-icon">⏰</span>
              时机
            </div>
            <div class="table-value reactive">
              调薪结果出来后
            </div>
            <div class="table-value proactive">
              调薪前后都谈
            </div>
          </div>

          <div class="table-row">
            <div class="table-dim">
              <span class="dim-icon">📋</span>
              内容
            </div>
            <div class="table-value reactive">
              只谈结果数字
            </div>
            <div class="table-value proactive">
              谈过程、谈依据、谈期望
            </div>
          </div>

          <div class="table-row">
            <div class="table-dim">
              <span class="dim-icon">💭</span>
              员工感受
            </div>
            <div class="table-value reactive">
              <span class="highlight">"被通知"</span>
              <span class="badge-rejective">被动</span>
            </div>
            <div class="table-value proactive">
              <span class="highlight">"被关注"</span>
              <span class="badge-positive">主动</span>
            </div>
          </div>

          <div class="table-row">
            <div class="table-dim">
              <span class="dim-icon">🎭</span>
              管理者感受
            </div>
            <div class="table-value reactive">
              <span class="highlight">"消防员"</span>（一直灭火）
            </div>
            <div class="table-value proactive">
              <span class="highlight">"园丁"</span>（持续浇灌）
            </div>
          </div>

          <div class="table-row">
            <div class="table-dim">
              <span class="dim-icon">🏦</span>
              信任积累
            </div>
            <div class="table-value reactive">
              <span class="highlight">消耗型</span>
            </div>
            <div class="table-value proactive">
              <span class="highlight">积累型</span>
            </div>
          </div>
        </div>

        <!-- Three Timings Section -->
        <div class="timings-section">
          <div class="timings-header">
            <div class="timings-title">
              <span>⏱</span>
              <span>主动沟通的三个黄金时机</span>
            </div>
            <span class="timings-badge">关键</span>
          </div>

          <div class="timings-grid">
            <!-- Timing 1 -->
            <div class="timing-card">
              <div class="timing-header">
                <div class="timing-number">1</div>
                <div class="timing-name">调薪前的"预期管理"</div>
                <span class="timing-label">事前</span>
              </div>
              <div class="timing-quote">
                <span class="quote-mark">"</span>今年的调薪结果快出来了，我提前跟你说一下大环境——市场数据有一些压力，但我会尽力为你争取。<span class="quote-mark">"</span>
              </div>
            </div>

            <!-- Timing 2 -->
            <div class="timing-card">
              <div class="timing-header">
                <div class="timing-number">2</div>
                <div class="timing-name">调薪后的"结果解读"</div>
                <span class="timing-label">事后</span>
              </div>
              <div class="timing-quote">
                <span class="quote-mark">"</span>结果出来了，我知道你可能有疑问，我先把我的判断依据跟你说清楚。<span class="quote-mark">"</span>
              </div>
            </div>

            <!-- Timing 3 -->
            <div class="timing-card">
              <div class="timing-header">
                <div class="timing-number">3</div>
                <div class="timing-name">日常的"价值认可"</div>
                <span class="timing-label">日常</span>
              </div>
              <div class="timing-quote">
                <span class="quote-mark">"</span>你这个季度做得不错，我觉得你的市场价值在往上走，下一个调薪窗口我会重点考虑。<span class="quote-mark">"</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Insight Banner -->
        <div class="key-insight">
          <span class="insight-icon">💡</span>
          <span class="insight-text">核心洞察</span>
          <span class="insight-highlight">主动沟通是信任积累，被动应答是信任消耗</span>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
