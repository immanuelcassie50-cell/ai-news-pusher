// compile.js - Compile slides into final A5 PPTX
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();

// Use standard 16:9 layout, content designed for A5 proportions (5.83" x 8.27")
// When printed, set paper to A5 landscape to match card layout
pres.layout = 'LAYOUT_16x9';
pres.title = '预警话术速查卡';
pres.author = 'AI Assistant';

const theme = {
  primary: "C41E3A",    // Chinese Red
  secondary: "8B0000",  // Dark Red
  accent: "FFD700",     // Gold
  light: "F5F5F5",      // Light Gray
  bg: "FFFFFF"          // White
};

// Import and create slides
const slide01 = require('./slides/slide-01.js');
const slide02 = require('./slides/slide-02.js');

slide01.createSlide(pres, theme);
slide02.createSlide(pres, theme);

// Write final file
const outputPath = 'D:/新课开发/变革管理/14-组织风险的提前预警话术：在合同签订前把话说清楚/完整课程包/10-教具设计/教具05-预警话术速查卡.pptx';
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log('PPTX created successfully: ' + outputPath);
  })
  .catch(err => {
    console.error('Error creating PPTX:', err);
  });
