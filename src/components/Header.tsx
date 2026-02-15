import { Phone, Mail } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-amber-700">
              Kasparek Pál
            </div>
            <div className="hidden md:block text-sm text-gray-600">
              Gyermek Gyógytornász
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('szolgaltatasok')}
              className="text-gray-700 hover:text-amber-700 transition-colors"
            >
              Szolgáltatások
            </button>
            <button
              onClick={() => scrollToSection('rolam')}
              className="text-gray-700 hover:text-amber-700 transition-colors"
            >
              Rólam
            </button>
            <button
              onClick={() => scrollToSection('tanfolymok')}
              className="text-gray-700 hover:text-amber-700 transition-colors"
            >
              Képzettség
            </button>
            <button
              onClick={() => scrollToSection('arak')}
              className="text-gray-700 hover:text-amber-700 transition-colors"
            >
              Árak
            </button>
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
