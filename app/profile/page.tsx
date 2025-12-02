'use client'

import { useState } from 'react'
import { User, Award, Heart, Calendar, Settings, Crown, Star, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const badges = [
    { name: 'Superfan', icon: Crown, color: 'from-yellow-400 to-orange-500', earned: true },
    { name: 'Top Tipper', icon: Star, color: 'from-purple-400 to-pink-500', earned: true },
    { name: 'Early Adopter', icon: TrendingUp, color: 'from-blue-400 to-cyan-500', earned: true },
    { name: 'Legendary Fan', icon: Award, color: 'from-green-400 to-emerald-500', earned: false },
  ]

  const stats = [
    { label: 'Events Attended', value: '24', icon: Calendar },
    { label: 'Artists Followed', value: '8', icon: Heart },
    { label: 'Badges Earned', value: '3', icon: Award },
  ]

  const recentEvents = [
    { name: 'Acoustic Session', artist: 'Sarah Chen', date: '2024-01-15', status: 'completed' },
    { name: 'Q&A with Fans', artist: 'Sarah Chen', date: '2024-01-10', status: 'completed' },
    { name: 'New Album Preview', artist: 'Midnight Dreams', date: '2024-01-05', status: 'completed' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-4xl font-bold">
                SF
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                <h1 className="text-3xl font-bold">SuperFan</h1>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Superfan Tier
                </span>
              </div>
              <p className="text-gray-600 mb-4">@superfan23</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon className="h-5 w-5 text-gray-600" />
                      <div>
                        <span className="font-bold">{stat.value}</span>
                        <span className="text-sm text-gray-600 ml-1">{stat.label}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <Link
              href="/profile/settings"
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 border-b border-gray-200">
          {['overview', 'badges', 'events', 'activity'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium capitalize transition ${
                activeTab === tab
                  ? 'border-b-2 border-primary-500 text-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {recentEvents.map((event, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{event.name}</h3>
                        <p className="text-sm text-gray-600">{event.artist}</p>
                        <p className="text-xs text-gray-500">{event.date}</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {event.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-4">Subscription</h2>
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Superfan Plan</span>
                    <Crown className="h-5 w-5 text-yellow-500" />
                  </div>
                  <p className="text-2xl font-bold mb-1">$10.99<span className="text-sm font-normal">/month</span></p>
                  <p className="text-sm text-gray-600">Access to all premium events</p>
                </div>
                <button className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition">
                  Manage Subscription
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Badges Tab */}
        {activeTab === 'badges' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-6">Your Badges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {badges.map((badge, index) => {
                const Icon = badge.icon
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 ${
                      badge.earned
                        ? `bg-gradient-to-br ${badge.color} border-transparent text-white`
                        : 'bg-gray-50 border-gray-200 text-gray-600'
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <Icon className={`h-12 w-12 mb-3 ${badge.earned ? '' : 'opacity-50'}`} />
                      <h3 className="font-bold mb-1">{badge.name}</h3>
                      {badge.earned ? (
                        <p className="text-sm opacity-90">Earned!</p>
                      ) : (
                        <p className="text-sm">Locked</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-6">Your Events</h2>
            <div className="space-y-4">
              {recentEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-400 to-accent-400"></div>
                    <div>
                      <h3 className="font-semibold">{event.name}</h3>
                      <p className="text-sm text-gray-600">{event.artist}</p>
                      <p className="text-xs text-gray-500">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      {event.status}
                    </span>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

