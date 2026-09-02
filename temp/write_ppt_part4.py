#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Append chapter 4 slides (追问七术)"""

output_path = 'D:/新课开发/经验萃取/访谈-2/完整课程包/10_授课PPT/generate-100plus.js'

chapter4 = '''
// ============================================
// CHAPTER 4: 提问技术精进 (35 slides)
// ============================================
createSectionSlide("04", "提问技术精进", "追问七术，深挖隐性经验");

// 4-1: 追问七术概述
{
  const slide = createContentSlide("追问七术概述");
  const techniques = [
    { num: "1", name: "细节深挖", desc: "追问具体情形" },
    { num: "2", name: "原因追溯", desc: "追问背后原因" },
    { num: "3", name: "例证请求", desc: "请举例说明" },
    { num: "4", name: "对比展开", desc: "追问不同情况" },
    { num: "5", name: "流程还原", desc: "追问完整步骤" },
    { num: "6", name: "边界探索", desc: "追问适用范围" },
    { num: "7", name: "效果验证", desc: "追问结果影响" }
  ];
  techniques.forEach((t, i) => {
    const col = i < 4 ? 0 : 1;
    const row = i % 4;
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 1.1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 0.95, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addShape(pres.shapes.OVAL, { x: x + 0.15, y: y + 0.22, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(t.num, { x: x + 0.15, y: y + 0.22, w: 0.5, h: 0.5, fontSize: 16, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(t.name, { x: x + 0.8, y: y + 0.15, w: 1.8, h: 0.35, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(t.desc, { x: x + 0.8, y: y + 0.5, w: 3.4, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 32);
}

// 4-2: 术一：细节深挖 - 定义
{
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fill: { color: theme.primary }, rectRadius: 0.08 });
  slide.addText("1", { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("追问七术之一：细节深挖", { x: 1.15, y: 0.4, w: 8, h: 0.6, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.4, w: 9, h: 1.0, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("定义", { x: 0.7, y: 1.5, w: 1, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("当专家提到关键细节时，追问具体情形", { x: 0.7, y: 1.85, w: 8.6, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("示例", { x: 0.5, y: 2.6, w: 1, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.1, w: 9, h: 1.6, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("问", { x: 0.7, y: 3.2, w: 0.5, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("您说那次项目遇到了挑战，能说说具体是什么情况吗？", { x: 0.7, y: 3.55, w: 8.6, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
  slide.addText("— 追问具体情形，而非泛泛而谈", { x: 0.7, y: 4.2, w: 8.6, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent });
  addPageNum(slide, 33);
}

// 4-3: 术一：细节深挖 - 应用场景
{
  const slide = createContentSlide("细节深挖的应用场景");
  const scenarios = [
    { scenario: "专家说：", quote: "我当时做了一个很重要的决定..." },
    { scenario: "萃取者追问：", quote: "能说说当时的具体情况吗？是什么让您觉得这个决定很重要？" },
    { scenario: "专家说：", quote: "客户后来很满意..." },
    { scenario: "萃取者追问：", quote: "客户具体是怎么表现的？您是如何判断他满意的程度的？" }
  ];
  scenarios.forEach((s, i) => {
    const isQuestion = i % 2 === 1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.0 + i * 1.1, w: 9, h: 1.0, fill: { color: isQuestion ? theme.primary : theme.light }, rectRadius: 0.08 });
    slide.addText(s.scenario, { x: 0.7, y: 1.05 + i * 1.1, w: 2, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: isQuestion ? theme.light : theme.accent, bold: true });
    slide.addText(s.quote, { x: 0.7, y: 1.45 + i * 1.1, w: 8.6, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: isQuestion ? "FFFFFF" : theme.secondary, italic: !isQuestion });
  });
  addPageNum(slide, 34);
}

// 4-4: 术二：原因追溯 - 定义
{
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fill: { color: theme.primary }, rectRadius: 0.08 });
  slide.addText("2", { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("追问七术之二：原因追溯", { x: 1.15, y: 0.4, w: 8, h: 0.6, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.4, w: 9, h: 1.0, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("定义", { x: 0.7, y: 1.5, w: 1, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("追问行为背后的深层原因和考虑因素", { x: 0.7, y: 1.85, w: 8.6, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("示例", { x: 0.5, y: 2.6, w: 1, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.1, w: 9, h: 1.6, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("问", { x: 0.7, y: 3.2, w: 0.5, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("您当时为什么选择这样做？背后的考虑是什么？", { x: 0.7, y: 3.55, w: 8.6, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
  slide.addText("— 追问决策背后的逻辑，而非只看表面做法", { x: 0.7, y: 4.2, w: 8.6, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent });
  addPageNum(slide, 35);
}

// 4-5: 术二：原因追溯 - 追问话术
{
  const slide = createContentSlide("原因追溯的追问话术");
  const questions = [
    "为什么您会这样做决定？",
    "促使您做出这个选择的关键因素是什么？",
    "当时您主要考虑了哪些方面？",
    "有没有其他的考虑因素？",
    "您是基于什么判断这样做的效果会比较好？"
  ];
  slide.addText("常用追问话术", { x: 0.5, y: 1.1, w: 9, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  questions.forEach((q, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.6 + i * 0.75, w: 9, h: 0.65, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addText("\" " + q + " \"", { x: 0.7, y: 1.65 + i * 0.75, w: 8.6, h: 0.55, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
  });
  addPageNum(slide, 36);
}

// 4-6: 术三：例证请求 - 定义
{
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fill: { color: theme.primary }, rectRadius: 0.08 });
  slide.addText("3", { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("追问七术之三：例证请求", { x: 1.15, y: 0.4, w: 8, h: 0.6, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.4, w: 9, h: 1.0, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("定义", { x: 0.7, y: 1.5, w: 1, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("请专家用具体案例来验证和说明观点", { x: 0.7, y: 1.85, w: 8.6, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("示例", { x: 0.5, y: 2.6, w: 1, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.1, w: 9, h: 1.6, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("问", { x: 0.7, y: 3.2, w: 0.5, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("您提到要关注客户感受，能举个具体例子说明吗？", { x: 0.7, y: 3.55, w: 8.6, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
  slide.addText("— 用案例验证观点，让抽象变具体", { x: 0.7, y: 4.2, w: 8.6, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent });
  addPageNum(slide, 37);
}

// 4-7: 术三：例证请求 - 价值
{
  const slide = createContentSlide("为什么要求专家举例");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.2, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("案例让经验更具体、可操作、可复制", { x: 0.5, y: 1.1, w: 9, h: 1.2, fontSize: 22, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  const values = [
    { title: "具体化", desc: "把抽象观点变成可感知的场景" },
    { title: "可验证", desc: "通过案例验证专家说法的真实性" },
    { title: "可学习", desc: "案例包含具体做法，便于他人学习" },
    { title: "有温度", desc: "故事比道理更容易打动人心" }
  ];
  values.forEach((v, i) => {
    const col = i < 2 ? 0 : 1;
    const row = i % 2;
    const x = 0.5 + col * 4.7;
    const y = 2.5 + row * 1.4;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 1.2, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText(v.title, { x: x + 0.2, y: y + 0.15, w: 4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText(v.desc, { x: x + 0.2, y: y + 0.6, w: 4, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 38);
}

// 4-8: 术四：对比展开 - 定义
{
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fill: { color: theme.primary }, rectRadius: 0.08 });
  slide.addText("4", { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("追问七术之四：对比展开", { x: 1.15, y: 0.4, w: 8, h: 0.6, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.4, w: 9, h: 1.0, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("定义", { x: 0.7, y: 1.5, w: 1, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("通过对比不同情境，揭示经验的适用范围和差异", { x: 0.7, y: 1.85, w: 8.6, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("示例", { x: 0.5, y: 2.6, w: 1, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.1, w: 9, h: 1.6, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("问", { x: 0.7, y: 3.2, w: 0.5, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("面对大客户和小客户，处理方式有什么不同？", { x: 0.7, y: 3.55, w: 8.6, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
  slide.addText("— 通过对比揭示边界条件和关键差异", { x: 0.7, y: 4.2, w: 8.6, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent });
  addPageNum(slide, 39);
}

// 4-9: 术四：对比展开 - 对比维度
{
  const slide = createContentSlide("对比展开的常见维度");
  const dimensions = [
    { dim: "客户维度", example: "大客户 vs 小客户 / 新客户 vs 老客户" },
    { dim: "时间维度", example: "旺季 vs 淡季 / 平时 vs 关键时刻" },
    { dim: "难度维度", example: "简单 case vs 复杂 case" },
    { dim: "阶段维度", example: "开拓期 vs 维护期 vs 挽回期" },
    { dim: "对手维度", example: "竞争对手强 vs 竞争对手弱" },
    { dim: "资源维度", example: "资源充足 vs 资源有限" }
  ];
  dimensions.forEach((d, i) => {
    const col = i < 2 ? 0 : 1;
    const row = i % 3;
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 1.4;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 1.2, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText(d.dim, { x: x + 0.2, y: y + 0.15, w: 4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(d.example, { x: x + 0.2, y: y + 0.6, w: 4, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 40);
}

// 4-10: 术五：流程还原 - 定义
{
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fill: { color: theme.primary }, rectRadius: 0.08 });
  slide.addText("5", { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("追问七术之五：流程还原", { x: 1.15, y: 0.4, w: 8, h: 0.6, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.4, w: 9, h: 1.0, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("定义", { x: 0.7, y: 1.5, w: 1, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("还原完整的工作流程和操作步骤", { x: 0.7, y: 1.85, w: 8.6, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("示例", { x: 0.5, y: 2.6, w: 1, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.1, w: 9, h: 1.6, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("问", { x: 0.7, y: 3.2, w: 0.5, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("请您详细说说处理这个问题具体有哪些步骤？", { x: 0.7, y: 3.55, w: 8.6, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
  slide.addText("— 从头到尾还原完整操作流程", { x: 0.7, y: 4.2, w: 8.6, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent });
  addPageNum(slide, 41);
}

// 4-11: 术五：流程还原 - STAR模型
{
  const slide = createContentSlide("流程还原：STAR模型");
  const star = [
    { letter: "S", name: "Situation", desc: "当时的具体情境是什么？" },
    { letter: "T", name: "Task", desc: "您面临的任务/目标是什么？" },
    { letter: "A", name: "Action", desc: "您具体采取了什么行动？" },
    { letter: "R", name: "Result", desc: "最终取得了什么结果？" }
  ];
  star.forEach((s, i) => {
    const x = 0.5 + i * 2.35;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.1, w: 2.15, h: 3.5, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.OVAL, { x: x + 0.68, y: 1.4, w: 0.8, h: 0.8, fill: { color: theme.accent } });
    slide.addText(s.letter, { x: x + 0.68, y: 1.4, w: 0.8, h: 0.8, fontSize: 28, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(s.name, { x: x + 0.1, y: 2.4, w: 1.95, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.primary, bold: true, align: "center" });
    slide.addText(s.desc, { x: x + 0.1, y: 3.0, w: 1.95, h: 1.2, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.8, w: 9, h: 0.6, fill: { color: theme.primary }, rectRadius: 0.08 });
  slide.addText("STAR模型是还原完整经历的最佳框架", { x: 0.5, y: 4.8, w: 9, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  addPageNum(slide, 42);
}

// 4-12: 术六：边界探索 - 定义
{
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fill: { color: theme.primary }, rectRadius: 0.08 });
  slide.addText("6", { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("追问七术之六：边界探索", { x: 1.15, y: 0.4, w: 8, h: 0.6, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.4, w: 9, h: 1.0, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("定义", { x: 0.7, y: 1.5, w: 1, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("探索经验的适用边界和限制条件", { x: 0.7, y: 1.85, w: 8.6, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("示例", { x: 0.5, y: 2.6, w: 1, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.1, w: 9, h: 1.6, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("问", { x: 0.7, y: 3.2, w: 0.5, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("这种方法在什么情况下不适用？有什么限制？", { x: 0.7, y: 3.55, w: 8.6, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
  slide.addText("— 明确边界让经验更安全可复用", { x: 0.7, y: 4.2, w: 8.6, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent });
  addPageNum(slide, 43);
}

// 4-13: 术六：边界探索 - 边界问题
{
  const slide = createContentSlide("边界探索的典型问题");
  const questions = [
    "在什么情况下这种方法不适用？",
    "这种方法有什么局限性？",
    "有没有您曾经失败过的案例？",
    "使用这种方法需要什么前提条件？",
    "对于新手来说，使用这种方法有什么特别需要注意的？"
  ];
  slide.addText("通过这些问题，明确经验的边界条件", { x: 0.5, y: 1.1, w: 9, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  questions.forEach((q, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.6 + i * 0.75, w: 9, h: 0.65, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addText("\" " + q + " \"", { x: 0.7, y: 1.65 + i * 0.75, w: 8.6, h: 0.55, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
  });
  addPageNum(slide, 44);
}

// 4-14: 术七：效果验证 - 定义
{
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fill: { color: theme.primary }, rectRadius: 0.08 });
  slide.addText("7", { x: 0.5, y: 0.4, w: 0.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("追问七术之七：效果验证", { x: 1.15, y: 0.4, w: 8, h: 0.6, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.4, w: 9, h: 1.0, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("定义", { x: 0.7, y: 1.5, w: 1, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("追问经验实施后的效果和影响", { x: 0.7, y: 1.85, w: 8.6, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("示例", { x: 0.5, y: 2.6, w: 1, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.1, w: 9, h: 1.6, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("问", { x: 0.7, y: 3.2, w: 0.5, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("用了这个方法之后，效果如何？有什么数据证明？", { x: 0.7, y: 3.55, w: 8.6, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
  slide.addText("— 验证效果让经验更有说服力", { x: 0.7, y: 4.2, w: 8.6, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent });
  addPageNum(slide, 45);
}

// 4-15: 术七：效果验证 - 效果维度
{
  const slide = createContentSlide("效果验证的维度");
  const dimensions = [
    { dim: "量化指标", example: "业绩提升X%、客户满意度提升Y分" },
    { dim: "时间节省", example: "处理时间从X天缩短到Y天" },
    { dim: "成本降低", example: "成本降低X%、效率提升Y%" },
    { dim: "质量改善", example: "出错率从X%降到Y%、投诉率下降" },
    { dim: "主观评价", example: "客户反馈变好、领导认可度提升" },
    { dim: "间接影响", example: "团队氛围改善、能力提升等" }
  ];
  dimensions.forEach((d, i) => {
    const col = i < 2 ? 0 : 1;
    const row = i % 3;
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 1.4;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 1.2, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText(d.dim, { x: x + 0.2, y: y + 0.15, w: 4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(d.example, { x: x + 0.2, y: y + 0.6, w: 4, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 46);
}

// 4-16: 追问技巧总结
{
  const slide = createContentSlide("追问技巧总结");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.0, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("追问的精髓：让沉默为你服务", { x: 0.5, y: 1.1, w: 9, h: 1.0, fontSize: 22, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  const tips = [
    ["适时沉默", "专家说完后等待3-5秒，不要急于追问"],
    ["重复确认", "重复专家的关键词，引导进一步展开"],
    ["镜像反馈", "用专家的话复述，确认理解是否正确"],
    ["适时总结", "在关键点做个小结，让专家确认补充"]
  ];
  tips.forEach((t, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.3 + i * 0.8, w: 9, h: 0.7, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addText(t[0], { x: 0.7, y: 2.35 + i * 0.8, w: 1.8, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText(t[1], { x: 2.6, y: 2.35 + i * 0.8, w: 6.7, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 47);
}

// 4-17: 七术综合练习
{
  const slide = createContentSlide("七术综合练习");
  slide.addText("专家说：\"处理客户投诉关键是要有耐心\"", { x: 0.5, y: 1.1, w: 9, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
  const techniques = [
    { num: "1", q: "能举个例子说明吗？当时具体发生了什么？" },
    { num: "2", q: "为什么耐心这么重要？背后是什么原因？" },
    { num: "4", q: "对待普通客户和大客户，耐心程度有什么不同？" },
    { num: "5", q: "您能详细描述一下处理投诉的标准流程吗？" },
    { num: "6", q: "在什么情况下这种方法可能不适用？" },
    { num: "7", q: "用这个方法处理后，客户满意度和投诉率有什么变化？" }
  ];
  techniques.forEach((t, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.8 + i * 0.6, w: 9, h: 0.55, fill: { color: theme.light }, rectRadius: 0.05 });
    slide.addText(t.num + ".", { x: 0.6, y: 1.85 + i * 0.6, w: 0.4, h: 0.45, fontSize: 12, fontFace: "Arial", color: theme.accent, bold: true });
    slide.addText(t.q, { x: 1.0, y: 1.85 + i * 0.6, w: 8.3, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 48);
}

'''

with open(output_path, 'a', encoding='utf-8') as f:
    f.write(chapter4)
print(f"Part 4 written: {len(chapter4)} chars")
