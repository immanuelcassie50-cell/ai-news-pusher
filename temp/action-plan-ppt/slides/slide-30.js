// slide-30.js - 三条标准总览
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "three-card", index: 30, title: "三条标准总览" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("THREE CRITERIA", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("三条可执行性标准", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("三条标准，分别从\"开始前\"\"启动时\"\"日常里\"三个时点做检验", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 三大标准卡片
  const cards = [
    {
      tag: "01",
      title: "行动清晰度",
      en: "CLARITY",
      q: "看完能不能动手？",
      lines: [
        "· 不需思考\"这是什么意思\"",
        "· 知道第一步动作是什么",
        "· 明确完毕的标准"
      ]
    },
    {
      tag: "02",
      title: "启动摩擦力",
      en: "FRICTION",
      q: "要开始有多难？",
      lines: [
        "· 物理摩擦：距离、工具",
        "· 认知摩擦：决定、规划",
        "· 协调摩擦：等待、配合"
      ]
    },
    {
      tag: "03",
      title: "日常稳健性",
      en: "ROBUSTNESS",
      q: "普通日子会发生吗？",
      lines: [
        "· 不依赖最佳状态",
        "· 不消耗超额意志力",
        "· 忙时仍能可靠发生"
      ]
    }
  ];

  const cardW = 2.95;
  const startX = 0.5;
  const gap = 0.15;

  cards.forEach((c, i) => {
    const x = startX + i * (cardW + gap);
    const y = 1.85;

    // 卡片背景
    slide.addShape("rect", {
      x, y, w: cardW, h: 3.3,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 左侧色条
    slide.addShape("rect", {
      x, y, w: 0.12, h: 3.3,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });

    // 数字标
    slide.addText(c.tag, {
      x: x + 0.3, y: y + 0.2, w: 1, h: 0.5,
      fontSize: 32, fontFace: "Arial",
      color: theme.primary, bold: true
    });

    // 英文小标
    slide.addText(c.en, {
      x: x + 1.4, y: y + 0.3, w: cardW - 1.6, h: 0.3,
      fontSize: 9, fontFace: "Arial",
      color: theme.inkMute, charSpacing: 3, align: "right"
    });

    // 主标题
    slide.addText(c.title, {
      x: x + 0.3, y: y + 0.85, w: cardW - 0.4, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    // 引导问题
    slide.addText(c.q, {
      x: x + 0.3, y: y + 1.4, w: cardW - 0.4, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true
    });

    // 分割线
    slide.addShape("rect", {
      x: x + 0.3, y: y + 1.85, w: 0.4, h: 0.02,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });

    // 三条要点
    c.lines.forEach((line, j) => {
      slide.addText(line, {
        x: x + 0.3, y: y + 2.05 + j * 0.35, w: cardW - 0.4, h: 0.3,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.inkSoft
      });
    });
  });

  // 底部金句
  slide.addText("三条合一：这个任务，在普通的、有点忙的工作日，能不依赖高意志力自然发生吗？", {
    x: 0.5, y: 5.25, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
