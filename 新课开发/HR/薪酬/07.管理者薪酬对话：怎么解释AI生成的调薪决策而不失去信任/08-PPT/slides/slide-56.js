/**
 * Slide 56: 场景二：晋升调薪解释
 * Content Page - Promotion Salary Explanation (Sensitive Dialogue with Comparison)
 */

const slideConfig = {
  type: 'content',
  index: 56,
  title: '场景二：晋升调薪解释'
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
        .slide-56 {
          width: 100%;
          height: 100%;
          padding: 16px 24px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Header */
        .slide-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 8px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .header-accent {
          width: 4px;
          height: 24px;
          background: linear-gradient(180deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .header-content {
          flex: 1;
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
          opacity: 0.6;
          margin: 0;
        }

        /* Main Content - Three Sections */
        .main-content {
          display: flex;
          gap: 12px;
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

        /* Left Column - Scenario Background */
        .left-column {
          width: 28%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .scenario-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .scenario-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .scenario-icon {
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

        .scenario-title {
          font-size: 13px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .scenario-subtitle {
          font-size: 9px;
          color: ${theme.secondary};
          opacity: 0.6;
        }

        /* Scenario Info */
        .scenario-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 8px 10px;
          background: ${theme.bg};
          border-radius: 8px;
        }

        .info-icon {
          font-size: 14px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .info-content {
          flex: 1;
        }

        .info-label {
          font-size: 9px;
          font-weight: 600;
          color: ${theme.secondary};
          opacity: 0.7;
          margin-bottom: 2px;
        }

        .info-value {
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.35;
        }

        .info-value strong {
          color: ${theme.primary};
          font-weight: 600;
        }

        .difficulty-stars {
          color: ${theme.accent};
          font-size: 10px;
          letter-spacing: 1px;
        }

        /* Middle Column - Dialogue Points */
        .middle-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dialogue-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .dialogue-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .dialogue-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          padding: 10px 12px;
          background: ${theme.bg};
          border-radius: 10px;
          position: relative;
        }

        .dialogue-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          border-radius: 3px 0 0 3px;
        }

        .dialogue-item:nth-child(1)::before { background: ${theme.primary}; }
        .dialogue-item:nth-child(2)::before { background: ${theme.accent}; }
        .dialogue-item:nth-child(3)::before { background: ${theme.secondary}; }
        .dialogue-item:nth-child(4)::before { background: ${theme.primary}80; }

        .dialogue-number {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .dialogue-item:nth-child(1) .dialogue-number { background: ${theme.primary}; }
        .dialogue-item:nth-child(2) .dialogue-number { background: ${theme.accent}; }
        .dialogue-item:nth-child(3) .dialogue-number { background: ${theme.secondary}; }
        .dialogue-item:nth-child(4) .dialogue-number { background: ${theme.primary}80; }

        .dialogue-content {
          flex: 1;
          min-width: 0;
        }

        .dialogue-title {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 3px;
        }

        .dialogue-item:nth-child(2) .dialogue-title { color: ${theme.accent}; }
        .dialogue-item:nth-child(3) .dialogue-title { color: ${theme.secondary}; }
        .dialogue-item:nth-child(4) .dialogue-title { color: ${theme.primary}; opacity: 0.8; }

        .dialogue-desc {
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.35;
          opacity: 0.85;
        }

        /* Right Column - Template & Reactions */
        .right-column {
          width: 35%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .template-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .template-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .template-icon {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: linear-gradient(135deg, ${theme.accent}, ${theme.primary});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
        }

        .template-title {
          font-size: 12px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .template-text {
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.6;
          padding: 10px 12px;
          background: ${theme.bg};
          border-radius: 8px;
          border-left: 3px solid ${theme.accent};
        }

        .template-text em {
          color: ${theme.accent};
          font-style: normal;
          font-weight: 600;
        }

        /* Reactions Card */
        .reactions-card {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .reactions-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .reactions-icon {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: ${theme.light}40;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
        }

        .reactions-title {
          font-size: 12px;
          font-weight: 700;
          color: ${theme.secondary};
        }

        .reactions-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .reaction-item {
          padding: 8px 10px;
          background: ${theme.bg};
          border-radius: 8px;
        }

        .reaction-q {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          margin-bottom: 6px;
        }

        .reaction-q-icon {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          background: ${theme.primary}15;
          color: ${theme.primary};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .reaction-q-text {
          flex: 1;
          font-size: 10px;
          color: ${theme.primary};
          font-weight: 500;
          line-height: 1.35;
        }

        .reaction-a {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          padding-left: 24px;
        }

        .reaction-a-icon {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          background: ${theme.accent}15;
          color: ${theme.accent};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .reaction-a-text {
          flex: 1;
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.35;
        }

        /* Key Insight Footer */
        .key-insight {
          padding: 10px 14px;
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}06 100%);
          border-radius: 10px;
          border-left: 4px solid ${theme.accent};
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .insight-icon {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
        }

        .insight-text {
          flex: 1;
          font-size: 10.5px;
          color: ${theme.secondary};
          line-height: 1.45;
        }

        .insight-text strong {
          color: ${theme.primary};
          font-weight: 600;
        }

        /* Decorative Elements */
        .deco-dots {
          position: absolute;
          top: 12px;
          right: 16px;
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

        .slide-56 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-56">
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
            <p class="slide-subtitle">Promotion Salary Explanation - Sensitive Dialogue with Comparison</p>
          </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Left Column - Scenario Background -->
          <div class="left-column">
            <div class="section-label">
              <span class="icon">📋</span>
              <span>场景背景</span>
            </div>

            <div class="scenario-card">
              <div class="scenario-header">
                <div class="scenario-icon">🎯</div>
                <div>
                  <div class="scenario-title">晋升调薪解释</div>
                  <div class="scenario-subtitle">有对比的敏感对话</div>
                </div>
              </div>

              <div class="scenario-info">
                <div class="info-row">
                  <span class="info-icon">🏷️</span>
                  <div class="info-content">
                    <div class="info-label">类型</div>
                    <div class="info-value">有对比的敏感对话</div>
                  </div>
                </div>

                <div class="info-row">
                  <span class="info-icon">⭐</span>
                  <div class="info-content">
                    <div class="info-label">难度</div>
                    <div class="info-value">
                      <span class="difficulty-stars">★★★☆☆</span>
                    </div>
                  </div>
                </div>

                <div class="info-row">
                  <span class="info-icon">⚡</span>
                  <div class="info-content">
                    <div class="info-label">核心挑战</div>
                    <div class="info-value">晋升意味着<strong>职级提升</strong>，但调薪幅度可能<strong>不如员工预期</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Middle Column - Dialogue Points -->
          <div class="middle-column">
            <div class="section-label">
              <span class="icon">💬</span>
              <span>对话要点</span>
            </div>

            <div class="dialogue-card">
              <div class="dialogue-list">
                <div class="dialogue-item">
                  <div class="dialogue-number">1</div>
                  <div class="dialogue-content">
                    <div class="dialogue-title">先肯定晋升</div>
                    <div class="dialogue-desc">晋升本身就是重大认可，不只是薪资的事</div>
                  </div>
                </div>

                <div class="dialogue-item">
                  <div class="dialogue-number">2</div>
                  <div class="dialogue-content">
                    <div class="dialogue-title">分开谈两件事</div>
                    <div class="dialogue-desc">晋升是晋升，调薪是调薪，关联但不等同</div>
                  </div>
                </div>

                <div class="dialogue-item">
                  <div class="dialogue-number">3</div>
                  <div class="dialogue-content">
                    <div class="dialogue-title">带宽解释</div>
                    <div class="dialogue-desc">每个职级有薪资带宽，调薪不能超出上限</div>
                  </div>
                </div>

                <div class="dialogue-item">
                  <div class="dialogue-number">4</div>
                  <div class="dialogue-content">
                    <div class="dialogue-title">给出期待</div>
                    <div class="dialogue-desc">说明下次调薪的期待和路径</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Template & Reactions -->
          <div class="right-column">
            <div class="section-label">
              <span class="icon">📝</span>
              <span>话术模板</span>
            </div>

            <div class="template-card">
              <div class="template-header">
                <div class="template-icon">💬</div>
                <span class="template-title">参考话术</span>
              </div>
              <div class="template-text">
                "恭喜你晋升为高级工程师。<em>晋升是对你过去两年表现的认可</em>，这个职级本身就代表公司对你未来价值的期待。<em>关于调薪，有一点需要说明：晋升和调薪是两件事，但有关联。</em>你的新职级有对应的薪资带宽，这次调薪8%是因为你的新职级起点已经在带宽内偏高的位置。如果明年你在这个职级上持续表现好，调薪空间会更大。"
              </div>
            </div>

            <div class="reactions-card">
              <div class="reactions-header">
                <div class="reactions-icon">🤔</div>
                <span class="reactions-title">员工可能的反应</span>
              </div>

              <div class="reactions-list">
                <div class="reaction-item">
                  <div class="reaction-q">
                    <div class="reaction-q-icon">Q</div>
                    <div class="reaction-q-text">"我以为晋升了会调更多"</div>
                  </div>
                  <div class="reaction-a">
                    <div class="reaction-a-icon">A</div>
                    <div class="reaction-a-text">"我理解你的预期，下次调薪季我会重点考虑"</div>
                  </div>
                </div>

                <div class="reaction-item">
                  <div class="reaction-q">
                    <div class="reaction-q-icon">Q</div>
                    <div class="reaction-q-text">"带宽是什么概念？"</div>
                  </div>
                  <div class="reaction-a">
                    <div class="reaction-a-icon">A</div>
                    <div class="reaction-a-text">"简单说就是每个职级有一个薪资范围，你是刚进这个范围的高位"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Insight Footer -->
        <div class="key-insight">
          <div class="insight-icon">💡</div>
          <div class="insight-text">
            <strong>关键思路：</strong>晋升和调薪是<strong>关联但不等同</strong>的两件事。分开解释，能有效管理员工的预期，避免"晋升=大幅调薪"的误解。
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
