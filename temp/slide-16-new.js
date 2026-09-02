// slide-16.js - 场景：提案会开到第五版
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'scene',
  index: 16,
  title: '提案会开到第五版'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  // 场景标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.35, w: 1.2, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("场景", {
    x: 0.5, y: 0.35, w: 1.2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 页面标题
  slide.addText("提案会开到第五版", {
    x: 1.9, y: 0.3, w: 5, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // 场景描述
  slide.addText("又是一次漫长的提案会，这已经是第五版了……", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    margin: 0
  });

  // 版本演进时间线
  const versions = [
    { num: "V1", status: "太激进", color: theme.accent, w: 1.5 },
    { num: "V2", status: "风险高", color: theme.accent, w: 2.1 },
    { num: "V3", status: "再想想", color: theme.secondary, w: 2.7 },
    { num: "V4", status: "太冒险", color: theme.secondary, w: 3.3 },
    { num: "V5", status: "通过了", color: theme.primary, w: 4.2 }
  ];

  // 时间线背景
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // 时间线
  slide.addShape(pres.shapes.LINE, {
    x: 1.0, y: 2.2, w: 8, h: 0,
    line: { color: theme.light, width: 3 }
  });

  versions.forEach((v, index) => {
    const xPos = 0.8 + index * 1.7;

    // 节点
    slide.addShape(pres.shapes.OVAL, {
      x: xPos, y: 2.0, w: 0.4, h: 0.4,
      fill: { color: v.color }
    });
    slide.addText(v.num, {
      x: xPos, y: 2.0, w: 0.4, h: 0.4,
      fontSize: 10, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // 状态
    slide.addText(v.status, {
      x: xPos - 0.3, y: 2.45, w: 1, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: v.color,
      align: "center"
    });
  });

  // 会议记录卡片
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.1, w: 4.3, h: 2.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("会议纪要", {
    x: 0.7, y: 3.25, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.65, w: 3.9, h: 0.02,
    fill: { color: theme.light }
  });

  const meetingNotes = [
    "“创意不错，但是不是太激进了？”",
    "“我们要不要先做个试点？”",
    "“这个方案如果失败了怎么办？”",
    "“能不能再稳妥一点？”"
  ];

  meetingNotes.forEach((note, index) => {
    slide.addText((index + 1) + ". " + note, {
      x: 0.7, y: 3.8 + index * 0.38, w: 3.9, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 结果卡片
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 3.1, w: 4.3, h: 2.3,
    fill: { color: theme.primary }
  });

  slide.addText("最终方案", {
    x: 5.4, y: 3.25, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 3.65, w: 3.9, h: 0.02,
    fill: { color: theme.accent }
  });

  slide.addText("一个永远不会失败\n但也永远不会突破的方案", {
    x: 5.4, y: 3.85, w: 3.9, h: 0.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("通过了会议\n输掉了创新", {
    x: 5.4, y: 4.6, w: 3.9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a1a1a",
    secondary: "4a4a4a",
    accent: "C41E3A",
    light: "BEBEBE",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-16-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
