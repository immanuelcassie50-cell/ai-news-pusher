# -*- coding: utf-8 -*-
import re

with open('D:/Downloads/xinjian/hangfa-training-proposal/document_outline.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Find literal \n (backslash-n) that should be actual newlines inside JSON strings
# The file contains \\n (two chars: backslash and n) when it should have \n (actual newline in JSON)
# In JSON, newlines in strings must be escaped as \n

# Count occurrences of literal \\n
backslash_n_count = content.count('\\n')
print(f'Found {backslash_n_count} occurrences of literal backslash-n sequences')

# We'll do a regex replacement: find \\n within JSON string context
# Strategy: replace all \\n with \n (actual newline escape in JSON)
# But we must be careful not to replace \\n that are already proper escapes

# The content has literal \\n in text like: \u65b9\u6848\u4e2d\u7684\\n3
# These are backslash + letter n, not JSON escape sequences

# Simple approach: replace all \\n (backslash followed by n, not preceded by backslash) with \n
# Pattern: not preceded by backslash means: (?<!\\)(\\\\)*\\n -> but this is complex

# Simpler: find all \\n and replace with \n (JSON escape for newline)
# But this would break cases where \\n was meant to be literal backslash+n (rare in Chinese text)

# Let's check if there are any cases where \\n is NOT meant to be a newline
# by checking what typically follows \\n in our content

# Find all \\n occurrences and look at surrounding context
positions = [m.start() for m in re.finditer(r'\\n', content)]
print(f"Total \\n positions: {len(positions)}")
samples = []
for pos in positions[:5]:
    ctx = content[max(0,pos-30):pos+30]
    samples.append(repr(ctx))
print("Sample contexts:")
for s in samples:
    print(f"  {s}")

# Let's just replace all \\n with \n since in Chinese text literal backslash-n is not meaningful
# and \n as newline escape is what we want
result = content.replace('\\n', '\n')
print(f"After replacement, content length: {len(result)}")

# Validate JSON
import json
try:
    obj = json.loads(result)
    print('JSON is VALID!')
    # Write back
    with open('D:/Downloads/xinjian/hangfa-training-proposal/document_outline.json', 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False, indent=2)
    print('File written with proper JSON formatting')
except json.JSONDecodeError as e:
    print(f'Still invalid at pos {e.pos}, line {e.lineno}, col {e.colno}: {e.msg}')
    print(f'Context: {repr(result[e.pos-100:e.pos+100])}')
