// slide-28.js - China naval modernization (中国海军现代化进程)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 28,
  title: '中国海军现代化进程'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("中国海军现代化进程", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three phases
  const phases = [
    {
      period: "1949-1990s",
      name: "近海防御",
      color: theme.secondary,
      items: ["黄水海军：近岸作战", "引进苏联技术", "051型驱逐舰等"]
    },
    {
      period: "2000-2010s",
      name: "走向深蓝",
      color: theme.primary,
      items: ["052C/D中华神盾", "054A型护卫舰", "航母辽宁号服役"]
    },
    {
      period: "2020s+",
      name: "蓝水海军",
      color: theme.accent,
      items: ["003型电磁弹射", "055型万吨驱逐舰", "核潜艇技术突破"]
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.55;
  const gap = 0.35;

  phases.forEach((phase, idx) => {
    const x = startX + idx * (cardWidth + gap);
    const y = 1.2;
    const cardHeight = 2.7;

    // Card background
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top bar with period
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: 0.6,
      fill: { color: phase.color }
    });

    // Period label
    slide.addText(phase.period, {
      x: x, y: y, w: cardWidth, h: 0.28,
      fontSize: 10, fontFace: "Arial",
      color: "FFFFFF", bold: false,
      align: "center", valign: "middle"
    });

    // Phase name
    slide.addText(phase.name, {
      x: x, y: y + 0.28, w: cardWidth, h: 0.32,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Items
    phase.items.forEach((item, iIdx) => {
      const itemY = y + 0.75 + iIdx * 0.6;

      slide.addShape("ellipse", {
        x: x + 0.2, y: itemY + 0.12, w: 0.15, h: 0.15,
        fill: { color: phase.color }
      });

      slide.addText(item, {
        x: x + 0.45, y: itemY, w: cardWidth - 0.65, h: 0.55,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "top"
      });
    });

    // Arrow
    if (idx < 2) {
      slide.addText("→", {
        x: x + cardWidth - 0.05, y: y + cardHeight / 2 - 0.3, w: 0.45, h: 0.6,
        fontSize: 24, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Bottom stats row
  const stats = [
    { num: "370+", label: "主战舰艇数量" },
    { num: "3", label: "航母现役" },
    { num: "50+", label: "潜艇总数" },
    { num: "世界第2", label: "海军规模" }
  ];

  const statWidth = 2.2;
  const statStartX = 0.55;

  stats.forEach((stat, idx) => {
    const x = statStartX + idx * (statWidth + 0.07);

    slide.addShape("rect", {
      x: x, y: 4.1, w: statWidth, h: 0.85,
      fill: { color: theme.primary, transparency: 92 }
    });

    slide.addText(stat.num, {
      x: x, y: 4.15, w: statWidth, h: 0.45,
      fontSize: 18, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(stat.label, {
      x: x, y: 4.55, w: statWidth, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("28", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "slide-28-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
