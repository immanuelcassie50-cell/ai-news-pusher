// slide-161.js - 策略示例：赵磊破局
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
  slide.addText("PART 06  /  破局策略", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 标题
  slide.addText("策略示例：赵磊破局", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("破局点 #2 · 信号源点 + KPI 连接", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 字段填充
  const rows = [
    { label: "目标人物", value: "大区总经理赵磊", color: theme.primary },
    { label: "当前定位 → 目标定位", value: "A3 顺从  →  A2 接受", color: theme.accent },
    { label: "破局理由", value: "信号源 —— 基层都在读他的信号；时间窗口恰好赶上他的年度汇报", color: theme.dark },
    { label: "他最在乎的", value: "年度数字化汇报的可见成果；KPI 上有故事可讲", color: theme.primary },
    { label: "我能给他的核心价值", value: "把系统上线做成他年度数字化汇报的可见成果；帮他准备汇报素材", color: theme.accent }
  ];

  rows.forEach(function (r, i) {
    const y = 2.05 + i * 0.42;
    slide.addShape("rect", {
      x: 0.5, y: y, w: 2.5, h: 0.38,
      fill: { color: theme.highlight },
      line: { color: theme.highlight, width: 0 }
    });
    slide.addText(r.label, {
      x: 0.65, y: y, w: 2.3, h: 0.38,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
    slide.addShape("rect", {
      x: 3.1, y: y, w: 6.4, h: 0.38,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(r.value, {
      x: 3.25, y: y, w: 6.15, h: 0.38,
      fontSize: 11, fontFace: FONT_CN,
      color: r.color, bold: true, align: "left", valign: "middle"
    });
  });

  // 关键行动步骤
  slide.addShape("rect", {
    x: 0.5, y: 4.2, w: 9, h: 0.95,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("关键行动步骤", {
    x: 0.65, y: 4.25, w: 4, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });
  slide.addText("Step 1  把统报系统的进度包装成赵磊的「数字化领先指标」，列入他的汇报材料；", {
    x: 0.65, y: 4.55, w: 8.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "middle"
  });
  slide.addText("Step 2  在月度经营会上，请赵磊做 5 分钟的项目进展分享；", {
    x: 0.65, y: 4.8, w: 8.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "middle"
  });
  slide.addText("Step 3  全区大会前提前与赵磊对齐发言口径，确保关键节点有明确表态。", {
    x: 0.65, y: 5.05, w: 8.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "middle"
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
