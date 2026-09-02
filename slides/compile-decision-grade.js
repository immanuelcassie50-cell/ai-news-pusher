// compile-decision-grade.js - 编译决策分级实战课程PPT
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '决策分级实战';
pres.author = '罗宏伟';
pres.subject = 'HR绩效管理赋能工作坊';

// Theme colors - Red & Gray (培训/教育风格)
const theme = {
  primary: "C62828",    // 深红-标题文字
  secondary: "424242",  // 深灰-副文本
  accent: "EF5350",     // 亮红-强调
  light: "FFCDD2",      // 浅粉-背景点缀
  bg: "FAFAFA"          // 浅灰白-背景
};

// 决策分级课程包含 slide-01 到 slide-120
const TOTAL_SLIDES = 120;

console.log('Starting compilation of', TOTAL_SLIDES, 'slides for 决策分级实战...');

for (let i = 1; i <= TOTAL_SLIDES; i++) {
  const num = String(i).padStart(2, '0');
  const slidePath = path.join(__dirname, 'slide-' + num + '.js');

  if (fs.existsSync(slidePath)) {
    try {
      const slideModule = require(slidePath);
      slideModule.createSlide(pres, theme);
      console.log('  Added slide-' + num + ': ' + (slideModule.slideConfig && slideModule.slideConfig.title ? slideModule.slideConfig.title : 'OK'));
    } catch (err) {
      console.error('  Error loading slide-' + num + ':', err.message);
    }
  } else {
    console.warn('  Warning: slide-' + num + '.js not found, skipping');
  }
}

// 输出目录
const outputDir = 'D:/新课开发/HR/04.决策分级实战：哪些绩效决策必须人来扛哪些可以放心交给AI/授课PPT';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入最终PPTX
const outputPath = path.join(outputDir, '04_决策分级实战.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log('\n=== Compilation Complete ===');
    console.log('Output:', outputPath);
    console.log('Total slides:', TOTAL_SLIDES);
  })
  .catch(err => console.error('Error writing file:', err));
