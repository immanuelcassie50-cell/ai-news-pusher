const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/slide-45.js';
const buf = fs.readFileSync(path);

// Show bytes 820-850
console.log('Bytes 820-850:');
for (let i = 820; i < 850 && i < buf.length; i++) {
  process.stdout.write(buf[i].toString(16).padStart(2,'0') + ' ');
}
console.log();

// Show the exact sequence at 825
console.log('Byte at 825:', buf[825].toString(16));
console.log('Next 6 bytes starting at 825:', buf.slice(825, 831).toString('hex'));

// Interpret as ASCII
console.log('ASCII at 825:', buf.slice(825, 831).toString('ascii'));
