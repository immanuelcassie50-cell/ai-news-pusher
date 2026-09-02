// slide-05.js - 我们的学习路径
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "content-flow", index: 5, title: "我们的学习路径" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("LEARNING PATH", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("我们的学习路径", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("从识别 → 理解 → 工具 → 实践，四个部分构成完整的循环。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 四个章节卡片
  const sections = [
    { num: "01", title: "可执行性标准", en: "CRITERIA", pages: "P.27-55", verb: "识别" },
    { num: "02", title: "B=MAP 模型", en: "FRAMEWORK", pages: "P.56-88", verb: "理解" },
    { num: "03", title: "四个设计工具", en: "TOOLS", pages: "P.89-139", verb: "设计" },
    { num: "04", title: "综合优化", en: "OPTIMIZE", pages: "P.140-161", verb: "应用" }
  ];

  sections.forEach((s, i) => {
    const x = 0.5 + i * 2.35;
    // 卡片
    slide.addShape("rect", {
      x: x, y: 1.95, w: 2.15, h: 2.8,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    // 大数字
    slide.addText(s.num, {
      x: x + 0.1, y: 2.0, w: 2, h: 0.7,
      fontSize: 48, fontFace: "Arial",
      color: theme.primary, bold: true
    });
    // 动词
    slide.addText(s.verb, {
      x: x + 0.2, y: 2.7, w: 1.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    // 分隔
    slide.addShape("rect", {
      x: x + 0.2, y: 3.05, w: 0.4, h: 0.02,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    // 英文小标签
    slide.addText(s.en, {
      x: x + 0.2, y: 3.15, w: 1.8, h: 0.25,
      fontSize: 9, fontFace: "Arial",
      color: theme.inkMute, bold: true, charSpacing: 4
    });
    // 标题
    slide.addText(s.title, {
      x: x + 0.2, y: 3.45, w: 1.8, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    // 页码
    slide.addText(s.pages, {
      x: x + 0.2, y: 4.25, w: 1.8, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.inkMute
    });
  });

  // 箭头连接
  for (let i = 0; i < 3; i++) {
    const x = 2.65 + i * 2.35;
    slide.addText(">", {
      x: x, y: 3.1, w: 0.2, h: 0.5,
      fontSize: 24, fontFace: "Arial",
      color: theme.primary, bold: true, align: "center"
    });
  }

  // 底部起止
  slide.addShape("rect", {
    x: 0.5, y: 4.95, w: 9, h: 0.35,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("开场 P.7-26  →  实战练习  →  模块总结 P.162-170", {
    x: 0.5, y: 4.99, w: 9, h: 0.28,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
