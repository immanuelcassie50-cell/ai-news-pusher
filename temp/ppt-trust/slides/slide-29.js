// slide-29.js - 四条提醒
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("四条提醒", {
    x: 0.5, y: 0.3, w: 4, h: 0.6,
    fontSize: 26,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  // Reminders
  const reminders = [
    "用户说贵不等于用户没有价值观",
    "消费者犹豫不等于消费者不够努力",
    "员工焦虑不等于员工抗拒成长",
    "客户质疑不等于客户不懂专业"
  ];

  let yPos = 1.1;
  reminders.forEach((text, index) => {
    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.6, y: yPos + 0.1, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });

    slide.addText(String(index + 1), {
      x: 0.6, y: yPos + 0.1, w: 0.5, h: 0.5,
      fontSize: 18,
      fontFace: "Arial",
      color: "FFFFFF",
      bold: true,
      align: "center",
      valign: "middle"
    });

    // Text
    slide.addText(text, {
      x: 1.3, y: yPos + 0.1, w: 8, h: 0.5,
      fontSize: 18,
      fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });

    yPos += 0.7;
  });

  // Summary box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 1.1,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  slide.addText("先承认对方所处的现实，再表达观点或给出方案", {
    x: 0.7, y: 4.0, w: 8.6, h: 1.1,
    fontSize: 20,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
