/**
 * Slide 72: 薪酬透明法规下的沟通边界
 * Content Page - Pay Transparency Regulations Communication Boundaries
 */

const slideConfig = {
  type: 'content',
  index: 72,
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
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .slide-72 {
          width: 100%;
          height: 100%;
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Header */
        .slide-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .header-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
          border-radius: 8px;
          font-size: 16px;
          flex-shrink: 0;
        }

        .header-text {
          flex: 1;
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
          opacity: 0.6;
          letter-spacing: 0.5px;
        }

        /* Table Section */
        .table-section {
          margin-bottom: 12px;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 8px;
        }

        .section-label::before {
          content: '';
          width: 3px;
          height: 14px;
          background: ${theme.accent};
          border-radius: 2px;
        }

        /* Table Styles */
        .regulation-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 8px ${theme.secondary}08;
        }

        .regulation-table thead {
          background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%);
        }

        .regulation-table th {
          padding: 8px 10px;
          text-align: left;
          font-size: 10px;
          font-weight: 600;
          color: white;
          letter-spacing: 0.3px;
        }

        .regulation-table th:nth-child(1) { width: 12%; }
        .regulation-table th:nth-child(2) { width: 28%; }
        .regulation-table th:nth-child(3) { width: 60%; }

        .regulation-table tbody tr {
          border-bottom: 1px solid ${theme.light}50;
          transition: background 0.15s ease;
        }

        .regulation-table tbody tr:last-child {
          border-bottom: none;
        }

        .regulation-table tbody tr:hover {
          background: ${theme.bg};
        }

        .regulation-table td {
          padding: 8px 10px;
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.4;
          vertical-align: top;
        }

        .region-cell {
          font-weight: 600;
          color: ${theme.primary};
        }

        .regulation-cell {
          color: ${theme.accent};
          font-weight: 500;
        }

        /* Can/Cannot Section */
        .can-cannot-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 12px;
          flex: 1;
          min-height: 0;
        }

        .boundary-card {
          background: white;
          border-radius: 10px;
          padding: 12px;
          box-shadow: 0 2px 6px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
        }

        .boundary-card.can-card {
          border-top: 3px solid ${theme.accent};
        }

        .boundary-card.cannot-card {
          border-top: 3px solid ${theme.primary};
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .card-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
        }

        .can-card .card-icon {
          background: ${theme.accent}15;
          color: ${theme.accent};
        }

        .cannot-card .card-icon {
          background: ${theme.primary}15;
          color: ${theme.primary};
        }

        .card-title {
          font-size: 12px;
          font-weight: 600;
        }

        .can-card .card-title {
          color: ${theme.accent};
        }

        .cannot-card .card-title {
          color: ${theme.primary};
        }

        .card-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .list-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .list-bullet {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .can-card .list-bullet {
          background: ${theme.accent};
        }

        .cannot-card .list-bullet {
          background: ${theme.primary};
        }

        /* Best Practices Section */
        .best-practices {
          background: linear-gradient(135deg, ${theme.primary}06 0%, ${theme.accent}04 100%);
          border-radius: 10px;
          padding: 12px 14px;
          border-left: 3px solid ${theme.accent};
        }

        .practices-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .practices-icon {
          font-size: 14px;
        }

        .practices-title {
          font-size: 11px;
          font-weight: 600;
          color: ${theme.primary};
        }

        .practices-list {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .practice-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 9.5px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .practice-number {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          background: ${theme.accent};
          color: white;
          font-size: 8px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Decorative Elements */
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
        }

        .deco-1 {
          width: 80px;
          height: 80px;
          background: ${theme.primary};
          top: -20px;
          right: 40px;
        }

        .deco-2 {
          width: 40px;
          height: 40px;
          background: ${theme.accent};
          bottom: 30px;
          right: 80px;
        }

        .deco-dots {
          position: absolute;
          bottom: 12px;
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
      </style>

      <div class="slide-72">
        <!-- Decorative -->
        <div class="deco-circle deco-1"></div>
        <div class="deco-circle deco-2"></div>

        <!-- Header -->
        <div class="slide-header">
          <div class="header-icon">📋</div>
          <div class="header-text">
            <h1 class="slide-title">${slideConfig.title}</h1>
            <p class="slide-subtitle">Pay Transparency Regulations Communication Boundaries</p>
          </div>
        </div>

        <!-- Table Section -->
        <div class="table-section">
          <div class="section-label">全球薪酬透明法规概览</div>
          <table class="regulation-table">
            <thead>
              <tr>
                <th>地区</th>
                <th>法规</th>
                <th>核心要求</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="region-cell">欧盟</td>
                <td class="regulation-cell">Pay Transparency Directive (2026年生效)</td>
                <td>雇主必须向求职者披露薪酬范围；员工有权了解同岗位薪酬水平</td>
              </tr>
              <tr>
                <td class="region-cell">英国</td>
                <td class="regulation-cell">Gender Pay Gap Reporting</td>
                <td>250人以上的雇主必须披露性别薪酬差距数据</td>
              </tr>
              <tr>
                <td class="region-cell">美国</td>
                <td class="regulation-cell">多州薪资披露法（加州、科罗拉多州等）</td>
                <td>招聘时必须披露薪酬范围</td>
              </tr>
              <tr>
                <td class="region-cell">中国</td>
                <td class="regulation-cell">目前暂无强制性法规</td>
                <td>趋势是走向更透明</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Can/Cannot Section -->
        <div class="can-cannot-section">
          <!-- Can Say Card -->
          <div class="boundary-card can-card">
            <div class="card-header">
              <div class="card-icon">✓</div>
              <span class="card-title">可以说的</span>
            </div>
            <div class="card-list">
              <div class="list-item">
                <span class="list-bullet"></span>
                <span>公司的薪酬结构和调薪逻辑</span>
              </div>
              <div class="list-item">
                <span class="list-bullet"></span>
                <span>员工个人的薪酬数据和依据</span>
              </div>
              <div class="list-item">
                <span class="list-bullet"></span>
                <span>调薪决策的过程（哪些因素被考虑了）</span>
              </div>
            </div>
          </div>

          <!-- Cannot Say Card -->
          <div class="boundary-card cannot-card">
            <div class="card-header">
              <div class="card-icon">✗</div>
              <span class="card-title">不可以说的</span>
            </div>
            <div class="card-list">
              <div class="list-item">
                <span class="list-bullet"></span>
                <span>其他员工的具体薪酬数字</span>
              </div>
              <div class="list-item">
                <span class="list-bullet"></span>
                <span>未经授权的薪酬比较数据</span>
              </div>
              <div class="list-item">
                <span class="list-bullet"></span>
                <span>违反公司保密政策的信息</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Best Practices Section -->
        <div class="best-practices">
          <div class="practices-header">
            <span class="practices-icon">💡</span>
            <span class="practices-title">最佳实践</span>
          </div>
          <div class="practices-list">
            <div class="practice-item">
              <span class="practice-number">1</span>
              <span>主动披露决策依据，比被动回应更安全</span>
            </div>
            <div class="practice-item">
              <span class="practice-number">2</span>
              <span>记录薪酬对话的内容，以备合规审查</span>
            </div>
            <div class="practice-item">
              <span class="practice-number">3</span>
              <span>遇到不确定的问题，"我需要确认后回复"比"随便说"更安全</span>
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
