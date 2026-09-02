// D-17 compile
const pptxgen = require('pptxgenjs');
const path = require('path');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'D-17 内训师优秀课程示范';
pres.author = '德赛西威项目组';
pres.company = '德赛西威';

const theme = {
  primary: "003D7A",
  secondary: "333333",
  accent: "00A0E9",
  light: "F4F6F9",
  bg: "FFFFFF"
};

for (let i = 1; i <= 15; i++) {
  const num = String(i).padStart(2, '0');
  const slideModule = require(`./slide-${num}.js`);
  slideModule.createSlide(pres, theme);
}

pres.writeFile({ fileName: path.join(__dirname, 'output', 'D-17-内训师优秀课程示范.pptx') })
  .then(fn => console.log('SAVED:', fn));
