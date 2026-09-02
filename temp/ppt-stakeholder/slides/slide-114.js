// slide-114.js - C阶处理策略
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("PART 04 · C 阶处理策略", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("C 阶处理策略", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("三个层级对应三种完全不同的处理路径", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 三栏对比
  const strategies = [
    {
      code: "C1", name: "怀疑", strategy: "用数据和依据回应",
      key: "逻辑回应 / 价值证明",
      detail: "准备数据、历史误差率、试点案例；主动约他单独沟通；把他作为质量审查的同盟军",
      color: theme.mid
    },
    {
      code: "C2", name: "抗拒", strategy: "处理利益层问题",
      key: "价值交换 / 利益重构",
      detail: "找出他的具体利益顾虑；设计价值交换方案；可能需要你「给他」一些他想要的东西",
      color: theme.accent
    },
    {
      code: "C3", name: "破坏", strategy: "升级处理 / 借力",
      key: "组织政治 / 上级支持",
      detail: "普通沟通无效；需要上级支持或绕过其影响范围；可能需要重新评估项目策略本身",
      color: theme.primary
    }
  ];

  strategies.forEach(function (s, i) {
    const x = 0.5 + i * 3.05;
    // 顶部
    slide.addShape("rect", {
      x: x, y: 1.85, w: 2.9, h: 0.7,
      fill: { color: s.color }, line: { color: s.color, width: 0 }
    });
    slide.addText(s.code, {
      x: x + 0.15, y: 1.85, w: 0.8, h: 0.7,
      fontSize: 22, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(s.name, {
      x: x + 1.0, y: 1.85, w: 1.8, h: 0.7,
      fontSize: 18, fontFace: FONT_CN, color: theme.white,
      bold: true, align: "right", valign: "middle"
    });
    // 策略
    slide.addShape("rect", {
      x: x, y: 2.55, w: 2.9, h: 2.3,
      fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
    });
    slide.addText("核心策略", {
      x: x + 0.15, y: 2.65, w: 2.6, h: 0.25,
      fontSize: 9, fontFace: FONT_CN, color: s.color,
      bold: true, align: "left", valign: "middle", charSpacing: 2
    });
    slide.addText(s.strategy, {
      x: x + 0.15, y: 2.9, w: 2.6, h: 0.4,
      fontSize: 14, fontFace: FONT_CN, color: theme.dark,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(s.key, {
      x: x + 0.15, y: 3.3, w: 2.6, h: 0.3,
      fontSize: 11, fontFace: FONT_CN, color: s.color,
      italic: true, align: "left", valign: "middle"
    });
    slide.addShape("line", {
      x: x + 0.15, y: 3.7, w: 2.6, h: 0,
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText("具体动作", {
      x: x + 0.15, y: 3.75, w: 2.6, h: 0.25,
      fontSize: 9, fontFace: FONT_CN, color: theme.mid,
      bold: true, align: "left", valign: "middle", charSpacing: 2
    });
    slide.addText(s.detail, {
      x: x + 0.15, y: 4.0, w: 2.6, h: 0.85,
      fontSize: 10, fontFace: FONT_CN, color: theme.secondary,
      align: "left", valign: "top", lineSpacing: 14
    });
  });

  // 底部金句
  slide.addText("错位处理 = 资源浪费 + 时机错失", {
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
