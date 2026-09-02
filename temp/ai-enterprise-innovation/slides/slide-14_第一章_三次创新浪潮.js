// slide-14_第一章_三次创新浪潮 - 三栏展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 14,
  title: '三次创新浪潮'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("三次创新浪潮", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三次浪潮卡片
  const waves = [
    {
      num: "01",
      title: "IT与信息化",
      period: "1980-2000",
      desc: "企业资源计划（ERP）\n客户关系管理（CRM）\n业务流程自动化",
      color: "90e0ef"
    },
    {
      num: "02",
      title: "互联网与移动互联网",
      period: "2000-2020",
      desc: "电子商务崛起\n社交媒体营销\n移动支付与共享经济",
      color: theme.light
    },
    {
      num: "03",
      title: "人工智能",
      period: "2020-未来",
      desc: "大语言模型应用\nAI Agent普及\n行业垂直模型落地",
      color: theme.accent
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.5;
  const gap = 0.25;
  const y = 1.3;

  waves.forEach((wave, i) => {
    const x = startX + i * (cardWidth + gap);

    // 卡片背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: 3.6,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 顶部色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: 0.6,
      fill: { color: wave.color }, line: { type: 'none' }
    });

    // 编号
    slide.addText(wave.num, {
      x: x, y: y + 0.7, w: cardWidth, h: 0.6,
      fontSize: 32, fontFace: "Georgia",
      color: wave.color, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 标题
    slide.addText(wave.title, {
      x: x, y: y + 1.3, w: cardWidth, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 时间段
    slide.addText(wave.period, {
      x: x, y: y + 1.8, w: cardWidth, h: 0.35,
      fontSize: 11, fontFace: "Arial",
      color: "90e0ef",
      align: "center", valign: "middle", margin: 0
    });

    // 分隔线
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.5, y: y + 2.25, w: cardWidth - 1.0, h: 0.02,
      fill: { color: theme.light, transparency: 50 }, line: { type: 'none' }
    });

    // 描述
    slide.addText(wave.desc, {
      x: x + 0.2, y: y + 2.4, w: cardWidth - 0.4, h: 1.1,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "center", valign: "top", margin: 0
    });
  });

  // 页码
  slide.addText("14", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "000814",
    secondary: "003566",
    accent:    "ffc300",
    light:     "ffd60a",
    bg:        "001d3d"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-14-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
