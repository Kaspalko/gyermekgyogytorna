import { Link } from "react-router-dom";
import { cikkek } from "../data/cikkek";

export default function Tudastar() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">

        <h1 className="text-4xl font-bold text-gray-800 mb-12">
          Tudástár
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {cikkek.map((cikk) => (
            <Link
              key={cikk.slug}
              to={`/tudastar/${cikk.slug}`}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >

              <img
                src={cikk.image}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">

                <p className="text-sm text-gray-500 mb-2">
                  {cikk.date} • {cikk.readingTime}
                </p>

                <h2 className="text-xl font-semibold mb-3">
                  {cikk.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {cikk.description}
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
