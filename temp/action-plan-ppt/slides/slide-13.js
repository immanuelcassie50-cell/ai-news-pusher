// slide-13.js - 写计划的你
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "state-card", index: 13, title: "写计划的你" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧大色块
  slide.addShape("rect", {
    x: 0, y: 0, w: 4.0, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 左侧大标签
  slide.addText("STATE 01", {
    x: 0.5, y: 0.6, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.redLight, bold: true, charSpacing: 6
  });

  // 标题（白色）
  slide.addText("写计划的你", {
    x: 0.5, y: 1.0, w: 3.2, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // 副标题
  slide.addText("规划状态", {
    x: 0.5, y: 1.7, w: 3, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.redLight
  });

  // 装饰
  slide.addShape("rect", {
    x: 0.5, y: 2.2, w: 0.5, h: 0.04,
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });

  // 关键描述
  slide.addText("当你在写计划时，你处于一种特殊的状态：", {
    x: 0.5, y: 2.4, w: 3.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redLight, lineSpacing: 18
  });

  // 状态关键词
  ["专注", "清醒", "时间充裕", "认可价值", "全局视野"].forEach((k, i) => {
    slide.addShape("rect", {
      x: 0.5, y: 3.2 + i * 0.35, w: 1.5, h: 0.28,
      fill: { color: theme.redDeep }, line: { color: theme.redDeep }
    });
    slide.addText(k, {
      x: 0.5, y: 3.22 + i * 0.35, w: 1.5, h: 0.24,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", bold: true
    });
  });

  // 右侧 - 详细描述
  slide.addText("PLANNING MODE", {
    x: 4.3, y: 0.6, w: 5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });
  slide.addText("规划状态的特征", {
    x: 4.3, y: 0.95, w: 5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 分割线
  slide.addShape("rect", {
    x: 4.3, y: 1.4, w: 0.4, h: 0.03,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 详细列表
  const traits = [
    { num: "01", title: "坐在桌前", body: "有一段不被打断的时间坐下来思考全局。" },
    { num: "02", title: "高度认可", body: "对这件事有明确的价值判断，相信它重要。" },
    { num: "03", title: "理想化假设", body: "默认执行时也会保持这种能量水平。" },
    { num: "04", title: "完成感提前", body: "写下任务时，大脑已经获得部分满足感。" },
    { num: "05", title: "意志力充沛", body: "此刻资源充足，能量高位，决策毫不费力。" }
  ];

  traits.forEach((t, i) => {
    const y = 1.6 + i * 0.65;
    slide.addText(t.num, {
      x: 4.3, y: y, w: 0.5, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    slide.addText(t.title, {
      x: 4.85, y: y, w: 2, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    slide.addText(t.body, {
      x: 4.85, y: y + 0.3, w: 4.7, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 4.3, y: 4.95, w: 5.2, h: 0.35,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("这是写计划时的你——但不是你执行时的你。", {
    x: 4.3, y: 4.99, w: 5.2, h: 0.28,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
