import { useEffect, useRef } from 'react';

// 雷达图组件
interface RadarChartProps {
  data: { name: string; value: number }[];
  width?: number;
  height?: number;
}

export function RadarChart({ data, width = 400, height = 400 }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 60;

    // 清空画布
    ctx.clearRect(0, 0, width, height);

    const numPoints = data.length;
    const angleStep = (Math.PI * 2) / numPoints;
    const maxValue = Math.max(...data.map(d => d.value), 1);

    // 绘制背景网格
    for (let level = 1; level <= 5; level++) {
      const levelRadius = (radius / 5) * level;
      ctx.beginPath();
      for (let i = 0; i <= numPoints; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * levelRadius;
        const y = centerY + Math.sin(angle) * levelRadius;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.strokeStyle = level === 5 ? '#ddd' : '#eee';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // 绘制轴线
    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius
      );
      ctx.strokeStyle = '#ddd';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // 绘制数据区域
    const colors = ['rgba(78, 205, 196, 0.5)', 'rgba(255, 107, 107, 0.5)'];

    // 填充区域
    ctx.beginPath();
    data.forEach((point, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const pointRadius = (point.value / maxValue) * radius;
      const x = centerX + Math.cos(angle) * pointRadius;
      const y = centerY + Math.sin(angle) * pointRadius;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.fillStyle = colors[0];
    ctx.fill();

    // 描边
    ctx.beginPath();
    data.forEach((point, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const pointRadius = (point.value / maxValue) * radius;
      const x = centerX + Math.cos(angle) * pointRadius;
      const y = centerY + Math.sin(angle) * pointRadius;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.strokeStyle = '#4ECDC4';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 绘制数据点
    data.forEach((point, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const pointRadius = (point.value / maxValue) * radius;
      const x = centerX + Math.cos(angle) * pointRadius;
      const y = centerY + Math.sin(angle) * pointRadius;

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#4ECDC4';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // 绘制标签
    ctx.fillStyle = '#333';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    data.forEach((point, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const labelRadius = radius + 25;
      const x = centerX + Math.cos(angle) * labelRadius;
      const y = centerY + Math.sin(angle) * labelRadius;

      // 调整位置避免重叠
      let offsetX = 0;
      let offsetY = 0;
      if (i === 0) offsetY = -10;
      if (i === numPoints / 2) offsetY = 10;

      ctx.fillText(point.name, x + offsetX, y + offsetY);
    });

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
        gap: '16px',
        marginTop: '16px'
      }}>
        {data.map((item, index) => (
          <div key={index} style={{ fontSize: '12px', color: '#666' }}>
            <span style={{ fontWeight: 'bold', color: '#4ECDC4' }}>{item.name}:</span> {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}
