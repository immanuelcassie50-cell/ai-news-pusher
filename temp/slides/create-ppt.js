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

// Helper: Create shadow config
const makeShadow = () => ({
  type: 'outer', color: '000000',
  blur: 4, offset: 2, angle: 135, opacity: 0.1
});

// Helper: Create page number badge
function addPageBadge(slide, pageNum) {
  slide.addShape('ellipse', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: COLORS.primary }
  });
  slide.addText(String(pageNum), {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: FONTS.en, color: COLORS.white,
    align: 'center', valign: 'middle'
  });
}

// Helper: Section header bar
function addSectionHeader(slide, title, subtitle) {
  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: COLORS.primary }
  });
  slide.addText(title, {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.5, y: 0.8, w: 9, h: 0.3,
      fontSize: 14, fontFace: FONTS.zh, color: COLORS.white
    });
  }
}

// Helper: Add content box with icon-style marker
function addContentBox(slide, x, y, w, h, title, content, pageNum) {
  slide.addShape('rect', {
    x: x, y: y, w: w, h: h,
    fill: { color: COLORS.white },
    shadow: makeShadow()
  });
  if (title) {
    slide.addShape('rect', {
      x: x, y: y, w: 0.08, h: h,
      fill: { color: COLORS.primary }
    });
    slide.addText(title, {
      x: x + 0.2, y: y + 0.1, w: w - 0.3, h: 0.4,
      fontSize: 14, fontFace: FONTS.zh, color: COLORS.primary,
      bold: true
    });
  }
  slide.addText(content, {
    x: x + 0.2, y: title ? y + 0.5 : y + 0.1, w: w - 0.4, h: h - 0.6,
    fontSize: 12, fontFace: FONTS.zh, color: COLORS.text,
    valign: 'top'
  });
  addPageBadge(slide, pageNum);
}

// Helper: Quote/highlight box
function addQuoteBox(slide, x, y, w, h, quote, pageNum) {
  slide.addShape('rect', {
    x: x, y: y, w: w, h: h,
    fill: { color: COLORS.light }
  });
  slide.addShape('rect', {
    x: x, y: y, w: 0.1, h: h,
    fill: { color: COLORS.secondary }
  });
  slide.addText(quote, {
    x: x + 0.25, y: y + 0.15, w: w - 0.4, h: h - 0.3,
    fontSize: 13, fontFace: FONTS.zh, color: COLORS.secondary,
    italic: true, valign: 'middle'
  });
  addPageBadge(slide, pageNum);
}

// Helper: Icon card
function addIconCard(slide, x, y, w, h, icon, title, desc, pageNum) {
  slide.addShape('roundRect', {
    x: x, y: y, w: w, h: h,
    fill: { color: COLORS.white },
    shadow: makeShadow(),
    rectRadius: 0.08
  });
  slide.addShape('ellipse', {
    x: x + w/2 - 0.25, y: y + 0.15, w: 0.5, h: 0.5,
    fill: { color: COLORS.primary }
  });
  slide.addText(icon, {
    x: x + w/2 - 0.25, y: y + 0.15, w: 0.5, h: 0.5,
    fontSize: 16, color: COLORS.white,
    align: 'center', valign: 'middle'
  });
  slide.addText(title, {
    x: x + 0.1, y: y + 0.75, w: w - 0.2, h: 0.35,
    fontSize: 13, fontFace: FONTS.zh, color: COLORS.primary,
    bold: true, align: 'center'
  });
  slide.addText(desc, {
    x: x + 0.1, y: y + 1.1, w: w - 0.2, h: h - 1.3,
    fontSize: 11, fontFace: FONTS.zh, color: COLORS.text,
    align: 'center', valign: 'top'
  });
  addPageBadge(slide, pageNum);
}

// Helper: Three column layout
function addThreeColumn(slide, items, pageNum) {
  const colW = 2.9;
  const startX = 0.55;
  const gap = 0.2;
  items.forEach((item, i) => {
    addIconCard(slide, startX + i * (colW + gap), 1.4, colW, 3.5, item.icon, item.title, item.desc, pageNum);
  });
}

// ============ SLIDE CREATION ============

let currentPage = 0;

// ========== COVER ==========
function createCover() {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  // Top accent bar
  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.15,
    fill: { color: COLORS.primary }
  });

  // Left decorative block
  slide.addShape('rect', {
    x: 0, y: 0.15, w: 0.4, h: 5.475,
    fill: { color: COLORS.secondary }
  });

  // Main title area
  slide.addShape('rect', {
    x: 0.4, y: 1.5, w: 9.2, h: 2.8,
    fill: { color: COLORS.white },
    shadow: makeShadow()
  });

  // Red accent on title box
  slide.addShape('rect', {
    x: 0.4, y: 1.5, w: 0.12, h: 2.8,
    fill: { color: COLORS.primary }
  });

  // Title
  slide.addText('关键客户知识地图与知识传承', {
    x: 0.7, y: 1.7, w: 8.6, h: 1,
    fontSize: 36, fontFace: FONTS.zh, color: COLORS.primary,
    bold: true
  });

  // Subtitle
  slide.addText('客户经理与客户成功团队的知识萃取与传承方法论', {
    x: 0.7, y: 2.7, w: 8.6, h: 0.6,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.secondary
  });

  // Author
  slide.addText('罗宏伟', {
    x: 0.7, y: 3.5, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: FONTS.zh, color: COLORS.accent
  });

  // Bottom info
  slide.addText('120-160页  授课PPT', {
    x: 0.7, y: 4.8, w: 4, h: 0.4,
    fontSize: 12, fontFace: FONTS.zh, color: COLORS.accent
  });

  currentPage++;
  return slide;
}

// ========== TABLE OF CONTENTS ==========
function createTOC() {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };
  addSectionHeader(slide, '目录', 'CONTENTS');

  const parts = [
    { num: 'PART 1', title: '你不是在维护关系，你是在画一张没人复制过的地图', pages: '第1-16章' },
    { num: 'PART 2', title: '把知识交出去，才是真正的强大', pages: '第17-22章' },
    { num: '特别篇', title: '实践应用与方法论', pages: '3个特别篇' },
    { num: '附录', title: '工具模板与打分卡', pages: '4个附录' }
  ];

  parts.forEach((part, i) => {
    const y = 1.5 + i * 0.95;
    slide.addShape('roundRect', {
      x: 0.5, y: y, w: 9, h: 0.85,
      fill: { color: COLORS.white },
      shadow: makeShadow(),
      rectRadius: 0.05
    });
    slide.addShape('rect', {
      x: 0.5, y: y, w: 1.2, h: 0.85,
      fill: { color: i === 0 ? COLORS.primary : (i === 1 ? COLORS.secondary : COLORS.accent) }
    });
    slide.addText(part.num, {
      x: 0.5, y: y, w: 1.2, h: 0.85,
      fontSize: 14, fontFace: FONTS.en, color: COLORS.white,
      bold: true, align: 'center', valign: 'middle'
    });
    slide.addText(part.title, {
      x: 1.85, y: y + 0.15, w: 6.5, h: 0.35,
      fontSize: 14, fontFace: FONTS.zh, color: COLORS.text,
      bold: true
    });
    slide.addText(part.pages, {
      x: 1.85, y: y + 0.5, w: 6.5, h: 0.25,
      fontSize: 11, fontFace: FONTS.zh, color: COLORS.accent
    });
  });

  addPageBadge(slide, currentPage + 1);
  currentPage++;
  return slide;
}

// ========== PART PAGES ==========
function createPartPage(partNum, title, subtitle, startPage) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.primary };

  // Large part number
  slide.addText(partNum, {
    x: 0.5, y: 0.8, w: 3, h: 2,
    fontSize: 120, fontFace: FONTS.en, color: COLORS.white,
    bold: true, transparency: 30
  });

  // Part label
  slide.addText('PART', {
    x: 0.5, y: 0.5, w: 2, h: 0.5,
    fontSize: 18, fontFace: FONTS.en, color: COLORS.white,
    transparency: 50
  });

  // Title
  slide.addText(title, {
    x: 0.5, y: 2.5, w: 9, h: 1.2,
    fontSize: 32, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  // Subtitle
  slide.addText(subtitle, {
    x: 0.5, y: 3.7, w: 9, h: 0.6,
    fontSize: 16, fontFace: FONTS.zh, color: COLORS.white,
    transparency: 30
  });

  // Page indicator
  slide.addText(`第${startPage}页开始`, {
    x: 0.5, y: 5, w: 3, h: 0.4,
    fontSize: 12, fontFace: FONTS.zh, color: COLORS.white,
    transparency: 50
  });

  currentPage++;
  return slide;
}

// ========== CHAPTER PAGES ==========
function createChapterHeader(chapterNum, title, pageNum) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  // Left accent panel
  slide.addShape('rect', {
    x: 0, y: 0, w: 2.8, h: 5.625,
    fill: { color: COLORS.primary }
  });

  // Chapter number
  slide.addText(chapterNum, {
    x: 0.3, y: 1.5, w: 2.2, h: 1.5,
    fontSize: 72, fontFace: FONTS.en, color: COLORS.white,
    bold: true, transparency: 20
  });

  // Chapter label
  slide.addText('CHAPTER', {
    x: 0.3, y: 1.2, w: 2.2, h: 0.4,
    fontSize: 12, fontFace: FONTS.en, color: COLORS.white,
    transparency: 40
  });

  // Chapter title on right
  slide.addText(title, {
    x: 3.2, y: 1.8, w: 6.3, h: 2,
    fontSize: 26, fontFace: FONTS.zh, color: COLORS.text,
    bold: true, valign: 'middle'
  });

  addPageBadge(slide, pageNum);
  currentPage++;
  return slide;
}

function createChapterContent(chapterNum, title, points, quote, pageNum) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  // Header bar
  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: COLORS.secondary }
  });
  slide.addText(`第${chapterNum}章  ${title}`, {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  // Content points
  const startY = 1.1;
  points.forEach((point, i) => {
    slide.addShape('ellipse', {
      x: 0.5, y: startY + i * 0.85 + 0.08, w: 0.15, h: 0.15,
      fill: { color: COLORS.primary }
    });
    slide.addText(point, {
      x: 0.8, y: startY + i * 0.85, w: 8.7, h: 0.8,
      fontSize: 14, fontFace: FONTS.zh, color: COLORS.text,
      valign: 'top'
    });
  });

  // Quote box if provided
  if (quote) {
    addQuoteBox(slide, 0.5, 4.5, 9, 0.9, quote, pageNum);
  } else {
    addPageBadge(slide, pageNum);
  }

  currentPage++;
  return slide;
}

function createTwoColumnChapter(chapterNum, title, leftPoints, rightPoints, pageNum) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  // Header
  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: COLORS.secondary }
  });
  slide.addText(`第${chapterNum}章  ${title}`, {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  // Left column
  slide.addShape('roundRect', {
    x: 0.4, y: 1.1, w: 4.4, h: 4,
    fill: { color: COLORS.white },
    shadow: makeShadow(),
    rectRadius: 0.08
  });
  leftPoints.forEach((point, i) => {
    slide.addShape('rect', {
      x: 0.55, y: 1.3 + i * 0.9, w: 0.08, h: 0.6,
      fill: { color: COLORS.primary }
    });
    slide.addText(point, {
      x: 0.75, y: 1.3 + i * 0.9, w: 3.9, h: 0.85,
      fontSize: 12, fontFace: FONTS.zh, color: COLORS.text,
      valign: 'top'
    });
  });

  // Right column
  slide.addShape('roundRect', {
    x: 5.2, y: 1.1, w: 4.4, h: 4,
    fill: { color: COLORS.white },
    shadow: makeShadow(),
    rectRadius: 0.08
  });
  rightPoints.forEach((point, i) => {
    slide.addShape('rect', {
      x: 5.35, y: 1.3 + i * 0.9, w: 0.08, h: 0.6,
      fill: { color: COLORS.accent }
    });
    slide.addText(point, {
      x: 5.55, y: 1.3 + i * 0.9, w: 3.9, h: 0.85,
      fontSize: 12, fontFace: FONTS.zh, color: COLORS.text,
      valign: 'top'
    });
  });

  addPageBadge(slide, pageNum);
  currentPage++;
  return slide;
}

function createIconGridChapter(chapterNum, title, items, pageNum) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: COLORS.secondary }
  });
  slide.addText(`第${chapterNum}章  ${title}`, {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 18, fontFace: FONTS.zh, color: COLORS.white,
    bold: true
  });

  const colW = 2.9;
  const startX = 0.55;
  const gap = 0.2;
  items.forEach((item, i) => {
    addIconCard(slide, startX + i * (colW + gap), 1.2, colW, 3.8, item.icon, item.title, item.desc, pageNum);
  });

  currentPage++;
  return slide;
}

// ========== SPECIAL PAGES ==========
function createSpecialPage(specialNum, title, points, pageNum) {
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
    slide.addShape('roundRect', {
      x: 0.5, y: 1.2 + i * 1.05, w: 9, h: 0.95,
      fill: { color: COLORS.white },
      shadow: makeShadow(),
      rectRadius: 0.05
    });
    slide.addText(point, {
      x: 0.7, y: 1.35 + i * 1.05, w: 8.6, h: 0.7,
      fontSize: 14, fontFace: FONTS.zh, color: COLORS.text,
      valign: 'middle'
    });
  });

  addPageBadge(slide, pageNum);
  currentPage++;
  return slide;
}

// ========== APPENDIX PAGES ==========
function createAppendixPage(appendixNum, title, items, pageNum) {
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
    const y = 1.15 + i * 1.1;
    slide.addShape('roundRect', {
      x: 0.5, y: y, w: 9, h: 1,
      fill: { color: COLORS.white },
      shadow: makeShadow(),
      rectRadius: 0.05
    });
    slide.addShape('rect', {
      x: 0.5, y: y, w: 0.1, h: 1,
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

  addPageBadge(slide, pageNum);
  currentPage++;
  return slide;
}

// ========== CLOSING PAGE ==========
function createClosingPage(pageNum) {
  let slide = pptx.addSlide();
  slide.background = { color: COLORS.primary };

  slide.addText('核心收获', {
    x: 0.5, y: 0.5, w: 9, h: 0.7,
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
    slide.addText('✓  ' + point, {
      x: 0.8, y: 1.4 + i * 0.7, w: 8.4, h: 0.6,
      fontSize: 16, fontFace: FONTS.zh, color: COLORS.white
    });
  });

  slide.addText('罗宏伟', {
    x: 0.5, y: 5, w: 9, h: 0.4,
    fontSize: 14, fontFace: FONTS.zh, color: COLORS.white,
    transparency: 40
  });

  currentPage++;
  return slide;
}

// ========== BUILD PRESENTATION ==========

// Cover
createCover();

// TOC
createTOC();

// PART 1 - Page start
createPartPage('01', '你不是在维护关系\n你是在画一张没人复制过的地图', '第1-16章：客户知识地图的绘制与管理', 5);
currentPage = 5;

// Chapter 1
createChapterHeader(1, '你手里握的不是客户关系，是一张没人复制过的地图', 6);
createChapterContent(1, '你手里握的不是客户关系，是一张没人复制过的地图', [
  '公司只是"租用"了客户经理脑中的手绘图',
  '客户关系是一张力量博弈的地图',
  '你不是在地图上的一个点，你是唯一的绘图员'
], '真正的客户知识，不是通讯录，而是一张活的地图', 7);

// Chapter 2
createChapterHeader(2, '组织留错了证据', 8);
createChapterContent(2, '组织留错了证据', [
  '合同/邮件只是"痕迹"，不是"原因"',
  '大多数组织只做了免费的那一半',
  '制度只给"痕迹"留了位置，没给"判断"留位置'
], '记录什么，比怎么记录更重要', 9);

// Chapter 3
createChapterHeader(3, '客户的生意逻辑，才是知识地图的地基', 10);
createChapterContent(3, '客户的生意逻辑，才是知识地图的地基', [
  '不懂客户怎么赚钱，联系人信息只是电话本',
  '生意逻辑至少三层：收入来源、成本压力、老板最焦虑的事',
  '生意逻辑需要定期重新校准'
], '不懂生意的客户经理，永远只是传话筒', 11);

// Chapter 4
createChapterHeader(4, '甲方内部，没有人只代表自己', 12);
createChapterContent(4, '甲方内部，没有人只代表自己', [
  '每个人以"岗位身份"表态，不是"个人身份"',
  '"技术上没问题"≠"我会推动这件事"',
  '要画进地图的是"这件事对这个人所在的岗位是好处还是麻烦"'
], '职位背后是立场，立场背后是利益', 13);

// Chapter 5
createChapterHeader(5, '分清楚谁是门，谁只是窗', 14);
createTwoColumnChapter(5, '分清楚谁是门，谁只是窗', [
  '门：推动决策的人',
  '窗：提供信息但无决定权的人',
  '守门人：掌握信息流通关键节点'
], [
  '识别关键决策人',
  '区分信息提供者与决策者',
  '找到真正的守门人'
], 15);

// Chapter 6
createChapterHeader(6, '钱什么时候能动，比钱有多少更重要', 16);
createChapterContent(6, '钱什么时候能动，比钱有多少更重要', [
  '预算节奏判断比预算金额更关键',
  '国企vs民企vs外资的预算节奏差异',
  '预算归属也会变化，需要同时更新'
], '时机比金额重要，节奏比规模重要', 17);

// Chapter 7
createChapterHeader(7, '客户没说的，比说出来的更值钱', 18);
createChapterContent(7, '客户没说的，比说出来的更值钱', [
  '需求是客户翻译过的版本，不是问题本身',
  '用"现在具体是怎么做的，每一步卡在哪里"代替"希望达成什么效果"',
  '行为和流程里藏着真正的困境'
], '倾听弦外之音，挖掘真实痛点', 19);

// Chapter 8
createChapterHeader(8, '萃取客户智识，靠的不是问卷，是拆解因果链', 20);
createChapterContent(8, '萃取客户智识，靠的不是问卷，是拆解因果链', [
  '用"上一次具体发生了什么"代替"一般来说"',
  '访谈顺序：先从容易畅所欲言的主题切入',
  '好的访谈让对方愣住说出"我还真没这么想过"'
], '好的访谈是让对方重新思考自己的过程', 21);

// Chapter 9
createChapterHeader(9, '关系不是印象，是一条可以回放的历史', 22);
createChapterContent(9, '关系不是印象，是一条可以回放的历史', [
  '用时间线替代印象',
  '记录三类：承诺/表态、兑现情况、环境变化',
  '时间线能看见印象看不见的趋势'
], '印象会骗人，时间线不会', 23);

// Chapter 10
createChapterHeader(10, '谁负责，不等于谁真的知道', 24);
createChapterContent(10, '谁负责，不等于谁真的知道', [
  '责任人矩阵管"谁该出面"，管不住"谁真了解情况"',
  '给矩阵加"信息新鲜度"维度',
  '超过阈值自动提醒重新同步'
], '组织架构图不等于信息流图', 25);

// Chapter 11
createChapterHeader(11, '交接不是移交文件，是移交判断力', 26);
createChapterContent(11, '交接不是移交文件，是移交判断力', [
  '交接核心是"当时我怎么想的"推理方式',
  '静态信息+判断力信息两部分',
  '建议加一次"情景推演"环节'
], '交出去的是文件，留下来的是判断力', 27);

// Chapter 12
createChapterHeader(12, '知识要活在今天的工作里', 28);
createChapterContent(12, '知识要活在今天的工作里', [
  '需要"工作卡"而非厚重档案',
  '档案是按客户组织，工作卡是按场景组织',
  '工作卡要在正确的瞬间出现在正确的地方'
], '档案是过去，工作卡是现在', 29);

// Chapter 13
createChapterHeader(13, '客户成功不该是一个人的KPI', 30);
createChapterContent(13, '客户成功不该是一个人的KPI', [
  '激励结构在鼓励知识囤积',
  '从个人考核改为团队账户小组整体考核',
  '知识共享应作为明确的考核项'
], '一个人守不住的地图，一群人才能守住', 31);

// Chapter 14
createChapterHeader(14, '签单是销售的终点，是你工作的起点', 32);
createChapterContent(14, '签单是销售的终点，是你工作的起点', [
  '两种角色在签单那一刻站在相反的心理位置',
  '销售的口头承诺要书面化交接',
  '客户经理提前参与签单前最后一轮谈判'
], '签单不是结束，是开始', 33);

// Chapter 15
createChapterHeader(15, '领导要的是提前知道的风险', 34);
createChapterContent(15, '领导要的是提前知道的风险', [
  '风险信号是领先指标，满意度是滞后指标',
  '管理层要能接住"我不确定"的信号',
  '汇报模板留一栏"我有点担心，但还说不清楚为什么"'
], '提前预警比事后解释更专业', 35);

// Chapter 16
createChapterHeader(16, '客户健康度不是感觉，是可以打出来的分数', 36);
createIconGridChapter(16, '客户健康度不是感觉，是可以打出来的分数', [
  { icon: '📊', title: '沟通频率', desc: '定期沟通记录与响应速度' },
  { icon: '✓', title: '承诺兑现率', desc: '承诺事项的完成情况追踪' },
  { icon: '🔗', title: '决策链稳定性', desc: '关键决策人的变化监控' },
  { icon: '⚠️', title: '外部环境风险', desc: '行业与市场环境变化' }
], 37);

// PART 2
createPartPage('02', '把知识交出去\n才是真正的强大', '第17-22章：知识传承与组织进化', 38);
currentPage = 38;

// Chapter 17
createChapterHeader(17, '怕被替代，才是你还没真正强大的证据', 39);
createChapterContent(17, '怕被替代，才是你还没真正强大的证据', [
  '知识囤积是脆弱的安全感',
  '真正的能力是"持续画新地图"',
  '分享旧地图和创造新地图同时进行'
], '越分享，越强大', 40);

// Chapter 18
createChapterHeader(18, '把知识交出去，不会让你可有可无', 41);
createChapterContent(18, '把知识交出去，不会让你可有可无', [
  '价值从"拥有独家信息"转移到"判断方法源头"',
  '变成团队方法论核心',
  '坦率本身也是珍贵的知识'
], '你的不可替代性在于判断力，不在于信息', 42);

// Chapter 19
createChapterHeader(19, '这份工作留下的，不是签下的单子', 43);
createChapterContent(19, '这份工作留下的，不是签下的单子', [
  '唯一不随时间冲淡的是"可复制的判断方法"',
  '日常工作节奏让人无暇提炼方法论',
  '定期组织复盘活动是契机'
], '留下的应该是方法，不是痕迹', 44);

// Chapter 20
createChapterHeader(20, '淘汰的不是你，是靠记忆吃饭的那批人', 45);
createChapterContent(20, '淘汰的不是你，是靠记忆吃饭的那批人', [
  '行业结构性分化：个人记忆→组织能力',
  '市场倒逼组织改变',
  '愿意先转变的人占据有利位置'
], '趋势不可逆，顺势者昌', 46);

// Chapter 21
createChapterHeader(21, 'AI能记住所有对话，却替不了那张地图', 47);
createChapterContent(21, 'AI能记住所有对话，却替不了那张地图', [
  'AI能记录"发生了什么"，判断不了"意味着什么"',
  '工具和判断力是互补关系',
  'AI适合做筛选，人做最终判断'
], 'AI是镜子，不是地图', 48);

// Chapter 22
createChapterHeader(22, '一张能被复制的地图，才是体面的告别', 49);
createChapterContent(22, '一张能被复制的地图，才是体面的告别', [
  '地图要能被复制才有价值',
  '追求副产品的人往往两手空空',
  '追求地图本身的人，副产品反而会找上门'
], '好的告别，是留下一张可以继续使用的地图', 50);

// SPECIAL SECTIONS
createSpecialPage(1, '月度健康检查会议', [
  '重点讨论而非念PPT',
  '交叉校验判断',
  '鼓励质疑判断的文化'
], 51);

createSpecialPage(2, '两份不一样的地图，该信谁的', [
  '人际感受vs行为数据',
  '把两份判断还原成具体证据对照',
  '定期对照防止信息不对称'
], 52);

createSpecialPage(3, '新客户经理第一周该怎么用这张地图', [
  '先验证地图再使用',
  '用"确认了解"代替"展示了解"',
  '验证过程也是对前任地图的质量检验'
], 53);

// APPENDICES
createAppendixPage('一', '客户知识地图模板', [
  { title: '客户背景', desc: '公司规模、行业、发展阶段' },
  { title: '决策链图谱', desc: '关键人物、职位、影响力评估' },
  { title: '生意逻辑分析', desc: '收入来源、成本结构、核心压力' },
  { title: '历史关系时间线', desc: '承诺兑现、关键事件、关系变化' },
  { title: '当前项目状态', desc: '进度、风险、机会点' },
  { title: '后续行动建议', desc: '下一步工作方向与注意事项' }
], 54);

createAppendixPage('二', '客户智识萃取访谈模板', [
  { title: '背景问题', desc: '了解客户基本情况和行业环境' },
  { title: '流程问题', desc: '挖掘现有工作流程中的痛点' },
  { title: '决策问题', desc: '探询决策过程和关键影响因素' },
  { title: '期望问题', desc: '明确真实需求和预期效果' }
], 55);

createAppendixPage('三', '客户交接清单', [
  { title: '静态信息', desc: '客户资料、合同文档、联系方式等' },
  { title: '判断力信息', desc: '决策逻辑、关系判断、风险认知' },
  { title: '情景推演', desc: '假设特定情况下的应对思路' }
], 56);

createAppendixPage('四', '月度健康指标与风险打分卡', [
  { title: '沟通频率', desc: '1-10分，月度互动次数与质量' },
  { title: '承诺兑现率', desc: '1-10分，历史承诺完成情况' },
  { title: '决策链稳定性', desc: '1-10分，关键人员变动情况' },
  { title: '外部风险', desc: '1-10分，市场环境变化评估' }
], 57);

// Closing
createClosingPage(58);

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
