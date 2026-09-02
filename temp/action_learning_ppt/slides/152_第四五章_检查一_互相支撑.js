// 页 152: 解释+问题 - 检查一：方案之间是否互相支撑
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 152,
  title: '检查一：方案之间是否互相支撑'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("一致性检查 01  /  Check 01", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 大数字水印
  slide.addText("01", {
    x: 7.8, y: 0.4, w: 1.8, h: 1.4,
    fontSize: 96, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "right", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("检查一：方案之间是否互相支撑", {
    x: 0.5, y: 0.85, w: 7.5, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三个问题
  const checks = [
    {
      num: "A",
      q: "有没有方案 A 的成功依赖方案 B 先完成？",
      hint: "这种依赖关系决定了时序安排。"
    },
    {
      num: "B",
      q: "有没有方案 A 和方案 C 同时推进会产生冲突？",
      hint: "冲突可能来自资源争夺（同一批人），也可能来自方向矛盾（假设不兼容）。"
    },
    {
      num: "C",
      q: "所有方案的合力，是不是指向同一个目标？",
      hint: "还是各自指向不同的方向，只是出现在同一张纸上？"
    }
  ];

  checks.forEach((c, i) => {
    const y = 1.6 + i * 1.1;
    // 数字块
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.7, h: 0.7,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(c.num, {
      x: 0.5, y: y, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 问题
    slide.addText(c.q, {
      x: 1.35, y: y - 0.05, w: 8.1, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 提示
    slide.addText(c.hint, {
      x: 1.35, y: y + 0.32, w: 8.1, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部金句
  slide.addText("合力 > 单点 ——  三个问题问完，方案的相互关系就清楚了。", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "152", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "152_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
