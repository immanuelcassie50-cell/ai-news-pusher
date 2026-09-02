// slide-05.js - 传统行政管理模式的三大失效信号
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '传统行政管理模式的三大失效信号'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 页面标题
  slide.addText("传统行政管理模式的三大失效信号", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 三个信号卡片
  const signals = [
    {
      num: "1",
      title: "任务导向 vs 价值导向",
      desc: '只问"是否完成"，不问"创造了什么价值"',
      icon: "!"
    },
    {
      num: "2",
      title: "过程控制 vs 结果衡量",
      desc: '只管"有没有按流程"，不管"最终效果如何"',
      icon: "!"
    },
    {
      num: "3",
      title: "部门割裂 vs 整体最优",
      desc: '只顾"本部门指标"，不顾"公司整体效益"',
      icon: "!"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.6;
  const startX = 0.5;
  const gap = 0.25;
  const startY = 1.1;

  signals.forEach((signal, i) => {
    const x = startX + i * (cardWidth + gap);

    // 卡片背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // 顶部强调条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.12,
      fill: { color: theme.accent }
    });

    // 编号圆形
    slide.addShape(pres.shapes.OVAL, {
      x: x + (cardWidth - 0.7) / 2, y: startY + 0.4, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(signal.num, {
      x: x + (cardWidth - 0.7) / 2, y: startY + 0.4, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // 标题
    slide.addText(signal.title, {
      x: x + 0.15, y: startY + 1.3, w: cardWidth - 0.3, h: 0.7,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });

    // 分隔线
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.5, y: startY + 2.1, w: cardWidth - 1, h: 0.03,
      fill: { color: theme.light }
    });

    // 描述
    slide.addText(signal.desc, {
      x: x + 0.2, y: startY + 2.3, w: cardWidth - 0.4, h: 1.1,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false, align: "center", valign: "top"
    });
  });

  // 底部总结提示
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 9, h: 0.5,
    fill: { color: theme.primary, transparency: 90 }
  });
  slide.addText("这三大失效，本质上是行政管理思维的固有缺陷", {
    x: 0.7, y: 4.9, w: 8.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("05", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "4a5568",
    accent: "c53030",
    light: "e2e8f0",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/新课开发/电力/9-中层管理者经营力提升从行政管理到真经营/05-授课PPT/slides/slide-05-preview.pptx" })
    .then(() => console.log("Created: slide-05-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
