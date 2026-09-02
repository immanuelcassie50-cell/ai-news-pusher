// 页 93: 第三章上 - 三步操作（流程）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 93,
  title: '假设挑战 - 三步操作'
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
  slide.addText("方法二  /  3 步操作流程", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("假设挑战的三步操作", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副说明
  slide.addText("把隐含的假设显性化，区分真约束和假约束", {
    x: 0.5, y: 1.42, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三步横向流程
  const steps = [
    {
      num: "1",
      title: "穷举做不到",
      desc: "列出所有「无法改变」「无法突破」「无法获得」的判断",
      sub: "不加评判，先穷举",
      type: "硬 / 软 / 假"
    },
    {
      num: "2",
      title: "溯源每一条",
      desc: "判断的来源是什么？明确的法规？内部政策？某人的说法？历史印象？",
      sub: "近期有人真正尝试过吗？",
      type: "找到源头"
    },
    {
      num: "3",
      title: "分类标记",
      desc: "硬约束（接受）/ 软约束（成本问题，进入利益相关方分析）/ 假约束（突破口）",
      sub: "假约束 → 设计验证实验",
      type: "三类标记"
    }
  ];

  steps.forEach((s, i) => {
    const xPos = 0.5 + i * 3.05;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 1.95, w: 2.85, h: 2.95,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // 顶部色块
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 1.95, w: 2.85, h: 0.5,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText("STEP  " + s.num, {
      x: xPos + 0.2, y: 1.95, w: 2.5, h: 0.5,
      fontSize: 12, fontFace: "Georgia",
      color: "FFFFFF", bold: true, charSpacing: 4,
      align: "left", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(s.title, {
      x: xPos + 0.2, y: 2.6, w: 2.5, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(s.desc, {
      x: xPos + 0.2, y: 3.05, w: 2.5, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
    // 副
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos + 0.2, y: 4.15, w: 0.3, h: 0.03,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(s.sub, {
      x: xPos + 0.2, y: 4.25, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(s.type, {
      x: xPos + 0.2, y: 4.55, w: 2.5, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true,
      align: "left", valign: "middle", margin: 0
    });

    // 箭头
    if (i < steps.length - 1) {
      slide.addShape(pres.shapes.RIGHT_TRIANGLE, {
        x: xPos + 2.9, y: 3.3, w: 0.18, h: 0.3,
        fill: { color: theme.accent }, line: { type: 'none' },
        rotate: 90
      });
    }
  });

  // 底部金句
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.35,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText("完成三步后，带着「假约束清单 + 验证实验设计」进入第三章（下）", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "93", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "93_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
