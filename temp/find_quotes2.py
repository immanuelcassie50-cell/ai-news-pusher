import os
import re

# Find patterns where a string might have unescaped inner quotes
# Pattern: text followed by "text" followed by text (inside a string)

for root, dirs, files in os.walk('D:/CC'):
    # Skip certain directories
    if 'node_modules' in root or '.git' in root:
        continue

    for f in files:
        if f.startswith('slide-') and f.endswith('.js'):
            path = os.path.join(root, f)
            try:
                with open(path, 'r', encoding='utf-8', errors='replace') as file:
                    content = file.read()
                    lines = content.split('\n')
                    for i, line in enumerate(lines, 1):
                        # Look for patterns that might indicate unescaped quotes
                        # e.g. "some text"more text" - when inside a string
                        if re.search(r'"[^"]*"[^"]*"', line):
                            print(f'{path}:{i}')
                            print(f'  {line[:100]}')
            except Exception as e:
                print(f'Error with {path}: {e}')