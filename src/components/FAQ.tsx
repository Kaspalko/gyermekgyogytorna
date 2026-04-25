import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Mikor érdemes gyermek gyógytornászhoz fordulni?",
    a: "Ha bizonytalan a mozgásfejlődésben, vagy úgy érzi, gyermeke eltér a megszokott fejlődési ütemtől, már egy vizsgálat is segíthet tisztábban látni. Nem szükséges megvárni, amíg egy probléma egyértelművé válik.",
  },
  {
    q: "Normális ez még, vagy már érdemes megnézetni?",
    a: "Sok esetben nehéz ezt szülőként megítélni. Egy vizsgálat során pontosabban látszik, hogy a fejlődés belefér-e a természetes variációba, vagy érdemes támogatni.",
  },
  {
    q: "Mi történik az első alkalommal?",
    a: "Az első alkalom egy részletes mozgásvizsgálatból és konzultációból áll. Megnézem a gyermek mozgását, majd elmagyarázom, mit látunk, és szükség esetén javaslatot teszek a további lépésekre.",
  },
  {
    q: "Hány alkalomra lesz szükség?",
    a: "Ez minden gyermeknél egyéni. Van, amikor egy alkalom is elegendő a megnyugtatáshoz vagy iránymutatáshoz, más esetben több találkozás segíti a fejlődést. Nincs kötelező alkalomszám.",
  },
  {
    q: "Kell beutaló a vizsgálathoz?",
    a: "Nem szükséges beutaló. Ugyanakkor hasznos, ha elhozza a születési zárójelentést, korábbi orvosi vizsgálatok eredményeit, illetve a védőnői szűrővizsgálat dokumentumait, ha rendelkezésre állnak.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          {/* CÍM */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Gyakori kérdések
            </h2>
            <p className="text-gray-600">
              Rövid válaszok a leggyakoribb szülői kérdésekre
            </p>
          </div>

          {/* FAQ LISTA */}
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="font-medium text-gray-800">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="p-5 text-gray-600 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="#jelentkezes"
              className="inline-block text-amber-700 font-semibold hover:underline"
            >
              Időpontot kérek →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
