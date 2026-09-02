// fix-quotes-v6.js
// 1) node --check 扫描所有 slide-XXX.js，列出有语法错误的
// 2) 对每个有错文件，尝试"激进转义"：找出该文件中所有形如 addText({  ...  "X"Y"Z"  ... }) 的多引号行，
//    把中间 " 转义为 \"

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const dir = "D:\\Downloads\\萃取师赋能课\\08_授课PPT\\slides";
const files = fs.readdirSync(dir).filter((f) => /^slide-\d{3}\.js$/.test(f)).sort();

// 步骤 1：扫描
const errFiles = [];
for (const f of files) {
  const fp = path.join(dir, f);
  try {
    execSync("node --check \"" + fp + "\"", { stdio: "pipe" });
  } catch (e) {
    errFiles.push(f);
  }
}
console.log("Files with syntax errors: " + errFiles.length);
for (const f of errFiles) console.log("  " + f);
