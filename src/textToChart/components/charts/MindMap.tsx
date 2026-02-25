// 思维导图组件
interface MindMapProps {
  keywords: string[];
}

export function MindMap({ keywords }: MindMapProps) {
  if (keywords.length === 0) {
    return (
      <div style={{
        padding: '40px',
        textAlign: 'center',
        color: '#999',
        backgroundColor: '#fff',
        borderRadius: '12px'
      }}>
        请输入文字生成思维导图
      </div>
    );
  }

  // 中心主题
  const center = keywords[0] || '主题';
  const branches = keywords.slice(1, 7); // 最多6个分支

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];

  return (
    <div style={{
      padding: '30px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      overflow: 'auto',
      minHeight: '400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ position: 'relative', width: '500px', height: '400px' }}>
        {/* 中心节点 */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px 30px',
          backgroundColor: '#FF6B6B',
          color: '#fff',
          borderRadius: '50px',
          fontSize: '18px',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(255,107,107,0.4)',
          zIndex: 10
        }}>
          {center}
        </div>

        {/* 分支节点 */}
        {branches.map((keyword, index) => {
          const angle = (index * 60 - 30) * (Math.PI / 180); // 分布在圆周上
          const radius = 140;
          const x = 250 + Math.cos(angle) * radius;
          const y = 200 + Math.sin(angle) * radius;

          // 计算连接线的角度
          const lineAngle = angle + Math.PI / 2;

          return (
            <div key={index} style={{ position: 'absolute', inset: 0 }}>
              {/* 连接线 */}
              <div style={{
                position: 'absolute',
                left: '250px',
                top: '200px',
                width: `${radius - 30}px`,
                height: '2px',
                backgroundColor: colors[index],
                transformOrigin: 'left center',
                transform: `rotate(${angle * 180 / Math.PI + 90}deg)`,
                opacity: 0.6
              }} />

              {/* 分支节点 */}
              <div style={{
                position: 'absolute',
                left: `${x - 40}px`,
                top: `${y - 20}px`,
                padding: '12px 20px',
                backgroundColor: colors[index],
                color: '#fff',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: `0 2px 8px ${colors[index]}40`,
                whiteSpace: 'nowrap'
              }}>
                {keyword}
              </div>
            </div>
          );
        })}

        {/* 更多关键词提示 */}
        {keywords.length > 7 && (
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#999',
            fontSize: '12px'
          }}>
            + 还有 {keywords.length - 7} 个关键词
          </div>
        )}
      </div>
    </div>
  );
}
