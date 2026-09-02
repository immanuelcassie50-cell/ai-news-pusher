// slide-06.js - 怎么用这门课
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "content-principles", index: 6, title: "怎么用这门课" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("HOW TO USE THIS COURSE", {
    x: 0.5, y: 0.25, w: 4.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("怎么用这门课", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("五个原则，会影响你从这门课里实际带走多少东西。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 5个原则 - 横向
  const principles = [
    { num: "01", title: "带着计划来", body: "这门课的所有练习，\n都直接用在你的实际计划上。" },
    { num: "02", title: "相信直觉", body: "在进入工具之前，\n先做自查练习保留真实感受。" },
    { num: "03", title: "慢一点", body: "不要追求一次学会，\n先理解逻辑再应用。" },
    { num: "04", title: "反复回到案例", body: "苏敏的案例会反复出现，\n每次都揭示不同的问题。" },
    { num: "05", title: "做就比不做强", body: "哪怕只修订了一个任务，\n也比你听完整门课却没动强。" }
  ];

  principles.forEach((p, i) => {
    const y = 1.85 + i * 0.65;
    // 数字
    slide.addText(p.num, {
      x: 0.5, y: y, w: 0.7, h: 0.5,
      fontSize: 24, fontFace: "Arial",
      color: theme.primary, bold: true
    });
    // 竖线
    slide.addShape("rect", {
      x: 1.25, y: y + 0.05, w: 0.02, h: 0.45,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    // 标题
    slide.addText(p.title, {
      x: 1.45, y: y, w: 2.5, h: 0.3,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    // 正文
    slide.addText(p.body, {
      x: 1.45, y: y + 0.3, w: 2.5, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 13
    });
    // 右侧大块装饰
    if (i === 0 || i === 4) {
      slide.addShape("rect", {
        x: 4.2, y: y + 0.1, w: 5.3, h: 0.4,
        fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
      });
    }
  });

  // 右侧大色块作为视觉锚点
  slide.addShape("rect", {
    x: 4.5, y: 2.4, w: 5.0, h: 2.3,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("PRINCIPLE", {
    x: 4.7, y: 2.55, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 6, bold: true
  });
  slide.addText("学得深，\n不如改得动。", {
    x: 4.7, y: 2.85, w: 4.6, h: 1.0,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, lineSpacing: 36
  });
  slide.addShape("rect", {
    x: 4.7, y: 4.0, w: 0.4, h: 0.04,
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });
  slide.addText("这句话会反复出现", {
    x: 4.7, y: 4.1, w: 4.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.redLight
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
