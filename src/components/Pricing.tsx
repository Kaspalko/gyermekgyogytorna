import { Clock, Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="arak" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* CÍM */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Gyermek gyógytorna ára
            </h2>
            <p className="text-lg text-gray-600">
              Átlátható, fix díjazás – rejtett költségek nélkül
            </p>
          </div>

          {/* KÁRTYA */}
          <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl">

            <div className="text-center mb-8">
              <div className="inline-block bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
                Egyéni vizsgálat és fejlesztés
              </div>

              <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">
                14.000 Ft
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Clock size={20} />
                <span className="text-lg">45 perc / alkalom</span>
              </div>
            </div>

            {/* MIT KAPSZ */}
            <div className="space-y-4 max-w-md mx-auto">

              <div className="flex items-start gap-3">
                <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">
                  Részletes mozgásvizsgálat és állapotfelmérés
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">
                  Érthető magyarázat a szülőknek
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">
                  Személyre szabott gyakorlatok
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">
                  Otthoni környezetben történő ellátás
                </p>
              </div>

            </div>

            {/* BIZALMI RÉSZ */}
            <div className="mt-8 text-center">
              <p className="text-gray-700">
                Nincs kötelező alkalomszám – már egy vizsgálat is segíthet tisztán látni.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <a
                href="#jelentkezes"
                className="inline-block bg-amber-700 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Időpontot kérek
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
