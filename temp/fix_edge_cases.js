const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

const files = [45, 71, 83, 89, 90];

files.forEach(n => {
  const f = path + 'slide-' + String(n).padStart(2, '0') + '.js';
  let content = fs.readFileSync(f, 'utf8');
  const original = content;
  
  // Fix specific patterns that break parsing:
  
  // 1. Triple double-quotes: slide.addText(""", { -> slide.addText("\u201C", {
  content = content.replace(/addText\("""\s*,\s*\{/g, 'addText("\u201C", {');
  
  // 2. Chinese quotes inside string content: "text" -> use escaped quotes or different approach
  // For strings like slide.addText(""李阿姨..."", the inner curly quotes need escaping
  // Replace patterns like addText(""Chinese text"", with escaped unicode
  content = content.replace(/addText\(""([^"]+)""\s*,\s*\{/g, 'addText("\u201C$1\u201D", {');
  
  // 3. Backtick issues in template content
  // Replace backticks inside strings
  content = content.replace(/`([^`]+)`/g, '\`$1\`');
  
  if (content !== original) {
    fs.writeFileSync(f, content);
    console.log('Fixed slide-' + n);
  }
  
  // Verify
  try {
    new Function(content);
    console.log('  Syntax OK');
  } catch(e) {
    console.log('  Still broken:', e.message.substring(0, 60));
  }
});
