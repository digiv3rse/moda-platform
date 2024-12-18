import Image from "next/image";
import Link from "next/link";
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
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl">
              Fashion
            </h1>
            <p className="mb-8 text-xl text-white md:text-2xl">
              Discover the latest trends and styles
            </p>
            <Link href="https://digimoda.site">
              <button className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-gray-800 transition duration-300 hover:bg-gray-100">
                Read Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
