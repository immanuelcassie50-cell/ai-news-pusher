// slide-104.js - Let Go of Standard Process: 放下标准流程
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};

const slideConfig = {
  type: "content",
  index: 104,
  title: "放下标准流程"
};

function createSlide(pres, t) {
  const slide = pres.addSlide();
  slide.background = { color: t.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: t.primary }
  });
  slide.addText("放下标准流程", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Key insight card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.15, w: 9, h: 1.1,
    fill: { color: t.primary },
    rectRadius: 0.1
  });
  slide.addText("老手和新手最大的差别", {
    x: 0.7, y: 1.25, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: t.accent, bold: true
  });
  slide.addText("不在谁掌握的政策更新更快、谁的数据库更全——真正的差别是面对具体的人时，能不能放下已经很熟练的那套标准判断路径", {
    x: 0.7, y: 1.65, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Content points
  const points = [
    { title: "重新问基础问题", desc: "你是谁，你在意什么，你害怕什么" },
    { title: "熟练的代价", desc: "一个人越熟练，越容易依赖已经验证过很多次的经验模板" },
    { title: "耐心考验", desc: "越难有耐心重新从零开始了解一个新的具体的人" }
  ];

  points.forEach((point, i) => {
    const y = 2.5 + i * 0.95;

    // Card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 },
      rectRadius: 0.08
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.1, h: 0.85,
      fill: { color: t.accent }
    });

    // Title
    slide.addText(point.title, {
      x: 0.8, y: y + 0.1, w: 3, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: t.primary, bold: true
    });

    // Description
    slide.addText(point.desc, {
      x: 0.8, y: y + 0.45, w: 8.4, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: t.secondary
    });
  });

  // Page number badge (bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: t.accent }
  });
  slide.addText("104", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-104-preview.pptx" })
    .then(() => console.log("Created slide-104-preview.pptx"));
}
