// 页 77: 第三章上 - 方向一 案例 - 轨道交通 5 个为什么（流程横向步骤）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 77,
  title: '方向一 案例 - 轨道交通 5 个为什么'
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
  slide.addText("方向一  /  案例  ·  轨道交通", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("案例  /  轨道交通 5 个为什么", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副说明
  slide.addText("从「减少晚点」走到「换乘通道设计的容量问题」", {
    x: 0.5, y: 1.42, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 横向 4 步流程
  const steps = [
    { num: "Q1", text: "是什么导致", sub: "高峰期晚点" },
    { num: "Q2", text: "为什么乘客", sub: "无法快速集中" },
    { num: "Q3", text: "为什么会有", sub: "客流交叉" },
    { num: "Q4", text: "换乘通道设计", sub: "容量不匹配" }
  ];

  steps.forEach((s, i) => {
    const xPos = 0.5 + i * 2.3;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 2.0, w: 2.0, h: 1.7,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // 顶部条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 2.0, w: 2.0, h: 0.4,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(s.num, {
      x: xPos, y: 2.0, w: 2.0, h: 0.4,
      fontSize: 14, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 主体文字
    slide.addText(s.text, {
      x: xPos + 0.1, y: 2.55, w: 1.8, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(s.sub, {
      x: xPos + 0.1, y: 3.05, w: 1.8, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center", valign: "top", margin: 0
    });

    // 箭头（除最后一个）
    if (i < steps.length - 1) {
      slide.addShape(pres.shapes.RIGHT_TRIANGLE, {
        x: xPos + 2.05, y: 2.7, w: 0.2, h: 0.3,
        fill: { color: theme.accent }, line: { type: 'none' },
        rotate: 90
      });
    }
  });

  // 底部对照
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 4.4, h: 1.0,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText("症状级解法", {
    x: 0.7, y: 4.1, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("增加发车频次  ·  优化乘客广播", {
    x: 0.7, y: 4.45, w: 4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 4.0, w: 4.4, h: 1.0,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("系统性解法（往深走后）", {
    x: 5.3, y: 4.1, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("重新设计换乘通道  ·  调整容量配比", {
    x: 5.3, y: 4.45, w: 4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部
  slide.addText("针对结构原因的解法，效果会比「加频次 / 优化广播」持续得多", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "77", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "77_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
