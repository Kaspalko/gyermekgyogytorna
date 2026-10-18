import { Baby, Heart, Home, Activity, ArrowRight } from 'lucide-react';
import { scrollToSection } from "../utils/scrollToSection";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">

          {/* TOP BADGE */}
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              <Baby size={18} />
              <span>Gyermek gyógytornász | 0–3 éves korig | Budapest</span>
            </div>
          </div>

          {/* FŐ CÍM */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Szakszerű támogatás lépésről lépésre
            <br />
            <span className="text-amber-700">
              gyermek gyógytorna és korai fejlesztés
            </span>
          </h1>

          {/* BEMUTATKOZÓ SZÖVEG */}
          <div className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed space-y-3">
            <p>
              Minden gyermek saját ütemben fejlődik – de néha jól jön egy szakértői visszajelzés.
            </p>

            <p>Forduljon hozzám, ha:</p>

            <ul className="text-left inline-block">
              <li>Bizonytalan a mozgásfejlődésben</li>
              <li>Úgy érzi, valami nem teljesen szimmetrikus</li>
              <li>Szeretne szakmai visszajelzést kapni gyermeke mozgásáról</li>
            </ul>

            <p className="font-medium text-gray-800">
              Egyéni vizsgálat Budapesten – előzetes időpont-egyeztetéssel
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button
              onClick={() => scrollToSection('jelentkezes')}
              className="bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              👉 Időpontot kérek
            </button>

            <a
              href="tel:+36705540283"
              className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-50 transition-colors"
            >
              +36 70 554 0283
            </a>
          </div>

          {/* BIZALOM MINI */}
          <p className="text-sm text-gray-500 mb-10">
            ✔ Gyors időpont-egyeztetés &nbsp; ✔ Egyéni figyelem &nbsp; ✔ Érthető magyarázat
          </p>

          {/* KIEMELT GMA BLOKK */}
          <div className="max-w-4xl mx-auto mb-10 text-left">
            <div className="bg-white border border-amber-200 rounded-3xl p-6 md:p-8 shadow-md">
              <div className="flex flex-col md:flex-row gap-5 md:items-center">
                <div className="bg-amber-100 text-amber-700 rounded-2xl w-16 h-16 flex items-center justify-center shrink-0">
                  <Activity size={32} />
                </div>

                <div className="flex-1">
                  <p className="text-amber-700 text-sm font-semibold uppercase tracking-wide mb-2">
                    Speciális szakmai módszer
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Prechtl-féle General Movements Assessment (GMA)
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-3">
                    A GMA a csecsemők spontán mozgásainak minőségi értékelésére
                    szolgáló módszer. Megfelelő szakmai képzettséggel alkalmazva
                    segítheti a korai neurológiai kockázatok felismerését.
                  </p>

                  <a
                    href="/tudastar/prechtl-gma-vizsgalat"
                    className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 transition-colors"
                  >
                    Ismerje meg a GMA módszerét
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-5">
                A GMA nem helyettesíti a komplex klinikai vizsgálatot,
                és önmagában nem állít fel diagnózist.
              </p>
            </div>
          </div>

          {/* FEATURE BOXOK */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-amber-700" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Családközpontú szemlélet
              </h3>
              <p className="text-gray-600 text-sm">
                A vizsgálat során a szülők is pontos, érthető útmutatást kapnak.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-amber-700" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Otthoni környezet
              </h3>
              <p className="text-gray-600 text-sm">
                A gyermek számára biztonságos, megszokott térben történő ellátás.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Baby className="text-amber-700" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Korai támogatás
              </h3>
              <p className="text-gray-600 text-sm">
                A fejlődési eltérések korai felismerésének támogatása és szükség esetén további vizsgálat javaslata.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
