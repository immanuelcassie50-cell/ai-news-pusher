// slide-30_第一章_案例启示 - 大字展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 30,
  title: '案例启示'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 案例标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 1.2, h: 0.35,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("CASE", {
    x: 0.5, y: 0.4, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页面标题
  slide.addText("A公司案例的启示", {
    x: 0.5, y: 0.9, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三个关键启示
  const insights = [
    {
      num: "01",
      title: "从小处着手，从痛处切入",
      desc: "A公司第一个AI项目是质检环节的视觉检测，3个月上线，6个月回本，验证了AI可行性，建立团队信心"
    },
    {
      num: "02",
      title: "先试点，再扩展",
      desc: "从12个试点项目中筛选出3个成功案例，形成方法论后推广，降低了大规模失败的风险"
    },
    {
      num: "03",
      title: "同步建设基础设施",
      desc: "在推进试点的同时，A公司同步建设数据平台、培养内部AI团队，为规模化应用打基础"
    }
  ];

  insights.forEach((ins, i) => {
    const y = 1.7 + i * 1.15;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.0,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 编号
    slide.addText(ins.num, {
      x: 0.7, y: y + 0.1, w: 0.6, h: 0.4,
      fontSize: 24, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 标题
    slide.addText(ins.title, {
      x: 1.4, y: y + 0.1, w: 7.9, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 描述
    slide.addText(ins.desc, {
      x: 1.4, y: y + 0.5, w: 7.9, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部金句
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.03,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText(""小步快跑、持续迭代"是传统企业AI转型的最佳策略", {
    x: 0.5, y: 5.1, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("30", {
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
  pres.writeFile({ fileName: "slide-30-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
