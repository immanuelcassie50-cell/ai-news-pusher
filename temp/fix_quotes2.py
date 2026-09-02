files = [
    "D:/新课开发/政治学/04_选举与民意-投票背后的政治心理学/授课PPT/slides/slide-92.js",
    "D:/新课开发/政治学/04_选举与民意-投票背后的政治心理学/授课PPT/slides/slide-93.js",
    "D:/新课开发/政治学/04_选举与民意-投票背后的政治心理学/授课PPT/slides/slide-100.js",
    "D:/新课开发/政治学/04_选举与民意-投票背后的政治心理学/授课PPT/slides/slide-106.js",
    "D:/新课开发/政治学/04_选举与民意-投票背后的政治心理学/授课PPT/slides/slide-116.js",
    "D:/新课开发/政治学/04_选举与民意-投票背后的政治心理学/授课PPT/slides/slide-117.js",
    "D:/新课开发/政治学/04_选举与民意-投票背后的政治心理学/授课PPT/slides/slide-119.js",
    "D:/新课开发/政治学/04_选举与民意-投票背后的政治心理学/授课PPT/slides/slide-120.js",
    "D:/新课开发/政治学/04_选举与民意-投票背后的政治心理学/授课PPT/slides/slide-135.js",
    "D:/新课开发/政治学/04_选举与民意-投票背后的政治心理学/授课PPT/slides/slide-140.js",
]

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    fixed_lines = []
    for line in lines:
        # Find patterns where a string like "text"text" occurs (Chinese quotes as stand-ins)
        # We need to replace the inner " with '

        # Simple heuristic: find lines where there are 3+ double quotes with CJK chars between
        # These lines have broken Chinese quote stand-ins

        # Count double quotes in the line
        quote_count = line.count('"')
        if quote_count > 2 and any(ord(c) > 0x3000 for c in line):
            # Likely has Chinese quote stand-ins - fix them
            # Find all double-quoted sections and if there are extra quotes inside, fix
            result = []
            i = 0
            in_string = False
            while i < len(line):
                c = line[i]
                if c == '"' and not in_string:
                    in_string = True
                    result.append(c)
                elif c == '"' and in_string:
                    # Check if this looks like a Chinese quote stand-in
                    # A Chinese quote stand-in would be followed by CJK or preceded by CJK
                    next_is_cjk = (i + 1 < len(line) and ord(line[i+1]) > 0x3000)
                    prev_is_cjk = (i > 0 and ord(line[i-1]) > 0x3000)

                    if next_is_cjk or prev_is_cjk:
                        # This is likely a Chinese quote stand-in - use single quote
                        result.append("'")
                    else:
                        in_string = False
                        result.append(c)
                else:
                    result.append(c)
                i += 1

            fixed_line = ''.join(result)
            fixed_lines.append(fixed_line)
        else:
            fixed_lines.append(line)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.writelines(fixed_lines)

    print(f"Fixed: {fpath.split('/')[-1]}")

print("\nDone!")
