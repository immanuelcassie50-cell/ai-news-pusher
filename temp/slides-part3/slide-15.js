const { pptxgen } = require("pptxgenjs");

module.exports = {
  createSlide: (pres) => {
    const slide = pres.addSlide();
    const theme = {
      primary: "22223b",
      secondary: "c94134",
      accent: "c9ada7",
      light: "f5f5f5",
      bg: "fafafa"
    };

    slide.background = { color: theme.bg };

    // Page badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 9.3, y: 5.1, w: 0.5, h: 0.35,
      fill: { color: theme.secondary },
      rectRadius: 0.08
    });
    slide.addText("15", {
      x: 9.3, y: 5.1, w: 0.5, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle",
      margin: 0
    });

    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.9,
      fill: { color: theme.primary }
    });

    slide.addText("完整的话术生成提示词模板", {
      x: 0.5, y: 0.2, w: 9, h: 0.5,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Introduction text
    slide.addText("把以下模板复制到AI工具里，将括号里的内容替换成你的实际信息", {
      x: 0.5, y: 1.1, w: 9, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent,
      margin: 0
    });

    // Template sections
    const sections = [
      { num: "1", title: "Role设定", desc: "你是一位[身份]，服务[客户类型]" },
      { num: "2", title: "背景信息", desc: "场景：[场景描述]，客户：[客户特征]" },
      { num: "3", title: "场景描述", desc: "触发情境：[具体情境]，沟通目标：[目标]" },
      { num: "4", title: "沟通目标", desc: "主要：[目标]，底线：[底线]" },
      { num: "5", title: "客户常见阻力", desc: "[阻力1]、[阻力2]、[阻力3]" },
      { num: "6", title: "合规约束", desc: "[必须遵守的合规要求]" },
      { num: "7", title: "关键经验素材", desc: "[你的实际服务经验或案例]" },
      { num: "8", title: "输出要求", desc: "格式：[话术/流程]，数量：[N个版本]" }
    ];

    sections.forEach((section, i) => {
      const col = i < 4 ? 0 : 1;
      const row = i < 4 ? i : i - 4;
      const x = col === 0 ? 0.5 : 5.0;
      const y = 1.7 + row * 0.88;

      // Section card
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: x, y: y, w: 4.5, h: 0.78,
        fill: { color: "ffffff" },
        line: { color: theme.light, width: 1 },
        rectRadius: 0.08
      });

      // Number badge
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.1, y: y + 0.14, w: 0.5, h: 0.5,
        fill: { color: theme.secondary }
      });
      slide.addText(section.num, {
        x: x + 0.1, y: y + 0.14, w: 0.5, h: 0.5,
        fontSize: 14, fontFace: "Arial",
        color: "ffffff", bold: true,
        align: "center", valign: "middle",
        margin: 0
      });

      // Title
      slide.addText(section.title, {
        x: x + 0.7, y: y + 0.08, w: 1.3, h: 0.35,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: theme.primary, bold: true,
        margin: 0
      });

      // Description
      slide.addText(section.desc, {
        x: x + 0.7, y: y + 0.4, w: 3.6, h: 0.35,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.accent,
        margin: 0
      });
    });

    // Bottom note
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 5.25, w: 9, h: 0.35,
      fill: { color: theme.secondary, transparency: 90 },
      rectRadius: 0.06
    });

    slide.addText("提示：信息越具体，生成的初稿越贴合你的实际场景", {
      x: 0.5, y: 5.25, w: 9, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "center", valign: "middle",
      margin: 0
    });
  },

  slideConfig: {
    title: "完整的话术生成提示词模板",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};