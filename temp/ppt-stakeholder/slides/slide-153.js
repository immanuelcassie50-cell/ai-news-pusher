// slide-153.js - 原则二：替中立者添价值
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
  slide.addText("PART 06  /  破局策略", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 原则编号
  slide.addText("PRINCIPLE  02", {
    x: 0.5, y: 0.65, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "left", valign: "middle",
    charSpacing: 6
  });
  // 标题
  slide.addText("替中立者添价值", {
    x: 0.5, y: 0.95, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("针对 B 级人群 —— 他们只是暂时没有足够理由站在你这边", {
    x: 0.5, y: 1.65, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 三个层级
  const tiers = [
    {
      level: "B2 犹豫",
      key: "性价比最高的转化目标",
      action: "只差一个「让他觉得这件事和自己有关」的切入点",
      detail: "他已经在观望，一次击中真实诉求的沟通往往就够。"
    },
    {
      level: "B1 无感",
      key: "需要先激活",
      action: "让他看见「这件事和他有什么关系」",
      detail: "他不知道这件事和他有关 —— 你的任务是让他看见这个关系。"
    },
    {
      level: "B3 冷漠",
      key: "需要先了解真实原因",
      action: "找到他保持距离的根源",
      detail: "有时候 B3 背后有过去的经历和隐性的顾虑，找到根源比任何说服都有效。"
    }
  ];

  tiers.forEach(function (t, i) {
    const y = 2.25 + i * 0.95;
    // 等级色块
    slide.addShape("rect", {
      x: 0.5, y: y, w: 1.7, h: 0.85,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(t.level, {
      x: 0.5, y: y, w: 1.7, h: 0.85,
      fontSize: 18, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 内容
    slide.addShape("rect", {
      x: 2.3, y: y, w: 7.2, h: 0.85,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(t.key, {
      x: 2.5, y: y + 0.05, w: 6.8, h: 0.3,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.accent, bold: true, italic: true, align: "left", valign: "middle"
    });
    slide.addText(t.action + " —— " + t.detail, {
      x: 2.5, y: y + 0.35, w: 6.8, h: 0.5,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top",
      lineSpacing: 14
    });
  });

  // 底部金句
  slide.addText("B 级不是你的敌人，他们只是暂时没有足够的理由站在你这边 —— 你的任务是帮他们找到这个理由。", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: "center", valign: "middle"
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
