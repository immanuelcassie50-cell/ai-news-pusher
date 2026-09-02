// slide-75.js - Transparency Mechanisms (透明度与信息披露)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 75,
  title: '透明度与信息披露'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("透明度与信息披露", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three transparency mechanisms
  const mechanisms = [
    {
      num: "1",
      title: "信息披露要求",
      subtitle: "Disclosure Requirements",
      points: ["财务状况透明", "经营数据共享", "重大事项通知"]
    },
    {
      num: "2",
      title: "审计权条款",
      subtitle: "Audit Rights",
      points: ["定期审计权", "现场检查权", "账目查阅权"]
    },
    {
      num: "3",
      title: "报告义务",
      subtitle: "Reporting Obligations",
      points: ["定期报告提交", "异常情况汇报", "进度节点披露"]
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.2;
  const startX = 0.55;
  const startY = 1.2;
  const gapX = 0.25;

  mechanisms.forEach((mech, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.1,
      fill: { color: theme.accent }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardWidth / 2 - 0.3, y: startY + 0.25, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText(mech.num, {
      x: x + cardWidth / 2 - 0.3, y: startY + 0.25, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(mech.title, {
      x: x + 0.15, y: startY + 1.0, w: cardWidth - 0.3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // English subtitle
    slide.addText(mech.subtitle, {
      x: x + 0.15, y: startY + 1.35, w: cardWidth - 0.3, h: 0.3,
      fontSize: 9, fontFace: "Arial",
      color: theme.light, bold: false,
      align: "center", valign: "middle"
    });

    // Points
    mech.points.forEach((point, pIdx) => {
      const py = startY + 1.8 + pIdx * 0.4;

      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.3, y: py + 0.08, w: 0.12, h: 0.12,
        fill: { color: theme.accent }
      });

      slide.addText(point, {
        x: x + 0.5, y: py, w: 2.2, h: 0.35,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "middle"
      });
    });
  });

  // Bottom insight
  slide.addText("透明度降低信息不对称，让背叛行为无处隐藏", {
    x: 0.5, y: 4.65, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("75", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "slide-75-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
