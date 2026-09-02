// slide-57.js - How to predict infrastructure project strategic intent (如何预判基建项目的战略意图)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 57,
  title: '如何预判基建项目的战略意图'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("如何预判基建项目的战略意图", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText('从"一带一路"案例看基础设施的地缘政治分析框架', {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Five key indicators
  const indicators = [
    {
      num: "1",
      title: "连通性评估",
      desc: "项目是否填补战略节点空白，形成关键走廊",
      example: "瓜达尔港：中巴经济走廊的核心支点"
    },
    {
      num: "2",
      title: "军事民用界限",
      desc: "纯民用还是具有潜在军事价值的军民两用设施",
      example: "吉布提基地旁的商用港口"
    },
    {
      num: "3",
      title: "融资结构",
      desc: "优惠贷款还是商业融资，是否绑定政策条件",
      example: "中国进出口银行提供优惠利率贷款"
    },
    {
      num: "4",
      title: "运营权归属",
      desc: "建成后谁运营管理，人员来自哪里",
      example: "汉班托塔港：99年租赁给中国招商局"
    },
    {
      num: "5",
      title: "战略对标",
      desc: "是否与该国军事力量部署和海权扩张方向一致",
      example: "斯里兰卡汉班托塔：印度洋航线关键节点"
    }
  ];

  indicators.forEach((ind, idx) => {
    const y = 1.5 + idx * 0.78;

    // Number circle
    slide.addShape("ellipse", {
      x: 0.5, y: y + 0.08, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(ind.num, {
      x: 0.5, y: y + 0.08, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(ind.title, {
      x: 1.05, y: y, w: 2.0, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(ind.desc, {
      x: 1.05, y: y + 0.32, w: 4.2, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });

    // Example box
    slide.addShape("rect", {
      x: 5.4, y: y, w: 4.1, h: 0.65,
      fill: { color: theme.light, transparency: 50 }
    });
    slide.addText(ind.example, {
      x: 5.55, y: y + 0.08, w: 3.8, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("57", {
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
  pres.writeFile({ fileName: "D:/CC/slides/slide-57-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
