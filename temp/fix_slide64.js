const fs = require('fs');
let content = fs.readFileSync('D:/2026年课程/AI工具+场景/AI时代系列课/AI赋能培训机构/授课PPT/slides/slide-64.js', 'utf8');

const isCJK = (ch) => ch && ch.charCodeAt(0) > 0x2E7F;

let result = '';
let inString = false;
let stringChar = '';
let i = 0;

while (i < content.length) {
    const c = content[i];

    if (!inString) {
        if (c === '"' || c === "'") {
            inString = true;
            stringChar = c;
            result += c;
        } else {
            result += c;
        }
    } else {
        if (c === '\\') {
            result += c;
            i++;
            if (i < content.length) result += content[i];
        } else if (c === stringChar) {
            // Regular quote ending the string
            inString = false;
            stringChar = '';
            result += c;
        } else if (c === '"' || c === "'") {
            // This is a quote but NOT the string delimiter
            // This could be a Chinese quote character
            const prev = content[i-1];
            const next = content[i+1];
            if (isCJK(prev) || isCJK(next)) {
                // Escape this quote that appears inside a string
                result += '\\' + c;
            } else {
                result += c;
            }
        } else {
            result += c;
        }
    }
    i++;
}

fs.writeFileSync('D:/2026年课程/AI工具+场景/AI时代系列课/AI赋能培训机构/授课PPT/slides/slide-64.js', result);
console.log('Fixed slide-64.js');