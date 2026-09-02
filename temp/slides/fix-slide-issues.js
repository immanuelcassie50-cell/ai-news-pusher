// Comprehensive fix script for slide-101.js to slide-174.js
// Fixes broken strings where Chinese quotes cause syntax errors

const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/CC/temp/slides';

const files = [];
for (let i = 101; i <= 174; i++) {
  const filePath = path.join(slidesDir, `slide-${i}.js`);
  if (fs.existsSync(filePath)) {
    files.push(filePath);
  }
}

let fixedCount = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Extract slideConfig.type
  const typeMatch = content.match(/type:\s*["'`](\w+)["'`]/);
  const slideType = typeMatch ? typeMatch[1] : null;
  const isCoverOrSection = slideType === 'cover' || slideType === 'section-divider';

  // ===== FIX 1: Fix broken template literals =====

  // Pattern: `xxx" followed by , or } or ) - premature termination by Chinese quote
  content = content.replace(/`([^`\n]+?)"(\s*[,}):])/g, '`$1`$2');

  // Pattern: align: `center", valign: `middle" -> align: "center", valign: "middle"
  content = content.replace(/align:\s*`([^`\n]+?)",\s*valign:\s*`([^`\n]+?)"/g, 'align: "$1", valign: "$2"');

  // Pattern: fontFace: `Arial", color: -> fontFace: "Arial", color:
  content = content.replace(/fontFace:\s*`([^`\n]+?)",\s*color:/g, 'fontFace: "$1", color:');

  // Pattern: color: "FFFFFF`, bold: -> color: "FFFFFF", bold:
  content = content.replace(/color:\s*"([^`"\n]+?)`,\s*bold:/g, 'color: "$1", bold:');

  // Pattern: color: `FFFFFF", bold: -> color: "FFFFFF", bold:
  content = content.replace(/color:\s*`([^`\n]+?)",\s*bold:/g, 'color: "$1", bold:');

  // Pattern: valign: `middle", } -> valign: "middle", }
  content = content.replace(/valign:\s*`([^`\n]+?)",\s*([}])/g, 'valign: "$1", $2');

  // Pattern: addText(`xxx", { -> addText(`xxx`, {
  content = content.replace(/addText\(`([^`\n]+?)",\s*\{/g, 'addText(`$1`, {' );

  // Pattern: "xxx` followed by , or } - string opened with " but Chinese quote closes
  // e.g., "问题定义（人）→ 分析（AI）→ 判断（人）` },
  content = content.replace(/"([^"\n]+?)`(\s*[,}])/g, '`$1`$2');

  // Pattern: : "xxx` -> : `xxx`
  content = content.replace(/:\s*"([^`"\n]+?)`(\s*[,}])/g, ': `$1`$2');

  // Pattern: slide.addText(`判断标准：" + item.std - broken concatenation
  content = content.replace(/`([^`\n]+?)"(\s*\+)/g, '`$1`$2');

  // Pattern: escaped quotes inside template literals - \" should become just "
  // But only when it causes issues
  content = content.replace(/\\"([^"\\]*)\\"/g, '"$1"');

  // Pattern: \" followed by ` (Chinese close) causing issues
  // e.g., \"锦上添花`，是`
  content = content.replace(/\\"([^`]+?)`,\s*是\s*`/g, '"$1"，是`');

  // ===== FIX 2: Remove page number badges from non-cover/non-section slides =====
  if (!isCoverOrSection) {
    // Remove oval badge + text badge pair
    content = content.replace(
      /slide\.addShape\(pres\.shapes\.OVAL,\s*\{\s*x:\s*9\.3,\s*y:\s*5\.1[^}]*\}\);\s*slide\.addText\("\d+",\s*\{\s*x:\s*9\.3,\s*y:\s*5\.1[^}]*\}\);/g,
      ''
    );

    // Remove standalone oval at page badge position
    content = content.replace(
      /slide\.addShape\(pres\.shapes\.OVAL,\s*\{\s*x:\s*9\.3,\s*y:\s*5\.1[^}]*\}\);/g,
      ''
    );

    // Remove standalone text badge at page badge position
    content = content.replace(
      /slide\.addText\("\d+",\s*\{\s*x:\s*9\.3,\s*y:\s*5\.1[^}]*\}\);/g,
      ''
    );
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
    console.log('Fixed: ' + path.basename(filePath) + ' (type: ' + slideType + ')');
  }
});

console.log('\nTotal files fixed: ' + fixedCount);
