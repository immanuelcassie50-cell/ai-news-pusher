import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

# Pattern to find Chinese curly quotes " " inside JS strings
pattern = re.compile(r'"([^"]*)"([^"]*)"([^"]*)"')

for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Look for lines with potential issues
        lines = content.split('\n')
        for i, line in enumerate(lines, 1):
            # Skip comments
            if line.strip().startswith('//'):
                continue
            # Look for Chinese opening quote followed by Chinese text and Chinese closing quote
            if '"' in line and '"' in line:
                # Check if it's a problematic pattern
                if re.search(r'"[^"]*"[^"]*"[^"]*"', line):
                    print(f"{f}:{i}: {line.strip()[:100]}")