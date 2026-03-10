import { Link } from "react-router-dom";

export default function BlogPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Tudástár
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <Link
            to="/tudastar/korai-felismeres"
            className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              A korai felismerés szerepe a gyermek fejlődésében
            </h3>

            <p className="text-gray-600 mb-4">
              Miért fontos a fejlődési eltérések korai felismerése és hogyan segítenek a szűrővizsgálatok.
            </p>

            <span className="text-amber-700 font-medium">
              Tovább olvasom →
            </span>

          </Link>

        </div>

        <div className="text-center mt-10">
          <Link
            to="/tudastar"
            className="text-amber-700 font-medium hover:underline"
          >
            Összes cikk megtekintése →
          </Link>
        </div>

      </div>
    </section>
  );
}
