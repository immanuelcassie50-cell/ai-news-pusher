// 页 154: 解释+四类 - 检查三：时序安排
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 154,
  title: '检查三：时序安排'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("一致性检查 03  /  Check 03", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 大数字水印
  slide.addText("03", {
    x: 7.8, y: 0.4, w: 1.8, h: 1.4,
    fontSize: 96, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "right", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("检查三：时序安排", {
    x: 0.5, y: 0.85, w: 7.5, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 引述
  slide.addText("不是所有方案都可以同时推进，也不是等一切准备好再启动。", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 四类方案 - 2x2 网格
  const types = [
    {
      tag: "A",
      title: "打基础",
      desc: "必须先做，为后续创造条件。",
      time: "短期优先"
    },
    {
      tag: "B",
      title: "快速见效",
      desc: "短期内建立信心、验证方向。",
      time: "短期优先"
    },
    {
      tag: "C",
      title: "依赖前期积累",
      desc: "需要等基础完成才能推进。",
      time: "中期延伸"
    },
    {
      tag: "D",
      title: "依赖相关方立场",
      desc: "需要等关键人立场转变。",
      time: "中期延伸"
    }
  ];

  types.forEach((t, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.6;
    const y = 2.1 + row * 1.45;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.3,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 左侧色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.5, h: 1.3,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(t.tag, {
      x: x, y: y, w: 0.5, h: 1.3,
      fontSize: 32, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(t.title, {
      x: x + 0.65, y: y + 0.15, w: 3.6, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 时间标签
    slide.addText(t.time, {
      x: x + 0.65, y: y + 0.55, w: 3.6, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, charSpacing: 3,
      align: "left", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(t.desc, {
      x: x + 0.65, y: y + 0.85, w: 3.6, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部金句
  slide.addText("把这四类方案分别归入不同时间段，就形成了组合的逻辑结构。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "154", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "154_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
