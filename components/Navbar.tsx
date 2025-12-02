'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Music, Menu, X, User, LogOut } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-2 rounded-lg">
              <Music className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              SoundSpot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/events" className="text-gray-700 hover:text-primary-600 transition">
              Live Events
            </Link>
            <Link href="/artists" className="text-gray-700 hover:text-primary-600 transition">
              Artists
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-primary-600 transition">
              Community
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-primary-600 transition">
              Dashboard
            </Link>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-black">Superfan</span>
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Settings
                  </Link>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2">
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
            <Link
              href="/events/live"
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
            >
              Join Live
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
            <Link href="/events" className="block px-4 py-2 hover:bg-gray-100 rounded">
              Live Events
            </Link>
            <Link href="/artists" className="block px-4 py-2 hover:bg-gray-100 rounded">
              Artists
            </Link>
            <Link href="/community" className="block px-4 py-2 hover:bg-gray-100 rounded">
              Community
            </Link>
            <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 rounded">
              Dashboard
            </Link>
            <Link
              href="/events/live"
              className="block px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded text-center"
            >
              Join Live
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

