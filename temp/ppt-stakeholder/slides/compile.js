// compile.js - 主控编译脚本
// 合并所有 slide-XX.js 到最终 PPTX

const pptxgen = require("pptxgenjs");
const path = require("path");
const fs = require("fs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "利益相关方深度实战 授课PPT";
pres.author = "行动学习2026";
pres.company = "行动学习课程组";

// 主题（保持与 design-system 一致）
const THEME = {
  primary:   "8B1A1A",
  secondary: "3A3A3A",
  accent:    "C53030",
  light:     "D4A5A0",
  bg:        "F5F0EA",
  dark:      "2A2A2A",
  mid:       "6B6B6B",
  border:    "B89A92",
  highlight: "F2E1D9",
  white:     "FFFFFF"
};

const TOTAL_PAGES = 170;
const slideDir = __dirname;

// 加载所有 slide
for (let i = 1; i <= TOTAL_PAGES; i++) {
  const num = String(i).padStart(3, '0');
  const slidePath = path.join(slideDir, 'slide-' + num + '.js');
  if (!fs.existsSync(slidePath)) {
    console.warn('⚠️  缺失: slide-' + num + '.js');
    continue;
  }
  try {
    const mod = require(slidePath);
    mod.createSlide(pres, THEME, i, TOTAL_PAGES);
    process.stdout.write('✓');
  } catch (e) {
    console.error('\n❌ 编译错误: slide-' + num + '.js');
    console.error(e.message);
    throw e;
  }
  if (i % 30 === 0) console.log(' [' + i + '/' + TOTAL_PAGES + ']');
}

const outDir = path.join(slideDir, 'output');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const outFile = path.join(outDir, '利益相关方深度实战_授课PPT.pptx');
pres.writeFile({ fileName: outFile }).then(function (name) {
  console.log('\n\n✅ 已生成: ' + name);
});
