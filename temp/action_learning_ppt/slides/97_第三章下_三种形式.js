// 页 97: 三种形式 - 三栏
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 97,
  title: '外部视角 · 三种形式'
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
  slide.addText("外部视角  ·  三种结构化形式", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("制造\"局外人视角\"的三种方式", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三栏卡片
  const cards = [
    {
      x: 0.5,
      num: "01",
      title: "陌生人审计",
      desc: "切换角色扮演，把自己当第一天报到的新员工或外部顾问。",
      target: "适用：团队对不合理已经习以为常"
    },
    {
      x: 3.7,
      num: "02",
      title: "跨行业原理迁移",
      desc: "抽象化问题 → 找结构相似的外部场景 → 提取底层原理 → 重建。",
      target: "适用：感觉其他行业有成熟解法"
    },
    {
      x: 6.9,
      num: "03",
      title: "极端用户视角",
      desc: "找到体验最极端、最被边缘化的人，看他们暴露的系统断点。",
      target: "适用：一直在为平均用户优化"
    }
  ];

  cards.forEach((c, i) => {
    // 卡片底
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 1.7, w: 2.8, h: 3.4,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 顶部色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 1.7, w: 2.8, h: 0.08,
      fill: { color: i === 1 ? theme.accent : theme.primary }, line: { type: 'none' }
    });
    // 大数字
    slide.addText(c.num, {
      x: c.x + 0.2, y: 1.85, w: 2.4, h: 0.8,
      fontSize: 56, fontFace: "Georgia",
      color: i === 1 ? theme.accent : theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(c.title, {
      x: c.x + 0.2, y: 2.7, w: 2.4, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 分隔线
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x + 0.2, y: 3.15, w: 0.4, h: 0.04,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    // 描述
    slide.addText(c.desc, {
      x: c.x + 0.2, y: 3.3, w: 2.4, h: 1.1,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
    // 适用场景
    slide.addText(c.target, {
      x: c.x + 0.2, y: 4.5, w: 2.4, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "97", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "97_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
