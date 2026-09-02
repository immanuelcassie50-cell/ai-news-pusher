import os
import re

slides_dir = 'D:/2026年课程/AI工具+场景/峰值体验MOT/授课PPT/slides'

# Common overlong UTF-8 sequences that got introduced by previous fixes
# These are invalid UTF-8 that should be replaced
fixes = [
    (b'\xc2\x80', b'\xe3\x80\x8c'),  # Replacement for 「 (U+300C) - overlong encoding
    (b'\xc2\x8c', b'\xe3\x80\x8d'),  # Replacement for 」 (U+300D) - overlong encoding
    (b'\xc2\x8f', b'\xe3\x80\x8d'),  # Alternative overlong for 」
    # Add more patterns as needed
]

# Also handle multi-byte corruption patterns
# Pattern: C3 A3 C2 80 C2 8C sequence that appears
corruption_pattern = re.compile(b'\xc3\xa3\xc2\x80\xc2\x8c')
corruption_pattern2 = re.compile(b'\xc3\xa3\xc2\x80\xc2\x8f')
corruption_pattern3 = re.compile(b'\xc3\xa3\xc2\x8f\xc2\x8c')

fixed_count = 0

for i in range(1, 108):
    num = f"{i:02d}"
    filepath = os.path.join(slides_dir, f"slide-{num}.js")
    if not os.path.exists(filepath):
        continue

    with open(filepath, 'rb') as f:
        raw = f.read()

    original = raw

    # Fix the multi-byte corruption pattern (C3 A3 C2 80 C2 8C)
    raw = corruption_pattern.sub(b'\xe3\x80\x8c', raw)  # 「
    raw = corruption_pattern2.sub(b'\xe3\x80\x8d', raw)  # 」 alternative
    raw = corruption_pattern3.sub(b'\xe3\x80\x8d', raw)  # 」 alt 2

    # Apply single-byte fixes
    for bad, good in fixes:
        raw = raw.replace(bad, good)

    if raw != original:
        with open(filepath, 'wb') as f:
            f.write(raw)
        fixed_count += 1
        print(f"Fixed slide-{num}")

print(f"\nTotal fixed: {fixed_count}")