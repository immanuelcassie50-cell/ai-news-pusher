// slide-58.js - 知道的陷阱：知道 ≠ 想做 ≠ 会做
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "chain", index: 58, title: "知道的陷阱" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("知道的陷阱", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("我们每天都在经历「知道却没做」的时刻", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 三个阶段链条
  const stages = [
    { label: "知道", eng: "KNOW", desc: "理解它的重要性", example: "锻炼对身体好" },
    { label: "想做", eng: "WANT", desc: "有了意愿和动机", example: "想今晚去跑步" },
    { label: "会做", eng: "DO", desc: "在那个时刻做到了", example: "穿上鞋走出门" }
  ];

  const stageW = 2.7;
  const stageH = 2.6;
  const startX = 0.7;
  const gap = 0.35;

  stages.forEach((s, i) => {
    const x = startX + i * (stageW + gap);
    const isLast = i === 2;
    const cardColor = isLast ? theme.primary : theme.paper;

    // 卡片背景
    slide.addShape("rect", {
      x: x, y: 1.4, w: stageW, h: stageH,
      fill: { color: cardColor }, line: { color: isLast ? theme.primary : theme.paperLine, width: 1 }
    });

    // 顶部数字
    slide.addShape("ellipse", {
      x: x + stageW/2 - 0.3, y: 1.55, w: 0.6, h: 0.6,
      fill: { color: isLast ? "FFFFFF" : theme.primary },
      line: { color: isLast ? "FFFFFF" : theme.primary }
    });
    slide.addText(String(i + 1), {
      x: x + stageW/2 - 0.3, y: 1.55, w: 0.6, h: 0.6,
      fontSize: 22, fontFace: "Arial",
      color: isLast ? theme.primary : "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // 标签
    slide.addText(s.eng, {
      x: x, y: 2.3, w: stageW, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: isLast ? theme.redLight : theme.inkMute, charSpacing: 6, bold: true, align: "center"
    });

    // 主词
    slide.addText(s.label, {
      x: x, y: 2.55, w: stageW, h: 0.5,
      fontSize: 30, fontFace: "Microsoft YaHei",
      color: isLast ? "FFFFFF" : theme.ink, bold: true, align: "center"
    });

    // 描述
    slide.addText(s.desc, {
      x: x + 0.1, y: 3.15, w: stageW - 0.2, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: isLast ? "FFFFFF" : theme.inkSoft, align: "center"
    });

    // 分隔线
    slide.addShape("rect", {
      x: x + stageW/2 - 0.2, y: 3.5, w: 0.4, h: 0.02,
      fill: { color: isLast ? "FFFFFF" : theme.paperLine },
      line: { color: isLast ? "FFFFFF" : theme.paperLine }
    });

    // 例子
    slide.addText(s.example, {
      x: x + 0.15, y: 3.6, w: stageW - 0.3, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: isLast ? theme.redLight : theme.accent, italic: true, align: "center"
    });
  });

  // 不等号链
  slide.addText("≠", {
    x: 3.45, y: 2.7, w: 0.35, h: 0.4,
    fontSize: 28, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("≠", {
    x: 6.5, y: 2.7, w: 0.35, h: 0.4,
    fontSize: 28, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });

  // 底部洞察
  slide.addShape("rect", {
    x: 0.5, y: 4.3, w: 9, h: 0.7,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("行为的发生有它自己的逻辑 ——", {
    x: 0.5, y: 4.35, w: 9, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });
  slide.addText("知道了为什么，知道了怎么做，还需要合适的环境与触发", {
    x: 0.5, y: 4.65, w: 9, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
