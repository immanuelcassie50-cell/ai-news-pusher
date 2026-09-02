const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("学习成果证书说明", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Intro
  slide.addText("四种证书类型，助您明确成长路径", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Certificate levels - pyramid style
  const certificates = [
    {
      level: "初级催化师",
      req: "通过认证评估",
      color: theme.secondary,
      w: 9.0,
      x: 0.5,
      y: 1.55,
      badge: "L1"
    },
    {
      level: "中级催化师",
      req: "积累100场+经验",
      color: theme.primary,
      w: 6.8,
      x: 1.6,
      y: 2.55,
      badge: "L2"
    },
    {
      level: "高级催化师",
      req: "培养他人成为催化官",
      color: theme.accent,
      w: 4.6,
      x: 2.7,
      y: 3.55,
      badge: "L3"
    }
  ];

  certificates.forEach((cert, i) => {
    // Certificate card
    slide.addShape(pres.ShapeType.rect, {
      x: cert.x, y: cert.y, w: cert.w, h: 0.9,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Left accent
    slide.addShape(pres.ShapeType.rect, {
      x: cert.x, y: cert.y, w: 0.08, h: 0.9,
      fill: { color: cert.color }
    });

    // Badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: cert.x + 0.2, y: cert.y + 0.2, w: 0.5, h: 0.5,
      fill: { color: cert.color }
    });
    slide.addText(cert.badge, {
      x: cert.x + 0.2, y: cert.y + 0.2, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Level name
    slide.addText(cert.level, {
      x: cert.x + 0.85, y: cert.y + 0.15, w: 3.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: cert.color, bold: true
    });

    // Requirement
    slide.addText("获取条件：" + cert.req, {
      x: cert.x + 0.85, y: cert.y + 0.5, w: 5.0, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Arrow pointing down (except last)
    if (i < certificates.length - 1) {
      slide.addShape(pres.ShapeType.downArrow, {
        x: cert.x + cert.w / 2 - 0.15, y: cert.y + 0.9, w: 0.3, h: 0.2,
        fill: { color: cert.color, transparency: 50 }
      });
    }
  });

  // Attendance certificate
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.65, w: 4.3, h: 0.7,
    fill: { color: theme.light }
  });
  slide.addText("学时证明", {
    x: 0.7, y: 4.7, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("完成四天课程即可获得", {
    x: 0.7, y: 4.98, w: 3.9, h: 0.3,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Note
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 4.65, w: 4.3, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("认证有效期", {
    x: 5.4, y: 4.7, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });
  slide.addText("认证有效期2年，需持续实践和复训", {
    x: 5.4, y: 4.98, w: 4.0, h: 0.3,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: "ffffff", transparency: 20
  });

  return slide;
}

module.exports = { createSlide };
