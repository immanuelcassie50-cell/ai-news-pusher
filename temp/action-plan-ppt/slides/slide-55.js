// slide-55.js - 知识框架
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "framework", index: 55, title: "第一部分知识框架" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("KNOWLEDGE FRAMEWORK", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("第一部分：知识框架", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("计划的可执行性标准 · 完整知识结构", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 树状图 - 根节点
  // 根节点
  slide.addShape("rect", {
    x: 3.0, y: 1.7, w: 4.0, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("第一部分：可执行性标准", {
    x: 3.0, y: 1.7, w: 4.0, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 根到四分支的连接线
  const rootBottomY = 2.25;
  const branchTopY = 2.6;
  const branchCenters = [1.1, 3.6, 6.4, 8.9];

  // 主竖线
  slide.addShape("rect", {
    x: 4.95, y: rootBottomY, w: 0.1, h: 0.2,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  // 水平连线
  slide.addShape("rect", {
    x: 1.1, y: branchTopY - 0.2, w: 7.8, h: 0.05,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  // 四个分支的竖线
  branchCenters.forEach((cx) => {
    slide.addShape("rect", {
      x: cx - 0.05, y: rootBottomY + 0.05, w: 0.1, h: branchTopY - rootBottomY - 0.1,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
  });

  // 四个分支节点
  const branches = [
    {
      title: "核心区分",
      items: ["\"应该做\" ≠ \"会做\"", "可执行性 = 日常状态的人", "不依赖高意志力 + 可靠完成"]
    },
    {
      title: "三条标准",
      items: [
        "① 行动清晰度：看完即动",
        "② 启动摩擦力：从想到到动手",
        "③ 日常稳健性：普通日子还能发生"
      ]
    },
    {
      title: "五种模式",
      items: [
        "意图型 / 依赖他人型",
        "新增会议型 / 找时间型",
        "高能量依赖型"
      ]
    },
    {
      title: "检验方法",
      items: [
        "问问你未来那个累了的自己",
        "——它还会发生吗？"
      ]
    }
  ];

  const branchW = 1.85;
  const branchY = 2.6;

  branches.forEach((b, i) => {
    const x = branchCenters[i] - branchW / 2;

    // 标题
    slide.addShape("rect", {
      x, y: branchY, w: branchW, h: 0.4,
      fill: { color: theme.paper }, line: { color: theme.primary, width: 1.5 }
    });
    slide.addText(b.title, {
      x, y: branchY, w: branchW, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });

    // 内容
    b.items.forEach((item, j) => {
      const itemY = branchY + 0.5 + j * 0.3;
      slide.addShape("rect", {
        x: x + 0.05, y: itemY, w: branchW - 0.1, h: 0.27,
        fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
      });
      slide.addText(item, {
        x: x + 0.05, y: itemY, w: branchW - 0.1, h: 0.27,
        fontSize: 8.5, fontFace: "Microsoft YaHei",
        color: theme.inkSoft, align: "center", valign: "middle"
      });
    });
  });

  // 底部进入下一部分提示
  slide.addShape("rect", {
    x: 0.5, y: 4.95, w: 9, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.95, w: 0.12, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("进入第二部分", {
    x: 0.8, y: 5.0, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });
  slide.addText("已经能识别哪些任务是高风险了，接下来：行为到底是在什么条件下发生的？", {
    x: 2.4, y: 5.0, w: 7.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
