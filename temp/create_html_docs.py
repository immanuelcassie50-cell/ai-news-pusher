#!/usr/bin/env python3
"""
Convert teaching documents from Markdown to HTML with light-background, responsive, printable styling.
"""

import subprocess
import os
from pathlib import Path

# Base paths
BASE_DIR = Path("D:/新课开发/安全/7.远程与居家办公安全-容易被忽视的新风险维度/教学文档")
OUTPUT_DIR = BASE_DIR

# CSS template for light-background, responsive, printable HTML
CSS_TEMPLATE = """
<style>
:root {
    --primary-color: #1a365d;
    --secondary-color: #2c5282;
    --accent-color: #3182ce;
    --text-color: #2d3748;
    --light-bg: #f7fafc;
    --border-color: #e2e8f0;
    --code-bg: #edf2f7;
}

* {
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.8;
    color: var(--text-color);
    background: #fff;
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 24px;
}

h1 {
    font-size: 2em;
    color: var(--primary-color);
    border-bottom: 3px solid var(--accent-color);
    padding-bottom: 12px;
    margin-top: 0;
}

h2 {
    font-size: 1.5em;
    color: var(--secondary-color);
    margin-top: 2em;
    padding-left: 12px;
    border-left: 4px solid var(--accent-color);
}

h3 {
    font-size: 1.2em;
    color: var(--primary-color);
    margin-top: 1.5em;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5em 0;
    font-size: 0.95em;
}

th, td {
    padding: 12px 16px;
    text-align: left;
    border: 1px solid var(--border-color);
}

th {
    background: var(--light-bg);
    font-weight: 600;
    color: var(--primary-color);
}

tr:nth-child(even) {
    background: var(--light-bg);
}

blockquote {
    margin: 1.5em 0;
    padding: 16px 24px;
    background: var(--light-bg);
    border-left: 4px solid var(--accent-color);
    font-style: italic;
}

code {
    background: var(--code-bg);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: "Consolas", "Monaco", monospace;
    font-size: 0.9em;
}

pre {
    background: var(--code-bg);
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5em 0;
}

pre code {
    background: none;
    padding: 0;
}

ul, ol {
    margin: 1em 0;
    padding-left: 1.5em;
}

li {
    margin: 0.5em 0;
}

hr {
    border: none;
    border-top: 2px solid var(--border-color);
    margin: 2em 0;
}

.warning {
    background: #fff5f5;
    border-left: 4px solid #c53030;
    padding: 16px;
    margin: 1.5em 0;
}

.tip {
    background: #f0fff4;
    border-left: 4px solid #38a169;
    padding: 16px;
    margin: 1.5em 0;
}

.module-header {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 32px;
    margin: 0 -24px 2em;
    border-radius: 0;
}

.module-header h1 {
    color: white;
    border: none;
    margin: 0;
    padding: 0;
}

.learning-map {
    background: var(--light-bg);
    padding: 20px;
    border-radius: 8px;
    margin: 1.5em 0;
}

.exercise {
    background: #fffff0;
    border: 1px solid #ecc94b;
    padding: 16px;
    margin: 1.5em 0;
    border-radius: 8px;
}

.form {
    background: var(--code-bg);
    padding: 16px;
    font-family: monospace;
    white-space: pre-wrap;
    margin: 1.5em 0;
    border-radius: 8px;
}

/* Print styles */
@media print {
    body {
        max-width: none;
        padding: 20px;
        font-size: 12pt;
    }

    .module-header {
        background: var(--primary-color) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }

    h1, h2, h3 {
        page-break-after: avoid;
    }

    table {
        page-break-inside: avoid;
    }

    pre, blockquote {
        page-break-inside: avoid;
    }
}

/* Responsive */
@media (max-width: 600px) {
    body {
        padding: 20px 16px;
        font-size: 15px;
    }

    h1 {
        font-size: 1.6em;
    }

    h2 {
        font-size: 1.3em;
    }

    table {
        font-size: 0.85em;
    }

    .module-header {
        margin: 0 -16px 1.5em;
        padding: 20px;
    }
}
</style>
"""

def convert_md_to_html(md_file, output_file):
    """Convert markdown to HTML with custom CSS using pandoc."""
    # First convert to HTML using pandoc
    html_content = subprocess.run(
        ["pandoc", str(md_file), "-f", "markdown", "-t", "html", "--standalone"],
        capture_output=True,
        text=True,
        encoding="utf-8"
    ).stdout

    # Wrap with our CSS and proper HTML structure
    full_html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{md_file.stem}</title>
{CSS_TEMPLATE}
</head>
<body>
{html_content}
</body>
</html>"""

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(full_html)

    print(f"Created: {output_file}")

def main():
    # Get all markdown files in teaching documents directory
    md_files = sorted(BASE_DIR.glob("*.md"))

    for md_file in md_files:
        output_file = OUTPUT_DIR / f"{md_file.stem}.html"
        try:
            convert_md_to_html(md_file, output_file)
        except Exception as e:
            print(f"Error converting {md_file}: {e}")

if __name__ == "__main__":
    main()
