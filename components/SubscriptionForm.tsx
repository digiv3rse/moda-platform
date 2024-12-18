'use client'

import { useState } from 'react'

export default function SubscriptionForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <section className="py-16 bg-pink-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-xl mb-8">Get the latest fashion news and trends delivered to your inbox.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-r-full font-semibold hover:bg-purple-700 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

