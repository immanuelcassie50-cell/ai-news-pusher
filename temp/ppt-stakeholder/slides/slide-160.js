// slide-160.js - 策略示例：孙伟破局
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
  slide.addText("策略示例：孙伟破局", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("破局点 #1 · 连锁效应 + 联盟路径", {
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
    { label: "目标人物", value: "老店长孙伟", color: theme.primary },
    { label: "当前定位 → 目标定位", value: "C2 抗拒  →  B2 犹豫", color: theme.accent },
    { label: "破局理由", value: "撬动 1 人 → 影响 15 家门店长（连锁效应最高）", color: theme.dark },
    { label: "他最在乎的", value: "历史数据「操作弹性」的暴露风险", color: theme.primary },
    { label: "我能给他的核心价值", value: "设计「历史数据过渡缓冲期」，免除审计风险", color: theme.accent }
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
  slide.addText("Step 1  本周内与孙伟一对一沟通，专门讲清过渡缓冲期的设计；", {
    x: 0.65, y: 4.55, w: 8.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "middle"
  });
  slide.addText("Step 2  请田中先生（非正式场合）传递系统对店长的具体价值；", {
    x: 0.65, y: 4.8, w: 8.7, h: 0.25,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "middle"
  });
  slide.addText("Step 3  一个月内观察到孙伟在店长沟通会上的表态转中性，即破局成功。", {
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
