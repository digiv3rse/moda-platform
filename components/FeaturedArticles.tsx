import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Paris Fashion Week’s Spring/Summer 2025 Runways Were Filled With These 6 Trends",
    image: "/paris-fashion.jpg",
    category: "Fashion",
    url: "https://digimoda.site/post/paris-fashion-week-s-spring-summer-2025-runways-were-filled-with-these-6-trends",
  },
  {
    id: 2,
    title: "Rick Owens's Best Look in Street Style",
    image: "/rick-owen.jpg",
    category: "Fashion",
    url: "https://digimoda.site/post/rick-owens-s-best-look-in-street-style",
  },
  {
    id: 3,
    title: "Selena Gomez Finds the Key to a Perfect Red Carpet LBD | Vogue",
    image: "/selena-gomez.jpg",
    category: "Fashion",
    url: "https://digimoda.site/post/selena-gomez-finds-the-key-to-a-perfect-red-carpet-lbd-or-vogue",
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
                  <Link href={article.url}>
                    <button className="font-semibold text-purple-600 hover:text-purple-800">
                      Read More →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}