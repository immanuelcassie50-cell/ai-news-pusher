// slide-96.js - 本章小结
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};

const slideConfig = {
  type: "summary",
  index: 96,
  title: "本章小结"
};

function createSlide(pres, t) {
  const slide = pres.addSlide();
  slide.background = { color: t.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: t.primary }
  });
  slide.addText("本章小结", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Chapter indicator
  slide.addText("第十三章 · 口碑与转介绍", {
    x: 0.5, y: 0.95, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: t.light
  });

  // Key takeaways
  const takeaways = [
    "口碑是副产品，不是目标",
    "追口碑会让判断悄悄走样",
    "口碑运营变目的 → 判断质量下滑 → 恶性循环",
    "真正的衡量标准：五年后孩子认不认这个判断"
  ];

  const startY = 1.5;
  const itemHeight = 0.9;

  takeaways.forEach((text, i) => {
    const y = startY + i * itemHeight;

    // Takeaway card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.75,
      fill: { color: "FFFFFF" },
      line: { color: t.primary, width: 1 },
      rectRadius: 0.1
    });

    // Checkmark circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.13, w: 0.5, h: 0.5,
      fill: { color: t.accent }
    });
    slide.addText("✓", {
      x: 0.7, y: y + 0.13, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Takeaway text
    slide.addText(text, {
      x: 1.4, y: y + 0.13, w: 7.8, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: t.secondary,
      valign: "middle"
    });
  });

  // Bottom highlight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: t.primary, transparency: 10 },
    rectRadius: 0.1
  });
  slide.addText("把每一次判断做扎实，口碑自然生长", {
    x: 0.7, y: 5.05, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: t.primary, bold: true,
    valign: "middle"
  });

  // Page number badge - bottom left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: t.accent }
  });
  slide.addText("96", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  await pres.writeFile({ fileName: "D:/CC/temp/slides/slide-96-preview.pptx" });
  console.log("Created slide-96-preview.pptx");
}

main().catch(console.error);

module.exports = { createSlide, slideConfig };
