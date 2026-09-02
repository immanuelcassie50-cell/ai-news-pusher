/**
 * Slide 70: 日常薪酬沟通习惯
 * Content Page - Daily salary communication habits
 */

const slideConfig = {
  type: 'content',
  index: 70,
  title: '日常薪酬沟通习惯'
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

        .slide {
          width: 100%;
          height: 100%;
          padding: 36px 48px;
          display: flex;
          flex-direction: column;
        }

        /* 标题区域 */
        .header {
          margin-bottom: 20px;
        }

        .title {
          font-size: 30px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 6px;
        }

        .title-decoration {
          width: 60px;
          height: 4px;
          background: ${theme.accent};
          border-radius: 2px;
          margin-bottom: 12px;
        }

        .subtitle {
          font-size: 12px;
          color: ${theme.secondary};
          opacity: 0.7;
          letter-spacing: 1px;
        }

        /* 引导语区域 */
        .intro-section {
          background: linear-gradient(135deg, ${theme.primary}08 0%, ${theme.bg} 100%);
          border-left: 4px solid ${theme.accent};
          border-radius: 0 10px 10px 0;
          padding: 14px 20px;
          margin-bottom: 20px;
        }

        .intro-title {
          font-size: 14px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 8px;
        }

        .intro-points {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .intro-point {
          font-size: 12px;
          color: ${theme.secondary};
          line-height: 1.5;
          padding-left: 12px;
          position: relative;
        }

        .intro-point::before {
          content: '';
          position: absolute;
          left: 0;
          top: 7px;
          width: 5px;
          height: 5px;
          background: ${theme.accent};
          border-radius: 50%;
        }

        /* 三列原则卡片 */
        .principles-container {
          display: flex;
          gap: 18px;
          flex: 1;
          margin-bottom: 16px;
        }

        .principle-card {
          flex: 1;
          background: white;
          border-radius: 14px;
          padding: 20px;
          position: relative;
          box-shadow: 0 3px 12px ${theme.secondary}10;
          border: 1px solid ${theme.light}50;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .principle-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px ${theme.secondary}15;
        }

        .principle-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          border-radius: 14px 14px 0 0;
        }

        .card-1::before { background: linear-gradient(90deg, ${theme.primary} 0%, ${theme.accent} 100%); }
        .card-2::before { background: linear-gradient(90deg, ${theme.accent} 0%, ${theme.primary} 100%); }
        .card-3::before { background: linear-gradient(90deg, ${theme.primary} 0%, ${theme.secondary} 100%); }

        .card-number {
          position: absolute;
          top: 16px;
          right: 18px;
          font-size: 36px;
          font-weight: 700;
          font-family: Arial, sans-serif;
          opacity: 0.12;
          color: ${theme.primary};
        }

        .principle-title {
          font-size: 15px;
          font-weight: 600;
          color: ${theme.primary};
          margin-bottom: 14px;
          padding-right: 40px;
          line-height: 1.4;
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .content-block {
          padding: 12px 14px;
          background: ${theme.bg};
          border-radius: 8px;
        }

        .block-label {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .label-icon {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        .timing .label-icon {
          background: ${theme.primary}15;
          color: ${theme.primary};
        }

        .dialogue .label-icon {
          background: ${theme.accent}15;
          color: ${theme.accent};
        }

        .purpose .label-icon {
          background: ${theme.secondary}15;
          color: ${theme.secondary};
        }

        .timing .block-label { color: ${theme.primary}; }
        .dialogue .block-label { color: ${theme.accent}; }
        .purpose .block-label { color: ${theme.secondary}; }

        .block-text {
          font-size: 12px;
          color: ${theme.secondary};
          line-height: 1.5;
        }

        .dialogue .block-text {
          font-style: italic;
          color: ${theme.secondary};
        }

        /* 底部装饰 */
        .footer-decoration {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .footer-dot:nth-child(1) { background: ${theme.accent}; }
        .footer-dot:nth-child(2) { background: ${theme.light}; }
        .footer-dot:nth-child(3) { background: ${theme.light}; }
      </style>

      <div class="header">
        <h1 class="title">${slideConfig.title}</h1>
        <div class="title-decoration"></div>
        <p class="subtitle">THREE PRINCIPLES OF DAILY COMPENSATION COMMUNICATION</p>
      </div>

      <div class="intro-section">
        <div class="intro-title">为什么日常沟通比年终对话更重要</div>
        <div class="intro-points">
          <div class="intro-point">薪酬对话最危险的时刻：一年只谈一次，一次定生死</div>
          <div class="intro-point">员工的"不公平感"如果在平时积累，年终调薪时已经太迟</div>
          <div class="intro-point">日常对话是"信任的持续存款"，年终对话只是"结账"</div>
        </div>
      </div>

      <div class="principles-container">
        <!-- 原则一 -->
        <div class="principle-card card-1">
          <span class="card-number">01</span>
          <div class="principle-title">聊期望，而不是聊数字</div>
          <div class="card-content">
            <div class="content-block timing">
              <div class="block-label">
                <span class="label-icon">⏰</span>
                时机
              </div>
              <div class="block-text">年初、季度末、项目结束</div>
            </div>
            <div class="content-block dialogue">
              <div class="block-label">
                <span class="label-icon">💬</span>
                话术
              </div>
              <div class="block-text">"你觉得这个阶段你的市场价值有什么变化吗？"</div>
            </div>
            <div class="content-block purpose">
              <div class="block-label">
                <span class="label-icon">🎯</span>
                目的
              </div>
              <div class="block-text">让员工主动思考自己的价值，而不是被动等系统出数字</div>
            </div>
          </div>
        </div>

        <!-- 原则二 -->
        <div class="principle-card card-2">
          <span class="card-number">02</span>
          <div class="principle-title">给反馈，而不是等结果</div>
          <div class="card-content">
            <div class="content-block timing">
              <div class="block-label">
                <span class="label-icon">⏰</span>
                时机
              </div>
              <div class="block-text">项目完成、绩效评估后</div>
            </div>
            <div class="content-block dialogue">
              <div class="block-label">
                <span class="label-icon">💬</span>
                话术
              </div>
              <div class="block-text">"这个项目你做得不错，我觉得你的市场价值在往上走"</div>
            </div>
            <div class="content-block purpose">
              <div class="block-label">
                <span class="label-icon">🎯</span>
                目的
              </div>
              <div class="block-text">让员工感受到你在关注他的成长</div>
            </div>
          </div>
        </div>

        <!-- 原则三 -->
        <div class="principle-card card-3">
          <span class="card-number">03</span>
          <div class="principle-title">早预警，而不是年终通知</div>
          <div class="card-content">
            <div class="content-block timing">
              <div class="block-label">
                <span class="label-icon">⏰</span>
                时机
              </div>
              <div class="block-text">发现市场变化、绩效波动时</div>
            </div>
            <div class="content-block dialogue">
              <div class="block-label">
                <span class="label-icon">💬</span>
                话术
              </div>
              <div class="block-text">"我注意到市场数据有变化，今年的调薪可能会有压力，但我会持续关注"</div>
            </div>
            <div class="content-block purpose">
              <div class="block-label">
                <span class="label-icon">🎯</span>
                目的
              </div>
              <div class="block-text">让员工有心理准备，不突然接受"坏消息"</div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-decoration">
        <span class="footer-dot"></span>
        <span class="footer-dot"></span>
        <span class="footer-dot"></span>
      </div>
    </div>
  `;
}

module.exports = { slideConfig, theme, render };
