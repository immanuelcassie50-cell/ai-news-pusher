// slide-06_导言_课程核心框架 - 图形化展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '课程核心框架'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("课程核心框架", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 中心圆 - 核心
  slide.addShape(pres.shapes.OVAL, {
    x: 4.0, y: 2.2, w: 2.0, h: 2.0,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("AI\n企业\n创新", {
    x: 4.0, y: 2.2, w: 2.0, h: 2.0,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 五个外围模块
  const modules = [
    { x: 1.0, y: 1.2, label: "创新背景", num: "01" },
    { x: 7.0, y: 1.2, label: "六大挑战", num: "02" },
    { x: 0.5, y: 3.5, label: "方法论", num: "03" },
    { x: 7.5, y: 3.5, label: "行业实践", num: "04" },
    { x: 4.0, y: 4.5, label: "创新战略", num: "05" }
  ];

  modules.forEach((mod) => {
    // 连接线（从中心到模块）
    slide.addShape(pres.shapes.LINE, {
      x: 5.0, y: 3.2, w: mod.x + 0.6 - 5.0, h: mod.y + 0.3 - 3.2,
      line: { color: theme.light, width: 1.5, dashType: "dash" }
    });

    // 模块框
    slide.addShape(pres.shapes.RECTANGLE, {
      x: mod.x, y: mod.y, w: 1.8, h: 0.9,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 模块编号
    slide.addText(mod.num, {
      x: mod.x + 0.1, y: mod.y + 0.1, w: 0.5, h: 0.3,
      fontSize: 12, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 模块标签
    slide.addText(mod.label, {
      x: mod.x, y: mod.y + 0.4, w: 1.8, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
  });

  // 页码
  slide.addText("6", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "000814",
    secondary: "003566",
    accent:    "ffc300",
    light:     "ffd60a",
    bg:        "001d3d"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-06-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
