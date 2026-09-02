// slide-105.js - Partnership Framework
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 105,
  title: '合作伙伴关系框架'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("合作伙伴关系框架", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Four stages timeline
  const stages = [
    { num: "1", cn: "探索期", en: "Exploration", desc: "互相了解\n评估合作可能\n小规模试点" },
    { num: "2", cn: "试点期", en: "Pilot", desc: "有限范围合作\n验证合作模式\n建立信任基础" },
    { num: "3", cn: "扩展期", en: "Scaling", desc: "扩大合作范围\n深化合作关系\n利益深度绑定" },
    { num: "4", cn: "深化期", en: "Deepening", desc: "战略层面合作\n资源全面整合\n共生共荣关系" }
  ];

  // Timeline line
  slide.addShape("rect", {
    x: 0.9, y: 2.2, w: 8.2, h: 0.04,
    fill: { color: theme.light }
  });

  stages.forEach((s, idx) => {
    const x = 0.5 + idx * 2.35;

    // Circle on timeline
    slide.addShape("ellipse", {
      x: x + 0.75, y: 2.0, w: 0.5, h: 0.5,
      fill: { color: idx === 0 ? theme.primary : idx === 3 ? theme.accent : theme.secondary }
    });
    slide.addText(s.num, {
      x: x + 0.75, y: 2.0, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Stage card
    slide.addShape("roundRect", {
      x: x, y: 2.7, w: 2.1, h: 2.3,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.08
    });

    // Chinese name
    slide.addText(s.cn, {
      x: x, y: 2.8, w: 2.1, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // English name
    slide.addText(s.en, {
      x: x, y: 3.2, w: 2.1, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.light, bold: false,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape("rect", {
      x: x + 0.3, y: 3.55, w: 1.5, h: 0.015,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(s.desc, {
      x: x + 0.1, y: 3.7, w: 1.9, h: 1.2,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Bottom arrow indicating progression
  slide.addText("合作深度递增 →", {
    x: 0.5, y: 5.1, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("105", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "slide-105-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
