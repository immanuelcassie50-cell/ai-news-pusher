// 渲染其中几个关键 slide 为 PPTX，确认 PowerPoint 输出无问题
const path = require("path");
const fs = require("fs");
const pptxgen = require(path.join("D:/2026年课程/ai课2026整理/内训师引导技术/授课PPT/slides/node_modules/pptxgenjs"));
const theme = require("D:/2026年课程/ai课2026整理/内训师引导技术/授课PPT/slides/theme.js");

const outputDir = "D:/CC/temp/slide-render-test/";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 测试 4 个代表性 slide：扉页 / 内容页 / 对比页 / 总结页
const testNums = [138, 141, 151, 156];

for (const num of testNums) {
  const fileName = `slide-${String(num).padStart(3, "0")}.js`;
  const fullPath = path.join("D:/2026年课程/ai课2026整理/内训师引导技术/授课PPT/slides/", fileName);
  const mod = require(fullPath);
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  mod.createSlide(pres, theme);
  const outFile = path.join(outputDir, `render-${String(num).padStart(3, "0")}.pptx`);
  pres.writeFile({ fileName: outFile }).then(p => {
    console.log(`✓ ${fileName} -> ${p}`);
  });
}
