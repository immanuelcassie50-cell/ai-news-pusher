// slide-129.js - 方成与财务的三次沟通
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带 + 部分标识
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

  // 大标题
  slide.addText("方成与财务的三次沟通", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("三次对话，三次礼貌回绝 —— 他说的不是财务经理在乎的", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 三次沟通卡片
  const rounds = [
    { round: "第一次", topic: "讲战略意义", detail: "讲统报系统如何提升集团数据管理效率；讲总部对项目的重视；讲系统化对华南区的战略意义", reply: "有道理，我们支持" },
    { round: "第二次", topic: "跟进进度", detail: "跟进配合进度，对方回复『财务这边还有一些流程要走，给我们一点时间』", reply: "再等一等" },
    { round: "第三次", topic: "讲技术方案", detail: "带来IT部门的技术方案，重新讲系统架构，说明数据准确性有技术保障", reply: "技术没问题就配合推进" }
  ];

  rounds.forEach(function (r, i) {
    const x = 0.5 + i * 3.1;
    // 卡片背景
    slide.addShape("rect", {
      x: x, y: 2.0, w: 2.95, h: 2.7,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 顶部色条
    slide.addShape("rect", {
      x: x, y: 2.0, w: 2.95, h: 0.4,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(r.round, {
      x: x, y: 2.0, w: 2.95, h: 0.4,
      fontSize: 13, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 主题
    slide.addText(r.topic, {
      x: x + 0.15, y: 2.5, w: 2.65, h: 0.4,
      fontSize: 14, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: "left", valign: "middle"
    });
    // 内容
    slide.addText(r.detail, {
      x: x + 0.15, y: 2.95, w: 2.65, h: 1.2,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top",
      lineSpacing: 16
    });
    // 回复
    slide.addShape("rect", {
      x: x + 0.15, y: 4.2, w: 2.65, h: 0.4,
      fill: { color: theme.highlight },
      line: { color: theme.highlight, width: 0 }
    });
    slide.addText("「" + r.reply + "」", {
      x: x + 0.15, y: 4.2, w: 2.65, h: 0.4,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.primary, italic: true, bold: true, align: "center", valign: "middle"
    });
  });

  // 底部结论
  slide.addShape("rect", {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fill: { color: theme.dark },
    line: { color: theme.dark, width: 0 }
  });
  slide.addText("但一直没有实质性配合 —— 三次沟通里，方成没问过一句：财务经理在担心什么？", {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
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
