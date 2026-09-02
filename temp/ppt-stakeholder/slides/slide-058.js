// slide-058.js - 矩阵四象限解读
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
  slide.addText("PART 02  ·  全景扫描  ·  矩阵解读", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("四象限解读：不同的管理策略", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("每个象限有完全不同的对待方式", {
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

  // 2x2 网格
  const quads = [
    {
      x: 0.5, y: 1.7,
      label: "高权力·高利益",
      star: "★",
      color: theme.accent,
      priority: "重点管理",
      desc: "可以给你最大支持，也造成最大阻碍",
      action: "深度分析 / 持续沟通 / 价值对齐"
    },
    {
      x: 5.1, y: 1.7,
      label: "高权力·低利益",
      star: "★",
      color: theme.primary,
      priority: "定期知会",
      desc: "目前关系不大，但立场能影响资源流向",
      action: "让他们了解进展 / 避免因「不了解」误判"
    },
    {
      x: 0.5, y: 3.55,
      label: "低权力·低利益",
      star: "○",
      color: theme.mid,
      priority: "基本告知",
      desc: "精力有限，放在最后",
      action: "群发通知 / 暂缓投入 / 保持礼貌"
    },
    {
      x: 5.1, y: 3.55,
      label: "低权力·高利益",
      star: "●",
      color: theme.primary,
      priority: "保持沟通",
      desc: "个人影响力有限，但深度相关",
      action: "防止低估 / 可能含「种子用户」"
    }
  ];
  const cardW = 4.4;
  const cardH = 1.7;
  quads.forEach(function (q) {
    slide.addShape("rect", {
      x: q.x, y: q.y, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 左侧色条
    slide.addShape("rect", {
      x: q.x, y: q.y, w: 0.1, h: cardH,
      fill: { color: q.color },
      line: { color: q.color, width: 0 }
    });
    // 标识
    slide.addText(q.star, {
      x: q.x + 0.2, y: q.y + 0.1, w: 0.5, h: 0.5,
      fontSize: 28, fontFace: FONT_EN,
      color: q.color, bold: true, align: "left", valign: "middle"
    });
    // 标签
    slide.addText(q.label, {
      x: q.x + 0.75, y: q.y + 0.15, w: cardW - 1.0, h: 0.35,
      fontSize: 15, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
    // 优先级
    slide.addShape("rect", {
      x: q.x + 0.75, y: q.y + 0.55, w: 1.3, h: 0.3,
      fill: { color: q.color },
      line: { color: q.color, width: 0 }
    });
    slide.addText(q.priority, {
      x: q.x + 0.75, y: q.y + 0.55, w: 1.3, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 描述
    slide.addText(q.desc, {
      x: q.x + 0.2, y: q.y + 0.95, w: cardW - 0.4, h: 0.35,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top"
    });
    // 行动
    slide.addText("行动：" + q.action, {
      x: q.x + 0.2, y: q.y + 1.35, w: cardW - 0.4, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: "left", valign: "top"
    });
  });

  // 底部金句
  slide.addText("右上角的人，都应该进入第三部分的深度画像分析", {
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
