// slide-126.js - 进阶：斗鸡博弈
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 126,
  title: '进阶：斗鸡博弈'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("进阶：斗鸡博弈", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Game description
  slide.addText("两个玩家对着驱车前行，谁先躲避谁输", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Payoff matrix visualization
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.5, h: 2.5,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  slide.addText("收益矩阵", {
    x: 0.5, y: 1.5, w: 4.5, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // Matrix header row
  slide.addText("        ", {
    x: 1.5, y: 2.0, w: 1.5, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    fill: { color: theme.light }, align: "center", valign: "middle"
  });
  slide.addText("前进", {
    x: 3.0, y: 2.0, w: 1, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    fill: { color: theme.primary }, color: "ffffff", align: "center", valign: "middle"
  });
  slide.addText("后退", {
    x: 4.0, y: 2.0, w: 0.9, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    fill: { color: theme.secondary }, color: "ffffff", align: "center", valign: "middle"
  });

  // Matrix content
  slide.addText("前进", {
    x: 1.5, y: 2.4, w: 1.5, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    fill: { color: theme.primary }, color: "ffffff", align: "center", valign: "middle"
  });
  slide.addText("-1, -1", {
    x: 3.0, y: 2.4, w: 1, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "c53030", align: "center", valign: "middle"
  });
  slide.addText("2, 0", {
    x: 4.0, y: 2.4, w: 0.9, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: theme.primary, align: "center", valign: "middle"
  });

  slide.addText("后退", {
    x: 1.5, y: 2.8, w: 1.5, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    fill: { color: theme.secondary }, color: "ffffff", align: "center", valign: "middle"
  });
  slide.addText("0, 2", {
    x: 3.0, y: 2.8, w: 1, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: theme.primary, align: "center", valign: "middle"
  });
  slide.addText("1, 1", {
    x: 4.0, y: 2.8, w: 0.9, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "2f855a", align: "center", valign: "middle"
  });

  slide.addText("左侧: 你的收益    右侧: 对手收益", {
    x: 0.7, y: 3.3, w: 4, h: 0.35,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Right side: Applications
  slide.addShape("rect", {
    x: 5.2, y: 1.5, w: 4.3, h: 2.5,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  slide.addShape("rect", {
    x: 5.2, y: 1.5, w: 4.3, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("现实应用", {
    x: 5.2, y: 1.5, w: 4.3, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  const apps = [
    "商业价格战：双方死扛导致双输",
    "职场对峙：晋升名额争夺",
    "国际争端：军备竞赛",
    "谈判僵局：谁先让步谁输面子"
  ];

  apps.forEach((app, i) => {
    const y = 2.1 + i * 0.45;
    slide.addText("• " + app, {
      x: 5.4, y: y, w: 3.9, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Key insight
  slide.addShape("rect", {
    x: 0.5, y: 4.2, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("斗鸡博弈的关键：谁先判断对方不会退让，谁就赢了", {
    x: 0.5, y: 4.2, w: 9, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("126", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-126-preview.pptx" });
}
