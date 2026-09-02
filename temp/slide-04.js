// slide-04.js - Content: 幻觉的根源
const pptxgen = require('pptxgenjs');

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText('幻觉的根源', {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true, margin: 0
  });

  slide.addShape(pres.shapes.roundRect, {
    x: 0.5, y: 1.15, w: 4.5, h: 1.5,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  slide.addText('统计预测', {
    x: 0.7, y: 1.3, w: 4.1, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true, align: 'center'
  });

  slide.addText('而非检索', {
    x: 0.7, y: 1.85, w: 4.1, h: 0.5,
    fontSize: 22, fontFace: 'Microsoft YaHei',
    color: theme.accent, bold: true, align: 'center'
  });

  const diceX = 1.0;
  const diceY = 3.0;
  const diceSize = 0.9;
  const diceValues = [
    { dots: [[0.5, 0.5]], prob: '80%' },
    { dots: [[0.25, 0.25], [0.75, 0.75]], prob: '15%' },
    { dots: [[0.25, 0.5], [0.75, 0.5]], prob: '5%' }
  ];

  diceValues.forEach((dice, i) => {
    const dx = diceX + i * 1.4;

    slide.addShape(pres.shapes.roundRect, {
      x: dx, y: diceY, w: diceSize, h: diceSize,
      fill: { color: 'FFFFFF' },
      line: { color: theme.secondary, width: 1 },
      rectRadius: 0.12
    });

    dice.dots.forEach(dot => {
      slide.addShape(pres.shapes.OVAL, {
        x: dx + dot[0] * diceSize - 0.08,
        y: diceY + dot[1] * diceSize - 0.08,
        w: 0.16, h: 0.16,
        fill: { color: theme.primary }
      });
    });

    slide.addText(dice.prob, {
      x: dx - 0.2, y: diceY + diceSize + 0.1, w: diceSize + 0.4, h: 0.3,
      fontSize: 12, fontFace: 'Arial',
      color: theme.accent, bold: true, align: 'center'
    });
  });

  slide.addShape(pres.shapes.rightArrow, {
    x: 1.0, y: 4.5, w: 3.5, h: 0.35,
    fill: { color: theme.light }
  });

  slide.addText('选择概率最高的输出', {
    x: 1.0, y: 4.9, w: 3.5, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'center'
  });

  slide.addShape(pres.shapes.roundRect, {
    x: 5.3, y: 1.15, w: 4.2, h: 4.2,
    fill: { color: theme.light },
    rectRadius: 0.1
  });

  slide.addText('关键洞察', {
    x: 5.5, y: 1.35, w: 3.8, h: 0.5,
    fontSize: 18, fontFace: 'Microsoft YaHei',
    color: theme.accent, bold: true
  });

  slide.addText('模型并不"知道"事实', {
    x: 5.5, y: 1.9, w: 3.8, h: 0.5,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: theme.primary, bold: true
  });

  slide.addText('而是在预测
可能的文本序列', {
    x: 5.5, y: 2.4, w: 3.8, h: 0.8,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 6.85, y: 3.3, w: 0.6, h: 0.6,
    fill: { color: theme.accent }
  });

  slide.addText('?', {
    x: 6.85, y: 3.3, w: 0.6, h: 0.6,
    fontSize: 28, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  slide.addShape(pres.shapes.rightArrow, {
    x: 7.55, y: 3.5, w: 0.5, h: 0.2,
    fill: { color: theme.secondary }
  });

  slide.addShape(pres.shapes.roundRect, {
    x: 8.15, y: 3.3, w: 1.1, h: 0.6,
    fill: { color: 'FFFFFF' },
    line: { color: theme.secondary, width: 1 },
    rectRadius: 0.08
  });

  slide.addText('文本', {
    x: 8.15, y: 3.3, w: 1.1, h: 0.6,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'center', valign: 'middle'
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 4.2, w: 3.8, h: 0.02,
    fill: { color: theme.secondary, transparency: 50 }
  });

  slide.addText('训练数据中的统计规律
≠ 客观事实', {
    x: 5.5, y: 4.35, w: 3.8, h: 0.8,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'center'
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
  pres.writeFile({ fileName: 'preview-slide-04.pptx' });
}

module.exports = { createSlide };
