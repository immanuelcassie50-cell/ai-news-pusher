// slide-65.js - Case Story: That Father's Persistence
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 65, title: '案例：那个爸爸的坚持' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("案例：那个爸爸的坚持", {
    x: 0.5, y: 0.3, w: 9, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Subtitle line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Story points as timeline cards
  const storyPoints = [
    { num: "1", text: "爸爸态度很强硬，第一句话：我就想问你同不同意我这个方案" },
    { num: "2", text: "他坚持让孩子报一个他自己年轻时向往、但现在已明显收缩的专业" },
    { num: "3", text: "没有直接反驳，而是把这几年这个领域真实的招聘数据、薪资变化、培养方案调整情况一条条摆出来" },
    { num: "4", text: '全程没有说"我建议你换一个"' },
    { num: "5", text: "问他：这些信息跟您当年了解到的，是不是有点不一样了" },
    { num: "6", text: "他沉默了一分钟，说：确实，我这些年没太关注这块的变化" }
  ];

  // Layout: 2 columns x 3 rows timeline
  const colWidth = 4.4;
  const rowHeight = 1.25;
  const startX = 0.5;
  const startY = 1.1;

  storyPoints.forEach((point, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (colWidth + 0.2);
    const y = startY + row * rowHeight;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: colWidth, h: 1.1,
      fill: { color: "FFFFFF" },
      rectRadius: 0.1,
      shadow: { type: 'outer', blur: 3, offset: 1, angle: 45, color: '000000', opacity: 0.1 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y + 0.15, w: 0.06, h: 0.8,
      fill: { color: theme.accent }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + 0.35, w: 0.4, h: 0.4,
      fill: { color: theme.primary }
    });
    slide.addText(point.num, {
      x: x + 0.2, y: y + 0.35, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: `center`, valign: `middle`
    });

    // Story text
    slide.addText(point.text, {
      x: x + 0.7, y: y + 0.12, w: colWidth - 0.9, h: 0.86,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });

    // Connector line (between columns)
    if (col === 0 && idx < storyPoints.length - 2) {
      slide.addShape(pres.shapes.LINE, {
        x: x + colWidth + 0.05, y: y + 0.55, w: 0.1, h: 0,
        line: { color: theme.light, width: 1.5, dashType: 'dash' }
      });
    }
  });

  // Timeline connector arrows (vertical between rows)
  slide.addShape(pres.shapes.LINE, {
    x: 0.35, y: 1.85, w: 0, h: 0.5,
    line: { color: theme.accent, width: 2 }
  });
  slide.addShape(pres.shapes.LINE, {
    x: 5.15, y: 1.85, w: 0, h: 0.5,
    line: { color: theme.accent, width: 2 }
  });
  slide.addShape(pres.shapes.LINE, {
    x: 0.35, y: 3.1, w: 0, h: 0.5,
    line: { color: theme.accent, width: 2 }
  });
  slide.addShape(pres.shapes.LINE, {
    x: 5.15, y: 3.1, w: 0, h: 0.5,
    line: { color: theme.accent, width: 2 }
  });

  // Quote highlight at bottom
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.85, w: 8.4, h: 0.55,
    fill: { color: theme.primary, transparency: 10 },
    rectRadius: 0.08
  });
  slide.addText("关键：不反驳、不说教，用数据说话，让对方自己得出结论", {
    x: 0.7, y: 4.85, w: 8, h: 0.55,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  // Page number badge (circle style at bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("65", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-65-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
