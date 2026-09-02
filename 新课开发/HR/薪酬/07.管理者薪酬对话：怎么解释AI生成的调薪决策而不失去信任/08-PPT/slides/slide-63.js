/**
 * Slide 63: 异议处理四步法
 * Content Page - Four-Step Objection Handling Method
 */

const slideConfig = {
  type: 'content',
  index: 63,
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
        .slide-63 {
          width: 100%;
          height: 100%;
          padding: 14px 24px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Header */
        .slide-header {
          text-align: center;
          margin-bottom: 10px;
          padding-bottom: 8px;
          border-bottom: 1.5px solid ${theme.light};
        }

        .slide-title {
          font-size: 20px;
          font-weight: 600;
          color: ${theme.primary};
          margin: 0 0 2px 0;
          line-height: 1.3;
        }

        .slide-subtitle {
          font-size: 9.5px;
          color: ${theme.secondary};
          opacity: 0.5;
        }

        /* Process Container */
        .process-container {
          display: flex;
          gap: 10px;
          flex: 1;
          min-height: 0;
        }

        /* Step Card */
        .step-card {
          flex: 1;
          background: white;
          border-radius: 12px;
          padding: 12px;
          box-shadow: 0 2px 8px ${theme.secondary}08;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .step-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          border-radius: 12px 12px 0 0;
        }

        .step-card:nth-child(1)::before { background: ${theme.primary}; }
        .step-card:nth-child(2)::before { background: ${theme.accent}; }
        .step-card:nth-child(3)::before { background: ${theme.secondary}; }
        .step-card:nth-child(4)::before { background: ${theme.primary}80; }

        /* Step Header */
        .step-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          padding-bottom: 8px;
          border-bottom: 1px solid ${theme.light}60;
        }

        .step-num {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .step-card:nth-child(1) .step-num { background: ${theme.primary}; }
        .step-card:nth-child(2) .step-num { background: ${theme.accent}; }
        .step-card:nth-child(3) .step-num { background: ${theme.secondary}; }
        .step-card:nth-child(4) .step-num { background: ${theme.primary}80; }

        .step-title {
          font-size: 13px;
          font-weight: 700;
          color: ${theme.primary};
        }

        .step-card:nth-child(2) .step-title { color: ${theme.accent}; }
        .step-card:nth-child(3) .step-title { color: ${theme.secondary}; }
        .step-card:nth-child(4) .step-title { color: ${theme.primary}80; }

        /* Section Block */
        .section-block {
          margin-bottom: 8px;
        }

        .section-block:last-child {
          margin-bottom: 0;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 8.5px;
          font-weight: 600;
          margin-bottom: 3px;
        }

        .section-label .icon {
          font-size: 9px;
        }

        .section-label.keyword { color: ${theme.accent}; }
        .section-label.feeling { color: ${theme.primary}; }
        .section-label.action { color: ${theme.secondary}; }
        .section-label.avoid { color: ${theme.accent}99; }

        .section-label::before {
          content: '';
          width: 2px;
          height: 10px;
          border-radius: 1px;
          flex-shrink: 0;
        }

        .section-label.keyword::before { background: ${theme.accent}; }
        .section-label.feeling::before { background: ${theme.primary}; }
        .section-label.action::before { background: ${theme.secondary}; }
        .section-label.avoid::before { background: ${theme.accent}60; }

        .section-content {
          font-size: 8.5px;
          line-height: 1.4;
          color: ${theme.secondary};
        }

        .section-content.highlight {
          color: ${theme.primary};
          font-weight: 600;
        }

        .section-content.avoid-text {
          color: ${theme.accent};
          opacity: 0.85;
        }

        /* Arrow Connector */
        .arrow-connector {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .step-card:not(:last-child)::after {
          content: '→';
          position: absolute;
          right: -8px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          color: ${theme.light};
          z-index: 10;
        }

        /* Bottom Quote */
        .bottom-quote {
          margin-top: 10px;
          text-align: center;
          padding: 8px 16px;
          background: ${theme.primary}08;
          border-radius: 8px;
          font-size: 9px;
          color: ${theme.secondary};
          line-height: 1.4;
        }

        .bottom-quote strong {
          color: ${theme.primary};
        }

        /* Decorative */
        .deco-circle {
          position: absolute;
          top: 8px;
          right: 20px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid ${theme.light};
          opacity: 0.3;
        }

        .deco-dots {
          position: absolute;
          bottom: 8px;
          right: 28px;
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
      </style>

      <div class="slide-63">
        <!-- Decorative -->
        <div class="deco-circle"></div>

        <!-- Header -->
        <div class="slide-header">
          <h1 class="slide-title">${slideConfig.title}</h1>
          <p class="slide-subtitle">Objection Handling Framework</p>
        </div>

        <!-- Process Container -->
        <div class="process-container">
          <!-- Step 1: 倾听 -->
          <div class="step-card">
            <div class="step-header">
              <div class="step-num">1</div>
              <div class="step-title">倾听</div>
            </div>

            <div class="section-block">
              <div class="section-label keyword">
                <span class="icon">◆</span>
                <span>关键词</span>
              </div>
              <div class="section-content highlight">不打断、不防御、听完整</div>
            </div>

            <div class="section-block">
              <div class="section-label feeling">
                <span class="icon">♥</span>
                <span>员工感受</span>
              </div>
              <div class="section-content">"他在认真听我说话"</div>
            </div>

            <div class="section-block">
              <div class="section-label action">
                <span class="icon">✓</span>
                <span>操作</span>
              </div>
              <div class="section-content">点头、保持眼神接触、记录要点</div>
            </div>

            <div class="section-block">
              <div class="section-label avoid">
                <span class="icon">✕</span>
                <span>禁忌</span>
              </div>
              <div class="section-content avoid-text">员工说一半就插话解释</div>
            </div>
          </div>

          <!-- Step 2: 共情 -->
          <div class="step-card">
            <div class="step-header">
              <div class="step-num">2</div>
              <div class="step-title">共情</div>
            </div>

            <div class="section-block">
              <div class="section-label keyword">
                <span class="icon">◆</span>
                <span>关键词</span>
              </div>
              <div class="section-content highlight">认可情绪、承认感受</div>
            </div>

            <div class="section-block">
              <div class="section-label feeling">
                <span class="icon">♥</span>
                <span>员工感受</span>
              </div>
              <div class="section-content">"他理解我为什么生气"</div>
            </div>

            <div class="section-block">
              <div class="section-label action">
                <span class="icon">✓</span>
                <span>操作</span>
              </div>
              <div class="section-content">"我理解你为什么沮丧"、"换成我也会不高兴"</div>
            </div>

            <div class="section-block">
              <div class="section-label avoid">
                <span class="icon">✕</span>
                <span>禁忌</span>
              </div>
              <div class="section-content avoid-text">说"你的心情我理解"然后立刻说"但是……"</div>
            </div>
          </div>

          <!-- Step 3: 解释 -->
          <div class="step-card">
            <div class="step-header">
              <div class="step-num">3</div>
              <div class="step-title">解释</div>
            </div>

            <div class="section-block">
              <div class="section-label keyword">
                <span class="icon">◆</span>
                <span>关键词</span>
              </div>
              <div class="section-content highlight">用事实回应、说明能做和不能做的</div>
            </div>

            <div class="section-block">
              <div class="section-label feeling">
                <span class="icon">♥</span>
                <span>员工感受</span>
              </div>
              <div class="section-content">"他有给我理由，不是简单拒绝"</div>
            </div>

            <div class="section-block">
              <div class="section-label action">
                <span class="icon">✓</span>
                <span>操作</span>
              </div>
              <div class="section-content">说明决策依据，说明管理者的实际权限</div>
            </div>

            <div class="section-block">
              <div class="section-label avoid">
                <span class="icon">✕</span>
                <span>禁忌</span>
              </div>
              <div class="section-content avoid-text">把AI当作挡箭牌</div>
            </div>
          </div>

          <!-- Step 4: 承诺 -->
          <div class="step-card">
            <div class="step-header">
              <div class="step-num">4</div>
              <div class="step-title">承诺</div>
            </div>

            <div class="section-block">
              <div class="section-label keyword">
                <span class="icon">◆</span>
                <span>关键词</span>
              </div>
              <div class="section-content highlight">具体行动、时间和结果</div>
            </div>

            <div class="section-block">
              <div class="section-label feeling">
                <span class="icon">♥</span>
                <span>员工感受</span>
              </div>
              <div class="section-content">"他给了我一个可以期待的方向"</div>
            </div>

            <div class="section-block">
              <div class="section-label action">
                <span class="icon">✓</span>
                <span>操作</span>
              </div>
              <div class="section-content">说明下一步会做什么，什么时间内，结果会怎样</div>
            </div>

            <div class="section-block">
              <div class="section-label avoid">
                <span class="icon">✕</span>
                <span>禁忌</span>
              </div>
              <div class="section-content avoid-text">空头承诺"我会帮你反映"</div>
            </div>
          </div>
        </div>

        <!-- Bottom Quote -->
        <div class="bottom-quote">
          <strong>核心原则：</strong>四步顺序不能乱，每一步都为下一步铺路
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
