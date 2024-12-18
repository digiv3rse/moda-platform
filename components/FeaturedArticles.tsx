import Image from "next/image";

const articles = [
  {
    id: 1,
    title:
      "Paris Fashion Week’s Spring/Summer 2025 Runways Were Filled With These 6 Trends",
    image:
      "https://digimoda.site/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F0giprylc%2Fdigimoda%2F9317287d3a7ef016d066bdf04cd7e76b9c82b295-768x575.jpg%3Fw%3D768%26auto%3Dformat&w=1080&q=75",
    category: "Fashion",
  },
  {
    id: 2,
    title: "Rick Owens's Best Look in Street Style",
    image:
      "https://digimoda.site/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F0giprylc%2Fdigimoda%2F0b4ab026e4e972169db7f89c9cdc944199d75f16-1512x1096.jpg%3Frect%3D0%2C0%2C1512%2C822%26w%3D1512%26auto%3Dformat&w=1080&q=75",
    category: "Fashion",
  },
  {
    id: 3,
    title: "Selena Gomez Finds the Key to a Perfect Red Carpet LBD | Vogue",
    image:
      "https://digimoda.site/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F0giprylc%2Fdigimoda%2F3bc8659c4727a5c682d9f30c1c23afce9a1993e7-4096x3052.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75",
    category: "Fashion",
  },
];

export default function FeaturedArticles() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {articles.map((article) => (
              <div
                key={article.id}
                className="overflow-hidden rounded-lg bg-gray-50 shadow-md transition duration-300 hover:shadow-xl"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <span className="text-sm font-semibold text-purple-600">
                    {article.category}
                  </span>
                  <h3 className="mb-4 mt-2 text-xl font-bold">
                    {article.title}
                  </h3>
                  <button className="font-semibold text-purple-600 hover:text-purple-800">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
