import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { cikkek } from "../data/cikkek";

export default function Cikk() {
  const { slug } = useParams();
  const cikk = cikkek.find((c) => c.slug === slug);

  useEffect(() => {
    if (!cikk) return;

    document.title = `${cikk.title} | Gyermek gyógytorna Budapest`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", cikk.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", cikk.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", cikk.description);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", cikk.image);

  }, [cikk]);

  if (!cikk) {
    return <div className="p-20 text-center">Cikk nem található</div>;
  }

  // olvasási idő (HTML nélkül)
  const textOnly = cikk.content.replace(/<[^>]+>/g, "");
  const words = textOnly.split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-amber-700">Főoldal</Link>
          <span className="mx-2">/</span>
          <Link to="/tudastar" className="hover:text-amber-700">Tudástár</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{cikk.title}</span>
        </div>

        {/* Kép */}
        <img
          src={cikk.image}
          alt={cikk.title}
          className="w-full h-72 object-cover rounded-xl mb-8"
        />

        {/* Cím */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {cikk.title}
        </h1>

        {/* Meta */}
        <p className="text-sm text-gray-500 mb-4">
          {cikk.date} • {readingTime} perc olvasás
        </p>

        {/* Leírás */}
        <p className="text-lg text-gray-600 mb-10">
          {cikk.description}
        </p>

        {/* 🔥 TARTALOM - JAVÍTVA */}
        <div
          className="
            max-w-none
            text-gray-800
            leading-relaxed
            space-y-6

            [&>h2]:text-2xl
            [&>h2]:font-semibold
            [&>h2]:mt-10

            [&>p]:mb-4

            [&>ul]:list-disc
            [&>ul]:pl-6
            [&>ul]:space-y-2

            [&>a]:text-amber-600
            [&>a]:underline
          "
          dangerouslySetInnerHTML={{ __html: cikk.content }}
        />

        {/* CTA */}
        <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-200">
          <h3 className="text-xl font-semibold mb-2">
            Bizonytalan a gyermek mozgásfejlődésével kapcsolatban?
          </h3>
          <p className="mb-4 text-gray-700">
            Segítek a fejlődés megítélésében és a megfelelő irány megtalálásában.
          </p>
          <Link
            to="/gyermek-gyogytorna-budapest"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition"
          >
            Időpontot kérek
          </Link>
        </div>

        {/* Kapcsolódó */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">
            Kapcsolódó cikkek
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {cikkek
              .filter((item) => item.slug !== cikk.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  to={`/tudastar/${item.slug}`}
                  className="block border rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}
