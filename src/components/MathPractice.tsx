import { useState, useCallback } from 'react'
import confetti from 'canvas-confetti'
import { Send, RefreshCw, Trophy, Star } from 'lucide-react'
import { useSound } from '@/hooks/useSound'

type Operation = '+' | '-'

interface Problem {
  a: number
  b: number
  op: Operation
  result: number
}

const generateProblem = (): Problem => {
  const op = Math.random() > 0.5 ? '+' : '-'
  let a = 0, b = 0, result = 0

  if (op === '+') {
    // a + b <= 50
    result = Math.floor(Math.random() * 51) // 0 to 50
    a = Math.floor(Math.random() * (result + 1))
    b = result - a
  } else {
    // a - b >= 0
    a = Math.floor(Math.random() * 51) // 0 to 50
    b = Math.floor(Math.random() * (a + 1))
    result = a - b
  }

  return { a, b, op, result }
}

export function MathPractice() {
  const [problem, setProblem] = useState<Problem>(generateProblem())
  const [userAnswer, setUserAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle')
  const { playWin, playError } = useSound()

  const handleSubmit = useCallback(() => {
    if (!userAnswer) return

    const val = parseInt(userAnswer)
    if (isNaN(val)) return

    if (val === problem.result) {
      setStatus('correct')
      setScore(s => s + 1)
      const newStreak = streak + 1
      setStreak(newStreak)
      playWin()

      if (newStreak > 0 && newStreak % 5 === 0) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      }
    } else {
      setStatus('wrong')
      setStreak(0)
      playError()
    }
  }, [userAnswer, problem, streak, playWin, playError])

  const nextProblem = useCallback(() => {
    setProblem(generateProblem())
    setUserAnswer('')
    setStatus('idle')
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (status === 'idle' || status === 'wrong') {
        handleSubmit()
      } else {
        nextProblem()
      }
    }
  }

  // Character styles based on status
  const getCharacterClass = () => {
    switch (status) {
      case 'correct':
        return 'animate-bounce' // Dance
      case 'wrong':
        return 'animate-shake' // Funny face / Shake
      default:
        return 'animate-float' // Idle breathing
    }
  }

  // Character Emoji or SVG
  const Character = () => (
    <div className={`text-9xl transition-transform duration-500 ${getCharacterClass()}`}>
      {status === 'wrong' ? '🤪' : '🐶'}
    </div>
  )

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-xl" />
      </div>

      <div className="z-10 w-full max-w-2xl space-y-8">
        {/* Header: Score & Streak */}
        <div className="flex justify-between items-center bg-card/50 backdrop-blur p-4 rounded-2xl border border-white/10">
          <div className="flex items-center gap-2 text-xl font-bold text-primary">
            <Trophy className="w-6 h-6" />
            <span>得分: {score}</span>
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-accent">
            <Star className={`w-6 h-6 ${streak > 0 ? 'fill-current' : ''}`} />
            <span>连胜: {streak}</span>
          </div>
        </div>

        {/* Main Game Area */}
        <div className="card p-8 md:p-12 flex flex-col items-center text-center space-y-8">
          {/* Character */}
          <div className="h-40 flex items-center justify-center">
            <Character />
          </div>

          {/* Problem Display */}
          <div className="text-6xl md:text-7xl font-bold tracking-wider text-foreground">
            {problem.a} {problem.op} {problem.b} = ?
          </div>

          {/* Input Area */}
          <div className="w-full max-w-sm space-y-4">
            <div className="relative">
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="?"
                className="w-full h-20 text-center text-4xl font-bold rounded-2xl bg-muted/50 border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none"
                disabled={status === 'correct'}
                autoFocus
              />
            </div>

            {status === 'correct' ? (
              <button
                onClick={nextProblem}
                className="w-full h-16 text-2xl btn-primary bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-green-500/30"
              >
                下一题 <RefreshCw className="ml-2 w-6 h-6" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!userAnswer}
                className="w-full h-16 text-2xl btn-primary shadow-lg"
              >
                提交 <Send className="ml-2 w-6 h-6" />
              </button>
            )}
          </div>

          {/* Feedback Message */}
          <div className="h-8">
            {status === 'correct' && (
              <div className="text-2xl font-bold text-green-500 animate-bounce">
                太棒了！答对了！ 🎉
              </div>
            )}
            {status === 'wrong' && (
              <div className="text-2xl font-bold text-destructive animate-shake">
                哎呀，再试一次吧！ 😜
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
