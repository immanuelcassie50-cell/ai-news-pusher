// slide-93.js - 为什么有效：启动是最大阻力
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 93, title: "为什么有效" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具一 · 最小启动动作", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("为什么这件事有效", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 大金句
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 9, h: 1.1,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("开始是行动中阻力最大的一步。", {
    x: 0.7, y: 1.3, w: 8.6, h: 0.45,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("一旦开始，惯性往往会把你带着继续完成。", {
    x: 0.7, y: 1.78, w: 8.6, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 三栏内容
  const points = [
    { num: "1", title: "大脑的判断", desc: "评估的不是整件事有多麻烦，而是开始那一步有多麻烦" },
    { num: "2", title: "开始是最大阻力", desc: "开始的那一步是轻松的，大脑就不太容易拒绝" },
    { num: "3", title: "惯性效应", desc: "一旦你做了第一步，很多时候会自然地继续" }
  ];

  points.forEach((p, i) => {
    const x = 0.5 + i * 3.1;
    // 卡片
    slide.addShape("rect", {
      x: x, y: 2.5, w: 2.9, h: 2.2,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
    // 数字徽章
    slide.addShape("ellipse", {
      x: x + 0.2, y: 2.7, w: 0.4, h: 0.4,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(p.num, {
      x: x + 0.2, y: 2.7, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(p.title, {
      x: x + 0.7, y: 2.7, w: 2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, valign: "middle"
    });
    // 描述
    slide.addText(p.desc, {
      x: x + 0.2, y: 3.3, w: 2.5, h: 1.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 底部小字
  slide.addText("计划逻辑的翻转：把\"开始\"从\"完成\"里分离出来", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
