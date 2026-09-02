// 深度测试：实际调用每个 createSlide，确认无运行时错误
const path = require("path");
const pptxgen = require(path.join("D:/2026年课程/ai课2026整理/内训师引导技术/授课PPT/slides/node_modules/pptxgenjs"));
const theme = require("D:/2026年课程/ai课2026整理/内训师引导技术/授课PPT/slides/theme.js");

const fileNums = [];
for (let i = 138; i <= 156; i++) {
  fileNums.push(i);
}

let pass = 0;
let fail = 0;
const errors = [];

for (const num of fileNums) {
  const fileName = `slide-${String(num).padStart(3, "0")}.js`;
  const fullPath = path.join("D:/2026年课程/ai课2026整理/内训师引导技术/授课PPT/slides/", fileName);
  try {
    delete require.cache[require.resolve(fullPath)];
    const mod = require(fullPath);
    const pres = new pptxgen();
    pres.layout = "LAYOUT_16x9";
    const slide = mod.createSlide(pres, theme);
    if (slide) {
      console.log(`✓ ${fileName}`);
      pass++;
    } else {
      console.log(`✗ ${fileName} - createSlide returned null`);
      fail++;
      errors.push(fileName);
    }
  } catch (e) {
    console.log(`✗ ${fileName} - ERROR: ${e.message}`);
    fail++;
    errors.push(`${fileName}: ${e.message}`);
  }
}

console.log("");
console.log(`Total: ${fileNums.length}  |  Pass: ${pass}  |  Fail: ${fail}`);
if (fail > 0) {
  console.log("Errors:");
  errors.forEach(e => console.log("  - " + e));
  process.exit(1);
}
console.log("All 19 slides instantiated successfully!");
