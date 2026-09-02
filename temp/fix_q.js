const fs = require("fs");
const path = require("path");

const slidesDir = "D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/03-授课PPT/slides";

const problematicSlides = ["slide-08.js", "slide-10.js", "slide-11.js", "slide-13.js",
  "slide-14.js", "slide-15.js", "slide-16.js", "slide-17.js", "slide-19.js", "slide-20.js",
  "slide-26.js", "slide-27.js", "slide-30.js"];

problematicSlides.forEach(slideFile => {
  const filePath = path.join(slidesDir, slideFile);
  if (!fs.existsSync(filePath)) {
    console.log("Not found:", slideFile);
    return;
  }

  let content = fs.readFileSync(filePath, "utf8");
  const original = content;
  let result = "";
  let i = 0;

  while (i < content.length) {
    if (content.substring(i, i+9) === "addText(") {
      result += content.substring(i, i+9);
      i += 9;
      while (i < content.length && /\s/.test(content[i])) {
        result += content[i];
        i++;
      }
      if (content[i] === "\"") { result += content[i]; i++; }
      while (i < content.length) {
        if (content[i] === "\\\\") { result += content[i]; result += content[i+1]; i += 2; continue; }
        if (content[i] === "\"") {
          const rest = content.substring(i+1);
          if (/^\s*,?\s*[\n{]/.test(rest)) { result += content[i]; i++; break; }
          else { result += "\\\\\""; i++; continue; }
        }
        result += content[i];
        i++;
      }
      continue;
    }
    result += content[i];
    i++;
  }

  if (result !== original) {
    fs.writeFileSync(filePath, result, "utf8");
    console.log("Fixed:", slideFile);
  }
});
console.log("Done");
