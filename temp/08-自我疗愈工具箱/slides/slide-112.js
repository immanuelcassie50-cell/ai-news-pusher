/**
 * Slide 112 - 卡片5：自我关怀话术
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Card label badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.35, w: 1.8, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("工具卡片 5", {
    x: 0.5, y: 0.35, w: 1.8, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Title
  slide.addText("自我关怀话术", {
    x: 2.5, y: 0.3, w: 5, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("Kristin Neff 自我关怀理论的核心技术", {
    x: 2.5, y: 0.85, w: 6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Three elements - horizontal cards
  const elements = [
    {
      title: "善待自己",
      icon: "♥",
      desc: "用温暖而非批判的态度对待自己",
      example: '这件事确实很难，但我已经在尽力了',
      color: theme.primary
    },
    {
      title: "共通人性",
      icon: "∞",
      desc: "认识到痛苦是人类共同经历的一部分",
      example: '每个人都会遇到这样的困难，这不是只有我会经历的',
      color: theme.accent
    },
    {
      title: "正念觉察",
      icon: "◎",
      desc: "对当前体验保持平衡的觉察",
      example: '我现在感到很痛苦，但痛苦只是暂时的',
      color: theme.light
    }
  ];

  const elemCardW = 2.95;
  const elemStartX = 0.5;
  const elemY = 1.35;
  const elemH = 2.0;

  elements.forEach((elem, i) => {
    const x = elemStartX + i * (elemCardW + 0.15);

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: elemY, w: elemCardW, h: elemH,
      fill: { color: elem.color }
    });

    // Icon
    slide.addText(elem.icon, {
      x: x, y: elemY + 0.1, w: elemCardW, h: 0.5,
      fontSize: 28, fontFace: "Arial",
      color: i === 1 ? theme.secondary : "FFFFFF",
      bold: false, align: "center"
    });

    // Title
    slide.addText(elem.title, {
      x: x + 0.15, y: elemY + 0.6, w: elemCardW - 0.3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: i === 1 ? theme.secondary : "FFFFFF",
      bold: true, align: "center"
    });

    // Description
    slide.addText(elem.desc, {
      x: x + 0.15, y: elemY + 1.0, w: elemCardW - 0.3, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: i === 1 ? theme.secondary : "FFFFFF",
      bold: false, align: "center"
    });

    // Example
    slide.addText(elem.example, {
      x: x + 0.1, y: elemY + 1.45, w: elemCardW - 0.2, h: 0.5,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: i === 1 ? theme.light : theme.accent,
      bold: false, align: "center", italic: true
    });
  });

  // Script template section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.55, w: 9, h: 1.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addText("常用自我关怀话术模板", {
    x: 0.7, y: 3.7, w: 8, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Template examples in 2 columns
  const templates = [
    { label: "挫折时：", text: '这很难，但我可以度过' },
    { label: "失败时：", text: '失败是成长的一部分' },
    { label: "自责时：", text: '我已经在能力范围内尽力了' },
    { label: "孤独时：", text: '有很多人和我有类似的感受' }
  ];

  templates.forEach((t, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const tx = 0.7 + col * 4.5;
    const ty = 4.1 + row * 0.45;

    slide.addText(t.label, {
      x: tx, y: ty, w: 1.2, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(t.text, {
      x: tx + 1.2, y: ty, w: 3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });
  });

  // Page number
  slide.addText("112", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "tool-card",
  module: "Tool Cards",
  title: "自我关怀话术",
  pageNumber: 112
};

module.exports = { createSlide, slideConfig };
