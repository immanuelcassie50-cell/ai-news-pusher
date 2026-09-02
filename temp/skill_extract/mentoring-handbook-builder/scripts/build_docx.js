#!/usr/bin/env node
/**
 * build_docx.js
 *
 * 把已经写好的手册正文markdown，机械化地套用《word排版规范.md》生成最终.docx。
 * 这个脚本不做任何内容判断——标题写什么、案例写什么、字数够不够，都是撰写正文
 * 时（Claude结合内容标准.md/结构模板.md/写作风格指南.md）已经决定好的，这里只
 * 负责把文字"排版"成规范要求的样子，保证几十份不同课题的手册排版风格完全一致。
 *
 * 正文markdown书写约定（撰写手册正文时必须遵守，否则本脚本无法正确识别结构）：
 *   - 文件开头可选一段简单元数据头（用 --- 包裹，一行一个 key: value）：
 *       ---
 *       title: 化工装置中控操作岗带教手册
 *       subtitle: 异常处理与巡检判断专题
 *       position: 化工装置DCS中控操作岗
 *       author: 罗宏伟
 *       date: 2026-07
 *       ---
 *     （author/date 缺省时使用 assets/word_style_config.json 里的默认值和当前日期）
 *   - 一级标题 `# xxx`  → 章（Word“标题1”，计入目录）
 *   - 二级标题 `## xxx` → 节（Word“标题2”，计入目录）
 *   - 三级标题 `### xxx`→ 小节（Word“标题3”，不计入目录，比如"关键判断点与引导提问"）
 *   - 以 `> ` 开头的行 → 案例内容，渲染为浅灰底纹色块（可跨多行连续的 `>` 视为同一个案例块）
 *   - 以 `→ ` 开头的行 → 引导提问/纠偏语，渲染为楷体强调，前面保留箭头符号
 *   - 以 `- ` 开头的行 → 项目符号列表
 *   - 其他非空行 → 正文段落（首行缩进2字符）
 *
 * 用法:
 *   node build_docx.js <正文.md> <输出.docx> [--config path/to/word_style_config.json]
 */

const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Header, Footer, PageNumber, TableOfContents, ShadingType,
  convertInchesToTwip, LevelFormat,
} = require("docx");

function loadConfig(configPath) {
  const raw = fs.readFileSync(configPath, "utf-8");
  return JSON.parse(raw);
}

function parseFrontMatter(text) {
  const meta = {};
  let body = text;
  const m = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (m) {
    const [, head, rest] = m;
    head.split("\n").forEach((line) => {
      const idx = line.indexOf(":");
      if (idx > -1) {
        const key = line.slice(0, idx).trim();
        const val = line.slice(idx + 1).trim();
        if (key) meta[key] = val;
      }
    });
    body = rest;
  }
  return { meta, body };
}

// ---- 正文段落解析 ----

function classifyLine(line) {
  if (/^#\s+/.test(line)) return { type: "h1", text: line.replace(/^#\s+/, "") };
  if (/^##\s+/.test(line)) return { type: "h2", text: line.replace(/^##\s+/, "") };
  if (/^###\s+/.test(line)) return { type: "h3", text: line.replace(/^###\s+/, "") };
  if (/^>\s?/.test(line)) return { type: "case", text: line.replace(/^>\s?/, "") };
  if (/^→\s?/.test(line)) return { type: "prompt", text: line.replace(/^→\s?/, "") };
  if (/^[-*]\s+/.test(line)) return { type: "bullet", text: line.replace(/^[-*]\s+/, "") };
  return { type: "body", text: line };
}

function buildBodyParagraphs(bodyText, cfg) {
  const lines = bodyText.split("\n");
  const paragraphs = [];
  let caseBuffer = [];

  function flushCase() {
    if (caseBuffer.length === 0) return;
    paragraphs.push(
      new Paragraph({
        shading: { type: ShadingType.CLEAR, fill: cfg.colors.case_shading },
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: caseBuffer.join(""),
            font: cfg.fonts.body_cn,
            size: cfg.sizes.body,
          }),
        ],
      })
    );
    caseBuffer = [];
  }

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushCase();
      continue;
    }
    const item = classifyLine(line);

    if (item.type !== "case") flushCase();

    switch (item.type) {
      case "h1":
        paragraphs.push(
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            pageBreakBefore: true,
            children: [
              new TextRun({
                text: item.text,
                font: cfg.fonts.heading_cn,
                bold: true,
                size: cfg.sizes.heading1,
                color: cfg.colors.accent,
              }),
            ],
          })
        );
        break;
      case "h2":
        paragraphs.push(
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 240, after: 120 },
            children: [
              new TextRun({
                text: item.text,
                font: cfg.fonts.heading_cn,
                bold: true,
                size: cfg.sizes.heading2,
                color: cfg.colors.accent,
              }),
            ],
          })
        );
        break;
      case "h3":
        paragraphs.push(
          new Paragraph({
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 180, after: 100 },
            children: [
              new TextRun({
                text: item.text,
                font: cfg.fonts.heading_cn,
                bold: true,
                size: cfg.sizes.heading3,
              }),
            ],
          })
        );
        break;
      case "case":
        caseBuffer.push((caseBuffer.length ? "" : "") + item.text);
        break;
      case "prompt":
        paragraphs.push(
          new Paragraph({
            spacing: { before: 80, after: 80 },
            children: [
              new TextRun({
                text: "→ " + item.text,
                font: cfg.fonts.body_cn,
                italics: true,
                size: cfg.sizes.body,
              }),
            ],
          })
        );
        break;
      case "bullet":
        paragraphs.push(
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({
                text: item.text,
                font: cfg.fonts.body_cn,
                size: cfg.sizes.body,
              }),
            ],
          })
        );
        break;
      default:
        paragraphs.push(
          new Paragraph({
            indent: { firstLine: convertInchesToTwip(0.3) },
            spacing: { line: 360, before: 60, after: 60 },
            children: [
              new TextRun({ text: item.text, font: cfg.fonts.body_cn, size: cfg.sizes.body }),
            ],
          })
        );
    }
  }
  flushCase();
  return paragraphs;
}

// ---- 封面 / 目录 / 正文 三个 section ----

function buildCoverSection(meta, cfg) {
  const title = meta.title || "岗位带教手册";
  const subtitle = meta.subtitle || "";
  const position = meta.position || "";
  const author = meta.author || cfg.defaults.author;
  const date = meta.date || new Date().toISOString().slice(0, 7);

  const children = [
    new Paragraph({ spacing: { before: 3000 }, children: [] }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({ text: title, bold: true, size: cfg.sizes.cover_title, font: cfg.fonts.heading_cn }),
      ],
    }),
  ];

  if (subtitle) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 200 },
        children: [
          new TextRun({ text: subtitle, size: cfg.sizes.cover_subtitle, color: cfg.colors.accent, font: cfg.fonts.heading_cn }),
        ],
      })
    );
  }

  children.push(new Paragraph({ spacing: { before: 2000 }, children: [] }));

  if (position) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: `适用岗位/课题：${position}`, size: cfg.sizes.body, font: cfg.fonts.body_cn })],
      })
    );
  }
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 120 },
      children: [new TextRun({ text: `作者：${author}`, size: cfg.sizes.body, font: cfg.fonts.body_cn })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 120 },
      children: [new TextRun({ text: date, size: cfg.sizes.body, font: cfg.fonts.body_cn })],
    })
  );

  return {
    properties: { page: { margin: cfg.page.margin, size: { width: cfg.page.width, height: cfg.page.height } } },
    children,
  };
}

function buildTocSection(cfg) {
  return {
    properties: { page: { margin: cfg.page.margin, size: { width: cfg.page.width, height: cfg.page.height } } },
    children: [
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "目录", bold: true, size: cfg.sizes.heading1, font: cfg.fonts.heading_cn })],
      }),
      new TableOfContents("目录", {
        hyperlink: true,
        headingStyleRange: "1-2",
      }),
    ],
  };
}

function buildBodySection(meta, bodyParagraphs, cfg) {
  const title = meta.title || "岗位带教手册";
  return {
    properties: {
      page: {
        margin: cfg.page.margin,
        size: { width: cfg.page.width, height: cfg.page.height },
        pageNumbers: { start: 1 },
      },
    },
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            tabStops: [{ type: "right", position: 9026 }],
            children: [
              new TextRun({ text: title, size: 18, color: "808080", font: cfg.fonts.body_cn }),
            ],
          }),
        ],
      }),
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: "第 ", size: 18 }),
              new TextRun({ children: [PageNumber.CURRENT], size: 18 }),
              new TextRun({ text: " 页 / 共 ", size: 18 }),
              new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 18 }),
              new TextRun({ text: " 页", size: 18 }),
            ],
          }),
        ],
      }),
    },
    children: bodyParagraphs,
  };
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error("用法: node build_docx.js <正文.md> <输出.docx> [--config path]");
    process.exit(1);
  }
  const [mdPath, outPath] = args;
  const configFlagIdx = args.indexOf("--config");
  const configPath = configFlagIdx > -1 ? args[configFlagIdx + 1]
    : path.join(__dirname, "..", "assets", "word_style_config.json");

  const cfg = loadConfig(configPath);
  const raw = fs.readFileSync(mdPath, "utf-8");
  const { meta, body } = parseFrontMatter(raw);
  const bodyParagraphs = buildBodyParagraphs(body, cfg);

  const doc = new Document({
    creator: meta.author || cfg.defaults.author,
    title: meta.title || "岗位带教手册",
    numbering: {
      config: [
        {
          reference: "default-bullets",
          levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT }],
        },
      ],
    },
    sections: [
      buildCoverSection(meta, cfg),
      buildTocSection(cfg),
      buildBodySection(meta, bodyParagraphs, cfg),
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outPath, buffer);
  console.log(`已生成: ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
