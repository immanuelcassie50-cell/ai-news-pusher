import { useRef, useEffect, useCallback } from 'react'
import { WHEEL_COLORS } from '@/lib/wheel'
import { useSound } from '@/hooks/useSound'

interface SpinWheelProps {
  options: string[]
  isSpinning: boolean
  rotation: number
  onSpinEnd: () => void
}

export function SpinWheel({ options, isSpinning, rotation, onSpinEnd }: SpinWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const lastSectionRef = useRef<number>(-1)
  const animationFrameRef = useRef<number>()
  const { playTick } = useSound()

  const drawWheel = useCallback((currentRotation: number = 0) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 10

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const sliceAngle = (2 * Math.PI) / options.length
    const rotationRad = (currentRotation * Math.PI) / 180

    // 绘制转盘扇区
    options.forEach((option, i) => {
      const startAngle = i * sliceAngle + rotationRad - Math.PI / 2
      const endAngle = startAngle + sliceAngle

      // 扇区背景
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.closePath()

      // 使用CSS变量对应的颜色
      const colorIndex = i % WHEEL_COLORS.length
      const hslMatch = WHEEL_COLORS[colorIndex].match(/var\(--wheel-(\d+)\)/)
      if (hslMatch) {
        const colorNum = parseInt(hslMatch[1])
        const hslColors = [
          'hsl(0, 75%, 60%)',      // 红
          'hsl(25, 85%, 55%)',     // 橙
          'hsl(45, 90%, 55%)',     // 黄
          'hsl(140, 60%, 50%)',    // 绿
          'hsl(180, 65%, 50%)',    // 青
          'hsl(210, 80%, 60%)',    // 蓝
          'hsl(260, 75%, 65%)',    // 紫
          'hsl(290, 70%, 60%)',    // 紫红
          'hsl(330, 75%, 60%)',    // 粉
          'hsl(15, 80%, 55%)',     // 深橙
        ]
        ctx.fillStyle = hslColors[colorNum - 1] || hslColors[0]
      }
      ctx.fill()

      // 扇区边框
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.lineWidth = 2
      ctx.stroke()

      // 文字
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(startAngle + sliceAngle / 2)
      ctx.textAlign = 'right'
      ctx.fillStyle = '#ffffff'
      ctx.font = `bold ${Math.max(12, Math.min(16, 200 / options.length))}px Inter, sans-serif`
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
      ctx.shadowBlur = 4
      
      const text = option.length > 12 ? option.substring(0, 11) + '…' : option
      ctx.fillText(text, radius - 20, 5)
      ctx.restore()
    })

    // 中心圆
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 35)
    gradient.addColorStop(0, 'hsl(260, 30%, 25%)')
    gradient.addColorStop(1, 'hsl(260, 30%, 15%)')
    
    ctx.beginPath()
    ctx.arc(centerX, centerY, 35, 0, 2 * Math.PI)
    ctx.fillStyle = gradient
    ctx.fill()
    ctx.strokeStyle = 'hsl(270, 80%, 65%)'
    ctx.lineWidth = 3
    ctx.stroke()

    // 中心图标
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 20px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('🎯', centerX, centerY)
  }, [options])

  // 旋转时检测扇区变化并播放滴答声
  useEffect(() => {
    if (!isSpinning) {
      lastSectionRef.current = -1
      return
    }

    let currentRotation = 0
    const startTime = performance.now()
    const duration = 4000
    const totalRotation = rotation

    const animate = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // 缓动函数
      const easeOut = 1 - Math.pow(1 - progress, 4)
      currentRotation = easeOut * totalRotation

      drawWheel(currentRotation)

      // 计算当前指向的扇区
      const normalizedRotation = currentRotation % 360
      const sliceAngle = 360 / options.length
      const currentSection = Math.floor(normalizedRotation / sliceAngle)

      if (currentSection !== lastSectionRef.current && progress < 0.95) {
        playTick()
        lastSectionRef.current = currentSection
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        onSpinEnd()
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isSpinning, rotation, options.length, drawWheel, playTick, onSpinEnd])

  // 初始绘制
  useEffect(() => {
    if (!isSpinning) {
      drawWheel(0)
    }
  }, [options, drawWheel, isSpinning])

  return (
    <div className="wheel-container relative">
      {/* 指针 */}
      <div className="wheel-pointer">
        <svg width="40" height="50" viewBox="0 0 40 50">
          <defs>
            <linearGradient id="pointerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(270, 80%, 65%)" />
              <stop offset="100%" stopColor="hsl(330, 70%, 60%)" />
            </linearGradient>
            <filter id="pointerShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.5"/>
            </filter>
          </defs>
          <polygon 
            points="20,50 5,0 35,0" 
            fill="url(#pointerGradient)"
            filter="url(#pointerShadow)"
          />
          <circle cx="20" cy="8" r="5" fill="white" opacity="0.8"/>
        </svg>
      </div>
      
      <canvas
        ref={canvasRef}
        width={360}
        height={360}
        className="rounded-full"
        style={{
          filter: isSpinning ? 'brightness(1.1)' : 'brightness(1)',
          transition: 'filter 0.3s ease',
        }}
      />
      
      {/* 外圈装饰 */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, transparent, hsl(270 80% 65% / 0.1), transparent, hsl(330 70% 60% / 0.1), transparent)',
          animation: isSpinning ? 'none' : 'spin 20s linear infinite',
        }}
      />
    </div>
  )
}
