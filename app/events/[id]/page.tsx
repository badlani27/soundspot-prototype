'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Users, DollarSign, Lock, Check } from 'lucide-react'
import { format } from 'date-fns'

export default function EventDetailPage() {
  const [tier, setTier] = useState<'free' | 'premium' | null>(null)
  const [showPayment, setShowPayment] = useState(false)

  const event = {
    id: 1,
    artist: 'Sarah Chen',
    title: 'Acoustic Session',
    description: 'Join me for an intimate acoustic performance where I\'ll play some of my favorite songs and answer your questions. This is a special session just for my superfans!',
    date: '2024-01-15',
    time: '8:00 PM EST',
    duration: '60 minutes',
    price: 10,
    attendees: 342,
    maxAttendees: 500,
    requiresTicket: true,
    isLive: false,
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
  }

  const handlePurchase = () => {
    setShowPayment(true)
  }

  const handlePaymentComplete = () => {
    // Simulate payment completion
    setShowPayment(false)
    setTier('premium')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/events"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Events</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className={`${event.image} h-96 rounded-xl relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-gray-100">
                  <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
                  <p className="text-xl text-gray-200">{event.artist}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-600 mb-6">{event.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-semibold">{format(new Date(event.date), 'MMMM d, yyyy')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="font-semibold">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold">{event.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Attendees</p>
                    <p className="font-semibold">{event.attendees} / {event.maxAttendees}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Live acoustic performance with real-time interaction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Q&A session where you can ask questions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Exclusive behind-the-scenes content</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Access to event recording after it ends</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              {!showPayment ? (
                <>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">Get Your Ticket</h3>
                      <DollarSign className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="text-3xl font-bold mb-2">${event.price}</div>
                    <p className="text-sm text-gray-600">One-time payment</p>
                  </div>

                  {event.requiresTicket && (
                    <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Lock className="h-5 w-5 text-yellow-600" />
                        <span className="font-semibold text-yellow-800">Ticket Required</span>
                      </div>
                      <p className="text-sm text-yellow-700">
                        This event requires a ticket. Purchase to secure your spot!
                      </p>
                    </div>
                  )}

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Event Access</span>
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Live Chat</span>
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Event Recording</span>
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                  </div>

                  <button
                    onClick={handlePurchase}
                    className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition mb-3"
                  >
                    Purchase Ticket
                  </button>

                  <button className="w-full border-2 border-primary-500 text-primary-600 py-3 rounded-lg font-semibold hover:bg-primary-50 transition">
                    Add to Calendar
                  </button>
                </>
              ) : (
                <div>
                  <h3 className="text-xl font-bold mb-4">Payment</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4 p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold">${event.price}</span>
                  </div>
                  <button
                    onClick={handlePaymentComplete}
                    className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition mb-3"
                  >
                    Complete Payment
                  </button>
                  <button
                    onClick={() => setShowPayment(false)}
                    className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {tier === 'premium' && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">Ticket Purchased!</span>
                </div>
                <p className="text-sm text-green-700 mb-4">You're all set. See you at the event!</p>
                <Link
                  href="/events/live"
                  className="block w-full bg-green-600 text-white py-2 rounded-lg text-center hover:bg-green-700 transition"
                >
                  Join Event
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

