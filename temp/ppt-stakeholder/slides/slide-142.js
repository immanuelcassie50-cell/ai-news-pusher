// slide-142.js - 示范对比总结
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 05  /  需求映射", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 标题
  slide.addText("示范对比：孙伟 vs 王建国", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("两个示范，三处不同：定位层级、核心价值、处理方式", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 对比表头
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 1.8, h: 0.4,
    fill: { color: theme.dark },
    line: { color: theme.dark, width: 0 }
  });
  slide.addText("对比维度", {
    x: 0.5, y: 2.0, w: 1.8, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addShape("rect", {
    x: 2.3, y: 2.0, w: 3.55, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("孙伟 · C2 抗拒", {
    x: 2.3, y: 2.0, w: 3.55, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addShape("rect", {
    x: 5.85, y: 2.0, w: 3.65, h: 0.4,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("王建国 · C1 怀疑", {
    x: 5.85, y: 2.0, w: 3.65, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });

  // 对比行
  const rows = [
    { label: "目标层级", left: "C2 → B2（不必 A1）", right: "C1 → B1 → B2（不必支持者）" },
    { label: "核心顾虑", left: "历史数据「操作弹性」暴露", right: "数据准确性与审计风险" },
    { label: "价值形式", left: "利益价值：设计缓冲期", right: "信息 + 利益：报告 + 校验层" },
    { label: "处理语言", left: "解决他的具体担忧", right: "用数据回应他的逻辑质疑" }
  ];

  rows.forEach(function (r, i) {
    const y = 2.4 + i * 0.5;
    // 标签列
    slide.addShape("rect", {
      x: 0.5, y: y, w: 1.8, h: 0.5,
      fill: { color: theme.highlight },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(r.label, {
      x: 0.5, y: y, w: 1.8, h: 0.5,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });
    // 左
    slide.addShape("rect", {
      x: 2.3, y: y, w: 3.55, h: 0.5,
      fill: { color: i % 2 === 0 ? theme.white : theme.highlight },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(r.left, {
      x: 2.45, y: y, w: 3.3, h: 0.5,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.dark, align: "left", valign: "middle"
    });
    // 右
    slide.addShape("rect", {
      x: 5.85, y: y, w: 3.65, h: 0.5,
      fill: { color: i % 2 === 0 ? theme.white : theme.highlight },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(r.right, {
      x: 6.0, y: y, w: 3.4, h: 0.5,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.dark, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.5, w: 9, h: 0.65,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("两个示范，三处不同 —— 但都有一个共同点：先找到对方真正在担心的事，再设计能解决它的价值。", {
    x: 0.5, y: 4.5, w: 9, h: 0.65,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "center", valign: "middle"
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
