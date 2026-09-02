#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把跨部门协作剧本杀目录下的所有英文/缩写文件名+子目录中文化，并同步更新 .md 文件里的引用。
策略：
  1. 内容字符串替换（按"长度从长到短"避免短串先匹配破坏长串）
  2. 文件/目录重命名
  3. 验证
"""
import os
import sys
import re

ROOT = r"D:/2026年课程/ai课2026整理/剧本杀/跨部门协作剧本杀"

# ---------- 完整相对路径映射（用于重命名 + 内容引用替换）----------
PATH_MAP_REL = {
    # 顶层
    "ACCEPTANCE_FINAL.md": "验收终稿.md",

    # RPD
    "RPD/参考这个文件思路，帮我输出跨部门协作剧本杀完整创作的rpd_多万件高规格完全匹配.md":
        "RPD文档/RPD完整创作规划.md",

    # cards → 信息卡片
    "cards/cards-print-master.md": "信息卡片/信息卡-打印母版.md",
    "cards/info-cards-round-01.md": "信息卡片/信息卡-第一轮.md",
    "cards/info-cards-round-02.md": "信息卡片/信息卡-第二轮.md",
    "cards/info-cards-round-03.md": "信息卡片/信息卡-第三轮.md",

    # facilitator → 主持人
    "facilitator/facilitator-handbook.md": "主持人/主持人手册.md",
    "facilitator/debrief-guide.md": "主持人/复盘指南.md",
    "facilitator/faq.md": "主持人/常见问题.md",
    "facilitator/observation-sheet.md": "主持人/观察记录表.md",

    # output → 输出物
    "output/facilitator-pack-final.md": "输出物/主持人终稿包.md",
    "output/player-pack-PM.md": "输出物/玩家手册-产品经理.md",
    "output/player-pack-IT.md": "输出物/玩家手册-信息技术.md",
    "output/player-pack-Legal.md": "输出物/玩家手册-法务.md",
    "output/player-pack-Finance.md": "输出物/玩家手册-财务.md",
    "output/player-pack-Marketing.md": "输出物/玩家手册-市场.md",
    "output/player-pack-HR.md": "输出物/玩家手册-人力资源.md",
    "output/print-ready-cards.md": "输出物/可打印卡片.md",

    # participant → 参与者
    "participant/briefing-card.md": "参与者/任务简报卡.md",
    "participant/action-plan-card.md": "参与者/行动计划卡.md",
    "participant/debrief-reflection-card.md": "参与者/复盘反思卡.md",

    # qa → 质量检查
    "qa/consistency-check.md": "质量检查/一致性检查.md",
    "qa/review-log.md": "质量检查/审查日志.md",

    # roles → 角色
    "roles/role-master.md": "角色/角色总览.md",
    "roles/role-01-PM.md": "角色/角色01-产品经理.md",
    "roles/role-02-IT.md": "角色/角色02-技术.md",
    "roles/role-03-Legal.md": "角色/角色03-法务.md",
    "roles/role-04-Finance.md": "角色/角色04-财务.md",
    "roles/role-05-Marketing.md": "角色/角色05-市场.md",
    "roles/role-06-HR.md": "角色/角色06-人力资源.md",

    # scripts → 流程脚本
    "scripts/round-00-intro.md": "流程脚本/第00轮-开场.md",
    "scripts/round-01-resources.md": "流程脚本/第01轮-资源.md",
    "scripts/round-02-crisis.md": "流程脚本/第02轮-危机.md",
    "scripts/round-03-closing.md": "流程脚本/第03轮-收尾.md",
    "scripts/debrief-script.md": "流程脚本/复盘脚本.md",

    # world → 世界观
    "world/company-profile.md": "世界观/公司画像.md",
    "world/project-background.md": "世界观/项目背景.md",
    "world/relationship-map.md": "世界观/关系图谱.md",
    "world/timeline.md": "世界观/时间线.md",
}

# ---------- 内容字符串替换（按长度从长到短） ----------
def make_content_subs():
    """生成三组替换规则：
       A. 完整相对路径（含或不带 ../ 前缀）
       B. 裸文件名
    """
    full_subs = []
    bare_subs = []
    for old_rel, new_rel in PATH_MAP_REL.items():
        old_name = os.path.basename(old_rel)
        new_name = os.path.basename(new_rel)
        # 完整相对路径
        full_subs.append((old_rel, new_rel))
        # 裸文件名
        if old_name != new_name and not old_name.startswith("参考这个文件"):
            bare_subs.append((old_name, new_name))
    # 长度从长到短排序
    full_subs.sort(key=lambda x: -len(x[0]))
    bare_subs.sort(key=lambda x: -len(x[0]))
    return full_subs, bare_subs


def update_content(ROOT, dry_run=True):
    """扫描所有 .md 文件，做字符串替换"""
    full_subs, bare_subs = make_content_subs()
    changes = []  # (file_rel, before, after, count)

    for root, dirs, files in os.walk(ROOT):
        for f in files:
            if not f.endswith(".md"):
                continue
            path = os.path.join(root, f)
            with open(path, "r", encoding="utf-8") as fp:
                content = fp.read()
            new_content = content
            file_changes = []  # (old, new) pairs that triggered

            # 第一步：完整相对路径（含 ../ 前缀也匹配）
            for old, new in full_subs:
                if old in new_content:
                    count = new_content.count(old)
                    new_content = new_content.replace(old, new)
                    file_changes.append((old, new, count))
                if "../" + old in new_content:
                    count = new_content.count("../" + old)
                    new_content = new_content.replace("../" + old, "../" + new)
                    file_changes.append(("../" + old, "../" + new, count))

            # 第二步：裸文件名（兜底）
            for old, new in bare_subs:
                if old in new_content:
                    count = new_content.count(old)
                    new_content = new_content.replace(old, new)
                    file_changes.append((old, new, count))

            if new_content != content:
                rel = os.path.relpath(path, ROOT)
                total = sum(c for _, _, c in file_changes)
                changes.append((rel, file_changes, total))
                if not dry_run:
                    with open(path, "w", encoding="utf-8") as fp:
                        fp.write(new_content)
    return changes


def do_rename(ROOT, dry_run=True):
    """重命名目录和文件：先重命名子目录，再重命名文件"""
    moves = []  # (old_abs, new_abs)

    # 第一阶段：重命名子目录（需要先在内容里替换过，但子目录不能和文件一起重命名，否则内容里的引用会断）
    # 实际上：先做内容替换，再做物理重命名
    for old_rel, new_rel in PATH_MAP_REL.items():
        old_abs = os.path.join(ROOT, old_rel)
        new_abs = os.path.join(ROOT, new_rel)
        if os.path.exists(old_abs):
            moves.append((old_abs, new_abs))

    # 把"重命名"按目录优先排序：先把所有目录重命名，再把文件重命名
    # 但 Python 的 os.rename 在 Windows 上不能跨已存在的目录重命名
    # 所以策略：先重命名子目录，再重命名文件（同一目录下）

    if dry_run:
        return moves

    # 先重命名子目录
    dirs_to_rename = sorted(set(os.path.dirname(m[0]) for m in moves if os.path.dirname(m[0])), key=len, reverse=True)
    # 实际上"先重命名子目录"需要按层级：先深层，再浅层
    # 简单做：先做"目录对目录"的重命名
    # 这里需要小心：如果把 cards/ 重命名为 信息卡片/，那 cards/xxx.md 这个文件路径就失效了
    # 正确顺序：先重命名子目录（cards/ → 信息卡片/），然后在新的目录下，文件已经叫 xxx.md
    # 但因为 PATH_MAP_REL 里的"目标路径"已经是 信息卡片/xxx.md，所以重命名 cards/xxx.md → 信息卡片/xxx.md 时，
    # "信息卡片/"必须已经存在，否则 Windows 会失败

    # 安全策略：先创建目标目录（如果不存在），再重命名

    # 先把所有的目标目录收集出来（去重）
    target_dirs = set()
    for old_abs, new_abs in moves:
        target_dir = os.path.dirname(new_abs)
        if target_dir:
            target_dirs.add(target_dir)
    # 按层级从深到浅排序创建
    target_dirs_sorted = sorted(target_dirs, key=lambda p: -p.count(os.sep))
    for d in target_dirs_sorted:
        if not os.path.exists(d):
            os.makedirs(d, exist_ok=True)
            print(f"[mkdir] {os.path.relpath(d, ROOT)}")

    # 现在重命名
    for old_abs, new_abs in moves:
        if old_abs == new_abs:
            continue
        if os.path.exists(new_abs):
            print(f"[SKIP] 目标已存在: {os.path.relpath(new_abs, ROOT)}")
            continue
        os.rename(old_abs, new_abs)
        print(f"[mv] {os.path.relpath(old_abs, ROOT)}  ->  {os.path.relpath(new_abs, ROOT)}")

    # 清理空的旧子目录
    old_dirs = set()
    for old_rel in PATH_MAP_REL:
        d = os.path.dirname(os.path.join(ROOT, old_rel))
        if d and d != ROOT:
            old_dirs.add(d)
    # 从深到浅排序删除
    for d in sorted(old_dirs, key=lambda p: -p.count(os.sep)):
        if os.path.isdir(d):
            try:
                # 检查目录是否为空
                if not os.listdir(d):
                    os.rmdir(d)
                    print(f"[rmdir] {os.path.relpath(d, ROOT)}")
                else:
                    print(f"[WARN] 目录非空，未删除: {os.path.relpath(d, ROOT)}")
            except OSError as e:
                print(f"[WARN] 删除失败 {os.path.relpath(d, ROOT)}: {e}")
    return moves


def verify(ROOT):
    """验证：
       1. 检查所有 PATH_MAP_REL 的新路径都存在
       2. 检查所有 .md 文件里没有残留旧路径/旧文件名
    """
    print("\n========== 验证 ==========")
    # 1. 新路径必须全部存在
    missing = []
    for old_rel, new_rel in PATH_MAP_REL.items():
        new_abs = os.path.join(ROOT, new_rel)
        if not os.path.exists(new_abs):
            missing.append(new_rel)
    if missing:
        print(f"[FAIL] 缺失 {len(missing)} 个新路径:")
        for m in missing:
            print(f"   - {m}")
    else:
        print(f"[OK] 所有 {len(PATH_MAP_REL)} 个新路径都存在")

    # 2. 旧路径必须全部不存在
    leftover = []
    for old_rel in PATH_MAP_REL:
        old_abs = os.path.join(ROOT, old_rel)
        if os.path.exists(old_abs):
            leftover.append(old_rel)
    if leftover:
        print(f"[FAIL] 残留 {len(leftover)} 个旧路径:")
        for m in leftover:
            print(f"   - {m}")
    else:
        print(f"[OK] 没有残留旧路径")

    # 3. .md 文件里扫描残留英文路径/文件名
    full_subs, bare_subs = make_content_subs()
    leftover_in_content = []
    for root, dirs, files in os.walk(ROOT):
        for f in files:
            if not f.endswith(".md"):
                continue
            path = os.path.join(root, f)
            with open(path, "r", encoding="utf-8") as fp:
                content = fp.read()
            for old, new in full_subs:
                if old in content:
                    leftover_in_content.append((os.path.relpath(path, ROOT), old))
                if "../" + old in content:
                    leftover_in_content.append((os.path.relpath(path, ROOT), "../" + old))
            for old, new in bare_subs:
                if old in content:
                    leftover_in_content.append((os.path.relpath(path, ROOT), old))
    if leftover_in_content:
        print(f"[FAIL] {len(leftover_in_content)} 处内容残留旧引用:")
        for fp, old in leftover_in_content[:20]:
            print(f"   - {fp}: '{old}'")
        if len(leftover_in_content) > 20:
            print(f"   ... 还有 {len(leftover_in_content) - 20} 处")
    else:
        print(f"[OK] 所有 .md 内容里没有残留旧引用")

    return len(missing) == 0 and len(leftover) == 0 and len(leftover_in_content) == 0


def main():
    dry_run = "--execute" not in sys.argv

    print("=" * 60)
    print("跨部门协作剧本杀 - 英文命名→简体中文 迁移")
    print("=" * 60)
    print(f"模式: {'DRY-RUN（不实际改文件）' if dry_run else '执行'}")
    print(f"根目录: {ROOT}\n")

    # 第一步：Dry-run 内容替换预览
    print("========== 步骤 1/3: 扫描内容引用 ==========")
    content_changes = update_content(ROOT, dry_run=True)
    total_content_files = len(content_changes)
    total_content_subs = sum(c for _, _, c in content_changes)
    print(f"将修改 {total_content_files} 个 .md 文件，共 {total_content_subs} 处引用\n")
    for rel, file_changes, total in content_changes[:30]:
        print(f"  [FILE] {rel}  ({total} 处)")
        for old, new, cnt in file_changes[:5]:
            print(f"     {old!r}  ->  {new!r}  (x{cnt})")
        if len(file_changes) > 5:
            print(f"     ... 还有 {len(file_changes) - 5} 处")
    if len(content_changes) > 30:
        print(f"  ... 还有 {len(content_changes) - 30} 个文件")
    print()

    # 第二步：Dry-run 重命名预览
    print("========== 步骤 2/3: 重命名预览 ==========")
    moves = do_rename(ROOT, dry_run=True)
    print(f"将重命名 {len(moves)} 个文件路径:\n")
    for old_abs, new_abs in moves:
        old_rel = os.path.relpath(old_abs, ROOT)
        new_rel = os.path.relpath(new_abs, ROOT)
        kind = "[DIR]" if "." not in os.path.basename(old_rel) else "[FILE]"
        print(f"  {kind} {old_rel}")
        print(f"      -> {new_rel}")

    # 预览要清理的旧目录
    old_dirs = set()
    for old_rel in PATH_MAP_REL:
        d = os.path.dirname(os.path.join(ROOT, old_rel))
        if d and d != ROOT:
            old_dirs.add(d)
    print(f"\n重命名后将清理 {len(old_dirs)} 个空旧目录:")
    for d in sorted(old_dirs, key=lambda p: -p.count(os.sep)):
        print(f"  [DIR] {os.path.relpath(d, ROOT)}")
    print()

    # 第三步：执行
    if dry_run:
        print("=" * 60)
        print("DRY-RUN 完成。确认无误后请用 --execute 参数执行:")
        print("  python rename_to_chinese.py --execute")
        print("=" * 60)
    else:
        print("========== 执行内容替换 ==========")
        update_content(ROOT, dry_run=False)
        print("[OK] 内容替换完成\n")

        print("========== 执行物理重命名 ==========")
        do_rename(ROOT, dry_run=False)
        print("[OK] 物理重命名完成\n")

        verify(ROOT)


if __name__ == "__main__":
    main()
