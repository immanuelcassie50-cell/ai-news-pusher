import { useEffect, useRef } from 'react';

// 饼图组件
interface PieChartProps {
  data: { name: string; value: number; unit?: string }[];
  width?: number;
  height?: number;
}

export function PieChart({ data, width = 400, height = 400 }: PieChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const total = data.reduce((sum, item) => sum + item.value, 0);
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 40;

    // 颜色配置
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
      '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
    ];

    let startAngle = -Math.PI / 2;

    data.forEach((item, index) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI;
      const color = colors[index % colors.length];

      // 绘制扇形
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      // 绘制边框
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 计算标签位置
      const midAngle = startAngle + sliceAngle / 2;
      const labelRadius = radius * 0.7;
      const labelX = centerX + Math.cos(midAngle) * labelRadius;
      const labelY = centerY + Math.sin(midAngle) * labelRadius;

      // 绘制标签
      ctx.fillStyle = '#333';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const percentage = ((item.value / total) * 100).toFixed(1);
      ctx.fillText(
        `${item.name}: ${percentage}%`,
        labelX,
        labelY
      );

      startAngle += sliceAngle;
    });

    // 绘制中心圆（环形图效果）
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.5, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();

  }, [data, width, height]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '12px',
        marginTop: '16px'
      }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '2px',
              backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'][index % 8]
            }} />
            <span style={{ fontSize: '12px', color: '#333' }}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
