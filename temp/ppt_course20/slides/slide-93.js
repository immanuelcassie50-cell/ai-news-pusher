const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("持续精进的资源推荐", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Resources categories
  const resources = [
    {
      category: "书籍推荐",
      items: [
        { name: "《思考，快与慢》", author: "Daniel Kahneman", use: "理解决策偏见" },
        { name: "《如何阅读一本书》", author: "艾德勒", use: "提升信息筛选能力" },
        { name: "《原则》", author: "Ray Dalio", use: "建立决策框架" }
      ],
      color: theme.primary
    },
    {
      category: "信息源推荐",
      items: [
        { name: "世界卫生组织官网", author: "WHO", use: "权威健康信息" },
        { name: "中国知网/万方", author: "学术数据库", use: "研究文献检索" },
        { name: "Nature/Science Kids", author: "科学期刊", use: "前沿科学发现" }
      ],
      color: theme.secondary
    },
    {
      category: "工具推荐",
      items: [
        { name: "Notion", author: "笔记工具", use: "建立家庭知识库" },
        { name: "Anki", author: "记忆卡片", use: "关键知识点记忆" },
        { name: "Obsidian", author: "知识图谱", use: "知识关联管理" }
      ],
      color: theme.accent
    }
  ];

  resources.forEach((res, i) => {
    const x = 0.4 + i * 3.2;
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: 1.25, w: 3.0, h: 3.9,
      fill: { color: theme.bg },
      line: { color: res.color, width: 1.5 },
      rectRadius: 0.1
    });
    // Category header
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: 3.0, h: 0.5,
      fill: { color: res.color }
    });
    slide.addText(res.category, {
      x: x, y: 1.3, w: 3.0, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Items
    res.items.forEach((item, j) => {
      const y = 1.85 + j * 1.1;
      slide.addText(item.name, {
        x: x + 0.1, y: y, w: 2.8, h: 0.35,
        fontSize: 11, fontFace: "Microsoft YaHei", bold: true,
        color: theme.primary
      });
      slide.addText(item.author, {
        x: x + 0.1, y: y + 0.32, w: 2.8, h: 0.25,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
      slide.addText("用途: " + item.use, {
        x: x + 0.1, y: y + 0.58, w: 2.8, h: 0.25,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.light
      });
      if (j < res.items.length - 1) {
        slide.addShape(pres.ShapeType.line, {
          x: x + 0.1, y: y + 0.95, w: 2.8, h: 0,
          line: { color: theme.light, width: 0.5, transparency: 60 }
        });
      }
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("93", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
