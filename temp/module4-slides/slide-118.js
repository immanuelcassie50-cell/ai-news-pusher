const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "2b2d42",
  secondary: "8d99ae",
  accent: "ef233c",
  light: "edf2f4",
  bg: "f8f9fa"
};

function createSlide() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";

  const slide = pptx.addSlide();
  slide.addShape("rect", { x: 0, y: 0, w: "100%", h: "100%", fill: { color: theme.bg } });

  slide.addShape("rect", { x: 0, y: 0, w: 0.125, h: "100%", fill: { color: theme.accent } });

  slide.addText("全流程AI辅助演练", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  slide.addText("演练设置", {
    x: 0.5, y: 1.1, w: 2, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent, margin: 0
  });

  const setups = [
    { label: "角色", value: "顾问使用AI辅助服务客户" },
    { label: "工具", value: "笔记本电脑或手机" },
    { label: "任务", value: "为指定客户生成配置方案" },
    { label: "流程", value: "AI分析 → 方案生成 → 人工精修 → 呈现建议" }
  ];

  const gridStartY = 1.6;
  const rowH = 0.65;

  setups.forEach((setup, i) => {
    const y = gridStartY + i * rowH;
    slide.addShape("rect", { x: 0.5, y: y, w: 1.0, h: 0.45, fill: { color: theme.primary }, rectRadius: 0.08 });
    slide.addText(setup.label, { x: 0.5, y: y, w: 1.0, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });
    slide.addText(setup.value, { x: 1.65, y: y, w: 7.8, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, valign: "middle", margin: 0 });
  });

  slide.addShape("rect", { x: 0.5, y: 4.3, w: 9, h: 0.9, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("产出物：完整的资产配置建议书", { x: 0.5, y: 4.3, w: 9, h: 0.9, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });

  return slide;
}

const slideConfig = { theme, title: "全流程AI辅助演练", description: "全流程AI辅助演练的设置与产出物", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };