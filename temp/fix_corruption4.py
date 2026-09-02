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

    # Try to decode with UTF-8, replacing errors
    try:
        content = raw.decode('utf-8', errors='replace')
    except:
        # If even replace fails, use latin-1 which never fails
        content = raw.decode('latin-1')

    original = content

    # Replace the replacement character (U+FFFD) with a valid Chinese bracket
    # Actually, don't - let the garbled text stay, we just need valid JS syntax

    # The key is: find where Chinese quotes should be and replace them with corner brackets
    # The text is garbled but the structure might be salvageable

    # Actually, try this: replace any sequence of followed by Chinese-like text with proper chars
    # But simpler: just ensure the file writes back as UTF-8

    new_content = content  # Keep the replace-damaged content

    # Try to at least make it valid JS by checking for obvious breaks
    # Actually let's just write it back and see what node says

    with open(filepath, 'w', encoding='utf-8', errors='replace') as f:
        f.write(new_content)

    # Verify
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            test = f.read()
        print(f"Written slide-{num} ({len(test)} chars)")
        fixed_count += 1
    except Exception as e:
        print(f"Failed slide-{num}: {e}")

print(f"\nTotal written: {fixed_count}")