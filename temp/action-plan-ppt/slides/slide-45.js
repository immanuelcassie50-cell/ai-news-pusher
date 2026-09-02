// slide-45.js - 苏敏诊断总结
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "summary-quote", index: 45, title: "苏敏诊断总结" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("DIAGNOSIS SUMMARY", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("四件任务，一件低风险都没有", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 4个任务总览表
  const tasks = [
    { name: "一对一辅导", risk: "高", color: theme.primary, score: 0.75 },
    { name: "月度复盘", risk: "中", color: theme.goldAccent, score: 0.5 },
    { name: "跨部门交流", risk: "极高", color: theme.redDeep, score: 0.95 },
    { name: "季度发展计划", risk: "中", color: theme.goldAccent, score: 0.5 }
  ];

  const rowH = 0.5;
  const startY = 1.7;

  // 表头
  slide.addShape("rect", {
    x: 0.5, y: startY, w: 9, h: 0.4,
    fill: { color: theme.ink }, line: { color: theme.ink }
  });
  slide.addText("任务", {
    x: 0.7, y: startY, w: 2.0, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("风险等级", {
    x: 3.0, y: startY, w: 1.0, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle", align: "center"
  });
  slide.addText("风险条", {
    x: 4.5, y: startY, w: 3.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle", align: "center"
  });
  slide.addText("最终结果", {
    x: 8.2, y: startY, w: 1.2, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle", align: "center"
  });

  tasks.forEach((t, i) => {
    const y = startY + 0.4 + i * rowH;

    // 行底色
    slide.addShape("rect", {
      x: 0.5, y, w: 9, h: rowH,
      fill: { color: i % 2 === 0 ? theme.paper : theme.paperWarm }, line: { color: i % 2 === 0 ? theme.paper : theme.paperWarm }
    });

    // 任务名
    slide.addText(t.name, {
      x: 0.7, y, w: 2.0, h: rowH,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, valign: "middle"
    });

    // 风险等级徽章
    slide.addShape("rect", {
      x: 3.0, y: y + 0.1, w: 1.0, h: 0.3,
      fill: { color: t.color }, line: { color: t.color }
    });
    slide.addText(t.risk, {
      x: 3.0, y: y + 0.1, w: 1.0, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // 风险条
    slide.addShape("rect", {
      x: 4.5, y: y + 0.18, w: 3.5, h: 0.14,
      fill: { color: theme.paperLine }, line: { color: theme.paperLine }
    });
    slide.addShape("rect", {
      x: 4.5, y: y + 0.18, w: 3.5 * t.score, h: 0.14,
      fill: { color: t.color }, line: { color: t.color }
    });

    // 最终结果
    slide.addText(i === 2 ? "3个月断掉" : (i === 0 ? "推迟成\"找时间\"" : "质量不稳"), {
      x: 8.2, y, w: 1.2, h: rowH,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center", valign: "middle"
    });
  });

  // 大金句卡片
  slide.addShape("rect", {
    x: 0.5, y: 4.0, w: 9, h: 1.25,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("没有一项是真正低风险。", {
    x: 0.5, y: 4.1, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addText("计划的设计本身，就预埋了后来失败的种子。", {
    x: 0.5, y: 4.6, w: 9, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center"
  });

  slide.addText("这不是苏敏的执行力问题，是设计问题。", {
    x: 0.5, y: 4.92, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.redLight, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
