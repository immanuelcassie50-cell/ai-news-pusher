// slide-159.js - 策略输出模板
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

  // 标题
  slide.addText("破局策略输出模板", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("每个破局点一份，2~4 份填到完整", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 模板字段
  const fields = [
    { label: "目标人物", desc: "破局的具体对象" },
    { label: "当前定位 → 目标定位", desc: "支持的跃迁方向" },
    { label: "破局点理由（四步判断）", desc: "连锁效应 / 成本收益 / 时间窗口 / 联盟路径" },
    { label: "他最在乎的（来自深度画像）", desc: "回到第三部分画像" },
    { label: "我能给他的核心价值（来自需求映射）", desc: "回到第五部分" },
    { label: "具体沟通策略与切入方式", desc: "如何开口" },
    { label: "关键行动步骤（第一步要具体）", desc: "什么时候、做什么" },
    { label: "时间节点", desc: "需要在什么时间前完成突破" },
    { label: "成功标志", desc: "如何判断这个破局点突破了" }
  ];

  fields.forEach(function (f, i) {
    const y = 2.05 + i * 0.32;
    // 字段标签
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.35, h: 0.28,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y, w: 0.35, h: 0.28,
      fontSize: 10, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 字段名
    slide.addText(f.label, {
      x: 0.95, y: y, w: 3.2, h: 0.28,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
    // 说明
    slide.addText(f.desc, {
      x: 4.2, y: y, w: 5.3, h: 0.28,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, italic: true, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.95, w: 9, h: 0.35,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("关键行动步骤必须具体到「第一步是什么」 —— 不是「加强沟通」，而是「下周二午饭」。", {
    x: 0.5, y: 4.95, w: 9, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "center", valign: "middle"
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
