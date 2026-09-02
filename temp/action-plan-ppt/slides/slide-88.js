// slide-88.js - 知识框架：完整第二部分知识结构
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "framework", index: 88, title: "知识框架" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("第二部分 · 知识框架", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("完整 B=MAP 行为模型的知识结构", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 树状图 - 根节点
  // 根
  slide.addShape("rect", {
    x: 3.0, y: 1.2, w: 4, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("B = M × A × P 行为模型", {
    x: 3.0, y: 1.2, w: 4, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 根到分支的连接线
  slide.addShape("line", {
    x: 5.0, y: 1.75, w: 0, h: 0.3,
    line: { color: theme.inkMute, width: 1 }
  });
  // 横向连线
  slide.addShape("line", {
    x: 1.5, y: 2.05, w: 7, h: 0,
    line: { color: theme.inkMute, width: 1 }
  });
  // 三条分支
  [1.5, 5.0, 8.5].forEach(x => {
    slide.addShape("line", {
      x: x, y: 2.05, w: 0, h: 0.2,
      line: { color: theme.inkMute, width: 1 }
    });
  });

  // 三个一级分支
  const branches = [
    { x: 1.5, w: 2.5, color: theme.accent, letter: "M", label: "动机", points: ["真实但波动", "点燃启动", "不用于维持"] },
    { x: 5.0, w: 2.5, color: theme.accent, letter: "A", label: "容易度", points: ["那个时刻的容易", "三维度", "比动机可靠"] },
    { x: 8.5, w: 2.5, color: theme.redDeep, letter: "P", label: "提示", points: ["最被忽视", "三种类型", "默认=记忆"] }
  ];

  // 计算实际宽度并调整位置以居中
  const totalW = 9;
  const branchW = 2.5;
  const branchGap = 0.5;
  const totalBranchW = 3 * branchW + 2 * branchGap;
  const leftMargin = (totalW - totalBranchW) / 2;
  const branchX = [
    leftMargin,
    leftMargin + branchW + branchGap,
    leftMargin + 2 * (branchW + branchGap)
  ];

  branches.forEach((b, i) => {
    const x = branchX[i];
    // 一级节点
    slide.addShape("rect", {
      x: x, y: 2.25, w: branchW, h: 0.55,
      fill: { color: b.color }, line: { color: b.color }
    });
    slide.addText(b.letter + " · " + b.label, {
      x: x, y: 2.25, w: branchW, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // 二级要点
    b.points.forEach((p, j) => {
      const y = 2.95 + j * 0.32;
      // 连接线（仅第一条）
      if (j === 0) {
        slide.addShape("line", {
          x: x + branchW/2, y: 2.8, w: 0, h: 0.15,
          line: { color: theme.inkMute, width: 1 }
        });
      }
      slide.addText("· " + p, {
        x: x, y: y, w: branchW, h: 0.3,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.inkSoft, align: "center"
      });
    });
  });

  // 底部综合 - 诊断步骤
  slide.addShape("line", {
    x: 5.0, y: 4.0, w: 0, h: 0.3,
    line: { color: theme.inkMute, width: 1 }
  });
  slide.addShape("rect", {
    x: 1.5, y: 4.3, w: 7, h: 0.7,
    fill: { color: theme.paperWarm }, line: { color: theme.primary, width: 1 }
  });
  slide.addText("综合应用 · 诊断步骤", {
    x: 1.5, y: 4.35, w: 7, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true, align: "center"
  });
  slide.addText("诊断三问 → 找最薄弱项 → 集中处理（乘法逻辑：最低项决定整体水平）", {
    x: 1.5, y: 4.6, w: 7, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // 底部金句
  slide.addText("→ 进入第三部分：用四个工具针对弱点重新设计", {
    x: 0.5, y: 5.1, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
