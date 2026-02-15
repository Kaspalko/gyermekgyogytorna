import { Award, Building2, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="rolam" className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Rólam
            </h2>
            <p className="text-lg text-gray-600">
              Kasparek Pál - Gyermek Gyógytornász
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Gyógytornászként támogatom csecsemők és kisgyermekek mozgásfejlődését. Gyermekkórházi munkám mellett házhoz járó ellátást is vállalok.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="text-amber-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Szakmai Tapasztalat</h3>
                      <p className="text-gray-600">
                        Kórházi gyakorlattal rendelkező gyermekgyógytornász
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building2 className="text-amber-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Házhoz Járó Szolgáltatás</h3>
                      <p className="text-gray-600">
                        Kényelmes és biztonságos fejlesztés az otthon melegében
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-amber-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Budapest</h3>
                      <p className="text-gray-600">
                        Főként X., XIII., XIV., XV. kerületek
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-500 rounded-3xl transform rotate-3"></div>
                <img
                  src="/profilkep.jpg"
                  alt="Kasparek Pál"
                  className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
