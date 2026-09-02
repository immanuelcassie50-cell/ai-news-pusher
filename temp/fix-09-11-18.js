const fs = require('fs');
const slidesDir = 'D:/新课开发/专精特新/03核心技术人才招募与保留对抗大厂虹吸效应/03演示文稿/slides';

// Fix slide-09
let c = fs.readFileSync(slidesDir + '/slide-09.js', 'utf8');
// Fix: \"升值\",\"  -> should be \"升值\"
// The pattern is: \ " 升 值 \ " \ " ,  (8 chars after 升值 starts)
// Should be: \ " 升 值 \ " \ " \ " ,  (9 chars)
c = c.replace(/"升值"",$/m, '"升值"",');
fs.writeFileSync(slidesDir + '/slide-09.js', c);
console.log('slide-09 fixed');

// Fix slide-11
c = fs.readFileSync(slidesDir + '/slide-11.js', 'utf8');
c = c.replace(/"我们解决的问题是大厂不愿意碰的"",/g, '"我们解决的问题是大厂不愿意碰的"",');
fs.writeFileSync(slidesDir + '/slide-11.js', c);
console.log('slide-11 fixed');

// Fix slide-18
c = fs.readFileSync(slidesDir + '/slide-18.js', 'utf8');
c = c.replace(/"我们重视技术创新"",/g, '"我们重视技术创新"",');
fs.writeFileSync(slidesDir + '/slide-18.js', c);
console.log('slide-18 fixed');

console.log('Done');