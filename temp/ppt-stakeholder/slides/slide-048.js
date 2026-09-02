// slide-048.js - 非正式领袖：孙伟
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
  slide.addText("PART 02  ·  全景扫描  ·  维度三示范", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("非正式领袖：孙伟", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("⚡ 架构图上是普通店长，实际影响力远超职级", {
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

  // 左侧：人物卡
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 3.5, h: 3.25,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  // 头像
  slide.addShape("ellipse", {
    x: 1.3, y: 2.0, w: 1.9, h: 1.9,
    fill: { color: theme.light },
    line: { color: theme.white, width: 3 }
  });
  slide.addText("孙", {
    x: 1.3, y: 2.0, w: 1.9, h: 1.9,
    fontSize: 60, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("孙 伟", {
    x: 0.5, y: 4.0, w: 3.5, h: 0.4,
    fontSize: 22, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("老店长代表", {
    x: 0.5, y: 4.4, w: 3.5, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.light, align: "center", valign: "middle"
  });
  slide.addText("华北区门店  ·  资深店长", {
    x: 0.5, y: 4.65, w: 3.5, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.light, italic: true, align: "center", valign: "middle"
  });

  // 右侧：影响力 + 发现过程
  slide.addText("他的影响力", {
    x: 4.3, y: 1.7, w: 5.2, h: 0.3,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 4.3, y: 2.0, w: 0.4, h: 0.03,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("在华北区门店群体中威望极高，基层店长做决定前都会问「孙店长怎么看」。", {
    x: 4.3, y: 2.1, w: 5.2, h: 0.7,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top",
    lineSpacing: 18
  });

  // 引述
  slide.addShape("rect", {
    x: 4.3, y: 2.95, w: 5.2, h: 0.8,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("叶云是这么发现他的：", {
    x: 4.5, y: 2.95, w: 5, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "top"
  });
  slide.addText("不是靠组织架构图，是靠实地与基层店长交谈。", {
    x: 4.5, y: 3.2, w: 5, h: 0.55,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "top",
    lineSpacing: 18
  });

  // 关键洞察
  slide.addShape("rect", {
    x: 4.3, y: 3.95, w: 5.2, h: 1.0,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 4.3, y: 3.95, w: 0.08, h: 1.0,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("⚡ 关键洞察", {
    x: 4.5, y: 4.0, w: 5, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("孙伟同时是维度三（影响相关方）和维度五（受损相关方）。", {
    x: 4.5, y: 4.3, w: 5, h: 0.32,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "middle"
  });
  slide.addText("他的真正不配合，不是「抵制技术」，是历史数据审计顾虑（详见维度五）。", {
    x: 4.5, y: 4.6, w: 5, h: 0.32,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "middle"
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
