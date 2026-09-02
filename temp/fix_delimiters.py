#!/usr/bin/env python3
import os, re

# Fix: 「 and 」 were used as STRING DELIMITERS instead of " in some slides
# Pattern: slide.addText(「text」, -> slide.addText("text",
# Pattern: text: 「text」, -> text: "text",
# Pattern: "「text」" -> still need fixing

fixed_count = 0
for fname in os.listdir('.'):
    if not (fname.startswith('slide-') and fname.endswith('.js')):
        continue
    with open(fname, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    original = content

    # Fix patterns where 「 or 」 replaced string quotes
    # slide.addText(「 -> slide.addText("
    content = re.sub(r'slide\.addText\(「', 'slide.addText("', content)
    # 「 used as opening string delimiter after : or , or =
    # : 「text」 -> : "text"
    content = re.sub(r': 「', ': "', content)
    content = re.sub(r', 「', ', "', content)
    content = re.sub(r'= 「', '= "', content)
    # Closing: 」, -> ",
    content = re.sub(r'」,', '",', content)
    # Last closing 」 at end of string -> "
    content = re.sub(r'」$', '"', content, flags=re.MULTILINE)
    content = re.sub(r'」\r', '"\r', content)
    content = re.sub(r'」\n', '"\n', content)
    # 「 inside strings should already be 」 but double-check
    # Also fix cases like title: 「text」 -> title: "text"
    content = re.sub(r'title: 「', 'title: "', content)
    content = re.sub(r'desc: 「', 'desc: "', content)
    content = re.sub(r'text: 「', 'text: "', content)

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_count += 1
        print(f'Fixed: {fname}')

print(f'Total: {fixed_count}')
