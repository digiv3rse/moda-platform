import Nav from "@/components/nav"
import Hero from "@/components/Hero"
import FeaturedArticles from "@/components/FeaturedArticles"
import SubscriptionForm from "@/components/SubscriptionForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main>
        <Hero />
        <FeaturedArticles />
        <SubscriptionForm />
      </main>
      <Footer />
    </div>
  )
}

