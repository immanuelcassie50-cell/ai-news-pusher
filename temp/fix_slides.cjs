const fs = require('fs');
const path = require('path');

const slidesDir = "D:/新课开发/工作手册/隐性风险识别与日常稽核手册(岗位级)/完整课程包/04-授课PPT/slides";

// Broken slides
const broken = ['03','04','08','09','10','11','17','18','19','20','21','22','25','27','38','45','46','52','55','56','57','58','64','73','74','79','80','81','82','83','85','86','88','92','96','97','98','101','103','104','105','106','107','109','110','111','112','113','117','127','128','130'];

let fixed = 0;
let errors = 0;

for (const num of broken) {
  const file = `slide-${num}.js`;
  const filepath = path.join(slidesDir, file);
  
  try {
    let content = fs.readFileSync(filepath, 'utf8');
    const original = content;
    
    // Replace problematic quote patterns
    // Pattern 1: Chinese text with mixed quotes like "text" or "text" - replace with fullwidth brackets
    // This regex finds strings that have Chinese chars with embedded quotes
    content = content.replace(/"([^"]*(?:[一-龥][^"]*)+)"/g, (match, inner) => {
      // Skip if already fixed or if it's a normal JS string
      if (inner.includes('「') || inner.includes('」')) return match;
      // Replace any remaining " or " with fullwidth brackets within the inner text
      const fixedInner = inner.replace(/"/g, '「').replace(/"/g, '」');
      return '"' + fixedInner + '"';
    });
    
    // Pattern 2: Standalone curly quote marks used as text (like the " character at line start)
    // Replace standalone " used as quote marks with regular quote or escaped sequence
    content = content.replace(/^(\s*)slide\.addText\(""/gm, '$1slide.addText("\\"");');
    content = content.replace(/^(\s*)slide\.addText\(""/gm, '$1slide.addText("「");');
    
    if (content !== original) {
      fs.writeFileSync(filepath, content, 'utf8');
      fixed++;
      console.log('Fixed:', file);
    }
  } catch (e) {
    errors++;
    console.error('Error:', file, e.message);
  }
}

console.log(`\nFixed: ${fixed}, Errors: ${errors}`);
