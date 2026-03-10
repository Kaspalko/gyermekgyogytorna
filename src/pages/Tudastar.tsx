import { Link } from "react-router-dom";
import { cikkek } from "../data/cikkek";

export default function Tudastar() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        <h1 className="text-4xl font-bold text-gray-800 mb-12">
          Tudástár
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {cikkek.map((cikk) => (
            <Link
              key={cikk.slug}
              to={`/tudastar/${cikk.slug}`}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >

              <img
                src={cikk.image}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h2 className="text-xl font-semibold mb-2">
                {cikk.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {cikk.description}
              </p>

              <span className="text-amber-700">
                Tovább olvasom →
              </span>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
