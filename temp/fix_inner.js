const fs = require("fs");
const path = require("path");
const slidesDir = "D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides";
const files = fs.readdirSync(slidesDir).filter(f => f.endsWith(".js") && f !== "compile.js");
files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;
  // Replace quote-Chinese-quote patterns that are inside strings
  // Pattern: " followed by Chinese, then later " followed by more content
  // We need to escape quotes that appear between Chinese characters
  let fixed = content.replace(/"([^"]*[\u4e00-\u9fa5][^"]*)"([^"]*)"([\u4e00-\u9fa5][^"]*)"/g, (match, g1, g2, g3) => {
    return "\\"" + g1 + "\\"" + g2 + "\\"" + g3 + "\\"";
  });
  if (fixed !== original) {
    fs.writeFileSync(filePath, fixed, "utf8");
    console.log("Fixed:", file);
  }
});
console.log("Done");
