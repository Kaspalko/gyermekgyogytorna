import { Phone } from 'lucide-react';
import { scrollToSection } from "../utils/scrollToSection";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <a href="/" className="text-2xl font-bold text-amber-700">
              Kasparek Pál
            </a>

            <div className="hidden md:block text-sm text-gray-600">
              Gyermek gyógytornász
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">

            <button onClick={() => scrollToSection('szolgaltatasok')}>
              Szolgáltatások
            </button>

            <button onClick={() => scrollToSection('rolam')}>
              Rólam
            </button>

            <button onClick={() => scrollToSection('tanfolyamok')}>
              Képzettség
            </button>

            <button onClick={() => scrollToSection('arak')}>
              Árak
            </button>

            <a href="/tudastar">
              Tudástár
            </a>

            <button
              onClick={() => scrollToSection('kapcsolat')}
              className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors"
            >
              Kapcsolat
            </button>

          </nav>

          <div className="md:hidden flex items-center gap-3">
            <a href="tel:+36705540283" className="text-amber-700">
              <Phone size={24} />
            </a>
          </div>

        </div>

      </div>
    </header>
  );
}
