// slide-128.js - 开场：说的不是他在乎的
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
  // 左侧部分标识
  slide.addText("PART 05  /  需求映射", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 大标题
  slide.addText("说的不是他在乎的", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  // 副标
  slide.addText("大多数沟通无效，不是因为说得不好，而是说的不是他在乎的", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  // 标题下装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 引述块
  slide.addShape("rect", {
    x: 0.6, y: 2.1, w: 8.8, h: 1.3,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape("rect", {
    x: 0.6, y: 2.1, w: 0.08, h: 1.3,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('"', {
    x: 0.8, y: 2.05, w: 0.6, h: 0.7,
    fontSize: 56, fontFace: "Georgia",
    color: theme.light, bold: true, align: "left", valign: "top"
  });
  slide.addText("方成三次沟通，说的都是他自己认为重要的事。他从来没有认真问过：这个项目推进，财务部经理需要担心什么？他的顾虑是什么？我怎么帮他解决这些顾虑？", {
    x: 1.3, y: 2.2, w: 8.0, h: 1.1,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "middle",
    lineSpacing: 22
  });

  // 关键提示
  slide.addShape("rect", {
    x: 0.6, y: 3.7, w: 8.8, h: 1.4,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.6, y: 3.7, w: 0.08, h: 1.4,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("需求映射要解决的问题", {
    x: 0.85, y: 3.8, w: 8.5, h: 0.35,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("在发动任何沟通之前，先搞清楚两件事——", {
    x: 0.85, y: 4.15, w: 8.5, h: 0.35,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
  });
  slide.addText("① 我需要他给我什么", {
    x: 0.85, y: 4.45, w: 4, h: 0.3,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("② 我能为他提供什么价值", {
    x: 4.5, y: 4.45, w: 4, h: 0.3,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("—— 这才是有效沟通的起点。", {
    x: 0.85, y: 4.75, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: "left", valign: "middle"
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
