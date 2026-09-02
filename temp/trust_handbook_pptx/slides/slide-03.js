// slide-03.js - Course Structure
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 3,
  title: '课程结构'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: theme.primary }
  });

  slide.addText("课程结构", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("3", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // PART 1 box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 4.4, h: 4.2,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 2 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 4.4, h: 0.6,
    fill: { color: theme.primary }
  });

  slide.addText("PART 1", {
    x: 0.5, y: 1.15, w: 4.4, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("认知与实操篇", {
    x: 0.7, y: 1.8, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("信任是怎么攒下来的", {
    x: 0.7, y: 2.15, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  slide.addText([
    { text: "前言：信任是培训师的生死之脉", options: { bullet: true, breakLine: true } },
    { text: "第一章：流量是别人的规则", options: { bullet: true, breakLine: true } },
    { text: "第二章：巨头复制不了客户托付", options: { bullet: true, breakLine: true } },
    { text: "第三章：培训现场信任存取款", options: { bullet: true, breakLine: true } },
    { text: "第四章：转介绍机制", options: { bullet: true, breakLine: true } },
    { text: "第五章：课前调研信任测试", options: { bullet: true, breakLine: true } },
    { text: "第六章：报价信任浓度", options: { bullet: true, breakLine: true } },
    { text: "第七章：拒绝建立护城河", options: { bullet: true } }
  ], {
    x: 0.7, y: 2.55, w: 4, h: 2.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });

  // Duration label for PART 1
  slide.addText("6小时", {
    x: 3.9, y: 4.9, w: 0.9, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle",
    fill: { color: theme.accent }
  });

  // PART 2 box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.1, w: 4.4, h: 4.2,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.1, w: 4.4, h: 0.6,
    fill: { color: theme.accent }
  });

  slide.addText("PART 2", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("心态与长期篇", {
    x: 5.3, y: 1.8, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("熬过看不见反馈的那几年", {
    x: 5.3, y: 2.15, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true
  });

  slide.addText([
    { text: "第八章：可以被超越不能被替代", options: { bullet: true, breakLine: true } },
    { text: "第九章：个人品牌vs培训机构", options: { bullet: true, breakLine: true } },
    { text: "第十章：信任的复利", options: { bullet: true, breakLine: true } },
    { text: "第十一章：守住信任不是价格", options: { bullet: true, breakLine: true } },
    { text: "第十二章：讲台下的样子", options: { bullet: true, breakLine: true } },
    { text: "第十三章：熬得住那几年", options: { bullet: true, breakLine: true } },
    { text: "第十四章：同行是生态守护者", options: { bullet: true, breakLine: true } },
    { text: "第十五章：家人不理解也是成本", options: { bullet: true } }
  ], {
    x: 5.3, y: 2.55, w: 4, h: 2.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });

  // Duration label for PART 2
  slide.addText("6小时", {
    x: 8.5, y: 4.9, w: 0.9, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle",
    fill: { color: theme.primary }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "424242",
    accent: "C62828",
    light: "FFCDD2",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
