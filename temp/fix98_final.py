#!/usr/bin/env python3
"""Generate slide-98.js with correct UTF-8 encoding"""
import os

base = r'D:\新课开发\内训师和表达\系列进阶课'
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        slides_dir = os.path.join(base, entry, '授课PPT', 'slides')
        break

# The content for slide-98 (from the original template - same structure as slide-97)
content = '''// slide-98.js - 激励机制设计案例 - 华为
const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 98, title: "案例：华为的讲师激励体系" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 9.0, y: 0.3, w: 0.7, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("98", {
    x: 9.0, y: 0.3, w: 0.7, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("案例：华为的讲师激励体系", {
    x: 0.5, y: 0.35, w: 8.5, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 1.2, h: 0.04,
    fill: { color: theme.primary }
  });

  // Case study content
  const sections = [
    { label:"背景", content:"华为有完善的\"讲师荣誉体系\",内训师被称为\"内部专家\"" },
    { label:"核心机制", content:"积分制,积分可兑换外部培训/晋升加分/荣誉" },
    { label:"激励运营", content:"每月\"讲师沙龙\",每季\"课程发布会\",每年\"讲师盛典\"" },
    { label:"关键洞察", content:"激励需要仪式感,让内训师有\"被看见\"的机会" }
  ];

  const startY = 1.3;
  const sectionH = 0.95;
  const labelW = 1.3;

  sections.forEach((section, i) => {
    const sectionY = startY + i * sectionH;

    // Section background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: sectionY, w: 8.7, h: sectionH - 0.1,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 0.5 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: sectionY, w: 0.06, h: sectionH - 0.1,
      fill: { color: theme.primary }
    });

    // Label
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: sectionY + 0.15, w: labelW, h: 0.4,
      fill: { color: theme.secondary }
    });
    slide.addText(section.label, {
      x: 0.7, y: sectionY + 0.15, w: labelW, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Content
    slide.addText(section.content, {
      x: 2.15, y: sectionY + 0.1, w: 6.9, h: sectionH - 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent,
      valign: "middle"
    });
  });

  // Highlight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 8.7, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("启示：完善的荣誉体系+仪式感，是内训师激励的核心", {
    x: 0.5, y: 5.0, w: 8.7, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "C41E3A",
    secondary: "2D2D44",
    accent: "8D99AE",
    light: "E8E8F0",
    bg: "F8F8FC"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-98-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
'''

# Write as UTF-8 with BOM (to ensure Node.js reads it correctly)
path = os.path.join(slides_dir, 'slide-98.js')
bom = '﻿'
with open(path, 'w', encoding='utf-8') as f:
    f.write(bom + content)

# Verify by reading back
with open(path, 'r', encoding='utf-8') as f:
    verified = f.read()

lines = verified.split('\n')
result = []
result.append('File size: %d' % len(verified.encode('utf-8')))
result.append('Has BOM: %s' % verified.startswith('﻿'))
result.append('Total lines: %d' % len(lines))
result.append('Line 1: %s' % repr(lines[0][:60]))
result.append('Line 36: %s' % repr(lines[35][:80]))
result.append('Line 38: %s' % repr(lines[37][:80]))

with open(r'D:\CC\temp\fix98_final.txt', 'w', encoding='utf-8', errors='replace') as f:
    f.write('\n'.join(result))

print('Written slide-98.js')
print('File size:', len(verified.encode('utf-8')))
print('Total lines:', len(lines))
print('Has BOM:', verified.startswith('﻿'))
print('Line 36:', repr(lines[35][:80]))
print('Line 38:', repr(lines[37][:80]))
