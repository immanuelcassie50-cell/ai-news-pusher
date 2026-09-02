// slide-139.js - 知识框架：树状图
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "framework", index: 139, title: "知识框架" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("第三部分 · 知识框架", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("第三部分知识框架", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 根节点
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 9, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("第三部分 · 四个行为设计工具", {
    x: 0.5, y: 1.15, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 四个工具卡片
  const tools = [
    {
      num: "工具一",
      name: "最小启动动作",
      target: "改善 A",
      points: [
        "原理：开始是阻力最大的一步",
        "要求：具体动作 + 状态不好时也能做",
        "用法：把第一步直接写进任务"
      ]
    },
    {
      num: "工具二",
      name: "锚定行为",
      target: "改善 P",
      points: [
        "原理：借用已有可靠行为的触发器",
        "格式：\"在 X 之后，做 Y\"",
        "关键：可靠 + 时地匹配 + 不冲突"
      ]
    },
    {
      num: "工具三",
      name: "降低摩擦",
      target: "改善 A",
      points: [
        "原理：减少阻力 > 提升努力",
        "三类：物理 / 认知 / 协调摩擦",
        "策略：默认化 · 预设化 · 简化化"
      ]
    },
    {
      num: "工具四",
      name: "执行意图",
      target: "改善 P",
      points: [
        "原理：预先决定\"当[情境]，做[行为]\"",
        "格式：\"当[情境]，我将[行为]\"",
        "研究：Gollwitzer · 完成率 2-3 倍"
      ]
    }
  ];

  tools.forEach((t, i) => {
    const x = 0.5 + i * 2.275;
    const w = 2.05;
    // 标题块
    slide.addShape("rect", {
      x: x, y: 1.85, w: w, h: 0.85,
      fill: { color: theme.paper }, line: { color: theme.accent, width: 1 }
    });
    slide.addShape("rect", {
      x: x, y: 1.85, w: w, h: 0.3,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(t.num, {
      x: x, y: 1.85, w: w, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(t.name, {
      x: x, y: 2.18, w: w, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, align: "center"
    });
    slide.addText(t.target, {
      x: x, y: 2.48, w: w, h: 0.2,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, italic: true, align: "center"
    });

    // 内容
    slide.addShape("rect", {
      x: x, y: 2.75, w: w, h: 1.5,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
    t.points.forEach((p, j) => {
      slide.addText(p, {
        x: x + 0.1, y: 2.85 + j * 0.45, w: w - 0.2, h: 0.45,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.inkSoft
      });
    });
  });

  // 选用逻辑
  slide.addShape("rect", {
    x: 0.5, y: 4.4, w: 9, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("选用逻辑", {
    x: 0.7, y: 4.4, w: 1.5, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });
  slide.addText("A 弱 → 工具一+三 | P 弱 → 工具二或四 | A 和 P 都弱 → 工具三+四 | M 弱 → 先处理 M", {
    x: 1.8, y: 4.4, w: 7.6, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, valign: "middle"
  });

  // 底部
  slide.addText("进入第四部分：用这些方法整合优化整份行动计划", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
