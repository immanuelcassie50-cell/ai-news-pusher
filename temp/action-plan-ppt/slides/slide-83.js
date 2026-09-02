// slide-83.js - 苏敏案例：A 分析
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "diagnosis", index: 83, title: "苏敏案例：A 分析" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 顶部小标签
  slide.addText("苏敏案例 · 2/3", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 4, bold: true
  });

  // 标题
  slide.addText("A 容易度分析", {
    x: 0.5, y: 0.55, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("每周一对一的启动，需要做多少事？", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧大字母
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 3.2, h: 3.5,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("A", {
    x: 0.5, y: 1.6, w: 3.2, h: 1.7,
    fontSize: 130, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText("容易度", {
    x: 0.5, y: 3.3, w: 3.2, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 评级
  slide.addShape("rect", {
    x: 0.7, y: 3.85, w: 2.8, h: 0.4,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
  });
  for (let i = 0; i < 7; i++) {
    slide.addShape("ellipse", {
      x: 0.85 + i * 0.36, y: 3.95, w: 0.2, h: 0.2,
      fill: { color: i < 4 ? theme.accent : theme.paperWarm },
      line: { color: i < 4 ? theme.accent : theme.paperWarm }
    });
  }
  slide.addText("A = 4/10（中等偏低）", {
    x: 0.5, y: 4.3, w: 3.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 右侧三个维度的摩擦
  const frictions = [
    {
      title: "时间摩擦",
      eng: "Time",
      desc: "需要协调两人日历对齐",
      level: "高"
    },
    {
      title: "认知摩擦",
      eng: "Cognitive",
      desc: "需要提前想好谈什么",
      level: "高"
    },
    {
      title: "物理摩擦",
      eng: "Physical",
      desc: "需要找到合适的空间",
      level: "中"
    }
  ];

  frictions.forEach((f, i) => {
    const y = 1.5 + i * 1.18;
    const levelColor = f.level === "高" ? theme.redDeep : theme.inkMute;
    slide.addShape("rect", {
      x: 3.9, y: y, w: 5.6, h: 1.0,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
    slide.addShape("rect", {
      x: 3.9, y: y, w: 0.15, h: 1.0,
      fill: { color: levelColor }, line: { color: levelColor }
    });
    slide.addText(f.title, {
      x: 4.2, y: y + 0.1, w: 2.5, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    slide.addText(f.eng, {
      x: 4.2, y: y + 0.45, w: 2.5, h: 0.25,
      fontSize: 10, fontFace: "Arial",
      color: theme.inkMute, charSpacing: 4
    });
    slide.addText(f.desc, {
      x: 4.2, y: y + 0.7, w: 3.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
    // 等级
    slide.addShape("rect", {
      x: 7.8, y: y + 0.3, w: 1.5, h: 0.4,
      fill: { color: levelColor }, line: { color: levelColor }
    });
    slide.addText(f.level, {
      x: 7.8, y: y + 0.3, w: 1.5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
  });

  // 底部结论
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("三项加在一起 —— 启动的认知和物理摩擦都比较高", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
