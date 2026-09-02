// slide-20.js - Content: 知识框架总结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 20,
  title: '第五章知识框架'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("第五章知识框架", {
    x: 0.5, y: 0.3, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Three pillars
  const pillars = [
    {
      title: "工具路由",
      items: [
        "判断逻辑：从步骤的核心需求出发",
        "常见错误：准确信息给千问/批量文件手动处理",
        "决策树：音视频→豆包/准确信息→秘塔/存储知识→Get笔记/推理写作→千问/批量本地→WorkBuddy"
      ]
    },
    {
      title: "格式处理",
      items: [
        "Markdown是桥梁格式",
        "不要让AI直接生成Word（格式不稳定）",
        "正确流程：AI输出Markdown → 人判断内容 → 手动整理进业务格式"
      ]
    },
    {
      title: "个人AI产出库",
      items: [
        "每次协作结束后3个动作",
        "Get笔记的提示词库：按场景类型分类管理",
        "积累的价值：第N次同类任务只需5分钟"
      ]
    }
  ];

  pillars.forEach((pillar, i) => {
    const xPos = 0.5 + i * 3.1;

    // Pillar card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 0.9, w: 2.9, h: 4.4,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 0.9, w: 2.9, h: 0.6,
      fill: { color: theme.primary }
    });

    slide.addText(pillar.title, {
      x: xPos, y: 0.9, w: 2.9, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Items
    pillar.items.forEach((item, j) => {
      slide.addText(item, {
        x: xPos + 0.15, y: 1.65 + j * 1.1, w: 2.6, h: 1.0,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        valign: "top"
      });
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };