// compile.js - 编译所有slides为PPTX
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '信任账本 - 高曝光时代的个人信任经营';
pres.author = 'AI Generated';
pres.subject = '个人信任经营';

// 主题色板
const theme = {
  primary: "1a1a2e",
  secondary: "4a4e69",
  accent: "e08c6d",
  light: "c9b99a",
  bg: "f5f0e8"
};

// 按顺序加载所有48个slides
const slideCount = 48;
for (let i = 1; i <= slideCount; i++) {
  const num = String(i).padStart(2, '0');
  const slidePath = path.join(__dirname, 'slide-' + num + '.js');

  if (fs.existsSync(slidePath)) {
    try {
      const slideModule = require(slidePath);
      slideModule.createSlide(pres, theme);
      console.log('✓ slide-' + num + '.js loaded');
    } catch (err) {
      console.error('✗ Error loading slide-' + num + '.js: ' + err.message);
    }
  } else {
    console.warn('⚠ slide-' + num + '.js not found, skipping');
  }
}

// 输出到output目录
const outputPath = path.join(__dirname, 'output', '信任账本-高曝光时代的个人信任经营.pptx');
pres.writeFile({ fileName: outputPath })
  .then(function() {
    console.log('\n✓ PPT生成完成: ' + outputPath);
  })
  .catch(function(err) {
    console.error('✗ 生成失败: ' + err);
  });
