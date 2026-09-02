/**
 * 信任不断线课程 - Markdown转HTML批量生成器
 * 浅底设计，红灰配色，适合打印
 */

const fs = require('fs');
const path = require('path');
const marked = require('marked');

// 配置marked
marked.setOptions({
  breaks: true,
  gfm: true
});

// 课程主题色
const COLORS = {
  primary: '#C00000',      // 课程红
  secondary: '#4A4A4A',    // 深灰
  accent: '#E53935',       // 亮红
  background: '#FFFFFF',   // 白色底
  surface: '#F8F9FA',      // 浅灰背景
  text: '#1A1A2E',         // 深色文字
  textLight: '#666666',    // 次要文字
  border: '#E0E0E0',       // 边框
  headerBg: '#C00000',      // 页头背景
};

// HTML模板
function generateHTML(title, markdown, meta = {}) {
  const content = marked.parse(markdown);

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@400;600;700&display=swap');

    :root {
      --primary: ${COLORS.primary};
      --secondary: ${COLORS.secondary};
      --accent: ${COLORS.accent};
      --bg: ${COLORS.background};
      --surface: ${COLORS.surface};
      --text: ${COLORS.text};
      --text-light: ${COLORS.textLight};
      --border: ${COLORS.border};
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.8;
      font-size: 15px;
    }

    /* 页头 */
    .page-header {
      background: linear-gradient(135deg, var(--primary) 0%, #8B0000 100%);
      color: white;
      padding: 40px 60px;
      position: relative;
      overflow: hidden;
    }

    .page-header::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -10%;
      width: 400px;
      height: 200px;
      background: rgba(255,255,255,0.1);
      border-radius: 50%;
      transform: rotate(-15deg);
    }

    .page-header h1 {
      font-family: 'Noto Serif SC', serif;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
      position: relative;
      z-index: 1;
    }

    .page-header .subtitle {
      font-size: 14px;
      opacity: 0.9;
      position: relative;
      z-index: 1;
    }

    .course-badge {
      display: inline-block;
      background: rgba(255,255,255,0.2);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      margin-bottom: 12px;
      backdrop-filter: blur(10px);
    }

    /* 面包屑 */
    .breadcrumb {
      background: var(--surface);
      padding: 12px 60px;
      border-bottom: 1px solid var(--border);
      font-size: 13px;
      color: var(--text-light);
    }

    .breadcrumb a {
      color: var(--primary);
      text-decoration: none;
    }

    .breadcrumb a:hover {
      text-decoration: underline;
    }

    /* 主内容 */
    .main-content {
      max-width: 900px;
      margin: 0 auto;
      padding: 50px 60px;
    }

    /* 标题样式 */
    h1 { font-family: 'Noto Serif SC', serif; font-size: 32px; font-weight: 700; color: var(--primary); margin: 40px 0 24px; border-left: 4px solid var(--primary); padding-left: 16px; }
    h2 { font-family: 'Noto Serif SC', serif; font-size: 24px; font-weight: 600; color: var(--secondary); margin: 36px 0 18px; border-bottom: 2px solid var(--border); padding-bottom: 8px; }
    h3 { font-size: 18px; font-weight: 600; color: var(--text); margin: 28px 0 14px; }
    h4 { font-size: 16px; font-weight: 500; color: var(--text); margin: 20px 0 10px; }

    /* 段落 */
    p { margin: 14px 0; }

    /* 强调块 */
    strong { color: var(--primary); font-weight: 600; }

    /* 引用块 */
    blockquote {
      background: var(--surface);
      border-left: 4px solid var(--primary);
      padding: 16px 24px;
      margin: 20px 0;
      border-radius: 0 8px 8px 0;
      font-style: italic;
      color: var(--text-light);
    }

    blockquote p { margin: 0; }

    /* 表格 */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      border-radius: 8px;
      overflow: hidden;
    }

    th {
      background: var(--primary);
      color: white;
      padding: 14px 16px;
      text-align: left;
      font-weight: 500;
    }

    td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--border);
    }

    tr:last-child td { border-bottom: none; }
    tr:nth-child(even) { background: var(--surface); }

    /* 列表 */
    ul, ol {
      margin: 14px 0;
      padding-left: 28px;
    }

    li {
      margin: 8px 0;
      position: relative;
    }

    ul li::marker { color: var(--primary); }
    ol li::marker { color: var(--primary); font-weight: 600; }

    /* 代码 */
    code {
      background: var(--surface);
      padding: 2px 8px;
      border-radius: 4px;
      font-family: 'Fira Code', monospace;
      font-size: 13px;
      color: var(--accent);
    }

    pre {
      background: #1a1a2e;
      color: #e0e0e0;
      padding: 20px 24px;
      border-radius: 8px;
      overflow-x: auto;
      margin: 20px 0;
    }

    pre code {
      background: none;
      color: inherit;
      padding: 0;
    }

    /* 分隔线 */
    hr {
      border: none;
      height: 2px;
      background: linear-gradient(to right, var(--primary), transparent);
      margin: 32px 0;
    }

    /* 信息框 */
    .info-box {
      background: linear-gradient(135deg, #FFF5F5 0%, #FFF0F0 100%);
      border: 1px solid #FFCDD2;
      border-radius: 8px;
      padding: 16px 20px;
      margin: 20px 0;
    }

    .info-box.warning {
      background: linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%);
      border-color: #FFE082;
    }

    .info-box.success {
      background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
      border-color: #A5D6A7;
    }

    /* 卡片网格 */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin: 24px 0;
    }

    .card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }

    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      border-color: var(--primary);
    }

    .card h3 {
      margin-top: 0;
      color: var(--primary);
      font-size: 17px;
    }

    .card p {
      color: var(--text-light);
      font-size: 14px;
      margin-bottom: 0;
    }

    /* 时间轴 */
    .timeline {
      position: relative;
      padding-left: 30px;
      margin: 24px 0;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--border);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 20px;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -26px;
      top: 6px;
      width: 12px;
      height: 12px;
      background: var(--primary);
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 0 0 2px var(--primary);
    }

    /* 打印样式 */
    @media print {
      body { font-size: 12px; }
      .page-header { background: var(--primary) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .card { box-shadow: none; border: 1px solid #ddd; }
      .main-content { padding: 30px; }
      h1 { font-size: 24px; }
      h2 { font-size: 18px; }
    }

    /* 响应式 */
    @media (max-width: 768px) {
      .page-header { padding: 24px 24px; }
      .breadcrumb { padding: 10px 24px; }
      .main-content { padding: 24px; }
      h1 { font-size: 24px; }
      h2 { font-size: 20px; }
    }

    /* 脚注 */
    .footer {
      background: var(--surface);
      padding: 24px 60px;
      border-top: 1px solid var(--border);
      text-align: center;
      color: var(--text-light);
      font-size: 12px;
      margin-top: 60px;
    }
  </style>
</head>
<body>
  <header class="page-header">
    <span class="course-badge">AI时代客户服务与客户成功工作坊</span>
    <h1>${title}</h1>
    ${meta.subtitle ? `<div class="subtitle">${meta.subtitle}</div>` : ''}
  </header>

  <div class="breadcrumb">
    <a href="#">首页</a> &gt; <a href="#">课程大纲</a> &gt; ${title}
  </div>

  <main class="main-content">
    ${content}
  </main>

  <footer class="footer">
    <p>信任不断线：AI时代客户服务与客户成功工作坊 | 内部资料 · 仅限授权使用</p>
  </footer>
</body>
</html>`;
}

// 转换单个文件
function convertFile(mdPath, outputDir) {
  const filename = path.basename(mdPath, '.md');
  const htmlPath = path.join(outputDir, filename + '.html');

  try {
    const markdown = fs.readFileSync(mdPath, 'utf8');
    const titleMatch = markdown.match(/^#\s+(.+)/m);
    const title = titleMatch ? titleMatch[1] : filename;

    // 提取副标题（如果有）
    const subtitleMatch = markdown.match(/^##\s+(.+)/m);
    const subtitle = subtitleMatch ? subtitleMatch[1] : '';

    const html = generateHTML(title, markdown, { subtitle });

    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log(`✅ ${filename}.html`);
    return true;
  } catch (err) {
    console.error(`❌ ${filename}: ${err.message}`);
    return false;
  }
}

// 主函数
function main() {
  const baseDir = "D:/新课开发/信任/信任不断线：AI时代客户服务与客户成功工作坊/完整课程包";
  const outputDir = path.join(baseDir, "10_HTML可视化");

  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 需要转换的文件映射
  const files = [
    // 课程大纲
    { src: "01_课程大纲/01-对外大纲.md", out: "01-对外大纲.html" },
    { src: "01_课程大纲/02-内部大纲.md", out: "02-内部大纲.html" },
    { src: "01_课程大纲/03-学习地图.md", out: "03-学习地图.html" },
    // 教学文档
    { src: "03_教学文档/01-开场与破题.md", out: "04-开场与破题.html" },
    { src: "03_教学文档/02-模块一_信任的真相.md", out: "05-模块一_信任的真相.html" },
    { src: "03_教学文档/03-模块二_明.md", out: "06-模块二_明.html" },
    { src: "03_教学文档/04-模块三_稳.md", out: "07-模块三_稳.html" },
    { src: "03_教学文档/05-第一天收尾.md", out: "08-第一天收尾.html" },
    { src: "03_教学文档/06-第二天复盘与过渡.md", out: "09-第二天复盘与过渡.html" },
    { src: "03_教学文档/07-模块四_续.md", out: "10-模块四_续.html" },
    { src: "03_教学文档/09-综合实战模拟.md", out: "11-综合实战模拟.html" },
    { src: "03_教学文档/10-结尾与承诺.md", out: "12-结尾与承诺.html" },
    // 工具表单
    { src: "06_工具表单/F1_信任风险自评卡.md", out: "T1-信任风险自评卡.html" },
    { src: "06_工具表单/F2_AI使用边界清单.md", out: "T2-AI使用边界清单.html" },
    { src: "06_工具表单/F3_透明度设计工作表.md", out: "T3-透明度设计工作表.html" },
    { src: "06_工具表单/F4_升级处理话术卡.md", out: "T4-升级处理话术卡.html" },
    { src: "06_工具表单/F5_跨渠道一致性排查表.md", out: "T5-跨渠道一致性排查表.html" },
    { src: "06_工具表单/F6_健康度透明沟通设计卡.md", out: "T6-健康度透明沟通设计卡.html" },
    { src: "06_工具表单/F7_30-60-90天行动计划表.md", out: "T7-30-60-90天行动计划表.html" },
    { src: "06_工具表单/F8_三人小组复盘观察表.md", out: "T8-三人小组复盘观察表.html" },
    { src: "06_工具表单/F9_信任修复对话话术卡.md", out: "T9-信任修复对话话术卡.html" },
    { src: "06_工具表单/F10_团队客户信任台账.md", out: "T10-团队客户信任台账.html" },
    // 练习题库
    { src: "07_练习题库/G1_开场暖场练习_信任困境识别.md", out: "P1-开场暖场练习.html" },
    { src: "07_练习题库/G2_模块一练习_信任流失点识别.md", out: "P2-模块一练习.html" },
    { src: "07_练习题库/G3_模块二练习_透明度设计工作坊.md", out: "P3-模块二练习.html" },
    { src: "07_练习题库/G4_模块三练习_升级处理角色扮演.md", out: "P4-模块三练习.html" },
    { src: "07_练习题库/G5_跨渠道一致性排查.md", out: "P5-跨渠道一致性排查.html" },
    { src: "07_练习题库/G6_健康度沟通话术设计.md", out: "P6-健康度沟通话术设计.html" },
    { src: "07_练习题库/G7_续约前信任修复对话.md", out: "P7-续约前信任修复对话.html" },
    { src: "07_练习题库/G8_行动计划制定练习.md", out: "P8-行动计划制定练习.html" },
    // 学员手册
    { src: "04_学员手册/信任不断线_学员手册.md", out: "W1-学员手册.html" },
    // 评估工具
    { src: "08_评估工具/01_前测题库_学员版.md", out: "E1-前测题库.html" },
    { src: "08_评估工具/02_后测题库_学员版.md", out: "E2-后测题库.html" },
    { src: "08_评估工具/05_培训效果评估问卷_学员版.md", out: "E3-培训效果评估问卷.html" },
  ];

  console.log('🎓 信任不断线课程 - HTML生成器\n');

  let success = 0;
  let failed = 0;

  for (const file of files) {
    const srcPath = path.join(baseDir, file.src);
    if (fs.existsSync(srcPath)) {
      if (convertFile(srcPath, outputDir)) {
        success++;
      } else {
        failed++;
      }
    } else {
      console.log(`⏭️  跳过（文件不存在）: ${file.src}`);
    }
  }

  console.log(`\n📊 完成: ${success} 成功, ${failed} 失败`);
}

main();
