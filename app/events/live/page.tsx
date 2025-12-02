'use client'

import { useState, useEffect, useRef } from 'react'
import { Heart, MessageCircle, Users, Send, Play, Pause, Volume2, VolumeX, Award, TrendingUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LiveEventPage() {
  const [isLive, setIsLive] = useState(true)
  const [viewers, setViewers] = useState(342)
  const [messages, setMessages] = useState([
    { id: 1, user: 'SuperFan23', text: 'This is amazing! 🔥', time: '2m ago', badge: 'Top Tipper' },
    { id: 2, user: 'MusicLover', text: 'Can we hear the new song?', time: '1m ago', badge: null },
    { id: 3, user: 'Fan4Life', text: 'Love this energy!', time: '1m ago', badge: 'Subscriber' },
  ])
  const [newMessage, setNewMessage] = useState('')
  const [reactions, setReactions] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([])
  const [showPoll, setShowPoll] = useState(false)
  const [pollVotes, setPollVotes] = useState({ optionA: 0, optionB: 0 })
  const [hasVoted, setHasVoted] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [backgroundColor, setBackgroundColor] = useState('from-purple-500 via-pink-500 to-red-500')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate viewer count changes
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 3) - 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          user: 'You',
          text: newMessage,
          time: 'now',
          badge: 'Superfan',
        },
      ])
      setNewMessage('')
    }
  }

  const sendReaction = (emoji: string) => {
    const x = Math.random() * 80 + 10
    const y = Math.random() * 30 + 10
    const id = Date.now()
    setReactions([...reactions, { id, x, y, emoji }])
    setTimeout(() => {
      setReactions(prev => prev.filter(r => r.id !== id))
    }, 2000)
  }

  const votePoll = (option: 'A' | 'B') => {
    if (!hasVoted) {
      setPollVotes(prev => ({
        optionA: option === 'A' ? prev.optionA + 1 : prev.optionA,
        optionB: option === 'B' ? prev.optionB + 1 : prev.optionB,
      }))
      setHasVoted(true)
    }
  }

  const totalVotes = pollVotes.optionA + pollVotes.optionB

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${backgroundColor} opacity-30 transition-all duration-1000`}></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row h-screen">
        {/* Video/Stream Area */}
        <div className="flex-1 flex flex-col p-4 lg:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full pulse-live"></div>
                <span className="text-sm font-semibold text-gray-100">LIVE</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <Users className="h-4 w-4" />
                <span>{viewers.toLocaleString()} watching</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full hover:bg-gray-700/50 transition text-gray-200"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Video Player */}
          <div className="flex-1 bg-gray-900 rounded-xl overflow-hidden relative mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                  <Play className="h-16 w-16 text-gray-900" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-100">Sarah Chen Live Session</h2>
                <p className="text-gray-300">Acoustic Performance</p>
              </div>
            </div>
            
            {/* Reactions Overlay */}
            <AnimatePresence>
              {reactions.map(reaction => (
                <motion.div
                  key={reaction.id}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  animate={{ opacity: 0, y: -100, scale: 1.5 }}
                  exit={{ opacity: 0 }}
                  className="absolute text-4xl"
                  style={{ left: `${reaction.x}%`, top: `${reaction.y}%` }}
                >
                  {reaction.emoji}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Milestone Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-lg flex items-center space-x-2 text-gray-900"
            >
              <Award className="h-5 w-5" />
              <span className="font-semibold">500 Reactions Milestone!</span>
            </motion.div>
          </div>

          {/* Live Poll */}
            {showPoll && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/90 backdrop-blur-md rounded-xl p-6 mb-4 border border-gray-700"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-100">Which song should I perform next?</h3>
              <div className="space-y-3">
                <button
                  onClick={() => votePoll('A')}
                  disabled={hasVoted}
                  className={`w-full p-4 rounded-lg text-left transition ${
                    hasVoted
                      ? 'bg-gray-700/50'
                      : 'bg-gray-700/30 hover:bg-gray-700/50 cursor-pointer'
                  } text-gray-100`}
                >
                  <div className="flex justify-between items-center">
                    <span>Option A: Midnight Dreams</span>
                    {hasVoted && (
                      <span className="text-sm">
                        {totalVotes > 0 ? Math.round((pollVotes.optionA / totalVotes) * 100) : 0}%
                      </span>
                    )}
                  </div>
                  {hasVoted && (
                    <div className="mt-2 h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-400 to-accent-400 transition-all"
                        style={{
                          width: `${totalVotes > 0 ? (pollVotes.optionA / totalVotes) * 100 : 0}%`,
                        }}
                      ></div>
                    </div>
                  )}
                </button>
                <button
                  onClick={() => votePoll('B')}
                  disabled={hasVoted}
                  className={`w-full p-4 rounded-lg text-left transition ${
                    hasVoted
                      ? 'bg-gray-700/50'
                      : 'bg-gray-700/30 hover:bg-gray-700/50 cursor-pointer'
                  } text-gray-100`}
                >
                  <div className="flex justify-between items-center">
                    <span>Option B: City Lights</span>
                    {hasVoted && (
                      <span className="text-sm">
                        {totalVotes > 0 ? Math.round((pollVotes.optionB / totalVotes) * 100) : 0}%
                      </span>
                    )}
                  </div>
                  {hasVoted && (
                    <div className="mt-2 h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-400 to-accent-400 transition-all"
                        style={{
                          width: `${totalVotes > 0 ? (pollVotes.optionB / totalVotes) * 100 : 0}%`,
                        }}
                      ></div>
                    </div>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* Reaction Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                sendReaction('❤️')
                setBackgroundColor('from-red-500 via-pink-500 to-purple-500')
              }}
              className="flex-1 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-md px-6 py-3 rounded-lg transition flex items-center justify-center space-x-2 text-gray-100 border border-gray-700"
            >
              <Heart className="h-5 w-5" />
              <span>Love</span>
            </button>
            <button
              onClick={() => {
                sendReaction('🔥')
                setBackgroundColor('from-orange-500 via-red-500 to-yellow-500')
              }}
              className="flex-1 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-md px-6 py-3 rounded-lg transition flex items-center justify-center space-x-2 text-gray-100 border border-gray-700"
            >
              <span className="text-xl">🔥</span>
              <span>Fire</span>
            </button>
            <button
              onClick={() => {
                sendReaction('🎉')
                setBackgroundColor('from-yellow-500 via-green-500 to-blue-500')
              }}
              className="flex-1 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-md px-6 py-3 rounded-lg transition flex items-center justify-center space-x-2 text-gray-100 border border-gray-700"
            >
              <span className="text-xl">🎉</span>
              <span>Celebrate</span>
            </button>
            <button
              onClick={() => setShowPoll(!showPoll)}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg hover:shadow-lg transition text-gray-900"
            >
              <TrendingUp className="h-5 w-5" />
            </button>
          </div>
        </div>

          {/* Chat Sidebar */}
        <div className="w-full lg:w-96 bg-gray-800/80 backdrop-blur-md border-l border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-bold flex items-center space-x-2 text-gray-100">
              <MessageCircle className="h-5 w-5" />
              <span>Live Chat</span>
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(message => (
              <div key={message.id} className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-sm text-gray-100">{message.user}</span>
                    {message.badge && (
                      <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-2 py-0.5 rounded-full font-semibold">
                        {message.badge}
                      </span>
                    )}
                    <span className="text-xs text-gray-400">{message.time}</span>
                  </div>
                  <p className="text-sm text-gray-200">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={sendMessage}
                className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg hover:shadow-lg transition"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

