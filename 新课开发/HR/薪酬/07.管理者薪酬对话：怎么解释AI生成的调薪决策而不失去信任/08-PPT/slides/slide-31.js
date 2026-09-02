/**
 * Slide 31: 场景一：年度调薪解读（常规对话）
 * Content Page - Scenario 1: Annual salary review dialogue
 */

const slideConfig = {
  type: 'content',
  index: 31,
  title: '场景一：年度调薪解读'
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
        .slide-31 {
          width: 100%;
          height: 100%;
          padding: 36px 44px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .slide-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid ${theme.light};
        }

        .scenario-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 12px;
          color: white;
          font-size: 22px;
          font-weight: 700;
        }

        .slide-title {
          font-size: 28px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0;
        }

        /* Main Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          grid-template-rows: auto auto auto;
          gap: 20px;
          flex: 1;
        }

        /* Scenario Background Card */
        .scenario-bg {
          grid-column: 1;
          grid-row: 1;
          background: white;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 3px 12px ${theme.secondary}10;
          border-left: 4px solid ${theme.accent};
        }

        .section-title {
          font-size: 15px;
          font-weight: 600;
          color: ${theme.secondary};
          margin: 0 0 14px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-title .icon {
          font-size: 16px;
        }

        .bg-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .bg-list li {
          font-size: 13px;
          color: ${theme.secondary};
          padding: 6px 0;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.4;
        }

        .bg-list li::before {
          content: '•';
          color: ${theme.accent};
          font-weight: bold;
          flex-shrink: 0;
        }

        .difficulty {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          padding: 6px 12px;
          background: ${theme.light}30;
          border-radius: 6px;
          font-size: 12px;
          color: ${theme.secondary};
        }

        .difficulty .stars {
          color: ${theme.accent};
          letter-spacing: 2px;
        }

        /* Dialogue Points Card */
        .dialogue-points {
          grid-column: 2;
          grid-row: 1;
          background: white;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 3px 12px ${theme.secondary}10;
          border-left: 4px solid ${theme.primary};
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px dashed ${theme.light};
        }

        .point-item:last-child {
          border-bottom: none;
        }

        .point-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: ${theme.primary}15;
          border-radius: 50%;
          font-size: 12px;
          font-weight: 600;
          color: ${theme.primary};
          flex-shrink: 0;
        }

        .point-content {
          flex: 1;
        }

        .point-label {
          font-size: 13px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-bottom: 2px;
        }

        .point-desc {
          font-size: 11px;
          color: ${theme.secondary};
          opacity: 0.7;
        }

        /* Template Card - Full Width */
        .template-card {
          grid-column: 1 / -1;
          grid-row: 2;
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.bg} 100%);
          border: 2px solid ${theme.primary}25;
          border-radius: 16px;
          padding: 22px 26px;
          position: relative;
          overflow: hidden;
        }

        .template-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, ${theme.primary} 0%, ${theme.accent} 100%);
        }

        .template-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .template-icon {
          font-size: 18px;
        }

        .template-title {
          font-size: 15px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0;
        }

        .template-tag {
          margin-left: auto;
          padding: 4px 10px;
          background: ${theme.accent}20;
          color: ${theme.accent};
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }

        .template-content {
          background: white;
          border-radius: 10px;
          padding: 16px 20px;
          font-size: 13px;
          color: ${theme.secondary};
          line-height: 1.7;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .template-content .highlight {
          color: ${theme.primary};
          font-weight: 600;
        }

        .template-content .em {
          font-style: italic;
          color: ${theme.accent};
        }

        /* Reactions Card - Full Width */
        .reactions-card {
          grid-column: 1 / -1;
          grid-row: 3;
          background: white;
          border-radius: 14px;
          padding: 18px 22px;
          box-shadow: 0 3px 12px ${theme.secondary}10;
        }

        .reactions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 12px;
        }

        .reaction-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .reaction-question {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: ${theme.bg};
          border-radius: 8px;
          font-size: 12px;
          color: ${theme.secondary};
          border: 1px solid ${theme.light};
        }

        .reaction-question .q-icon {
          font-size: 14px;
        }

        .reaction-arrow {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: ${theme.accent};
          font-weight: 500;
        }

        .reaction-arrow::before {
          content: '↓';
          font-weight: bold;
        }

        .reaction-response {
          padding: 8px 12px;
          background: ${theme.primary}10;
          border-radius: 6px;
          font-size: 11px;
          color: ${theme.primary};
          font-weight: 500;
          margin-left: 20px;
        }

        /* Soft decorations */
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.4;
        }

        .deco-1 {
          width: 80px;
          height: 80px;
          background: ${theme.light}40;
          top: -20px;
          right: 60px;
        }

        .deco-2 {
          width: 40px;
          height: 40px;
          background: ${theme.accent}30;
          bottom: 20px;
          right: 100px;
        }

        .slide-31 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-31">
        <!-- Decorative elements -->
        <div class="deco-circle deco-1"></div>
        <div class="deco-circle deco-2"></div>

        <!-- Header -->
        <div class="slide-header">
          <div class="scenario-badge">📋</div>
          <h1 class="slide-title">${slideConfig.title}（常规对话）</h1>
        </div>

        <!-- Main Content Grid -->
        <div class="content-grid">
          <!-- Scenario Background -->
          <div class="scenario-bg">
            <h3 class="section-title">
              <span class="icon">🎯</span>
              场景背景
            </h3>
            <ul class="bg-list">
              <li>情境：年度调薪季，管理者需要向员工解读调薪结果</li>
              <li>特点：最常见、有标准流程、员工有预期</li>
            </ul>
            <div class="difficulty">
              <span>难度：</span>
              <span class="stars">★☆☆☆☆</span>
            </div>
          </div>

          <!-- Dialogue Points -->
          <div class="dialogue-points">
            <h3 class="section-title">
              <span class="icon">💬</span>
              对话要点
            </h3>
            <div class="point-item">
              <div class="point-number">1</div>
              <div class="point-content">
                <div class="point-label">开场：先说结果，再讲过程</div>
                <div class="point-desc">结论先行，减少员工焦虑</div>
              </div>
            </div>
            <div class="point-item">
              <div class="point-number">2</div>
              <div class="point-content">
                <div class="point-label">双轨说明：市场数据/绩效 + 个人贡献</div>
                <div class="point-desc">AI数据轨 + 人工判断轨，透明呈现</div>
              </div>
            </div>
            <div class="point-item">
              <div class="point-number">3</div>
              <div class="point-content">
                <div class="point-label">开放结尾：邀请员工提问或表达想法</div>
                <div class="point-desc">创造安全对话空间</div>
              </div>
            </div>
          </div>

          <!-- Template Card -->
          <div class="template-card">
            <div class="template-header">
              <span class="template-icon">📝</span>
              <h4 class="template-title">话术模板</h4>
              <span class="template-tag">直接使用</span>
            </div>
            <div class="template-content">
              "小李，先说结果——<span class="highlight">你的调薪是12%</span>。这个数字怎么来的？我跟你拆开说：
              <br>第一，<span class="em">市场数据</span>……
              <br>第二，<span class="em">你的绩效</span>……
              <br>第三，<span class="em">我自己的判断</span>……
              <br>你有没有什么想问的？"
            </div>
          </div>

          <!-- Reactions Card -->
          <div class="reactions-card">
            <h3 class="section-title">
              <span class="icon">🤔</span>
              员工可能的反应
            </h3>
            <div class="reactions-grid">
              <div class="reaction-item">
                <div class="reaction-question">
                  <span class="q-icon">❓</span>
                  <span>"这个数字是怎么算出来的？"</span>
                </div>
                <div class="reaction-arrow">处理方式</div>
                <div class="reaction-response">→ 双轨说明</div>
              </div>
              <div class="reaction-item">
                <div class="reaction-question">
                  <span class="q-icon">😤</span>
                  <span>"我觉得应该更高……"</span>
                </div>
                <div class="reaction-arrow">处理方式</div>
                <div class="reaction-response">→ 异议处理（模块五）</div>
              </div>
              <div class="reaction-item">
                <div class="reaction-question">
                  <span class="q-icon">😊</span>
                  <span>"谢谢老板"</span>
                </div>
                <div class="reaction-arrow">处理方式</div>
                <div class="reaction-response">→ 关系确认</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
