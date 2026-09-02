import os
import re

def remove_horizontal_lines(content):
    """删除独立的横线分隔符 --- *** ___ 等"""
    lines = content.split('\n')
    result = []
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        # 检测独立横线行：--- 或 *** 或 ___ 或 - - - 等
        if stripped in ['---', '***', '___'] or re.match(r'^[-*_]\s*[-*_]\s*[-*_]\s*$', stripped):
            # 检查是否是frontmatter的开头（文件第一行且后面还有closing ---）
            if i == 0 and len(lines) > 1:
                # 可能是frontmatter，检查后续是否有 closing ---
                remaining = lines[1:]
                if any(l.strip() == '---' for l in remaining):
                    result.append(line)
                else:
                    pass  # 删除
            else:
                pass  # 删除
        else:
            result.append(line)
        i += 1
    return '\n'.join(result)

def fix_heading_hierarchy(content):
    """修正标题层级：h1后自动降级，跳级填补"""
    lines = content.split('\n')
    result = []
    in_frontmatter = False
    first_h1_found = False
    pending_h1 = None

    for line in lines:
        stripped = line.strip()

        # 处理frontmatter
        if stripped == '---':
            if not in_frontmatter:
                in_frontmatter = True
                result.append(line)
            else:
                in_frontmatter = False
                result.append(line)
            continue

        if in_frontmatter:
            result.append(line)
            continue

        # 处理标题
        if stripped.startswith('#'):
            # 提取井号数量
            match = re.match(r'^(#{1,6})\s+(.*)', stripped)
            if match:
                level = len(match.group(1))
                title = match.group(2)

                if level == 1:
                    if not first_h1_found:
                        first_h1_found = True
                        result.append(line)
                    else:
                        # 额外h1降为h2
                        result.append('## ' + title)
                elif level > 4:
                    # 最深只到 h4
                    result.append('#### ' + title)
                else:
                    result.append(line)
            else:
                result.append(line)
        else:
            result.append(line)

    return '\n'.join(result)

def add_proper_spacing(content):
    """确保段落、标题、列表等有正确的空行分隔"""
    lines = content.split('\n')
    result = []
    i = 0
    last_type = None  # 'blank', 'heading', 'list', 'table', 'code', 'quote', 'other'

    def is_blank_line(l):
        return l.strip() == ''

    def get_line_type(l):
        s = l.strip()
        if is_blank_line(l):
            return 'blank'
        if s.startswith('#'):
            return 'heading'
        if s.startswith('- ') or s.startswith('* ') or re.match(r'^\d+\.\s+', s):
            return 'list'
        if s.startswith('|') and s.endswith('|'):
            return 'table'
        if s.startswith('```'):
            return 'code'
        if s.startswith('>'):
            return 'quote'
        if s.startswith('---') or s.startswith('***') or s.startswith('___'):
            return 'separator'
        return 'other'

    for line in lines:
        current_type = get_line_type(line)

        # 处理分隔符
        if current_type == 'separator':
            # 分隔符前后需要空行
            if last_type not in ['blank', None]:
                if result and result[-1].strip() != '':
                    result.append('')
            result.append(line)
            last_type = 'separator'
            continue

        # 标题前后
        if current_type == 'heading':
            if last_type == 'other' or last_type == 'quote' or last_type == 'code':
                # 标题前加空行
                if result and result[-1].strip() != '':
                    result.append('')
            result.append(line)
            last_type = 'heading'
        # 列表前后
        elif current_type == 'list':
            if last_type in ['heading', 'blank']:
                pass  # 不需要额外空行
            elif last_type == 'other' and result and result[-1].strip() != '':
                result.append('')
            result.append(line)
            last_type = 'list'
        # 表格前后
        elif current_type == 'table':
            if last_type == 'other' and result and result[-1].strip() != '':
                result.append('')
            result.append(line)
            last_type = 'table'
        # 引用前后
        elif current_type == 'quote':
            if last_type in ['heading', 'blank']:
                pass
            elif last_type == 'other' and result and result[-1].strip() != '':
                result.append('')
            result.append(line)
            last_type = 'quote'
        # 普通段落
        elif current_type == 'other':
            if last_type == 'blank':
                pass  # 连续空行只保留一个
            result.append(line)
            last_type = 'other'
        # 空行
        elif current_type == 'blank':
            result.append(line)
            last_type = 'blank'

    # 清理多余连续空行（超过2个空行变成最多1个空行）
    final = []
    blank_count = 0
    for line in result:
        if line.strip() == '':
            blank_count += 1
            if blank_count <= 1:
                final.append(line)
        else:
            blank_count = 0
            final.append(line)

    return '\n'.join(final)

def format_markdown(content):
    """执行完整格式化"""
    # 1. 删除横线
    content = remove_horizontal_lines(content)
    # 2. 修正标题层级
    content = fix_heading_hierarchy(content)
    # 3. 添加适当空行
    content = add_proper_spacing(content)
    return content

def process_file(filepath):
    """处理单个文件"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        formatted = format_markdown(content)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(formatted)

        return True, None
    except Exception as e:
        return False, str(e)

def process_directory(dirpath):
    """批量处理目录下的所有md文件（递归，排除node_modules）"""
    files = []
    for root, dirs, filenames in os.walk(dirpath):
        # 排除 node_modules 目录和 macOS 元数据文件 (._*)
        dirs[:] = [d for d in dirs if d != 'node_modules']
        for f in filenames:
            if f.endswith('.md') and not f.startswith('._'):
                files.append(os.path.join(root, f))

    results = {'success': [], 'failed': []}

    for filepath in sorted(files):
        success, error = process_file(filepath)
        if success:
            results['success'].append(os.path.basename(filepath))
        else:
            results['failed'].append((os.path.basename(filepath), error))

    return results

if __name__ == '__main__':
    import sys
    if len(sys.argv) < 2:
        print("用法: python md_formatter.py <文件或目录路径>")
        sys.exit(1)

    path = sys.argv[1]

    if os.path.isdir(path):
        results = process_directory(path)
        print(f"📊 处理统计：")
        print(f"  总文件数：{len(results['success']) + len(results['failed'])}")
        print(f"  成功：{len(results['success'])}")
        print(f"  失败：{len(results['failed'])}")
        print()
        if results['success']:
            print("✅ 已格式化文件：")
            for f in results['success']:
                print(f"  📄 {f}")
        if results['failed']:
            print("❌ 失败文件：")
            for f, err in results['failed']:
                print(f"  📄 {f} — {err}")
    else:
        success, error = process_file(path)
        if success:
            print(f"✅ 已格式化: {os.path.basename(path)}")
        else:
            print(f"❌ 失败: {error}")