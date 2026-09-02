// slide-120.js - 讨论：识别你身边的博弈
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 120,
  title: '讨论：识别你身边的博弈'
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
  slide.addText("讨论：识别你身边的博弈", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Exercise instruction
  slide.addText("练习：列出你正在参与的几场博弈", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Three columns for game types
  const gameTypes = [
    {
      title: "供应商-客户关系",
      color: theme.primary,
      items: ["价格谈判", "质量vs成本", "交付时间", "长期合同"]
    },
    {
      title: "同事间合作关系",
      color: theme.secondary,
      items: ["信息共享", "任务分工", "功劳归属", "加班意愿"]
    },
    {
      title: "竞争对手关系",
      color: theme.accent,
      items: ["市场份额", "价格战", "人才争夺", "产品差异化"]
    }
  ];

  gameTypes.forEach((game, i) => {
    const x = 0.5 + i * 3.1;

    slide.addShape("rect", {
      x: x, y: 1.5, w: 2.9, h: 3.7,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addShape("rect", {
      x: x, y: 1.5, w: 2.9, h: 0.55,
      fill: { color: game.color }
    });
    slide.addText(game.title, {
      x: x, y: 1.5, w: 2.9, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    game.items.forEach((item, j) => {
      const y = 2.25 + j * 0.7;
      slide.addShape("ellipse", {
        x: x + 0.2, y: y + 0.1, w: 0.35, h: 0.35,
        fill: { color: theme.light }
      });
      slide.addText((j + 1).toString(), {
        x: x + 0.2, y: y + 0.1, w: 0.35, h: 0.35,
        fontSize: 11, fontFace: "Arial",
        color: game.color, bold: true, align: "center", valign: "middle"
      });
      slide.addText(item, {
        x: x + 0.65, y: y, w: 2.1, h: 0.55,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, valign: "middle"
      });
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("120", {
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
  pres.writeFile({ fileName: "slide-120-preview.pptx" });
}
