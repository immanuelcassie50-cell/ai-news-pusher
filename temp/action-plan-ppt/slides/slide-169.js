// slide-169.js - 全模块框架图
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "tree-diagram", index: 169, title: "全模块框架图" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("KNOWLEDGE FRAMEWORK", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("全模块知识框架", {
    x: 0.5, y: 0.6, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("行动计划·执行设计模块", {
    x: 0.5, y: 1.1, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 根节点
  slide.addShape("rect", {
    x: 3.5, y: 1.7, w: 3, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("行动计划·执行设计", {
    x: 3.5, y: 1.7, w: 3, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 根节点竖线
  slide.addShape("rect", {
    x: 4.99, y: 2.15, w: 0.02, h: 0.18,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });

  // 第二层 - 核心转变 + 四个部分
  // 核心转变
  slide.addShape("rect", {
    x: 0.5, y: 2.33, w: 1.7, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("核心转变", {
    x: 0.5, y: 2.33, w: 1.7, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 水平横线
  slide.addShape("rect", {
    x: 2.2, y: 2.52, w: 7.3, h: 0.02,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });

  // 四个部分卡
  const parts = [
    { num: "01", title: "可执行性标准", col: theme.primary },
    { num: "02", title: "B=MAP 模型", col: theme.primary },
    { num: "03", title: "四个设计工具", col: theme.primary },
    { num: "04", title: "综合优化", col: theme.primary }
  ];

  parts.forEach((p, i) => {
    const x = 2.2 + i * 1.85;
    // 节点竖线
    slide.addShape("rect", {
      x: x + 0.9, y: 2.35, w: 0.02, h: 0.17,
      fill: { color: theme.inkMute }, line: { color: theme.inkMute }
    });
    // 卡
    slide.addShape("rect", {
      x: x, y: 2.33, w: 1.8, h: 0.4,
      fill: { color: p.col }, line: { color: p.col }
    });
    slide.addText(p.num + "  " + p.title, {
      x: x, y: 2.33, w: 1.8, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // 节点下方的二级内容
    let items = [];
    if (i === 0) {
      items = ["行动清晰度", "启动摩擦力", "日常稳健性"];
    } else if (i === 1) {
      items = ["M 动机", "A 容易度", "P 提示"];
    } else if (i === 2) {
      items = ["最小启动", "锚定 / 降摩擦", "执行意图"];
    } else {
      items = ["五步流程", "三次对话", "全局平衡"];
    }

    items.forEach((it, j) => {
      const y = 2.95 + j * 0.35;
      slide.addShape("rect", {
        x: x + 0.1, y: y + 0.08, w: 0.05, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
      });
      slide.addText(it, {
        x: x + 0.2, y: y, w: 1.6, h: 0.25,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.ink
      });
    });
  });

  // 核心转变下方
  slide.addText("从：人的问题", {
    x: 0.5, y: 2.85, w: 1.7, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center"
  });
  slide.addText("到：设计的问题", {
    x: 0.5, y: 3.15, w: 1.7, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // 底部最终原则
  slide.addShape("rect", {
    x: 0.5, y: 4.5, w: 9, h: 0.75,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.5, w: 0.08, h: 0.75,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("最终原则", {
    x: 0.8, y: 4.55, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("为「日常状态的自己」设计，而不是为「状态最好的那天的自己」设计。", {
    x: 0.8, y: 4.85, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
