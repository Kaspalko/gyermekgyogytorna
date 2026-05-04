import Contact from "../components/Contact";

export default function GyermekGyogytornaBudapest() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-12 space-y-16">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Gyermek gyógytorna Budapesten
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Segítség babák és kisgyermekek mozgásfejlődési problémáinál –
          egyéni vizsgálattal és érthető, gyakorlati útmutatással.
        </p>

        <a
          href="#jelentkezes"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
        >
          Időpontot kérek
        </a>
      </section>

      {/* TARTALOM (ide jöhet még szöveg később) */}
      <section className="space-y-4 text-gray-700">
        <p>
          A korai mozgásfejlődés kulcsfontosságú a gyermekek egészséges fejlődésében.
          Ha bizonytalan abban, hogy gyermeke megfelelően fejlődik-e, érdemes időben szakemberhez fordulni.
        </p>

        <p>
          Egyéni felmérés alapján célzott gyakorlatokat mutatok, amelyeket otthon is könnyen alkalmazhat.
        </p>
      </section>

      {/* FORM */}
      <section
        id="jelentkezes"
        className="bg-gray-900 text-white p-10 rounded-2xl"
      >
        <div className="max-w-2xl mx-auto space-y-6">

          <h2 className="text-2xl font-semibold text-center">
            Időpontkérés
          </h2>

          <p className="text-gray-300 text-center">
            Ne várjon hónapokat – kérjen időpontot most.
          </p>

          {/* 👉 FORM KOMPONENS */}
          <Contact />

        </div>
      </section>

    </div>
  );
}
