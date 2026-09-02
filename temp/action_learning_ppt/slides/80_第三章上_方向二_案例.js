// 页 80: 第三章上 - 方向二 案例 - 设备维护 3 层（流程横向步骤）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 80,
  title: '方向二 案例 - 设备维护 3 层'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部小标
  slide.addText("方向二  /  案例  ·  设备维护", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("案例  /  设备维护的三个层次", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副说明
  slide.addText("每往上走一层，问题的定义都在发生根本性的变化", {
    x: 0.5, y: 1.42, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三个层次 - 横向阶梯
  const layers = [
    {
      level: "L1",
      title: "处理问题",
      desc: "如何更快地修复设备故障",
      action: "加维修人员 / 缩短响应时间",
      color: theme.light,
      textColor: theme.secondary
    },
    {
      level: "L2",
      title: "减少问题",
      desc: "如何减少设备故障的发生频率",
      action: "预测性维护 / 提升设备质量",
      color: theme.accent,
      textColor: "FFFFFF"
    },
    {
      level: "L3",
      title: "消除问题",
      desc: "如何设计系统，使单点设备故障不影响整体运营",
      action: "冗余设计 / 模块化架构",
      color: theme.primary,
      textColor: "FFFFFF"
    }
  ];

  layers.forEach((l, i) => {
    const xPos = 0.5 + i * 3.05;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 1.95, w: 2.85, h: 2.5,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // 顶部色块
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 1.95, w: 2.85, h: 0.7,
      fill: { color: l.color }, line: { type: 'none' }
    });
    slide.addText(l.level, {
      x: xPos + 0.15, y: 1.95, w: 0.7, h: 0.7,
      fontSize: 22, fontFace: "Georgia",
      color: l.textColor, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(l.title, {
      x: xPos + 0.9, y: 1.95, w: 1.85, h: 0.7,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: l.textColor, bold: true,
      align: "right", valign: "middle", margin: 0
    });
    // 描述
    slide.addText("问题定义", {
      x: xPos + 0.2, y: 2.8, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, charSpacing: 4,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(l.desc, {
      x: xPos + 0.2, y: 3.1, w: 2.5, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "top", margin: 0
    });
    // 分割
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos + 0.2, y: 3.85, w: 0.3, h: 0.03,
      fill: { color: theme.light }, line: { type: 'none' }
    });
    slide.addText("对应解法", {
      x: xPos + 0.2, y: 3.9, w: 2.5, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.accent, charSpacing: 4,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(l.action, {
      x: xPos + 0.2, y: 4.1, w: 2.5, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "top", margin: 0
    });

    // 箭头
    if (i < layers.length - 1) {
      slide.addShape(pres.shapes.RIGHT_TRIANGLE, {
        x: xPos + 2.9, y: 3.05, w: 0.18, h: 0.3,
        fill: { color: theme.accent }, line: { type: 'none' },
        rotate: 90
      });
    }
  });

  // 底部
  slide.addText("从「快点修」到「少发生」到「发生时不重要」 —— 三个层次对应完全不同的解法", {
    x: 0.5, y: 5.0, w: 9, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "80", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "80_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
