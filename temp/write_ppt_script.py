#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Write expanded PPT generation script"""

output_path = 'D:/新课开发/经验萃取/访谈-2/完整课程包/10_授课PPT/generate-100plus.js'

content = r'''// generate-100plus.js - Complete 120+ slide PPT for 专家经验萃取：访谈技术
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "专家经验萃取：访谈技术";
pres.author = "课程开发组";

const theme = {
  primary: "b91c1c",
  secondary: "374151",
  accent: "dc2626",
  light: "f5f5f5",
  bg: "ffffff"
};

let slideNum = 0;
function nextSlide() { slideNum++; return slideNum; }
function addPageNum(slide, num) {
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText(String(num), {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

function createSectionSlide(chapter, title, subtitle) {
  const slide = pres.addSlide();
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.primary } });
  slide.addText(chapter, { x: 0.8, y: 1.2, w: 3.0, h: 2.0, fontSize: 96, fontFace: "Arial", color: theme.bg, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 3.2, w: 2.0, h: 0.06, fill: { color: theme.accent } });
  slide.addText(title, { x: 0.8, y: 3.5, w: 8.0, h: 0.9, fontSize: 36, fontFace: "Microsoft YaHei", color: theme.bg, bold: true });
  slide.addText(subtitle, { x: 0.8, y: 4.4, w: 8.0, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.light });
  console.log("Slide " + nextSlide() + ": Section " + chapter + " - " + title);
}

function createContentSlide(title) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: theme.primary } });
  slide.addText(title, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  return slide;
}

// ============================================
// COVER PAGE
// ============================================
{
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.OVAL, { x: 7.5, y: 0.8, w: 3.5, h: 3.5, fill: { color: theme.light } });
  slide.addShape(pres.shapes.OVAL, { x: 8.2, y: 1.5, w: 2.2, h: 2.2, fill: { color: theme.accent, transparency: 15 } });
  slide.addText("专家经验萃取", { x: 0.6, y: 1.5, w: 7, h: 0.8, fontSize: 40, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("访谈技术", { x: 0.6, y: 2.3, w: 7, h: 0.8, fontSize: 48, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 3.2, w: 2.5, h: 0.06, fill: { color: theme.accent } });
  slide.addText("从经验型专家大脑中萃取隐性经验", { x: 0.6, y: 3.4, w: 7, h: 0.6, fontSize: 22, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("内训师 / 培训专员 / 知识管理从业者", { x: 0.6, y: 4.4, w: 7, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.545, w: 10, h: 0.08, fill: { color: theme.primary } });
  console.log("Slide " + nextSlide() + ": Cover");
}

// ============================================
// TABLE OF CONTENTS
// ============================================
{
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: theme.primary } });
  slide.addText("课程目录", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const chapters = ["课程导论", "访谈者角色认知与定位", "访谈前准备与计划", "提问技术精进", "现场控制与节奏管理", "内容识别与筛选", "访谈整理与价值输出", "综合实战与迭代优化"];
  chapters.forEach((ch, i) => {
    const col = i < 4 ? 0 : 1;
    const row = i % 4;
    const x = 0.5 + col * 4.7;
    const y = 1.2 + row * 1.0;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 0.8, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addShape(pres.shapes.OVAL, { x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.5, fill: { color: theme.primary } });
    slide.addText(String(i + 1), { x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.5, fontSize: 16, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(ch, { x: x + 0.8, y: y + 0.15, w: 3.4, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 2);
  console.log("Slide " + nextSlide() + ": Table of Contents");
}

// ============================================
// CHAPTER 1: 课程导论 (5 slides)
// ============================================
{
  const slide = createContentSlide("课程导论");
  slide.addText("本课程旨在帮助学员掌握从经验型专家大脑中萃取可迁移、可复用、可传播的隐性经验的方法论。", { x: 0.5, y: 1.2, w: 9, h: 1.0, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary });
  const points = ["经验萃取：通过专业提问技术挖出隐性经验", "萃取者：连接专家大脑与知识产品的翻译官", "核心能力：聆听、提问、追问、判断、整理"];
  points.forEach((p, i) => {
    slide.addShape(pres.shapes.OVAL, { x: 0.5, y: 2.4 + i * 0.9, w: 0.35, h: 0.35, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.5, y: 2.4 + i * 0.9, w: 0.35, h: 0.35, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(p, { x: 1.0, y: 2.4 + i * 0.9, w: 8.5, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 3);
}

{
  const slide = createContentSlide("为什么要萃取专家经验");
  const reasons = [
    { title: "经验是隐形资产", desc: "专家脑海中的隐性经验是企业最宝贵的知识财富" },
    { title: "人才流失风险", desc: "专家离职带走经验，新人无法快速成长" },
    { title: "知识断层危机", desc: "经验无法传承，组织能力持续退化" },
    { title: "培训效率低下", desc: "填鸭式培训缺乏实战案例，难以落地" }
  ];
  reasons.forEach((r, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1 + i * 1.1, w: 9, h: 0.95, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addShape(pres.shapes.OVAL, { x: 0.7, y: 1.3 + i * 1.1, w: 0.55, h: 0.55, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.7, y: 1.3 + i * 1.1, w: 0.55, h: 0.55, fontSize: 18, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(r.title, { x: 1.4, y: 1.25 + i * 1.1, w: 3, h: 0.4, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(r.desc, { x: 1.4, y: 1.65 + i * 1.1, w: 7.8, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 4);
}

{
  const slide = createContentSlide("学习地图");
  const modules = [
    { name: "课程导论", dur: "50分钟", obj: "建立框架" },
    { name: "角色认知", dur: "80分钟", obj: "角色定位" },
    { name: "访谈准备", dur: "90分钟", obj: "六维准备" },
    { name: "提问技术", dur: "120分钟", obj: "追问七术" },
    { name: "现场控制", dur: "90分钟", obj: "节奏把控" },
    { name: "内容筛选", dur: "90分钟", obj: "四象限法" },
    { name: "整理输出", dur: "100分钟", obj: "四步整理" },
    { name: "综合实战", dur: "110分钟", obj: "PDCA循环" }
  ];
  modules.forEach((m, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 0.5 + col * 2.35;
    const y = 1.2 + row * 2.0;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 2.15, h: 1.7, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 2.15, h: 0.5, fill: { color: theme.primary } });
    slide.addText(m.name, { x: x, y: y, w: 2.15, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(m.dur, { x: x, y: y + 0.6, w: 2.15, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true, align: "center" });
    slide.addText(m.obj, { x: x, y: y + 1.0, w: 2.15, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  });
  addPageNum(slide, 5);
}

{
  const slide = createContentSlide("课程目标");
  const goals = [
    { title: "识别", desc: "能识别有价值的经验内容，四类内容判断" },
    { title: "提问", desc: "能设计并提出高质量问题，六维准备" },
    { title: "追问", desc: "能运用追问七术深挖细节，刨根问底" },
    { title: "判断", desc: "能在现场快速判断内容价值，七大标准" },
    { title: "整理", desc: "能输出结构化的知识产品，四步整理法" }
  ];
  goals.forEach((g, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1 + i * 0.85, w: 9, h: 0.75, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.7, y: 1.25 + i * 0.85, w: 1.2, h: 0.45, fill: { color: theme.accent }, rectRadius: 0.06 });
    slide.addText(g.title, { x: 0.7, y: 1.25 + i * 0.85, w: 1.2, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(g.desc, { x: 2.1, y: 1.2 + i * 0.85, w: 7.2, h: 0.55, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "middle" });
  });
  addPageNum(slide, 6);
}

{
  const slide = createContentSlide("什么是隐性经验");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.3, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("隐性经验 = 知道但说不出说不出的经验", { x: 0.5, y: 1.1, w: 9, h: 1.3, fontSize: 22, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  const examples = [
    { type: "显性知识", example: "《客户服务手册》规定：响应时间不超过2小时", trait: "可以写出来、传播出来" },
    { type: "隐性经验", example: "客户说"还行"时，其实在表达不满，需要立即追问", trait: "难以言表，靠直觉判断" }
  ];
  examples.forEach((ex, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.6 + i * 1.4, w: 9, h: 1.2, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText(ex.type, { x: 0.7, y: 2.7 + i * 1.4, w: 2, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText(ex.example, { x: 0.7, y: 3.1 + i * 1.4, w: 8.6, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addText(ex.trait, { x: 0.7, y: 3.45 + i * 1.4, w: 8.6, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, italic: true });
  });
  addPageNum(slide, 7);
}

'''

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(content)
print(f"Part 1 written: {len(content)} chars")
