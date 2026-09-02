// slide-81.js - 课程回顾：全景图
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 81,
  title: '课程回顾：全景图'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程回顾：全景图", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Modules overview
  const modules = [
    { title: "先导：斯密的历史坐标", desc: "了解斯密的时代背景与核心思想", color: theme.light },
    { title: "模块一：从斯密到奥地利学派", desc: "主观价值论、自发秩序", color: theme.accent },
    { title: "模块二：芝加哥学派", desc: "货币主义、产权理论、公共选择", color: theme.primary },
    { title: "模块三：斯密遗产在当代", desc: "制度经济学、行为经济学、信息经济学", color: theme.accent },
    { title: "收尾：回到斯密", desc: "重新理解与当代启示", color: theme.light }
  ];

  const startY = 1.2;
  const itemHeight = 0.8;

  modules.forEach((mod, idx) => {
    const y = startY + idx * itemHeight;

    // Left accent bar
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.08, h: 0.65,
      fill: { color: mod.color }
    });

    // Module number
    slide.addShape("ellipse", {
      x: 0.75, y: y + 0.1, w: 0.45, h: 0.45,
      fill: { color: mod.color }
    });
    slide.addText((idx + 1).toString(), {
      x: 0.75, y: y + 0.1, w: 0.45, h: 0.45,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(mod.title, {
      x: 1.4, y: y + 0.02, w: 8, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(mod.desc, {
      x: 1.4, y: y + 0.35, w: 8, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("81", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-81-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
