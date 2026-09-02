// 08 导言 - 课程地图（TOC 布局：6个章节卡片 2x3 网格）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 8,
  title: '课程地图'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标识
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("导言  /  Course Map", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("课程地图", {
    x: 0.5, y: 0.85, w: 6, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 右上角小标
  slide.addText("6 CHAPTERS", {
    x: 7.0, y: 0.95, w: 2.5, h: 0.3,
    fontSize: 11, fontFace: "Georgia",
    color: theme.accent, charSpacing: 6,
    align: "right", valign: "middle", margin: 0
  });

  // 副标题
  slide.addText("六份文档，按顺序读下来，每章的产出是下一章的起点。", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 6个章节卡片 2行x3列
  const chapters = [
    {
      num: "01",
      title: "看清常规方案的天花板",
      desc: "理解为什么常规方案有上限，以及上限的四种来源",
      color: theme.primary
    },
    {
      num: "02",
      title: "系统盘点",
      desc: "把现有方案分类，识别覆盖空白，确定突破重点",
      color: theme.accent
    },
    {
      num: "03",
      title: "换一套假设思考",
      desc: "方法一：问题重构  |  方法二：假设挑战",
      color: theme.secondary
    },
    {
      num: "04",
      title: "换一个视角思考",
      desc: "方法三：外部视角  |  方法四：逆向思维  |  方法五：组合",
      color: theme.primary
    },
    {
      num: "05",
      title: "从候选到落地",
      desc: "方案评估三维框架  +  方案组合设计",
      color: theme.accent
    },
    {
      num: "06",
      title: "写在最后",
      desc: "整体回顾、核心心法、回到原点",
      color: theme.secondary
    }
  ];

  const cardW = 2.95;
  const cardH = 1.45;
  const gapX = 0.13;
  const gapY = 0.18;
  const startX = 0.5;
  const startY = 2.05;

  chapters.forEach((ch, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // 卡片底
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });

    // 左侧色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.85, h: cardH,
      fill: { color: ch.color }, line: { type: 'none' }
    });

    // 编号
    slide.addText(ch.num, {
      x: x, y: y + 0.4, w: 0.85, h: 0.7,
      fontSize: 32, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 标题
    slide.addText(ch.title, {
      x: x + 1.0, y: y + 0.2, w: cardW - 1.1, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 描述
    slide.addText(ch.desc, {
      x: x + 1.0, y: y + 0.7, w: cardW - 1.1, h: 0.7,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "08", "导言与课程地图");
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
  pres.writeFile({ fileName: "08_导言_课程地图_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
