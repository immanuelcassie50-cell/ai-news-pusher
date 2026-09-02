// 页 35: 案例+表格 - 周日班次 示例分析
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 35,
  title: '第一章 示例分析：周日班次'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部标识
  slide.addText("示例  /  EXAMPLE", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("示例：增设周日客服班次", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧 - 上下文
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 4.0, h: 3.5,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 0.1, h: 3.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText("课题", {
    x: 0.7, y: 1.65, w: 3.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("降低客户投诉量", {
    x: 0.7, y: 1.95, w: 3.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("其中一个方案", {
    x: 0.7, y: 2.4, w: 3.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("增设周末客服班次", {
    x: 0.7, y: 2.7, w: 3.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("代入诊断", {
    x: 0.7, y: 3.2, w: 3.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("问 4 个问题，看它属于哪种天花板。", {
    x: 0.7, y: 3.5, w: 3.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 右侧 - 三个判断
  const judgments = [
    {
      icon: "✓",
      title: "天花板一",
      reason: "在「投诉处理」的原始定义框架内",
      color: theme.primary
    },
    {
      icon: "✗",
      title: "天花板二",
      reason: "没有「做不到」的假设",
      color: theme.secondary
    },
    {
      icon: "✓",
      title: "天花板三",
      reason: "来自行业通行做法，不是外部借鉴",
      color: theme.primary
    },
    {
      icon: "✓",
      title: "天花板四",
      reason: "解决响应速度而非投诉根源",
      color: theme.primary
    }
  ];

  judgments.forEach((j, i) => {
    const y = 1.55 + i * 0.86;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 4.7, y: y, w: 4.8, h: 0.78,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 状态图标
    slide.addShape(pres.shapes.OVAL, {
      x: 4.85, y: y + 0.2, w: 0.4, h: 0.4,
      fill: { color: j.icon === "✓" ? theme.accent : theme.bg },
      line: { color: j.icon === "✓" ? theme.accent : theme.secondary, width: 1 }
    });
    slide.addText(j.icon, {
      x: 4.85, y: y + 0.2, w: 0.4, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: j.icon === "✓" ? "FFFFFF" : theme.secondary, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(j.title, {
      x: 5.35, y: y + 0.08, w: 1.6, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: j.color, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(j.reason, {
      x: 5.35, y: y + 0.4, w: 4.05, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部结论
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.1, w: 9, h: 0.25,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.1, w: 0.06, h: 0.25,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("标注三个一点也不丢人 —— 这恰恰说明这个方向需要深化或补充。", {
    x: 0.8, y: 5.1, w: 8.7, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "35", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "35_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
