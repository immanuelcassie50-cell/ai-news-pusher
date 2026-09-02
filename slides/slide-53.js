// slide-53.js - 案例4：印度的大国梦
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 53,
  title: '案例4：印度的大国梦'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("案例4：印度的大国梦", {
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
  slide.addText("53", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Subtitle
  slide.addText("India's Aspirations for Great Power Status", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Arial",
    color: theme.secondary, bold: false, italic: true,
    align: "left", valign: "middle"
  });

  // Left - India's dream components
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.3, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("大国梦想的支柱", {
    x: 0.7, y: 1.65, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const pillars = [
    { title: "军事强国", desc: "世界第四大军事力量，拥有航母、核潜艇" },
    { title: "经济规模", desc: "全球第五大经济体，IT外包与制药领先" },
    { title: "地缘位置", desc: "控制印度洋咽喉，连接东西方贸易" },
    { title: "人口红利", desc: "14亿人口，年轻的劳动力资源" },
    { title: "战略自主", desc: "不结盟传统，在大国间左右逢源" }
  ];

  pillars.forEach((p, idx) => {
    const y = 2.15 + idx * 0.6;
    slide.addShape("rect", {
      x: 0.7, y: y, w: 0.5, h: 0.5,
      fill: { color: theme.secondary }
    });
    slide.addText((idx + 1).toString(), {
      x: 0.7, y: y, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(p.title, {
      x: 1.35, y: y, w: 1.3, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });
    slide.addText(p.desc, {
      x: 2.65, y: y, w: 2.0, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right - Challenges
  slide.addShape("rect", {
    x: 5.1, y: 1.5, w: 4.4, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.5, w: 0.08, h: 3.8,
    fill: { color: theme.accent }
  });

  slide.addText("现实制约", {
    x: 5.35, y: 1.65, w: 4.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  const challenges = [
    { title: "基础设施短板", desc: "电力短缺、交通拥堵、制造业落后" },
    { title: "社会矛盾", desc: "种姓制度、贫富分化、宗教冲突" },
    { title: "军事短板", desc: "武器依赖进口，国防工业基础薄弱" },
    { title: "边境争端", desc: "与巴基斯坦、中国领土争议持续" },
    { title: "区域竞争", desc: "面对中国「一带一路」的竞争压力" }
  ];

  challenges.forEach((c, idx) => {
    const y = 2.15 + idx * 0.6;
    slide.addShape("ellipse", {
      x: 5.35, y: y + 0.08, w: 0.18, h: 0.18,
      fill: { color: theme.accent }
    });
    slide.addText(c.title, {
      x: 5.65, y: y - 0.02, w: 1.5, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });
    slide.addText(c.desc, {
      x: 5.65, y: y + 0.3, w: 3.6, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
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
  pres.writeFile({ fileName: "slide-53-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
