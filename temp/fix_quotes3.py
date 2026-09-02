import os

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

def count_string_quotes(s):
    """Count quote types in a potential string - crude check for embedded quotes."""
    # If string has 3+ single quotes, likely has embedded quotes used as Chinese quotes
    return s.count("'")

def fix_file(content):
    lines = content.split('\n')
    fixed_lines = []
    total_changes = 0

    for line in lines:
        if 'addText' not in line:
            fixed_lines.append(line)
            continue

        original = line

        # Find addText calls and fix embedded single quotes
        # Pattern: slide.addText('content', {...})
        # If content has ' used as Chinese quotes, we need to fix

        # Strategy: find the first argument to addText and check if it has issues
        # Simple heuristic: if there are 3+ single quotes in the line, likely problematic

        single_quote_count = line.count("'")
        if single_quote_count >= 3:
            # Likely has embedded quotes
            # Replace ' used as Chinese quotes with corner bracket quote marks
            # We need to be careful - only replace quotes that are INSIDE strings

            # The addText argument is between the first and second quote after addText(
            # Find first ( and track until we find the matching )

            idx = line.find("addText(")
            if idx != -1:
                # Get substring after addText(
                rest = line[idx + 8:]

                # Find the first ' that starts the string argument
                first_quote_idx = rest.find("'")
                if first_quote_idx != -1:
                    # Find the second ' - if there's one soon after, the string might be broken
                    remaining = rest[first_quote_idx + 1:]
                    second_quote_idx = remaining.find("'")

                    if second_quote_idx != -1:
                        # Check what text is between these quotes
                        string_content = remaining[:second_quote_idx]

                        # If the "string content" contains more single quotes, the parsing is broken
                        # In that case, the ' characters ARE the Chinese quotes that broke parsing
                        if "'" in string_content:
                            # This is the case - the string has embedded quotes
                            # We need to fix by replacing the inner quotes
                            # But this is complex... let's just replace ' that appear to be Chinese quotes

                            # Replace ' (ASCII single quote) used as Chinese open quote with 「
                            # Replace ' (ASCII single quote) used as Chinese close quote with 」

                            # Heuristic: if ' is surrounded by Chinese chars or followed by Chinese, it's opening quote
                            # If ' is preceded by Chinese, it's closing quote

                            # For simplicity, let's replace ALL ' that appear to be inside a string
                            # by using a different quote character

                            # Actually, let's just flip the outer quotes to double if there are embedded singles
                            # and escape any double quotes inside

                            # Check if string content (between first and second ') has more '
                            if string_content.count("'") > 0:
                                # This is the problematic case
                                # Replace the entire string argument with double-quoted version
                                # First, find the full addText argument

                                # Find the start of options object
                                brace_start = rest.find("{", second_quote_idx)
                                if brace_start != -1:
                                    # Find matching close brace
                                    brace_count = 1
                                    pos = brace_start + 1
                                    while pos < len(rest) and brace_count > 0:
                                        if rest[pos] == '{':
                                            brace_count += 1
                                        elif rest[pos] == '}':
                                            brace_count -= 1
                                        pos += 1

                                    # The string argument is from first_quote_idx to second_quote_idx+1 in rest
                                    # The options are from brace_start to pos

                                    string_arg = rest[first_quote_idx:second_quote_idx+2]
                                    options_arg = rest[brace_start:pos]

                                    # Build new line
                                    new_line = line[:idx] + "slide.addText(" + '"' + string_arg[1:-1].replace('"', '\\"') + '"' + ", " + options_arg

                                    line = new_line

        if line != original:
            total_changes += 1
            print(f'Fixed: {original.strip()[:60]}')
            print(f'  -> {line.strip()[:60]}')

        fixed_lines.append(line)

    return '\n'.join(fixed_lines), total_changes

total_changes = 0
for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()

        new_content, file_changes = fix_file(content)
        if file_changes > 0:
            with open(path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            total_changes += file_changes

print(f'\nDone. Fixed {total_changes} files')