// slide-143.js - 五步流程
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "process-5step", index: 143, title: "五步优化流程" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("FIVE-STEP OPTIMIZATION", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("五步优化流程", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("每一步有对应的问题和工具", {
    x: 0.5, y: 1.15, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 五个步骤卡片
  const steps = [
    { num: "01", title: "扫描", subtitle: "识别脆弱点", desc: "用「坏日子测试」快速过滤" },
    { num: "02", title: "诊断", subtitle: "找主要弱点", desc: "B=MAP 看 M/A/P 哪一项最弱" },
    { num: "03", title: "设计", subtitle: "选工具重写", desc: "用对应工具重新设计任务" },
    { num: "04", title: "检验", subtitle: "三条标准", desc: "清晰度 / 摩擦力 / 稳健性" },
    { num: "05", title: "全局", subtitle: "平衡检查", desc: "负荷 / 比例 / 时间分布" }
  ];

  const cardW = 1.74;
  const gap = 0.07;
  const startX = 0.5;
  const cardY = 1.95;
  const cardH = 2.55;

  steps.forEach((s, i) => {
    const x = startX + i * (cardW + gap);

    // 卡片底
    slide.addShape("rect", {
      x: x, y: cardY, w: cardW, h: cardH,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });

    // 顶部色条（首卡深红，其它浅红）
    const topColor = i === 0 ? theme.primary : (i === steps.length - 1 ? theme.primary : theme.accent);
    slide.addShape("rect", {
      x: x, y: cardY, w: cardW, h: 0.5,
      fill: { color: topColor }, line: { color: topColor }
    });

    // 数字
    slide.addText(s.num, {
      x: x, y: cardY + 0.05, w: cardW, h: 0.4,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });

    // 主标题
    slide.addText(s.title, {
      x: x + 0.1, y: cardY + 0.7, w: cardW - 0.2, h: 0.5,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, align: "center"
    });

    // 副标题
    slide.addText(s.subtitle, {
      x: x + 0.1, y: cardY + 1.25, w: cardW - 0.2, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center"
    });

    // 分隔线
    slide.addShape("rect", {
      x: x + cardW / 2 - 0.15, y: cardY + 1.65, w: 0.3, h: 0.02,
      fill: { color: theme.light }, line: { color: theme.light }
    });

    // 描述
    slide.addText(s.desc, {
      x: x + 0.1, y: cardY + 1.8, w: cardW - 0.2, h: 0.7,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center", lineSpacing: 14
    });

    // 卡片间连接箭头
    if (i < steps.length - 1) {
      const arrowX = x + cardW + gap / 2 - 0.04;
      slide.addShape("right_triangle", {
        x: arrowX - 0.06, y: cardY + 1.18, w: 0.12, h: 0.18,
        fill: { color: theme.light }, line: { color: theme.light },
        rotate: 90
      });
    }
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("先扫描全局 → 再逐个击破 → 最后回到全局平衡", {
    x: 0.5, y: 4.7, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
