// D-16 评审团
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '评审团构成'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("评审团构成", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("三轴评审 + AI 陪跑 · 业务方与 AI 方法论双轴避免片面", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 四个评审团
  const teams = [
    { tag: "40%", t: "业务方专家", n: "4-5 人",
      d: "项目管理 / 通用管理 / 专业职能 / 测试 / 开发\n评：业务问题被解得怎么样" },
    { tag: "30%", t: "AI 方法论专家", n: "2-3 人",
      d: "外部 AI 讲师 + HRBP + IT 安全\n评：AI 方法论是否正确 + 安全合规" },
    { tag: "20%", t: "大众评审", n: "5-10 人/班",
      d: "同方向同事互评\n评：这个提示词我能不能用" },
    { tag: "10%", t: "AI 陪跑数据", n: "系统",
      d: "课后 2-4 周应用数据\n评：实际产生了多少业务价值" }
  ];

  teams.forEach((t, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.6 + col * 4.5;
    const y = 1.85 + row * 1.65;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.3, h: 1.5,
      fill: { color: theme.light }, line: { type: "none" }
    });
    // 左侧权重条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.8, h: 1.5,
      fill: { color: theme.primary }, line: { type: "none" }
    });
    slide.addText(t.tag, {
      x: x, y: y, w: 0.8, h: 1.5,
      fontSize: 20, fontFace: "Arial", color: "FFFFFF",
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(t.t, {
      x: x + 0.95, y: y + 0.15, w: 3.2, h: 0.4,
      fontSize: 17, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(t.n, {
      x: x + 0.95, y: y + 0.55, w: 3.2, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(t.d, {
      x: x + 0.95, y: y + 0.85, w: 3.2, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 页码
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("06", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "003D7A", secondary: "333333", accent: "00A0E9",
    light: "F4F6F9", bg: "FFFFFF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-06-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
