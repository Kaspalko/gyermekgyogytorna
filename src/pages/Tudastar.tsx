import { Link } from "react-router-dom";

export default function Tudastar() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        <h1 className="text-4xl font-bold text-gray-800 mb-12">
          Tudástár
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <Link
            to="/tudastar/korai-felismeres"
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              A korai felismerés szerepe a gyermek fejlődésében
            </h2>

            <p className="text-gray-600 mb-4">
              Miért fontos a fejlődési eltérések korai felismerése és a szűrővizsgálatok szerepe.
            </p>

            <span className="text-orange-600">
              Tovább olvasom →
            </span>

          </Link>

        </div>

      </div>
    </section>
  );
}
