
import {
  Award,
  Building2,
  MapPin,
  Activity,
} from 'lucide-react';
import { scrollToSection } from "../utils/scrollToSection";

export default function About() {
  return (
    <section
      id="rolam"
      className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* CÍM */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Gyermek gyógytornász Budapest – Kasparek Pál
            </h2>

            <p className="text-lg text-gray-600">
              Gyermek gyógytorna | Csecsemők mozgásfejlődése | Korai támogatás
            </p>
          </div>

          {/* TARTALOM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* BEMUTATKOZÁS */}
            <div className="order-2 md:order-1">
              <div className="space-y-6">

                <p className="text-gray-700 leading-relaxed text-lg">
                  Gyermekgyógytornászként csecsemők és kisgyermekek
                  mozgásfejlődésének vizsgálatával és támogatásával foglalkozom.
                  Munkám során fontosnak tartom, hogy a gyermek egyéni
                  szükségletei mellett a család szempontjai is érvényesüljenek.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Gyermekkórházi munkám során különböző fejlődési és
                  mozgásszervi nehézségekkel élő gyermekek ellátásában veszek
                  részt. A szülőkkel való közös munka számomra kiemelten fontos:
                  szeretném, hogy érthető választ kapjanak kérdéseikre, és
                  gyakorlati útmutatást kapjanak gyermekük otthoni támogatásához.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Különösen érdekel a csecsemők korai mozgásfejlődése és a
                  spontán mozgások minőségi megfigyelése. Ebben nyújt
                  strukturált szakmai szempontokat a Prechtl-féle General
                  Movements Assessment (GMA), amely megfelelő képzettséggel
                  alkalmazva hozzájárulhat a korai neurológiai kockázatok
                  felismeréséhez.
                </p>

                <p className="text-gray-800 font-medium">
                  A szülők számára a szakmai segítség akkor igazán
                  hasznos, ha a vizsgálat mellett megértést, világos
                  magyarázatot és a mindennapokban is alkalmazható útmutatást kapnak.
                </p>

                {/* MINI CTA */}
                <div className="text-center">
                  <button
                    onClick={() => scrollToSection('jelentkezes')}
                    className="bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Időpontot kérek →
                  </button>
                </div>

                {/* SZAKMAI ÉS SZOLGÁLTATÁSI KÁRTYÁK */}
                <div className="space-y-4">

                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="text-amber-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Gyermekkórházi tapasztalat
                      </h3>
                      <p className="text-gray-600">
                        Gyermekek mozgásfejlődésének és funkcionális
                        képességeinek támogatása egyéni szükségleteik szerint.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Activity className="text-amber-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Prechtl-féle GMA
                      </h3>
                      <p className="text-gray-600 mb-2">
                        A csecsemők spontán mozgásainak minőségi
                        értékelésére szolgáló, speciális szakmai módszer.
                      </p>
                      <a
                        href="/tudastar/prechtl-gma-vizsgalat"
                        className="text-amber-700 font-semibold hover:text-amber-800 transition-colors"
                      >
                        Tudjon meg többet a GMA-ról →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building2 className="text-amber-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Házhoz járó szolgáltatás
                      </h3>
                      <p className="text-gray-600">
                        A vizsgálat és a fejlesztés a gyermek saját,
                        megszokott környezetében történik.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-amber-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Budapest
                      </h3>
                      <p className="text-gray-600">
                        Házhoz járó gyermekgyógytorna Budapest több kerületében.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* PROFILKÉP */}
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-500 rounded-3xl transform rotate-3"></div>
                <img
                  src="/profilkep.jpg"
                  alt="Kasparek Pál gyermekgyógytornász"
                  className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
                />
              </div>
            </div>

          </div>

          {/* BIZALMI SOR */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              ✔ Egyéni figyelem &nbsp; ✔ Érthető magyarázat &nbsp; ✔ Gyakorlatias segítség
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

