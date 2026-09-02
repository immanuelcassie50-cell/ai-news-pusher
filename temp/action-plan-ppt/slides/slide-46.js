// slide-46.js - 五种模式总览
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "five-card", index: 46, title: "五种模式总览" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("FIVE PATTERNS", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("五种\"看起来合理但难以执行\"的任务", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("在实际的行动计划中，以下五种模式最容易在执行中断掉", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 5个卡片
  const patterns = [
    { num: "01", title: "意图型", desc: "描述方向但没触发条件" },
    { num: "02", title: "依赖他人", desc: "需先等待别人响应" },
    { num: "03", title: "新增会议", desc: "需要大家都参加" },
    { num: "04", title: "找时间", desc: "\"在合适的时候\"" },
    { num: "05", title: "高能量依赖", desc: "需专注、创意、精力" }
  ];

  const cardW = 1.78;
  const startX = 0.5;
  const gap = 0.1;
  const cardY = 1.85;
  const cardH = 1.95;

  patterns.forEach((p, i) => {
    const x = startX + i * (cardW + gap);

    // 卡片
    slide.addShape("rect", {
      x, y: cardY, w: cardW, h: cardH,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 顶部色块
    slide.addShape("rect", {
      x, y: cardY, w: cardW, h: 0.6,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });

    // 数字
    slide.addText(p.num, {
      x, y: cardY + 0.1, w: cardW, h: 0.4,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });

    // 标题
    slide.addText(p.title, {
      x: x + 0.1, y: cardY + 0.75, w: cardW - 0.2, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, align: "center"
    });

    // 分割线
    slide.addShape("rect", {
      x: x + cardW / 2 - 0.2, y: cardY + 1.2, w: 0.4, h: 0.02,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });

    // 描述
    slide.addText(p.desc, {
      x: x + 0.1, y: cardY + 1.3, w: cardW - 0.2, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center"
    });
  });

  // 底部高风险提示
  slide.addShape("rect", {
    x: 0.5, y: 4.05, w: 9, h: 1.2,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.05, w: 0.12, h: 1.2,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("共同特征", {
    x: 0.8, y: 4.15, w: 2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("这五种模式看似合理，但都缺少可执行的关键设计：", {
    x: 0.8, y: 4.45, w: 8.5, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("触发条件模糊、依赖外力、占用大量协调时间、缺乏固定时间、依赖特殊状态。", {
    x: 0.8, y: 4.75, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("识别这五种模式，是重设计行动计划的第一步。", {
    x: 0.8, y: 5.02, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
