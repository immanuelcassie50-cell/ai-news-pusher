// slide-26.js - Content: 话术初稿人工验证清单
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 26,
  title: "话术初稿人工验证清单"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Slide title
  slide.addText("话术初稿人工验证清单", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Checklist items
  const items = [
    { cat: "开场话术", text: "实际打电话时能自然说出来吗（不像背稿）" },
    { cat: "开场话术", text: "体现了情绪接住吗（先共情，后解释）" },
    { cat: "标准流程", text: "每步的判断节点是否清晰可操作" },
    { cat: "标准流程", text: "步骤顺序是否符合你实际的服务节奏" },
    { cat: "话术表达", text: "是否符合招商证券的服务风格和用语习惯" },
    { cat: "变体应对", text: "3种客户反应是否覆盖了你实际遇到的主要情况" },
    { cat: "雷区清单", text: "是否包含了你在实战中知道不能说的话" },
    { cat: "合规检查", text: "有没有任何内容可能违反合规要求" }
  ];

  items.forEach((item, i) => {
    const y = 1.0 + i * 0.55;

    // Checkbox
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y + 0.05, w: 0.35, h: 0.35,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1.5 },
      rectRadius: 0.05
    });

    // Category tag
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.0, y: y, w: 1.1, h: 0.45,
      fill: { color: theme.secondary },
      rectRadius: 0.05
    });
    slide.addText(item.cat, {
      x: 1.0, y: y, w: 1.1, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Item text
    slide.addText(item.text, {
      x: 2.25, y: y, w: 7.25, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "left", valign: "middle"
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("26", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };