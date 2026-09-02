// slide-117.js - 原则三：交叉验证
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 04 · 原则 3 / 3", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 大编号
  slide.addText("03", {
    x: 0.5, y: 0.55, w: 1.4, h: 1.0,
    fontSize: 60, fontFace: FONT_EN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("结合画像交叉验证，不凭直觉", {
    x: 2.0, y: 0.6, w: 7.5, h: 0.6,
    fontSize: 26, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("把画像信息和实际行为对照，发现「不按预期行动」的人 = 真正的卡点", {
    x: 2.0, y: 1.2, w: 7.5, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 三步流程
  const steps = [
    {
      n: "1", title: "画像预测",
      desc: "基于第三部分深度画像：岗位利益、个人诉求、行为预判",
      detail: "陈静的岗位利益是「保 IT 系统稳定」，应该倾向 A2 支持",
      color: theme.mid
    },
    {
      n: "2", title: "行为观察",
      desc: "对照实际发生的行为：他在做什么？",
      detail: "但陈静主动来问需求规格、在 IT 内部主动把项目提前 —— 行为像 A1",
      color: theme.primary
    },
    {
      n: "3", title: "交叉验证",
      desc: "预测 vs 实际不一致 = 信号",
      detail: "找到差距原因：「需求规格清晰」= 她的核心诉求。差距是发现卡点的入口",
      color: theme.accent
    }
  ];

  steps.forEach(function (s, i) {
    const x = 0.5 + i * 3.05;
    // 顶部圆形
    slide.addShape("ellipse", {
      x: x + 1.0, y: 1.85, w: 0.9, h: 0.9,
      fill: { color: s.color }, line: { color: s.color, width: 0 }
    });
    slide.addText(s.n, {
      x: x + 1.0, y: 1.85, w: 0.9, h: 0.9,
      fontSize: 28, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(s.title, {
      x: x, y: 2.85, w: 2.9, h: 0.35,
      fontSize: 14, fontFace: FONT_CN, color: s.color,
      bold: true, align: "center", valign: "middle"
    });
    // 卡
    slide.addShape("rect", {
      x: x, y: 3.25, w: 2.9, h: 1.55,
      fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
    });
    slide.addText(s.desc, {
      x: x + 0.15, y: 3.35, w: 2.6, h: 0.4,
      fontSize: 10, fontFace: FONT_CN, color: theme.dark,
      bold: true, align: "left", valign: "top", lineSpacing: 14
    });
    slide.addShape("line", {
      x: x + 0.15, y: 3.85, w: 2.6, h: 0,
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText("示例", {
      x: x + 0.15, y: 3.9, w: 2.6, h: 0.25,
      fontSize: 9, fontFace: FONT_CN, color: theme.mid,
      bold: true, align: "left", valign: "middle", charSpacing: 2
    });
    slide.addText(s.detail, {
      x: x + 0.15, y: 4.15, w: 2.6, h: 0.6,
      fontSize: 10, fontFace: FONT_CN, color: theme.secondary,
      align: "left", valign: "top", lineSpacing: 13
    });
  });

  // 箭头连接
  for (let i = 0; i < 2; i++) {
    slide.addShape("rightTriangle", {
      x: 3.45 + i * 3.05, y: 2.15, w: 0.4, h: 0.4,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 },
      rotate: 45
    });
  }

  // 底部金句
  slide.addText("直觉常常有依据，但依据未必对 —— 用画像和事实交叉验证", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.accent,
    bold: true, italic: true, align: "center", valign: "middle"
  });

  // 底部品牌
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战 · 授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN, color: theme.mid, align: "left", valign: "middle"
  });
  slide.addText(String(pageNum).padStart(2, '0') + " / " + String(totalPages).padStart(3, '0'), {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN, color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
