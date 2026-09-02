// slide-92.js - 联系我们
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 92,
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

  // Title
  slide.addText("联系我们", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Contact cards
  const contacts = [
    {
      icon: "📍",
      title: "培训管理部门",
      info: "人力资源部·培训中心",
      sub: "负责内训师选拔、培养与认证"
    },
    {
      icon: "📧",
      title: "联系邮箱",
      info: "training@company.com",
      sub: "课程咨询、资源申请"
    },
    {
      icon: "📞",
      title: "联系电话",
      info: "400-XXX-XXXX",
      sub: "工作日 9:00-18:00"
    },
    {
      icon: "💬",
      title: "内部社群",
      info: "内训师交流群",
      sub: "经验分享、资源互通"
    }
  ];

  contacts.forEach((contact, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.5 + col * 4.6;
    const y = 1.3 + row * 1.9;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.7,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: 1.7,
      fill: { color: theme.accent }
    });

    // Icon
    slide.addText(contact.icon, {
      x: x + 0.2, y: y + 0.35, w: 0.8, h: 0.8,
      fontSize: 32, fontFace: "Arial",
      align: "center", valign: "middle", margin: 0
    });

    // Title
    slide.addText(contact.title, {
      x: x + 1.1, y: y + 0.25, w: 3, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });

    // Info
    slide.addText(contact.info, {
      x: x + 1.1, y: y + 0.7, w: 3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });

    // Sub info
    slide.addText(contact.sub, {
      x: x + 1.1, y: y + 1.1, w: 3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, margin: 0
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("92", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "FF6B6B",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-92-preview.pptx" });
}

module.exports = { createSlide, slideConfig };