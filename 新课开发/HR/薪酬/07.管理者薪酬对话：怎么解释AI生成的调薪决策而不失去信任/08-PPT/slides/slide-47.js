/**
 * Slide 47: 薪酬透明法规下的沟通边界
 * Content Page - Pay transparency regulations and communication boundaries
 */

const slideConfig = {
  type: 'content',
  index: 47,
  title: '薪酬透明法规下的沟通边界'
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
        .slide-47 {
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

        /* Table Section */
        .table-section {
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .table-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .table-icon {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.accent});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .table-title {
          font-size: 13px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .regulations-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 10.5px;
        }

        .regulations-table th {
          background: ${theme.primary}10;
          color: ${theme.primary};
          font-weight: 600;
          padding: 8px 10px;
          text-align: left;
          border-bottom: 2px solid ${theme.primary}30;
        }

        .regulations-table th:first-child {
          border-radius: 6px 0 0 0;
          width: 60px;
          text-align: center;
        }

        .regulations-table th:last-child {
          border-radius: 0 6px 0 0;
        }

        .regulations-table td {
          padding: 8px 10px;
          border-bottom: 1px solid ${theme.light}50;
          vertical-align: top;
          line-height: 1.45;
        }

        .regulations-table tr:last-child td {
          border-bottom: none;
        }

        .regulations-table tr:last-child td:first-child {
          border-radius: 0 0 0 6px;
        }

        .regulations-table tr:last-child td:last-child {
          border-radius: 0 0 6px 0;
        }

        .region-cell {
          text-align: center;
          font-weight: 600;
          color: ${theme.primary};
        }

        .region-flag {
          font-size: 16px;
        }

        .region-name {
          font-size: 9px;
          color: ${theme.secondary};
          display: block;
          margin-top: 2px;
        }

        .law-name {
          font-weight: 600;
          color: ${theme.primary};
          font-size: 10px;
        }

        .requirement {
          color: ${theme.secondary};
          font-size: 10px;
          line-height: 1.4;
        }

        .trend-tag {
          display: inline-block;
          font-size: 9px;
          padding: 2px 6px;
          border-radius: 3px;
          background: ${theme.light}40;
          color: ${theme.secondary};
        }

        /* Main Content - Can/Cannot Say Cards */
        .main-content {
          display: flex;
          gap: 12px;
          flex: 1;
          min-height: 0;
        }

        /* Card Styles */
        .say-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          position: relative;
          overflow: hidden;
        }

        .say-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
        }

        .can-say-card::before {
          background: linear-gradient(90deg, #2E7D32, #4CAF50);
        }

        .cannot-say-card::before {
          background: linear-gradient(90deg, ${theme.primary}, ${theme.accent});
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .card-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .can-say-card .card-icon {
          background: #2E7D3215;
        }

        .cannot-say-card .card-icon {
          background: ${theme.primary}15;
        }

        .card-title {
          font-size: 13px;
          font-weight: 700;
        }

        .can-say-card .card-title {
          color: #2E7D32;
        }

        .cannot-say-card .card-title {
          color: ${theme.primary};
        }

        .card-badge {
          font-size: 8px;
          padding: 2px 6px;
          border-radius: 3px;
          font-weight: 600;
          margin-left: auto;
        }

        .can-say-card .card-badge {
          background: #2E7D3215;
          color: #2E7D32;
        }

        .cannot-say-card .card-badge {
          background: ${theme.primary}15;
          color: ${theme.primary};
        }

        /* Item List */
        .item-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .list-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 7px 9px;
          border-radius: 7px;
        }

        .can-say-card .list-item {
          background: #F0FDF4;
        }

        .cannot-say-card .list-item {
          background: #FEF2F2;
        }

        .item-check {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .can-say-card .item-check {
          background: #2E7D32;
          color: white;
        }

        .cannot-say-card .item-check {
          background: ${theme.primary};
          color: white;
        }

        .item-text {
          flex: 1;
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .item-text strong {
          font-weight: 600;
          color: ${theme.primary};
        }

        /* Best Practice Section */
        .best-practice {
          background: white;
          border-radius: 12px;
          padding: 10px 14px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .best-practice-icon {
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

        .best-practice-content {
          flex: 1;
        }

        .best-practice-label {
          font-size: 10px;
          font-weight: 700;
          color: ${theme.accent};
          margin-bottom: 4px;
        }

        .best-practice-list {
          display: flex;
          gap: 12px;
        }

        .practice-item {
          flex: 1;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          font-size: 10px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .practice-bullet {
          width: 14px;
          height: 14px;
          border-radius: 3px;
          background: ${theme.accent}20;
          color: ${theme.accent};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          flex-shrink: 0;
          margin-top: 1px;
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

        .slide-47 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-47">
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
            <p class="slide-subtitle">Pay Transparency Regulations & Communication Boundaries</p>
          </div>
        </div>

        <!-- Global Regulations Table -->
        <div class="table-section">
          <div class="table-header">
            <div class="table-icon">🌐</div>
            <span class="table-title">全球薪酬透明法规概览</span>
          </div>
          <table class="regulations-table">
            <thead>
              <tr>
                <th>地区</th>
                <th>法规</th>
                <th>核心要求</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="region-cell">
                  <span class="region-flag">🇪🇺</span>
                  <span class="region-name">欧盟</span>
                </td>
                <td>
                  <span class="law-name">Pay Transparency Directive</span>
                  <span class="trend-tag">2026年生效</span>
                </td>
                <td class="requirement">雇主必须向求职者披露薪酬范围；员工有权了解同岗位薪酬水平</td>
              </tr>
              <tr>
                <td class="region-cell">
                  <span class="region-flag">🇬🇧</span>
                  <span class="region-name">英国</span>
                </td>
                <td>
                  <span class="law-name">Gender Pay Gap Reporting</span>
                </td>
                <td class="requirement">250人以上的雇主必须披露性别薪酬差距数据</td>
              </tr>
              <tr>
                <td class="region-cell">
                  <span class="region-flag">🇺🇸</span>
                  <span class="region-name">美国</span>
                </td>
                <td>
                  <span class="law-name">多州薪资披露法</span>
                  <span class="trend-tag">加州、科罗拉多州等</span>
                </td>
                <td class="requirement">招聘时必须披露薪酬范围</td>
              </tr>
              <tr>
                <td class="region-cell">
                  <span class="region-flag">🇨🇳</span>
                  <span class="region-name">中国</span>
                </td>
                <td>
                  <span class="law-name">目前暂无强制性法规</span>
                </td>
                <td class="requirement">趋势是走向更透明</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Main Content - Can/Cannot Say Cards -->
        <div class="main-content">
          <!-- Can Say Card -->
          <div class="say-card can-say-card">
            <div class="card-header">
              <div class="card-icon">✅</div>
              <span class="card-title">可以说的</span>
              <span class="card-badge">法规鼓励</span>
            </div>
            <div class="item-list">
              <div class="list-item">
                <div class="item-check">✓</div>
                <div class="item-text">公司的薪酬结构和调薪逻辑</div>
              </div>
              <div class="list-item">
                <div class="item-check">✓</div>
                <div class="item-text">员工个人的薪酬数据和依据</div>
              </div>
              <div class="list-item">
                <div class="item-check">✓</div>
                <div class="item-text">调薪决策的过程（<strong>哪些因素被考虑了</strong>）</div>
              </div>
            </div>
          </div>

          <!-- Cannot Say Card -->
          <div class="say-card cannot-say-card">
            <div class="card-header">
              <div class="card-icon">🚫</div>
              <span class="card-title">不可以说的</span>
              <span class="card-badge">隐私保护</span>
            </div>
            <div class="item-list">
              <div class="list-item">
                <div class="item-check">✗</div>
                <div class="item-text">其他员工的具体薪酬数字</div>
              </div>
              <div class="list-item">
                <div class="item-check">✗</div>
                <div class="item-text">未经授权的薪酬比较数据</div>
              </div>
              <div class="list-item">
                <div class="item-check">✗</div>
                <div class="item-text">违反公司保密政策的信息</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Best Practice Section -->
        <div class="best-practice">
          <div class="best-practice-icon">💡</div>
          <div class="best-practice-content">
            <div class="best-practice-label">最佳实践</div>
            <div class="best-practice-list">
              <div class="practice-item">
                <span class="practice-bullet">1</span>
                <span>主动披露决策依据，比被动回应更安全</span>
              </div>
              <div class="practice-item">
                <span class="practice-bullet">2</span>
                <span>记录薪酬对话的内容，以备合规审查</span>
              </div>
              <div class="practice-item">
                <span class="practice-bullet">3</span>
                <span>遇到不确定的问题，"<strong>我需要确认后回复</strong>"比"随便说"更安全</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
