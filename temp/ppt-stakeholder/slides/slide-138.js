// slide-138.js - 示范一：孙伟需求分析
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
  slide.addText("示范一：孙伟 · 需求分析", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  // 人物标签
  slide.addText("老店长孙伟", {
    x: 0.5, y: 1.4, w: 3, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("当前定位 C2 抗拒  ·  目标 B2 犹豫", {
    x: 3.5, y: 1.4, w: 6, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 我需要他给什么
  slide.addShape("rect", {
    x: 0.5, y: 2.05, w: 4.4, h: 3.1,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.05, w: 4.4, h: 0.4,
    fill: { color: theme.mid },
    line: { color: theme.mid, width: 0 }
  });
  slide.addText("我需要他给什么", {
    x: 0.5, y: 2.05, w: 4.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  // 资源
  slide.addShape("ellipse", {
    x: 0.7, y: 2.6, w: 0.35, h: 0.35,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("资", {
    x: 0.7, y: 2.6, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("资源层面", {
    x: 1.15, y: 2.6, w: 3.6, h: 0.35,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("他掌控着 15 家门店的店长群体情绪，他的表态是这个群体的方向标。", {
    x: 0.7, y: 2.95, w: 4.05, h: 0.6,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 15
  });
  // 行为
  slide.addShape("ellipse", {
    x: 0.7, y: 3.65, w: 0.35, h: 0.35,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("行", {
    x: 0.7, y: 3.65, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("行为层面", {
    x: 1.15, y: 3.65, w: 3.6, h: 0.35,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("停止在非正式场合散布消极信号；在关键门店沟通会上保持中立或轻度正向表态。", {
    x: 0.7, y: 4.0, w: 4.05, h: 0.6,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 15
  });
  // 层级
  slide.addShape("ellipse", {
    x: 0.7, y: 4.55, w: 0.35, h: 0.35,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("层", {
    x: 0.7, y: 4.55, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("目标层级", {
    x: 1.15, y: 4.55, w: 3.6, h: 0.35,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("C2 → B2（不必 A1，停止消极即够）", {
    x: 0.7, y: 4.85, w: 4.05, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.dark, italic: true, align: "left", valign: "top"
  });

  // 右侧：洞察
  slide.addShape("rect", {
    x: 5.1, y: 2.05, w: 4.4, h: 3.1,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("关键洞察", {
    x: 5.1, y: 2.05, w: 4.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.45, w: 4.4, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("孙伟的「杠杆系数」很高 ——", {
    x: 5.25, y: 2.6, w: 4.1, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });
  slide.addText("撬动他一个人，等于撬动了 15 家门店的店长群体。", {
    x: 5.25, y: 2.95, w: 4.1, h: 0.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "top",
    lineSpacing: 16
  });
  slide.addText("目标层级判断：", {
    x: 5.25, y: 3.5, w: 4.1, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });
  slide.addText("他不需要变成 A1 投入者，只要从 C2 降到 B2 —— 他不再主动传递负面信号，其他店长的顾虑就会大幅下降。", {
    x: 5.25, y: 3.8, w: 4.1, h: 0.9,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "top",
    lineSpacing: 16
  });
  slide.addText("精确的目标层级 = 有效的精力分配。", {
    x: 5.25, y: 4.8, w: 4.1, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "left", valign: "middle"
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
