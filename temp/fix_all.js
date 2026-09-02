const fs = require('fs');
const path = require('path');

const dir = "D:/新课开发/工作手册/高潜员工加速成长路径设计/完整课程包/02-授课PPT/slides";

const fixes = {
  'slide-26.js': [
    [/\x5c'/g, "'"],  // \' -> '
  ],
  'slide-28.js': [
    [/\x5c'/g, "'"],
  ],
  'slide-29.js': [
    [/\x5c'/g, "'"],
  ],
  'slide-38.js': [
    [/\x5c'/g, "'"],
  ],
  'slide-63.js': [
    [/'他人承担责任'/g, '"他人承担责任"'],
    [/'独立承担责任'/g, '"独立承担责任"'],
  ],
  'slide-74.js': [
    [/'绝对化表述'/g, '"绝对化表述"'],
  ],
  'slide-88.js': [
    [/"今天找你来/g, '"今天找你来'],
    [/项目进展"/g, '项目进展"'],
  ],
  'slide-91.js': [
    [/'定价'/g, '"定价"'],
  ],
  'slide-93.js': [
    [/'''/g, '"'],
  ],
  'slide-101.js': [
    [/''/g, '"'],
  ],
};

Object.entries(fixes).forEach(([file, replacements]) => {
  const fp = path.join(dir, file);
  if (!fs.existsSync(fp)) return;
  
  let content = fs.readFileSync(fp, 'utf8');
  replacements.forEach(([from, to]) => {
    content = content.replace(from, to);
  });
  fs.writeFileSync(fp, content);
  console.log('Fixed: ' + file);
});
