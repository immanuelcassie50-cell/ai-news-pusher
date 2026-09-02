#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Append chapter 2 slides"""

output_path = 'D:/新课开发/经验萃取/访谈-2/完整课程包/10_授课PPT/generate-100plus.js'

chapter2 = '''
// ============================================
// CHAPTER 2: 访谈者角色认知 (15 slides)
// ============================================
createSectionSlide("02", "访谈者角色认知与定位", "萃取者是翻译官，不是记录员");

// 2-1: 角色定义
{
  const slide = createContentSlide("萃取者角色定义");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.0, fill: { color: theme.primary }, rectRadius: 0.08 });
  slide.addText("访谈者是「知识导游」而非「知识法官」", {
    x: 0.5, y: 1.1, w: 9, h: 1.0, fontSize: 22, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  const cardData = [
    { title: "导游", items: ["顺着专家思路引导展开", "让经验自然流淌出来", "发掘深处的宝藏经验"], good: true },
    { title: "法官", items: ["打断专家的思路", "急于给出结论评价", "阻断深度挖掘的可能"], good: false }
  ];
  cardData.forEach((card, i) => {
    const x = 0.5 + i * 4.7;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: 2.3, w: 4.4, h: 2.5, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 2.3, w: 4.4, h: 0.55, fill: { color: card.good ? theme.primary : theme.secondary } });
    slide.addText(card.title, { x: x, y: 2.3, w: 4.4, h: 0.55, fontSize: 18, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    card.items.forEach((item, j) => {
      slide.addText("• " + item, { x: x + 0.3, y: 3.0 + j * 0.55, w: 3.8, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
    });
  });
  addPageNum(slide, 9);
}

// 2-2: 三重身份
{
  const slide = createContentSlide("萃取者三重身份");
  const identities = [
    { name: "翻译官", desc: "将专家的隐性经验转化为显性知识", color: theme.primary },
    { name: "导游", desc: "引导专家在经验海洋中畅游发现", color: theme.accent },
    { name: "把关人", desc: "识别真金，过滤噪音，保证质量", color: theme.secondary }
  ];
  identities.forEach((id, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5 + i * 3.1, y: 1.3, w: 2.9, h: 3.5, fill: { color: theme.light }, rectRadius: 0.12 });
    slide.addShape(pres.shapes.OVAL, { x: 1.3 + i * 3.1, y: 1.6, w: 1.3, h: 1.3, fill: { color: id.color } });
    slide.addText(id.name, { x: 0.5 + i * 3.1, y: 3.1, w: 2.9, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    slide.addText(id.desc, { x: 0.6 + i * 3.1, y: 3.7, w: 2.7, h: 0.9, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  });
  addPageNum(slide, 10);
}

// 2-3: 五维能力模型
{
  const slide = createContentSlide("五维能力模型");
  const abilities = [
    { name: "聆听能力", desc: "全神贯注地听，抓住关键信息" },
    { name: "提问能力", desc: "设计并提出高质量问题" },
    { name: "追问能力", desc: "深挖细节，刨根问底" },
    { name: "判断能力", desc: "现场识别有价值内容" },
    { name: "整理能力", desc: "结构化输出知识产品" }
  ];
  abilities.forEach((a, i) => {
    const x = 0.5 + (i % 3) * 3.1;
    const y = 1.2 + Math.floor(i / 3) * 2.2;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 2.9, h: 1.9, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.OVAL, { x: x + 1.05, y: y + 0.2, w: 0.8, h: 0.8, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: x + 1.05, y: y + 0.2, w: 0.8, h: 0.8, fontSize: 24, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(a.name, { x: x + 0.1, y: y + 1.1, w: 2.7, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    slide.addText(a.desc, { x: x + 0.1, y: y + 1.45, w: 2.7, h: 0.4, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  });
  addPageNum(slide, 11);
}

// 2-4: 萃取者与专家的关系
{
  const slide = createContentSlide("萃取者与专家的关系");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.2, w: 4.3, h: 2.5, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 4.3, h: 0.6, fill: { color: theme.primary } });
  slide.addText("萃取者", { x: 0.5, y: 1.2, w: 4.3, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("专业访谈技术\\n提问与追问\\n内容筛选与判断\\n知识整理与输出", { x: 0.7, y: 1.9, w: 3.9, h: 1.6, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: 1.2, w: 4.3, h: 2.5, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.2, w: 4.3, h: 0.6, fill: { color: theme.accent } });
  slide.addText("专家", { x: 5.2, y: 1.2, w: 4.3, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("丰富实战经验\\n隐性知识持有者\\n案例与情境\\n直觉与判断", { x: 5.4, y: 1.9, w: 3.9, h: 1.6, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.OVAL, { x: 4.4, y: 1.9, w: 1.2, h: 1.2, fill: { color: theme.secondary } });
  slide.addText("合作", { x: 4.4, y: 1.9, w: 1.2, h: 1.2, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.0, w: 9, h: 1.2, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("理想状态：萃取者提出好问题 → 专家自然流淌出经验 → 双方共同提炼出真金", { x: 0.7, y: 4.3, w: 8.6, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  addPageNum(slide, 12);
}

// 2-5: 七大常见误区
{
  const slide = createContentSlide("七大常见误区");
  const mistakes = [
    "把访谈当聊天——缺乏目的性",
    "让专家主导——失去控制权",
    "只听不问——错过追问时机",
    "照本宣科——不会灵活应变",
    "贪多求全——没有重点",
    "不会判断——什么都记录",
    "整理粗糙——输出质量低"
  ];
  mistakes.forEach((m, i) => {
    const col = i < 4 ? 0 : 1;
    const row = i % 4;
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 1.05;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 0.9, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 0.5, h: 0.9, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: x, y: y, w: 0.5, h: 0.9, fontSize: 16, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(m, { x: x + 0.65, y: y + 0.2, w: 3.6, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 13);
}

// 2-6: 访谈者的十个不要
{
  const slide = createContentSlide("访谈者的十个不要");
  const donts = [
    ["不要打断专家", "让专家把话说完"],
    ["不要急于总结", "先听完再归纳"],
    ["不要问太大", "问题要具体"],
    ["不要连续追问", "给专家思考时间"],
    ["不要表面附和", "要深入追问细节"],
    ["不要只听故事", "要挖出方法论"],
    ["不要贪多求全", "聚焦核心经验"],
    ["不要忽略情绪", "关注专家感受"]
  ];
  donts.forEach((d, i) => {
    const col = i < 4 ? 0 : 1;
    const row = i % 4;
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 1.1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 0.95, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText("X " + d[0], { x: x + 0.2, y: y + 0.1, w: 4, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText("-> " + d[1], { x: x + 0.2, y: y + 0.5, w: 4, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 14);
}

// 2-7: 优秀萃取者特质
{
  const slide = createContentSlide("优秀萃取者的特质");
  const traits = [
    { title: "好奇心", desc: "对任何经验都充满好奇，想知道为什么" },
    { title: "耐心", desc: "愿意等待，让专家按自己的节奏展开" },
    { title: "敏锐", desc: "能捕捉话语背后的关键信息和情绪" },
    { title: "灵活", desc: "不死板，能根据现场情况调整策略" },
    { title: "严谨", desc: "追根究底，不满足于表面答案" },
    { title: "谦逊", desc: "姿态低，尊重专家的经验和智慧" }
  ];
  traits.forEach((t, i) => {
    const col = i < 3 ? 0 : 1;
    const row = i % 3;
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 1.4;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 1.2, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText(t.title, { x: x + 0.2, y: y + 0.15, w: 4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(t.desc, { x: x + 0.2, y: y + 0.55, w: 4, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 15);
}

// 2-8: 角色定位总结
{
  const slide = createContentSlide("章节小结：角色认知要点");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.2, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("核心观点：萃取者是翻译官，不是记录员", { x: 0.5, y: 1.1, w: 9, h: 1.2, fontSize: 22, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  const points = [
    "访谈者是知识导游，引导专家自然流淌出经验",
    "萃取者需要具备五维能力：聆听、提问、追问、判断、整理",
    "避免七大误区，特别是把访谈当聊天和让专家主导",
    "优秀萃取者特质：好奇心、耐心、敏锐、灵活、严谨、谦逊"
  ];
  points.forEach((p, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.5 + i * 0.75, w: 9, h: 0.65, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addText(String(i + 1) + ". " + p, { x: 0.7, y: 2.55 + i * 0.75, w: 8.6, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 16);
}

// 2-9: 案例分析 - 角色混淆
{
  const slide = createContentSlide("案例分析：角色混淆的后果");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 2.0, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("情境", { x: 0.7, y: 1.2, w: 1, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("某萃取者在访谈中不断打断专家：\\"您说的不对，应该这样做才对\\"", { x: 0.7, y: 1.6, w: 8.6, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("结果", { x: 0.7, y: 2.3, w: 1, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("专家感到不被尊重，后续分享变得敷衍，最终访谈效果大打折扣", { x: 0.7, y: 2.7, w: 8.6, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.3, w: 9, h: 1.8, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("教训", { x: 0.7, y: 3.5, w: 1, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.light, bold: true });
  slide.addText("萃取者不是专家，不要用自己的判断代替专家的经验。让专家自己说出来，比被告知正确答案更有价值。", { x: 0.7, y: 3.95, w: 8.6, h: 1.0, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF" });
  addPageNum(slide, 17);
}

'''

with open(output_path, 'a', encoding='utf-8') as f:
    f.write(chapter2)
print(f"Part 2 written: {len(chapter2)} chars")
