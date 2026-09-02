// slide-15.js - 两大理论对比
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 15,
  title: '陆权论与边缘地带论对比'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("两大地缘理论对比", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("15", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Table header
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 9, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("对比维度", {
    x: 0.5, y: 1.15, w: 2.0, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("陆权论（麦金德）", {
    x: 2.5, y: 1.15, w: 3.25, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("边缘地带论（斯皮克曼）", {
    x: 5.75, y: 1.15, w: 3.75, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Table rows
  const rows = [
    { dim: "核心区域", land: "心脏地带（欧亚内陆）", rim: "边缘地带（欧亚沿海）" },
    { dim: "战略焦点", land: "控制东欧=控制心脏地带", rim: "控制沿海=控制大陆边缘" },
    { dim: "力量对比", land: "陆权大于海权（铁路时代）", rim: "海陆互动，边缘为枢纽" },
    { dim: "历史逻辑", land: "德国、俄国有机会主导世界", rim: "边缘国家联合阻止陆权霸权" },
    { dim: "美国角色", land: "离岸平衡手，介入欧亚", rim: "必须参与边缘地带联盟" },
    { dim: "战略目标", land: "防止心脏地带统一", rim: "维持欧亚边缘分裂多元" }
  ];

  rows.forEach((r, i) => {
    const y = 1.75 + i * 0.55;
    const fill = i % 2 === 0 ? theme.light : "FFFFFF";

    // Dimension label
    slide.addShape("rect", {
      x: 0.5, y: y, w: 2.0, h: 0.55,
      fill: { color: fill }
    });
    slide.addText(r.dim, {
      x: 0.5, y: y, w: 2.0, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Land power
    slide.addShape("rect", {
      x: 2.5, y: y, w: 3.25, h: 0.55,
      fill: { color: fill }
    });
    slide.addText(r.land, {
      x: 2.6, y: y, w: 3.05, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });

    // Rimland
    slide.addShape("rect", {
      x: 5.75, y: y, w: 3.75, h: 0.55,
      fill: { color: fill }
    });
    slide.addText(r.rim, {
      x: 5.85, y: y, w: 3.55, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // Bottom verdict
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("核心差异：麦金德强调陆上心脏的重要性；斯皮克曼认为沿海边缘地带才是霸权争夺焦点", {
    x: 0.6, y: 5.05, w: 8.8, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-15-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
