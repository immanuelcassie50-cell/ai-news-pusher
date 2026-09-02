// slide-101.js - A阶：支持的三个层次
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 04 · 三阶九梯定位", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("A 阶：支持的三个层次", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("表面看都是「支持」，但支持的深度和主动性有很大差异", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 三个层次对比卡
  const levels = [
    {
      code: "A1", name: "投入", level: "真正意义上的盟友",
      desc: "不用你说，他就动了",
      detail: "主动联系你同步进展；你没在场的会议里帮你说话；主动把可用资源引荐给你；遇到阻碍时不等你，自己先想办法",
      color: theme.primary
    },
    {
      code: "A2", name: "接受", level: "认可价值，愿意配合",
      desc: "你推他就动，你不推他就停",
      detail: "你安排的事他会做；你问他意见他会给出正向反馈；但你不主动推进，他不会主动跟进；不会阻碍，也不会创造推进力",
      color: theme.accent
    },
    {
      code: "A3", name: "顺从", level: "外部压力下配合",
      desc: "表面同意，内心保留",
      detail: "公开场合表态「没问题」；但执行上总有各种延误；遇到额外投入要求时以「很忙」「排期」等方式规避",
      color: theme.mid
    }
  ];

  levels.forEach(function (lv, i) {
    const x = 0.5 + i * 3.05;
    // 顶部色条
    slide.addShape("rect", {
      x: x, y: 1.85, w: 2.9, h: 0.6,
      fill: { color: lv.color }, line: { color: lv.color, width: 0 }
    });
    slide.addText(lv.code, {
      x: x + 0.15, y: 1.85, w: 0.8, h: 0.6,
      fontSize: 22, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(lv.name, {
      x: x + 1.0, y: 1.85, w: 1.8, h: 0.6,
      fontSize: 18, fontFace: FONT_CN, color: theme.white,
      bold: true, align: "right", valign: "middle"
    });
    // 主体
    slide.addShape("rect", {
      x: x, y: 2.45, w: 2.9, h: 2.4,
      fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
    });
    slide.addText(lv.level, {
      x: x + 0.15, y: 2.55, w: 2.6, h: 0.3,
      fontSize: 11, fontFace: FONT_CN, color: lv.color,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(lv.desc, {
      x: x + 0.15, y: 2.85, w: 2.6, h: 0.4,
      fontSize: 13, fontFace: FONT_CN, color: theme.dark,
      bold: true, align: "left", valign: "middle"
    });
    // 分隔线
    slide.addShape("line", {
      x: x + 0.15, y: 3.3, w: 2.6, h: 0,
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText("行为特征", {
      x: x + 0.15, y: 3.35, w: 2.6, h: 0.25,
      fontSize: 9, fontFace: FONT_CN, color: theme.mid,
      bold: true, align: "left", valign: "middle", charSpacing: 2
    });
    slide.addText(lv.detail, {
      x: x + 0.15, y: 3.6, w: 2.6, h: 1.2,
      fontSize: 10, fontFace: FONT_CN, color: theme.secondary,
      align: "left", valign: "top", lineSpacing: 14
    });
  });

  // 底部提示
  slide.addText("最需要注意的误判：A3 最容易被错当成 A2 甚至 A1", {
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
