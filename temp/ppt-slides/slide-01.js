// slide-01.js - 封面
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '高净值客户服务经验萃取工作坊'
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
  slide.addText("高净值客户服务经验萃取工作坊", {
    x: 0.7, y: 1.6, w: 8.8, h: 1.2,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 副标题
  slide.addText("第二部分", {
    x: 0.7, y: 2.85, w: 8.8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "middle"
  });

  // 章节名
  slide.addText("访谈与素材萃取", {
    x: 0.7, y: 3.5, w: 8.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "middle"
  });

  // 底部信息
  slide.addText("招商证券 | 2026", {
    x: 0.7, y: 4.9, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B2942",
    secondary: "4A4A4A",
    accent: "C75B5B",
    light: "E8D5D5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/ppt-slides/slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };