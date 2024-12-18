"use client";

import { useState } from "react";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <>
      <section className="bg-pink-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-8 text-xl">
            Get the latest fashion news and trends delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <button
                type="submit"
                className="rounded-r-full bg-purple-600 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-purple-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
