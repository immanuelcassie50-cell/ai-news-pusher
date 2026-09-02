// slide-22.js - 案例引入：苏敏
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "persona-card", index: 22, title: "案例引入：苏敏" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("CASE STUDY", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("案例引入：苏敏", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("一个真实的、典型的行动计划失败现场。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧人物卡
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 3.5, h: 3.2,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  // 头像占位圆
  slide.addShape("ellipse", {
    x: 1.4, y: 2.05, w: 1.7, h: 1.7,
    fill: { color: theme.redDeep }, line: { color: theme.goldAccent, width: 2 }
  });
  slide.addText("SUMIN", {
    x: 1.4, y: 2.65, w: 1.7, h: 0.4,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true, charSpacing: 4, align: "center"
  });
  // 姓名
  slide.addText("苏 敏", {
    x: 0.5, y: 3.95, w: 3.5, h: 0.45,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });
  // 角色
  slide.addText("项目管理部负责人", {
    x: 0.5, y: 4.45, w: 3.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redLight, align: "center"
  });
  // 装饰
  slide.addShape("rect", {
    x: 1.8, y: 4.8, w: 0.9, h: 0.02,
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });

  // 右侧 - 背景介绍
  slide.addText("BACKGROUND", {
    x: 4.3, y: 1.85, w: 5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 4, bold: true
  });

  slide.addText("一次管理培训后的下午", {
    x: 4.3, y: 2.15, w: 5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 分割
  slide.addShape("rect", {
    x: 4.3, y: 2.6, w: 0.4, h: 0.03,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 描述段落
  slide.addText("苏敏是一家科技公司的项目管理部负责人。在一次管理培训结束的当天，她花了整整一个下午，制定了一份她自己非常满意的团队能力提升行动计划。", {
    x: 4.3, y: 2.75, w: 5.2, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 18
  });

  // 关键词
  ["目标清晰", "逻辑合理", "分工明确", "她很满意"].forEach((k, i) => {
    const x = 4.3 + (i % 2) * 2.65;
    const y = 3.85 + Math.floor(i / 2) * 0.5;
    slide.addShape("rect", {
      x: x, y: y, w: 2.4, h: 0.4,
      fill: { color: theme.paperWarm }, line: { color: theme.paperLine, width: 0.5 }
    });
    slide.addText("✓ " + k, {
      x: x + 0.1, y: y + 0.05, w: 2.2, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
  });

  // 底部问题
  slide.addShape("rect", {
    x: 4.3, y: 4.9, w: 5.2, h: 0.4,
    fill: { color: theme.paper }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("问题是：这份\"她很满意\"的计划，后来怎么样了？", {
    x: 4.3, y: 4.95, w: 5.2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
