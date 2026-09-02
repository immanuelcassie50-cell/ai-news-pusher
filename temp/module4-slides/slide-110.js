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

  slide.addText("提示词模板示例", {
    x: 0.5, y: 0.3, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.0, w: 9, h: 3.6,
    fill: { color: "ffffff" },
    rectRadius: 0.1,
    line: { color: theme.light, width: 1 }
  });

  const templateLines = [
    "请为以下客户生成资产配置建议：",
    "",
    "【客户画像】年龄__岁，职业__，风险偏好__",
    "【财务状况】可投资产__万，主要资产分布__",
    "【投资目标】短期__，中期__，长期__",
    "【特殊需求】传承__，税务__，其他__",
    "【市场环境】当前__（上行/震荡/下行）",
    "",
    "请生成：",
    "1. 配置比例建议",
    "2. 产品推荐",
    "3. 风险提示"
  ];

  slide.addText(templateLines.join("\n"), {
    x: 0.7, y: 1.15, w: 8.6, h: 3.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "top", margin: 0
  });

  slide.addText("提示：根据实际情况调整模板内容", {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center", margin: 0
  });

  return slide;
}

const slideConfig = { theme, title: "提示词模板示例", description: "资产配置建议的提示词模板", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };