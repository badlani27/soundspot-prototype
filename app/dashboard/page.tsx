'use client'

import { useState } from 'react'
import { Calendar, Users, DollarSign, TrendingUp, Video, MessageSquare, Plus, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function ArtistDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Total Events', value: '24', change: '+12%', icon: Calendar },
    { label: 'Total Revenue', value: '$3,240', change: '+28%', icon: DollarSign },
    { label: 'Active Fans', value: '1,234', change: '+15%', icon: Users },
    { label: 'Avg. Attendance', value: '342', change: '+8%', icon: TrendingUp },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Acoustic Session',
      date: '2024-01-15',
      time: '8:00 PM',
      tickets: 342,
      revenue: '$342',
      status: 'live',
    },
    {
      id: 2,
      title: 'Q&A with Fans',
      date: '2024-01-20',
      time: '7:00 PM',
      tickets: 128,
      revenue: '$640',
      status: 'scheduled',
    },
    {
      id: 3,
      title: 'New Song Premiere',
      date: '2024-01-25',
      time: '9:00 PM',
      tickets: 0,
      revenue: '$0',
      status: 'draft',
    },
  ]

  const recentActivity = [
    { type: 'event', text: 'Acoustic Session started', time: '2 hours ago' },
    { type: 'revenue', text: 'Received $342 from event', time: '3 hours ago' },
    { type: 'fan', text: 'New superfan joined community', time: '5 hours ago' },
    { type: 'content', text: 'Posted voice note in backstage', time: '1 day ago' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Artist Dashboard</h1>
          <p className="text-gray-600">Manage your events, content, and fan community</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 border-b border-gray-200">
          {['overview', 'events', 'analytics', 'content', 'fans'].map(tab => (
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
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <span className="text-sm font-semibold text-green-600">{stat.change}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/dashboard/events/new"
                  className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition"
                >
                  <Plus className="h-6 w-6 text-gray-600" />
                  <div>
                    <h3 className="font-semibold">Create Event</h3>
                    <p className="text-sm text-gray-600">Schedule a live session</p>
                  </div>
                </Link>
                <Link
                  href="/dashboard/content/new"
                  className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition"
                >
                  <Video className="h-6 w-6 text-gray-600" />
                  <div>
                    <h3 className="font-semibold">Upload Content</h3>
                    <p className="text-sm text-gray-600">Add to backstage feed</p>
                  </div>
                </Link>
                <Link
                  href="/dashboard/analytics"
                  className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition"
                >
                  <BarChart3 className="h-6 w-6 text-gray-600" />
                  <div>
                    <h3 className="font-semibold">View Analytics</h3>
                    <p className="text-sm text-gray-600">See detailed insights</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Upcoming Events</h2>
                <Link href="/dashboard/events" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View all
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map(event => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold">{event.title}</h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            event.status === 'live'
                              ? 'bg-red-100 text-red-700'
                              : event.status === 'scheduled'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {event.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {event.date} at {event.time} • {event.tickets} tickets sold
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{event.revenue}</p>
                      <p className="text-sm text-gray-600">revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition">
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    <div className="flex-1">
                      <p className="text-sm">{activity.text}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">All Events</h2>
              <Link
                href="/dashboard/events/new"
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition flex items-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>New Event</span>
              </Link>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map(event => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600">
                      {event.date} at {event.time} • {event.tickets} attendees
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold">{event.revenue}</span>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-4">Performance Overview</h2>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500">Analytics charts coming soon</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="font-semibold mb-4">Top Performing Events</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Acoustic Session</span>
                    <span className="font-semibold">342 attendees</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Q&A with Fans</span>
                    <span className="font-semibold">128 attendees</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="font-semibold mb-4">Fan Engagement</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Avg. Chat Messages</span>
                    <span className="font-semibold">1,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Reactions per Event</span>
                    <span className="font-semibold">2,456</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

