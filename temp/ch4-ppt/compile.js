// compile.js - 第四章多轮对话PPT编译脚本
const pptxgen = require("pptxgenjs");
const path = require("path");
const fs = require("fs");

// 主题配置
const theme = {
  primary: "C43C3C",
  secondary: "4A4A4A",
  accent: "C43C3C",
  light: "888888",
  bg: "F5F5F5"
};

// 创建演示文稿
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '第四章：多轮对话——让AI按你的想法推进';
pres.author = 'AI组合作战';

// 确保输出目录存在
const outputDir = path.join(__dirname, "output");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 按顺序加载并创建所有幻灯片
const slideCount = 33;
for (let i = 1; i <= slideCount; i++) {
  const slideNum = String(i).padStart(2, '0');
  const slidePath = path.join(__dirname, "slides", `slide-${slideNum}.js`);

  try {
    const slideModule = require(slidePath);
    slideModule.createSlide(pres, theme);
    console.log(`✓ Slide ${slideNum} loaded: ${slideModule.slideConfig?.title || 'untitled'}`);
  } catch (err) {
    console.error(`✗ Error loading slide-${slideNum}.js:`, err.message);
  }
}

// 输出文件路径
const outputPath = path.join(outputDir, "04-多轮对话模式.pptx");

// 生成PPT文件
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`\n✓ PPT generated successfully: ${outputPath}`);
  })
  .catch(err => {
    console.error("✗ Error generating PPT:", err);
  });