// 柱状图组件
interface BarChartProps {
  data: { name: string; value: number; unit?: string }[];
  width?: number;
  height?: number;
}

export function BarChart({ data, width = 500, height = 350 }: BarChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div style={{
      width: '100%',
      maxWidth: `${width}px`,
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        height: `${height - 60}px`,
        borderBottom: '2px solid #e0e0e0',
        borderLeft: '2px solid #e0e0e0',
        padding: '0 10px'
      }}>
        {data.map((item, index) => {
          const heightPercent = (item.value / maxValue) * 100;
          const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];

          return (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: 1,
              maxWidth: '80px'
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '60%',
                  height: `${heightPercent}%`,
                  minHeight: '20px',
                  backgroundColor: colors[index % colors.length],
                  borderRadius: '4px 4px 0 0',
                  transition: 'height 0.5s ease',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#333',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.value}{item.unit || ''}
                  </div>
                </div>
              </div>
              <div style={{
                marginTop: '8px',
                fontSize: '12px',
                color: '#666',
                textAlign: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '100%'
              }}>
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
