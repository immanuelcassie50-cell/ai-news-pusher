// slide-01.js - 封面
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '综合实战——高频场景的协同写作与组织迁移'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧深酒红色块装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.35, h: 5.625,
    fill: { color: theme.primary }
  });

  // 顶部小装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.35, y: 0, w: 9.65, h: 0.08,
    fill: { color: theme.accent }
  });

  // 主标题
  slide.addText("综合实战——高频场景的协同写作与组织迁移", {
    x: 0.7, y: 1.8, w: 8.8, h: 1.4,
    fontSize: 38, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 副标题
  slide.addText("AI时代国央企公文写作 · 第五课", {
    x: 0.7, y: 3.3, w: 8.8, h: 0.7,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "middle"
  });

  // 底部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.6, w: 3, h: 0.06,
    fill: { color: theme.accent }
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4a4a4a",
    accent: "E8364F",
    light: "c0c0c0",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/新课开发/公文写作/5、综合实战——高频场景的协同写作与组织迁移/ppt/slides/slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
