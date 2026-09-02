// slide-09_导言_学习路径建议 - 流程展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 9,
  title: '学习路径建议'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("学习路径建议", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 五个学习步骤
  const steps = [
    { num: "01", title: "预习框架", desc: "先看目录和课程地图，建立整体认知" },
    { num: "02", title: "理解背景", desc: "第一章帮助理解为什么AI创新如此重要" },
    { num: "03", title: "识别挑战", desc: "第二章帮助诊断自身企业的具体挑战" },
    { num: "04", title: "学习方法", desc: "第三章是核心，掌握五种创新方法论" },
    { num: "05", title: "实践落地", desc: "第四、五章指导行业实践与战略制定" }
  ];

  const stepWidth = 1.7;
  const stepHeight = 2.6;
  const startX = 0.5;
  const gap = 0.2;
  const y = 1.4;

  steps.forEach((step, i) => {
    const x = startX + i * (stepWidth + gap);

    // 步骤背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: stepWidth, h: stepHeight,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 步骤编号圆圈
    slide.addShape(pres.shapes.OVAL, {
      x: x + (stepWidth - 0.6) / 2, y: y + 0.25, w: 0.6, h: 0.6,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(step.num, {
      x: x + (stepWidth - 0.6) / 2, y: y + 0.25, w: 0.6, h: 0.6,
      fontSize: 14, fontFace: "Georgia",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 标题
    slide.addText(step.title, {
      x: x, y: y + 1.0, w: stepWidth, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 描述
    slide.addText(step.desc, {
      x: x + 0.1, y: y + 1.5, w: stepWidth - 0.2, h: 1.0,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "center", valign: "top", margin: 0
    });

    // 连接箭头
    if (i < steps.length - 1) {
      slide.addText("→", {
        x: x + stepWidth, y: y + stepHeight / 2 - 0.2, w: gap, h: 0.4,
        fontSize: 18, fontFace: "Arial",
        color: theme.light,
        align: "center", valign: "middle", margin: 0
      });
    }
  });

  // 底部提示
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.6,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("💡 提示：每章结束后，建议结合自身企业情况完成课后思考题，再进入下一章", {
    x: 0.7, y: 4.3, w: 8.6, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("9", {
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
  pres.writeFile({ fileName: "slide-09-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
