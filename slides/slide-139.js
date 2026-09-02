// slide-139.js - 联系我们
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 139,
  title: '联系我们'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("联系我们", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Contact info cards
  const contacts = [
    { title: "课程咨询", placeholder: "contact@example.com" },
    { title: "商务合作", placeholder: "business@example.com" },
    { title: "技术反馈", placeholder: "support@example.com" }
  ];

  contacts.forEach((c, i) => {
    const x = 0.5 + i * 3.1;

    slide.addShape("rect", {
      x: x, y: 1.2, w: 2.9, h: 1.8,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addShape("rect", {
      x: x, y: 1.2, w: 2.9, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(c.title, {
      x: x, y: 1.2, w: 2.9, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    slide.addText(c.placeholder, {
      x: x + 0.1, y: 1.85, w: 2.7, h: 1.0,
      fontSize: 11, fontFace: "Arial",
      color: theme.secondary, align: "center", valign: "middle"
    });
  });

  // Follow-up resources
  slide.addShape("rect", {
    x: 0.5, y: 3.2, w: 9, h: 1.7,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 3.2, w: 9, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("后续资源", {
    x: 0.5, y: 3.2, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  const resources = [
    "课程群二维码",
    "延伸阅读材料下载",
    "课后练习题库"
  ];

  resources.forEach((r, i) => {
    const x = i === 1 ? 3.5 : i === 0 ? 1 : 6;
    const y = 3.85;

    slide.addText("→ " + r, {
      x: x, y: y, w: 2.8, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("139", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-139-preview.pptx" });
}
