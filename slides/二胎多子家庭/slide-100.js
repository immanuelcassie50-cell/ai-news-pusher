// slide-100.js - 联系方式
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 100,
  title: '联系我们'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Main title
  slide.addText("联系我们", {
    x: 0.5, y: 0.8, w: 9, h: 1.0,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 1.85, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Contact card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.5, y: 2.3, w: 5, h: 2.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.1 }
  });

  // Contact items
  const contacts = [
    { label: "邮箱", value: "course@example.com" },
    { label: "微信公众号", value: "育儿课程中心" },
    { label: "客服热线", value: "400-XXX-XXXX" }
  ];

  contacts.forEach((contact, idx) => {
    const y = 2.55 + idx * 0.7;

    // Label
    slide.addText(contact.label + "：", {
      x: 2.8, y: y, w: 1.5, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "right", valign: "middle"
    });

    // Value
    slide.addText(contact.value, {
      x: 4.4, y: y, w: 2.8, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // QR code placeholder
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.8, y: 2.5, w: 1.5, h: 1.5,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.1
  });
  slide.addText("QR", {
    x: 7.8, y: 2.5, w: 1.5, h: 1.5,
    fontSize: 18, fontFace: "Arial",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  // Footer tagline
  slide.addText("育儿路上，我们与您同行", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-100-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
