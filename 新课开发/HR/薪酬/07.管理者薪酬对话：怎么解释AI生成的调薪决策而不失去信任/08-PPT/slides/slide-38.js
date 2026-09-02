/**
 * Slide 38: 异议处理四步法
 * Content Page - Four-Step Objection Handling Method
 */

const slideConfig = {
  type: 'content',
  index: 38,
  title: '异议处理四步法'
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
        .slide-38 {
          width: 100%;
          height: 100%;
          padding: 24px 36px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .slide-header {
          text-align: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 2px solid ${theme.light};
        }

        .slide-title {
          font-size: 28px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 6px 0;
        }

        .slide-subtitle {
          font-size: 12px;
          color: ${theme.secondary};
          opacity: 0.6;
        }

        /* Process Flow Container */
        .process-flow {
          display: flex;
          gap: 16px;
          flex: 1;
          position: relative;
          align-items: stretch;
        }

        /* Connection Line */
        .connection-line {
          position: absolute;
          top: 52px;
          left: 70px;
          right: 70px;
          height: 4px;
          background: linear-gradient(90deg, ${theme.primary}, ${theme.accent}, ${theme.primary}, ${theme.accent});
          border-radius: 2px;
          z-index: 0;
        }

        /* Step Cards */
        .step-card {
          flex: 1;
          background: white;
          border-radius: 14px;
          padding: 18px 14px;
          box-shadow: 0 4px 14px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px ${theme.secondary}14;
        }

        /* Step Number Circle */
        .step-number {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          color: white;
          margin: 0 auto 14px auto;
          position: relative;
          box-shadow: 0 3px 8px ${theme.primary}30;
        }

        .step-card:nth-child(1) .step-number { background: linear-gradient(135deg, ${theme.primary}, ${theme.accent}); }
        .step-card:nth-child(2) .step-number { background: linear-gradient(135deg, ${theme.accent}, ${theme.primary}); }
        .step-card:nth-child(3) .step-number { background: linear-gradient(135deg, ${theme.primary}, ${theme.accent}); }
        .step-card:nth-child(4) .step-number { background: linear-gradient(135deg, ${theme.accent}, ${theme.primary}); }

        /* Step Title */
        .step-title {
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          color: ${theme.primary};
          margin-bottom: 6px;
        }

        /* Keyword Badge */
        .keyword-badge {
          text-align: center;
          font-size: 11px;
          font-weight: 600;
          color: ${theme.accent};
          background: ${theme.bg};
          padding: 5px 12px;
          border-radius: 14px;
          margin: 0 auto 14px auto;
          width: fit-content;
          border: 1px solid ${theme.light};
        }

        /* Section within step */
        .step-section {
          margin-bottom: 12px;
        }

        .step-section:last-child {
          margin-bottom: 0;
        }

        /* Employee Feeling */
        .feeling-container {
          background: linear-gradient(135deg, ${theme.light}40, ${theme.bg});
          border-radius: 8px;
          padding: 8px 10px;
          border-left: 3px solid ${theme.accent};
        }

        .feeling-label {
          font-size: 10px;
          font-weight: 600;
          color: ${theme.secondary};
          opacity: 0.7;
          margin-bottom: 4px;
        }

        .feeling-text {
          font-size: 12px;
          color: ${theme.primary};
          font-style: italic;
          line-height: 1.4;
        }

        /* Action Section */
        .action-container {
          background: #E8F5E9;
          border-radius: 8px;
          padding: 8px 10px;
          border-left: 3px solid #4CAF50;
        }

        .action-label {
          font-size: 10px;
          font-weight: 600;
          color: #4CAF50;
          margin-bottom: 4px;
        }

        .action-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .action-item {
          font-size: 11px;
          color: ${theme.secondary};
          padding-left: 14px;
          position: relative;
          line-height: 1.4;
        }

        .action-item::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #4CAF50;
          font-size: 10px;
        }

        /* Taboo Section */
        .taboo-container {
          margin-top: auto;
          padding: 10px;
          background: ${theme.bg};
          border-radius: 8px;
          border: 1px dashed ${theme.light};
        }

        .taboo-label {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 5px;
        }

        .taboo-label .icon {
          font-size: 12px;
        }

        .taboo-text {
          font-size: 11px;
          color: ${theme.secondary};
          line-height: 1.4;
          opacity: 0.85;
        }

        /* Decorative Elements */
        .deco-dots {
          position: absolute;
          top: 16px;
          right: 28px;
          display: flex;
          gap: 5px;
        }

        .deco-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          opacity: 0.3;
        }

        .deco-dot:nth-child(1) { background: ${theme.primary}; }
        .deco-dot:nth-child(2) { background: ${theme.accent}; }
        .deco-dot:nth-child(3) { background: ${theme.secondary}; }

        /* Bottom Flow Indicators */
        .flow-indicators {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px solid ${theme.light};
        }

        .flow-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: ${theme.secondary};
        }

        .flow-item .num {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: white;
        }

        .flow-item:nth-child(1) .num { background: ${theme.primary}; }
        .flow-item:nth-child(2) .num { background: ${theme.accent}; }
        .flow-item:nth-child(3) .num { background: ${theme.primary}; }
        .flow-item:nth-child(4) .num { background: ${theme.accent}; }

        .flow-item .arrow {
          color: ${theme.accent};
          font-size: 14px;
        }

        .slide-38 {
          position: relative;
          overflow: hidden;
        }
      </style>

      <div class="slide-38">
        <!-- Decorative dots -->
        <div class="deco-dots">
          <div class="deco-dot"></div>
          <div class="deco-dot"></div>
          <div class="deco-dot"></div>
        </div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Four-Step Objection Handling Method</p>
        </div>

        <!-- Process Flow -->
        <div class="process-flow">
          <div class="connection-line"></div>

          <!-- Step 1: 倾听 -->
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-title">倾听</div>
            <div class="keyword-badge">不打断、不防御、听完整</div>

            <div class="step-section">
              <div class="feeling-container">
                <div class="feeling-label">员工感受</div>
                <div class="feeling-text">"他在认真听我说话"</div>
              </div>
            </div>

            <div class="step-section">
              <div class="action-container">
                <div class="action-label">操作</div>
                <ul class="action-list">
                  <li class="action-item">点头、保持眼神接触</li>
                  <li class="action-item">记录要点</li>
                </ul>
              </div>
            </div>

            <div class="taboo-container">
              <div class="taboo-label">
                <span class="icon">✗</span>
                <span>禁忌</span>
              </div>
              <div class="taboo-text">员工说一半就插话解释</div>
            </div>
          </div>

          <!-- Step 2: 共情 -->
          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-title">共情</div>
            <div class="keyword-badge">认可情绪、承认感受</div>

            <div class="step-section">
              <div class="feeling-container">
                <div class="feeling-label">员工感受</div>
                <div class="feeling-text">"他理解我为什么生气"</div>
              </div>
            </div>

            <div class="step-section">
              <div class="action-container">
                <div class="action-label">操作</div>
                <ul class="action-list">
                  <li class="action-item">"我理解你为什么沮丧"</li>
                  <li class="action-item">"换成我也会不高兴"</li>
                </ul>
              </div>
            </div>

            <div class="taboo-container">
              <div class="taboo-label">
                <span class="icon">✗</span>
                <span>禁忌</span>
              </div>
              <div class="taboo-text">说"你的心情我理解"然后立刻说"但是……"</div>
            </div>
          </div>

          <!-- Step 3: 解释 -->
          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-title">解释</div>
            <div class="keyword-badge">用事实回应、说明能做和不能做的</div>

            <div class="step-section">
              <div class="feeling-container">
                <div class="feeling-label">员工感受</div>
                <div class="feeling-text">"他有给我理由，不是简单拒绝"</div>
              </div>
            </div>

            <div class="step-section">
              <div class="action-container">
                <div class="action-label">操作</div>
                <ul class="action-list">
                  <li class="action-item">说明决策依据</li>
                  <li class="action-item">说明管理者的实际权限</li>
                </ul>
              </div>
            </div>

            <div class="taboo-container">
              <div class="taboo-label">
                <span class="icon">✗</span>
                <span>禁忌</span>
              </div>
              <div class="taboo-text">把AI当作挡箭牌</div>
            </div>
          </div>

          <!-- Step 4: 承诺 -->
          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-title">承诺</div>
            <div class="keyword-badge">具体行动、时间和结果</div>

            <div class="step-section">
              <div class="feeling-container">
                <div class="feeling-label">员工感受</div>
                <div class="feeling-text">"他给了我一个可以期待的方向"</div>
              </div>
            </div>

            <div class="step-section">
              <div class="action-container">
                <div class="action-label">操作</div>
                <ul class="action-list">
                  <li class="action-item">说明下一步会做什么</li>
                  <li class="action-item">什么时间内、结果会怎样</li>
                </ul>
              </div>
            </div>

            <div class="taboo-container">
              <div class="taboo-label">
                <span class="icon">✗</span>
                <span>禁忌</span>
              </div>
              <div class="taboo-text">空头承诺"我会帮你反映"</div>
            </div>
          </div>
        </div>

        <!-- Bottom Flow Indicators -->
        <div class="flow-indicators">
          <div class="flow-item">
            <span class="num">1</span>
            <span>倾听</span>
            <span class="arrow">→</span>
          </div>
          <div class="flow-item">
            <span class="num">2</span>
            <span>共情</span>
            <span class="arrow">→</span>
          </div>
          <div class="flow-item">
            <span class="num">3</span>
            <span>解释</span>
            <span class="arrow">→</span>
          </div>
          <div class="flow-item">
            <span class="num">4</span>
            <span>承诺</span>
            <span class="arrow">✓</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
