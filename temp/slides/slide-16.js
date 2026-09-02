// slide-16.js - Case: 说"我都行"的女生
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 16,
  title: '案例：说"我都行"的女生'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText('案例：说"我都行"的女生', {
    x: 0.6, y: 0.35, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Story bullets - left column
  const bullets = [
    { text: '母亲把成绩单甩在桌上："先看分数，能报什么档次"', icon: "1" },
    { text: '问女儿有没有特别想学的，女儿小声说"我都行"', icon: "2" },
    { text: '"都行"两个字说明：她觉得自己不能有想法', icon: "3" },
    { text: '后来单独聊，母亲没在场——她其实一直对心理学感兴趣', icon: "4" },
    { text: '只是家里觉得"毕业不好找工作"，她不敢提', icon: "5" }
  ];

  bullets.forEach((item, i) => {
    const y = 1.1 + i * 0.8;

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(item.icon, {
      x: 0.5, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Text
    slide.addText(item.text, {
      x: 1.1, y: y, w: 8.4, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Insight box at bottom
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: 5.0, w: 9.2, h: 0.5,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.08
  });
  slide.addText("启示：不敢有想法的孩子背后，是不敢支持的家长", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("16", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-16-preview.pptx" })
    .then(() => console.log("Preview saved: slide-16-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
