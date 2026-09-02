import os
import re

slides_dir = 'D:/2026年课程/AI工具+场景/峰值体验MOT/授课PPT/slides'

# The corruption pattern is:
# - Chinese chars followed by 0x99 0x80 (two-byte sequence that's invalid)
# - Actually many files have multi-byte UTF-8 encoding errors

# Strategy: Read file preserving raw bytes, find common corruption patterns
# and replace with valid UTF-8

def fix_file(filepath):
    with open(filepath, 'rb') as f:
        raw = f.read()

    original = raw

    # Pattern 1: 0x99 0x80 sequences (likely from Chinese chars corrupted)
    # 0x99 0x80 = overlong encoding attempt or corruption
    raw = raw.replace(b'\x99\x80', b'\xe3\x80\x8c')  # 「

    # Pattern 2: Various common 2-byte corruption patterns
    raw = raw.replace(b'\x99\x81', b'\xe3\x80\x8d')  # 」
    raw = raw.replace(b'\x80\x80', b'\xe3\x80\x8c')  # Double corruption
    raw = raw.replace(b'\x80\x8c', b'\xe3\x80\x8d')  # 」
    raw = raw.replace(b'\x80\x8f', b'\xe3\x80\x8d')  # 」

    # Pattern 3: Check for remaining 0x80-0xBF bytes that follow invalid start bytes
    # These are continuation bytes without valid start bytes
    # Replace 0x80-0xBF when preceded by ASCII or followed by ASCII within certain contexts

    # Pattern 4: Known bad sequences from earlier transformations
    raw = raw.replace(b'\xc2\x80', b'\xe3\x80\x8c')
    raw = raw.replace(b'\xc2\x8c', b'\xe3\x80\x8d')
    raw = raw.replace(b'\xc2\x8f', b'\xe3\x80\x8d')

    # Pattern 5: Any remaining overlong encodings (byte pattern 10xxxxxx following invalid)
    # Simplify: replace isolated 0x80-0xBF bytes that don't form valid UTF-8
    # Valid UTF-8 start bytes: 0x00-0x7F, 0xC0-0xDF, 0xE0-0xEF, 0xF0-0xF7

    # Pattern 6: C3 A3 sequences (from previous corruption)
    raw = raw.replace(b'\xc3\xa3', b'')

    # Pattern 7: Any 0xC2 0x80-0xBF sequences (overlong)
    i = 0
    result = bytearray()
    while i < len(raw):
        b = raw[i]
        if b >= 0x80 and b <= 0xBF:
            # Continuation byte without valid start byte
            # Check if previous byte was a start byte
            if i > 0:
                prev = raw[i-1]
                if prev < 0x80 or prev > 0xF7:
                    # Invalid start byte before continuation
                    # Check next byte
                    if i + 1 < len(raw) and raw[i+1] >= 0x80 and raw[i+1] <= 0xBF:
                        # Two continuation bytes - likely Chinese
                        result.append(0xE3)
                        result.append(0x80)
                        result.append(raw[i])
                        i += 1
                        continue
            # Check if followed by continuation
            if i + 1 < len(raw) and raw[i+1] >= 0x80 and raw[i+1] <= 0xBF:
                # Could be valid 3-byte Chinese
                pass
            else:
                # Lone continuation byte - skip or replace
                i += 1
                continue
        result.append(b)
        i += 1

    raw = bytes(result)

    if raw != original:
        with open(filepath, 'wb') as f:
            f.write(raw)
        return True
    return False

fixed = 0
for i in range(1, 108):
    num = f"{i:02d}"
    filepath = os.path.join(slides_dir, f"slide-{num}.js")
    if not os.path.exists(filepath):
        continue
    if fix_file(filepath):
        fixed += 1
        print(f"Fixed slide-{num}")

print(f"\nTotal fixed: {fixed}")