// 页 91: 第三章上 - 案例 质检部门（案例框）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 91,
  title: '案例 - 质检部门 - 没有人去真正问过'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部小标
  slide.addText("案例  /  没有人去真正问过", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("⚡ 案例  /  质检部门的真实想法", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 案例大框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 3.4,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });

  // 顶部标识条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 0.45,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("案例  ·  CASE  STUDY", {
    x: 0.7, y: 1.55, w: 4, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("制造企业  /  新质检流程", {
    x: 5, y: 1.55, w: 4.3, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 4,
    align: "right", valign: "middle", margin: 0
  });

  // 假设
  slide.addText("「  质检部门肯定不配合，他们从来不愿意在现有 SOP 以外做任何事  」", {
    x: 0.7, y: 2.15, w: 8.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 后果
  slide.addText("于是方案设计从一开始就在绕开质检部门的参与。", {
    x: 0.7, y: 2.7, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 转折
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.2, w: 8.6, h: 0.03,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  slide.addText("后来有人建议：", {
    x: 0.7, y: 3.3, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("先去和质检部门负责人谈一次", {
    x: 0.7, y: 3.6, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("对话之后的结果让大家吃惊：", {
    x: 0.7, y: 4.1, w: 8.6, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("质检部门不仅不反对，还有一长串他们一直想改但没有推动力量的流程问题", {
    x: 0.7, y: 4.45, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 0.04, h: 0.35,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("启示  /  「质检部门不配合」是 3 年前一个项目留下的沉积印象，没人真正测试过", {
    x: 0.7, y: 5.0, w: 8.8, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "91", "第三章（上）换一套假设思考");
  return slide;
}

function addFooter(slide, pres, theme, pageNum, sectionName) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText(`行动学习 · 创新解决方案  /  ${pageNum}`, {
    x: 0.5, y: 5.46, w: 5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'left', valign: 'middle', margin: 0
  });
  slide.addText(sectionName, {
    x: 6, y: 5.46, w: 3.5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'right', valign: 'middle', margin: 0
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "6B0F0F",
    secondary: "3D3D3D",
    accent:    "B8232C",
    light:     "D4C5BE",
    bg:        "F5F0EC"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "91_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
