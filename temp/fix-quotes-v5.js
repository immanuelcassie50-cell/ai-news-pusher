// fix-quotes-v5.js
// 策略：直接逐个文件执行 node --check 找出语法错误的，
// 然后只针对那些文件做行级修复。
//
// 行级修复规则：
// 一行内出现 \", 紧跟在 {, [, ,, :, 空白 后——还原成 "
// 一行内出现 \" 紧跟着 ,, ), ], }, \n——还原成 "

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const dir = "D:\\Downloads\\萃取师赋能课\\08_授课PPT\\slides";
const files = fs.readdirSync(dir).filter((f) => /^slide-\d{3}\.js$/.test(f)).sort();

let fixedFiles = 0;
for (const f of files) {
  const fp = path.join(dir, f);
  // node --check
  let hasErr = false;
  try {
    execSync("node --check \"" + fp + "\"", { stdio: "pipe" });
  } catch (e) {
    hasErr = true;
  }
  if (!hasErr) continue;

  let s = fs.readFileSync(fp, "utf8");
  const before = s;
  // 把所有 \" 在 : { [ , 空白 后的还原成 "
  // 即：紧跟 [{\[,: ] 字符的 \" → "
  s = s.replace(/([\{\[\,\:\s])(\\\")/g, '$1"');
  // 把所有 \" 紧跟 ,, ), ], }, \n 还原成 "
  s = s.replace(/(\\\")([\s\,\)\]\}\;])/g, '"$2');

  if (s !== before) {
    fs.writeFileSync(fp, s);
    fixedFiles++;
    console.log("fixed " + f);
  }
}
console.log("Fixed " + fixedFiles + " files.");
