# AI时代的企业创新 授课 PPT 设计规范

## 项目信息

- **主题**：AI时代的企业创新（如何在智能化浪潮中构建持续创新能力）
- **页数目标**：120-160 页
- **配色**：深蓝科技风（Tech & Night 风格）
- **风格**：极致美学、视觉化、多样化、现代科技感
- **输出目录**：`d:/CC/temp/ai-enterprise-innovation/slides/output/`

## 配色（5 色主题对象）

基于 Tech & Night 风格，适合AI/科技主题：

```javascript
const theme = {
  primary:   "000814",  // 极深蓝 - 标题、章节号、主背景元素
  secondary: "003566",  // 中蓝 - 正文文字、次要元素
  accent:    "ffc300",  // 金黄 - 强调、关键数据、高亮
  light:     "ffd60a",  // 亮黄 - 装饰线、次要强调
  bg:        "001d3d"   // 深蓝 - 主背景（暗色调，符合Tech & Night）
};
```

辅助色（在 theme 外可使用）：
- `FFFFFF` 纯白（卡片底、对比文字）
- `90e0ef` 浅蓝（辅助装饰）
- `00b4d8` 青蓝（图表、进度条）
- `03045e` 深蓝（极深背景元素）

## 字体

- **中文**：`Microsoft YaHei`
- **英文标题**：`Georgia` 或 `Cambria`（有书卷气）
- **英文正文**：`Arial`

## 风格

**Sharp & Compact**（科技感、紧凑、专业）
- 小元素圆角：0"
- 中等元素圆角：0.03"
- 大元素圆角：0.05"
- 页面边距：0.4"
- 元素间距：0.15-0.25"

## 尺寸

- **10" x 5.625"**（LAYOUT_16x9）

## 页脚统一规范

每页（封面除外）底部加入：
- **底部 0.05" 高的细线**（y=5.42"）：左 1/3 段为 theme.accent，中段空，右 1/3 段为 theme.light
- **页脚左侧文字**（x=0.5" y=5.46"）："AI时代的企业创新" + 页码（"03"），字号 9pt
- **页脚右侧文字**（x=6" y=5.46"）：当前章节名（可空），字号 9pt
- 文字颜色可用浅色（90e0ef）以在深色背景上可读

### 页脚代码模板

```javascript
// 页脚细线（左 1/3 金黄 + 右 1/3 亮黄）
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 5.42, w: 3, h: 0.02,
  fill: { color: theme.accent }, line: { type: 'none' }
});
slide.addShape(pres.shapes.RECTANGLE, {
  x: 6.5, y: 5.42, w: 3, h: 0.02,
  fill: { color: theme.light }, line: { type: 'none' }
});
// 页脚左侧文字
slide.addText(`AI时代的企业创新  /  ${pageNumber}`, {
  x: 0.5, y: 5.46, w: 5, h: 0.25,
  fontSize: 9, fontFace: 'Microsoft YaHei',
  color: "90e0ef", align: 'left', valign: 'middle', margin: 0
});
// 页脚右侧文字
slide.addText(sectionName, {
  x: 6, y: 5.46, w: 3.5, h: 0.25,
  fontSize: 9, fontFace: 'Microsoft YaHei',
  color: "90e0ef", align: 'right', valign: 'middle', margin: 0
});
```

`pageNumber` 是字符串（"03" 这种格式），`sectionName` 是当前章节名。

## 功能页规范

### 封面 (Cover)
- 深蓝底（theme.bg）
- 左侧：大标题 + 副标题 + 课程编号
- 右侧：装饰性几何块（金黄 + 亮黄组合）
- 不加页脚

### 章节扉页 (Section Divider)
- 整页深蓝背景（theme.primary）
- 大数字编号（金黄色）+ 章节标题
- 章节副标题 1 行
- 底部细线 + 简短导语

### 目录 (TOC)
- 深蓝底
- 5 个章节卡片，垂直或网格排列
- 每张卡片：序号 + 标题 + 1 行描述
- 金黄色装饰元素

### 结束页 (Closing)
- 与封面呼应
- 大字核心金句
- 副标题：总结性话语

## 内容页（Content）规范

**核心：视觉化、多样化，绝不重复同一布局！**

### 可用布局库（每页必须用其中之一，且相邻页必须不同）

1. **大数字引述**：核心论断用 60-72pt 大字居中
2. **三栏并排**：3 个并列概念，各有图标块
3. **2x2 矩阵**：4 个象限（如 4 种挑战）
4. **流程/时间轴**：横向 4-5 步骤带箭头
5. **对比卡片**：左右对比（A vs B）
6. **引述+出处**：大引号 + 引文 + 出处（小字）
7. **大数字 + 说明**：60-96pt 数据 + 一句解读
8. **图标行**：4-6 个小圆图标 + 短文字
9. **图文混排**：左侧文字 + 右侧几何/色块图示
10. **列表 + 装饰**：要点列表 + 右侧大型几何装饰
11. **案例框**：醒目边框 + 案例标题 + 案例内容
12. **章节小结**：3-5 个关键要点 + 大图标
13. **数据可视化**：图表 + 关键洞见

### 装饰元素库

可用几何形状：
- 矩形色块（金黄/亮黄填充）
- 圆形（小圆点作为强调标记）
- 横向/竖向细线（分隔）
- 大数字水印（淡金色作为背景装饰）
- 角标（页面角落的小金色矩形或圆形）

## 配色使用规范

| 用途 | 颜色 |
|------|------|
| 大标题、章节号 | theme.accent 金黄 |
| 正文 | FFFFFF 白色 |
| 关键数据、强调字 | theme.light 亮黄 |
| 装饰线、卡片边 | theme.secondary 中蓝 |
| 页面背景 | theme.bg 深蓝 |
| 卡片底 | 003566 深蓝（略浅于bg）|
| 弱化文字（页脚/出处） | 90e0ef 浅蓝 |

## 通用规则

- **不用渐变**（design-system 禁止）
- **不用动画**
- **不用加粗正文**（design-system 禁止）
- **正文居中或左对齐**，标题可居中或左对齐
- **每页必有视觉元素**（非纯文字）
- **页边距 ≥ 0.4"**
- **绝不重复使用相同布局的连续两页**
- **深色背景为主**（符合Tech & Night风格）

## 命名规范

每个 slide-XX.js 文件名：

```
01_封面.js
02_目录.js
03_导言_AI正在改变创新规则.js
...
```

## 输出文件

- 源代码：`d:/CC/temp/ai-enterprise-innovation/slides/slide-XX_*.js`
- 图片：`d:/CC/temp/ai-enterprise-innovation/slides/imgs/`
- 最终 PPTX：`d:/CC/temp/ai-enterprise-innovation/slides/output/AI时代的企业创新.pptx`
