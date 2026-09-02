import os

slides_dir = r"D:/2026年课程/招商证券/高净值沟通/授课PPT/01_认知与起点/slides"

for filename in os.listdir(slides_dir):
    if filename.endswith('.js'):
        filepath = os.path.join(slides_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace Unicode Chinese quotes (U+201C, U+201D) with corner brackets
        content = content.replace('“', '「')  # " -> 「
        content = content.replace('”', '」')  # " -> 」
        # Also replace single quotes
        content = content.replace('‘', '‘')  # ' (keep as is or replace)
        content = content.replace('’', '’')  # ' (keep as is)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print("Done")
