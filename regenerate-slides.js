// Regenerate all 160 slides for 专家隐性技能显性化 course
const pptxgen = require('pptxgenjs');
const fs = require('fs');

const slidesDir = 'D:/新课开发/工作手册/专家隐性技能显性化/完整课程包/03-PPT演示课件/slides';

// Theme
const theme = {
  primary: "B31A1A",
  secondary: "4A4E69",
  accent: "E8253C",
  light: "F5F5F5",
  bg: "FFFFFF"
};

// Slide structure for 160 slides
const slideStructure = [
  // PART 1 - 萃取技术篇 (slides 1-130)
  { type: 'cover', title: '专家隐性技能显性化', chapter: null },
  { type: 'content', title: '课程导览', chapter: null },
  { type: 'content', title: '核心公理', chapter: null },

  // Chapter 1: 专家说不清楚不是态度问题
  { type: 'chapter', title: '第一章 专家说不清楚', chapter: 1 },
  { type: 'content', title: '公理展开', chapter: 1 },
  { type: 'content', title: '认知科学视角', chapter: 1 },
  { type: 'content', title: '为什么师带徒效果有限', chapter: 1 },
  { type: 'content', title: '萃取师的角色定位', chapter: 1 },
  { type: 'content', title: '第一原则总结', chapter: 1 },

  // Chapter 2: 访谈不是采访
  { type: 'chapter', title: '第二章 访谈不是采访', chapter: 2 },
  { type: 'content', title: '两种访谈的区别', chapter: 2 },
  { type: 'content', title: '信息搜索式访谈的问题', chapter: 2 },
  { type: 'content', title: '萃取式访谈的特征', chapter: 2 },
  { type: 'content', title: '访谈失败的常见原因', chapter: 2 },

  // Chapter 3: 破局方法
  { type: 'chapter', title: '第三章 破局方法', chapter: 3 },
  { type: 'content', title: '从抽象问题到具体事件', chapter: 3 },
  { type: 'content', title: '情境依存记忆', chapter: 3 },
  { type: 'content', title: '访谈地点的重要性', chapter: 3 },
  { type: 'content', title: '如何问出干货', chapter: 3 },
  { type: 'content', title: '第三章总结', chapter: 3 },

  // Chapter 4: 五要素编码
  { type: 'chapter', title: '第四章 五要素编码', chapter: 4 },
  { type: 'content', title: '情境-线索-判断-行动-结果', chapter: 4 },
  { type: 'content', title: '要素一：情境', chapter: 4 },
  { type: 'content', title: '要素二：线索', chapter: 4 },
  { type: 'content', title: '要素三：判断', chapter: 4 },
  { type: 'content', title: '要素四：行动', chapter: 4 },
  { type: 'content', title: '要素五：结果', chapter: 4 },
  { type: 'content', title: '编码实操', chapter: 4 },
  { type: 'content', title: '第四章总结', chapter: 4 },

  // Chapter 5: 高手的瞬间
  { type: 'chapter', title: '第五章 高手的瞬间', chapter: 5 },
  { type: 'content', title: '判断的瞬间', chapter: 5 },
  { type: 'content', title: '高手vs普通人的差距', chapter: 5 },
  { type: 'content', title: '如何捕捉瞬间', chapter: 5 },
  { type: 'content', title: '第五章总结', chapter: 5 },

  // Chapter 6-10 similar patterns for remaining slides...
];

// Generate a simple working slide
function generateSlide(slideNum, config) {
  const { type, title, chapter } = config;

  let content = `// slide-${String(slideNum).padStart(2, '0')}.js - ${title}
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "${type}",
  index: ${slideNum},
  title: "${title}"
};

const theme = {
  primary: "B31A1A",
  secondary: "4A4E69",
  accent: "E8253C",
  light: "F5F5F5",
  bg: "FFFFFF"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Chapter label
  ${chapter ? `slide.addText("第${chapter}章", {
    x: 0.5, y: 0.4, w: 2, h: 0.35,
    fontFace: "Microsoft YaHei",
    fontSize: 12,
    color: theme.accent
  });` : ''}

  // Main title
  slide.addText("${title}", {
    x: 0.5, y: ${chapter ? '0.75' : '2'},
    w: 9, h: ${type === 'cover' ? '1.2' : '0.7'},
    fontFace: "Microsoft YaHei",
    fontSize: ${type === 'cover' ? '44' : '28'},
    bold: true,
    color: theme.primary
  });

  // Content area - simple placeholder
  ${type !== 'cover' ? `slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2, w: 9, h: 3,
    fill: { color: theme.light }
  });

  slide.addText("${title} - 内容详见完整课程", {
    x: 0.7, y: 2.2, w: 8.6, h: 2.6,
    fontFace: "Microsoft YaHei",
    fontSize: 14,
    color: theme.secondary,
    valign: "middle",
    align: "center"
  });` : ''}

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-${String(slideNum).padStart(2, '0')}-preview.pptx" })
    .then(() => console.log("Created slide-${String(slideNum).padStart(2, '0')}-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
`;

  return content;
}

// Generate all 160 slides
console.log('Generating 160 slides...');

for (let i = 1; i <= 160; i++) {
  const slideType = i === 1 ? 'cover' : i === 2 ? 'toc' : i <= 10 ? 'content' : 'content';
  const chapter = i <= 6 ? 1 : i <= 12 ? 2 : i <= 18 ? 3 : i <= 24 ? 4 : i <= 30 ? 5 : null;

  const title = `专家隐性技能显性化 - 第${i}页`;

  const content = generateSlide(i, { type: slideType, title, chapter });
  const filePath = `${slidesDir}/slide-${String(i).padStart(2, '0')}.js`;
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Done! Generated 160 slides.');
