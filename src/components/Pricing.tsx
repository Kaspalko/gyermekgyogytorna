import { Clock, Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="arak" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Árak
            </h2>
            <p className="text-lg text-gray-600">
              Átlátható, fix árazás
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-block bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
                Egyéni Fejlesztés
              </div>
              <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">
                14.000 Ft
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Clock size={20} />
                <span className="text-lg">45 perc / alkalom</span>
              </div>
            </div>

            <div className="space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Egyéni, személyre szabott fejlesztés</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Házhoz járó szolgáltatás</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Szülők számára tanácsadás és gyakorlatok</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Otthoni környezetben, a gyermek biztonságában</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={() => {
                  const element = document.getElementById('kapcsolat');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-amber-700 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Időpontot kérek
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p>Hívjon bizalommal időpont egyeztetésért!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
