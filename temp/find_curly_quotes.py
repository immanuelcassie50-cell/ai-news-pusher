import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Find all lines with Chinese curly quotes " or "
        lines = content.split('\n')
        found_issues = []
        for i, line in enumerate(lines, 1):
            if '"' in line or '"' in line:
                # Check if it's inside a string (not a comment)
                if not line.strip().startswith('//'):
                    found_issues.append(f"{i}: {line.strip()[:80]}")

        if found_issues:
            print(f"\n{f}:")
            for issue in found_issues[:5]:
                print(f"  {issue}")