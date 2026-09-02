const fs = require('fs');
const path = require('path');

function jsStringEscape(s) {
    const backslash = String.fromCharCode(92);
    return s.split(backslash).join(backslash + backslash).split('"').join(backslash + '"');
}

function fixFile(content) {
    const result = [];
    let i = 0;
    const n = content.length;
    const closingChars = new Set([')', ',', '.', ':', ';', '+', '-', '*', '/', ']', '}', '=', ' ', String.fromCharCode(10), String.fromCharCode(9)]);
    
    while (i < n) {
        const c = content[i];
        if (c === "'" && content[i+1] !== '') {
            let j = i + 1;
            const stringContent = [];
            
            while (j < n) {
                if (content[j] === '') {
                    stringContent.push(content[j]);
                    stringContent.push(content[j+1]);
                    j += 2;
                } else if (content[j] === "'") {
                    const nextC = content[j+1];
                    if (nextC && closingChars.has(nextC)) {
                        break;
                    } else {
                        const prev = stringContent[stringContent.length - 1];
                        const prevIsCJK = prev && prev.charCodeAt(0) > 0x4E00 && prev.charCodeAt(0) < 0x9FFF;
                        const nextIsCJK = nextC && nextC.charCodeAt(0) > 0x4E00 && nextC.charCodeAt(0) < 0x9FFF;
                        if (prevIsCJK && nextIsCJK) {
                            stringContent.push(content[j]);
                            j++;
                            continue;
                        }
                        stringContent.push(content[j]);
                        j++;
                    }
                } else {
                    stringContent.push(content[j]);
                    j++;
                }
            }
            
            const escapedContent = jsStringEscape(stringContent.join(''));
            result.push('"' + escapedContent + '"');
            i = j + 1;
        } else {
            result.push(c);
            i++;
        }
    }
    return result.join('');
}

const slidesDir = 'D:/新课开发/工作手册/商业讲师信任护城河/完整课程包/03-PPT/slides/';
let fixedCount = 0;
for (let i = 1; i <= 135; i++) {
    const fname = 'slide-' + String(i).padStart(2,'0') + '.js';
    const fpath = path.join(slidesDir, fname);
    if (!fs.existsSync(fpath)) continue;
    
    const content = fs.readFileSync(fpath, 'utf8');
    const original = content;
    const fixed = fixFile(content);
    
    if (fixed !== original) {
        fs.writeFileSync(fpath, fixed, 'utf8');
        fixedCount++;
        console.log('Fixed: ' + fname);
    }
}
console.log('Total: ' + fixedCount);
