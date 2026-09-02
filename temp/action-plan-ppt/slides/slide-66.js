// slide-66.js - 动机的误解：讲道理 ≠ 持续高动机
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "contrast", index: 66, title: "动机的误解" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("关于动机的常见误解", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("以为把道理讲清楚了，动机就提升了", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左栏 - 错误假设
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 4.4, h: 3.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 4.4, h: 0.5,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("一个常见的隐含假设", {
    x: 0.7, y: 1.45, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("讲清道理", {
    x: 0.7, y: 2.05, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  slide.addShape("ellipse", {
    x: 2.3, y: 2.55, w: 0.3, h: 0.3,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("→", {
    x: 2.3, y: 2.55, w: 0.3, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("持续高动机", {
    x: 0.7, y: 2.95, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  slide.addShape("rect", {
    x: 0.7, y: 3.5, w: 0.3, h: 0.03,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });

  slide.addText("这种假设忽略了：", {
    x: 0.7, y: 3.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("· 动机是情绪化的", {
    x: 0.7, y: 3.9, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("· 今天的理解，不等于明天的行动", {
    x: 0.7, y: 4.2, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("· 疲惫时，道理挡不住惰性", {
    x: 0.7, y: 4.5, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 右栏 - 真实情况
  slide.addShape("rect", {
    x: 5.1, y: 1.4, w: 4.4, h: 3.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.4, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("真实情况", {
    x: 5.3, y: 1.45, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("理解重要性", {
    x: 5.3, y: 2.05, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addShape("ellipse", {
    x: 7.1, y: 2.55, w: 0.3, h: 0.3,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("≠", {
    x: 7.1, y: 2.55, w: 0.3, h: 0.3,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("持续高动机", {
    x: 5.3, y: 2.95, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape("rect", {
    x: 5.3, y: 3.5, w: 0.3, h: 0.03,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("现实场景：", {
    x: 5.3, y: 3.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("你完全知道锻炼对身体好", {
    x: 5.3, y: 3.9, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("你完全理解它的重要性", {
    x: 5.3, y: 4.2, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("但疲惫的周五晚上，仍然不想去", {
    x: 5.3, y: 4.5, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("讲道理可以建立认知，但建立认知 ≠ 建立持续行动", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
