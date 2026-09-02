// compile.js - 编译所有幻灯片为PPTX
const pptxgen = require("pptxgenjs");
const path = require("path");

const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE';
pres.title = '阻力信号量表';
pres.author = 'AI Generated';

const theme = {
  primary: "C41E3A",    // Chinese Red
  secondary: "8B0000",  // Dark Red
  accent: "FFD700",     // Gold
  light: "F5F5F5",      // Light Gray
  bg: "FFFFFF"          // White
};

// Import and create all slides
const slideModules = [
  require("./slide-01.js")
];

slideModules.forEach((mod, idx) => {
  console.log(`Creating slide ${idx + 1}: ${mod.slideConfig.title}`);
  mod.createSlide(pres, theme);
});

// Output path
const outputPath = "D:/新课开发/变革管理/14-组织风险的提前预警话术：在合同签订前把话说清楚/完整课程包/10-教具设计/教具03-阻力信号量表.pptx";

pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log("\nSuccess! Created: " + outputPath);
  })
  .catch(err => {
    console.error("Error creating PPTX:", err);
    process.exit(1);
  });
