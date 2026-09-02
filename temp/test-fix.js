const fs = require('fs');
const content = fs.readFileSync('D:/新课开发/工作手册/团队隐性角色识别与激活/完整课程包/03-授课PPT/slides/slide-13.js', 'utf8');
const line20 = content.split('\n')[19];
console.log('Input line 20:', JSON.stringify(line20));

let result = '';
let i = 0;

while (i < line20.length) {
  if (line20[i] === '\\' && i + 1 < line20.length) {
    result += line20[i] + line20[i + 1];
    i += 2;
    continue;
  }
  if (line20[i] === '`') {
    result += line20[i];
    i++;
    continue;
  }
  if (line20[i] === '"') {
    i++;
    let stringContent = '';
    while (i < line20.length) {
      if (line20[i] === '\\') {
        stringContent += line20[i] + (line20[i + 1] || '');
        i += 2;
      } else if (line20[i] === '"') {
        break;
      } else {
        stringContent += line20[i];
        i++;
      }
    }
    console.log('String content:', JSON.stringify(stringContent), 'includes quote:', stringContent.includes('"'));
    if (stringContent.includes('"')) {
      let escapedContent = '';
      let j = 0;
      while (j < stringContent.length) {
        if (stringContent[j] === '\\') {
          escapedContent += stringContent[j] + (stringContent[j + 1] || '');
          j += 2;
        } else if (stringContent[j] === '"') {
          escapedContent += '\\"';
          j++;
        } else {
          escapedContent += stringContent[j];
          j++;
        }
      }
      result += '"' + escapedContent + '"';
    } else {
      result += '"' + stringContent + '"';
    }
    if (i < line20.length && line20[i] === '"') {
      i++;
    }
  } else {
    result += line20[i];
    i++;
  }
}
console.log('Output line 20:', JSON.stringify(result));