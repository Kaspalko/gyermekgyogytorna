import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-600">
                Kasparek Pál
              </h3>
              <p className="text-gray-300">
                Gyermek Gyógytornász
              </p>
              <p className="text-gray-400 text-sm mt-2">
                0-6 éves korig
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Elérhetőség</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>+36 70 554 0283</p>
                <p>pal.kasparek@gmail.com</p>
                <p className="text-gray-400">Budapest (X., XIII., XIV., XV. ker.)</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Szolgáltatás</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>Gyermek mozgásfejlesztés</p>
                <p>Házhoz járó gyógytorna</p>
                <p>Egyéni fejlesztési tervek</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Kasparek Pál. Minden jog fenntartva.
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Készítve</span>
                <Heart size={14} className="text-amber-600 fill-amber-600" />
                <span>-tal gyermekek fejlődéséért</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
