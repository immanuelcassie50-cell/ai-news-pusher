// Comprehensive fix script for all remaining corrupted slides
// Fixes unescaped quotes inside strings

const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/专精特新/03核心技术人才招募与保留对抗大厂虹吸效应/03演示文稿/slides';

const fixes = {
  'slide-09.js': [
    [/"升值\\""/, '"升值"']
  ],
  'slide-10.js': [
    [/"我们真正需要的人才\\""$/, '"我们真正需要的人才"']
  ],
  'slide-11.js': [
    [/"我们解决的问题是大厂不愿意碰的\\""/, '"我们解决的问题是大厂不愿意碰的"']
  ],
  'slide-18.js': [
    [/"技术创新\\""/, '"技术创新"']
  ],
  'slide-21.js': [
    [/"请分享一个你快速学习新技术的经历。\\""/, '"请分享一个你快速学习新技术的经历。"']
  ],
  'slide-23.js': [
    [/smes = "中低"/, 'smes: "中低"']
  ],
  'slide-29.js': [
    [/"镀金者"\\n/, '"镀金者"\n']
  ],
  'slide-30.js': [
    [/"镀金者\\""/, '"镀金者"']
  ],
  'slide-32.js': [
    [/"你理想中的公司是什么样的？"（/, '"你理想中的公司是什么样的？"\n']
  ],
  'slide-42.js': [
    [/"精通Java、Python、Go等"（/, '"精通Java、Python、Go等"']
  ],
  'slide-45.js': [
    [/"优雅告别，保留可能"\\""/, '"优雅告别，保留可能"']
  ],
  'slide-62.js': [
    [/"你最近三次代码review都超时\\""/, '"你最近三次代码review都超时"']
  ]
};

Object.entries(fixes).forEach(([file, replacements]) => {
  const filePath = path.join(slidesDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`✗ ${file}: Not found`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  replacements.forEach(([pattern, replacement]) => {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${file}: Applied fixes`);
  } else {
    console.log(`○ ${file}: No changes needed`);
  }
});

console.log('\nDone.');