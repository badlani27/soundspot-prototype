import Link from 'next/link'
import { ArrowRight, Music, Users, Sparkles, TrendingUp, Heart, MessageCircle, Video } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Music Meets Connection
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience interactive live concerts, connect with artists, and join exclusive fan communities.
              Where streaming meets fandom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events/live"
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition flex items-center justify-center space-x-2"
              >
                <span>Join Live Event</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/artists"
                className="bg-white border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition"
              >
                Explore Artists
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Interactive Music Experiences</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for superfans who want more than just streaming
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200">
              <div className="bg-primary-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Live Interactive Concerts</h3>
              <p className="text-black">
                Join intimate live sessions with real-time reactions, polls, and dynamic visual effects.
                Your participation shapes the show.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-accent-50 to-accent-100 border border-accent-200">
              <div className="bg-accent-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Artist-Fan Communities</h3>
              <p className="text-black">
                Connect directly with artists through exclusive chats, behind-the-scenes content,
                and voice notes. Build real relationships.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Exclusive Content</h3>
              <p className="text-black">
                Access demos, voice notes, lyric books, and early releases. Get the content
                that makes you feel like part of the creative process.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200">
              <div className="bg-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Fan Badges & Achievements</h3>
              <p className="text-black">
                Show off your loyalty with badges, unlock achievements, and level up your
                fandom status in the community.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Fan-to-Fan Connections</h3>
              <p className="text-black">
                Meet other superfans, join artist communities, and share your passion with
                people who get it.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Support Your Artists</h3>
              <p className="text-black">
                Direct monetization means your support goes straight to artists. Buy tickets,
                subscribe, and help creators thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">How It Works</h2>
            <p className="text-xl text-black">Join the future of music fandom</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Discover Artists</h3>
              <p className="text-black">
                Browse upcoming live events and find your favorite artists or discover new ones.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Join Live Events</h3>
              <p className="text-black">
                Purchase tickets or use your subscription to access interactive concerts and
                exclusive sessions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Connect & Engage</h3>
              <p className="text-black">
                React in real-time, vote on setlists, chat with fans, and access exclusive
                backstage content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Ready to Experience Music Differently?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of superfans connecting with artists through interactive experiences.
          </p>
          <Link
            href="/events/live"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  )
}

