const fs = require("fs");
const slidesDir = "D:/新课开发/行动学习2026/04-行动学习-创新解决方案/行动学习创新解决方案第二版/完整课程包/02_授课PPT/slides";

function fixJsContent(content) {
    const result = [];
    let i = 0;
    let n = content.length;
    let inStr = false;
    let strChar = null;
    
    while (i < n) {
        const c = content[i];
        
        if (!inStr) {
            if (c === String.fromCharCode(34) || c === String.fromCharCode(39)) {
                inStr = true;
                strChar = c;
                result.push(c);
                i++;
            } else {
                result.push(c);
                i++;
            }
        } else {
            if (c === String.fromCharCode(92)) {
                result.push(c);
                i++;
                if (i < n) {
                    result.push(content[i]);
                    i++;
                }
            } else if (c === strChar) {
                let backslashCount = 0;
                let j = result.length - 1;
                while (j >= 0 && result[j] === String.fromCharCode(92)) {
                    backslashCount++;
                    j--;
                }
                if (backslashCount % 2 === 1) {
                    result.push(c);
                    i++;
                } else {
                    if (i + 1 < n && /[a-zA-Z0-9]/.test(content[i+1])) {
                        result.push(String.fromCharCode(92) + c);
                        i++;
                    } else {
                        result.push(c);
                        inStr = false;
                        i++;
                    }
                }
            } else {
                result.push(c);
                i++;
            }
        }
    }
    
    return result.join("");
}

// Test on slide-03
const content = fs.readFileSync(slidesDir + "/slide-03.js", "utf-8");
const allLines = content.split(String.fromCharCode(10));
console.log("Line 44:", allLines[43]);
const fixed = fixJsContent(content);
const fixedLines = fixed.split(String.fromCharCode(10));
console.log("Fixed:", fixedLines[43]);

fs.writeFileSync(slidesDir + "/slide-03_fixed.js", fixed, "utf-8");
console.log("Saved to slide-03_fixed.js");