// slide-15.js - Content: 三个动作
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 15,
  title: '每次AI协作结束后，做三件事'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("每次AI协作结束后，做三件事", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Three action cards
  const actions = [
    {
      num: "01",
      title: "保存有效提示词",
      desc: "把这次对话里最有效的那轮提示词，复制进Get笔记",
      format: "标注格式：场景名称-步骤名称-有效提示词",
      benefit: "下次遇到同类步骤，稍作修改就能用"
    },
    {
      num: "02",
      title: "保存任务分解链",
      desc: "如果完成了新场景的任务分解链，保存成文档存进项目知识库",
      format: "存进项目知识库",
      benefit: "下次遇到同类任务，直接参照调整"
    },
    {
      num: "03",
      title: "记录本次经验",
      desc: "在任务记录卡里补充一行",
      format: "这次遇到的问题是XXX，我的处理方式是YYY，下次要注意ZZZ",
      benefit: "几个月后翻开还能看到当时的经验"
    }
  ];

  actions.forEach((action, i) => {
    const yPos = 1.0 + i * 1.45;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: yPos, w: 9.0, h: 1.3,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: yPos + 0.15, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText(action.num, {
      x: 0.7, y: yPos + 0.15, w: 0.6, h: 0.6,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(action.title, {
      x: 1.5, y: yPos + 0.15, w: 3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(action.desc, {
      x: 1.5, y: yPos + 0.5, w: 4.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Format tag
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.5, y: yPos + 0.85, w: 5.5, h: 0.35,
      fill: { color: theme.primary, transparency: 90 }
    });
    slide.addText(action.format, {
      x: 1.6, y: yPos + 0.85, w: 5.3, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });

    // Benefit
    slide.addText(action.benefit, {
      x: 7.2, y: yPos + 0.35, w: 2.1, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };