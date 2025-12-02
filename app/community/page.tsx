'use client'

import { useState } from 'react'
import { MessageCircle, Heart, Send, Mic, Image as ImageIcon, Video, Search, Bell } from 'lucide-react'
import Link from 'next/link'

export default function CommunityPage() {
  const [activeArtist, setActiveArtist] = useState('sarah-chen')
  const [newMessage, setNewMessage] = useState('')

  const artists = [
    { id: 'sarah-chen', name: 'Sarah Chen', avatar: 'SC', unread: 3, isOnline: true },
    { id: 'midnight-dreams', name: 'Midnight Dreams', avatar: 'MD', unread: 0, isOnline: false },
    { id: 'luna-rose', name: 'Luna Rose', avatar: 'LR', unread: 1, isOnline: true },
  ]

  const messages = [
    {
      id: 1,
      type: 'artist',
      text: "I'm in the studio writing songs today ♪",
      time: '2 hours ago',
      isArtist: true,
    },
    {
      id: 2,
      type: 'fan',
      user: 'SuperFan23',
      text: "That's so cool!! Can't wait to hear them!",
      time: '1 hour ago',
      badge: 'Top Tipper',
    },
    {
      id: 3,
      type: 'fan',
      user: 'MusicLover',
      text: '😍',
      time: '1 hour ago',
      badge: null,
    },
    {
      id: 4,
      type: 'fan',
      user: 'Fan4Life',
      text: 'Did you see my message?',
      time: '30 min ago',
      badge: 'Subscriber',
    },
    {
      id: 5,
      type: 'artist',
      text: 'Practice is the answer!',
      time: '15 min ago',
      isArtist: true,
    },
  ]

  const backstageFeed = [
    {
      id: 1,
      type: 'voice',
      title: 'Behind the scenes of "Midnight Dreams"',
      duration: '2:34',
      time: '3 hours ago',
    },
    {
      id: 2,
      type: 'text',
      title: 'Just finished recording! Here are some lyrics...',
      preview: 'The city lights fade as I walk alone...',
      time: '1 day ago',
    },
    {
      id: 3,
      type: 'image',
      title: 'Studio session today',
      time: '2 days ago',
    },
  ]

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Handle message sending
      setNewMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-black">Your Communities</h1>
          <p className="text-black">Connect with artists and fellow superfans</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Artist List Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-black">Artists</h2>
                <Search className="h-5 w-5 text-black" />
              </div>
              <div className="space-y-2">
                {artists.map(artist => (
                  <button
                    key={artist.id}
                    onClick={() => setActiveArtist(artist.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition ${
                      activeArtist === artist.id
                        ? 'bg-primary-50 border-2 border-primary-500'
                        : 'hover:bg-gray-50 border-2 border-transparent'
                    }`}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-black font-semibold">
                        {artist.avatar}
                      </div>
                      {artist.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-black">{artist.name}</h3>
                        {artist.unread > 0 && (
                          <span className="bg-primary-500 text-black text-xs px-2 py-1 rounded-full">
                            {artist.unread}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-black">Active now</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Backstage Feed */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h2 className="font-semibold mb-4 text-black">Backstage Feed</h2>
              <div className="space-y-3">
                {backstageFeed.map(item => (
                  <div key={item.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                    <div className="flex items-start space-x-3">
                      {item.type === 'voice' && (
                        <div className="p-2 bg-primary-100 rounded-lg">
                          <Mic className="h-4 w-4 text-black" />
                        </div>
                      )}
                      {item.type === 'text' && (
                        <div className="p-2 bg-accent-100 rounded-lg">
                          <MessageCircle className="h-4 w-4 text-black" />
                        </div>
                      )}
                      {item.type === 'image' && (
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <ImageIcon className="h-4 w-4 text-black" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm mb-1 text-black">{item.title}</h3>
                        {item.preview && <p className="text-xs text-black">{item.preview}</p>}
                        {item.duration && <p className="text-xs text-black">{item.duration}</p>}
                        <p className="text-xs text-black mt-1">{item.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col h-[calc(100vh-12rem)]">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-black font-semibold">
                      SC
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h2 className="font-semibold text-black">Sarah Chen</h2>
                    <p className="text-sm text-black">Active now</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <Bell className="h-5 w-5 text-black" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.isArtist ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  {!message.isArtist && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex-shrink-0"></div>
                  )}
                  <div className={`flex-1 ${message.isArtist ? 'text-right' : ''}`}>
                    {!message.isArtist && (
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-sm text-black">{message.user}</span>
                        {message.badge && (
                          <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-0.5 rounded-full text-black">
                            {message.badge}
                          </span>
                        )}
                      </div>
                    )}
                    <div
                      className={`inline-block px-4 py-2 rounded-lg ${
                        message.isArtist
                          ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-black'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <p className="text-sm text-black">{message.text}</p>
                    </div>
                    <p className="text-xs text-black mt-1">{message.time}</p>
                  </div>
                  {message.isArtist && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex-shrink-0 flex items-center justify-center text-black font-semibold text-xs">
                      SC
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <ImageIcon className="h-5 w-5 text-black" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <Mic className="h-5 w-5 text-black" />
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  onClick={sendMessage}
                  className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 text-black rounded-lg hover:shadow-lg transition"
                >
                  <Send className="h-5 w-5 text-black" />
                </button>
              </div>
              <p className="text-xs text-black mt-2 text-center">
                It feels just like we're texting each other
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

