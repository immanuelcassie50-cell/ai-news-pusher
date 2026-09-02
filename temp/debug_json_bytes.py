# -*- coding: utf-8 -*-
# Debug what bytes are actually in the file at the error position

with open('D:/Downloads/xinjian/hangfa-training-proposal/document_outline.json', 'rb') as f:
    raw = f.read()

print(f"File size: {len(raw)} bytes")

# Find position around the error (json parses at 6791 in the processed string)
# First, let's understand what bytes cause the issue
# The JSON parser says: Invalid control character at pos 6791

# Let's find the first raw newline (0x0A) that's NOT preceded by 0x5C
pos = 0
found = []
while pos < len(raw):
    idx = raw.find(b'\n', pos)
    if idx == -1:
        break
    # Check if preceded by backslash
    if idx > 0 and raw[idx-1] == ord('\\'):
        # preceded by backslash - might be \n escape, but let's check what follows
        before = raw[max(0,idx-5):idx+2]
        found.append((idx, repr(before)))
    pos = idx + 1

print(f"Found {len(found)} potential \\n escape sequences")
for i, (pos, ctx) in enumerate(found[:10]):
    print(f"  [{i}] pos={pos}: {ctx}")

# Let's look at the raw bytes around position 6791 in the fixed string
# The issue is that after our replacement, there might be raw newlines
# Let's find first raw newline not preceded by backslash
pos = 0
raw_newlines = []
while pos < len(raw):
    idx = raw.find(b'\n', pos)
    if idx == -1:
        break
    # Check context
    before = raw[max(0,idx-3):idx]
    is_escaped = (before == b'\\n' or before.endswith(b'\\n'))
    if not is_escaped:
        raw_newlines.append((idx, repr(raw[max(0,idx-20):idx+20])))
    pos = idx + 1

print(f"\nFound {len(raw_newlines)} RAW newlines (not preceded by backslash)")
for pos, ctx in raw_newlines[:5]:
    print(f"  pos={pos}: {ctx}")
