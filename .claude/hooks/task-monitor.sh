# Team 模式任务监控脚本
# 用法: 在 Claude Code 中运行 `bash .claude/hooks/task-monitor.sh`
# 或直接调用 TaskList 查看活跃任务

#!/bin/bash
# task-monitor.sh - 检查活跃的 subagent 任务

echo "=== Team 任务监控 ==="
echo "时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo ""

# 检查是否有 Claude Code 进程在运行
echo "1. Claude Code 进程:"
ps aux | grep -i claude | grep -v grep || echo "   未找到 Claude Code 进程"
echo ""

# 检查 temp 目录中的临时文件（可用于判断是否有活跃任务）
echo "2. 临时任务文件:"
if [ -d "D:/CC/temp" ]; then
    ls -la "D:/CC/temp" 2>/dev/null | tail -5 || echo "   temp 目录为空"
else
    echo "   无 temp 目录"
fi
echo ""

echo "3. 检查建议:"
echo "   - 使用 /tasks 命令查看任务列表"
echo "   - 检查是否有 '空转' 的 subagent"
echo "   - 超过 5 分钟无进度的 subagent 可用 TaskStop 终止"
echo ""
echo "=== 监控完成 ==="