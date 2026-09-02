// slide-137.js - 四类价值
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
  slide.addText("PART 05  /  需求映射", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 标题
  slide.addText("我能给的四类价值", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("把「我能给」从抽象变得具体 —— 四种价值的全景参考", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 四类价值 2x2 表格
  const values = [
    {
      tag: "信息价值",
      en: "INFORMATION",
      desc: "他需要知道、但目前不知道的信息",
      detail: "项目进展、行业情况、决策者真实态度、集团层面资源支持",
      key: "关键不在「我有多少信息」，而在「他需要什么信息」"
    },
    {
      tag: "利益价值",
      en: "BENEFIT",
      desc: "帮他实现 KPI / 减轻工作压力 / 规避风险",
      detail: "最直接、最有效的价值形式 —— 把「麻烦你」变成「帮助你」",
      key: "能帮他在意的事，你就不是来要东西的，是来解决问题的"
    },
    {
      tag: "情感价值",
      en: "EMOTION",
      desc: "被认可、被重视、有参与感、增加影响力",
      detail: "给他在项目中有意义的角色，让他感觉自己是被尊重的参与者",
      key: "不是拍马屁，是真正把他当成有价值的参与者来对待"
    },
    {
      tag: "关系价值",
      en: "RELATION",
      desc: "引荐关键人 / 让他在上级面前有可见度",
      detail: "为你背书或推荐；在你的影响范围内帮他建立连接",
      key: "组织政治比较复杂的环境里，关系价值往往被低估"
    }
  ];

  values.forEach(function (v, i) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.55;
    const y = 2.1 + row * 1.6;
    // 卡片
    slide.addShape("rect", {
      x: x, y: y, w: 4.35, h: 1.45,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 左侧色条
    slide.addShape("rect", {
      x: x, y: y, w: 0.08, h: 1.45,
      fill: { color: i % 2 === 0 ? theme.primary : theme.accent },
      line: { color: i % 2 === 0 ? theme.primary : theme.accent, width: 0 }
    });
    // 标签
    slide.addText(v.tag, {
      x: x + 0.2, y: y + 0.1, w: 2.0, h: 0.35,
      fontSize: 16, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
    slide.addText(v.en, {
      x: x + 2.2, y: y + 0.1, w: 2.0, h: 0.35,
      fontSize: 10, fontFace: FONT_EN,
      color: theme.mid, charSpacing: 3, align: "right", valign: "middle"
    });
    // 描述
    slide.addText(v.desc, {
      x: x + 0.2, y: y + 0.45, w: 4.0, h: 0.3,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.secondary, italic: true, align: "left", valign: "middle"
    });
    slide.addText(v.detail, {
      x: x + 0.2, y: y + 0.75, w: 4.0, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.dark, align: "left", valign: "middle"
    });
    // 关键提示
    slide.addShape("rect", {
      x: x + 0.2, y: y + 1.1, w: 4.0, h: 0.28,
      fill: { color: theme.highlight },
      line: { color: theme.highlight, width: 0 }
    });
    slide.addText("★ " + v.key, {
      x: x + 0.25, y: y + 1.1, w: 3.95, h: 0.28,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
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
