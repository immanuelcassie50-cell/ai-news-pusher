// slide-60.js - BATNA 在不同场景的应用
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 60, title: 'BATNA 不同场景' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · BATNA 的真实形态", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("BATNA 不是\"跳槽\"——它是当下最好的下一步", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const scenarios = [
    {
      n: "01", t: "求职谈判",
      bat: "已有 2 个公司 offer / 同行面试中",
      strength: "强 BATNA：能立即离职",
      tip: "不要说具体数字，只说\"我还在看\""
    },
    {
      n: "02", t: "采购谈判",
      bat: "接触 2-3 家供应商，已拿到报价",
      strength: "强 BATNA：可立即切换",
      tip: "说\"我们还在做对比\"——让对方知道有备选"
    },
    {
      n: "03", t: "客户合作",
      bat: "已经有 1-2 个小客户做样本",
      strength: "中等 BATNA：可独立生存",
      tip: "不主动说，只在被压价时透一点"
    },
    {
      n: "04", t: "家庭谈判",
      bat: "已经想好 B 计划：自己回娘家 / 不去旅行",
      strength: "心理 BATNA：内心有退路",
      tip: "不一定要说出口，但自己要清楚"
    },
    {
      n: "05", t: "争取资源",
      bat: "不申请这个资源，转向其他项目",
      strength: "替代 BATNA：换一条路",
      tip: "和老板说\"如果这个不成，我打算做 Y\""
    }
  ];

  scenarios.forEach((s, i) => {
    const y = 1.55 + i * 0.65;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 9.2, h: 0.55,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 0.55, h: 0.55,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(s.n, {
      x: 0.4, y: y, w: 0.55, h: 0.55,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.t, {
      x: 1.1, y: y, w: 1.7, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    slide.addText(s.bat, {
      x: 2.9, y: y, w: 3.0, h: 0.55,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
    slide.addText(s.strength, {
      x: 6.0, y: y, w: 1.8, h: 0.55,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
    slide.addText(s.tip, {
      x: 7.85, y: y, w: 1.7, h: 0.55,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true, valign: "middle"
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("60", {
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
  pres.writeFile({ fileName: "slide-60-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
