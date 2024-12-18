"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Container>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-12 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <h1 className="mb-8 text-center text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              About DiGi Moda
            </h1>
            <p className="mb-12 text-center text-xl text-gray-500">
              Redefining fashion in the digital age
            </p>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="mb-4 text-lg text-gray-700">
                DiGi Moda is on a mission to revolutionize the fashion industry
                by bridging the gap between traditional fashion and the digital
                world. We aim to inspire, inform, and empower our readers with
                cutting-edge content that explores the intersection of style,
                technology, and sustainability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                What Makes Us Unique
              </h2>
              <ul className="list-inside list-disc space-y-2 text-lg text-gray-700">
                <li>
                  Immersive digital experiences that bring fashion to life
                </li>
                <li>
                  Coverage of emerging technologies shaping the future of
                  fashion
                </li>
                <li>Spotlight on sustainable and ethical fashion practices</li>
                <li>Interactive features that engage our community</li>
                <li>
                  Collaborations with digital artists and fashion innovators
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="mb-4 text-lg text-gray-700">
                Founded in 2023 by a team of fashion enthusiasts and tech
                visionaries, DiGi Moda was born out of a desire to create a
                fashion publication that truly embraces the digital age. We saw
                a gap in the market for a platform that not only showcases the
                latest trends but also explores how technology is transforming
                the fashion landscape.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                Since our launch, we&apos;ve been at the forefront of digital fashion
                journalism, bringing our readers exclusive content, virtual
                fashion shows, and in-depth analyses of the industry&apos;s digital
                transformation.
              </p>
            </section>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center"
            >
              <Link href="https://app.digimoda.xyz">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                >
                  Join the DiGi Moda Community{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
  );
}