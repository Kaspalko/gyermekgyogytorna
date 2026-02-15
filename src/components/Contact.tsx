import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kapcsolat" className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kapcsolat
            </h2>
            <p className="text-lg text-gray-600">
              Forduljon hozzám bizalommal időpont egyeztetésért
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <a
                href="tel:+36705540283"
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 group"
              >
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-700 transition-colors">
                  <Phone className="text-amber-700 group-hover:text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Telefonszám</h3>
                  <p className="text-amber-700 text-xl font-medium">+36 70 554 0283</p>
                  <p className="text-gray-600 text-sm mt-1">Kattintson a híváshoz</p>
                </div>
              </a>

              <a
                href="mailto:pal.kasparek@gmail.com"
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 group"
              >
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-700 transition-colors">
                  <Mail className="text-amber-700 group-hover:text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-amber-700 font-medium break-all">pal.kasparek@gmail.com</p>
                  <p className="text-gray-600 text-sm mt-1">Kattintson az email küldéshez</p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Helyszín</h3>
                  <p className="text-gray-700">Budapest</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Főként X., XIII., XIV., XV. kerületek
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Időpont egyeztetés</h3>
                  <p className="text-gray-700">
                    Hívjon vagy írjon emailt az időpont egyeztetéséhez
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Szükséges információk
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Az időpont egyeztetéséhez kérem, készítse elő az alábbi információkat:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    <span>Gyermek neve és életkora</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    <span>Rövid leírás a problémáról</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    <span>Van-e szakorvosi diagnózis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    <span>Pontos cím (kerület és utca)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    <span>Előnyben részesített időpontok</span>
                  </li>
                </ul>
                <p className="pt-4 text-sm bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <strong>Fontos:</strong> Az első alkalom előtt telefonon vagy emailben
                  egyeztetjük a részleteket, hogy a legjobb ellátást tudjam biztosítani
                  gyermeke számára.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
