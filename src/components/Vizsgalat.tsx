import { Search, MessageCircle, ClipboardList, Home } from "lucide-react";

export default function Vizsgalat() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* CÍM */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hogyan zajlik a vizsgálat?
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Egy átlátható, nyugodt folyamat, ahol pontos képet kap a gyermek mozgásfejlődéséről
              és arról, hogy szükség van-e fejlesztésre.
            </p>
          </div>

          {/* LÉPÉSEK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* 1 */}
            <div className="bg-amber-50 rounded-2xl p-6 flex gap-4">
              <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                <Search size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                  1. Részletes mozgásvizsgálat
                </h3>
                <p className="text-gray-600">
                  Megnézem a baba mozgását, testtartását, izomtónusát és a fejlődési lépéseket.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="bg-amber-50 rounded-2xl p-6 flex gap-4">
              <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                  2. Szülői konzultáció
                </h3>
                <p className="text-gray-600">
                  Átbeszéljük a tapasztalatokat, és érthetően elmagyarázom, mit látunk.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="bg-amber-50 rounded-2xl p-6 flex gap-4">
              <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                <ClipboardList size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                  3. Egyéni javaslat
                </h3>
                <p className="text-gray-600">
                  Ha szükséges, megmutatom a gyakorlatokat és egy személyre szabott tervet adok.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="bg-amber-50 rounded-2xl p-6 flex gap-4">
              <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                <Home size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                  4. Otthoni környezetben
                </h3>
                <p className="text-gray-600">
                  A vizsgálat a gyermek számára ismerős, nyugodt környezetben történik.
                </p>
              </div>
            </div>

          </div>

          {/* MEGNYUGTATÓ RÉSZ */}
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
            <p className="text-gray-700 text-lg">
              Nem minden eltérés jelent problémát – de egy vizsgálat segít tisztán látni.
            </p>

            <p className="mt-3 text-gray-700">
              ✔ Megnyugtató válasz &nbsp; • &nbsp; ✔ Szükség esetén időben elkezdett fejlesztés
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="#jelentkezes"
              className="inline-block bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-700 transition"
            >
              Időpontot kérek
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
