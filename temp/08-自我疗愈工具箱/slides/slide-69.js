/**
 * Slide 69 - 感恩日记注意事项
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
  slide.addText("感恩日记注意事项", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("让感恩成为习惯，而非负担", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // 4 key points with icons
  const points = [
    {
      icon: "1",
      title: "具体化，而非模糊",
      desc: '与其写"生活很好"，不如写"今天早上咖啡的香气让我心情愉悦"',
      color: theme.primary
    },
    {
      icon: "2",
      title: "小确幸同样重要",
      desc: "不需要惊天动地的大事，一杯温水、一阵凉风、一个微笑都值得感恩",
      color: theme.accent
    },
    {
      icon: "3",
      title: "不要把它变成任务",
      desc: "感恩是发自内心的感受，不是打勾完成的任务。带着轻松的心情书写",
      color: theme.light
    },
    {
      icon: "4",
      title: "坚持比每天重要",
      desc: "偶尔漏掉一天没关系，重要的是长期保持感恩的心态，而非机械记录",
      color: theme.secondary
    }
  ];

  const startY = 1.5;
  const itemH = 0.85;
  const gap = 0.1;

  points.forEach((point, i) => {
    const yPos = startY + i * (itemH + gap);

    // Background bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: yPos, w: 9, h: itemH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 1, angle: 45, opacity: 0.08 }
    });

    // Left accent
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: yPos, w: 0.08, h: itemH,
      fill: { color: point.color }
    });

    // Icon circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.75, y: yPos + 0.2, w: 0.45, h: 0.45,
      fill: { color: point.color }
    });
    slide.addText(point.icon, {
      x: 0.75, y: yPos + 0.2, w: 0.45, h: 0.45,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", align: "center", valign: "middle", bold: true
    });

    // Title
    slide.addText(point.title, {
      x: 1.4, y: yPos + 0.15, w: 7.5, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });

    // Description
    slide.addText(point.desc, {
      x: 1.4, y: yPos + 0.5, w: 7.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false
    });
  });

  // Bottom quote
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.accent, transparency: 20 }
  });
  slide.addText('"感恩不是改变生活，而是改变看生活的眼睛"', {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", bold: false
  });

  // Page number
  slide.addText("69", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 5",
  title: "感恩日记注意事项",
  pageNumber: 69
};

module.exports = { createSlide, slideConfig };
