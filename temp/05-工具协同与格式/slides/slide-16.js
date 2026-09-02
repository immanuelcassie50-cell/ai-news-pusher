// slide-16.js - Content: Get笔记提示词库结构
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 16,
  title: 'Get笔记的提示词库建议结构'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("Get笔记的提示词库建议结构", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Folder structure - visual tree
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 9.0, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("提示词库/", {
    x: 0.7, y: 1.0, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  // Level 1 folders
  const folders = [
    {
      name: "竞品分析类/",
      items: ["技术参数对比表生成-千问-有效提示词", "市场竞争力分析-千问-有效提示词"]
    },
    {
      name: "会议纪要类/",
      items: ["录音转文字核查-豆包-注意事项", "纪要行动项提取-千问-有效提示词"]
    },
    {
      name: "技术文档类/",
      items: ["技术方案初稿-千问-有效提示词"]
    }
  ];

  folders.forEach((folder, i) => {
    const yPos = 1.5 + i * 1.2;

    // Folder card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: yPos, w: 9.0, h: 1.1,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Folder name
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: yPos + 0.15, w: 0.08, h: 0.8,
      fill: { color: theme.primary }
    });

    slide.addText(folder.name, {
      x: 1.0, y: yPos + 0.15, w: 2.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Items
    folder.items.forEach((item, j) => {
      slide.addText(item, {
        x: 1.3 + j * 3.8, y: yPos + 0.6, w: 3.6, h: 0.4,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
    });
  });

  // Tip
  slide.addText("不需要一开始就建好这个结构，随用随建，有内容了就加进去。", {
    x: 0.5, y: 5.0, w: 9.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  return slide;
}

module.exports = { createSlide, slideConfig };