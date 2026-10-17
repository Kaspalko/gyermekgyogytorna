
import { Clock, Check } from 'lucide-react';
import { scrollToSection } from "../utils/scrollToSection";

export default function Pricing() {
  return (
    <section id="arak" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* CÍM */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Gyermek gyógytorna ára
            </h2>
            <p className="text-lg text-gray-600">
              Átlátható, fix díjazás 
            </p>
          </div>

          {/* ÁRAK KÁRTYÁI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

            {/* 1. KÁRTYA – ELSŐ VIZSGÁLAT */}
            <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-8 shadow-xl flex flex-col">

              <div className="text-center mb-8">
                <div className="inline-block bg-amber-700 text-white px-5 py-2 rounded-full text-sm font-medium mb-4">
                  Első alkalom
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Egyéni vizsgálat
                </h3>

                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                  20.000 Ft
                </div>

                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock size={20} />
                  <span>45 perc</span>
                </div>
              </div>

              <div className="space-y-4 flex-grow">
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
                    Személyre szabott terápiás javaslat
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Otthoni környezetben történő ellátás
                  </p>
                </div>
              </div>

              <p className="mt-8 text-center text-gray-700">
                Az első alkalom során felmérjük gyermeked mozgásfejlődését,
                és megbeszéljük a további lehetőségeket.
              </p>

              <button
                type="button"
                onClick={() => scrollToSection('jelentkezes')}
                className="mt-6 w-full bg-amber-700 text-white px-5 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Időpontot kérek →
              </button>
            </div>

            {/* 2. KÁRTYA – EGYÉNI TERÁPIA */}
            <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-8 shadow-xl flex flex-col">

              <div className="text-center mb-8">
                <div className="inline-block bg-amber-700 text-white px-5 py-2 rounded-full text-sm font-medium mb-4">
                  További alkalmak
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Egyéni gyógytorna
                </h3>

                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                  15.000 Ft
                </div>

                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock size={20} />
                  <span>45 perc / alkalom</span>
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Egyéni terápiás foglalkozás
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Személyre szabott mozgásfejlesztés
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    A terápiás célokhoz igazított gyakorlatok
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Tanácsadás és otthon végezhető feladatok
                  </p>
                </div>
              </div>

              <p className="mt-8 text-center text-gray-700">
                A foglalkozások során követjük gyermeked fejlődését,
                és szükség szerint alakítjuk a terápiát.
              </p>

              <button
                type="button"
                onClick={() => scrollToSection('jelentkezes')}
                className="mt-6 w-full bg-amber-700 text-white px-5 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Időpontot kérek →
              </button>
            </div>

            {/* 3. KÁRTYA – 4 ALKALMAS BÉRLET */}
            <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-8 shadow-xl flex flex-col border-2 border-amber-300">

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md whitespace-nowrap">
                Kedvezményes bérlet
              </div>

              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  4 alkalmas bérlet
                </h3>

                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                  54.000 Ft
                </div>

                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock size={20} />
                  <span>4 × 45 perc</span>
                </div>

                <div className="mt-4 inline-block bg-white/80 rounded-xl px-4 py-3">
                  <p className="text-amber-800 font-bold text-lg">
                    13.500 Ft / alkalom
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    10.000 Ft megtakarítás
                  </p>
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    4 egyéni terápiás foglalkozás
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Személyre szabott mozgásfejlesztés
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    A gyermek fejlődéséhez igazított terápiás célok
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Otthon is alkalmazható gyakorlatok és tanácsadás
                  </p>
                </div>
              </div>

              <p className="mt-8 text-center text-gray-700">
                Kedvezőbb ár a rendszeres, egymásra épülő terápiás alkalmakhoz.
              </p>

              <button
                type="button"
                onClick={() => scrollToSection('jelentkezes')}
                className="mt-6 w-full bg-amber-700 text-white px-5 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Bérletet szeretnék →
              </button>
            </div>

          </div>

          {/* ALSÓ TÁJÉKOZTATÓ */}
          <div className="mt-10 text-center">
            <p className="text-gray-700 text-lg">
              Nincs kötelező alkalomszám – a terápiás folyamatot
              a gyermek egyéni szükségleteihez igazítjuk.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}


