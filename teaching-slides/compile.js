// compile.js - 行动学习催化师认证授课PPT 编译脚本
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '行动学习催化师认证授课PPT';
pres.author = '行动学习研究院';
pres.subject = '燎原催化导师认证营';

// 红灰浅底配色方案
const theme = {
  primary: "2b2d42",    // 深灰蓝 - 标题/主要文字
  secondary: "8d99ae",  // 灰蓝 - 次要文字
  accent: "ef233c",     // 亮红 - 强调色
  light: "edf2f4",      // 浅灰 - 辅助色
  bg: "ffffff"          // 白色 - 背景
};

// 加载所有幻灯片
const totalSlides = 120;
let loadedCount = 0;
let errorCount = 0;

for (let i = 1; i <= totalSlides; i++) {
  const num = String(i).padStart(2, '0');
  const filePath = path.join(__dirname, `slide-${num}.js`);

  if (!fs.existsSync(filePath)) {
    console.log(`Skipped slide-${num}.js (not found)`);
    continue;
  }

  try {
    const slideModule = require(filePath);

    if (typeof slideModule.createSlide === 'function') {
      slideModule.createSlide(pres, theme);
      loadedCount++;
      if (loadedCount % 20 === 0) {
        console.log(`Loaded ${loadedCount} slides...`);
      }
    } else {
      console.error(`slide-${num}.js: createSlide function not found`);
      errorCount++;
    }
  } catch (err) {
    console.error(`Error loading slide-${num}.js:`, err.message);
    errorCount++;
  }
}

console.log(`\n编译完成: ${loadedCount} 页成功, ${errorCount} 页失败`);

// 输出到指定目录
const outputPath = 'D:/新课开发/行动学习2026/行动学习催化师认证/完整课程包/05-授课PPT/行动学习催化师认证-授课PPT.pptx';
const outputDir = path.dirname(outputPath);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

pres.writeFile({ fileName: outputPath })
  .then(() => console.log(`\n输出成功: ${outputPath}`))
  .catch(err => console.error('创建失败:', err));
