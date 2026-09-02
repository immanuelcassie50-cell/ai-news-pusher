// D-16 封面
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '评审日开场介绍'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧深蓝条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.35, h: 5.625,
    fill: { color: theme.primary }, line: { type: "none" }
  });

  // 顶部小色块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.5, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });

  // 项目编号
  slide.addText("PROJECT D-16 | 评审日开场", {
    x: 0.6, y: 0.7, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // 主标题
  slide.addText("德赛西威 AI 赋能课程", {
    x: 0.6, y: 1.6, w: 9, h: 0.9,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("评审日开场介绍", {
    x: 0.6, y: 2.5, w: 9, h: 0.9,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 副标题
  slide.addText("评业务问题解得怎么样 · 评方法能不能被复制", {
    x: 0.6, y: 3.6, w: 9, h: 0.4,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 底部信息条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.6, w: 8.8, h: 0.04,
    fill: { color: theme.accent }, line: { type: "none" }
  });

  slide.addText([
    { text: "汇报人：", options: { color: theme.secondary, fontSize: 14 } },
    { text: "项目组", options: { color: theme.primary, fontSize: 14, bold: true } }
  ], {
    x: 0.6, y: 4.8, w: 4.5, h: 0.3,
    fontFace: "Microsoft YaHei"
  });

  slide.addText([
    { text: "日期：", options: { color: theme.secondary, fontSize: 14 } },
    { text: "2026 年 X 月 X 日", options: { color: theme.primary, fontSize: 14, bold: true } }
  ], {
    x: 5.1, y: 4.8, w: 4.3, h: 0.3,
    fontFace: "Microsoft YaHei"
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
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
