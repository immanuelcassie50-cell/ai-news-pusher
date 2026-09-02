// slide-05.js - Knowledge Point 3: Daily Training (Attention Management)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '知识点三：日常注意力训练技巧'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("知识点三：日常注意力训练技巧", {
    x: 0.5, y: 0.2, w: 9, h: 0.45,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Definition card
  slide.addShape("roundRect", {
    x: 0.4, y: 1.0, w: 9.2, h: 0.65,
    fill: { color: theme.light, transparency: 40 },
    rectRadius: 0.08
  });
  slide.addText([
    { text: "定义：", options: { bold: true, color: theme.primary } },
    { text: "注意力像肌肉，可以通过日常训练增强。", options: { color: theme.secondary } }
  ], {
    x: 0.6, y: 1.0, w: 8.8, h: 0.65,
    fontSize: 14, fontFace: "Microsoft YaHei",
    valign: "middle"
  });

  // Three techniques - Icon + Text rows
  const techniques = [
    {
      num: "1",
      title: "呼吸训练",
      desc: "每天3次，每次1分钟深呼吸（4秒吸气，7秒屏息，8秒呼气）",
      color: theme.primary
    },
    {
      num: "2",
      title: "单点凝视",
      desc: "任意选取一个物体，凝视60秒不转移注意力",
      color: theme.accent
    },
    {
      num: "3",
      title: "番茄工作法",
      desc: "25分钟专注工作 + 5分钟休息，循环往复",
      color: theme.secondary
    }
  ];

  const rowStartY = 1.85;
  const rowH = 0.85;
  const rowGap = 0.15;

  techniques.forEach((tech, idx) => {
    const y = rowStartY + idx * (rowH + rowGap);

    // Row background card
    slide.addShape("roundRect", {
      x: 0.4, y: y, w: 9.2, h: rowH,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: "outer", color: "000000", blur: 2, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left color indicator bar
    slide.addShape("rect", {
      x: 0.4, y: y, w: 0.08, h: rowH,
      fill: { color: tech.color }
    });

    // Number circle
    slide.addShape("ellipse", {
      x: 0.65, y: y + rowH / 2 - 0.25, w: 0.5, h: 0.5,
      fill: { color: tech.color }
    });
    slide.addText(tech.num, {
      x: 0.65, y: y + rowH / 2 - 0.25, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(tech.title, {
      x: 1.35, y: y + 0.12, w: 2.2, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(tech.desc, {
      x: 1.35, y: y + 0.45, w: 7.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Case card (bottom left)
  slide.addShape("roundRect", {
    x: 0.4, y: 4.0, w: 5.8, h: 1.15,
    fill: { color: "FFFFFF" },
    rectRadius: 0.08,
    shadow: { type: "outer", color: "000000", blur: 3, offset: 2, angle: 135, opacity: 0.06 }
  });
  slide.addShape("rect", {
    x: 0.4, y: 4.0, w: 0.06, h: 1.15,
    fill: { color: theme.accent }
  });
  slide.addText("案例", {
    x: 0.6, y: 4.07, w: 1, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("NBA球星库里在赛前热身时，会进行专门的视觉专注训练——盯着篮筐中心点呼吸，据说这帮助他在比赛中保持高度专注。", {
    x: 0.6, y: 4.38, w: 5.4, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Practice card (bottom right)
  slide.addShape("roundRect", {
    x: 6.4, y: 4.0, w: 3.2, h: 1.15,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.08,
    line: { color: theme.primary, width: 1.5 }
  });
  slide.addText("练习", {
    x: 6.55, y: 4.07, w: 1, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("从今天开始，选择一个技巧，坚持练习3天，记录你的感受变化。", {
    x: 6.55, y: 4.38, w: 2.9, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("5", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "22223b",
    secondary: "4a4e69",
    accent: "9a8c98",
    light: "c9ada7",
    bg: "f2e9e4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/slides/slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };