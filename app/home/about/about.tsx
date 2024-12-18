"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Container from "@/components/container";

export default function AboutPage() {
  return (
    <>
    <Container>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl text-center mb-8">
          About DiGi Moda
        </h1>
        <p className="text-xl text-gray-500 text-center mb-12">
          Redefining fashion in the digital age
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            DiGi Moda is on a mission to revolutionize the fashion industry by bridging the gap between traditional fashion and the digital world. We aim to inspire, inform, and empower our readers with cutting-edge content that explores the intersection of style, technology, and sustainability.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Unique</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Immersive digital experiences that bring fashion to life</li>
            <li>Coverage of emerging technologies shaping the future of fashion</li>
            <li>Spotlight on sustainable and ethical fashion practices</li>
            <li>Interactive features that engage our community</li>
            <li>Collaborations with digital artists and fashion innovators</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4">
            Founded in 2023 by a team of fashion enthusiasts and tech visionaries, DiGi Moda was born out of a desire to create a fashion publication that truly embraces the digital age. We saw a gap in the market for a platform that not only showcases the latest trends but also explores how technology is transforming the fashion landscape.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Since our launch, we've been at the forefront of digital fashion journalism, bringing our readers exclusive content, virtual fashion shows, and in-depth analyses of the industry's digital transformation.
          </p>
        </section>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center"
        >
          <Link href="https://app.digimoda.xyz">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              Join the DiGi Moda Community <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
    </Container>
    </>
  )
}