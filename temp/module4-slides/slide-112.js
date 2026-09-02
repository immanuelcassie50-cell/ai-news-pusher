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

  slide.addText("三层人工精修原则", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  const layers = [
    { title: "第一层：事实核查", items: ["核实客户信息准确性", "确认产品信息时效性", "验证数据来源可靠性"], color: theme.secondary },
    { title: "第二层：判断调整", items: ["根据经验调整配比", "加入AI无法获取的软信息", "考虑客户特殊偏好"], color: theme.primary },
    { title: "第三层：个性化定制", items: ["根据沟通风格调整话术", "加入顾问的独特洞见", "建立个人品牌印记"], color: theme.accent }
  ];

  const layerW = 2.9;
  const startX = 0.5;
  const gap = 0.2;

  layers.forEach((layer, i) => {
    const x = startX + i * (layerW + gap);
    slide.addShape("rect", { x: x, y: 1.1, w: layerW, h: 3.8, fill: { color: "ffffff" }, rectRadius: 0.1, line: { color: theme.light, width: 1 } });
    slide.addShape("rect", { x: x, y: 1.1, w: layerW, h: 0.7, fill: { color: layer.color } });
    slide.addText(layer.title, { x: x, y: 1.1, w: layerW, h: 0.7, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });

    layer.items.forEach((item, j) => {
      const y = 2.0 + j * 0.9;
      slide.addShape("ellipse", { x: x + 0.2, y: y + 0.15, w: 0.12, h: 0.12, fill: { color: layer.color } });
      slide.addText(item, { x: x + 0.45, y: y, w: layerW - 0.6, h: 0.75, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, valign: "top", margin: 0 });
    });
  });

  return slide;
}

const slideConfig = { theme, title: "三层人工精修原则", description: "事实核查、判断调整、个性化定制三层人工精修", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };