const PptxGenJS = require('pptxgenjs');

const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_16x9';
pptx.title = '关键客户知识地图与知识传承';
pptx.author = '罗宏伟';

// Color scheme
const COLORS = {
  primary: "C43C3A",
  secondary: "4A4E69",
  accent: "9A8C98",
  light: "E8E8E8",
  bg: "FAFAFA",
  white: "FFFFFF",
  dark: "2D2D2D",
  text: "333333"
};

const FONTS = {
  zh: 'Microsoft YaHei',
  en: 'Arial'
};

const makeShadow = () => ({
  type: 'outer', color: '000000',
  blur: 4, offset: 2, angle: 135, opacity: 0.1
});

let currentPage = 0;

function addPageBadge(slide) {
  currentPage++;
  slide.addShape('ellipse', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: COLORS.primary }
  });
  slide.addText(String(currentPage), {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: FONTS.en, color: COLORS.white,
    align: 'center', valign: 'middle'
  });
}

function addSectionHeader(slide, title, subtitle) {
  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: COLORS.primary }
  });
  slide.addText(title, {
    x: 0.5, y: 0.25, w: 9, h: 0.55,
    fontSize: 26, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.5, y: 0.75, w: 9, h: 0.3,
      fontSize: 12, fontFace: FONTS.zh, color: COLORS.white,
      transparency: 30
    });
  }
}

function addQuoteBox(slide, x, y, w, h, quote) {
  slide.addShape('rect', {
    x: x, y: y, w: w, h: h,
    fill: { color: COLORS.light }
  });
  slide.addShape('rect', {
    x: x, y: y, w: 0.1, h: h,
    fill: { color: COLORS.secondary }
  });
  slide.addText(quote, {
    x: x + 0.25, y: y + 0.1, w: w - 0.4, h: h - 0.2,
    fontSize: 13, fontFace: FONTS.zh, color: COLORS.secondary,
    italic: true, valign: 'middle'
  });
}

// ========== COVER ==========
function createCover() {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.15,
    fill: { color: COLORS.primary }
  });

  slide.addShape('rect', {
    x: 0, y: 0.15, w: 0.4, h: 5.475,
    fill: { color: COLORS.secondary }
  });

  slide.addShape('rect', {
    x: 0.4, y: 1.2, w: 9.2, h: 3.2,
    fill: { color: COLORS.white },
    shadow: makeShadow()
  });

  slide.addShape('rect', {
    x: 0.4, y: 1.2, w: 0.12, h: 3.2,
    fill: { color: COLORS.primary }
  });

  slide.addText('关键客户知识地图与知识传承', {
    x: 0.7, y: 1.5, w: 8.6, h: 1,
    fontSize: 38, fontFace: FONTS.zh, color: COLORS.primary,
    bold: true
  });

  slide.addText('客户经理与客户成功团队的知识萃取与传承方法论', {
    x: 0.7, y: 2.6, w: 8.6, h: 0.6,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.secondary
  });

  slide.addText('罗宏伟', {
    x: 0.7, y: 3.4, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: FONTS.zh, color: COLORS.accent
  });

  // Decorative elements
  slide.addShape('ellipse', {
    x: 8.5, y: 0.5, w: 1, h: 1,
    fill: { color: COLORS.primary, transparency: 80 }
  });
  slide.addShape('ellipse', {
    x: 9, y: 1, w: 0.6, h: 0.6,
    fill: { color: COLORS.accent, transparency: 70 }
  });

  slide.addText('120-160页  授课PPT', {
    x: 0.7, y: 4.8, w: 4, h: 0.4,
    fontSize: 12, fontFace: FONTS.zh, color: COLORS.accent
  });

  return slide;
}

// ========== TABLE OF CONTENTS ==========
function createTOC() {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };
  addSectionHeader(slide, '目录', 'CONTENTS');

  const parts = [
    { num: 'PART 1', title: '你不是在维护关系，你是在画一张没人复制过的地图', pages: '第1-16章', color: COLORS.primary },
    { num: 'PART 2', title: '把知识交出去，才是真正的强大', pages: '第17-22章', color: COLORS.secondary },
    { num: '特别篇', title: '实践应用与方法论', pages: '3个特别篇', color: COLORS.accent },
    { num: '附录', title: '工具模板与打分卡', pages: '4个附录', color: COLORS.secondary }
  ];

  parts.forEach((part, i) => {
    const y = 1.4 + i * 1.0;
    slide.addShape('roundRect', {
      x: 0.5, y: y, w: 9, h: 0.9,
      fill: { color: COLORS.white },
      shadow: makeShadow(),
      rectRadius: 0.05
    });
    slide.addShape('rect', {
      x: 0.5, y: y, w: 1.3, h: 0.9,
      fill: { color: part.color }
    });
    slide.addText(part.num, {
      x: 0.5, y: y, w: 1.3, h: 0.9,
      fontSize: 14, fontFace: FONTS.en, color: COLORS.white,
      bold: true, align: 'center', valign: 'middle'
    });
    slide.addText(part.title, {
      x: 2.0, y: y + 0.15, w: 7, h: 0.35,
      fontSize: 14, fontFace: FONTS.zh, color: COLORS.text,
      bold: true
    });
    slide.addText(part.pages, {
      x: 2.0, y: y + 0.5, w: 7, h: 0.25,
      fontSize: 11, fontFace: FONTS.zh, color: COLORS.accent
    });
  });

  addPageBadge(slide);
  return slide;
}

// ========== PART PAGES ==========
function createPartPage(partNum, title, subtitle) {
  let slide = pptx.addSlide();
  slide.background = { color: partNum === '01' ? COLORS.primary : COLORS.secondary };

  slide.addText(partNum, {
    x: 0.5, y: 0.8, w: 3, h: 2,
    fontSize: 140, fontFace: FONTS.en, color: COLORS.white,
    bold: true, transparency: 25
  });

  slide.addText('PART', {
    x: 0.5, y: 0.5, w: 2, h: 0.5,
    fontSize: 16, fontFace: FONTS.en, color: COLORS.white,
    transparency: 50
  });

  slide.addText(title, {
    x: 0.5, y: 2.3, w: 9, h: 1.5,
    fontSize: 34, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  slide.addText(subtitle, {
    x: 0.5, y: 3.8, w: 9, h: 0.6,
    fontSize: 16, fontFace: FONTS.zh, color: COLORS.white,
    transparency: 30
  });

  addPageBadge(slide);
  return slide;
}

// ========== CHAPTER PAGES ==========
function createChapterHeader(chapterNum, title, quote) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 2.8, h: 5.625,
    fill: { color: COLORS.primary }
  });

  slide.addText(chapterNum, {
    x: 0.3, y: 1.5, w: 2.2, h: 1.8,
    fontSize: 80, fontFace: FONTS.en, color: COLORS.white,
    bold: true, transparency: 20
  });

  slide.addText('CHAPTER', {
    x: 0.3, y: 1.1, w: 2.2, h: 0.4,
    fontSize: 12, fontFace: FONTS.en, color: COLORS.white,
    transparency: 40
  });

  slide.addText(title, {
    x: 3.2, y: 1.5, w: 6.3, h: 2.2,
    fontSize: 24, fontFace: FONTS.zh, color: COLORS.text,
    bold: true, valign: 'middle'
  });

  if (quote) {
    slide.addShape('rect', {
      x: 3.2, y: 3.9, w: 6.3, h: 1.2,
      fill: { color: COLORS.light }
    });
    slide.addText(quote, {
      x: 3.4, y: 4.0, w: 5.9, h: 1,
      fontSize: 13, fontFace: FONTS.zh, color: COLORS.secondary,
      italic: true, valign: 'middle'
    });
  }

  addPageBadge(slide);
  return slide;
}

function createChapterContent(chapterNum, title, points) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: COLORS.secondary }
  });
  slide.addText(`第${chapterNum}章  ${title}`, {
    x: 0.5, y: 0.22, w: 9, h: 0.5,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  points.forEach((point, i) => {
    const y = 1.1 + i * 1.1;
    slide.addShape('roundRect', {
      x: 0.5, y: y, w: 9, h: 1.0,
      fill: { color: COLORS.white },
      shadow: makeShadow(),
      rectRadius: 0.05
    });
    slide.addShape('rect', {
      x: 0.5, y: y, w: 0.1, h: 1.0,
      fill: { color: COLORS.primary }
    });
    slide.addText(point, {
      x: 0.8, y: y + 0.15, w: 8.5, h: 0.7,
      fontSize: 14, fontFace: FONTS.zh, color: COLORS.text,
      valign: 'middle'
    });
  });

  addPageBadge(slide);
  return slide;
}

function createTwoColumnContent(chapterNum, title, leftTitle, leftPoints, rightTitle, rightPoints) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: COLORS.secondary }
  });
  slide.addText(`第${chapterNum}章  ${title}`, {
    x: 0.5, y: 0.22, w: 9, h: 0.5,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  // Left column
  slide.addShape('roundRect', {
    x: 0.4, y: 1.0, w: 4.4, h: 4.2,
    fill: { color: COLORS.white },
    shadow: makeShadow(),
    rectRadius: 0.08
  });
  slide.addShape('rect', {
    x: 0.4, y: 1.0, w: 4.4, h: 0.5,
    fill: { color: COLORS.primary }
  });
  slide.addText(leftTitle, {
    x: 0.5, y: 1.05, w: 4.2, h: 0.4,
    fontSize: 13, fontFace: FONTS.zh, color: COLORS.white,
    bold: true, align: 'center'
  });
  leftPoints.forEach((point, i) => {
    slide.addShape('ellipse', {
      x: 0.6, y: 1.7 + i * 0.75, w: 0.12, h: 0.12,
      fill: { color: COLORS.primary }
    });
    slide.addText(point, {
      x: 0.85, y: 1.6 + i * 0.75, w: 3.8, h: 0.7,
      fontSize: 12, fontFace: FONTS.zh, color: COLORS.text,
      valign: 'top'
    });
  });

  // Right column
  slide.addShape('roundRect', {
    x: 5.2, y: 1.0, w: 4.4, h: 4.2,
    fill: { color: COLORS.white },
    shadow: makeShadow(),
    rectRadius: 0.08
  });
  slide.addShape('rect', {
    x: 5.2, y: 1.0, w: 4.4, h: 0.5,
    fill: { color: COLORS.accent }
  });
  slide.addText(rightTitle, {
    x: 5.3, y: 1.05, w: 4.2, h: 0.4,
    fontSize: 13, fontFace: FONTS.zh, color: COLORS.white,
    bold: true, align: 'center'
  });
  rightPoints.forEach((point, i) => {
    slide.addShape('ellipse', {
      x: 5.4, y: 1.7 + i * 0.75, w: 0.12, h: 0.12,
      fill: { color: COLORS.accent }
    });
    slide.addText(point, {
      x: 5.65, y: 1.6 + i * 0.75, w: 3.8, h: 0.7,
      fontSize: 12, fontFace: FONTS.zh, color: COLORS.text,
      valign: 'top'
    });
  });

  addPageBadge(slide);
  return slide;
}

function createThreeColumnContent(chapterNum, title, items) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: COLORS.secondary }
  });
  slide.addText(`第${chapterNum}章  ${title}`, {
    x: 0.5, y: 0.22, w: 9, h: 0.5,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  const colW = 2.95;
  const startX = 0.4;
  const gap = 0.15;

  items.forEach((item, i) => {
    const x = startX + i * (colW + gap);
    slide.addShape('roundRect', {
      x: x, y: 1.0, w: colW, h: 4.2,
      fill: { color: COLORS.white },
      shadow: makeShadow(),
      rectRadius: 0.08
    });
    slide.addShape('ellipse', {
      x: x + colW/2 - 0.3, y: 1.2, w: 0.6, h: 0.6,
      fill: { color: COLORS.primary }
    });
    slide.addText(item.icon, {
      x: x + colW/2 - 0.3, y: 1.2, w: 0.6, h: 0.6,
      fontSize: 20, color: COLORS.white,
      align: 'center', valign: 'middle'
    });
    slide.addText(item.title, {
      x: x + 0.15, y: 1.95, w: colW - 0.3, h: 0.5,
      fontSize: 14, fontFace: FONTS.zh, color: COLORS.primary,
      bold: true, align: 'center'
    });
    item.points.forEach((point, j) => {
      slide.addText('• ' + point, {
        x: x + 0.2, y: 2.5 + j * 0.6, w: colW - 0.4, h: 0.55,
        fontSize: 11, fontFace: FONTS.zh, color: COLORS.text,
        valign: 'top'
      });
    });
  });

  addPageBadge(slide);
  return slide;
}

function createQuoteSlide(chapterNum, title, quote, explanation) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: COLORS.secondary }
  });
  slide.addText(`第${chapterNum}章  ${title}`, {
    x: 0.5, y: 0.22, w: 9, h: 0.5,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  slide.addShape('roundRect', {
    x: 0.5, y: 1.1, w: 9, h: 2.0,
    fill: { color: COLORS.light }
  });
  slide.addShape('rect', {
    x: 0.5, y: 1.1, w: 0.12, h: 2.0,
    fill: { color: COLORS.primary }
  });
  slide.addText(quote, {
    x: 0.8, y: 1.3, w: 8.5, h: 1.6,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.primary,
    italic: true, valign: 'middle'
  });

  if (explanation) {
    slide.addShape('roundRect', {
      x: 0.5, y: 3.3, w: 9, h: 1.9,
      fill: { color: COLORS.white },
      shadow: makeShadow(),
      rectRadius: 0.05
    });
    slide.addText(explanation, {
      x: 0.7, y: 3.5, w: 8.6, h: 1.5,
      fontSize: 13, fontFace: FONTS.zh, color: COLORS.text,
      valign: 'top'
    });
  }

  addPageBadge(slide);
  return slide;
}

function createProcessSlide(chapterNum, title, steps) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: COLORS.secondary }
  });
  slide.addText(`第${chapterNum}章  ${title}`, {
    x: 0.5, y: 0.22, w: 9, h: 0.5,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  steps.forEach((step, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape('roundRect', {
      x: x, y: 1.2, w: 2.9, h: 3.8,
      fill: { color: COLORS.white },
      shadow: makeShadow(),
      rectRadius: 0.08
    });
    slide.addShape('ellipse', {
      x: x + 1.05, y: 1.4, w: 0.8, h: 0.8,
      fill: { color: COLORS.primary }
    });
    slide.addText(String(i + 1), {
      x: x + 1.05, y: 1.4, w: 0.8, h: 0.8,
      fontSize: 24, fontFace: FONTS.en, color: COLORS.white,
      bold: true, align: 'center', valign: 'middle'
    });
    slide.addText(step.title, {
      x: x + 0.15, y: 2.4, w: 2.6, h: 0.5,
      fontSize: 13, fontFace: FONTS.zh, color: COLORS.primary,
      bold: true, align: 'center'
    });
    slide.addText(step.desc, {
      x: x + 0.15, y: 2.9, w: 2.6, h: 2,
      fontSize: 11, fontFace: FONTS.zh, color: COLORS.text,
      align: 'center', valign: 'top'
    });

    if (i < steps.length - 1) {
      slide.addText('→', {
        x: x + 2.85, y: 2.8, w: 0.4, h: 0.5,
        fontSize: 20, color: COLORS.accent,
        align: 'center', valign: 'middle'
      });
    }
  });

  addPageBadge(slide);
  return slide;
}

function createCaseSlide(chapterNum, title, caseTitle, caseContent, insights) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: COLORS.secondary }
  });
  slide.addText(`第${chapterNum}章  ${title}`, {
    x: 0.5, y: 0.22, w: 9, h: 0.5,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  // Case box
  slide.addShape('roundRect', {
    x: 0.5, y: 1.0, w: 5.8, h: 4.2,
    fill: { color: COLORS.white },
    shadow: makeShadow(),
    rectRadius: 0.08
  });
  slide.addShape('rect', {
    x: 0.5, y: 1.0, w: 5.8, h: 0.5,
    fill: { color: COLORS.primary }
  });
  slide.addText('📋 ' + caseTitle, {
    x: 0.6, y: 1.05, w: 5.6, h: 0.4,
    fontSize: 13, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });
  slide.addText(caseContent, {
    x: 0.7, y: 1.65, w: 5.4, h: 3.4,
    fontSize: 12, fontFace: FONTS.zh, color: COLORS.text,
    valign: 'top'
  });

  // Insights
  slide.addShape('roundRect', {
    x: 6.5, y: 1.0, w: 3.1, h: 4.2,
    fill: { color: COLORS.light },
    rectRadius: 0.08
  });
  slide.addText('💡 关键洞察', {
    x: 6.6, y: 1.15, w: 2.9, h: 0.4,
    fontSize: 13, fontFace: FONTS.zh, color: COLORS.primary,
    bold: true
  });
  insights.forEach((insight, i) => {
    slide.addText('• ' + insight, {
      x: 6.7, y: 1.65 + i * 0.8, w: 2.7, h: 0.75,
      fontSize: 11, fontFace: FONTS.zh, color: COLORS.text,
      valign: 'top'
    });
  });

  addPageBadge(slide);
  return slide;
}

// ========== SPECIAL PAGES ==========
function createSpecialPage(specialNum, title, points) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: COLORS.accent }
  });
  slide.addText(`特别篇  ${title}`, {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 20, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  points.forEach((point, i) => {
    const y = 1.15 + i * 1.1;
    slide.addShape('roundRect', {
      x: 0.5, y: y, w: 9, h: 1.0,
      fill: { color: COLORS.white },
      shadow: makeShadow(),
      rectRadius: 0.05
    });
    slide.addShape('ellipse', {
      x: 0.7, y: y + 0.35, w: 0.3, h: 0.3,
      fill: { color: COLORS.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.7, y: y + 0.35, w: 0.3, h: 0.3,
      fontSize: 12, fontFace: FONTS.en, color: COLORS.white,
      align: 'center', valign: 'middle'
    });
    slide.addText(point, {
      x: 1.15, y: y + 0.2, w: 8.2, h: 0.6,
      fontSize: 14, fontFace: FONTS.zh, color: COLORS.text,
      valign: 'middle'
    });
  });

  addPageBadge(slide);
  return slide;
}

function createSpecialDetailPage(specialNum, title, items) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: COLORS.accent }
  });
  slide.addText(`特别篇  ${title}`, {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 20, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  items.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 2.15;

    slide.addShape('roundRect', {
      x: x, y: y, w: 4.4, h: 2.0,
      fill: { color: COLORS.white },
      shadow: makeShadow(),
      rectRadius: 0.08
    });
    slide.addText(item.title, {
      x: x + 0.2, y: y + 0.15, w: 4, h: 0.4,
      fontSize: 14, fontFace: FONTS.zh, color: COLORS.primary,
      bold: true
    });
    slide.addText(item.desc, {
      x: x + 0.2, y: y + 0.6, w: 4, h: 1.3,
      fontSize: 12, fontFace: FONTS.zh, color: COLORS.text,
      valign: 'top'
    });
  });

  addPageBadge(slide);
  return slide;
}

// ========== APPENDIX PAGES ==========
function createAppendixPage(appendixNum, title, items) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: COLORS.secondary }
  });
  slide.addText(`附录${appendixNum}  ${title}`, {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  items.forEach((item, i) => {
    const y = 1.1 + i * 1.1;
    slide.addShape('roundRect', {
      x: 0.5, y: y, w: 9, h: 1.0,
      fill: { color: COLORS.white },
      shadow: makeShadow(),
      rectRadius: 0.05
    });
    slide.addShape('rect', {
      x: 0.5, y: y, w: 0.1, h: 1.0,
      fill: { color: COLORS.primary }
    });
    slide.addText(item.title, {
      x: 0.75, y: y + 0.1, w: 8.5, h: 0.35,
      fontSize: 13, fontFace: FONTS.zh, color: COLORS.primary,
      bold: true
    });
    slide.addText(item.desc, {
      x: 0.75, y: y + 0.45, w: 8.5, h: 0.5,
      fontSize: 11, fontFace: FONTS.zh, color: COLORS.text
    });
  });

  addPageBadge(slide);
  return slide;
}

function createAppendixDetailPage(appendixNum, title, items) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: COLORS.secondary }
  });
  slide.addText(`附录${appendixNum}  ${title}`, {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  // Table header
  slide.addShape('rect', {
    x: 0.5, y: 1.1, w: 9, h: 0.5,
    fill: { color: COLORS.primary }
  });
  slide.addText('项目', {
    x: 0.6, y: 1.15, w: 2, h: 0.4,
    fontSize: 12, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });
  slide.addText('说明', {
    x: 2.7, y: 1.15, w: 6.6, h: 0.4,
    fontSize: 12, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  items.forEach((item, i) => {
    const y = 1.65 + i * 0.7;
    const bgColor = i % 2 === 0 ? COLORS.white : COLORS.light;
    slide.addShape('rect', {
      x: 0.5, y: y, w: 9, h: 0.65,
      fill: { color: bgColor }
    });
    slide.addText(item.title, {
      x: 0.6, y: y + 0.1, w: 2, h: 0.45,
      fontSize: 11, fontFace: FONTS.zh, color: COLORS.text,
      bold: true
    });
    slide.addText(item.desc, {
      x: 2.7, y: y + 0.1, w: 6.6, h: 0.45,
      fontSize: 11, fontFace: FONTS.zh, color: COLORS.text
    });
  });

  addPageBadge(slide);
  return slide;
}

// ========== CLOSING PAGE ==========
function createClosingPage() {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.primary };

  slide.addText('核心收获', {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  const summaryPoints = [
    '客户知识地图是独一无二的资产，需要系统化萃取',
    '知识传承的核心是"判断力"而非"静态信息"',
    '分享知识不会让你可有可无，反而让你更强大',
    'AI是工具，人类的判断力才是核心价值',
    '一张能被复制的地图，才是体面的告别'
  ];

  summaryPoints.forEach((point, i) => {
    slide.addShape('roundRect', {
      x: 0.8, y: 1.2 + i * 0.8, w: 8.4, h: 0.7,
      fill: { color: COLORS.white, transparency: 85 }
    });
    slide.addText('✓  ' + point, {
      x: 1.0, y: 1.3 + i * 0.8, w: 8, h: 0.5,
      fontSize: 15, fontFace: FONTS.zh, color: COLORS.white
    });
  });

  slide.addText('罗宏伟', {
    x: 0.5, y: 5.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: FONTS.zh, color: COLORS.white,
    transparency: 40
  });

  addPageBadge(slide);
  return slide;
}

// ========== BUILD PRESENTATION ==========

// 1. Cover
createCover();

// 2. TOC
createTOC();

// 3. PART 1 intro
createPartPage('01', '你不是在维护关系\n你是在画一张没人复制过的地图', '第1-16章：客户知识地图的绘制与管理');

// ========== CHAPTER 1 ==========
createChapterHeader(1, '你手里握的不是客户关系，是一张没人复制过的地图', '公司只是"租用"了客户经理脑中的手绘图');
createChapterContent(1, '你手里握的不是客户关系，是一张没人复制过的地图', [
  '每个客户经理脑海中都有一张独特的"手绘图"，这是公司无法用CRM系统替代的资产',
  '这张图里记录着：谁和谁有矛盾、谁真正说了算、钱什么时候能动',
  '公司支付工资购买的是这张图的使用权，而不是所有权',
  '当你离职时，这张图跟你走，公司只剩下一份冰冷的通讯录'
]);
createChapterContent(1, '客户关系是一张力量博弈的地图', [
  '客户内部不是铁板一块，不同部门、不同层级之间存在微妙的权力博弈',
  '你需要看清：谁是推动者、谁是阻力、谁在观望',
  '这张地图能告诉你：在什么时机、用什么方式推动一件事最有效',
  '理解力量博弈，才能找到真正的突破口'
]);
createQuoteSlide(1, '你手里握的不是客户关系，是一张没人复制过的地图', '真正的客户知识，不是通讯录，而是一张活的地图', '地图会随着关系变化而变化，需要持续更新和维护');

// ========== CHAPTER 2 ==========
createChapterHeader(2, '组织留错了证据', '合同/邮件只是"痕迹"，不是"原因"');
createChapterContent(2, '组织留错了证据', [
  '我们习惯于记录"是什么"（合同、邮件、报价单），却忽略了"为什么"',
  '"为什么"才是真正有价值的信息：为什么客户选择我们？为什么这个决策被推迟？',
  '组织系统只给"可量化的痕迹"留了位置，没给"判断和推理"留位置',
  '结果是：后来者看到了一堆数据，却不知道当时发生了什么'
]);
createChapterContent(2, '大多数组织只做了免费的那一半', [
  '记录硬件投入（系统、流程）是免费的，企业愿意做',
  '记录软件投入（判断、推理、经验）是收费的，企业不愿意做',
  '但真正区分优秀客户经理和普通客户经理的，是那些"软件"',
  '组织需要建立机制，鼓励客户经理记录"判断"而不是只记录"事实"'
]);
createQuoteSlide(2, '组织留错了证据', '记录什么，比怎么记录更重要', '在设计知识管理系统时，首先要问：什么信息能帮助后来者做出好的判断？');

// ========== CHAPTER 3 ==========
createChapterHeader(3, '客户的生意逻辑，才是知识地图的地基', '不懂客户怎么赚钱，联系人信息只是电话本');
createChapterContent(3, '客户的生意逻辑，才是知识地图的地基', [
  '如果你不知道客户怎么赚钱，你就没有资格和客户对话',
  '生意逻辑至少三层：收入来源（钱从哪来）、成本结构（钱花到哪去）、核心焦虑（什么让老板睡不着）',
  '理解生意逻辑，才能判断：客户真正的痛点是什么？我们的方案能解决吗？',
  '生意逻辑需要定期重新校准，市场环境在变，客户的生意也在变'
]);
createTwoColumnContent(3, '客户的生意逻辑，才是知识地图的地基',
  '收入来源分析', [
    '主要收入来源是什么？',
    '收入增长靠什么驱动？',
    '哪些产品/服务贡献最大利润？',
    '大客户占比多少？'
  ],
  '成本结构分析', [
    '主要成本项是什么？',
    '哪些成本在上升？',
    '成本控制的关键点在哪？',
    '预算周期是怎样的？'
  ]
);
createQuoteSlide(3, '客户的生意逻辑，才是知识地图的地基', '不懂生意的客户经理，永远只是传话筒', '每一次拜访前，问自己：我知道这个客户的生意最近发生了什么变化吗？');

// ========== CHAPTER 4 ==========
createChapterHeader(4, '甲方内部，没有人只代表自己', '每个人以"岗位身份"表态，不是"个人身份"');
createChapterContent(4, '甲方内部，没有人只代表自己', [
  '"技术上没问题" ≠ "我会推动这件事"',
  '当一个人说"我同意"时，他是以个人身份还是岗位身份表态？这两者可能完全不同',
  '你需要画进地图的是：这件事对这个人的岗位是好处还是麻烦？',
  '理解了岗位立场，你就能预判这个人的行为'
]);
createTwoColumnContent(4, '甲方内部，没有人只代表自己',
  '个人身份 vs 岗位身份', [
    '个人身份：个人的偏好、性格、私心',
    '岗位身份：职位赋予的责任、KPI、立场',
    '通常岗位身份的影响力更大',
    '需要同时考虑两者才能判断行为'
  ],
  '识别岗位立场的方法', [
    '了解这个岗位的KPI是什么',
    '这件事对完成KPI有帮助还是有阻碍',
    '推动这件事，谁会受益谁会受损',
    '谁是这件事的第一责任人'
  ]
);
createQuoteSlide(4, '甲方内部，没有人只代表自己', '职位背后是立场，立场背后是利益', '永远不要把"个人态度"当作"岗位态度"，两者可能截然不同');

// ========== CHAPTER 5 ==========
createChapterHeader(5, '分清楚谁是门，谁只是窗', '门：推动决策的人 | 窗：提供信息的人');
createThreeColumnContent(5, '分清楚谁是门，谁只是窗', [
  {
    icon: '🚪',
    title: '门：决策者',
    points: ['真正能推动项目的人', '有预算决定权', '能影响最终结果', '需要重点维护关系']
  },
  {
    icon: '🪟',
    title: '窗：信息源',
    points: ['提供信息但无决定权', '了解内部流程', '能帮助你了解情况', '但不能推动决策']
  },
  {
    icon: '🔑',
    title: '守门人',
    points: ['掌握信息流通关键节点', '能帮你引荐到决策者', '也能阻断你接近决策者', '需要识别和建立关系']
  }
]);
createChapterContent(5, '分清楚谁是门，谁只是窗', [
  '识别关键决策人（门）：不是头衔最高的人，而是真正能推动这件事的人',
  '区分信息提供者（窗）：能给你信息，但不能做决定，不要把希望寄托在他们身上',
  '找到守门人：掌握信息流通关键节点的人，他能帮你接近决策者，也能阻断你',
  '对不同类型的人，采用不同的沟通策略'
]);
createQuoteSlide(5, '分清楚谁是门，谁只是窗', '找对人，比做对事更重要', '在开始任何项目之前，先问自己：我知道真正的决策者是谁吗？');

// ========== CHAPTER 6 ==========
createChapterHeader(6, '钱什么时候能动，比钱有多少更重要', '预算节奏判断比预算金额更关键');
createChapterContent(6, '钱什么时候能动，比钱有多少更重要', [
  '预算金额大不代表能花，预算金额小不代表不能花',
  '关键判断：钱什么时候能动？这个时机比金额更重要',
  '有些客户预算充足但审批流程漫长，有些客户预算有限但决策迅速',
  '了解预算节奏，才能制定正确的跟进策略'
]);
createTwoColumnContent(6, '钱什么时候能动，比钱有多少更重要',
  '国企预算节奏', [
    '年初制定，年中调整，年底冲刺',
    'Q4是花钱高峰期',
    '审批流程长，需要提前布局',
    '关系维护重要，流程合规同样重要'
  ],
  '民企预算节奏', [
    '相对灵活，以实际需求为导向',
    '决策周期短，响应速度快',
    '老板一句话可能顶几个月的流程',
    '需要关键决策人的认可'
  ]
);
createChapterContent(6, '钱什么时候能动，比钱有多少更重要', [
  '预算归属也会变化：年初定的预算，可能因为业务调整而改变用途',
  '同时关注预算来源部门和归属部门，两者可能不同',
  '建立预算变化的预警机制，及时调整策略',
  '预算信息需要定期更新，保持"信息新鲜度"'
]);
createQuoteSlide(6, '钱什么时候能动，比钱有多少更重要', '时机比金额重要，节奏比规模重要', '了解客户的预算节奏，比了解预算金额更能帮你赢得订单');

// ========== CHAPTER 7 ==========
createChapterHeader(7, '客户没说的，比说出来的更值钱', '需求是客户翻译过的版本，不是问题本身');
createChapterContent(7, '客户没说的，比说出来的更值钱', [
  '客户说"我们希望提升效率"，这不是问题本身，是客户对问题的翻译',
  '你需要追问：现在具体是怎么做的？每一步卡在哪里？',
  '行为和流程里藏着真正的困境，只有观察和追问才能挖出来',
  '好的倾听者不是听客户说了什么，而是听客户没说什么'
]);
createProcessSlide(7, '客户没说的，比说出来的更值钱', [
  { title: '表象', desc: '客户表达的期望和需求' },
  { title: '追问', desc: '现在具体是怎么做的？' },
  { title: '挖掘', desc: '每一步卡在哪里？为什么？' },
  { title: '本质', desc: '真正的问题和机会' }
]);
createQuoteSlide(7, '客户没说的，比说出来的更值钱', '倾听弦外之音，挖掘真实痛点', '培训销售人员学会追问，比培训他们学会演示更重要');

// ========== CHAPTER 8 ==========
createChapterHeader(8, '萃取客户智识，靠的不是问卷，是拆解因果链', '用"上一次具体发生了什么"代替"一般来说"');
createChapterContent(8, '萃取客户智识，靠的不是问卷，是拆解因果链', [
  '问卷问的是"一般来说你会怎么做"，答案是抽象的、模糊的',
  '访谈应该问"上一次具体发生了什么"，答案是具体的、鲜活的',
  '好的访谈让对方愣住说出"我还真没这么想过"——这说明你在帮他重新思考',
  '萃取的是"判断逻辑"，不是"行为描述"'
]);
createTwoColumnContent(8, '萃取客户智识，靠的不是问卷，是拆解因果链',
  '错误的问法', [
    '"你们一般怎么选择供应商？"',
    '"您对目前的供应商满意吗？"',
    '"您希望我们提供什么服务？"',
    '"还有什么需要我们改进的？"'
  ],
  '正确的问法', [
    '"上一次你们选择供应商是谁提出来的？"',
    '"最近一次不满意的经历是什么时候？"',
    '"您上次遇到问题是怎么解决的？"',
    '"如果我们做一件事，什么信号告诉您成功了？"'
  ]
);
createQuoteSlide(8, '萃取客户智识，靠的不是问卷，是拆解因果链', '好的访谈是让对方重新思考自己的过程', '访谈的目标不是收集答案，而是帮助对方发现自己的判断逻辑');

// ========== CHAPTER 9 ==========
createChapterHeader(9, '关系不是印象，是一条可以回放的历史', '用时间线替代印象');
createChapterContent(9, '关系不是印象，是一条可以回放的历史', [
  '我们习惯用"印象"记录关系：这个客户很好说话，那个客户比较难缠',
  '印象会骗人，时间线不会骗人',
  '记录三类关键事件：承诺/表态（对方说了什么）、兑现情况（执行结果如何）、环境变化（什么时候发生了什么）',
  '时间线能看见印象看不见的趋势：关系在变好还是变坏？'
]);
createProcessSlide(9, '关系不是印象，是一条可以回放的历史', [
  { title: '承诺记录', desc: '记录客户说过的话、许过的诺' },
  { title: '兑现追踪', desc: '追踪承诺的执行情况和结果' },
  { title: '环境标注', desc: '记录关键的外部环境变化' },
  { title: '趋势分析', desc: '从时间线中发现关系趋势' }
]);
createQuoteSlide(9, '关系不是印象，是一条可以回放的历史', '印象会骗人，时间线不会', '建立客户关系时间线，让每一次拜访都有记录、都有依据');

// ========== CHAPTER 10 ==========
createChapterHeader(10, '谁负责，不等于谁真的知道', '责任人矩阵管"谁该出面"，管不住"谁真了解情况"');
createChapterContent(10, '谁负责，不等于谁真的知道', [
  '组织架构图告诉你谁该出面，不告诉你谁真正了解情况',
  '给矩阵加一个"信息新鲜度"维度：每个人对项目现状的了解程度',
  '超过阈值（比如两周没更新信息）自动提醒重新同步',
  '避免出现"责任人说不清情况"的信息断层'
]);
createTwoColumnContent(10, '谁负责，不等于谁真的知道',
  '传统责任人矩阵', [
    '只关注"谁该负责"',
    '不关注"谁真了解情况"',
    '可能导致信息不对称',
    '责任人在"被蒙蔽"状态下做决定'
  ],
  '信息新鲜度矩阵', [
    '增加"信息更新时间"维度',
    '定期强制同步信息',
    '确保责任人掌握最新情况',
    '减少基于过时信息的决策'
  ]
);
createQuoteSlide(10, '谁负责，不等于谁真的知道', '组织架构图不等于信息流图', '定期检查：每个责任人是否真的知道当前项目进展？');

// ========== CHAPTER 11 ==========
createChapterHeader(11, '交接不是移交文件，是移交判断力', '交接核心是"当时我怎么想的"推理方式');
createChapterContent(11, '交接不是移交文件，是移交判断力', [
  '传统的交接是：客户资料、合同文档、联系人表格',
  '这样的交接只传递了"静态信息"，没有传递"判断力"',
  '真正的交接核心是：当时我怎么想的？为什么做出那个判断？',
  '如果继任者只知道你做了什么，不知道你怎么想的，他就无法独立做判断'
]);
createThreeColumnContent(11, '交接不是移交文件，是移交判断力', [
  {
    icon: '📄',
    title: '静态信息',
    points: ['客户基本资料', '合同文档', '联系人表格', '历史记录']
  },
  {
    icon: '🧠',
    title: '判断力信息',
    points: ['当时的判断逻辑', '决策背后的推理', '风险识别方法', '关系维护策略']
  },
  {
    icon: '🎭',
    title: '情景推演',
    points: ['假设特定情况如何应对', '可能出现的问题及预案', '需要特别注意的信号', '关键时刻的建议']
  }
]);
createQuoteSlide(11, '交接不是移交文件，是移交判断力', '交出去的是文件，留下来的是判断力', '在交接时问自己：如果继任者遇到同样的情况，他知道该怎么处理吗？');

// ========== CHAPTER 12 ==========
createChapterHeader(12, '知识要活在今天的工作里', '需要"工作卡"而非厚重档案');
createChapterContent(12, '知识要活在今天的工作里', [
  '传统的知识管理是：厚厚的客户档案，搬家时带不走，工作时用不上',
  '需要"工作卡"：按场景组织，而非按客户组织',
  '档案是给管理者看的，工作卡是给一线人员用的',
  '工作卡要在正确的瞬间出现在正确的地方——在需要的时候自动浮现'
]);
createTwoColumnContent(12, '知识要活在今天的工作里',
  '档案式管理', [
    '按客户/组织维度整理',
    '信息全面但查找困难',
    '需要主动翻阅',
    '与实际工作场景脱节'
  ],
  '工作卡式管理', [
    '按工作场景维度整理',
    '关键信息一目了然',
    '在需要时自动推送',
    '与实际工作流程融合'
  ]
);
createQuoteSlide(12, '知识要活在今天的工作里', '档案是过去，工作卡是现在', '知识管理的目标不是"保存"，而是"在使用时能派上用场"');

// ========== CHAPTER 13 ==========
createChapterHeader(13, '客户成功不该是一个人的KPI', '激励结构在鼓励知识囤积');
createChapterContent(13, '客户成功不该是一个人的KPI', [
  '当前的激励结构在鼓励知识囤积：分享了万一被别人超越了怎么办？',
  '从个人考核改为团队账户、小组整体考核',
  '知识共享应作为明确的考核项，与薪酬挂钩',
  '当知识共享成为"加分项"而非"减分项"，文化才会真正改变'
]);
createProcessSlide(13, '客户成功不该是一个人的KPI', [
  { title: '问题识别', desc: '个人KPI导致知识囤积' },
  { title: '方案设计', desc: '改为团队/小组整体考核' },
  { title: '制度建设', desc: '知识共享纳入考核项' },
  { title: '文化转变', desc: '从"藏"到"分享"的转变' }
]);
createQuoteSlide(13, '客户成功不该是一个人的KPI', '一个人守不住的地图，一群人才能守住', '优秀的团队不是一群各自为战的高手，而是一个知识充分共享的集体');

// ========== CHAPTER 14 ==========
createChapterHeader(14, '签单是销售的终点，是你工作的起点', '两种角色在签单那一刻站在相反的心理位置');
createChapterContent(14, '签单是销售的终点，是你工作的起点', [
  '签单那一刻，销售在想：终于拿下了！',
  '签单那一刻，客户经理在想：真正的服务才刚刚开始',
  '销售的口头承诺要书面化：签单前把销售承诺整理成文档，交接到客户成功团队',
  '客户经理提前参与签单前最后一轮谈判：了解销售承诺了什么，避免踩坑'
]);
createCaseSlide(14, '签单是销售的终点，是你工作的起点',
  '典型案例：承诺过度的后果',
  '某客户签单前，销售承诺了免费定制开发。签单后客户成功团队接手，发现这个定制开发需要3个人月工作量，公司根本没有这笔预算。\n\n客户不满，要求退款。销售已经拿到提成，损失由公司承担。\n\n根源：销售承诺时没有考虑执行可行性，客户成功团队没有提前介入。',
  [
    '签约前客户成功介入评审',
    '销售承诺书面化并签字',
    '明确哪些可以做，哪些有条件',
    '建立承诺冲突升级机制'
  ]
);
createQuoteSlide(14, '签单是销售的终点，是你工作的起点', '签单不是结束，是开始', '客户成功团队应该参与签单前的最后谈判');

// ========== CHAPTER 15 ==========
createChapterHeader(15, '领导要的是提前知道的风险', '风险信号是领先指标，满意度是滞后指标');
createChapterContent(15, '领导要的是提前知道的风险', [
  '满意度是滞后指标：客户说不满意时，损失已经发生了',
  '风险信号是领先指标：提前发现苗头，才能提前干预',
  '管理层要能接住"我不确定"的信号：下属敢汇报不确定的事，才是健康的管理氛围',
  '汇报模板留一栏"我有点担心，但还说不清楚为什么"——这可能是最早的风险信号'
]);
createTwoColumnContent(15, '领导要的是提前知道的风险',
  '滞后指标（已发生）', [
    '客户满意度评分下降',
    '续约率降低',
    '客户投诉增加',
    '收入流失已经发生'
  ],
  '领先指标（早期信号）', [
    '关键人长时间未回应',
    '会议频繁被取消',
    '对方态度突然变化',
    '预算讨论突然停滞'
  ]
);
createQuoteSlide(15, '领导要的是提前知道的风险', '提前预警比事后解释更专业', '培养团队识别早期风险信号的能力，比等出问题再救火更有效率');

// ========== CHAPTER 16 ==========
createChapterHeader(16, '客户健康度不是感觉，是可以打出来的分数', '四维度打分：沟通、承诺、决策链、外部环境');
createThreeColumnContent(16, '客户健康度不是感觉，是可以打出来的分数', [
  {
    icon: '📊',
    title: '沟通频率',
    points: ['月度互动次数', '响应速度', '沟通深度', '主动联系比例']
  },
  {
    icon: '✓',
    title: '承诺兑现率',
    points: ['历史承诺完成情况', '承诺与兑现的差距', '未兑现承诺的原因', '补救措施执行情况']
  },
  {
    icon: '🔗',
    title: '决策链稳定性',
    points: ['关键决策人变化', '组织架构调整', '新增关键联系人', '关系紧密度变化']
  },
  {
    icon: '⚠️',
    title: '外部环境风险',
    points: ['客户所在行业变化', '竞争对手动态', '政策法规影响', '市场环境变化']
  }
]);
createChapterContent(16, '客户健康度不是感觉，是可以打出来的分数', [
  '趋势比绝对分数更重要：连续下降比一次低分更值得警惕',
  '交叉核对：两人各自独立打分对比，差异大说明有盲区',
  '打分是为了行动，不是为了考核：分数低就要采取行动',
  '建议每周更新一次关键客户打分，月度审视整体健康度'
]);
createQuoteSlide(16, '客户健康度不是感觉，是可以打出来的分数', '用数据说话，用趋势判断，用行动改善', '健康度打分不是为了给客户排名，而是为了及时发现问题、采取行动');

// ========== PART 2 ==========
createPartPage('02', '把知识交出去\n才是真正的强大', '第17-22章：知识传承与组织进化');

// ========== CHAPTER 17 ==========
createChapterHeader(17, '怕被替代，才是你还没真正强大的证据', '知识囤积是脆弱的安全感');
createChapterContent(17, '怕被替代，才是你还没真正强大的证据', [
  '知识囤积是脆弱的安全感：我觉得自己重要，因为我知道别人不知道的事',
  '但这种"重要性"随时可能被打破：有人离职了、有人被挖了、信息泄露了',
  '真正的能力是"持续画新地图"：不是守着旧地图，而是能不断画出新地图',
  '分享旧地图和创造新地图可以同时进行，越分享越有精力创造新的'
]);
createQuoteSlide(17, '怕被替代，才是你还没真正强大的证据', '越分享，越强大', '当你不再担心被替代时，你才真正强大了');

// ========== CHAPTER 18 ==========
createChapterHeader(18, '把知识交出去，不会让你可有可无', '价值从"拥有独家信息"转移到"判断方法源头"');
createChapterContent(18, '把知识交出去，不会让你可有可无', [
  '在信息时代，价值从"拥有独家信息"转移到"判断方法源头"',
  '你拥有的信息会过时，但你的判断方法会不断进化',
  '分享知识让你变成团队方法论的核心：不是"你知道的比别人多"，而是"你思考问题的方式值得学习"',
  '坦率本身也是珍贵的知识：愿意分享失败经验的人，更值得信任'
]);
createCaseSlide(18, '把知识交出去，不会让你可有可无',
  '一个人的价值转变',
  '客户经理小王从来不分享自己的客户关系经验，怕被别人超越。\n\n三年后，公司来了一位新客户经理小李，成长很快。公司发现小王的客户关系维护能力已经过时，而小王也没有新的方法论输出。\n\n小王开始担心自己的位置。但其实，如果小王早一点分享，他完全可以成为团队的方法论核心。',
  [
    '分享不会削弱你的价值',
    '方法论比信息更有价值',
    '成为团队的思考方式标杆',
    '越分享越能发现自己的盲区'
  ]
);
createQuoteSlide(18, '把知识交出去，不会让你可有可无', '你的不可替代性在于判断力，不在于信息', '成为"判断方法源头"比成为"信息垄断者"更有价值');

// ========== CHAPTER 19 ==========
createChapterHeader(19, '这份工作留下的，不是签下的单子', '唯一不随时间冲淡的是"可复制的判断方法"');
createChapterContent(19, '这份工作留下的，不是签下的单子', [
  '你签过的单子，几年后不会有任何人记得',
  '唯一不随时间冲淡的是：你留下的可复制的判断方法',
  '日常工作节奏让人无暇提炼方法论：这正是问题所在',
  '定期组织复盘活动是契机：不是等有空才复盘，而是把复盘变成工作的一部分'
]);
createProcessSlide(19, '这份工作留下的，不是签下的单子', [
  { title: '日常忙', desc: '工作节奏快，无暇思考' },
  { title: '定期复盘', desc: '固定时间复盘项目' },
  { title: '提炼方法', desc: '从具体案例中抽象原则' },
  { title: '传承复制', desc: '方法论可被他人使用' }
]);
createQuoteSlide(19, '这份工作留下的，不是签下的单子', '留下的应该是方法，不是痕迹', '每完成一个项目，问自己：这次学到了什么可以复用的经验？');

// ========== CHAPTER 20 ==========
createChapterHeader(20, '淘汰的不是你，是靠记忆吃饭的那批人', '行业结构性分化：个人记忆→组织能力');
createChapterContent(20, '淘汰的不是你，是靠记忆吃饭的那批人', [
  '行业正在经历结构性分化：从"个人记忆"到"组织能力"的转变',
  '市场在倒逼组织改变：客户越来越需要系统化的服务，而不是依赖个人',
  '愿意先转变的人占据有利位置：不是被淘汰，而是升级',
  '个人记忆是有保质期的，组织能力是可以持续积累的'
]);
createTwoColumnContent(20, '淘汰的不是你，是靠记忆吃饭的那批人',
  '个人记忆模式（将被淘汰）', [
    '信息存在个人脑中',
    '依赖个人经验和判断',
    '人员流动导致知识流失',
    '无法规模化复制'
  ],
  '组织能力模式（未来趋势）', [
    '信息存在组织系统中',
    '依赖流程和方法论',
    '知识不随人员流动而流失',
    '可以规模化复制和传承'
  ]
);
createQuoteSlide(20, '淘汰的不是你，是靠记忆吃饭的那批人', '趋势不可逆，顺势者昌', '不是AI要取代你，是会用AI的组织要取代不会用AI的个人');

// ========== CHAPTER 21 ==========
createChapterHeader(21, 'AI能记住所有对话，却替不了那张地图', 'AI能记录"发生了什么"，判断不了"意味着什么"');
createChapterContent(21, 'AI能记住所有对话，却替不了那张地图', [
  'AI能记录"发生了什么"：每一次会议、每一封邮件、每一个电话，AI都能记住',
  'AI判断不了"意味着什么"：这个信息对客户关系意味着什么？需要采取什么行动？',
  '工具和判断力是互补关系：AI负责记录和筛选，人负责判断和决策',
  'AI适合做筛选，人做最终判断：让AI帮你找到规律，最终决定要人来做'
]);
createThreeColumnContent(21, 'AI能记住所有对话，却替不了那张地图', [
  {
    icon: '🤖',
    title: 'AI擅长',
    points: ['记录海量信息', '快速检索数据', '识别模式和规律', '处理重复性任务']
  },
  {
    icon: '🧠',
    title: '人类擅长',
    points: ['理解情感和动机', '做价值判断', '处理不确定性', '创造新思路']
  },
  {
    icon: '🤝',
    title: '人机协作',
    points: ['AI筛选，人类判断', 'AI记录，人类决策', 'AI分析，人类验证', 'AI建议，人类选择']
  }
]);
createQuoteSlide(21, 'AI能记住所有对话，却替不了那张地图', 'AI是镜子，不是地图', 'AI能告诉你发生了什么，但为什么要这样做，只有你能决定');

// ========== CHAPTER 22 ==========
createChapterHeader(22, '一张能被复制的地图，才是体面的告别', '地图要能被复制才有价值');
createChapterContent(22, '一张能被复制的地图，才是体面的告别', [
  '地图要能被复制才有价值：你走了，这张图还能被继续使用，才是真正的贡献',
  '追求副产品的人往往两手空空：只想着通过关系拿好处，最后什么都没留下',
  '追求地图本身的人，副产品反而会找上门：当你真正帮助客户成功，成功会回报你',
  '体面的告别是：你走了，但客户还惦记着你，因为你留下的东西还在发挥作用'
]);
createQuoteSlide(22, '一张能被复制的地图，才是体面的告别', '好的告别，是留下一张可以继续使用的地图', '评判一份工作的价值，不是看你离开了什么，而是看你留下了什么');

// ========== SPECIAL SECTIONS ==========
createSpecialPage(1, '月度健康检查会议', [
  '月度健康检查会议不是念PPT，是重点讨论',
  '交叉校验判断：不同人独立打分，对比差异，讨论原因',
  '鼓励质疑判断的文化：任何判断都可以被质疑，质疑是为了更准确',
  '形成行动决议：每次会议要有明确的待办事项和负责人'
]);
createSpecialDetailPage(1, '月度健康检查会议', [
  { title: '会议准备', desc: '提前更新客户健康度打分，准备关键事件清单' },
  { title: '打分交叉校验', desc: '两人独立打分，对比差异，还原判断依据' },
  { title: '风险讨论', desc: '重点讨论打分下降或异常的情况' },
  { title: '行动决议', desc: '明确下一步行动、负责人、完成时间' }
]);

createSpecialPage(2, '两份不一样的地图，该信谁的', [
  '人际感受vs行为数据：有时候感觉对，有时候数据对，需要交叉验证',
  '把两份判断还原成具体证据：感受基于什么行为？数据反映了什么事实？',
  '定期对照防止信息不对称：每月对比一次判断和实际结果的差异',
  '没有绝对的对与错，关键是理解差异的来源'
]);
createSpecialDetailPage(2, '两份不一样的地图，该信谁的', [
  { title: '人际感受', desc: '基于直接互动的印象、关系感知、信任度判断' },
  { title: '行为数据', desc: '基于实际行为的数据：响应速度、互动频率、承诺兑现' },
  { title: '对照分析', desc: '找出感受和数据不一致的地方，分析原因' },
  { title: '融合判断', desc: '结合两者做出最终判断，而非只看一方面' }
]);

createSpecialPage(3, '新客户经理第一周该怎么用这张地图', [
  '先验证地图再使用：不要假设前任的判断都是对的',
  '用"确认了解"代替"展示了解"：不要说"我已经了解情况了"，而是说"我想确认一下我的理解对不对"',
  '验证过程也是对前任地图的质量检验：发现错误和遗漏是正常的',
  '建立自己的判断：不要完全依赖前任的判断，逐步形成自己的理解'
]);
createSpecialDetailPage(3, '新客户经理第一周该怎么用这张地图', [
  { title: '第一天', desc: '阅读前任留下的地图文档，标注疑问点' },
  { title: '第二-三天', desc: '约见关键联系人，验证和补充信息' },
  { title: '第四-五天', desc: '与前任进行情景推演，假设各种情况讨论应对方案' },
  { title: '第一周末', desc: '整理自己的版本，与团队讨论确认' }
]);

// ========== APPENDICES ==========
createAppendixPage('一', '客户知识地图模板', [
  { title: '客户背景', desc: '公司规模、行业、发展阶段、股权结构' },
  { title: '决策链图谱', desc: '关键人物、职位、影响力、态度评估' },
  { title: '生意逻辑分析', desc: '收入来源、成本结构、核心压力' },
  { title: '历史关系时间线', desc: '承诺兑现、关键事件、关系变化' },
  { title: '当前项目状态', desc: '进度、风险、机会点、待办事项' },
  { title: '后续行动建议', desc: '下一步工作方向与注意事项' }
]);
createAppendixDetailPage('一', '客户知识地图模板（详细版）', [
  { title: '基本信息', desc: '公司名称、成立时间、规模、行业、上市/非上市' },
  { title: '股权结构', desc: '主要股东、实际控制人、关联公司' },
  { title: '组织架构', desc: '主要部门、关键负责人、汇报关系' },
  { title: '财务概况', desc: '年收入、利润状况、预算规模' },
  { title: '战略方向', desc: '近期战略重点、业务布局、挑战' },
  { title: '与我们合作历史', desc: '合作起始、合作内容、金额、满意度' }
]);

createAppendixPage('二', '客户智识萃取访谈模板', [
  { title: '背景问题', desc: '了解客户基本情况和行业环境' },
  { title: '流程问题', desc: '挖掘现有工作流程中的痛点' },
  { title: '决策问题', desc: '探询决策过程和关键影响因素' },
  { title: '期望问题', desc: '明确真实需求和预期效果' }
]);
createAppendixDetailPage('二', '客户智识萃取访谈模板（详细版）', [
  { title: '开场问题', desc: '"请介绍一下您这边最近的主要业务方向？" "您目前最关心的问题是什么？"' },
  { title: '流程探询', desc: '"现在这件事是怎么做的？每一步是谁负责？" "卡点在哪里？"' },
  { title: '历史回顾', desc: '"上次遇到这个问题是怎么处理的？" "结果如何？"' },
  { title: '决策探询', desc: '"这件事最终谁拍板？" "需要考虑哪些因素？"' },
  { title: '期望确认', desc: '"如果解决了，您期望的效果是什么样的？" "怎么衡量成功？"' }
]);

createAppendixPage('三', '客户交接清单', [
  { title: '静态信息', desc: '客户资料、合同文档、联系方式等' },
  { title: '判断力信息', desc: '决策逻辑、关系判断、风险认知' },
  { title: '情景推演', desc: '假设特定情况下的应对思路' }
]);
createAppendixDetailPage('三', '客户交接清单（详细版）', [
  { title: '客户基本信息', desc: '公司资料、联系人、地址等' },
  { title: '合同与财务', desc: '合同文档、付款记录、开票信息' },
  { title: '项目历史', desc: '已完成项目、当前项目、待跟进事项' },
  { title: '关系判断', desc: '我对每个关键人的判断和关系评估' },
  { title: '风险识别', desc: '我已经识别到的风险和应对考虑' },
  { title: '情景推演', desc: '如果发生X情况，我认为应该怎么处理' }
]);

createAppendixPage('四', '月度健康指标与风险打分卡', [
  { title: '沟通频率', desc: '1-10分，月度互动次数与质量评估' },
  { title: '承诺兑现率', desc: '1-10分，历史承诺完成情况' },
  { title: '决策链稳定性', desc: '1-10分，关键人员变动情况' },
  { title: '外部风险', desc: '1-10分，市场环境变化评估' }
]);
createAppendixDetailPage('四', '月度健康指标与风险打分卡（详细版）', [
  { title: '沟通频率（1-10）', desc: '9-10：每周互动；7-8：每月2-3次；5-6：每月1次；<5：超过一个月未联系' },
  { title: '承诺兑现率（1-10）', desc: '9-10：100%兑现；7-8：偶尔延期；5-6：多次延期；<5：严重滞后' },
  { title: '决策链稳定性（1-10）', desc: '9-10：无变化；7-8：轻微调整；5-6：关键人变化；<5：重大组织调整' },
  { title: '外部风险（1-10）', desc: '9-10：无影响；7-8：轻微影响；5-6：较大影响；<5：重大负面影响' },
  { title: '综合健康度', desc: '=（沟通+承诺+稳定+外部）/4，>8健康，6-8关注，<6危险' },
  { title: '趋势判断', desc: '与上月相比：↑上升、→持平、↓下降' }
]);

// Closing
createClosingPage();

// Save the presentation
const outputPath = 'D:/新课开发/工作手册/关键客户知识地图与传承/完整课程包/003-授课PPT课件/01-关键客户知识地图-授课PPT.pptx';
pptx.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`PPT created successfully: ${outputPath}`);
    console.log(`Total slides: ${currentPage}`);
  })
  .catch(err => {
    console.error('Error creating PPT:', err);
  });
