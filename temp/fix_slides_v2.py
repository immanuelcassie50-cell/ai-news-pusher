#!/usr/bin/env python3
import os, re

SLIDES_DIR = r"D:/新课开发/行动学习2026/催化师核心技术：提问与反思/完整课程包/04-授课PPT/slides"

def fix_js_strings(content):
    """Fix broken escaped quotes in JS string literals.
    
    The problem: Files have " (2 backslashes + quote) which breaks JS parsing.
    - Outside a string: require(\"pptxgenjs\") should be require("pptxgenjs")
    - Inside a string: "text\" with CJK quotes should remain as "text" (properly escaped)
    
    Approach: Parse the file into tokens (strings, identifiers, keywords, etc.)
    and reconstruct with fixes.
    """    
    result = []
    i = 0
    n = len(content)
    
    while i < n:
        c = content[i]
        
        # String literal
        if c == chr(34) or c == chr(39):  # " or '
            quote = c
            result.append(c)
            i += 1
            # Read until end of string (handling escapes)
            while i < n:
                tc = content[i]
                if tc == chr(92):  # backslash
                    result.append(tc)
                    i += 1
                    if i < n:
                        result.append(content[i])
                        i += 1
                elif tc == quote:
                    result.append(tc)
                    i += 1
                    break
                else:
                    result.append(tc)
                    i += 1
        
        # Line comment
        elif c == chr(47) and i + 1 < n and content[i+1] == chr(47):
            while i < n and content[i] != chr(10):
                result.append(content[i])
                i += 1
        
        # Block comment  
        elif c == chr(47) and i + 1 < n and content[i+1] == chr(42):
            result.append(c)
            result.append(content[i+1])
            i += 2
            while i < n:
                if content[i] == chr(42) and i + 1 < n and content[i+1] == chr(47):
                    result.append(content[i])
                    result.append(content[i+1])
                    i += 2
                    break
                result.append(content[i])
                i += 1
        
        # Template literal (backtick string)
        elif c == chr(96):
            result.append(c)
            i += 1
            while i < n:
                tc = content[i]
                if tc == chr(92):  # backslash
                    result.append(tc)
                    i += 1
                    if i < n:
                        result.append(content[i])
                        i += 1
                elif tc == chr(96):
                    result.append(tc)
                    i += 1
                    break
                else:
                    result.append(tc)
                    i += 1
        
        # Other characters
        else:
            result.append(c)
            i += 1
    
    return ''.join(result)

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if file has the broken escape pattern
    if chr(92) + chr(92) + chr(34) not in content:
        return None  # No change needed
    
    fixed = fix_js_strings(content)
    return fixed if fixed != content else None

def main():
    slides_dir = SLIDES_DIR
    files = sorted([f for f in os.listdir(slides_dir) if f.startswith("slide-") and f.endswith(".js")],
                   key=lambda x: int(re.search(r"\d+", x).group()))
    
    fixed_files = []
    errors = []
    
    for filename in files:
        filepath = os.path.join(slides_dir, filename)
        try:
            fixed = fix_file(filepath)
            if fixed is not None:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(fixed)
                fixed_files.append(filename)
                print("Fixed: " + filename)
            else:
                print("No change: " + filename)
        except Exception as e:
            errors.append((filename, str(e)))
            print("Error: " + filename + ": " + str(e))
    
    print("")
    print("=== Summary ===")
    print("Fixed: " + str(len(fixed_files)) + " files")
    if fixed_files:
        print("Files: " + ", ".join(fixed_files))
    if errors:
        print("Errors: " + str(errors))

if __name__ == "__main__":
    main()
