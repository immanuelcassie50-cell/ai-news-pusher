#!/usr/bin/env python3
"""Remove page number badges from new slides (97-120)."""

UNPACKED_DIR = "D:/CC/temp/unpacked"

def remove_badge(slide_num):
    slide_path = f"{UNPACKED_DIR}/ppt/slides/slide{slide_num}.xml"
    with open(slide_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find and remove the badge shape - it's an oval at bottom right
    # Pattern: <p:sp>...<a:prstGeom prst="ellipse">...<a:off x="8503920" y="4663440"/>...
    # We need to remove the entire <p:sp> element containing the badge

    import re

    # The badge oval is typically at x="8503920" y="4663440"
    # Let's find shapes that contain this position
    # We'll remove <p:sp> elements that contain "8503920" and "4663440"

    # Pattern to match the badge shape element
    # It starts with <p:sp> and ends with </p:sp>
    badge_pattern = r'<p:sp><p:nvSpPr><p:cNvPr id="\d+" name="Shape \d+"></p:cNvPr><p:cNvSpPr/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="8503920" y="4663440"/><a:ext cx="365760" cy="365760"/></a:xfrm><a:prstGeom prst="ellipse">.*?</a:prstGeom>.*?</p:spPr>.*?</p:sp>'

    content = re.sub(badge_pattern, '', content, flags=re.DOTALL)

    with open(slide_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Removed badge from slide{slide_num}")

# Remove badges from slides 97-120
for i in range(97, 121):
    remove_badge(i)

print("Done removing badges")