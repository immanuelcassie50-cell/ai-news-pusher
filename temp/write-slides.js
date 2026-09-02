const fs = require('fs');
const path = require('path');

const slidesDir = 'D:/新课开发/自然科学/15.AI大模型底层原理/授课PPT/slides';

const slide03 = `// slide-03.js - Content: 幻觉的三种类型
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
    { num: '1', title: '事实性幻觉', desc: '与可验证事实相悖', example: '将2024年奥运金牌说成是2022年获得' },
    { num: '2', title: '领域性幻觉', desc: '专业知识领域的错误', example: '医学诊断错误法律条款误用' },
    { num: '3', title: '上下文幻觉', desc: '与给定上下文矛盾', example: '忽略前文条件自相矛盾的回答' }
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
`;

const slide04 = `// slide-04.js - Content: 幻觉的根源
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

  slide.addText('而是在预测可能的文本序列', {
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

  slide.addText('训练数据中的统计规律不等于客观事实', {
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
`;

const slide05 = `// slide-05.js - Content: 模型的"知识边界"
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

  slide.addText('已知知识', {
    x: centerX - 0.6, y: centerY - 0.2, w: 1.2, h: 0.4,
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
`;

fs.writeFileSync(path.join(slidesDir, 'slide-03.js'), slide03);
console.log('Written slide-03.js');

fs.writeFileSync(path.join(slidesDir, 'slide-04.js'), slide04);
console.log('Written slide-04.js');

fs.writeFileSync(path.join(slidesDir, 'slide-05.js'), slide05);
console.log('Written slide-05.js');

console.log('All done!');
