const fs = require('fs');
const raw = fs.readFileSync('D:/2026年课程/AI工具+场景/AI时代系列课/AI赋能培训机构/授课PPT/slides/slide-64.js');
const lines = raw.split(Buffer.from([10]));
const line28 = lines[27];
console.log('Line 28 bytes 20-55:');
for (let i = 20; i < 55; i++) {
    if (line28[i] !== undefined) {
        console.log('  ' + i + ': ' + line28[i] + ' (0x' + line28[i].toString(16) + ')');
    }
}