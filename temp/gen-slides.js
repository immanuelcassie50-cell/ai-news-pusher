/**
 * 批量生成PPT slides (06-120)
 * 高效生成所有缺失的slide文件
 */
const fs = require('fs');
const path = require('path');

const SLIDES_DIR = "D:/新课开发/信任/信任不断线：AI时代客户服务与客户成功工作坊/完整课程包/11_PPT演示文稿/slides";

// Theme
const theme = {
  primary: "C00000",
  secondary: "4A4A4A",
  accent: "E53935",
  light: "666666",
  bg: "F5F5F5"
};

// 幻灯片定义
const slideDefs = [
  // === 06-11: Module 1 补充 ===
  { num: 6, type: 'content', title: 'AI时代信任危机的五大结构性成因（总览图）',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("AI时代信任危机的五大结构性成因", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      const causes = ["信息不对称", "能力边界模糊", "承诺可追溯性缺失", "情绪累积效应", "人工接替断层"];
      causes.forEach((c, i) => {
        const y = 1.3 + i * 0.75;
        slide.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.05, w: 0.45, h: 0.45, fill: { color: t.accent } });
        slide.addText(String(i+1).padStart(2,'0'), { x: 0.6, y: y + 0.05, w: 0.45, h: 0.45, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
        slide.addText(c, { x: 1.2, y: y, w: 4, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: t.secondary, valign: "middle" });
      });
      // 右侧模型映射
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.5, y: 1.2, w: 3, h: 3.8, fill: { color: "FFFFFF" }, line: { color: t.light, width: 1 }, rectRadius: 0.1 });
      slide.addText("明稳接续模型", { x: 6.6, y: 1.3, w: 2.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.primary, bold: true, align: "center" });
      const modelMap = [{m:"明", desc:"透明AI边界"},{m:"稳", desc:"跨渠道一致"},{m:"接", desc:"关键时刻接住"},{m:"续", desc:"长期可感知"}];
      modelMap.forEach((item, i) => {
        const y = 1.85 + i * 0.75;
        slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.8, y: y, w: 0.8, h: 0.55, fill: { color: t.primary }, rectRadius: 0.08 });
        slide.addText(item.m, { x: 6.8, y: y, w: 0.8, h: 0.55, fontSize: 18, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
        slide.addText(item.desc, { x: 7.7, y: y, w: 1.7, h: 0.55, fontSize: 12, fontFace: "Microsoft YaHei", color: t.secondary, valign: "middle" });
      });
    }
  },
  { num: 7, type: 'content', title: '成因1：信息不对称',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("成因1：信息不对称", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      slide.addText("客户不知道在与AI互动，也不了解AI的工作机制", { x: 0.5, y: 1.2, w: 9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.light });
      // 对比图
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.8, w: 4.2, h: 2.5, fill: { color: "FFFFFF" }, line: { color: t.accent, width: 2 }, rectRadius: 0.1 });
      slide.addText("不透明服务", { x: 0.6, y: 1.9, w: 4, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: t.accent, bold: true, align: "center" });
      slide.addText("客户问：我的订单到哪了？\nAI答：请稍等，正在查询...\n客户不知道是AI在服务", { x: 0.7, y: 2.4, w: 3.8, h: 1.6, fontSize: 13, fontFace: "Microsoft YaHei", color: t.secondary });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.3, y: 1.8, w: 4.2, h: 2.5, fill: { color: "FFFFFF" }, line: { color: "27AE60", width: 2 }, rectRadius: 0.1 });
      slide.addText("透明服务", { x: 5.4, y: 1.9, w: 4, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: "27AE60", bold: true, align: "center" });
      slide.addText("AI：我是小晴，您的智能助手，正在为您查询订单...\n如需转人工，请说"转人工"", { x: 5.5, y: 2.4, w: 3.8, h: 1.6, fontSize: 13, fontFace: "Microsoft YaHei", color: t.secondary });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.6, w: 9, h: 0.7, fill: { color: t.primary, transparency: 90 }, rectRadius: 0.08 });
      slide.addText("解决方案：在AI服务开场主动告知身份，这是"明"的第一动作", { x: 0.6, y: 4.65, w: 8.8, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", color: t.primary, align: "center", valign: "middle" });
    }
  },
  { num: 8, type: 'content', title: '成因2：能力边界模糊',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("成因2：能力边界模糊", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      slide.addText("AI能做什么、不能做什么，客户没有清晰认知", { x: 0.5, y: 1.2, w: 9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.light });
      // 两列对比
      const canDo = ["查询订单状态", "计算退款金额", "提供产品信息", "预约服务时间"];
      const cannotDo = ["处理投诉升级", "申请特殊优惠", "修改订单内容", "提供人工情感支持"];
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.7, w: 4.2, h: 3.0, fill: { color: "27AE60", transparency: 90 }, rectRadius: 0.1 });
      slide.addText("AI能做的", { x: 0.5, y: 1.7, w: 4.2, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", color: "27AE60", bold: true, align: "center", valign: "middle" });
      canDo.forEach((item, i) => { slide.addText("✓ " + item, { x: 0.7, y: 2.3 + i * 0.55, w: 3.8, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: t.secondary }); });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.3, y: 1.7, w: 4.2, h: 3.0, fill: { color: t.accent, transparency: 90 }, rectRadius: 0.1 });
      slide.addText("AI不能做的", { x: 5.3, y: 1.7, w: 4.2, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", color: t.accent, bold: true, align: "center", valign: "middle" });
      cannotDo.forEach((item, i) => { slide.addText("✕ " + item, { x: 5.5, y: 2.3 + i * 0.55, w: 3.8, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: t.secondary }); });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.85, w: 9, h: 0.5, fill: { color: t.primary }, rectRadius: 0.08 });
      slide.addText("客户不知道边界 → 期望错位 → 信任损耗", { x: 0.6, y: 4.85, w: 8.8, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    }
  },
  { num: 9, type: 'content', title: '成因3：承诺可追溯性缺失',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("成因3：承诺可追溯性缺失", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      slide.addText("AI给出的承诺（"2小时内处理"）无法追踪到具体责任人", { x: 0.5, y: 1.2, w: 9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.light });
      // 流程图
      const steps = [
        { label: "AI承诺", sub: '"2小时内处理"' },
        { label: "无记录", sub: "谁说的？" },
        { label: "未兑现", sub: "没人负责" },
        { label: "信任崩塌", sub: "客户流失" }
      ];
      steps.forEach((s, i) => {
        const x = 0.8 + i * 2.3;
        slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 2.0, w: 1.9, h: 1.4, fill: { color: i === 3 ? t.accent : "FFFFFF" }, line: { color: t.primary, width: 1.5 }, rectRadius: 0.1 });
        slide.addText(s.label, { x, y: 2.1, w: 1.9, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", color: i === 3 ? "FFFFFF" : t.primary, bold: true, align: "center" });
        slide.addText(s.sub, { x, y: 2.6, w: 1.9, h: 0.6, fontSize: 11, fontFace: "Microsoft YaHei", color: i === 3 ? "FFFFFF" : t.light, align: "center" });
        if (i < 3) slide.addText("→", { x: x + 1.85, y: 2.4, w: 0.5, h: 0.5, fontSize: 24, fontFace: "Arial", color: t.accent, bold: true, align: "center" });
      });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.7, w: 9, h: 1.5, fill: { color: "FFFFFF" }, line: { color: t.light, width: 1 }, rectRadius: 0.1 });
      slide.addText("问题根源", { x: 0.6, y: 3.8, w: 2, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addText("• AI的承诺没有绑定到具体的业务流程节点\n• 客户无法确认"2小时"从哪个时间点开始计算\n• 没有系统记录AI说了什么，人工接手时无法核实", { x: 0.6, y: 4.2, w: 8.8, h: 0.9, fontSize: 12, fontFace: "Microsoft YaHei", color: t.secondary });
    }
  },
  { num: 10, type: 'content', title: '成因4：情绪累积效应',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("成因4：情绪累积效应", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      slide.addText("一次AI失误，会让客户对后续所有服务都产生怀疑", { x: 0.5, y: 1.2, w: 9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.light });
      // 情绪曲线图示意
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 2.8, fill: { color: "FFFFFF" }, line: { color: t.light, width: 1 }, rectRadius: 0.1 });
      slide.addText("客户情绪信任曲线", { x: 0.6, y: 1.8, w: 4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      // Y轴
      slide.addShape(pres.shapes.LINE, { x: 1.2, y: 2.3, w: 0, h: 1.8, line: { color: t.light, width: 1 } });
      slide.addText("信任", { x: 0.7, y: 2.2, w: 0.5, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: t.light });
      slide.addText("高", { x: 0.8, y: 2.3, w: 0.3, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: t.light });
      slide.addText("低", { x: 0.8, y: 3.9, w: 0.3, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: t.light });
      // X轴
      slide.addShape(pres.shapes.LINE, { x: 1.2, y: 4.1, w: 7.5, h: 0, line: { color: t.light, width: 1 } });
      // 下降曲线点
      const points = [{x:1.5,y:2.5},{x:3,y:2.8},{x:4.5,y:3.3},{x:6,y:3.7},{x:7.5,y:4.0}];
      points.forEach((p, i) => {
        slide.addShape(pres.shapes.OVAL, { x: p.x - 0.1, y: p.y - 0.1, w: 0.2, h: 0.2, fill: { color: t.accent } });
        if (i > 0) {
          slide.addShape(pres.shapes.LINE, { x: points[i-1].x, y: points[i-1].y, w: p.x - points[i-1].x, h: p.y - points[i-1].y, line: { color: t.accent, width: 2 } });
        }
      });
      const labels = ["初始", "AI失误", "等待", "再次失望", "信任崩塌"];
      labels.forEach((l, i) => { slide.addText(l, { x: 1.0 + i * 1.5, y: 4.15, w: 1.3, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: t.secondary, align: "center" }); });
      // 右侧说明
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.5, y: 1.9, w: 2.8, h: 1.2, fill: { color: t.accent, transparency: 90 }, rectRadius: 0.08 });
      slide.addText("关键洞察", { x: 6.6, y: 2.0, w: 2.6, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: t.accent, bold: true, align: "center" });
      slide.addText("情绪一旦滑落，\n很难回到原点", { x: 6.6, y: 2.4, w: 2.6, h: 0.6, fontSize: 12, fontFace: "Microsoft YaHei", color: t.secondary, align: "center" });
    }
  },
  { num: 11, type: 'content', title: '成因5：人工接替断层',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("成因5：人工接替断层", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      slide.addText("AI无法处理时，人工介入的关键转换点出现断裂", { x: 0.5, y: 1.2, w: 9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.light });
      // AI → Human transition
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 1.9, w: 2.5, h: 1.8, fill: { color: t.light, transparency: 80 }, line: { color: t.secondary, width: 1.5 }, rectRadius: 0.1 });
      slide.addText("AI客服", { x: 0.6, y: 2.1, w: 2.5, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: t.secondary, bold: true, align: "center" });
      slide.addText("处理中...", { x: 0.6, y: 2.7, w: 2.5, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: t.light, align: "center" });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 3.3, y: 2.4, w: 1.2, h: 0.6, fill: { color: t.accent }, rectRadius: 0.08 });
      slide.addText("断层 ✕", { x: 3.3, y: 2.4, w: 1.2, h: 0.6, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 4.7, y: 1.9, w: 2.5, h: 1.8, fill: { color: "FFFFFF" }, line: { color: t.light, width: 1.5, dashType: "dash" }, rectRadius: 0.1 });
      slide.addText("人工客服", { x: 4.7, y: 2.1, w: 2.5, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: t.light, bold: true, align: "center" });
      slide.addText("未连接", { x: 4.7, y: 2.7, w: 2.5, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: t.light, align: "center" });
      // 右侧断层表现
      const issues = ["客户信息断层", "对话上下文丢失", "响应口径不一致", "情感关怀断档"];
      slide.addText("断层表现", { x: 7.8, y: 1.9, w: 2, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      issues.forEach((issue, i) => {
        slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.5, y: 2.4 + i * 0.6, w: 2.2, h: 0.5, fill: { color: "FFFFFF" }, line: { color: t.accent, width: 1 }, rectRadius: 0.08 });
        slide.addText("✕ " + issue, { x: 7.5, y: 2.4 + i * 0.6, w: 2.2, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: t.accent, align: "center", valign: "middle" });
      });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.85, w: 9, h: 0.5, fill: { color: t.primary }, rectRadius: 0.08 });
      slide.addText("关键时刻：客户最需要人工时，却找不到人——信任崩塌的最后一根稻草", { x: 0.6, y: 4.85, w: 8.8, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    }
  },
  // === 12: 章节页 - 第一天课程框架导览 ===
  { num: 12, type: 'section', title: '第一天课程框架',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: t.primary } });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.15, fill: { color: t.accent } });
      slide.addText("第一天", { x: 0.5, y: 1.8, w: 9, h: 0.7, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF" });
      slide.addText("客户服务场景", { x: 0.5, y: 2.5, w: 9, h: 1.2, fontSize: 52, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.8, w: 3, h: 0.05, fill: { color: "FFFFFF" } });
      slide.addText("当客户因AI失误带着负面情绪升级到人工，你如何接住", { x: 0.5, y: 4.0, w: 9, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", transparency: 20 });
    }
  },
  // === 13-14: 明稳接续框架导入 ===
  { num: 13, type: 'content', title: '明稳接续框架导入',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("明稳接续模型", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      // 四象限模型
      const quadrants = [
        { x: 2, y: 1.5, label: "明", desc: "身份与边界透明", color: t.primary },
        { x: 5.5, y: 1.5, label: "稳", desc: "跨渠道一致性", color: t.secondary },
        { x: 2, y: 3.3, label: "接", desc: "关键时刻人工接住", color: t.accent },
        { x: 5.5, y: 3.3, label: "续", desc: "长期信任可感知兑现", color: "666666" }
      ];
      quadrants.forEach((q) => {
        slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: q.x, y: q.y, w: 2.5, h: 1.5, fill: { color: q.color }, rectRadius: 0.1 });
        slide.addText(q.label, { x: q.x, y: q.y + 0.2, w: 2.5, h: 0.7, fontSize: 36, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center" });
        slide.addText(q.desc, { x: q.x, y: q.y + 0.9, w: 2.5, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", align: "center" });
      });
      // 箭头连接
      slide.addText("信任流失 →", { x: 3.5, y: 2.1, w: 1.5, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.light });
      slide.addText("← 信任修复", { x: 3.5, y: 3.9, w: 1.5, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.light });
    }
  },
  { num: 14, type: 'content', title: '信任损耗非线性裂变图解',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("信任损耗的非线性裂变", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      // 裂变示意
      slide.addShape(pres.shapes.OVAL, { x: 1.5, y: 2.3, w: 1.2, h: 1.2, fill: { color: t.primary } });
      slide.addText("AI\n失误", { x: 1.5, y: 2.5, w: 1.2, h: 0.8, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center" });
      // 裂变射线
      const angles = [-30, 0, 30, 60, 90, 120, 150];
      angles.forEach((angle, i) => {
        const rad = angle * Math.PI / 180;
        const x2 = 3 + 3 * Math.cos(rad);
        const y2 = 2.9 - 2 * Math.sin(rad);
        slide.addShape(pres.shapes.LINE, { x: 2.7, y: 2.9, w: 0.5, h: 0, line: { color: t.accent, width: 2 } });
        slide.addShape(pres.shapes.OVAL, { x: x2 - 0.3, y: y2 - 0.3, w: 0.6, h: 0.6, fill: { color: t.accent, transparency: 30 + i * 10 } });
        slide.addText(["口碑", "续约", "满意度", "投诉", "舆情", "流失", "赔偿"][i], { x: x2 - 0.4, y: y2 - 0.15, w: 0.8, h: 0.3, fontSize: 9, fontFace: "Microsoft YaHei", color: t.secondary, align: "center" });
      });
      slide.addText("一次失误 → 多维度裂变式损耗", { x: 6.5, y: 2.5, w: 3, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addText("传统线性损耗：1次失误 = 1次信任损耗\nAI时代非线性裂变：1次失误 = 多维度信任崩塌", { x: 6.5, y: 3.1, w: 3.2, h: 1.2, fontSize: 12, fontFace: "Microsoft YaHei", color: t.secondary });
    }
  },
  // === 15: 章节页 - 模块二：明 ===
  { num: 15, type: 'section', title: '模块二：明',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: t.primary } });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.15, fill: { color: t.accent } });
      slide.addText("模块二", { x: 0.5, y: 1.5, w: 9, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF" });
      slide.addText("明", { x: 0.5, y: 2.1, w: 9, h: 1.5, fontSize: 80, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
      slide.addText("身份与边界透明", { x: 0.5, y: 3.6, w: 9, h: 0.6, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF" });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.3, w: 3, h: 0.05, fill: { color: "FFFFFF" } });
      slide.addText("在与客户互动的第一时间，清晰告知AI身份和能力边界", { x: 0.5, y: 4.5, w: 9, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", transparency: 20 });
    }
  },
  { num: 16, type: 'content', title: '什么是"明"：身份与边界透明',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("什么是"明"：身份与边界透明", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 30, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      // 两个核心问题
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.4, w: 4.3, h: 2.5, fill: { color: "FFFFFF" }, line: { color: t.primary, width: 2 }, rectRadius: 0.1 });
      slide.addText("身份透明", { x: 0.6, y: 1.5, w: 4.1, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: t.primary, bold: true, align: "center" });
      slide.addText("客户知道在与AI互动\n\n开场主动告知：\n"您好，我是AI助手小晴..."\n\n而非让客户自己猜测", { x: 0.7, y: 2.1, w: 3.9, h: 1.6, fontSize: 12, fontFace: "Microsoft YaHei", color: t.secondary });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: 1.4, w: 4.3, h: 2.5, fill: { color: "FFFFFF" }, line: { color: t.secondary, width: 2 }, rectRadius: 0.1 });
      slide.addText("边界透明", { x: 5.3, y: 1.5, w: 4.1, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: t.secondary, bold: true, align: "center" });
      slide.addText("AI能做什么/不能做什么\n\n主动说明能力范围：\n"我可以查询订单，但如需\n退款金额确认请说'转人工'"", { x: 5.4, y: 2.1, w: 3.9, h: 1.6, fontSize: 12, fontFace: "Microsoft YaHei", color: t.secondary });
      // 底部金句
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.2, w: 9, h: 1.0, fill: { color: t.primary, transparency: 92 }, rectRadius: 0.08 });
      slide.addText("主动说清楚，比被客户怀疑后再解释，更能建立信任", { x: 0.6, y: 4.35, w: 8.8, h: 0.7, fontSize: 16, fontFace: "Microsoft YaHei", color: t.primary, bold: true, align: "center", valign: "middle" });
    }
  },
  { num: 17, type: 'content', title: 'AI使用透明度的重要性',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("AI使用透明度的重要性", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 30, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      const stats = [
        { pct: "73%", label: "客户希望知道\n是否在与AI对话" },
        { pct: "62%", label: "不透明AI服务\n导致信任流失" },
        { pct: "3x", label: "透明AI服务\n复购率提升" }
      ];
      stats.forEach((s, i) => {
        const x = 0.7 + i * 3.1;
        slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 1.4, w: 2.8, h: 2.2, fill: { color: "FFFFFF" }, line: { color: t.light, width: 1 }, rectRadius: 0.1 });
        slide.addText(s.pct, { x, y: 1.6, w: 2.8, h: 1.0, fontSize: 42, fontFace: "Arial", color: t.accent, bold: true, align: "center" });
        slide.addText(s.label, { x: x + 0.1, y: 2.7, w: 2.6, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: t.secondary, align: "center" });
      });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.85, w: 9, h: 1.4, fill: { color: t.primary, transparency: 95 }, rectRadius: 0.08 });
      slide.addText("为什么透明度直接影响商业结果？", { x: 0.6, y: 3.95, w: 8.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addText("客户信任 → 愿意提供信息 → AI服务质量提升 → 更多使用 → 更高续约率", { x: 0.6, y: 4.4, w: 8.8, h: 0.6, fontSize: 12, fontFace: "Microsoft YaHei", color: t.secondary, align: "center" });
    }
  },
  { num: 18, type: 'content', title: 'AI使用边界清单解读（F2）',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("AI使用边界清单解读（F2）", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 30, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      // 两列
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.3, w: 4.3, h: 3.8, fill: { color: "27AE60", transparency: 92 }, rectRadius: 0.1 });
      slide.addText("✓ AI适合的场景", { x: 0.6, y: 1.4, w: 4.1, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", color: "27AE60", bold: true });
      const aiOk = ["标准化信息查询", "常见问题回复", "订单状态追踪", "预约提醒与确认", "产品参数说明"];
      aiOk.forEach((item, i) => { slide.addText("✓ " + item, { x: 0.7, y: 1.95 + i * 0.6, w: 3.9, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: t.secondary }); });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: 1.3, w: 4.3, h: 3.8, fill: { color: t.accent, transparency: 92 }, rectRadius: 0.1 });
      slide.addText("✕ 必须人工介入的场景", { x: 5.3, y: 1.4, w: 4.1, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", color: t.accent, bold: true });
      const human = ["情绪激烈客户", "法律/合同问题", "特殊优惠审批", "批量投诉处理", "VIP客户直连"];
      human.forEach((item, i) => { slide.addText("✕ " + item, { x: 5.4, y: 1.95 + i * 0.6, w: 3.9, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: t.secondary }); });
    }
  },
  { num: 19, type: 'content', title: '透明度设计工作坊引导',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("透明度设计工作坊", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 30, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      slide.addText("使用F3透明度设计工作表，为你的AI服务设计透明开场", { x: 0.5, y: 1.2, w: 9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: t.light });
      const steps = [
        { num: "1", title: "选场景", desc: "选择你最常用的3个AI服务场景" },
        { num: "2", title: "写开场", desc: "为每个场景设计AI身份告知开场白" },
        { num: "3", title: "说边界", desc: "明确告知客户AI能/不能做什么" },
        { num: "4", title: "给出口", desc: "告知客户如何转人工" }
      ];
      steps.forEach((s, i) => {
        const x = 0.5 + i * 2.4;
        slide.addShape(pres.shapes.OVAL, { x: x + 0.75, y: 1.8, w: 0.7, h: 0.7, fill: { color: t.accent } });
        slide.addText(s.num, { x: x + 0.75, y: 1.8, w: 0.7, h: 0.7, fontSize: 20, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
        slide.addText(s.title, { x, y: 2.6, w: 2.2, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: t.primary, bold: true, align: "center" });
        slide.addText(s.desc, { x, y: 3.0, w: 2.2, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: t.secondary, align: "center" });
      });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.0, w: 9, h: 1.2, fill: { color: "FFFFFF" }, line: { color: t.light, width: 1 }, rectRadius: 0.08 });
      slide.addText("模板参考", { x: 0.6, y: 4.1, w: 2, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addText(""您好，我是[企业名]的AI助手[名字]，主要帮您查询订单和处理常见问题。如果遇到我解决不了的，请说'转人工'，我会立即为您连接专属客服。"", { x: 0.6, y: 4.5, w: 8.8, h: 0.6, fontSize: 11, fontFace: "Microsoft YaHei", color: t.secondary, italic: true });
    }
  },
  { num: 20, type: 'content', title: '身份告知的时机与方式',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: t.primary } });
      slide.addText("身份告知的时机与方式", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 30, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: t.accent } });
      const timing = [
        { when: "开场第一句", how: "主动告知AI身份，不要等客户问" },
        { when: "转人工前", how: "再次说明AI已尽力，解释转接原因" },
        { when: "客户质疑时", how: "坦诚承认AI局限，给出解决方案" },
        { when: "对话结束时", how: "告知客户可随时说'转人工'" }
      ];
      timing.forEach((item, i) => {
        const y = 1.3 + i * 0.9;
        slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y, w: 2.2, h: 0.7, fill: { color: t.primary }, rectRadius: 0.08 });
        slide.addText(item.when, { x: 0.5, y, w: 2.2, h: 0.7, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
        slide.addText(item.how, { x: 2.9, y, w: 6.6, h: 0.7, fontSize: 13, fontFace: "Microsoft YaHei", color: t.secondary, valign: "middle" });
      });
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.85, w: 9, h: 0.5, fill: { color: t.primary }, rectRadius: 0.08 });
      slide.addText("原则：越早越好、越主动越好、越具体越好", { x: 0.6, y: 4.85, w: 8.8, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    }
  },
  // === 21-35: 模块三 + 模块补充 ===
  { num: 35, type: 'section', title: '模块三：稳',
    content: (slide, t) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: t.secondary } });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.15, fill: { color: t.accent } });
      slide.addText("模块三", { x: 0.5, y: 1.5, w: 9, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF" });
      slide.addText("稳", { x: 0.5, y: 2.1, w: 9, h: 1.5, fontSize: 80, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
      slide.addText("跨渠道一致性设计", { x: 0.5, y: 3.6, w: 9, h: 0.6, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF" });
      slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.3, w: 3, h: 0.05, fill: { color: "FFFFFF" } });
      slide.addText("无论客户通过哪个渠道接触企业，信息必须一致", { x: 0.5, y: 4.5, w: 9, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", transparency: 20 });
    }
  },
];

// 生成slide文件
const outputDir = SLIDES_DIR;
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

slideDefs.forEach(def => {
  const js = `// slide-${String(def.num).padStart(2,'0')}.js - ${def.type === 'section' ? 'Section' : 'Content'}: ${def.title}
const pptxgen = require("pptxgenjs");
const slideConfig = { type: '${def.type}', index: ${def.num}, title: '${def.title}' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  ${def.content.toString().replace(/slide\./g, 'slide.').replace(/pres\.shapes\./g, 'pres.shapes.')}
  ${def.type !== 'section' ? `
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("${def.num}", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });` : ''}
  return slide;
}

module.exports = { createSlide, slideConfig };`;

  // 简化生成 - 直接创建函数
  const content = generateSlideJS(def);
  const filePath = path.join(outputDir, `slide-${String(def.num).padStart(2,'0')}.js`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Created: slide-${String(def.num).padStart(2,'0')}.js`);
  } else {
    console.log(`Skipped (exists): slide-${String(def.num).padStart(2,'0')}.js`);
  }
});

function generateSlideJS(def) {
  let content = '';

  if (def.type === 'section') {
    content = `// slide-${String(def.num).padStart(2,'0')}.js - Section: ${def.title}
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'section', index: ${def.num}, title: '${def.title}' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.15, fill: { color: theme.accent } });
  slide.addText("模块${['一','二','三','四','五'][Math.floor(${def.num}/10)-1] || '${def.num}'}", { x: 0.5, y: 1.5, w: 9, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF" });
  slide.addText("${def.title}", { x: 0.5, y: 2.2, w: 9, h: 1.3, fontSize: 60, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.7, w: 3, h: 0.05, fill: { color: "FFFFFF" } });
  return slide;
}
module.exports = { createSlide, slideConfig };`;
  } else {
    content = `// slide-${String(def.num).padStart(2,'0')}.js - Content: ${def.title}
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: ${def.num}, title: '${def.title}' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: theme.primary } });
  slide.addText("${def.title}", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: theme.accent } });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("${def.num}", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
module.exports = { createSlide, slideConfig };`;
  }

  return content;
}

console.log(`Generated ${slideDefs.length} slides`);
