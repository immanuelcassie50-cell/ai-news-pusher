// D-16 compile
const pptxgen = require('pptxgenjs');
const path = require('path');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

pres.title = 'D-16 评审日开场介绍';
pres.author = '德赛西威项目组';
pres.company = '德赛西威';

const theme = {
  primary: "003D7A",    // 德赛蓝
  secondary: "333333",  // 文本灰
  accent: "00A0E9",     // 智能青
  light: "F4F6F9",      // 背景灰
  bg: "FFFFFF"          // 白底
};

for (let i = 1; i <= 8; i++) {
  const num = String(i).padStart(2, '0');
  const slideModule = require(`./slide-${num}.js`);
  slideModule.createSlide(pres, theme);
}

pres.writeFile({ fileName: path.join(__dirname, 'output', 'D-16-评审日开场介绍.pptx') })
  .then(fn => console.log('SAVED:', fn));
