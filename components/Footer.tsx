import Link from 'next/link'
import { Music } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-2 rounded-lg">
                <Music className="h-5 w-5 text-gray-900" />
              </div>
              <span className="text-lg font-bold text-gray-100">SoundSpot</span>
            </Link>
            <p className="text-sm text-gray-300">
              Connecting artists and superfans through interactive music experiences.
            </p>
          </div>
          <div>
            <h3 className="text-gray-100 font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/events" className="text-gray-300 hover:text-gray-100 transition">Live Events</Link></li>
              <li><Link href="/artists" className="text-gray-300 hover:text-gray-100 transition">Artists</Link></li>
              <li><Link href="/community" className="text-gray-300 hover:text-gray-100 transition">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-100 font-semibold mb-4">For Artists</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/artists/signup" className="text-gray-300 hover:text-gray-100 transition">Join as Artist</Link></li>
              <li><Link href="/dashboard" className="text-gray-300 hover:text-gray-100 transition">Artist Dashboard</Link></li>
              <li><Link href="/help" className="text-gray-300 hover:text-gray-100 transition">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-100 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-300 hover:text-gray-100 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-gray-100 transition">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-gray-100 transition">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 SoundSpot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

