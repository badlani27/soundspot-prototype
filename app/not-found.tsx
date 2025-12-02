import Link from 'next/link'
import { Home, Music } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <Music className="h-24 w-24 text-primary-500 mx-auto mb-4" />
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition"
        >
          <Home className="h-5 w-5" />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  )
}

