// slide-30.js - 第四章知识框架
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 30,
  title: '第四章知识框架'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("第四章核心结构", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 四个模块的框架
  const modules = [
    {
      title: "多轮对话底层节奏",
      items: ["输入 → 生成 → 判断 → 迭代", "循环推进，每轮结束30秒判断"],
      color: theme.primary
    },
    {
      title: "四种对话模式",
      items: ["A逐步收敛型：需求模糊，先框架后内容", "B分步执行型：任务链清晰，每步一轮", "C角色锁定型：需要专业视角，第1轮锁定", "D检验驱动型：对准确性要求高，让AI自检"],
      color: theme.secondary
    },
    {
      title: "每个环节你要做的事",
      items: ["输入时：背景+范围+格式，三样都要有", "收到输出后：30秒判断，不要直接复制", "迭代时：精确指出哪里改、改成什么、为什么", "收尾时：保存有效提示词进Get笔记"],
      color: theme.primary
    },
    {
      title: "跑偏救场",
      items: ["方向偏 / 信息错 / 太宽泛 / 太冗长 / 上下文丢失", "→ 对应话术，及时拉回正轨"],
      color: theme.secondary
    }
  ];

  const startY = 1.15;
  const cardWidth = 4.35;
  const cardHeight = 1.95;

  modules.forEach((mod, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = 0.5 + col * (cardWidth + 0.3);
    const y = startY + row * (cardHeight + 0.2);

    // 卡片背景
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      rectRadius: 0.1
    });

    // 左侧色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: cardHeight,
      fill: { color: mod.color }
    });

    // 标题
    slide.addText(mod.title, {
      x: x + 0.2, y: y + 0.15, w: cardWidth - 0.4, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: mod.color, bold: true,
      align: "left", valign: "middle"
    });

    // 内容
    const contentText = mod.items.map((item, i) => ({
      text: item,
      options: { breakLine: i < mod.items.length - 1 }
    }));

    slide.addText(contentText, {
      x: x + 0.2, y: y + 0.55, w: cardWidth - 0.4, h: cardHeight - 0.7,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-30-preview.pptx" });
}

module.exports = { createSlide, slideConfig };