import { scrollToSection } from "../utils/scrollToSection";
export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center px-4">

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Van még kérdése?
        </h3>

        <p className="text-gray-600 mb-6">
          Ha bizonytalan, szívesen segítek eldönteni,
          hogy szükség van-e vizsgálatra.
        </p>

        <div className="space-y-3 mb-4">

          {/* TELEFON */}
          <a
            href="tel:+36705540283"
            className="block text-lg font-medium text-gray-800 hover:text-amber-700 transition"
          >
            📞 +36 70 554 0283
          </a>

          {/* EMAIL */}
          <a
            href="mailto:pal.kasparek@gmail.com"
            className="block text-gray-600 hover:text-amber-700 transition"
          >
            📧 pal.kasparek@gmail.com
          </a>

        </div>

        {/* VÁLASZ IDŐ */}
        <p className="text-sm text-gray-500 mb-6">
          Általában 24 órán belül válaszolok.
        </p>

        {/* MINI CTA */}
        <button
  onClick={() => scrollToSection('kapcsolat')}
  className="inline-block text-amber-700 font-semibold hover:underline"
>
  Vagy kérjen időpontot itt →
</button>

      </div>
    </section>
  );
}
