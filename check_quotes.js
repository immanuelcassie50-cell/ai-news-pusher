const fs = require('fs');
const path = require('path');

const dir = 'D:\\新课开发\\行动学习2026\\冲突引导力-从情绪摩擦到团队共赢\\完整课程包\\02-授课PPT\\slides';
const file = path.join(dir, 'slide-101.js');
const content = fs.readFileSync(file, 'utf8');
const line40 = content.split('\n')[39];
console.log('Line 40:', line40);
console.log('Char codes:', [...line40].map(c => c.charCodeAt(0).toString(16)));

// Also print all unique characters that are NOT standard ASCII
const allChars = new Set();
content.match(/[^\x00-\x7F]/g)?.forEach(c => allChars.add(c));
console.log('Non-ASCII chars found:', [...allChars]);
