import re

with open(r'D:\Downloads\xinjian\AI落地的两个落地-公众号3000字.md', 'r', encoding='utf-8') as f:
    text = f.read()

# Remove markdown noise
clean = re.sub(r'[#*`\[\]_>]', '', text)
# Count Chinese characters
chinese = re.findall(r'[一-龥]', clean)
print('Total Chinese characters:', len(chinese))
# Count total non-space chars
all_chars = re.findall(r'\S', clean)
print('Total non-space chars:', len(all_chars))
# Count paragraphs
paragraphs = [p for p in text.split('\n\n') if p.strip()]
print('Total paragraphs:', len(paragraphs))
# Count H2s
h2s = re.findall(r'^## .+', text, re.MULTILINE)
print('Total H2s:', len(h2s))
for h in h2s:
    print(' -', h)
