import { Check } from 'lucide-react';

const services = [
  {
    title: 'Nem fordul át, késik a mozgásfejlődés',
    description: 'Ha úgy érzi, gyermeke lassabban halad a mozgásfejlődési lépésekben',
  },
  {
    title: 'Aszimmetrikus mozgás vagy testtartás',
    description: 'Ha a baba gyakran egy irányba fordul, vagy nem használja egyformán a két oldalát',
  },
  {
    title: 'Kimarad a mászás vagy szokatlan a mozgás',
    description: 'Ha bizonyos mozgásformák kimaradnak, vagy a mozgás nem tűnik koordináltnak',
  },
  {
    title: 'Feszes vagy laza izomzat',
    description: 'Ha a baba mozgása túl merevnek vagy éppen túl „puha” jellegűnek tűnik',
  },
  {
    title: 'Koraszülöttség vagy születés körüli nehézségek',
    description: 'Koraszülött babák és speciális fejlődési helyzetek egyéni követése',
  },
];

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* CÍM */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mikor érdemes gyermek gyógytornászhoz fordulni?
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sok esetben nehéz eldönteni, hogy egy eltérés még belefér-e a természetes fejlődésbe.
              Az alábbi helyzetekben érdemes szakemberhez fordulni:
            </p>
          </div>

          {/* LISTA */}
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

          {/* EXTRA BLOKK – KOMOLYABB ESETEK */}
          <div className="mt-12 bg-amber-50 rounded-2xl p-8 text-center border border-amber-200 space-y-3">
            <p className="text-gray-700 text-lg font-medium">
              Speciális esetekkel is foglalkozom
            </p>

            <p className="text-gray-700">
              Koraszülött gyermekek, illetve idegrendszeri érintettség esetén is
              egyéni vizsgálat és fejlesztési terv készül.
            </p>

            <p className="text-gray-600 text-sm">
              Ha bizonytalan, érdemes egy vizsgálattal tisztázni a helyzetet.
            </p>
          </div>

          {/* MEGNYUGTATÓ BLOKK */}
          <div className="mt-6 bg-amber-50 rounded-2xl p-8 text-center border border-amber-200">
            <p className="text-gray-700 text-lg">
              Nem minden eltérés jelent problémát – de egy hozzáértő vizsgálat segít tisztán látni.
            </p>

            <p className="mt-3 text-gray-700">
              ✔ Megnyugtató válasz vagy ✔ időben elkezdett fejlesztés
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
