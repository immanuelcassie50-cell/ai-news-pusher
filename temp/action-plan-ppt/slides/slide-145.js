// slide-145.js - 步骤3-5详解
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "three-col-detail", index: 145, title: "步骤3-5详解" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("STEP 03 - 05 / DETAIL", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("步骤 3-5 详解：设计 + 检验 + 全局", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("从单任务优化到整份计划的平衡", {
    x: 0.5, y: 1.15, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 三栏
  const steps = [
    {
      num: "03",
      title: "设计",
      subtitle: "重新设计",
      action: "用工具重写任务",
      detail: "根据诊断结果选工具，产出一条新任务描述。"
    },
    {
      num: "04",
      title: "检验",
      subtitle: "三条标准",
      action: "清晰度 / 摩擦力 / 稳健性",
      detail: "三条标准里有明显弱项，继续调整。"
    },
    {
      num: "05",
      title: "全局",
      subtitle: "平衡检查",
      action: "看整份计划",
      detail: "整体负荷、强度比例、时间分布是否合理？"
    }
  ];

  const cardW = 2.9;
  const gap = 0.2;
  const startX = 0.5;
  const cardY = 1.85;
  const cardH = 3.0;

  steps.forEach((s, i) => {
    const x = startX + i * (cardW + gap);

    // 卡片底
    slide.addShape("rect", {
      x: x, y: cardY, w: cardW, h: cardH,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 左侧色条
    slide.addShape("rect", {
      x: x, y: cardY, w: 0.08, h: cardH,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });

    // 大数字
    slide.addText(s.num, {
      x: x + 0.25, y: cardY + 0.15, w: 1.4, h: 0.6,
      fontSize: 36, fontFace: "Arial",
      color: theme.primary, bold: true
    });

    // 副标签
    slide.addText(s.subtitle, {
      x: x + 0.25, y: cardY + 0.8, w: cardW - 0.4, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });

    // 主标题
    slide.addText(s.title, {
      x: x + 0.25, y: cardY + 1.1, w: cardW - 0.4, h: 0.5,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    // 分隔线
    slide.addShape("rect", {
      x: x + 0.25, y: cardY + 1.7, w: 0.4, h: 0.02,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });

    // 关键动作
    slide.addText(s.action, {
      x: x + 0.25, y: cardY + 1.85, w: cardW - 0.4, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    // 说明
    slide.addText(s.detail, {
      x: x + 0.25, y: cardY + 2.3, w: cardW - 0.4, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 16
    });
  });

  // 底部提示
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("从单条任务的设计，回到整份计划的平衡——这是最后一步的意义。", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
