const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("成为催化师的十个好处", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("投资自己，收获成长", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 10 benefits in 2x5 grid
  const benefits = [
    { num: "01", title: "提升领导力", desc: "从命令者转变为赋能者", color: theme.accent },
    { num: "02", title: "改善人际关系", desc: "建立信任和开放", color: theme.primary },
    { num: "03", title: "增强决策质量", desc: "集思广益", color: "#43aa8b" },
    { num: "04", title: "加速团队成长", desc: "帮助他人成长", color: theme.secondary },
    { num: "05", title: "拓展职业路径", desc: "从HR到OD到高管教练", color: "#e07a5f" },
    { num: "06", title: "提升思维能力", desc: "深度思考和提问", color: "#9b5de5" },
    { num: "07", title: "增加个人影响力", desc: "帮助组织进化", color: "#00bbf9" },
    { num: "08", title: "获得经济回报", desc: "专业催化服务费", color: "#f9844a" },
    { num: "09", title: "实现自我价值", desc: "帮助他人成功", color: "#8338ec" },
    { num: "10", title: "持续成长进步", desc: "终身学习者", color: "#3a86ff" }
  ];

  // Layout: 5 columns x 2 rows
  benefits.forEach((b, i) => {
    const col = i % 5;
    const row = Math.floor(i / 5);
    const x = 0.3 + col * 1.94;
    const y = 1.5 + row * 1.75;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 1.8, h: 1.55,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 1.8, h: 0.1,
      fill: { color: b.color }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.6, y: y + 0.2, w: 0.6, h: 0.6,
      fill: { color: b.color }
    });
    slide.addText(b.num, {
      x: x + 0.6, y: y + 0.2, w: 0.6, h: 0.6,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(b.title, {
      x: x + 0.1, y: y + 0.88, w: 1.6, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Description
    slide.addText(b.desc, {
      x: x + 0.1, y: y + 1.15, w: 1.6, h: 0.3,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });
  });

  // Bottom motivational banner
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.05, w: 9.2, h: 0.75,
    fill: { color: theme.accent }
  });

  slide.addText("\"成为催化师，是给自己最好的投资\"", {
    x: 0.6, y: 5.05, w: 8.8, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("每一天的练习，都在塑造更优秀的自己", {
    x: 0.6, y: 5.45, w: 8.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "ffffff", transparency: 20,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
