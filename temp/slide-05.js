// slide-05.js - Content: 模型的"知识边界"
const pptxgen = require('pptxgenjs');

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText('模型的"知识边界"', {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true, margin: 0
  });

  const centerX = 3.2;
  const centerY = 3.0;
  const outerR = 1.8;
  const innerR = 1.2;

  slide.addShape(pres.shapes.OVAL, {
    x: centerX - outerR, y: centerY - outerR,
    w: outerR * 2, h: outerR * 2,
    fill: { color: theme.light }
  });

  slide.addShape(pres.shapes.OVAL, {
    x: centerX - innerR, y: centerY - innerR,
    w: innerR * 2, h: innerR * 2,
    fill: { color: 'FFFFFF' }
  });

  slide.addText('已知
知识', {
    x: centerX - 0.6, y: centerY - 0.4, w: 1.2, h: 0.8,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: theme.primary, bold: true,
    align: 'center', valign: 'middle'
  });

  slide.addText('训练数据覆盖', {
    x: centerX - 1.2, y: centerY + innerR + 0.15, w: 2.4, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'center'
  });

  slide.addText('未覆盖区域 = 边界', {
    x: centerX - 1.2, y: centerY + outerR + 0.15, w: 2.4, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.accent, align: 'center'
  });

  const qMarks = [
    { x: centerX - outerR - 0.3, y: centerY - 0.15 },
    { x: centerX + outerR - 0.15, y: centerY - 0.15 },
    { x: centerX - 0.1, y: centerY - outerR - 0.3 },
    { x: centerX - 0.1, y: centerY + outerR - 0.15 }
  ];

  qMarks.forEach(q => {
    slide.addText('?', {
      x: q.x, y: q.y, w: 0.4, h: 0.4,
      fontSize: 20, fontFace: 'Arial',
      color: theme.accent, bold: true,
      align: 'center', valign: 'middle'
    });
  });

  const cardX = 5.8;
  const cardW = 3.7;
  const cardH = 1.35;
  const cardGap = 0.15;

  const limitCards = [
    { title: '训练数据局限', items: ['并非所有信息都包含在训练数据中', '数据采集存在偏差和疏漏'] },
    { title: '时间截止限制', items: ['知识有截止日期', '无法获取最新信息'] },
    { title: '领域覆盖不均', items: ['某些领域数据丰富', '某些领域严重匮乏'] }
  ];

  limitCards.forEach((card, i) => {
    const cardY = 1.15 + i * (cardH + cardGap);

    slide.addShape(pres.shapes.roundRect, {
      x: cardX, y: cardY, w: cardW, h: cardH,
      fill: { color: 'FFFFFF' },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.08
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: cardX, y: cardY, w: 0.1, h: cardH,
      fill: { color: theme.accent }
    });

    slide.addText(card.title, {
      x: cardX + 0.25, y: cardY + 0.1, w: cardW - 0.4, h: 0.4,
      fontSize: 14, fontFace: 'Microsoft YaHei',
      color: theme.primary, bold: true
    });

    slide.addText(card.items.map((item, idx) => ({
      text: item,
      options: { bullet: true, breakLine: idx < card.items.length - 1 }
    })), {
      x: cardX + 0.25, y: cardY + 0.5, w: cardW - 0.4, h: 0.8,
      fontSize: 11, fontFace: 'Microsoft YaHei',
      color: theme.secondary, paraSpaceAfter: 4
    });
  });

  slide.addShape(pres.shapes.roundRect, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.06
  });

  slide.addText('理解边界 = 正确使用AI的第一步', {
    x: 0.7, y: 5.08, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true, align: 'center', valign: 'middle'
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: '1A1A1A',
    secondary: '2D2D2D',
    accent: 'B81025',
    light: 'E8E4DF',
    bg: 'F6F3EF'
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: 'preview-slide-05.pptx' });
}

module.exports = { createSlide };
