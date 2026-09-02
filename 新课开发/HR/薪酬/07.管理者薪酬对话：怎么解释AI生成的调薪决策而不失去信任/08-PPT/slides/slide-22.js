/**
 * Slide 22: 三步信任重建法：第一步——透明披露
 * Content Page - Transparency as the first step of trust rebuilding
 */

const slideConfig = {
  type: 'content',
  index: 22,
  title: '三步信任重建法：第一步——透明披露'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

// 透明披露的四个主动
const fourProactives = [
  { num: "1", title: "主动说明AI数据轨", desc: "市场数据、绩效关联、带宽位置" },
  { num: "2", title: "主动说明人工判断轨", desc: "业务考量、团队平衡、特殊贡献" },
  { num: "3", title: "主动说明两者关系", desc: "两者的权重和决策逻辑" },
  { num: "4", title: "主动说明裁量空间", desc: "管理者的争取过程和调整余地" }
];

// 反例vs正例对比数据
const comparisonData = [
  {
    negative: "这是系统算的",
    positive: "我来跟你拆开说两部分——"
  },
  {
    negative: "你可以自己去看",
    positive: "系统里有原始报告，我可以发给你"
  },
  {
    negative: "我也没有办法",
    positive: "我能调整的空间有限，但我争取过"
  }
];

function render() {
  return `
    <div class="slide" data-slide="${slideConfig.index}" style="background: ${theme.bg}; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;">
      <style>
        .slide-22 {
          width: 100%;
          height: 100%;
          padding: 36px 44px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .slide-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .slide-title {
          font-size: 28px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 6px 0;
        }

        .slide-subtitle {
          font-size: 13px;
          color: ${theme.secondary};
          opacity: 0.65;
        }

        /* 核心理念卡片 */
        .core-idea {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 24px;
          background: linear-gradient(135deg, ${theme.primary}10 0%, ${theme.accent}08 100%);
          border-radius: 12px;
          border-left: 4px solid ${theme.primary};
          margin-bottom: 22px;
        }

        .core-idea-icon {
          font-size: 20px;
        }

        .core-idea-text {
          font-size: 15px;
          color: ${theme.secondary};
          font-weight: 500;
        }

        .core-idea-text strong {
          color: ${theme.primary};
        }

        /* 主内容区域 */
        .main-content {
          display: flex;
          gap: 28px;
          flex: 1;
        }

        /* 左侧：为什么透明重要 + 四个主动 */
        .left-section {
          flex: 1.1;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        /* 为什么透明重要 */
        .why-section {
          background: white;
          border-radius: 14px;
          padding: 18px 20px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
        }

        .section-title {
          font-size: 14px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-title-icon {
          font-size: 16px;
        }

        .why-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .why-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: ${theme.secondary};
        }

        .why-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${theme.accent};
          flex-shrink: 0;
        }

        /* 四个主动 */
        .four-proactives {
          background: white;
          border-radius: 14px;
          padding: 18px 20px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
          flex: 1;
        }

        .proactive-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .proactive-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          background: ${theme.bg};
          border-radius: 10px;
          transition: transform 0.2s ease;
        }

        .proactive-item:hover {
          transform: translateY(-2px);
        }

        .proactive-num {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: ${theme.primary};
          color: white;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .proactive-content {
          flex: 1;
        }

        .proactive-title {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 3px;
        }

        .proactive-desc {
          font-size: 11px;
          color: ${theme.secondary};
          opacity: 0.65;
          line-height: 1.4;
        }

        /* 右侧：对比表格 */
        .right-section {
          flex: 0.9;
          display: flex;
          flex-direction: column;
        }

        .comparison-card {
          background: white;
          border-radius: 14px;
          padding: 18px 20px;
          box-shadow: 0 2px 8px ${theme.secondary}10;
          flex: 1;
        }

        .comparison-header {
          display: flex;
          gap: 12px;
          margin-bottom: 14px;
        }

        .comparison-col {
          flex: 1;
          text-align: center;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
        }

        .comparison-col.negative {
          background: ${theme.accent}15;
          color: ${theme.accent};
        }

        .comparison-col.positive {
          background: ${theme.primary}15;
          color: ${theme.primary};
        }

        .comparison-rows {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .comparison-row {
          display: flex;
          gap: 12px;
        }

        .comparison-cell {
          flex: 1;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 12px;
          line-height: 1.5;
        }

        .comparison-cell.negative {
          background: ${theme.accent}08;
          border-left: 3px solid ${theme.accent};
          color: ${theme.secondary};
        }

        .comparison-cell.positive {
          background: ${theme.primary}08;
          border-left: 3px solid ${theme.primary};
          color: ${theme.secondary};
        }

        .cell-label {
          font-size: 10px;
          font-weight: 600;
          margin-bottom: 4px;
          opacity: 0.5;
        }

        .comparison-cell.negative .cell-label {
          color: ${theme.accent};
        }

        .comparison-cell.positive .cell-label {
          color: ${theme.primary};
        }

        .cell-text {
          font-size: 12px;
        }

        .cell-text.quote {
          font-style: italic;
        }

        /* 页脚提示 */
        .slide-footer {
          margin-top: 16px;
          text-align: center;
          font-size: 11px;
          color: ${theme.secondary};
          opacity: 0.5;
        }
      </style>

      <div class="slide-header">
        <h1 class="slide-title">${slideConfig.title}</h1>
        <p class="slide-subtitle">Transparency: The First Step in Trust Rebuilding</p>
      </div>

      <div class="core-idea">
        <span class="core-idea-icon">💡</span>
        <span class="core-idea-text"><strong>核心理念：</strong>主动说明哪些是AI数据，哪些是人工判断</span>
      </div>

      <div class="main-content">
        <!-- 左侧 -->
        <div class="left-section">
          <!-- 为什么透明重要 -->
          <div class="why-section">
            <div class="section-title">
              <span class="section-title-icon">❓</span>
              <span>为什么透明重要</span>
            </div>
            <div class="why-list">
              <div class="why-item">
                <div class="why-bullet"></div>
                <span>员工不信任"黑箱决策"</span>
              </div>
              <div class="why-item">
                <div class="why-bullet"></div>
                <span>透明是信任的第一块砖</span>
              </div>
              <div class="why-item">
                <div class="why-bullet"></div>
                <span>主动披露比被动回答更有效</span>
              </div>
            </div>
          </div>

          <!-- 透明披露的四个主动 -->
          <div class="four-proactives">
            <div class="section-title">
              <span class="section-title-icon">✅</span>
              <span>透明披露的四个主动</span>
            </div>
            <div class="proactive-grid">
              ${fourProactives.map(item => `
                <div class="proactive-item">
                  <div class="proactive-num">${item.num}</div>
                  <div class="proactive-content">
                    <div class="proactive-title">${item.title}</div>
                    <div class="proactive-desc">${item.desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 右侧：对比表格 -->
        <div class="right-section">
          <div class="comparison-card">
            <div class="comparison-header">
              <div class="comparison-col negative">反例（等员工问）</div>
              <div class="comparison-col positive">正例（主动说）</div>
            </div>
            <div class="comparison-rows">
              ${comparisonData.map(item => `
                <div class="comparison-row">
                  <div class="comparison-cell negative">
                    <div class="cell-label">❌ 反例</div>
                    <div class="cell-text quote">"${item.negative}"</div>
                  </div>
                  <div class="comparison-cell positive">
                    <div class="cell-label">✓ 正例</div>
                    <div class="cell-text quote">"${item.positive}"</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        信任建立在透明之上 — 主动拆解，主动担当
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
