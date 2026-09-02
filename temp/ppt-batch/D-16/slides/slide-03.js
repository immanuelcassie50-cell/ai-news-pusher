// D-16 项目目标
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 3,
  title: '项目目标'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 标题
  slide.addText("项目目标", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("从「会用 AI」到「用 AI 解业务问题」", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 四个目标
  const goals = [
    { icon: "01", t: "沉淀提示词库", d: "人均 3-5 个本岗提示词，纳入公司知识库" },
    { icon: "02", t: "产出场景化案例", d: "课后 2-4 周真业务场景落地、可量化效果" },
    { icon: "03", t: "培养 AI 内训师", d: "选拔 30+ 名能讲 AI 课的内训师队伍" },
    { icon: "04", t: "守住安全合规", d: "红黄绿灯贯穿全程、零重大违规事故" }
  ];
  goals.forEach((g, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.6 + col * 4.5;
    const y = 2.0 + row * 1.4;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.3, h: 1.2,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.7, h: 1.2,
      fill: { color: theme.primary }, line: { type: "none" }
    });
    slide.addText(g.icon, {
      x: x, y: y, w: 0.7, h: 1.2,
      fontSize: 24, fontFace: "Arial", color: "FFFFFF",
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(g.t, {
      x: x + 0.85, y: y + 0.15, w: 3.3, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(g.d, {
      x: x + 0.85, y: y + 0.6, w: 3.3, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 页码
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("03", {
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
  pres.writeFile({ fileName: "slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
