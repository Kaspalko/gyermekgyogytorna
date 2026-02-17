import { Award, CheckCircle } from 'lucide-react';

const qualifications = [
  {
    title: 'Sensomotoros Neuroterápia',
    description: 'Idegrendszer fejlesztésére fókuszáló terápia',
  },
  {
    title: 'Kinesio Tape',
    description: 'Kinesio tape technika alkalmazása a mozgásoktatásban',
  },
   {
    title: 'Babamasszázs',
    description: 'Az érintés a baba anyanyelve és a masszázs az  egyik legtermészetesebb és legkellemesebb módszere ennek a korai gondoskodó kapcsolatnak a biztosítására.',
  },
  {
    title: 'Neuro-Hidroterápia 1. (NHT 1.)',
    description: 'Vízben végzett speciális neuroterápiás módszer',
  },
  {
    title: 'Huple® Program',
    description: 'Speciális egyensúly, mozgáskoordináció és testtudatot fejlesztő torna',
  },
  {
    title: 'Gyógymasszőr',
    description: 'Terápiás masszázs képzettség',
  },
];

export default function Qualifications() {
  return (
    <section id="tanfolyamok" className="scroll-mt-32 py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Végzettségek & tanfolyamok
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Folyamatos szakmai továbbképzéseknek vagyok részese, hogy a legújabb módszereket tudjam alkalmazni
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 hover:shadow-lg transition-all transform hover:-translate-y-1 border border-amber-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-amber-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                      {qual.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {qual.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 text-center border border-amber-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="text-amber-700" size={28} />
              <h3 className="text-xl font-bold text-gray-800">Szakmai elkötelezettség</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Jelenleg az alábbiakban felsorolt tanfolyamokat és képzéseket végeztem el. Ezek biztosítják,
              hogy a gyermekek a legkorszerűbb és leghatékonyabb terápiás módszereket kapják meg.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
