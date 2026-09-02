// slide-120.js - 关键发现：孙伟被低估
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("PART 04 · 关键发现", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.accent,
    bold: true, align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("关键发现：孙伟被严重低估", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("从「A2 接受」到「C2 抗拒」 —— 定位如何改变整个局面", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 左侧：定位过程
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 4.5, h: 3.0,
    fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
  });
  slide.addText("定位过程", {
    x: 0.7, y: 1.95, w: 4.2, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.accent,
    bold: true, align: "left", valign: "middle"
  });

  // 转化箭头
  slide.addShape("rect", {
    x: 0.7, y: 2.35, w: 1.5, h: 0.6,
    fill: { color: theme.mid }, line: { color: theme.mid, width: 0 }
  });
  slide.addText("A2 接受", {
    x: 0.7, y: 2.35, w: 1.5, h: 0.6,
    fontSize: 13, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });
  slide.addText("→", {
    x: 2.25, y: 2.35, w: 0.6, h: 0.6,
    fontSize: 28, fontFace: FONT_EN, color: theme.accent,
    bold: true, align: "center", valign: "middle"
  });
  slide.addShape("rect", {
    x: 2.85, y: 2.35, w: 1.5, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("C2 抗拒", {
    x: 2.85, y: 2.35, w: 1.5, h: 0.6,
    fontSize: 13, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });

  // 行为证据
  slide.addText("叶云发现的行为证据：", {
    x: 0.7, y: 3.05, w: 4.2, h: 0.3,
    fontSize: 11, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  const evidences = [
    "启动会没有举手也没反对",
    "非正式场合对其他店长说「别急着改」",
    "门店数据接口「IT 排期」拖延",
    "基层店长私下问「孙店长怎么看」"
  ];
  evidences.forEach(function (e, i) {
    const y = 3.4 + i * 0.32;
    slide.addText("·", {
      x: 0.7, y: y, w: 0.2, h: 0.3,
      fontSize: 14, fontFace: FONT_EN, color: theme.accent,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(e, {
      x: 0.9, y: y, w: 4.0, h: 0.3,
      fontSize: 10, fontFace: FONT_CN, color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // 右侧：连锁影响
  slide.addShape("rect", {
    x: 5.2, y: 1.85, w: 4.3, h: 3.0,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("连锁影响", {
    x: 5.4, y: 1.95, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("孙伟的消极信号", {
    x: 5.4, y: 2.35, w: 4.0, h: 0.4,
    fontSize: 18, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("正在影响整个门店群体", {
    x: 5.4, y: 2.75, w: 4.0, h: 0.4,
    fontSize: 18, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 5.4, y: 3.25, w: 0.5, h: 0.04,
    fill: { color: theme.white }, line: { color: theme.white, width: 0 }
  });

  const impacts = [
    "他是非正式领袖",
    "其他店长引用他的观点",
    "他的抗拒 = 群体的抗拒",
    "找到他 = 找到破局起点"
  ];
  impacts.forEach(function (im, i) {
    const y = 3.4 + i * 0.32;
    slide.addText("✦", {
      x: 5.4, y: y, w: 0.25, h: 0.3,
      fontSize: 12, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(im, {
      x: 5.65, y: y, w: 3.7, h: 0.3,
      fontSize: 11, fontFace: FONT_CN, color: theme.white,
      align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("找到这个关键节点 —— 是叶云后来破局的起点之一", {
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
