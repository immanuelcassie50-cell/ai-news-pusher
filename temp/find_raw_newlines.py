# -*- coding: utf-8 -*-
with open('D:/Downloads/xinjian/hangfa-training-proposal/document_outline.json', 'rb') as f:
    raw = f.read()
print(f'File size: {len(raw)}')

# Find first raw newline not preceded by backslash
pos = 0
count = 0
BS = ord('\\')
NL = ord('\n')

while pos < len(raw):
    idx = raw.find(b'\n', pos)
    if idx == -1:
        break
    # Check if preceded by backslash
    preceded_by_backslash = False
    if idx > 0:
        num_backslashes = 0
        j = idx - 1
        while j >= 0 and raw[j] == BS:
            num_backslashes += 1
            j -= 1
        # An odd number of backslashes means the newline is escaped
        if num_backslashes % 2 == 1:
            preceded_by_backslash = True

    if not preceded_by_backslash:
        count += 1
        if count <= 5:
            ctx = raw[max(0,idx-60):idx+20]
            print(f'RAW newline at {idx}: {repr(ctx)}')
    pos = idx + 1

print(f'Total raw newlines: {count}')
