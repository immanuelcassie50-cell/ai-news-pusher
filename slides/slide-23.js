// slide-23.js - Indo-Pacific Command & strategic pivot (印太司令部与战略重心东移)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 23,
  title: '印太司令部与战略重心东移'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("印太司令部与战略重心东移", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Left column - Timeline
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 4.4, h: 4.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("战略演变时间线", {
    x: 0.7, y: 1.35, w: 4.0, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const timeline = [
    { year: "1947", event: "美国空军成立" },
    { year: "2012", event: "亚太再平衡战略" },
    { year: "2017", event: "特朗普政府：印太战略" },
    { year: "2018", event: "印太司令部正式成立" },
    { year: "2022", event: "印太战略报告发布" }
  ];

  // Timeline line
  slide.addShape("rect", {
    x: 1.3, y: 1.9, w: 0.03, h: 3.0,
    fill: { color: theme.light }
  });

  timeline.forEach((item, idx) => {
    const y = 1.95 + idx * 0.6;

    // Dot
    slide.addShape("ellipse", {
      x: 1.18, y: y + 0.08, w: 0.28, h: 0.28,
      fill: { color: theme.accent }
    });

    slide.addText(item.year, {
      x: 0.65, y: y, w: 0.5, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "right", valign: "middle"
    });

    slide.addText(item.event, {
      x: 1.6, y: y, w: 3.1, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right column - Key changes
  slide.addShape("rect", {
    x: 5.1, y: 1.2, w: 4.4, h: 4.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.2, w: 4.4, h: 0.55,
    fill: { color: theme.accent }
  });
  slide.addText("战略重心东移", {
    x: 5.1, y: 1.2, w: 4.4, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const changes = [
    "从中东/欧洲转向亚太地区",
    "海空力量优先于地面力量",
    "加强与日、韩、澳、印合作",
    "关岛成为核心战略支点",
    "增加第一岛链军事部署密度"
  ];

  changes.forEach((change, idx) => {
    const y = 1.95 + idx * 0.58;

    slide.addShape("ellipse", {
      x: 5.3, y: y + 0.1, w: 0.18, h: 0.18,
      fill: { color: theme.primary }
    });

    slide.addText(change, {
      x: 5.6, y: y, w: 3.7, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Quote box
  slide.addShape("rect", {
    x: 5.3, y: 4.65, w: 4.0, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("「大国竞争而非恐怖主义」", {
    x: 5.3, y: 4.65, w: 4.0, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("23", {
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
  pres.writeFile({ fileName: "slide-23-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
