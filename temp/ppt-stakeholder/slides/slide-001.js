// slide-001.js - 封面页
// 极致美学 · 红灰浅底
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧大色块（深红）
  slide.addShape("rect", {
    x: 0, y: 0, w: 4.2, h: 5.625,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  // 左侧装饰线
  slide.addShape("line", {
    x: 0, y: 4.5, w: 4.2, h: 0,
    line: { color: theme.accent, width: 2 }
  });

  // 左侧：英文 Kicker
  slide.addText("STAKEHOLDER MAPPING", {
    x: 0.5, y: 0.5, w: 3.5, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.light, bold: true, align: "left", valign: "middle",
    charSpacing: 8
  });
  // 左侧：编号
  slide.addText("01", {
    x: 0.5, y: 0.9, w: 2, h: 1.6,
    fontSize: 140, fontFace: FONT_EN,
    color: theme.white, bold: true, align: "left", valign: "top"
  });
  // 左侧：分隔线
  slide.addShape("rect", {
    x: 0.5, y: 2.6, w: 0.5, h: 0.05,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  // 左侧：英文副标
  slide.addText("Action Learning 2026", {
    x: 0.5, y: 2.75, w: 3.5, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.light, align: "left", valign: "middle",
    charSpacing: 3
  });
  // 左侧：底部标识
  slide.addText("看清人  ·  找破局", {
    x: 0.5, y: 4.7, w: 3.5, h: 0.4,
    fontSize: 18, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 右侧：主标题
  slide.addText("看清人的格局", {
    x: 4.6, y: 1.3, w: 5.2, h: 0.8,
    fontSize: 44, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("找到项目破局点", {
    x: 4.6, y: 2.1, w: 5.2, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: "left", valign: "middle"
  });

  // 右侧：分隔细线
  slide.addShape("rect", {
    x: 4.6, y: 2.95, w: 0.8, h: 0.05,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 右侧：副标
  slide.addText("利益相关方深度分析实战", {
    x: 4.6, y: 3.1, w: 5.2, h: 0.4,
    fontSize: 18, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 3
  });

  // 右侧：要点
  slide.addText("一套可直接落地的项目推进方法论", {
    x: 4.6, y: 3.55, w: 5.2, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
  });
  slide.addText("六维扫描  ·  五维画像  ·  三阶九梯  ·  破局策略", {
    x: 4.6, y: 3.85, w: 5.2, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });

  // 右侧：底部信息
  slide.addShape("line", {
    x: 4.6, y: 4.8, w: 5, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("行动学习 2026", {
    x: 4.6, y: 4.9, w: 3, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 2
  });
  slide.addText("授课PPT · 2026", {
    x: 7.6, y: 4.9, w: 2, h: 0.3,
    fontSize: 10, fontFace: FONT_EN,
    color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
