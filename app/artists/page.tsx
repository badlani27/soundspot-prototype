'use client'

import Link from 'next/link'
import { Music, Users, TrendingUp, Heart } from 'lucide-react'

export default function ArtistsPage() {
  const artists = [
    {
      id: 1,
      name: 'Sarah Chen',
      genre: 'Indie Pop',
      fans: '12.5K',
      events: 24,
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
      isOnline: true,
    },
    {
      id: 2,
      name: 'Midnight Dreams',
      genre: 'Electronic',
      fans: '8.2K',
      events: 18,
      image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      isOnline: false,
    },
    {
      id: 3,
      name: 'Luna Rose',
      genre: 'Folk',
      fans: '15.3K',
      events: 31,
      image: 'bg-gradient-to-br from-orange-500 to-red-500',
      isOnline: true,
    },
    {
      id: 4,
      name: 'Echo Valley',
      genre: 'Rock',
      fans: '6.8K',
      events: 12,
      image: 'bg-gradient-to-br from-green-500 to-emerald-500',
      isOnline: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Featured Artists</h1>
          <p className="text-xl text-gray-600">Discover and connect with your favorite artists</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map(artist => (
            <Link
              key={artist.id}
              href={`/artists/${artist.id}`}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition group"
            >
              <div className={`${artist.image} h-48 relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition flex items-center justify-center">
                  <Music className="h-16 w-16 text-white opacity-80" />
                </div>
                {artist.isOnline && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full pulse-live"></div>
                    <span>Live</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{artist.genre}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{artist.fans} fans</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <TrendingUp className="h-4 w-4" />
                      <span>{artist.events} events</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition">
                  Follow
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

