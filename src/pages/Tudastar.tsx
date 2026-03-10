import { Link } from "react-router-dom";

const articles = [
  {
    title: "A korai felismerés szerepe a gyermek fejlődésében",
    description:
      "Miért fontos a gyermek fejlődésének korai nyomon követése és a szűrővizsgálatok szerepe.",
    link: "/tudastar/korai-felismeres",
    image: "/images/pexels-fotios-photos-5435599.jpg",
  },
  {
    title: "Miért fontos a hason fekvés?",
    description:
      "A hason fekvés fontos szerepet játszik a baba mozgásfejlődésében.",
    link: "/tudastar/hasrafekves",
    image: "/images/tummy-time.jpg",
  },
];

export default function Tudastar() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          Tudástár
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {articles.map((article) => (
            <Link
              key={article.title}
              to={article.link}
              className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
  src={article.image}
  alt={article.title}
  className="w-full h-48 object-cover"
/>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {article.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {article.description}
                </p>

                <span className="text-amber-700 font-medium">
                  Tovább olvasom →
                </span>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
