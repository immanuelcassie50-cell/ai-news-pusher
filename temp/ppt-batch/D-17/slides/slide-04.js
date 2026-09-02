// D-17 课题 A 提示词展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '课题 A · 提示词'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.4, w: 1.2, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("课题 A", {
    x: 0.6, y: 0.4, w: 1.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("提示词模板 · 四段式结构", {
    x: 1.9, y: 0.4, w: 7, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  // 提示词卡片
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.1, w: 8.8, h: 3.7,
    fill: { color: theme.light }, line: { type: "none" }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.1, w: 0.08, h: 3.7,
    fill: { color: theme.primary }, line: { type: "none" }
  });

  // 提示词内容
  const blocks = [
    { tag: "【角色】", text: "你是德赛西威的资深测试架构师，专门做嵌入式 HMI 产品的功能测试设计" },
    { tag: "【背景】", text: "我们有一条 HMI 主题切换的需求文档（已脱敏为功能点列表），需要输出覆盖度高的测试用例" },
    { tag: "【目标】", text: "输出 50 条以上用例，覆盖 5 个维度：功能/边界/异常/性能/兼容性" },
    { tag: "【约束】", text: "格式为表格（编号/模块/前置/步骤/预期）；不输出未在文档中出现的功能；标黄灯处需提示我" }
  ];
  blocks.forEach((b, i) => {
    const y = 1.3 + i * 0.85;
    slide.addText(b.tag, {
      x: 0.85, y: y, w: 1.2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(b.text, {
      x: 2.1, y: y, w: 7.2, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 底部
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.95, w: 8.8, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("迭代 5 次 · 同事复用 4 人 · 已纳入公司提示词库 v1.2", {
    x: 0.6, y: 4.95, w: 8.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 页码
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("04", {
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
  pres.writeFile({ fileName: "slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
