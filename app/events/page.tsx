'use client'

import Link from 'next/link'
import { Calendar, Clock, Users, DollarSign, Play, Heart } from 'lucide-react'
import { format } from 'date-fns'

export default function EventsPage() {
  const events = [
    {
      id: 1,
      artist: 'Sarah Chen',
      title: 'Acoustic Session',
      description: 'Intimate acoustic performance with Q&A',
      date: '2024-01-15',
      time: '8:00 PM EST',
      price: 10,
      attendees: 342,
      isLive: true,
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
    {
      id: 2,
      artist: 'Midnight Dreams',
      title: 'New Album Preview',
      description: 'Exclusive first listen to upcoming album',
      date: '2024-01-20',
      time: '7:00 PM EST',
      price: 15,
      attendees: 128,
      isLive: false,
      image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      artist: 'Luna Rose',
      title: 'Songwriting Session',
      description: 'Watch the creative process in real-time',
      date: '2024-01-22',
      time: '6:00 PM EST',
      price: 12,
      attendees: 89,
      isLive: false,
      image: 'bg-gradient-to-br from-orange-500 to-red-500',
    },
    {
      id: 4,
      artist: 'Sarah Chen',
      title: 'Fan Meet & Greet',
      description: 'Small group virtual coffee chat',
      date: '2024-01-25',
      time: '5:00 PM EST',
      price: 25,
      attendees: 45,
      isLive: false,
      image: 'bg-gradient-to-br from-green-500 to-emerald-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Upcoming Live Events</h1>
          <p className="text-xl text-gray-600">Join interactive concerts and exclusive artist sessions</p>
        </div>

        {/* Live Now Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full pulse-live"></div>
            <span>Live Now</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter(e => e.isLive)
              .map(event => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-red-500 hover:shadow-xl transition group"
                >
                  <div className={`${event.image} h-48 relative`}>
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full pulse-live"></div>
                      <span className="text-sm font-semibold">LIVE</span>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition flex items-center justify-center">
                      <Play className="h-16 w-16 text-white opacity-80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition" />
                    </div>
                    <p className="text-gray-600 mb-4">{event.artist}</p>
                    <p className="text-sm text-gray-500 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} watching</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>${event.price}</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-2 rounded-lg hover:shadow-lg transition">
                      Join Now
                    </button>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter(e => !e.isLive)
              .map(event => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition group"
                >
                  <div className={`${event.image} h-48 relative`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition flex items-center justify-center">
                      <Play className="h-16 w-16 text-white opacity-80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition" />
                    </div>
                    <p className="text-gray-600 mb-4">{event.artist}</p>
                    <p className="text-sm text-gray-500 mb-4">{event.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>{format(new Date(event.date), 'MMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} registered</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">${event.price}</span>
                      <button className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition">
                        Get Ticket
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

