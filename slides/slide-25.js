// slide-25.js - Soviet ocean pursuit (苏联的海洋追求)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 25,
  title: '苏联的海洋追求'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("苏联的海洋追求", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Timeline of Soviet naval expansion
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 9.0, h: 1.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("苏联海军扩张历程", {
    x: 0.7, y: 1.3, w: 8.6, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const phases = [
    { period: "1950s-60s", focus: "近海防御", color: theme.secondary },
    { period: "1970s", focus: "印度洋、蓝水拓展", color: theme.primary },
    { period: "1980s", focus: "全球海军投射", color: theme.accent }
  ];

  const phaseWidth = 2.8;
  const phaseStartX = 0.8;

  phases.forEach((phase, idx) => {
    const x = phaseStartX + idx * (phaseWidth + 0.3);

    slide.addShape("rect", {
      x: x, y: 1.8, w: phaseWidth, h: 0.7,
      fill: { color: phase.color, transparency: 88 }
    });

    slide.addText(phase.period, {
      x: x + 0.1, y: 1.85, w: 1.2, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: phase.color, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(phase.focus, {
      x: x + 0.1, y: 2.15, w: phaseWidth - 0.2, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });

    if (idx < 2) {
      slide.addText("→", {
        x: x + phaseWidth - 0.05, y: 1.85, w: 0.5, h: 0.6,
        fontSize: 20, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Two columns - Successes and Failures
  // Left - Successes
  slide.addShape("rect", {
    x: 0.5, y: 2.9, w: 4.4, h: 2.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 2.9, w: 4.4, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("取得的成就", {
    x: 0.5, y: 2.9, w: 4.4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const successes = [
    "核潜艇技术：与美国并驾齐驱",
    "航母发展：从基辅级到库兹涅佐夫",
    "反舰导弹：饱和攻击战术理论"
  ];

  successes.forEach((s, idx) => {
    const y = 3.55 + idx * 0.48;

    slide.addText("✓", {
      x: 0.7, y: y, w: 0.3, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(s, {
      x: 1.0, y: y, w: 3.7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right - Failures
  slide.addShape("rect", {
    x: 5.1, y: 2.9, w: 4.4, h: 2.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 2.9, w: 4.4, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("结构性缺陷", {
    x: 5.1, y: 2.9, w: 4.4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const failures = [
    "缺乏海外基地：补给线难以维持",
    "造船能力：停留在西方70年代水平",
    "航母动力：蒸汽轮机vs燃气轮机"
  ];

  failures.forEach((f, idx) => {
    const y = 3.55 + idx * 0.48;

    slide.addText("✗", {
      x: 5.3, y: y, w: 0.3, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(f, {
      x: 5.6, y: y, w: 3.7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("25", {
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
  pres.writeFile({ fileName: "slide-25-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
