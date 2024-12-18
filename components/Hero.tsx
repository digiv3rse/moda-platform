import Image from "next/image"
import Link from "next/link"
export default function Hero() {
  return (
    <>
    <section className="relative h-[70vh] overflow-hidden">
      <Image
        src="/runways.jpg"
        alt="Fashion model on runway"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Fashion</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Discover the latest trends and styles</p>
          <Link href="https://digimoda.site">
            <button className="bg-white text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
              Read Now
            </button>
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}