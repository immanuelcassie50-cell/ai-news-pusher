const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const theme = {
  primary: '8B0000',
  secondary: '4A4A4A',
  accent: 'C41E3A',
  light: 'F5F5F5',
  bg: 'FAFAFA'
};

const problemSlides = {
  42: { title: '为什么需要对照试验', type: 'content' },
  47: { title: '安慰剂效应的机制', type: 'content' },
  83: { title: '滥用专业术语', type: 'content' },
  84: { title: '诉诸个案见证', type: 'content' },
  85: { title: '回避同行评议', type: 'content' },
  86: { title: '过度承诺效果', type: 'content' },
  88: { title: '利用情感需求', type: 'content' },
  89: { title: '缺乏可重复验证', type: 'content' },
  90: { title: '绑定利益集团', type: 'content' },
  91: { title: '健康类伪科学', type: 'content' },
  92: { title: '理财类伪科学', type: 'content' },
  93: { title: '教育类伪科学', type: 'content' },
  94: { title: '伪科学的心理机制', type: 'content' },
  95: { title: '如何识别伪科学', type: 'content' },
  96: { title: '个人防护策略', type: 'content' },
  97: { title: '课程总结', type: 'content' },
  99: { title: '参考资源', type: 'content' },
  102: { title: '实用工具推荐', type: 'content' },
  103: { title: '常见问题解答', type: 'content' },
  104: { title: '学习建议', type: 'content' },
  105: { title: '伪科学案例库', type: 'content' },
  106: { title: '理财骗局识别', type: 'content' },
  107: { title: '健康谣言粉碎', type: 'content' },
  109: { title: '教育伪科学鉴别', type: 'content' },
  110: { title: '量子科技骗局', type: 'content' },
  111: { title: '伪科学与迷信', type: 'content' },
  113: { title: '科学思维训练', type: 'content' },
  114: { title: '批判性思维工具', type: 'content' },
  116: { title: '案例分析练习', type: 'content' },
  128: { title: '综合检验', type: 'content' },
  142: { title: '课程金句', type: 'content' }
};

// 通用头部
function addHeader(slide, pres, title) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText(title, {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true
  });
}

// 通用底部装饰
function addFooter(slide, pres, index) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.45, w: 10, h: 0.175,
    fill: { color: theme.primary }
  });
}

Object.entries(problemSlides).forEach(([num, info]) => {
  const filePath = `D:/新课开发/自然科学/20.伪科学鉴别/授课PPT/slides/slide-${num}.js`;

  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';

  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addHeader(slide, pres, info.title);
  addFooter(slide, pres, num);

  // 通用内容区域
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 3.8,
    fill: { color: 'FFFFFF' },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.1
  });

  slide.addText(info.title + ' - 内容页', {
    x: 0.5, y: 1.2, w: 9, h: 3.8,
    fontSize: 24, fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'center', valign: 'middle'
  });

  // 生成JS文件
  const jsContent = `// slide-${num}.js - ${info.title}
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: '${info.type}',
  index: ${num},
  title: '${info.title}'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("${info.title}", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Content area
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 1.2, w: 9, h: 3.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.1
  });

  slide.addText("${info.title}", {
    x: 0.5, y: 1.2, w: 9, h: 3.8,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Footer
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.45, w: 10, h: 0.175,
    fill: { color: theme.primary }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-${num}-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
`;

  fs.writeFileSync(filePath, jsContent);
  console.log('Regenerated: slide-' + num + '.js');
});

console.log('Done!');
