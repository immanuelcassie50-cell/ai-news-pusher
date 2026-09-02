// compile.js - 编译所有 slide 为最终 PPTX
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "罗宏伟";
pres.title = "行动学习 - 创新解决方案";
pres.subject = "不是要创新，是要找到真正有效的解法";
pres.company = "行动学习2026";

const theme = {
  primary:   "6B0F0F",  // 深酒红
  secondary: "3D3D3D",  // 深灰
  accent:    "B8232C",  // 砖红
  light:     "D4C5BE",  // 浅灰红
  bg:        "F5F0EC"   // 米白底
};

// 收集所有 slide 文件
const slidesDir = __dirname;
const files = fs.readdirSync(slidesDir)
  .filter(f => /^\d{2,3}_.+\.js$/.test(f))
  .filter(f => !f.startsWith('_TEMPLATE'))
  .sort((a, b) => {
    const na = parseInt(a.match(/^(\d+)/)[1]);
    const nb = parseInt(b.match(/^(\d+)/)[1]);
    return na - nb;
  });

console.log(`Found ${files.length} slide files`);

let successCount = 0;
let failCount = 0;
const failures = [];

for (const file of files) {
  const num = file.match(/^(\d+)/)[1];
  try {
    const mod = require(path.join(slidesDir, file));
    if (typeof mod.createSlide === 'function') {
      mod.createSlide(pres, theme);
      successCount++;
    } else {
      failCount++;
      failures.push(`${file}: createSlide not found`);
    }
  } catch (e) {
    failCount++;
    failures.push(`${file}: ${e.message}`);
    console.error(`FAIL: ${file} - ${e.message}`);
  }
}

console.log(`\nLoaded: ${successCount} success, ${failCount} fail`);
if (failures.length > 0) {
  console.log("\nFailures:");
  failures.forEach(f => console.log("  " + f));
}

// 输出 PPTX
const outputPath = path.join(slidesDir, "output", "行动学习-创新解决方案.pptx");
pres.writeFile({ fileName: outputPath }).then(() => {
  console.log(`\n✅ PPTX saved: ${outputPath}`);
  console.log(`Total slides: ${successCount}`);
}).catch(e => {
  console.error(`\n❌ Save failed: ${e.message}`);
  process.exit(1);
});
