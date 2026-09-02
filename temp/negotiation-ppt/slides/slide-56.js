// slide-56.js - 准备表工具
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 56, title: '准备表工具' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 工具：准备表", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("一页纸准备表——把八步装进口袋", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("下次谈判前打印一份，30-60 分钟填完——这是你的\"作战地图\"", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Sample preparation table
  const items = [
    { label: "① 谈判主题", content: "谈新年涨薪幅度" },
    { label: "② 我的目标", content: "涨 20%，title 升一级" },
    { label: "③ 我的底线", content: "不低于 15%，title 可不升" },
    { label: "④ 我的 BATNA", content: "对手公司 offer：+25% 但压力大" },
    { label: "⑤ 对方的目标", content: "稳定团队，控制人力成本" },
    { label: "⑥ 对方的底线", content: "今年最多 8%" },
    { label: "⑦ 对方 BATNA", content: "招新人替换 ≈ 3 个月磨合期" },
    { label: "⑧ 关键利益", content: "实：钱 / 程：评价方式 / 关：长期信任" },
    { label: "⑨ 我的六张牌", content: "时间：不急 / 信息：面试了别家 / 关系：3年老臣" },
    { label: "⑩ 三个备选方案", content: "A: 20% / B: 15%+期权 / C: 15%+远程2天" }
  ];

  items.forEach((it, i) => {
    const y = 1.7 + i * 0.32;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 9.2, h: 0.3,
      fill: { color: i % 2 === 0 ? "FFFFFF" : theme.bg },
      line: { color: theme.light, width: 0.5 }
    });
    slide.addText(it.label, {
      x: 0.5, y: y, w: 2.0, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
    slide.addText(it.content, {
      x: 2.5, y: y, w: 7.0, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("带着这张表进谈判——\"准备充分\"不是感觉，是流程", {
    x: 0.5, y: 4.95, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("56", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-56-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
