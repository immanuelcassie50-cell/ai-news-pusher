import re
with open('gen_pptx_part2.py', encoding='utf-8') as f:
    lines = f.readlines()
print('Total lines:', len(lines))
broken = 0
for i, line in enumerate(lines):
    if 'note(s, "' in line:
        stripped = line.rstrip()
        if not stripped.endswith('")') and not stripped.endswith('",\\'):
            broken += 1
            if broken < 5:
                print(f'Line {i+1}: {line.rstrip()[:120]}')
print(f'Total potentially broken: {broken}')
