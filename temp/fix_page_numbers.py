#!/usr/bin/env python3
"""Fix page numbers on newly added slides."""

UNPACKED_DIR = "D:/CC/temp/unpacked"

def fix_page_number(slide_num, new_page_num):
    slide_path = f"{UNPACKED_DIR}/ppt/slides/slide{slide_num}.xml"
    with open(slide_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The badge is at position x="8503920" y="4663440" with an oval shape
    # We need to find the <a:t> element within this shape and update it
    # The badge text is like <a:t>8</a:t> within the oval shape

    # Find the specific pattern: look for the badge oval and its text
    # The badge text is typically preceded by sz="1200" b="1" and followed by </a:t></a:r></a:p></p:txBody></p:sp>
    import re

    # Pattern to find page number in the badge (oval at bottom right)
    # The badge has sz="1200" and text is a number
    pattern = r'(<a:rPr[^>]*sz="1200"[^>]*b="1"[^>]*>.*?</a:rPr><a:t>)(\d+)(</a:t>)'

    matches = list(re.finditer(pattern, content))
    if matches:
        # Replace the last match (which should be the badge number)
        last_match = matches[-1]
        old_num = last_match.group(2)
        content = content[:last_match.start()] + last_match.group(1) + str(new_page_num) + last_match.group(3) + content[last_match.end():]

    with open(slide_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed page number for slide{slide_num} to {new_page_num}")

# Fix page numbers for slides 97-120
for i in range(97, 121):
    fix_page_number(i, i)

print("Done fixing page numbers")