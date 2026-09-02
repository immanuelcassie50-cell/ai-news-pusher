// slide-03.js - Content: 幻觉的三种类型
const pptxgen = require('pptxgenjs');

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText('幻觉的三种类型', {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true, margin: 0
  });

  const cardW = 2.9;
  const cardH = 3.6;
  const cardY = 1.2;
  const cardGap = 0.2;
  const startX = 0.5;

  const categories = [
    { num: '1', title: '事实性幻觉', desc: '与可验证事实相悖', example: '将2024年奥运金牌
说成是2022年获得' },
    { num: '2', title: '领域性幻觉', desc: '专业知识领域的错误', example: '医学诊断错误
法律条款误用' },
    { num: '3', title: '上下文幻觉', desc: '与给定上下文矛盾', example: '忽略前文条件
自相矛盾的回答' }
  ];

  categories.forEach((cat, i) => {
    const cardX = startX + i * (cardW + cardGap);

    slide.addShape(pres.shapes.roundRect, {
      x: cardX, y: cardY, w: cardW, h: cardH,
      fill: { color: 'FFFFFF' },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: cardX, y: cardY, w: cardW, h: 0.12,
      fill: { color: theme.accent }
    });

    slide.addShape(pres.shapes.OVAL, {
      x: cardX + cardW / 2 - 0.35, y: cardY + 0.35, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });

    slide.addText(cat.num, {
      x: cardX + cardW / 2 - 0.35, y: cardY + 0.35, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: 'Arial',
      color: 'FFFFFF', bold: true,
      align: 'center', valign: 'middle'
    });

    slide.addText(cat.title, {
      x: cardX + 0.15, y: cardY + 1.2, w: cardW - 0.3, h: 0.5,
      fontSize: 18, fontFace: 'Microsoft YaHei',
      color: theme.primary, bold: true, align: 'center'
    });

    slide.addText(cat.desc, {
      x: cardX + 0.15, y: cardY + 1.7, w: cardW - 0.3, h: 0.5,
      fontSize: 12, fontFace: 'Microsoft YaHei',
      color: theme.secondary, align: 'center'
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: cardX + 0.4, y: cardY + 2.3, w: cardW - 0.8, h: 0.02,
      fill: { color: theme.light }
    });

    slide.addText(cat.example, {
      x: cardX + 0.15, y: cardY + 2.45, w: cardW - 0.3, h: 1.0,
      fontSize: 11, fontFace: 'Microsoft YaHei',
      color: theme.accent, align: 'center', valign: 'top'
    });
  });

  slide.addShape(pres.shapes.roundRect, {
    x: 0.5, y: 4.95, w: 9, h: 0.55,
    fill: { color: theme.light },
    rectRadius: 0.06
  });

  slide.addText('这些幻觉往往看起来非常专业和流畅，需要仔细验证才能发现', {
    x: 0.7, y: 5.05, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'center', valign: 'middle'
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
  pres.writeFile({ fileName: 'preview-slide-03.pptx' });
}

module.exports = { createSlide };
