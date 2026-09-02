/**
 * Slide 17: AI数据轨：四类数据支撑
 * Content Page - Four types of AI data track components
 */

const slideConfig = {
  type: 'content',
  index: 17,
  title: 'AI数据轨：四类数据支撑'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

// 四类数据卡片
const dataCards = [
  {
    number: '01',
    title: '市场数据',
    source: '第三方薪酬调研平台',
    content: '同类岗位市场薪酬分位（P25/P50/P75）',
    role: '提供外部竞争力参照',
    color: theme.primary
  },
  {
    number: '02',
    title: '薪资带宽',
    source: '公司薪酬架构政策',
    content: '每个职级对应的薪资范围（Min/Mid/Max）',
    role: '确保个体薪资在合理区间内',
    color: theme.accent
  },
  {
    number: '03',
    title: '绩效关联',
    source: '绩效管理系统',
    content: '个人绩效评分（A/B/C）、团队绩效排名',
    role: '将薪酬与绩效表现挂钩',
    color: theme.primary
  },
  {
    number: '04',
    title: '潜力评估',
    source: '人才评估模型/晋升记录',
    content: '潜力等级（高/中/低）、发展评估',
    role: '为未来薪酬增长预留空间',
    color: theme.accent
  }
];

// AI数据轨特征
const trackFeatures = ['客观', '可量化', '可追溯', '有据可查'];

function render() {
  return `
    <div class="slide" data-slide="${slideConfig.index}" style="background: ${theme.bg}; font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;">
      <style>
        .slide-17 {
          width: 100%;
          height: 100%;
          padding: 40px 50px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .slide-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .slide-title {
          font-size: 32px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 8px 0;
        }

        .slide-subtitle {
          font-size: 14px;
          color: ${theme.secondary};
          opacity: 0.7;
        }

        /* 四卡片网格布局 - 2x2 */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          flex: 1;
          margin-bottom: 30px;
        }

        /* 单个数据卡片 */
        .data-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 3px 12px ${theme.secondary}10;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .data-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px ${theme.secondary}18;
        }

        /* 卡片顶部色条 */
        .data-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: ${props => props.color};
        }

        .data-card:nth-child(1)::before { background: ${dataCards[0].color}; }
        .data-card:nth-child(2)::before { background: ${dataCards[1].color}; }
        .data-card:nth-child(3)::before { background: ${dataCards[2].color}; }
        .data-card:nth-child(4)::before { background: ${dataCards[3].color}; }

        /* 卡片头部：编号 + 标题 */
        .card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }

        .card-number {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          color: white;
        }

        .data-card:nth-child(1) .card-number { background: ${dataCards[0].color}; }
        .data-card:nth-child(2) .card-number { background: ${dataCards[1].color}; }
        .data-card:nth-child(3) .card-number { background: ${dataCards[2].color}; }
        .data-card:nth-child(4) .card-number { background: ${dataCards[3].color}; }

        .card-title {
          font-size: 20px;
          font-weight: 600;
          color: ${theme.secondary};
        }

        /* 卡片内容区 */
        .card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .card-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .card-label {
          font-size: 12px;
          font-weight: 600;
          color: ${theme.secondary};
          opacity: 0.6;
          min-width: 50px;
        }

        .card-value {
          font-size: 13px;
          color: ${theme.secondary};
          line-height: 1.5;
          flex: 1;
        }

        /* 角色标签 */
        .card-role {
          margin-top: auto;
          padding: 10px 14px;
          background: ${theme.bg};
          border-radius: 8px;
          font-size: 13px;
          color: ${theme.primary};
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .card-role::before {
          content: '→';
          color: ${theme.accent};
          font-weight: bold;
        }

        /* 底部特征区域 */
        .features-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 20px;
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}08 100%);
          border-radius: 14px;
          border: 1px solid ${theme.light};
        }

        .features-label {
          font-size: 14px;
          font-weight: 600;
          color: ${theme.secondary};
          margin-right: 8px;
        }

        .feature-tag {
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          background: white;
          color: ${theme.secondary};
          box-shadow: 0 2px 6px ${theme.secondary}10;
          transition: transform 0.2s ease;
        }

        .feature-tag:hover {
          transform: scale(1.05);
        }

        .slide-17 {
          position: relative;
        }
      </style>

      <div class="slide-header">
        <h1 class="slide-title">${slideConfig.title}</h1>
        <p class="slide-subtitle">AI Data Track: Four Types of Data Support</p>
      </div>

      <div class="cards-grid">
        ${dataCards.map((card, index) => `
          <div class="data-card">
            <div class="card-header">
              <div class="card-number">${card.number}</div>
              <div class="card-title">${card.title}</div>
            </div>
            <div class="card-body">
              <div class="card-row">
                <span class="card-label">来源</span>
                <span class="card-value">${card.source}</span>
              </div>
              <div class="card-row">
                <span class="card-label">内容</span>
                <span class="card-value">${card.content}</span>
              </div>
              <div class="card-role">${card.role}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="features-section">
        <span class="features-label">AI数据轨特征</span>
        ${trackFeatures.map(feature => `
          <span class="feature-tag">${feature}</span>
        `).join('')}
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
