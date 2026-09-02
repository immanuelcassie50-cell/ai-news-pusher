// slide-126.js - 背后研究：Gollwitzer + 数据
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "research", index: 126, title: "背后研究" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具四 · 执行意图", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("这背后有扎实的研究", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 人物介绍
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 4.0, h: 1.6,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 4.0, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("研究者", {
    x: 0.7, y: 1.25, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // 头像圆
  slide.addShape("ellipse", {
    x: 0.7, y: 1.75, w: 0.8, h: 0.8,
    fill: { color: theme.redLight }, line: { color: theme.redLight }
  });
  slide.addText("PG", {
    x: 0.7, y: 1.75, w: 0.8, h: 0.8,
    fontSize: 22, fontFace: "Arial",
    color: theme.redDeep, bold: true, align: "center", valign: "middle"
  });

  slide.addText("Peter Gollwitzer", {
    x: 1.65, y: 1.75, w: 2.7, h: 0.3,
    fontSize: 14, fontFace: "Arial",
    color: theme.ink, bold: true
  });
  slide.addText("彼得·格尔维策", {
    x: 1.65, y: 2.05, w: 2.7, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("社会心理学家", {
    x: 1.65, y: 2.35, w: 2.7, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 关键数据
  slide.addShape("rect", {
    x: 4.7, y: 1.2, w: 4.8, h: 1.6,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 2 }
  });
  slide.addText("关键发现", {
    x: 4.9, y: 1.3, w: 4.4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("2-3×", {
    x: 4.9, y: 1.6, w: 2, h: 0.7,
    fontSize: 48, fontFace: "Arial",
    color: theme.primary, bold: true
  });
  slide.addText("完成率提升", {
    x: 6.9, y: 1.85, w: 2.4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("对比仅说\"我想做 X\"的组", {
    x: 6.9, y: 2.2, w: 2.4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 研究历程
  slide.addShape("rect", {
    x: 0.5, y: 3.0, w: 9, h: 1.8,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.0, w: 9, h: 0.4,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("研究历程", {
    x: 0.7, y: 3.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  const studies = [
    { num: "1", title: "if-then planning 格式", desc: "Gollwitzer 提出 \"当[情境]，我做[行为]\" 的标准化执行意图格式" },
    { num: "2", title: "跨人群跨任务", desc: "数十年的研究，跨越不同人群和任务类型，反复验证有效" },
    { num: "3", title: "行为促进工具", desc: "被广泛接受为一种有效的行为促进工具，应用于健康、教育、管理等" }
  ];

  studies.forEach((s, i) => {
    const y = 3.55 + i * 0.4;
    slide.addShape("ellipse", {
      x: 0.8, y: y, w: 0.3, h: 0.3,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(s.num, {
      x: 0.8, y: y, w: 0.3, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.title, {
      x: 1.2, y: y, w: 1.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, valign: "middle"
    });
    slide.addText(s.desc, {
      x: 3.0, y: y, w: 6.3, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, valign: "middle"
    });
  });

  // 底部
  slide.addText("扎实的实证基础 · 不是直觉，是反复验证的发现", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
