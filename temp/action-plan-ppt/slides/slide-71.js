// slide-71.js - 经典案例：健身房
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "case", index: 71, title: "经典案例：健身房" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("一个经典的研究发现", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("运动研究：什么样的健身房让人们真的坚持下来？", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左栏 - A 选项（好但远）
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 4.4, h: 3.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addText("更近的那家", {
    x: 0.7, y: 1.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });
  slide.addText("容易去的健身房", {
    x: 0.7, y: 1.95, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 特点
  slide.addShape("rect", {
    x: 0.7, y: 2.5, w: 0.3, h: 0.03,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  slide.addText("· 距离家很近", {
    x: 0.7, y: 2.6, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("· 设备普通", {
    x: 0.7, y: 2.9, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("· 物理摩擦小", {
    x: 0.7, y: 3.2, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  // 结果
  slide.addShape("rect", {
    x: 0.7, y: 3.7, w: 4, h: 1.0,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("实际坚持率", {
    x: 0.7, y: 3.7, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center"
  });
  slide.addText("高", {
    x: 0.7, y: 4.0, w: 4, h: 0.7,
    fontSize: 36, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center"
  });

  // 右栏 - M 选项（远但好）
  slide.addShape("rect", {
    x: 5.1, y: 1.4, w: 4.4, h: 3.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addText("更远的那家", {
    x: 5.3, y: 1.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });
  slide.addText("更好的健身房", {
    x: 5.3, y: 1.95, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addShape("rect", {
    x: 5.3, y: 2.5, w: 0.3, h: 0.03,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });

  slide.addText("· 距离家较远", {
    x: 5.3, y: 2.6, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("· 设备齐全、教练专业", {
    x: 5.3, y: 2.9, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("· 物理摩擦大", {
    x: 5.3, y: 3.2, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  slide.addShape("rect", {
    x: 5.3, y: 3.7, w: 4, h: 1.0,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("实际坚持率", {
    x: 5.3, y: 3.7, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center"
  });
  slide.addText("低", {
    x: 5.3, y: 4.0, w: 4, h: 0.7,
    fontSize: 36, fontFace: "Arial",
    color: theme.redDeep, bold: true, align: "center"
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("距离的物理摩擦，比对健康的认知程度更能预测实际锻炼行为", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
