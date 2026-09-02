// compile.js - 管理者薪酬对话课程 PPT 编译器
const pptxgen = require('pptxgenjs');
const path = require('path');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '管理者薪酬对话：怎么解释AI生成的调薪决策而不失去信任';
pres.author = 'AI HR Training';
pres.subject = 'HR薪酬管理培训';

// 红灰配色主题 - 极致美学
const theme = {
  primary: "8B2635",    // 深红 - 标题和强调
  secondary: "4A4A4A",  // 中灰 - 正文
  accent: "C45C3E",     // 暖红 - 点缀
  light: "D4C5C5",      // 浅粉灰 - 卡片背景
  bg: "FAF8F7"          // 暖白 - 页面背景
};

// 总幻灯片数
const TOTAL_SLIDES = 78;

console.log('开始编译PPT...');
console.log(`主题: 红灰配色 | 背景: ${theme.bg} | 标题: ${theme.primary}`);

for (let i = 1; i <= TOTAL_SLIDES; i++) {
  const num = String(i).padStart(2, '0');
  const slidePath = `./slide-${num}.js`;

  try {
    const slideModule = require(slidePath);
    const createSlide = slideModule.createSlide || slideModule.render;
    if (createSlide) {
      createSlide(pres, theme);
      console.log(`✓ slide-${num} loaded: ${slideModule.slideConfig?.title || 'OK'}`);
    } else {
      console.error(`✗ slide-${num} FAILED: no createSlide or render function found`);
    }
  } catch (err) {
    console.error(`✗ slide-${num} FAILED: ${err.message}`);
  }
}

const outputPath = path.join(__dirname, 'output', 'presentation.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`\n✓ PPT生成成功: ${outputPath}`);
  })
  .catch(err => {
    console.error(`\n✗ PPT生成失败: ${err.message}`);
  });
