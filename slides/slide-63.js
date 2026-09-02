// slide-63.js - Extended learning resources (延伸学习资源)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 63,
  title: '延伸学习资源'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("延伸学习资源", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("推荐阅读与学习材料，进一步深入地缘政治研究", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Three columns of resources
  const resourceColumns = [
    {
      title: "经典著作",
      color: theme.primary,
      resources: [
        { name: "《海权论》", author: "阿尔弗雷德·马汉" },
        { name: "《民主与利爪》", author: "哈尔福德·麦金德" },
        { name: "《文明的冲突》", author: "塞缪尔·亨廷顿" },
        { name: "《大棋局》", author: "布热津斯基" }
      ]
    },
    {
      title: "当代研究",
      color: theme.accent,
      resources: [
        { name: "《无敌》", author: "詹姆斯·布莱克" },
        { name: "《地缘政治大变局》", author: "理查德·哈斯" },
        { name: "《亚洲世纪》", author: "陆克文" },
        { name: "《一带一路》", author: "德雷克·米托" }
      ]
    },
    {
      title: "数字资源",
      color: theme.secondary,
      resources: [
        { name: "SIPRI数据库", author: "斯德哥尔摩国际和平研究所" },
        { name: "IISS军事平衡", author: "国际战略研究所" },
        { name: "Pew Research", author: "皮尤研究中心" },
        { name: "Stratfor", author: "战略预测公司" }
      ]
    }
  ];

  const colWidth = 2.9;
  const startX = 0.5;
  const gap = 0.25;

  resourceColumns.forEach((col, idx) => {
    const x = startX + idx * (colWidth + gap);

    // Column header
    slide.addShape("rect", {
      x: x, y: 1.55, w: colWidth, h: 0.55,
      fill: { color: col.color }
    });
    slide.addText(col.title, {
      x: x, y: 1.6, w: colWidth, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Resources list
    col.resources.forEach((res, rIdx) => {
      const y = 2.25 + rIdx * 0.75;

      slide.addShape("rect", {
        x: x, y: y, w: colWidth, h: 0.65,
        fill: { color: "FFFFFF" },
        line: { color: theme.light, width: 1 }
      });

      slide.addText(res.name, {
        x: x + 0.15, y: y + 0.08, w: colWidth - 0.3, h: 0.3,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.primary, bold: true,
        align: "left", valign: "middle"
      });

      slide.addText(res.author, {
        x: x + 0.15, y: y + 0.35, w: colWidth - 0.3, h: 0.25,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "middle"
      });
    });
  });

  // Bottom note
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addText("提示：建立自己的文献库，定期追踪地缘政治动态，形成系统化的知识体系", {
    x: 0.7, y: 5.05, w: 8.6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("63", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
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
  pres.writeFile({ fileName: "D:/CC/slides/slide-63-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
