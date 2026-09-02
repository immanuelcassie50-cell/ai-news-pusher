// slide-52.js - 印度洋竞争格局
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 52,
  title: '印度洋竞争格局'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("印度洋竞争格局", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("52", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Three major players
  const players = [
    {
      name: "印度",
      strategy: "印度洋的主人",
      goals: ["控制印度洋咽喉要道", "建设蓝水海军", "抵制中国势力渗透"],
      color: theme.secondary
    },
    {
      name: "中国",
      strategy: "珍珠链战略",
      goals: ["保障能源运输通道", "海外后勤保障基地", "海上力量投射"],
      color: theme.accent
    },
    {
      name: "美国",
      strategy: "航行自由与联盟",
      goals: ["维护海上通道安全", "强化印太战略", "制衡中印两国"],
      color: theme.primary
    }
  ];

  players.forEach((player, idx) => {
    const x = 0.5 + idx * 3.1;

    // Card
    slide.addShape("rect", {
      x: x, y: 1.15, w: 2.9, h: 4.15,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Country name header
    slide.addShape("rect", {
      x: x, y: 1.15, w: 2.9, h: 0.65,
      fill: { color: player.color }
    });
    slide.addText(player.name, {
      x: x, y: 1.15, w: 2.9, h: 0.65,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Strategy label
    slide.addText("核心战略", {
      x: x + 0.15, y: 1.95, w: 2.6, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, bold: true,
      align: "left", valign: "middle"
    });
    slide.addText(player.strategy, {
      x: x + 0.15, y: 2.2, w: 2.6, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: player.color, bold: true,
      align: "left", valign: "middle"
    });

    // Divider
    slide.addShape("rect", {
      x: x + 0.15, y: 2.7, w: 2.6, h: 0.02,
      fill: { color: theme.light }
    });

    // Goals
    slide.addText("主要目标", {
      x: x + 0.15, y: 2.85, w: 2.6, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, bold: true,
      align: "left", valign: "middle"
    });

    player.goals.forEach((goal, gIdx) => {
      const gy = 3.2 + gIdx * 0.6;
      slide.addShape("ellipse", {
        x: x + 0.2, y: gy + 0.08, w: 0.15, h: 0.15,
        fill: { color: player.color }
      });
      slide.addText(goal, {
        x: x + 0.45, y: gy, w: 2.3, h: 0.55,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "top"
      });
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-52-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
