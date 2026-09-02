// slide-43.js - 第三节 · AI使用的边界
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "第三节 · AI使用的边界",
  pageNumber: 43,
  theme: theme
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧深红色装饰条
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.4, h: 5.625,
    fill: { color: theme.primary }
  });

  // 顶部装饰条
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 0, w: 9.6, h: 0.06,
    fill: { color: theme.accent }
  });

  // 章节号标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.0, y: 1.5, w: 1.5, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });

  slide.addText("Part 3", {
    x: 1.0, y: 1.5, w: 1.5, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 主标题
  slide.addText("AI使用的边界", {
    x: 1.0, y: 2.2, w: 8.5, h: 1.0,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 副标题
  slide.addText("知道什么不该做，比知道怎么做更重要", {
    x: 1.0, y: 3.3, w: 8.5, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 1.0, y: 4.1, w: 3, h: 0.04,
    fill: { color: theme.accent }
  });

  // 底部提示文字
  slide.addText("新员工AI职场赋能工作坊", {
    x: 1.0, y: 4.4, w: 8.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-43-output.pptx" })
    .then(() => console.log("Created: slide-43-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };