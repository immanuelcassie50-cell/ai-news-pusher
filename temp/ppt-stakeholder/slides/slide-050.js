// slide-050.js - 受益相关方：叶云示范
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 02  ·  全景扫描  ·  维度四示范", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("受益相关方：叶云示范", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("⚡ 项目成功后能从中获益的人或部门", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 三个受益方卡片
  const beneficiaries = [
    { who: "集团战略分析部", benefit: "数据统一后，决策质量大幅提升", tag: "决策层" },
    { who: "IT 部陈静", benefit: "系统化后，手工数据处理工作量预计减少超过 60%", tag: "执行层" },
    { who: "区域运营团队", benefit: "数据实时可见，跨团队数据确认工作消失", tag: "运营层" }
  ];
  const cardW = 2.9;
  const cardH = 2.6;
  const gapX = 0.15;
  beneficiaries.forEach(function (b, i) {
    const x = 0.5 + i * (cardW + gapX);
    // 卡片
    slide.addShape("rect", {
      x: x, y: 1.7, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 顶部色条
    slide.addShape("rect", {
      x: x, y: 1.7, w: cardW, h: 0.5,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    // 标签
    slide.addText(b.tag, {
      x: x, y: 1.7, w: cardW, h: 0.5,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.light, align: "center", valign: "middle",
      charSpacing: 3
    });
    // 受益方
    slide.addText(b.who, {
      x: x + 0.15, y: 2.35, w: cardW - 0.3, h: 0.5,
      fontSize: 15, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "center", valign: "middle"
    });
    // 分隔线
    slide.addShape("rect", {
      x: x + 0.4, y: 2.9, w: cardW - 0.8, h: 0.02,
      fill: { color: theme.border },
      line: { color: theme.border, width: 0 }
    });
    // 受益描述标题
    slide.addText("他们获得的好处", {
      x: x + 0.15, y: 3.0, w: cardW - 0.3, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.mid, align: "center", valign: "middle"
    });
    // 受益描述
    slide.addText(b.benefit, {
      x: x + 0.15, y: 3.3, w: cardW - 0.3, h: 0.95,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: "center", valign: "top",
      lineSpacing: 16
    });
  });

  // 底部金句 - 多维度重叠
  slide.addShape("rect", {
    x: 0.5, y: 4.55, w: 9, h: 0.5,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.55, w: 0.08, h: 0.5,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("注意：陈静同时出现在维度二（资源相关方）和维度四（受益相关方）——一个人可以同时处于多个维度", {
    x: 0.75, y: 4.55, w: 8.7, h: 0.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // 底部品牌
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战 · 授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });
  slide.addText(String(pageNum).padStart(2, '0') + " / " + String(totalPages).padStart(3, '0'), {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN,
    color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
