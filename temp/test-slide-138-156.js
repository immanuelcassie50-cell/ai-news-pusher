// 测试所有 19 个 slide 文件能否成功加载
const path = require("path");
const slidesDir = "D:/2026年课程/ai课2026整理/内训师引导技术/授课PPT/slides/";

const fileNums = [];
for (let i = 138; i <= 156; i++) {
  fileNums.push(i);
}

let pass = 0;
let fail = 0;
const errors = [];

for (const num of fileNums) {
  const fileName = `slide-${String(num).padStart(3, "0")}.js`;
  const fullPath = path.join(slidesDir, fileName);
  try {
    delete require.cache[require.resolve(fullPath)];
    const mod = require(fullPath);
    if (mod && typeof mod.createSlide === "function" && mod.slideConfig) {
      console.log(`✓ ${fileName} - title: ${mod.slideConfig.title}`);
      pass++;
    } else {
      console.log(`✗ ${fileName} - missing createSlide or slideConfig`);
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
console.log(`Total: ${fileNums.length}`);
console.log(`Pass: ${pass}`);
console.log(`Fail: ${fail}`);
if (errors.length > 0) {
  console.log("");
  console.log("Errors:");
  errors.forEach(e => console.log("  - " + e));
  process.exit(1);
}
console.log("");
console.log("All 19 files loaded successfully!");
