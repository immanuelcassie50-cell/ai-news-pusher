// slide-95.js - 视觉辅助工具指南
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'backup',
  index: 95,
  title: '视觉辅助工具指南'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("视觉辅助工具指南", {
    x: 0.5, y: 0.35, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Backup label
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.5, y: 0.35, w: 1, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("备用", {
    x: 8.5, y: 0.35, w: 1, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // Visual aids
  const aids = [
    {
      name: "PPT课件",
      best: "展示结构化内容、数据图表、流程图",
      avoid: "大段文字、阅读式内容",
      tip: "每页不超过6行，每行不超过6字"
    },
    {
      name: "白板/白板笔",
      best: "即时书写、画图、灵活互动",
      avoid: "大量书写、长时间背对学员",
      tip: "提前规划区域，字迹要大要清晰"
    },
    {
      name: "视频/音频",
      best: "情景展示、案例呈现、感官刺激",
      avoid: "纯理论讲解、被动观看",
      tip: "控制在3-5分钟内，要配合讲解"
    },
    {
      name: "实物道具",
      best: "展示产品、工具、操作演示",
      avoid: "过大难以携带、过于复杂",
      tip: "让学员传递观察，增加参与感"
    },
    {
      name: "学员手册",
      best: "留存复习、跟上进度、做笔记",
      avoid: "现场朗读、代替互动",
      tip: "与PPT配合，不要照本宣科"
    }
  ];

  aids.forEach((aid, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = 0.5 + col * 3.1;
    const y = 1.0 + row * 2.25;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.95, h: 2.1,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Name header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.95, h: 0.45,
      fill: { color: theme.primary }
    });
    slide.addText(aid.name, {
      x: x, y: y, w: 2.95, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Best for
    slide.addText("✓ 适合：" + aid.best, {
      x: x + 0.1, y: y + 0.5, w: 2.75, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });

    // Avoid
    slide.addText("✗ 避免：" + aid.avoid, {
      x: x + 0.1, y: y + 1.0, w: 2.75, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, margin: 0
    });

    // Tip
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.1, y: y + 1.5, w: 2.75, h: 0.5,
      fill: { color: theme.light }
    });
    slide.addText("要点：" + aid.tip, {
      x: x + 0.15, y: y + 1.5, w: 2.65, h: 0.5,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle", margin: 0
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("95", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "FF6B6B",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-95-preview.pptx" });
}

module.exports = { createSlide, slideConfig };