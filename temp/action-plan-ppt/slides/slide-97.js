// slide-97.js - 定义与要求：两条件
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 97, title: "定义与要求" };

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
  slide.addText("怎么定义最小启动动作", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("需要满足两个条件", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 两个条件
  const conditions = [
    {
      num: "01",
      title: "具体的物理或认知动作",
      desc: "不是描述\"朝向目标前进\"，而是一个明确的、可执行的动作。打开文件、发出邀请、填一个字段。",
      example: "✓ \"打开评估模板，填日期\"",
      bad: "✗ \"开始整理思路\""
    },
    {
      num: "02",
      title: "状态不好时也能做",
      desc: "小到即使在疲惫、忙碌、低能量的状态下，也几乎不会拒绝去做。",
      example: "✓ \"填一个日期\"",
      bad: "✗ \"完整梳理 10 项内容\""
    }
  ];

  conditions.forEach((c, i) => {
    const x = 0.5 + i * 4.6;
    // 卡片
    slide.addShape("rect", {
      x: x, y: 1.5, w: 4.4, h: 3.3,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
    // 顶部色条
    slide.addShape("rect", {
      x: x, y: 1.5, w: 4.4, h: 0.6,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    // 编号
    slide.addText(c.num, {
      x: x + 0.2, y: 1.55, w: 1, h: 0.5,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true, valign: "middle"
    });
    // 标题
    slide.addText(c.title, {
      x: x + 1.3, y: 1.55, w: 3, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle"
    });
    // 描述
    slide.addText(c.desc, {
      x: x + 0.2, y: 2.25, w: 4, h: 1.0,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
    // 正例
    slide.addText(c.example, {
      x: x + 0.2, y: 3.4, w: 4, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    // 反例
    slide.addText(c.bad, {
      x: x + 0.2, y: 3.75, w: 4, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkMute
    });
    // 分隔
    slide.addShape("rect", {
      x: x + 0.2, y: 4.15, w: 0.3, h: 0.04,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(i === 0 ? "→ 启动即开始" : "→ 没有借口不做", {
      x: x + 0.2, y: 4.3, w: 4, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true
    });
  });

  // 底部
  slide.addText("两个条件缺一不可 · 既要具体，也要小", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
