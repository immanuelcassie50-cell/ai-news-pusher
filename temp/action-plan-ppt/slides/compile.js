// compile.js - 主编译入口（运行在 slides/ 目录内）
const pptxgen = require("pptxgenjs");
const path = require("path");
const fs = require("fs");
const { theme } = require("../design-system.js");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "行动计划·执行设计";
pres.author = "罗老师·行动学习2026";

// 当前目录就是 slides/ 目录
const slidesDir = __dirname;
const slideFiles = fs.readdirSync(slidesDir)
  .filter(f => /^slide-\d+\.js$/.test(f))
  .sort((a, b) => {
    // 自然排序：按文件名中的数字
    const na = parseInt(a.match(/\d+/)[0], 10);
    const nb = parseInt(b.match(/\d+/)[0], 10);
    return na - nb;
  });

console.log(`Found ${slideFiles.length} slide files`);

let successCount = 0;
let failCount = 0;
for (const f of slideFiles) {
  try {
    const mod = require(path.join(slidesDir, f));
    mod.createSlide(pres, theme);
    successCount++;
  } catch (e) {
    console.error(`FAIL: ${f} - ${e.message}`);
    failCount++;
  }
}

console.log(`\n成功 ${successCount} 个，失败 ${failCount} 个`);

const outFile = path.join(slidesDir, "output", "01_行动计划的设计和优化.pptx");
pres.writeFile({ fileName: outFile })
  .then(() => console.log(`\n已生成: ${outFile}`))
  .catch(e => console.error("Write failed:", e));
