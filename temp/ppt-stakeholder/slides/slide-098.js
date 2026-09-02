// slide-098.js - 开场：说支持不等于支持
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
  // 部分标识
  slide.addText("PART 04 · 三阶九梯定位", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle", charSpacing: 4
  });

  // 大标题
  slide.addText("「他说支持」 ≠ 「他支持」", {
    x: 0.5, y: 0.6, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  // 副标
  slide.addText("表态与行为之间的巨大鸿沟", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle", charSpacing: 2
  });
  // 装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.6, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 引述块
  slide.addShape("rect", {
    x: 0.6, y: 1.9, w: 8.8, h: 1.3,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape("rect", {
    x: 0.6, y: 1.9, w: 0.08, h: 1.3,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('"', {
    x: 0.8, y: 1.95, w: 0.6, h: 0.7,
    fontSize: 56, fontFace: "Georgia",
    color: theme.light, bold: true, align: "left", valign: "top"
  });
  slide.addText("「没问题」和「我会主动推进这件事」之间，有一段很大的距离。", {
    x: 1.3, y: 2.05, w: 8.0, h: 0.5,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "middle", lineSpacing: 22
  });
  slide.addText("—— 叶云在第二个月的复盘", {
    x: 1.3, y: 2.65, w: 8.0, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: "left", valign: "middle"
  });

  // 核心结论卡片
  slide.addShape("rect", {
    x: 0.6, y: 3.5, w: 8.8, h: 1.6,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("三阶九梯要解决的问题", {
    x: 0.8, y: 3.6, w: 8.4, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("把定性的「感觉他支持 / 反对」", {
    x: 0.8, y: 3.95, w: 8.4, h: 0.4,
    fontSize: 16, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: "left", valign: "middle"
  });
  slide.addText("转化成有行为依据的、精确的位置判断", {
    x: 0.8, y: 4.35, w: 8.4, h: 0.4,
    fontSize: 16, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: "left", valign: "middle"
  });
  slide.addText("从而为每个人选择最有针对性的策略", {
    x: 0.8, y: 4.75, w: 8.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
  });

  // 底部品牌
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战 · 授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle"
  });
  slide.addText(String(pageNum).padStart(2, '0') + " / " + String(totalPages).padStart(3, '0'), {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN, color: theme.mid,
    align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
