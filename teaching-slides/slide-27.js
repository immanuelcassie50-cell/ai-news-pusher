const pptxgen = require('pptxgenjs');

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText('追问方式', {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: 'Microsoft YaHei',
    color: 'ffffff', bold: true, margin: 0
  });

  // Four technique cards - 2x2 grid
  const techniques = [
    {
      type: '澄清式追问',
      example: '能详细说说吗？',
      purpose: '确保理解准确',
tip: `使用'具体是...'`,
      color: theme.accent
    },
    {
      type: '深入式追问',
example: `'还有呢？'`,
      purpose: '挖掘更多信息',
      tip: '不要急于下结论',
      color: theme.primary
    },
    {
      type: '挑战式追问',
example: `'为什么这样认为？'`,
      purpose: '检验观点依据',
      tip: '保持中立态度',
      color: theme.secondary
    },
    {
      type: '假设式追问',
example: `'如果是另一种情况...？'`,
      purpose: '拓展思维边界',
      tip: '打开更多可能性',
      color: theme.accent
    }
  ];

  const cStartX = 0.5;
  const cStartY = 1.15;
  const cW = 4.4;
  const cH = 2.0;
  const cGapX = 0.3;
  const cGapY = 0.25;

  techniques.forEach((tech, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = cStartX + col * (cW + cGapX);
    const y = cStartY + row * (cH + cGapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cW, h: cH,
      fill: { color: 'ffffff' },
      line: { color: theme.light, width: 1 },
      shadow: { type: 'outer', color: '000000', blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cW, h: 0.1,
      fill: { color: tech.color }
    });

    // Type label
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: y + 0.25, w: 1.8, h: 0.4,
      fill: { color: tech.color, transparency: 85 }
    });
    slide.addText(tech.type, {
      x: x + 0.2, y: y + 0.25, w: 1.8, h: 0.4,
      fontSize: 13, fontFace: 'Microsoft YaHei',
      color: tech.color, bold: true,
align: `center', valign: 'middle`
    });

    // Example quote
    slide.addText(tech.example, {
      x: x + 0.2, y: y + 0.75, w: cW - 0.4, h: 0.5,
      fontSize: 16, fontFace: 'Microsoft YaHei',
      color: theme.primary, italic: true, margin: 0
    });

    // Purpose and tip
    slide.addText(tech.purpose, {
      x: x + 0.2, y: y + 1.3, w: cW - 0.4, h: 0.3,
      fontSize: 12, fontFace: 'Microsoft YaHei',
      color: theme.secondary, margin: 0
    });
    slide.addText('技巧: ' + tech.tip, {
      x: x + 0.2, y: y + 1.6, w: cW - 0.4, h: 0.3,
      fontSize: 11, fontFace: 'Microsoft YaHei',
      color: theme.secondary, margin: 0
    });
  });

  // Bottom tip box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.55, w: 9, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText('追问原则：不批判、不引导、不预设答案', {
    x: 0.5, y: 5.55, w: 9, h: 0.6,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: 'ffffff', bold: true,
align: `center', valign: 'middle`
  });

  return slide;
}

module.exports = { createSlide };
