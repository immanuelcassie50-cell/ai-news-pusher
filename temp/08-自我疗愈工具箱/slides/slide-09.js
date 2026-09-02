/**
 * Slide 09 - 自我疗愈的局限性
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
  slide.addText("自我疗愈的局限性", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("诚实面对自我疗愈的边界，是科学自我关怀的体现", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Four limitation cards in 2x2 grid
  const limitations = [
    {
      num: "1",
      title: "不能替代专业治疗",
      desc: "严重的心理疾病（如重度抑郁、精神分裂症等）需要专业的医学治疗，自我疗愈只能作为辅助手段"
    },
    {
      num: "2",
      title: "效果因人而异",
      desc: "每个人的心理特质、问题类型和严重程度不同，同一套方法的效果可能差异很大，需要个性化调整"
    },
    {
      num: "3",
      title: "无法解决根源问题",
      desc: "自我疗愈更多处理的是症状和表面情绪，对于深层次的心理创伤或人格问题，需要专业的心理治疗"
    },
    {
      num: "4",
      title: "可能延误治疗时机",
      desc: "过度依赖自我调节而回避专业帮助，可能导致问题恶化，错过最佳干预时机"
    }
  ];

  const cardW = 4.35;
  const cardH = 1.7;
  const startX = 0.5;
  const startY = 1.55;
  const gapX = 0.3;
  const gapY = 0.25;

  limitations.forEach((lim, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Left accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.08, h: cardH,
      fill: { color: theme.light }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.2, y: y + 0.2, w: 0.45, h: 0.45,
      fill: { color: theme.primary }
    });
    slide.addText(lim.num, {
      x: x + 0.2, y: y + 0.2, w: 0.45, h: 0.45,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", align: "center", valign: "middle", bold: true
    });

    // Title
    slide.addText(lim.title, {
      x: x + 0.75, y: y + 0.2, w: cardW - 0.95, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle", bold: true
    });

    // Description
    slide.addText(lim.desc, {
      x: x + 0.2, y: y + 0.75, w: cardW - 0.4, h: 0.85,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      lineSpaceMult: 1.4
    });
  });

  // Bottom message
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.15, w: 9, h: 0.4,
    fill: { color: theme.primary, transparency: 10 }
  });
  slide.addText("明智的做法：日常保养为主，专业支持为辅，必要时及时转介", {
    x: 0.5, y: 5.15, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle", bold: false
  });

  // Page number
  slide.addText("09", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 1",
  title: "自我疗愈的局限性",
  pageNumber: 9
};

module.exports = { createSlide, slideConfig };
