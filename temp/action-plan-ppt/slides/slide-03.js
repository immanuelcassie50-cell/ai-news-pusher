// slide-03.js - 你将带走什么
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "content-quad", index: 3, title: "你将带走什么" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("LEARNING OUTCOMES", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("你将带走什么", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("四个产出，都可以直接用于你手上的行动计划", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 四象限
  const quads = [
    {
      num: "I",
      title: "标准",
      en: "CRITERIA",
      desc: "三条可执行性标准\n+ 计划风险清单",
      detail: "用来识别\"看起来合理、实际很难执行\"的任务。"
    },
    {
      num: "II",
      title: "框架",
      en: "FRAMEWORK",
      desc: "B=MAP 行为诊断模型",
      detail: "理解行为为什么会发生、为什么会断掉。"
    },
    {
      num: "III",
      title: "工具",
      en: "TOOLS",
      desc: "四个行为设计工具",
      detail: "把高风险任务重新设计为\"顺人性\"的版本。"
    },
    {
      num: "IV",
      title: "实操",
      en: "PRACTICE",
      desc: "经过审视的行动计划修订版",
      detail: "把整套方法用在你自己的计划上。"
    }
  ];

  // 2x2 网格
  quads.forEach((q, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.6;
    const y = 1.8 + row * 1.75;

    // 背景块
    slide.addShape("rect", {
      x: x, y: y, w: 4.4, h: 1.6,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    // 左侧罗马数字
    slide.addShape("rect", {
      x: x, y: y, w: 0.9, h: 1.6,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(q.num, {
      x: x, y: y + 0.45, w: 0.9, h: 0.7,
      fontSize: 36, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    // 英文小标签
    slide.addText(q.en, {
      x: x + 1.0, y: y + 0.15, w: 3.3, h: 0.25,
      fontSize: 9, fontFace: "Arial",
      color: theme.inkMute, bold: true, charSpacing: 4
    });
    // 标题
    slide.addText(q.title, {
      x: x + 1.0, y: y + 0.4, w: 3.3, h: 0.4,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    // 主描述
    slide.addText(q.desc, {
      x: x + 1.0, y: y + 0.85, w: 3.3, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    // 详细说明
    slide.addText(q.detail, {
      x: x + 1.0, y: y + 1.2, w: 3.3, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkMute
    });
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
