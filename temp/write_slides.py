#!/usr/bin/env python3
import time

content13 = '''// slide-13.js - 成本考量：成本与性能的权衡
const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("成本与性能的权衡", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.1, w: 4.8, h: 3.8,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });

  slide.addText("API成本 vs 性能曲线", {
    x: 0.7, y: 1.25, w: 4.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  slide.addShape(pres.shapes.LINE, {
    x: 1.2, y: 1.7, w: 0, h: 2.6,
    line: { color: theme.secondary, width: 1.5 }
  });
  slide.addShape(pres.shapes.LINE, {
    x: 1.2, y: 4.3, w: 3.6, h: 0,
    line: { color: theme.secondary, width: 1.5 }
  });

  slide.addText("性能", {
    x: 0.55, y: 2.7, w: 0.5, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", rotate: 270, margin: 0
  });
  slide.addText("成本", {
    x: 2.7, y: 4.35, w: 0.6, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", margin: 0
  });

  const curvePoints = [
    { x: 1.2, y: 4.1 },
    { x: 1.8, y: 3.3 },
    { x: 2.4, y: 2.7 },
    { x: 3.0, y: 2.3 },
    { x: 3.6, y: 2.1 },
    { x: 4.2, y: 1.95 },
    { x: 4.8, y: 1.85 }
  ];

  curvePoints.forEach((pt, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: pt.x - 0.08, y: pt.y - 0.08, w: 0.16, h: 0.16,
      fill: { color: i < 3 ? theme.accent : theme.primary }
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 2.55, y: 2.45, w: 0.5, h: 0.5,
    fill: { color: theme.accent, transparency: 30 }
  });
  slide.addText("最优\\n性价比", {
    x: 2.35, y: 1.85, w: 0.9, h: 0.55,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center", margin: 0
  });

  slide.addText("关键考量", {
    x: 5.6, y: 1.1, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  const insights = [
    { title: "规模法则", desc: "模型越大，效果越好，但成本指数增长", icon: "▲" },
    { title: "小模型的崛起", desc: "7B-13B模型在多数场景已足够使用", icon: "◆" },
    { title: "量化压缩", desc: "INT8/INT4量化可降低60-70%成本", icon: "●" }
  ];

  insights.forEach((item, i) => {
    const cardY = 1.6 + i * 1.15;

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.6, y: cardY, w: 3.9, h: 1.0,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.06 }
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.6, y: cardY, w: 0.06, h: 1.0,
      fill: { color: theme.accent }
    });

    slide.addText(item.icon, {
      x: 5.8, y: cardY + 0.25, w: 0.4, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, align: "center", valign: "middle", margin: 0
    });

    slide.addText(item.title, {
      x: 6.25, y: cardY + 0.15, w: 3.0, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });

    slide.addText(item.desc, {
      x: 6.25, y: cardY + 0.5, w: 3.0, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.0, w: 9.0, h: 0.45,
    fill: { color: theme.light },
    rectRadius: 0.06
  });
  slide.addText("选择模型时，综合考虑业务需求、数据规模、预算限制，找到最适合的平衡点", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle", margin: 0
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "1A1A1A",
    secondary: "2D2D2D",
    accent: "B81025",
    light: "E8E4DF",
    bg: "F6F3EF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-13-preview.pptx" })
    .then(() => console.log("Created: slide-13-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide };
'''

content14 = '''// slide-14.js - 迭代评估：持续评估的重要性
const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("持续评估的重要性", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  const centerX = 3.2;
  const centerY = 3.0;
  const cycleR = 1.5;

  slide.addShape(pres.shapes.OVAL, {
    x: centerX - cycleR - 0.15, y: centerY - cycleR - 0.15,
    w: (cycleR + 0.15) * 2, h: (cycleR + 0.15) * 2,
    fill: { color: theme.light, transparency: 50 }
  });

  const steps = [
    { label: "部署", angle: 0 },
    { label: "监控", angle: 60 },
    { label: "评估", angle: 120 },
    { label: "反馈", angle: 180 },
    { label: "优化", angle: 240 },
    { label: "迭代", angle: 300 }
  ];

  steps.forEach((step, i) => {
    const rad = (step.angle - 90) * Math.PI / 180;
    const nodeX = centerX + cycleR * Math.cos(rad);
    const nodeY = centerY + cycleR * Math.sin(rad);

    slide.addShape(pres.shapes.OVAL, {
      x: nodeX - 0.35, y: nodeY - 0.35, w: 0.7, h: 0.7,
      fill: { color: i % 2 === 0 ? theme.primary : theme.accent },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.15 }
    });

    slide.addText(step.label, {
      x: nodeX - 0.35, y: nodeY - 0.15, w: 0.7, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: centerX - 0.6, y: centerY - 0.6, w: 1.2, h: 1.2,
    fill: { color: theme.bg },
    line: { color: theme.primary, width: 2 }
  });
  slide.addText("持续\\n改进", {
    x: centerX - 0.5, y: centerY - 0.25, w: 1.0, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle", margin: 0
  });

  for (let i = 0; i < 6; i++) {
    const rad1 = ((steps[i].angle - 90) + 25) * Math.PI / 180;
    const rad2 = ((steps[(i + 1) % 6].angle - 90) - 25) * Math.PI / 180;
    const midR = cycleR + 0.25;
    const midX = centerX + midR * Math.cos((rad1 + rad2) / 2);
    const midY = centerY + midR * Math.sin((rad1 + rad2) / 2);

    slide.addText("→", {
      x: midX - 0.15, y: midY - 0.15, w: 0.3, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.secondary, align: "center", valign: "middle", margin: 0
    });
  }

  slide.addText("为什么持续评估？", {
    x: 5.5, y: 1.1, w: 4.2, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  const reasons = [
    { title: "版本变化", desc: "模型更新后行为可能改变，同一问题答案不再一致" },
    { title: "数据漂移", desc: "现实世界数据分布随时间变化，模型效果可能下降" },
    { title: "新能力涌现", desc: "新版本可能引入新能力，也可能有新的局限性" }
  ];

  reasons.forEach((item, i) => {
    const cardY = 1.6 + i * 1.0;

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.5, y: cardY, w: 4.2, h: 0.85,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.06 }
    });

    slide.addShape(pres.shapes.OVAL, {
      x: 5.65, y: cardY + 0.2, w: 0.45, h: 0.45,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 5.65, y: cardY + 0.2, w: 0.45, h: 0.45,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
    });

    slide.addText(item.title, {
      x: 6.25, y: cardY + 0.12, w: 3.2, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });

    slide.addText(item.desc, {
      x: 6.25, y: cardY + 0.42, w: 3.2, h: 0.35,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.5, y: 4.65, w: 4.2, h: 0.7,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("评估不是一次性工作，\\n而是贯穿模型整个生命周期的持续过程", {
    x: 5.65, y: 4.7, w: 3.9, h: 0.6,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", margin: 0
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 4.9, w: 0.4, h: 0.4,
    fill: { color: theme.light }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 0.8, y: 5.15, w: 0.2, h: 0.2,
    fill: { color: theme.accent, transparency: 40 }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "1A1A1A",
    secondary: "2D2D2D",
    accent: "B81025",
    light: "E8E4DF",
    bg: "F6F3EF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-14-preview.pptx" })
    .then(() => console.log("Created: slide-14-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide };
'''

content15 = '''// slide-15.js - 评估工具：常用评估工具
const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("常用评估工具", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  const tools = [
    {
      category: "通用评估框架",
      items: [
        { name: "OpenAI Evals", desc: "官方开源评估框架，支持自定义评估指标" },
        { name: "LangChain Testing", desc: "LLM应用测试与评估工具" }
      ]
    },
    {
      category: "Benchmark评测",
      items: [
        { name: "MMLU", desc: "多任务语言理解基准测试" },
        { name: "HELM", desc: "全面语言模型评估标准" }
      ]
    },
    {
      category: "专业领域工具",
      items: [
        { name: "BIG-bench", desc: "Google大模型能力综合评测" },
        { name: "HumanEval", desc: "代码生成能力评估" }
      ]
    }
  ];

  const colW = 2.9;
  const colGap = 0.25;
  const startX = 0.5;
  const cardY = 1.15;

  tools.forEach((cat, colIdx) => {
    const colX = startX + colIdx * (colW + colGap);

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: colX, y: cardY, w: colW, h: 0.5,
      fill: { color: colIdx === 1 ? theme.accent : theme.primary },
      rectRadius: 0.06
    });
    slide.addText(cat.category, {
      x: colX, y: cardY, w: colW, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
    });

    cat.items.forEach((tool, itemIdx) => {
      const itemY = cardY + 0.65 + itemIdx * 1.55;

      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: colX, y: itemY, w: colW, h: 1.4,
        fill: { color: "FFFFFF" },
        rectRadius: 0.08,
        shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
      });

      const iconX = colX + 0.2;
      const iconY = itemY + 0.25;

      if (colIdx === 0) {
        slide.addShape(pres.shapes.OVAL, {
          x: iconX, y: iconY, w: 0.6, h: 0.6,
          fill: { color: theme.primary }
        });
        slide.addShape(pres.shapes.OVAL, {
          x: iconX + 0.15, y: iconY + 0.15, w: 0.3, h: 0.3,
          fill: { color: "FFFFFF" }
        });
      } else if (colIdx === 1) {
        slide.addShape(pres.shapes.RECTANGLE, {
          x: iconX + 0.1, y: iconY + 0.1, w: 0.4, h: 0.4,
          fill: { color: theme.accent },
          rotate: 45
        });
      } else {
        slide.addShape(pres.shapes.RECTANGLE, {
          x: iconX, y: iconY + 0.1, w: 0.6, h: 0.4,
          fill: { color: theme.secondary }
        });
        slide.addShape(pres.shapes.RECTANGLE, {
          x: iconX + 0.1, y: iconY, w: 0.4, h: 0.6,
          fill: { color: theme.light }
        });
      }

      slide.addText(tool.name, {
        x: colX + 0.95, y: itemY + 0.2, w: colW - 1.1, h: 0.35,
        fontSize: 13, fontFace: "Arial",
        color: theme.primary, bold: true, margin: 0
      });

      slide.addText(tool.desc, {
        x: colX + 0.95, y: itemY + 0.55, w: colW - 1.1, h: 0.7,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.secondary, margin: 0
      });
    });
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.95, w: 9.0, h: 0.5,
    fill: { color: theme.light },
    rectRadius: 0.06
  });
  slide.addText("选择评估工具时，考虑：评估目的 / 行业标准 / 集成便利性 / 成本效率", {
    x: 0.7, y: 4.95, w: 8.6, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle", margin: 0
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.2, y: 0.95, w: 0.5, h: 0.5,
    fill: { color: theme.accent, transparency: 25 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 9.4, y: 1.55, w: 0.25, h: 0.25,
    fill: { color: theme.light }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "1A1A1A",
    secondary: "2D2D2D",
    accent: "B81025",
    light: "E8E4DF",
    bg: "F6F3EF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-15-preview.pptx" })
    .then(() => console.log("Created: slide-15-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide };
'''

path13 = 'D:/新课开发/自然科学/15.AI大模型底层原理/授课PPT/slides/slide-13.js'
path14 = 'D:/新课开发/自然科学/15.AI大模型底层原理/授课PPT/slides/slide-14.js'
path15 = 'D:/新课开发/自然科学/15.AI大模型底层原理/授课PPT/slides/slide-15.js'

with open(path13, 'w', encoding='utf-8') as f:
    f.write(content13)

with open(path14, 'w', encoding='utf-8') as f:
    f.write(content14)

with open(path15, 'w', encoding='utf-8') as f:
    f.write(content15)

print('All three files written successfully')

# Verify
time.sleep(0.3)
with open(path13, 'r', encoding='utf-8') as f:
    c13 = f.read()
    print(f'slide-13 title: {"成本与性能的权衡" in c13}')

with open(path14, 'r', encoding='utf-8') as f:
    c14 = f.read()
    print(f'slide-14 title: {"持续评估的重要性" in c14}')

with open(path15, 'r', encoding='utf-8') as f:
    c15 = f.read()
    print(f'slide-15 title: {"常用评估工具" in c15}')
