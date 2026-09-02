// slide-30.js - Module 2 summary (模块二总结)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 30,
  title: '模块二总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("模块二总结", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Key takeaways in 2x2 grid
  const takeaways = [
    {
      num: "01",
      title: "美国海权优势",
      points: ["全球基地网络", "岛链封锁体系", "印太战略东移"]
    },
    {
      num: "02",
      title: "俄罗斯陆权困境",
      points: ["出海口受限", "战略纵深悖论", "核威慑为底盾"]
    },
    {
      num: "03",
      title: "苏联/俄国海洋追求",
      points: ["技术追赶成功", "结构缺陷难克服", "战略转型调整"]
    },
    {
      num: "04",
      title: "中国双重战略",
      points: ["陆海兼备型大国", "海军现代化加速", "一带一路战略"]
    }
  ];

  const cardWidth = 4.35;
  const cardHeight = 1.65;
  const startX = 0.5;
  const startY = 1.15;
  const gapX = 0.3;
  const gapY = 0.25;

  takeaways.forEach((item, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Number badge
    slide.addShape("ellipse", {
      x: x + 0.15, y: y + 0.15, w: 0.45, h: 0.45,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: x + 0.15, y: y + 0.15, w: 0.45, h: 0.45,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.7, y: y + 0.18, w: 3.4, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Points
    item.points.forEach((point, pIdx) => {
      slide.addText("•  " + point, {
        x: x + 0.25, y: y + 0.65 + pIdx * 0.3, w: 3.9, h: 0.28,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "middle"
      });
    });
  });

  // Core insight box
  slide.addShape("rect", {
    x: 0.5, y: 4.65, w: 9.0, h: 0.65,
    fill: { color: theme.accent }
  });
  slide.addText("核心洞察：谁能在陆海两个维度同时建立优势，谁就能主导21世纪的地缘格局", {
    x: 0.5, y: 4.65, w: 9.0, h: 0.65,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("30", {
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
  pres.writeFile({ fileName: "slide-30-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
