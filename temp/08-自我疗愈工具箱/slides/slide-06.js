/**
 * Slide 06 - 自我疗愈的科学基础
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("自我疗愈的科学基础", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Definition box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fill: { color: theme.accent, transparency: 20 }
  });
  slide.addText("自我疗愈：个体运用内在心理机制和外部资源，主动调节情绪、修复心理创伤、促进心理健康的过程", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle", bold: false
  });

  // Three mechanisms
  const mechY = 2.0;
  const mechW = 2.9;
  const mechH = 3.0;
  const mechGap = 0.2;

  const mechanisms = [
    {
      num: "01",
      title: "神经生物学机制",
      points: [
        "压力激素调节",
        "神经可塑性变化",
        "自主神经系统平衡",
        "皮质醇水平优化"
      ]
    },
    {
      num: "02",
      title: "心理学机制",
      points: [
        "认知重构与重构训练",
        "情绪调节能力提升",
        "自我效能感增强",
        "意义感与价值感重建"
      ]
    },
    {
      num: "03",
      title: "行为学机制",
      points: [
        "健康行为养成",
        "社会支持网络扩展",
        "压力应对策略优化",
        "自我关怀习惯建立"
      ]
    }
  ];

  mechanisms.forEach((mech, i) => {
    const x = 0.5 + i * (mechW + mechGap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: mechY, w: mechW, h: mechH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + mechW / 2 - 0.35, y: mechY + 0.2, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(mech.num, {
      x: x + mechW / 2 - 0.35, y: mechY + 0.2, w: 0.7, h: 0.7,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", align: "center", valign: "middle", bold: true
    });

    // Title
    slide.addText(mech.title, {
      x: x + 0.15, y: mechY + 1.0, w: mechW - 0.3, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", bold: true
    });

    // Divider line
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.4, y: mechY + 1.5, w: mechW - 0.8, h: 0.02,
      fill: { color: theme.accent }
    });

    // Points
    slide.addText(
      mech.points.map((p, idx) => ({
        text: "• " + p,
        options: { breakLine: idx < mech.points.length - 1 }
      })),
      {
        x: x + 0.25, y: mechY + 1.65, w: mechW - 0.5, h: 1.8,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        lineSpaceMult: 1.5
      }
    );
  });

  // Page number
  slide.addText("06", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 1",
  title: "自我疗愈的科学基础",
  pageNumber: 6
};

module.exports = { createSlide, slideConfig };
