// D-18 项目概述
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 2,
  title: '项目概述'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("项目概述", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("AI 普及到 AI 落地 · 6 个月 · 5 大方向 · 2 段式交付", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 时间线
  const timeline = [
    { d: "M1", t: "调研诊断", c: "岗位盘点+场景摸底" },
    { d: "M2", t: "基础班", c: "40+ 班次全员覆盖" },
    { d: "M3-4", t: "内训师班", c: "30+ 内训师认证" },
    { d: "M5-6", t: "陪跑落地", c: "2-4 周场景化应用" }
  ];
  timeline.forEach((p, i) => {
    const x = 0.6 + i * 2.3;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.9, w: 2.1, h: 1.4,
      fill: { color: theme.light }, line: { type: "none" }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.9, w: 2.1, h: 0.4,
      fill: { color: theme.primary }, line: { type: "none" }
    });
    slide.addText(p.d, {
      x: x, y: 1.9, w: 2.1, h: 0.4,
      fontSize: 14, fontFace: "Arial", color: "FFFFFF",
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(p.t, {
      x: x, y: 2.4, w: 2.1, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    slide.addText(p.c, {
      x: x + 0.1, y: 2.8, w: 1.9, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // 三大交付
  const dels = [
    { t: "提示词库", c: "6500+ 个本岗提示词" },
    { t: "工具地图", c: "1800+ 份个人版" },
    { t: "内训师队伍", c: "32 人认证 · 30+ 门 AI 课" }
  ];
  dels.forEach((d, i) => {
    const x = 0.6 + i * 3.0;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 3.6, w: 2.8, h: 1.0,
      fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 2 }
    });
    slide.addText(d.t, {
      x: x + 0.1, y: 3.7, w: 2.6, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(d.c, {
      x: x + 0.1, y: 4.1, w: 2.6, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.85, w: 8.8, h: 0.4,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("覆盖 5 大方向 · 项目管理 800+ / 通用管理 400+ / 专业职能 423 / 测试 200 / 开发 200", {
    x: 0.6, y: 4.85, w: 8.8, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("02", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "003D7A", secondary: "333333", accent: "00A0E9",
    light: "F4F6F9", bg: "FFFFFF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
