import { Baby, Heart, Home } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('kapcsolat');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                <Baby size={18} />
                <span>0-6 éves korig</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Gyermek mozgásfejlesztés
              <br />
              <span className="text-amber-700">Türelemmel és figyelemmel</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Amennyiben segítséget szeretne kérni gyermeke fejlődésével kapcsolatban,
              forduljon hozzám bizalommal. Kórházi munka mellett házhoz járó gyógytornát vállalok
              Budapesten és környékén.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={scrollToContact}
                className="bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Időpontot kérek
              </button>
              <a
                href="tel:+36705540283"
                className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-50 transition-colors"
              >
                +36 70 554 0283
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-amber-700" size={28} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Családközpontú ellátás</h3>
                <p className="text-gray-600 text-sm">
                  Kórházi gyakorlattal rendelkező gyermekgyógytornász
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="text-amber-700" size={28} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Házhoz megyek</h3>
                <p className="text-gray-600 text-sm">
                  Kényelmes otthoni környezetben, a gyermek számára ismerős térben
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="text-amber-700" size={28} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">0-6 éves korig</h3>
                <p className="text-gray-600 text-sm">
                  Korai fejlesztés a legfontosabb életszakaszban
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
