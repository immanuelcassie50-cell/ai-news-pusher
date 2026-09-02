// compile-new.js - Compile only the new slides (97-135) into a separate PPTX
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '循迹创新：以用户为圆心的创新方法 - 新增内容';
pres.author = '罗宏伟';

const theme = {
  primary: "333333",    // 深灰-标题/文字
  secondary: "666666",  // 中灰-次级文字
  accent: "C41A1A",     // 红色-强调色
  light: "D9D9D9",      // 浅灰-辅助
  bg: "F5F5F5"          // 浅灰背景
};

// Load and create slides 97-135
for (let i = 97; i <= 135; i++) {
  const num = String(i);
  try {
    const slideModule = require(`./slide-${num}.js`);
    slideModule.createSlide(pres, theme);
    console.log(`Loaded slide-${num}.js`);
  } catch (err) {
    console.error(`Error loading slide-${num}.js:`, err.message);
  }
}

pres.writeFile({ fileName: './output/new-slides.pptx' })
  .then(() => console.log('Created new-slides.pptx'))
  .catch(err => console.error('Error writing file:', err));