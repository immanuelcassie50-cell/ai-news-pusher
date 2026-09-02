// slide-45.js - 本部分知识框架
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 45,
  title: '本部分知识框架'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("本部分知识框架", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("AI辅助生成话术与SOP", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Three columns
  const columns = [
    {
      title: "AI的正确角色",
      items: [
        { header: "能做：", text: "效率整理，快速生成初稿，输出变体" },
        { header: "不能做：", text: "判断准确性，确保合规，替代经验验证" }
      ]
    },
    {
      title: "服务话术模板的生成要点",
      items: [
        { header: "质量标准：", text: "场景明确 + 表达自然 + 覆盖变体和雷区" },
        { header: "提示词核心：", text: "场景背景 + 合规约束 + 你的经验素材" },
        { header: "验证重点：", text: "能不能自然说出来 + 合规检查" }
      ]
    },
    {
      title: "服务SOP的生成要点",
      items: [
        { header: "质量标准：", text: "动词开头 + 判断节点清晰 + 覆盖常见失误" },
        { header: "提示词核心：", text: "步骤素材 + 判断逻辑 + 完成标志" },
        { header: "验证重点：", text: "步骤顺序是否符合实际 + 新人能否照着执行" }
      ]
    }
  ];

  columns.forEach((col, i) => {
    const x = 0.5 + i * 3.15;

    // Column card
    slide.addShape("rect", {
      x: x, y: 1.55, w: 2.95, h: 3.7,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Column header
    slide.addShape("rect", {
      x: x, y: 1.55, w: 2.95, h: 0.55,
      fill: { color: i === 0 ? theme.primary : (i === 1 ? theme.secondary : theme.accent) }
    });
    slide.addText(col.title, {
      x: x, y: 1.55, w: 2.95, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Column items
    col.items.forEach((item, j) => {
      const y = 2.2 + j * 1.0;
      slide.addText(item.header, {
        x: x + 0.15, y: y, w: 2.65, h: 0.35,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: true
      });
      slide.addText(item.text, {
        x: x + 0.15, y: y + 0.35, w: 2.65, h: 0.55,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.primary
      });
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("45", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "22223b",
    secondary: "c94134",
    accent: "c9ada7",
    light: "f5f5f5",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-45-preview.pptx" });
}

module.exports = { createSlide, slideConfig };