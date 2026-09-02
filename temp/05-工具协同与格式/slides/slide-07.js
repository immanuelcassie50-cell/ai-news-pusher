// slide-07.js - Content: 工具路由练习
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '工具路由判断练习'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title with tag
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.35, w: 0.6, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("练习", {
    x: 0.5, y: 0.35, w: 0.6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("工具路由判断练习 —— 第一级难度", {
    x: 1.2, y: 0.28, w: 7, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Practice items
  const practices = [
    "把上周45分钟供应商技术交流会录音转成文字稿",
    "查询某传感器型号的最新行业测试标准参数范围",
    "基于整理好的文字素材，生成结构化技术方案初稿",
    "把100份同格式月度检测报告批量提取关键字段",
    "把客户访谈整理结果存入项目知识库"
  ];

  practices.forEach((item, i) => {
    const yPos = 0.85 + i * 0.55;

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: yPos, w: 0.35, h: 0.35,
      fill: { color: theme.secondary }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: yPos, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Item text
    slide.addText(item, {
      x: 1.0, y: yPos, w: 5.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Answer line
    slide.addShape(pres.shapes.LINE, {
      x: 6.5, y: yPos + 0.3, w: 3.0, h: 0,
      line: { color: theme.secondary, width: 0.5, dashType: "dash" }
    });
  });

  // Instruction text
  slide.addText("根据步骤的核心需求，判断应该用哪个工具来完成，并写出判断依据（不超过一句话）", {
    x: 0.5, y: 4.6, w: 9.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  return slide;
}

module.exports = { createSlide, slideConfig };