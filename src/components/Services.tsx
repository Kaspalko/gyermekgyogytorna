
import { Check, ArrowRight } from 'lucide-react';
import { scrollToSection } from "../utils/scrollToSection";

const services = [
  {
    title: 'A mozgásfejlődés elmaradása vagy lassabb üteme',
    description:
      'Ha gyermeke később sajátít el bizonyos mozgásformákat, vagy bizonytalan abban, hogyan halad a fejlődése.',
  },
  {
    title: 'Aszimmetrikus mozgás vagy testtartás',
    description:
      'Ha a baba gyakran ugyanabba az irányba fordul, vagy feltűnően eltérően használja a két testfelét.',
  },
  {
    title: 'Szokatlan mozgásminták',
    description:
      'Ha egy mozgásforma kimarad, a mozgás kivitelezése szokatlannak tűnik, vagy kérdése van gyermeke koordinációjával kapcsolatban.',
  },
  {
    title: 'Feszesnek vagy lazának tűnő izomzat',
    description:
      'Ha gyermeke izomzatát merevnek, vagy épp ellenkezőleg pettyhüdtnek érzékeli.',
  },
  {
    title: 'Koraszülöttség és születés körüli nehézségek',
    description:
      'Ha a koraszülöttség vagy a születés körüli események miatt fontos a mozgásfejlődés fokozott figyelemmel kísérése.',
  },
  {
    title: 'Neurológiai érintettség',
    description:
      'Ha gyermeke idegrendszeri érintettséggel él, és személyre szabott gyógytornára, funkcionális támogatásra van szüksége.',
  },
  {
    title: 'Már meglévő diagnózis melletti fejlesztés',
    description:
      'Ha gyermeke ismert fejlődési vagy mozgásszervi állapotához igazodó terápiás célokat szeretne kialakítani.',
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
              Mikor érdemes gyermekgyógytornászhoz fordulni?
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A gyermekek mozgásfejlődése egyéni ütemben zajlik.
              Ha kérdése vagy aggodalma van gyermeke mozgásával,
              testtartásával vagy fejlődésével kapcsolatban, egy
              szakmai vizsgálat segíthet jobban megérteni a helyzetet
              és meghatározni a következő lépéseket.
            </p>
          </div>

          {/* SZOLGÁLTATÁSI TERÜLETEK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
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

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SPECIÁLIS ESETEK */}
          <div className="mt-12 bg-amber-50 rounded-2xl p-8 text-center border border-amber-200 space-y-3">
            <p className="text-gray-800 text-xl font-semibold">
              Eltérő fejlődési szükséglet esetén is
            </p>

            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Idegrendszeri érintettséggel vagy összetettebb mozgásfejlődési
              nehézséggel élő gyermekek esetében a terápia céljait mindig
              az egyéni állapothoz, funkcionális képességekhez és a család
              mindennapi szükségleteihez igazítom.
            </p>
          </div>

          {/* MEGNYUGTATÓ BLOKK */}
          <div className="mt-6 bg-white rounded-2xl p-8 text-center border border-amber-200">
            <p className="text-gray-800 text-lg font-medium">
              Nem minden eltérés jelez problémát – de nem kell egyedül
              mérlegelnie, mikor érdemes segítséget kérni.
            </p>

            <p className="mt-3 text-gray-600">
              A cél a gyermek egyéni szükségleteinek megértése és a megfelelő
              következő lépések meghatározása.
            </p>

            <button
              onClick={() => scrollToSection('jelentkezes')}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl"
            >
              Kapcsolatfelvétel
              <ArrowRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

