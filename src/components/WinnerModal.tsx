import { useEffect, useRef } from 'react'
import { X, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'

interface WinnerModalProps {
  winner: string
  onClose: () => void
}

export function WinnerModal({ winner, onClose }: WinnerModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 播放庆祝烟花效果
    const duration = 2000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#a855f7', '#ec4899', '#f97316', '#22c55e', '#3b82f6'],
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#a855f7', '#ec4899', '#f97316', '#22c55e', '#3b82f6'],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    
    frame()

    // 中央爆发
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#ec4899', '#f97316', '#22c55e', '#3b82f6'],
      })
    }, 300)

    // ESC 键关闭
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      
      {/* 庆祝光效 */}
      <div className="absolute inset-0 celebration-bg animate-pulse" />
      
      {/* 模态框 */}
      <div 
        ref={modalRef}
        className="relative card p-8 md:p-12 max-w-lg w-full text-center animate-bounce-in glow-border"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 btn-icon text-muted-foreground hover:text-foreground"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 animate-float">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
          命运选择了...
        </h2>

        <div className="relative mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight py-2">
            {winner}
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-2xl -z-10 animate-pulse" />
        </div>

        <button
          onClick={onClose}
          className="btn-primary text-lg px-8 py-4"
        >
          <Sparkles size={20} />
          好的！
        </button>
      </div>
    </div>
  )
}
