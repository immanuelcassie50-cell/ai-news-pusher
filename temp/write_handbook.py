# Part 1 - CSS styles
css = """
:root {
  --primary: #1a2744;
  --primary-light: #2a3a5c;
  --accent: #c9a84c;
  --accent-light: #e8c96a;
  --text: #2c2c2c;
  --text-light: #5a5a5a;
  --bg: #f5f3ee;
  --bg-card: #ffffff;
  --border: #d4cfc4;
  --success: #3d7a5c;
  --danger: #a84444;
  --highlight: #fff8e8;
  --font-title: "Noto Serif SC", "Source Han Serif CN", "SimSun", serif;
  --font-body: "Noto Sans SC", "Source Han Sans CN", "Microsoft YaHei", sans-serif;
}
@page { size: A4; margin: 15mm 15mm 18mm 18mm; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body {
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.75;
  color: var(--text);
  background: var(--bg);
}
body { max-width: 210mm; margin: 0 auto; background: var(--bg); }
"""

with open('D:/新课开发/管理学/30-财务经营思维/学员手册/学员手册_财务经营思维.html', 'w', encoding='utf-8') as f:
    f.write("<!DOCTYPE html>\n")
    f.write("<html lang=\"zh-CN\">\n")
    f.write("<head>\n")
    f.write("<meta charset=\"UTF-8\">\n")
    f.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n")
    f.write("<title>财务经营思维——非财务经理的报表解读与经营分析 · 学员手册</title>\n")
    f.write("<style>\n")
    f.write(css)
    f.write("</style>\n")
    f.write("</head>\n")
    f.write("<body>\n")

print("Part 1 written successfully")
