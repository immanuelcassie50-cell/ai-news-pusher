// 页 33: 列表 - 四个诊断问题
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 33,
  title: '第一章 四个诊断问题'
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
  slide.addText("四个诊断问题", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("对每一条方案，问这 4 个问题", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("一条方案可以属于多种类型", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 4个问题卡片
  const questions = [
    {
      num: "01",
      ceiling: "天花板一",
      q: "这个方案是在原有的问题定义框架内运作的，还是它本身在挑战问题是如何定义的？"
    },
    {
      num: "02",
      ceiling: "天花板二",
      q: "这个方案的设计，是否接受了某个「做不到」的前提 —— 而这个前提其实从来没有被认真测试过？"
    },
    {
      num: "03",
      ceiling: "天花板三",
      q: "这个方案来自你所在行业或团队内部的已知做法，还是来自某个外部经验的借鉴？"
    },
    {
      num: "04",
      ceiling: "天花板四",
      q: "这个方案解决的是症状，还是产生症状的根本机制？如果停止推进，问题会不会重新出现？"
    }
  ];

  questions.forEach((q, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.55;
    const y = 1.85 + row * 1.6;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.1, h: 1.45,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    // 编号
    slide.addText(q.num, {
      x: x + 0.25, y: y + 0.1, w: 0.7, h: 0.4,
      fontSize: 18, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 标签
    slide.addText(q.ceiling, {
      x: x + 0.9, y: y + 0.1, w: 1.5, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, charSpacing: 3, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 问题
    slide.addText(q.q, {
      x: x + 0.25, y: y + 0.5, w: 4, h: 0.9,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部小注
  slide.addText("答「是」就在对应格打勾 —— 知道类型，才能定向补。", {
    x: 0.5, y: 5.15, w: 9, h: 0.22,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "33", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "33_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
