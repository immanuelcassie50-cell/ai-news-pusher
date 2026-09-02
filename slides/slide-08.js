// slide-08.js - Summary & CTA
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 8,
  title: '课程总结与报名引导'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程总结与报名引导", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // ===== LEFT SECTION: Key Takeaways =====
  slide.addText("今日收获", {
    x: 0.5, y: 1.1, w: 4.5, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Takeaway items
  const takeaways = [
    "注意力是大脑的选择性加工能力，可以通过练习提升",
    "聚焦、保持、切换是注意力管理的核心三步",
    "呼吸训练、单点凝视、番茄工作法是日常训练的有效工具"
  ];

  takeaways.forEach((item, idx) => {
    const y = 1.7 + idx * 0.7;

    // Checkmark circle
    slide.addShape("ellipse", {
      x: 0.6, y: y + 0.05, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText("\u2713", {
      x: 0.6, y: y + 0.05, w: 0.35, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Takeaway text
    slide.addText(item, {
      x: 1.1, y: y, w: 4, h: 0.6,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
  });

  // ===== RIGHT SECTION: Course Benefits =====
  slide.addShape("roundRect", {
    x: 5.3, y: 1.1, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText("正式课程亮点", {
    x: 5.5, y: 1.25, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const benefits = [
    "8节系统课程，从原理到实践",
    "每日5分钟训练，21天养成专注习惯",
    "1对1答疑辅导，个性化提升方案"
  ];

  benefits.forEach((benefit, idx) => {
    const y = 1.75 + idx * 0.55;

    // Bullet dot
    slide.addShape("ellipse", {
      x: 5.65, y: y + 0.12, w: 0.15, h: 0.15,
      fill: { color: theme.accent }
    });

    slide.addText(benefit, {
      x: 5.95, y: y, w: 3.5, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // ===== CTA SECTION =====
  slide.addShape("roundRect", {
    x: 5.3, y: 3.8, w: 4.3, h: 1.5,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  slide.addText("立即报名", {
    x: 5.5, y: 3.95, w: 3.9, h: 0.45,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("方太文化研究院《注意力管理》正式课程", {
    x: 5.5, y: 4.4, w: 3.9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  slide.addShape("roundRect", {
    x: 6.3, y: 4.85, w: 2.3, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.06
  });
  slide.addText("早鸟价：限时优惠中", {
    x: 6.3, y: 4.85, w: 2.3, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // ===== CONTACT SECTION =====
  slide.addShape("roundRect", {
    x: 0.5, y: 4.7, w: 4.5, h: 0.7,
    fill: { color: theme.light },
    rectRadius: 0.08
  });
  slide.addText("咨询报名：方太文化研究院", {
    x: 0.7, y: 4.85, w: 4.1, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("8", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
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
    primary: "22223b",
    secondary: "4a4e69",
    accent: "9a8c98",
    light: "c9ada7",
    bg: "f2e9e4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/slides/slide-08-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
