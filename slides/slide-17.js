// slide-17.js - 二战中的海上封锁
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 17,
  title: '二战中的海上封锁'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("历史验证：二战中的海上封锁", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("17", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Left column - Allied blockade
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 4.3, h: 3.9,
    fill: { color: theme.light }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 4.3, h: 0.6,
    fill: { color: theme.secondary }
  });
  slide.addText("盟军对德日封锁", {
    x: 0.5, y: 1.2, w: 4.3, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const alliedPoints = [
    { title: "大西洋舰队", desc: "英国海军维持对德国的海上封锁，切断原材料进口" },
    { title: "潜艇战反制", desc: "盟军反潜技术（声纳、密码破译）击败德国U型潜艇" },
    { title: "岛屿跳跃", desc: "美军通过岛屿基地逐步推进，切断日本海上补给线" },
    { title: "石油封锁", desc: "美国切断日本石油供应，迫使其冒险偷袭珍珠港" }
  ];

  alliedPoints.forEach((p, i) => {
    const y = 1.95 + i * 0.75;

    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.05, w: 0.2, h: 0.2,
      fill: { color: theme.accent }
    });

    slide.addText(p.title, {
      x: 1.0, y: y, w: 3.6, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(p.desc, {
      x: 1.0, y: y + 0.28, w: 3.6, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top"
    });
  });

  // Right column - Axis failures
  slide.addShape("rect", {
    x: 5.2, y: 1.2, w: 4.3, h: 3.9,
    fill: { color: theme.light }
  });

  slide.addShape("rect", {
    x: 5.2, y: 1.2, w: 4.3, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("轴心国的困境", {
    x: 5.2, y: 1.2, w: 4.3, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const axisPoints = [
    { title: "德国", desc: "被英国封锁后，物资短缺制约战争机器运转（尤其石油）" },
    { title: "日本", desc: "资源匮乏，石油储备仅够一年；海军在珊瑚海和中途岛受挫后失去主动权" },
    { title: "意大利", desc: "地中海航线被英国切断，无法获取北非补给" },
    { title: "战略结局", desc: "三国均因海上补给线被切断而陷入战略被动" }
  ];

  axisPoints.forEach((p, i) => {
    const y = 1.95 + i * 0.75;

    slide.addShape("ellipse", {
      x: 5.4, y: y + 0.05, w: 0.2, h: 0.2,
      fill: { color: theme.primary }
    });

    slide.addText(p.title, {
      x: 5.7, y: y, w: 3.6, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(p.desc, {
      x: 5.7, y: y + 0.28, w: 3.6, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top"
    });
  });

  // Conclusion
  slide.addShape("rect", {
    x: 0.5, y: 5.15, w: 9, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("结论：海上封锁是盟军获胜的关键因素之一，印证了海权论的核心观点", {
    x: 0.6, y: 5.15, w: 8.8, h: 0.4,
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
  pres.writeFile({ fileName: "slide-17-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
