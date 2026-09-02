const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "建立正念习惯的策略",
  type: "content",
  pageNumber: 45
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("45", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("建立正念习惯的策略", {
    x: 0.5, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Strategies
  const strategies = [
    {
      num: "01",
      title: "锚定现有习惯",
      desc: "在已有的日常行为上添加正念练习",
      example: "刷牙时 → 感受刷牙的触感\n洗澡时 → 感受水流温度\n通勤时 → STOP五感练习"
    },
    {
      num: "02",
      title: "设置提醒",
      desc: "利用环境线索和科技辅助",
      example: '手机壁纸设为"停一下"\n电脑桌面便签\n固定时间闹钟'
    },
    {
      num: "03",
      title: "从最短的开始",
      desc: "降低启动阻力，建立信心",
      example: "从1分钟开始\n从1个感官开始\n从1天1次开始"
    },
    {
      num: "04",
      title: '接受"不完美"',
      desc: "中断不代表失败，坚持才是关键",
      example: "漏了一天？没关系\n走神了？很正常\n中断后继续就是"
    }
  ];

  strategies.forEach((strat, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.6;
    const y = 1.2 + row * 2.0;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(strat.num, {
      x: x, y: y, w: 0.7, h: 0.7,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(strat.title, {
      x: x + 0.85, y: y + 0.1, w: 3.4, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(strat.desc, {
      x: x + 0.85, y: y + 0.55, w: 3.4, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "left", valign: "middle"
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: y + 0.95, w: 4, h: 0.02,
      fill: { color: theme.bg }
    });

    // Example
    slide.addText(strat.example.replace(/\n/g, "  |  "), {
      x: x + 0.2, y: y + 1.05, w: 4, h: 0.7,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "left", valign: "top"
    });
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
