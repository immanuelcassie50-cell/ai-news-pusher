// slide-035.js - 两类人：应该与实际
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
  slide.addText("PART 02  ·  全景扫描", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("两类人：应该 vs 实际", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("认知差往往来自这两类人的不一致", {
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

  // 左侧：应该
  slide.addShape("rect", {
    x: 0.6, y: 1.8, w: 4.3, h: 3.0,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.6, y: 1.8, w: 4.3, h: 0.55,
    fill: { color: theme.mid },
    line: { color: theme.mid, width: 0 }
  });
  slide.addText("应该有关系的人", {
    x: 0.6, y: 1.8, w: 4.3, h: 0.55,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("组织架构上看", {
    x: 0.85, y: 2.5, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: "left", valign: "middle"
  });
  slide.addText("逻辑上与你项目", {
    x: 0.85, y: 2.85, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: "left", valign: "middle"
  });
  slide.addText("有直接关联的人", {
    x: 0.85, y: 3.2, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: "left", valign: "middle"
  });
  slide.addText("依靠「常识」和「经验」筛选", {
    x: 0.85, y: 3.7, w: 4, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: "left", valign: "middle"
  });
  slide.addText("直觉反应：「他们应该都算进去了」", {
    x: 0.85, y: 4.2, w: 4, h: 0.4,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
  });

  // 右侧：实际
  slide.addShape("rect", {
    x: 5.1, y: 1.8, w: 4.3, h: 3.0,
    fill: { color: theme.white },
    line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.8, w: 4.3, h: 0.55,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("实际上有关系的人", {
    x: 5.1, y: 1.8, w: 4.3, h: 0.55,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("实际工作流中", {
    x: 5.35, y: 2.5, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: "left", valign: "middle"
  });
  slide.addText("真正常被你项目", {
    x: 5.35, y: 2.85, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: "left", valign: "middle"
  });
  slide.addText("影响或影响项目的人", {
    x: 5.35, y: 3.2, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: "left", valign: "middle"
  });
  slide.addText("需要「主动扫描」才能识别", {
    x: 5.35, y: 3.7, w: 4, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("核心挑战：往往不在你的熟人网络里", {
    x: 5.35, y: 4.2, w: 4, h: 0.4,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
  });

  // 底部高亮金句
  slide.addShape("rect", {
    x: 0.6, y: 4.95, w: 8.8, h: 0.35,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("关键命题：让「应该」逼近「实际」——这就是全景扫描的价值", {
    x: 0.6, y: 4.95, w: 8.8, h: 0.35,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
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
