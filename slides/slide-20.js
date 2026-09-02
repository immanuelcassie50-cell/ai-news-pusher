// slide-20.js - 美国海权战略的传承与发展
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 20,
  title: '美国海权战略的传承与发展'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("美国海权战略的传承与发展", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("20", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Mahan inheritance section
  slide.addText("马汉理论的战略传承", {
    x: 0.5, y: 1.1, w: 4.5, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.08, h: 1.6,
    fill: { color: theme.accent }
  });

  slide.addText([
    { text: "• 舰队火力投射：保持全球海军存在", options: { breakLine: true } },
    { text: "• 关键海峡控制：苏伊士运河、马六甲、霍尔木兹", options: { breakLine: true } },
    { text: "• 盟国海军网络：利用盟国基地和港口", options: { breakLine: true } },
    { text: "• 海上通道安全：确保全球贸易航线畅通" }
  ], {
    x: 0.7, y: 1.5, w: 4.3, h: 1.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Spykman influence section
  slide.addText("斯皮克曼的边缘战略", {
    x: 5.2, y: 1.1, w: 4.3, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addShape("rect", {
    x: 5.2, y: 1.5, w: 0.08, h: 1.6,
    fill: { color: theme.accent }
  });

  slide.addText([
    { text: "• 离岸平衡手：防止欧亚出现主导力量", options: { breakLine: true } },
    { text: "• 联盟体系：北约、亚洲盟国网络", options: { breakLine: true } },
    { text: "• 边缘地带介入：第一岛链、第二岛链", options: { breakLine: true } },
    { text: "• 军力前沿部署：日韩美德军事基地" }
  ], {
    x: 5.4, y: 1.5, w: 4.3, h: 1.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Evolution timeline
  slide.addShape("rect", {
    x: 0.5, y: 3.3, w: 9, h: 0.04,
    fill: { color: theme.secondary }
  });

  slide.addText("战略演进", {
    x: 0.5, y: 3.45, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const eras = [
    { era: "1945-1991", title: "冷战海权", desc: "航母战斗群与核潜艇\n确保二次核打击能力" },
    { era: "1991-2001", title: "单极时刻", desc: "濒海战斗舰\n全球到达、快速打击" },
    { era: "2001-今", title: "大国竞争", desc: "分布式杀伤\n印太战略与海权现代化" }
  ];

  eras.forEach((e, i) => {
    const x = 0.7 + i * 3.1;

    // Era marker
    slide.addShape("ellipse", {
      x: x + 1.15, y: 3.18, w: 0.28, h: 0.28,
      fill: { color: theme.accent }
    });

    // Era card
    slide.addShape("rect", {
      x: x, y: 3.9, w: 2.8, h: 1.15,
      fill: { color: theme.light }
    });

    slide.addText(e.era, {
      x: x, y: 3.95, w: 2.8, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(e.title, {
      x: x, y: 4.22, w: 2.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(e.desc, {
      x: x + 0.1, y: 4.5, w: 2.6, h: 0.5,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top"
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
  pres.writeFile({ fileName: "slide-20-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
