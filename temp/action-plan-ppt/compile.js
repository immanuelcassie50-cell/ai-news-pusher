// compile.js - 主编译入口
const pptxgen = require("pptxgenjs");
const path = require("path");
const fs = require("fs");
const { theme } = require("./design-system.js");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "行动计划·执行设计";
pres.author = "罗老师·行动学习2026";

// 读取所有 slide 文件
const slidesDir = path.join(__dirname, "slides");
const slideFiles = fs.readdirSync(slidesDir)
  .filter(f => /^slide-\d+\.js$/.test(f))
  .sort();

console.log(`Found ${slideFiles.length} slide files`);

for (const f of slideFiles) {
  try {
    const mod = require(path.join(slidesDir, f));
    mod.createSlide(pres, theme);
    console.log(`OK: ${f}`);
  } catch (e) {
    console.error(`FAIL: ${f} - ${e.message}`);
  }
}

const outFile = path.join(slidesDir, "output", "01_行动计划的设计和优化.pptx");
pres.writeFile({ fileName: outFile })
  .then(() => console.log(`\nWrote: ${outFile}`))
  .catch(e => console.error("Write failed:", e));
