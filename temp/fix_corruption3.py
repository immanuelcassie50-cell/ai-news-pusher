import os

slides_dir = 'D:/2026年课程/AI工具+场景/峰值体验MOT/授课PPT/slides'

fixed_count = 0

for i in range(1, 108):
    num = f"{i:02d}"
    filepath = os.path.join(slides_dir, f"slide-{num}.js")
    if not os.path.exists(filepath):
        continue

    with open(filepath, 'rb') as f:
        raw = f.read()

    original = raw

    # The corruption pattern is: Chinese characters followed by invalid byte sequences
    # Specifically 0x99 followed by 0x80 (and similar)
    # These appear at positions where Chinese quote pairs should be

    # Fix pattern: 0x99 0x80 -> 0xe3 0x80 0x8c (「)
    # Fix pattern: 0x99 0x81 -> 0xe3 0x80 0x8d (」)
    # Fix pattern: 0x99 alone or followed by non-80/81

    result = bytearray()
    i = 0
    n = len(raw)

    while i < n:
        b = raw[i]

        if b == 0x99 and i + 1 < n and raw[i+1] == 0x80:
            # This is a corrupted Chinese quote open
            result.append(0xe3)
            result.append(0x80)
            result.append(0x8c)
            i += 2
        elif b == 0x99 and i + 1 < n and raw[i+1] == 0x81:
            # Corrupted Chinese quote close
            result.append(0xe3)
            result.append(0x80)
            result.append(0x8d)
            i += 2
        elif b == 0x99 and i + 1 < n and raw[i+1] == 0x8f:
            # Corrupted Chinese quote close variant
            result.append(0xe3)
            result.append(0x80)
            result.append(0x8d)
            i += 2
        elif b == 0x80 and i > 0 and i + 1 < n and raw[i-1] >= 0x80:
            # Standalone continuation byte 0x80 following high byte
            # This is likely corrupted, check if followed by 0x8c or 0x8d
            if raw[i+1] == 0x8c:
                result.append(0x8c)
                i += 2
            elif raw[i+1] == 0x8d:
                result.append(0x8d)
                i += 2
            else:
                result.append(b)
                i += 1
        else:
            result.append(b)
            i += 1

    new_raw = bytes(result)

    # Also fix any remaining invalid patterns like lone continuation bytes
    # Check for 0x80-0xBF that don't have proper start bytes
    result2 = bytearray()
    i = 0
    n = len(new_raw)

    while i < n:
        b = new_raw[i]

        # Check if this is a continuation byte (0x80-0xBF) without proper start byte
        if 0x80 <= b <= 0xBF:
            # Check previous byte
            if i > 0:
                prev = new_raw[i-1]
                # Valid start bytes are: 0x00-0x7F, 0xC0-0xDF (2-byte), 0xE0-0xEF (3-byte), 0xF0-0xF7 (4-byte)
                if prev < 0x80 or (0xC0 <= prev <= 0xDF) or (0xE0 <= prev <= 0xEF) or (0xF0 <= prev <= 0xF7):
                    # Valid start byte before, check if this is a valid continuation
                    # For 0x80-0xBF following 0xC0-0xDF, it's valid for 2-byte seq
                    # For 0x80-0xBF following 0xE0-0xEF, valid if we have more continuations
                    if prev >= 0xC0 and prev <= 0xDF:
                        # 2-byte sequence start, this is valid continuation
                        result2.append(b)
                        i += 1
                        continue
                    elif prev >= 0xE0 and prev <= 0xEF:
                        # 3-byte sequence start
                        # Check if next byte is also continuation
                        if i + 1 < n and 0x80 <= new_raw[i+1] <= 0xBF:
                            result2.append(b)
                            i += 1
                            continue
                        else:
                            # Missing continuation, skip this byte
                            i += 1
                            continue
                    else:
                        # Continuation without valid start, skip
                        i += 1
                        continue
                else:
                    # No valid start byte before
                    i += 1
                    continue
            else:
                # At start of file, skip
                i += 1
                continue
        else:
            result2.append(b)
            i += 1

    final_raw = bytes(result2)

    if final_raw != original:
        # Verify it can be decoded as UTF-8
        try:
            final_raw.decode('utf-8')
            with open(filepath, 'wb') as f:
                f.write(final_raw)
            fixed_count += 1
            print(f"Fixed slide-{num}")
        except:
            print(f"Failed to fix slide-{num}")

print(f"\nTotal fixed: {fixed_count}")