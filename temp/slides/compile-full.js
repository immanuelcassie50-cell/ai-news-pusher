// compile-full.js - 高考志愿填报师讲师手册完整编译
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '高考志愿填报师讲师手册';
pres.author = '罗宏伟';
pres.subject = '讲师培训手册';

// Theme: 红灰配色
const theme = {
  primary: "8B0000",    // 深红色 - 标题
  secondary: "333333",  // 深灰色 - 正文
  accent: "C41E3A",     // 红色强调
  light: "999999",      // 浅灰色
  bg: "F5F5F5"          // 浅灰背景
};

// 找出所有slide-XX.js文件并按编号排序
const slidesDir = __dirname;
const slideFiles = fs.readdirSync(slidesDir)
  .filter(f => /^slide-\d+\.js$/.test(f))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

console.log(`Found ${slideFiles.length} slide files`);

let successCount = 0;
let errorCount = 0;

for (const file of slideFiles) {
  try {
    const filePath = path.join(slidesDir, file);
    const slideModule = require(filePath);

    if (typeof slideModule.createSlide === 'function') {
      slideModule.createSlide(pres, theme);
      successCount++;
      process.stdout.write('.');
    } else {
      console.log(`\nWarning: ${file} does not export createSlide function`);
      errorCount++;
    }
  } catch (err) {
    console.log(`\nError loading ${file}: ${err.message}`);
    errorCount++;
  }
}

console.log(`\n\nLoaded ${successCount} slides successfully, ${errorCount} errors`);

// 确保输出目录存在
const outputDir = path.join(slidesDir, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入最终PPTX
const outputPath = path.join(outputDir, '高考志愿填报师-讲师手册.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`\nPPTX created successfully: ${outputPath}`);
  })
  .catch(err => {
    console.error('\nError writing PPTX:', err);
  });