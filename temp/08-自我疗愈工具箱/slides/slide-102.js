/**
 * Slide 102 - 常见锚点示例
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("常见锚点示例", {
    x: 0.5, y: 0.3, w: 9, h: 0.65,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("将心理保养嵌入你已有的日常习惯中", {
    x: 0.5, y: 0.9, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Anchor points list
  const anchors = [
    { anchor: "起床后", action: "3分钟呼吸空间", desc: "在身体还未完全清醒时，先给心理一个安静的空间" },
    { anchor: "刷牙时", action: "嵌入式正念", desc: "专注感受牙刷的触感、水的温度，完全活在当下" },
    { anchor: "喝第一杯咖啡/茶", action: "感恩时刻", desc: "三口茶/咖啡，三件感恩的事" },
    { anchor: "午饭后", action: "工作间休呼吸", desc: "离开工位，3-5次深呼吸，给消化系统一个平静环境" },
    { anchor: "睡前", action: "睡前工具组合", desc: "PMR / 身体扫描 / 感恩日记（按当日压力选）" }
  ];

  const startY = 1.45;
  const rowH = 0.78;
  const col1W = 2.0;
  const col2W = 2.5;
  const col3W = 4.5;

  // Header row
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: startY, w: col1W + col2W + col3W, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("锚点时刻", {
    x: 0.5, y: startY, w: col1W, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("心理保养动作", {
    x: 0.5 + col1W, y: startY, w: col2W, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("说明", {
    x: 0.5 + col1W + col2W, y: startY, w: col3W, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Data rows
  anchors.forEach((item, i) => {
    const y = startY + 0.5 + i * rowH;
    const bgColor = i % 2 === 0 ? "FFFFFF" : theme.bg;

    // Row background
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: col1W + col2W + col3W, h: rowH,
      fill: { color: bgColor },
      line: { color: theme.secondary, width: 0.5, transparency: 90 }
    });

    // Anchor cell with primary color icon
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: y + 0.19, w: 0.4, h: 0.4,
      fill: { color: theme.primary }
    });
    slide.addText(item.anchor, {
      x: 1.2, y: y, w: col1W - 0.8, h: rowH,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      valign: "middle"
    });

    // Action cell with gold badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5 + col1W + 0.3, y: y + 0.19, w: col2W - 0.6, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(item.action, {
      x: 0.5 + col1W + 0.3, y: y + 0.19, w: col2W - 0.6, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: false,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: 0.5 + col1W + col2W + 0.15, y: y, w: col3W - 0.3, h: rowH,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      valign: "middle"
    });
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.1, w: 8.5, h: 0.4,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("提示：选择1-2个最适合你的锚点开始，不要试图全部都做", {
    x: 0.7, y: 5.1, w: 8.1, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("102", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 7",
  title: "常见锚点示例",
  pageNumber: 102
};

module.exports = { createSlide, slideConfig };
