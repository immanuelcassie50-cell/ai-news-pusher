slides_to_fix = {
    "slide-92.js": {
        "wrong": '"每拿到一份民调，先用这10个问题快速扫描。超过3个\'不确定\'，就要对结果保持警惕。"',
        "correct": '"每拿到一份民调，先用这10个问题快速扫描。超过3个"不确定"，就要对结果保持警惕。"'
    },
    "slide-93.js": {
        "wrong": '"受访者倾向说出\'正确\'答案，而非真实想法"',
        "correct": '"受访者倾向说出"正确"答案，而非真实想法"'
    },
    "slide-106.js": {
        "wrong": '"哪个概念或工具让你\'哇\'了一声？"',
        "correct": '"哪个概念或工具让你"哇"了一声？"'
    },
    "slide-116.js": {
        "wrong": '"增加\'可能投票者\'筛选机制"',
        "correct": '"增加"可能投票者"筛选机制"'
    },
    "slide-117.js": {
        "wrong": '"\'韩粉\'群体极化现象"',
        "correct": '""韩粉"群体极化现象"'
    },
    "slide-120.js": {
        "wrong": '"\'超额席位\'现象"',
        "correct": '"超额席位"现象"'
    },
    "slide-135.js": {
        "wrong": '"受访者倾向于给出\'正确\'或被社会接受的回答，而非真实观点"',
        "correct": '"受访者倾向于给出"正确"或被社会接受的回答，而非真实观点"'
    }
}

base = "D:/新课开发/政治学/04_选举与民意-投票背后的政治心理学/授课PPT/slides/"

for fname, replacement in slides_to_fix.items():
    fpath = base + fname
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    if replacement["wrong"] in content:
        content = content.replace(replacement["wrong"], replacement["correct"])
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {fname}")
    else:
        print(f"Pattern not found in {fname} - may already be fixed or different")

# Fix slide-100 separately - search for problematic pattern
fpath = base + "slide-100.js"
with open(fpath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find and fix the line with just "" in addText
import re
# Pattern: addText("") with nothing between the quotes
# Find lines with addText("") or similar
lines = content.split('\n')
for i, line in enumerate(lines):
    if 'addText("")' in line or "addText(''" in line:
        print(f"Found empty addText at line {i+1}: {repr(line[:60])}")

print("Done!")
