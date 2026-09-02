const fs = require('fs');
const path = require('path');

const dir = 'D:/新课开发/营销/AI时代的营销/02_差异化声音重建：让内容无法被竞争对手复制/授课PPT/slides/';
const files = [
  'slide-29.js', 'slide-30.js', 'slide-31.js', 'slide-32.js',
  'slide-37.js', 'slide-38.js', 'slide-39.js', 'slide-40.js',
  'slide-41.js', 'slide-42.js', 'slide-43.js', 'slide-44.js',
  'slide-45.js', 'slide-50.js', 'slide-51.js'
];

files.forEach(f => {
  const filePath = path.join(dir, f);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // First, let's see what we're dealing with
    // Replace patterns like: "text"text"text" -> "text'text'text"
    // This handles the case where inner quotes are surrounded by Chinese text
    
    // Pattern: Chinese + " + Chinese -> Chinese + ' + Chinese  
    content = content.replace(/([\u4e00-\u9fa5])"([\u4e00-\u9fa5])/g, "$1'$2");
    
    // Pattern: Chinese + " + punctuation after Chinese text
    content = content.replace(/([\u4e00-\u9fa5])"([,，。])/g, "$1'$2");
    
    // Pattern: punctuation before Chinese + " + Chinese
    content = content.replace(/([,，])"([\u4e00-\u9fa5])/g, "$1'$2");
    
    // Fix trailing quote issue: "", { -> ', {
    content = content.replace(/""\s*,/g, "'\",");
    
    fs.writeFileSync(filePath, content);
    console.log('Fixed: ' + f);
  }
});

console.log('Done!');
