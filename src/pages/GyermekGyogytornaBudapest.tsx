export default function GyermekGyogytornaBudapest() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Gyermek gyógytorna Budapesten
        </h1>

        <p className="text-lg text-gray-600">
          Segítség babák és kisgyermekek mozgásfejlődési problémáinál –
          gyors időponttal, egyéni vizsgálattal.
        </p>

        <a
          href="#jelentkezes"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Időpontot kérek
        </a>
      </section>

      {/* PROBLÉMÁK */}
      <section className="bg-gray-50 p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">
          Mikor érdemes gyermek gyógytornászhoz fordulni?
        </h2>

        <ul className="space-y-2 text-gray-700">
          <li>• a baba nem fordul át időben</li>
          <li>• kimarad a mászás</li>
          <li>• aszimmetrikus mozgás</li>
          <li>• ferde fejtartás</li>
          <li>• késik a járás</li>
          <li>• lúdtalp vagy boka befelé dől</li>
        </ul>
      </section>

      {/* VIZSGÁLAT */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Hogyan zajlik a vizsgálat?
        </h2>

        <ul className="space-y-2 text-gray-700">
          <li>• részletes mozgásvizsgálat</li>
          <li>• szülői konzultáció</li>
          <li>• egyéni fejlesztési terv</li>
          <li>• otthoni gyakorlatok</li>
        </ul>
      </section>

      {/* MIÉRT TE */}
      <section className="bg-blue-50 p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">
          Miért válasszon engem?
        </h2>

        <ul className="space-y-2 text-gray-700">
          <li>• gyermek gyógytornász specializáció</li>
          <li>• gyors időpont (nem hónapok)</li>
          <li>• egyéni figyelem</li>
          <li>• érthető, gyakorlatias segítség</li>
        </ul>
      </section>

      {/* CTA */}
      <section
        id="jelentkezes"
        className="text-center bg-gray-900 text-white p-8 rounded-2xl space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Időpontkérés
        </h2>

        <p>
          Ne várjon hónapokat – kérjen időpontot most.
        </p>

        <a
          href="mailto:pal.kasparek@gmail.com"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Időpontot kérek
        </a>
      </section>

    </div>
  );
}
