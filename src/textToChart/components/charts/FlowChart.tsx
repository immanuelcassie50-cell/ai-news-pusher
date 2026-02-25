// 流程图组件
interface FlowChartProps {
  data: { type: string; from: string; to: string }[];
}

export function FlowChart({ data }: FlowChartProps) {
  // 提取唯一的节点
  const nodes = new Set<string>();
  data.forEach(item => {
    nodes.add(item.from);
    nodes.add(item.to);
  });

  const nodeList = Array.from(nodes);

  // 构建连接关系
  const getConnections = (node: string) => {
    return data.filter(item => item.from === node || item.to === node);
  };

  // 简单的层级布局
  const getLevel = (node: string): number => {
    if (data.length === 0) return 0;
    const froms = data.filter(item => item.to === node).map(item => item.from);
    if (froms.length === 0) return 0;
    return Math.max(...froms.map(f => getLevel(f))) + 1;
  };

  const levels: Record<string, number> = {};
  nodeList.forEach(node => {
    levels[node] = getLevel(node);
  });

  // 按层级分组
  const levelMap: Record<number, string[]> = {};
  nodeList.forEach(node => {
    const level = levels[node];
    if (!levelMap[level]) levelMap[level] = [];
    levelMap[level].push(node);
  });

  const maxLevel = Math.max(...Object.keys(levelMap).map(Number));

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      overflowX: 'auto'
    }}>
      <div style={{
        display: 'flex',
        gap: '40px',
        minWidth: `${(maxLevel + 1) * 200}px`
      }}>
        {Object.entries(levelMap).sort(([a], [b]) => Number(a) - Number(b)).map(([level, nodes]) => (
          <div key={level} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center'
          }}>
            {nodes.map((node, idx) => (
              <div key={idx} style={{
                position: 'relative',
                padding: '16px 24px',
                backgroundColor: '#4ECDC4',
                color: '#fff',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center',
                maxWidth: '150px',
                wordBreak: 'break-word'
              }}>
                {node}
                {/* 连接线 */}
                {data.filter(d => d.from === node).map((conn, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    right: '-32px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '24px',
                    height: '2px',
                    backgroundColor: '#ccc'
                  }} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 关系说明 */}
      {data.length > 0 && (
        <div style={{
          marginTop: '20px',
          padding: '12px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
          <strong>关系说明：</strong>
          {data.map((item, idx) => (
            <div key={idx} style={{ marginTop: '4px' }}>
              {item.type === 'cause' && `因：${item.from} → 果：${item.to}`}
              {item.type === 'flow' && `流程：${item.from} → ${item.to}`}
              {item.type === '并列' && `并列：${item.from} ↔ ${item.to}`}
              {item.type === 'compare' && `对比：${item.from} vs ${item.to}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
