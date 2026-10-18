
import { Award, CheckCircle } from 'lucide-react';

const qualifications = [
  {
    title: 'Szenzomotoros neuroterápia',
    description:
      'A mozgás és az idegrendszeri működés kapcsolatára épülő terápiás megközelítés.',
  },
  {
    title: 'Prechtl-féle General Movements Assessment (GMA)',
    description:
      'A csecsemők spontán mozgásainak minőségi értékelésére szolgáló módszer.',
  },
  {
    title: 'Babamasszázs',
    description:
      'Az érintésen keresztüli kapcsolódás és a szülő–csecsemő kapcsolat támogatása.',
  },
  {
    title: 'Neuro-Hidroterápia 1. (NHT 1.)',
    description:
      'Speciális, vízben végzett terápiás megközelítés.',
  },
  {
    title: 'Huple® program',
    description:
      'Az egyensúly, a mozgáskoordináció és a testtudat fejlesztését célzó program.',
  },
  {
    title: 'Gyógymasszőr',
    description:
      'Gyógymasszőri végzettség a masszázs terápiás alkalmazásához.',
  },
];

export default function Qualifications() {
  return (
    <section
      id="tanfolyamok"
      className="scroll-mt-32 py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* CÍM */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Végzettségek és szakmai képzések
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Szakmai tudásomat végzettségeimre és továbbképzéseimre
              alapozva, a gyermekek egyéni szükségleteihez igazítva
              alkalmazom.
            </p>
          </div>

          {/* KÉPZÉSEK */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualifications.map((qual) => (
              <div
                key={qual.title}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 hover:shadow-lg transition-all transform hover:-translate-y-1 border border-amber-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle
                      className="text-amber-700"
                      size={24}
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                      {qual.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {qual.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SZAKMAI ELKÖTELEZETTSÉG */}
          <div className="mt-12 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 text-center border border-amber-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="text-amber-700" size={28} />

              <h3 className="text-xl font-bold text-gray-800">
                Szakmai elkötelezettség
              </h3>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Fontosnak tartom a folyamatos szakmai fejlődést és az
              ismeretek tudatos bővítését. A különböző módszerek közül
              mindig a gyermek állapotához, szükségleteihez és a
              terápiás célokhoz illeszkedő megközelítés kiválasztására
              törekszem.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
