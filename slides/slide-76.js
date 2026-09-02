// slide-76.js - 练习：思想流派匹配
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 76,
  title: '练习：思想流派匹配'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("练习：思想流派匹配", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Instruction
  slide.addText("请将以下经济学家与他们的主要贡献匹配：", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Matching items
  const items = [
    { num: "1", economist: "门格尔", desc: "a. 创造性破坏" },
    { num: "2", economist: "哈耶克", desc: "b. 科斯定理" },
    { num: "3", economist: "熊彼特", desc: "c. 主观价值论" },
    { num: "4", economist: "科斯", desc: "d. 自发秩序" },
    { num: "5", economist: "贝克尔", desc: "e. 人力资本" }
  ];

  const startY = 1.6;
  const itemHeight = 0.65;

  items.forEach((item, idx) => {
    const y = startY + idx * itemHeight;

    // Number badge
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.1, w: 0.45, h: 0.45,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: 0.7, y: y + 0.1, w: 0.45, h: 0.45,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Economist name
    slide.addText(item.economist, {
      x: 1.4, y: y + 0.05, w: 2.5, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Arrow
    slide.addText("→", {
      x: 3.9, y: y + 0.05, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: theme.light, bold: false,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: 4.4, y: y + 0.05, w: 4, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Answer section
  slide.addShape("rect", {
    x: 0.5, y: 4.85, w: 9, h: 0.6,
    fill: { color: theme.primary, transparency: 90 }
  });
  slide.addText("答案：1-c, 2-d, 3-a, 4-b, 5-e", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("76", {
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
  pres.writeFile({ fileName: "slide-76-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
