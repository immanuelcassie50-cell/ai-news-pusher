// slide-162.js - 联盟策略详解
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
  slide.addText("联盟策略：一个被低估的破局路径", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("借助 A1 级支持者的影响力，去影响 B2 和 C1 人群", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 为什么有效
  slide.addShape("rect", {
    x: 0.5, y: 2.05, w: 4.4, h: 1.45,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.05, w: 4.4, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("为什么有效", {
    x: 0.5, y: 2.05, w: 4.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("信息的可信度和传递者的关系权重直接挂钩。", {
    x: 0.7, y: 2.55, w: 4.05, h: 0.45,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top",
    lineSpacing: 15
  });
  slide.addText("你说好话，对方半信半疑；信任的人说同样的话，可信度大幅提升。", {
    x: 0.7, y: 3.0, w: 4.05, h: 0.5,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "top",
    lineSpacing: 14
  });

  // 桥梁人物的条件
  slide.addShape("rect", {
    x: 5.1, y: 2.05, w: 4.4, h: 1.45,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.05, w: 4.4, h: 0.4,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("桥梁人物的四个条件", {
    x: 5.1, y: 2.05, w: 4.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  const conditions = [
    "他是 A1 或 A2 级支持者",
    "他和你的目标人物有良好的私下关系",
    "对你的项目有足够了解，能传递准确信息",
    "愿意在非正式场合帮你自然地提到"
  ];
  conditions.forEach(function (c, i) {
    const y = 2.55 + i * 0.23;
    slide.addShape("rect", {
      x: 5.3, y: y + 0.07, w: 0.08, h: 0.08,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(c, {
      x: 5.45, y: y, w: 4.0, h: 0.22,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // 联盟路径分析
  slide.addShape("rect", {
    x: 0.5, y: 3.65, w: 9, h: 1.55,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("联盟路径分析", {
    x: 0.5, y: 3.7, w: 9, h: 0.35,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  // 三个填写字段
  const items = [
    "我可以借力的桥梁人物是：",
    "他和哪个目标人物有良好关系：",
    "我需要告诉他传递的核心信息是："
  ];
  items.forEach(function (it, i) {
    const y = 4.1 + i * 0.32;
    slide.addText(it, {
      x: 0.65, y: y, w: 4, h: 0.3,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.light, align: "left", valign: "middle"
    });
    slide.addShape("rect", {
      x: 4.7, y: y + 0.05, w: 4.7, h: 0.22,
      fill: { color: theme.white },
      line: { color: theme.white, width: 0.5 }
    });
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
