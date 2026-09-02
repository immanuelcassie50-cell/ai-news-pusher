// slide-31_第一章_行动建议 - 列表展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 31,
  title: '行动建议'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("行动建议", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 行动建议列表
  const actions = [
    { title: "诊断现状", desc: "评估企业当前AI采用阶段，识别主要差距" },
    { title: "找准切入点", desc: "选择1-2个痛点场景，快速启动试点项目" },
    { title: "组建团队", desc: "培养或引进关键AI人才，建立核心小组" },
    { title: "建设基础设施", desc: "同步推进数据平台和AI治理框架建设" },
    { title: "制定路线图", desc: "基于试点经验，制定3年AI转型路线图" }
  ];

  actions.forEach((action, i) => {
    const y = 1.2 + i * 0.8;

    // 编号圆圈
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y + 0.05, w: 0.45, h: 0.45,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y + 0.05, w: 0.45, h: 0.45,
      fontSize: 16, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 标题和描述
    slide.addText(action.title, {
      x: 1.1, y: y, w: 2.5, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "left", valign: "middle", margin: 0
    });

    slide.addText(action.desc, {
      x: 3.6, y: y, w: 5.9, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "left", valign: "middle", margin: 0
    });

    // 分隔线
    if (i < actions.length - 1) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 1.1, y: y + 0.6, w: 8.4, h: 0.01,
        fill: { color: theme.secondary }, line: { type: 'none' }
      });
    }
  });

  // 页码
  slide.addText("31", {
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
  pres.writeFile({ fileName: "slide-31-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
