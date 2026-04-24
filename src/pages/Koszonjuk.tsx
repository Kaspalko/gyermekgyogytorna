export default function Koszonjuk() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-32 pb-20 text-center">

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        Köszönöm a jelentkezést!
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Megkaptam az időpontkérését, és hamarosan felveszem Önnel a kapcsolatot.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
        <p className="text-gray-700">
          ⏱️ Általában <strong>24 órán belül válaszolok</strong>.
        </p>

        <p className="mt-3 text-gray-700">
          Ha sürgős a kérdés, hívjon nyugodtan:
        </p>

        <p className="mt-2 font-semibold text-lg">
          +36 70 554 0283
        </p>
      </div>

      <div className="space-y-4">

        <a
          href="/"
          className="inline-block bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-700 transition"
        >
          Vissza a főoldalra
        </a>

        <div>
          <a
            href="/tudastar"
            className="text-amber-600 hover:underline"
          >
            Tudástár megtekintése →
          </a>
        </div>

      </div>

    </div>
  );
}
