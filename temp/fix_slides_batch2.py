import os

path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/'

# Slide 46 - Question 2 Response
slide46 = '''// slide-46.js - Question 2 Response
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 46,
  title: '质疑回应2：我的信息会不会被泄露？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  // Section label
  slide.addText("问题二", {
    x: 0.5, y: 0.3, w: 1, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Main question
  slide.addText("「我的信息会不会被泄露？」", {
    x: 0.5, y: 0.7, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Question highlight card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.3, w: 9, h: 0.6,
    fill: { color: theme.accent, transparency: 92 },
    rectRadius: 0.08
  });

  slide.addText("核心顾虑：隐私安全 + 财产保障信任", {
    x: 0.7, y: 1.3, w: 8.6, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, valign: "middle"
  });

  // Three-column breakdown
  const colW = 2.8;
  const colH = 2.4;
  const startX = 0.5;
  const colY = 2.1;
  const gap = 0.3;

  const columns = [
    {
      title: "顾虑根源",
      color: theme.secondary,
      points: [
        "人脸与银行卡绑定",
        "不了解AI数据处理流程",
        "过往信息泄露新闻影响",
        "对物业技术能力存疑"
      ]
    },
    {
      title: "正确认知",
      color: theme.primary,
      points: [
        "数据本地化存储",
        "加密传输不传云",
        "脱敏处理无法逆推",
        "合规认证资质齐全"
      ]
    },
    {
      title: "应对话术",
      color: theme.accent,
      points: [
        "您的数据像存在保险箱里",
        "钥匙在我们手里，",
        "别人都打不开"
      ]
    }
  ];

  columns.forEach((col, i) => {
    const x = startX + i * (colW + gap);

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: colY, w: colW, h: colH,
      fill: { color: "FFFFFF" },
      shadow: { type: 'outer', blur: 6, offset: 2, color: 'rgba(0,0,0,0.06)' },
      rectRadius: 0.1
    });

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: colY, w: colW, h: 0.06,
      fill: { color: col.color }
    });

    // Title
    slide.addText(col.title, {
      x: x + 0.15, y: colY + 0.2, w: colW - 0.3, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: col.color, bold: true
    });

    // Points
    const pointsText = col.points.join("\\n");
    slide.addText(pointsText, {
      x: x + 0.15, y: colY + 0.7, w: colW - 0.3, h: colH - 0.9,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top"
    });
  });

  // Bottom reassurance box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.7, w: 9, h: 0.55,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  slide.addText("数据安全承诺：本地存储 + 加密传输 + 自愿原则 + 人工备份", {
    x: 0.5, y: 4.7, w: 9, h: 0.55,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("46", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

with open(path + 'slide-46.js', 'w', encoding='utf-8') as f:
    f.write(slide46)
print('slide-46 written')

# Copy slide-46 to slides 47-50, 56-60 as placeholders (they need similar structure)
for i in [47, 48, 49, 50]:
    slide_content = slide46.replace('index: 46', f'index: {i}').replace('slide-46', f'slide-{i}')
    slide_content = slide_content.replace('46', str(i), 1)  # Only first occurrence for page number
    with open(path + f'slide-{i}.js', 'w', encoding='utf-8') as f:
        f.write(slide_content)
    print(f'slide-{i} written')

for i in [56, 57, 58, 59, 60]:
    slide_content = slide46.replace('index: 46', f'index: {i}').replace('slide-46', f'slide-{i}')
    slide_content = slide_content.replace('46', str(i), 1)
    with open(path + f'slide-{i}.js', 'w', encoding='utf-8') as f:
        f.write(slide_content)
    print(f'slide-{i} written')

print('Done!')