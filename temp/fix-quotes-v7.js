// fix-quotes-v7.js
// 对每个有错文件做行级修复：
// 逐行扫描；记录当前在 JS 字符串字面量内外状态。
// 在字符串内部时，遇到 " 不应终止——把它转义。

const fs = require("fs");
const path = require("path");

const dir = "D:\\Downloads\\萃取师赋能课\\08_授课PPT\\slides";
const targets = ["slide-037.js", "slide-039.js", "slide-064.js", "slide-065.js", "slide-093.js", "slide-100.js", "slide-108.js"];

for (const f of targets) {
  const fp = path.join(dir, f);
  const before = fs.readFileSync(fp, "utf8");

  // 简化策略：只修含"多余 ASCII 引号"的行：
  // 启发：行内 \" 已经被转义，但还有没转义的 " 紧跟在 : 后的开引号或中文后
  // 实际模式：{ ..., "A"B"C"  ... } 或 "A" B "C"
  //
  // 通用规则（v7 暴力版）：
  //   把所有 " 紧跟在 ASCII 字母 / 中文 / 数字 之后的，转义为 \"
  //   把所有 " 紧跟在空白 / 符号 / 标点 + ASCII 字母 / 中文 / 数字 之前的，转义为 \"
  //
  // 简化为：所有出现在两个 " 之间、且中间是中文/数字/字母的，都把第一个 " 改成 \"

  const lines = before.split("\n");
  const out = [];
  for (const line of lines) {
    // 找出所有 " 位置（忽略已经 \" 中的 "）
    const positions = [];
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '"' && line[i - 1] !== "\\") positions.push(i);
    }
    if (positions.length < 3) {
      out.push(line);
      continue;
    }
    // 启发：第一个 " 之前是 (, [, ,, : 或空白；最后一个 " 之后是 ), ], ,, ;, 空白, 行末
    const first = positions[0];
    const last = positions[positions.length - 1];
    const beforeChars = line.slice(Math.max(0, first - 3), first);
    const afterChars = line.slice(last + 1);
    const isOpen = /[\s\(\[\,\.\=\:\{\}\+\*\?\&\|]?$/.test(beforeChars);
    const isClose = afterChars === "" || /^[\s\)\]\,\;\}\+\*\?\&\|]/.test(afterChars);
    if (!isOpen || !isClose) {
      out.push(line);
      continue;
    }
    // 全部转义中间的 "
    let newLine = "";
    let lastIdx = 0;
    for (let k = 0; k < positions.length; k++) {
      const idx = positions[k];
      newLine += line.slice(lastIdx, idx);
      if (k === 0 || k === positions.length - 1) {
        newLine += '"';
      } else {
        newLine += '\\"';
      }
      lastIdx = idx + 1;
    }
    newLine += line.slice(lastIdx);
    out.push(newLine);
  }
  const after = out.join("\n");
  if (after !== before) {
    fs.writeFileSync(fp, after);
    console.log("fixed " + f);
  } else {
    console.log("no change " + f);
  }
}
