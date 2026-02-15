import { Check } from 'lucide-react';

const services = [
  {
    title: 'Megkésett mozgásfejlődés',
    description: 'Ha gyermeke később éri el a mozgásfejlődési mérföldköveket',
  },
  {
    title: 'Izomtónus eloszlási zavarok',
    description: 'Az izomfeszültség egyenlőtlen eloszlásának kezelése',
  },
  {
    title: 'Koraszülött baba, születéskori oxigénhiány',
    description: 'Speciális fejlesztés koraszülött gyermekek számára',
  },
  {
    title: 'Idegrendszeri sérülés',
    description: 'Rehabilitáció idegrendszeri érintettség esetén',
  },
  {
    title: 'Tartási rendellenességek',
    description: 'Aszimmetrikus fejtartás, befelé forduló boka, csípő probléma kezelése',
  },
];

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Szolgáltatások
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Amennyiben segítséget szeretne kérni gyermeke fejlődésével kapcsolatban
              az alábbi területeken, forduljon hozzám bizalommal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-amber-700 w-8 h-8 rounded-full flex items-center justify-center">
                      <Check className="text-white" size={18} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-amber-50 rounded-2xl p-8 text-center border border-amber-200">
            <p className="text-gray-700 text-lg">
              <strong>Fontos:</strong> A korai felismerés és beavatkozás kulcsfontosságú!
              Minél hamarabb kezdjük a fejlesztést, annál jobb eredményeket érhetünk el.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
