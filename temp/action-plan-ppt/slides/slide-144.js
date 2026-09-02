// slide-144.js - 步骤1-2详解
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "two-col-detail", index: 144, title: "步骤1-2详解" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("STEP 01 - 02 / DETAIL", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("步骤 1-2 详解：扫描 + 诊断", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("从全局到局部：从直觉过滤到精确诊断", {
    x: 0.5, y: 1.15, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 左栏 - 步骤1 扫描
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 4.4, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 4.4, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("01", {
    x: 0.65, y: 1.92, w: 0.7, h: 0.4,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });

  slide.addText("扫描全局，识别脆弱点", {
    x: 1.4, y: 1.95, w: 3.3, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // 步骤1内容
  slide.addText("动作：", {
    x: 0.75, y: 2.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("把任务过一遍，用「坏日子测试」做第一轮快速过滤。", {
    x: 0.75, y: 2.9, w: 4, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 18
  });

  slide.addText("判断标准：", {
    x: 0.75, y: 3.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const scanTips = [
    "普通但不轻松的周，能发生吗？",
    "标出所有「不一定」的任务"
  ];
  scanTips.forEach((t, i) => {
    slide.addShape("ellipse", {
      x: 0.85, y: 3.9 + i * 0.32, w: 0.08, h: 0.08,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(t, {
      x: 1.0, y: 3.85 + i * 0.32, w: 3.7, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  slide.addText("速度要快。凭直觉和经验判断。", {
    x: 0.75, y: 4.65, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  // 右栏 - 步骤2 诊断
  slide.addShape("rect", {
    x: 5.1, y: 1.85, w: 4.4, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.85, w: 4.4, h: 0.55,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  slide.addText("02", {
    x: 5.25, y: 1.92, w: 0.7, h: 0.4,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });

  slide.addText("逐一诊断，找主要弱点", {
    x: 6.0, y: 1.95, w: 3.4, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // 步骤2内容
  slide.addText("动作：", {
    x: 5.35, y: 2.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("对候选列表里的每个任务，用 B=MAP 诊断。", {
    x: 5.35, y: 2.9, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 18
  });

  slide.addText("三问：", {
    x: 5.35, y: 3.4, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const mapQs = [
    "M 是不是真的建立？",
    "A 在那个时刻做起来难不难？",
    "P 触发器是什么？可靠吗？"
  ];
  mapQs.forEach((t, i) => {
    slide.addText(t, {
      x: 5.45, y: 3.7 + i * 0.3, w: 4, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
  });

  slide.addText("→ 找出最薄弱的那一项", {
    x: 5.35, y: 4.7, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
