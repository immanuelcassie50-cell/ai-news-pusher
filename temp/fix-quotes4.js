const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/政治学/16_冷战重访-意识形态对抗的政治遗产/PPT/slides';
const files = [
  'slide-06.js', 'slide-16.js', 'slide-17.js', 'slide-18.js', 'slide-19.js',
  'slide-21.js', 'slide-25.js', 'slide-73.js', 'slide-74.js', 'slide-92.js',
  'slide-108.js', 'slide-109.js', 'slide-110.js', 'slide-111.js', 'slide-112.js',
  'slide-127.js', 'slide-135.js'
];

files.forEach(file => {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Chinese curly quotes with single quotes
  content = content.replace(/\u201C/g, "'");  // "
  content = content.replace(/\u201D/g, "'");  // "

  fs.writeFileSync(filePath, content);
  console.log('Fixed:', file);
});
