// slide-136.js - 扩展资源
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 136,
  title: '扩展资源'
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
  slide.addText("扩展资源", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Resource categories
  const resources = [
    {
      title: "在线课程",
      items: ["Coursera: Game Theory", "耶鲁大学：金融市场的博弈论", "MIT OpenCourseWare"]
    },
    {
      title: "书籍推荐",
      items: ["《合作的进化》- Axelrod", "《博弈与社会》- 张维迎", "《错误的行为》- Thaler"]
    },
    {
      title: "播客与视频",
      items: ["Think Like a Game Theorist", "The Art of Strategy", "囚徒困境纪录片"]
    }
  ];

  resources.forEach((r, i) => {
    const x = 0.5 + i * 3.1;

    slide.addShape("rect", {
      x: x, y: 1.15, w: 2.9, h: 3.2,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addShape("rect", {
      x: x, y: 1.15, w: 2.9, h: 0.5,
      fill: { color: i === 0 ? theme.primary : i === 1 ? theme.secondary : theme.accent }
    });
    slide.addText(r.title, {
      x: x, y: 1.15, w: 2.9, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    r.items.forEach((item, j) => {
      const y = 1.8 + j * 0.8;
      slide.addText("• " + item, {
        x: x + 0.15, y: y, w: 2.6, h: 0.7,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.secondary, valign: "top"
      });
    });
  });

  // Academic note
  slide.addShape("rect", {
    x: 0.5, y: 4.5, w: 9, h: 0.55,
    fill: { color: theme.light }
  });
  slide.addText("学术论文：Axelrod (1984)《合作的进化》| Tirole (1988)《产业组织理论》", {
    x: 0.5, y: 4.5, w: 9, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("136", {
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
  pres.writeFile({ fileName: "slide-136-preview.pptx" });
}
