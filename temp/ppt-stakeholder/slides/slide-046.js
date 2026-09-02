// slide-046.js - 隐形审批链
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
  slide.addText("PART 02  ·  全景扫描  ·  维度二深挖", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("隐形审批链：表面下的真实决策路径", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 26, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("你以为只要找对人就行——其实路径里有看不见的环节", {
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

  // 流程图
  const flowY = 2.0;
  const boxH = 0.6;
  const steps = [
    { x: 0.5, w: 1.6, t: "你", c: theme.primary },
    { x: 2.3, w: 1.6, t: "直接上级", c: theme.primary },
    { x: 4.1, w: 1.6, t: "上级背后", c: theme.accent },
    { x: 5.9, w: 1.6, t: "实际否决人", c: theme.accent },
    { x: 7.7, w: 1.8, t: "资源到位", c: theme.dark }
  ];
  steps.forEach(function (s, i) {
    slide.addShape("rect", {
      x: s.x, y: flowY, w: s.w, h: boxH,
      fill: { color: s.c },
      line: { color: s.c, width: 0 }
    });
    slide.addText(s.t, {
      x: s.x, y: flowY, w: s.w, h: boxH,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    if (i < steps.length - 1) {
      slide.addText("→", {
        x: s.x + s.w, y: flowY, w: 0.2, h: boxH,
        fontSize: 18, fontFace: FONT_EN,
        color: theme.dark, bold: true, align: "center", valign: "middle"
      });
    }
  });

  // 说明标签
  slide.addText("（表面）", {
    x: 2.3, y: flowY + boxH + 0.05, w: 1.6, h: 0.25,
    fontSize: 9, fontFace: FONT_CN,
    color: theme.primary, align: "center", valign: "top"
  });
  slide.addText("（隐形）", {
    x: 4.1, y: flowY + boxH + 0.05, w: 1.6 + 1.8 + 0.2, h: 0.25,
    fontSize: 9, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "center", valign: "top"
  });

  // 关键发现
  slide.addShape("rect", {
    x: 0.5, y: 3.2, w: 9, h: 1.8,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.2, w: 0.1, h: 1.8,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("三种典型的隐形环节", {
    x: 0.75, y: 3.3, w: 8.5, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  const hidden = [
    { t: "上级背后的人", d: "签字需要另一个人先点头" },
    { t: "明面与实际分离", d: "资源表面属于 A，实际上 B 有否决权" },
    { t: "会签链中的审议", d: "签了还要过会，会上有人反对同样通不过" }
  ];
  hidden.forEach(function (h, i) {
    const y = 3.7 + i * 0.42;
    slide.addShape("ellipse", {
      x: 0.85, y: y + 0.05, w: 0.3, h: 0.3,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(String(i + 1), {
      x: 0.85, y: y + 0.05, w: 0.3, h: 0.3,
      fontSize: 11, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    slide.addText(h.t, {
      x: 1.25, y: y, w: 2.5, h: 0.4,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
    slide.addText(h.d, {
      x: 3.8, y: y, w: 5.5, h: 0.4,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("解决方法：画一遍真实的决策流——把「以为的路径」和「实际的路径」对照", {
    x: 0.5, y: 5.05, w: 9, h: 0.25,
    fontSize: 11, fontFace: FONT_CN,
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
