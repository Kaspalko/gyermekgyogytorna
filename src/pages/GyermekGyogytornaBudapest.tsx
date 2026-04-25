export default function GyermekGyogytornaBudapest() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-12 space-y-12">

      {/* HERO */}
      <section className="text-center space-y-5">
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

      {/* PROBLÉMÁK */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
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
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
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
      <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Miért válasszon engem?
        </h2>

        <ul className="space-y-2 text-gray-700">
          <li>• gyermek gyógytornász specializáció</li>
          <li>• gyors időpont (nem hónapok)</li>
          <li>• egyéni figyelem</li>
          <li>• érthető, gyakorlatias segítség</li>
        </ul>
      </section>

      {/* CTA + FORM */}
      <section
        id="jelentkezes"
        className="text-center bg-gray-900 text-white p-10 rounded-2xl space-y-6"
      >
        <h2 className="text-2xl font-semibold">
          Időpontkérés
        </h2>

        <p className="text-gray-300">
          Ne várjon hónapokat – kérjen időpontot most.
        </p>

        <form
          action="https://formspree.io/f/mlgaznyv"
          method="POST"
          className="space-y-4"
        >
          <input
            type="hidden"
            name="_next"
            value="https://www.gyermekgyt-bp.hu/koszonjuk"
          />

          <input
            type="hidden"
            name="_subject"
            value="Új jelentkezés a weboldalról"
          />

          <input
            type="text"
            name="name"
            placeholder="Név"
            required
            className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Telefonszám"
            className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400"
          />

          <textarea
            name="message"
            placeholder="Miben tudok segíteni?"
            rows={4}
            className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400"
          />

          <p className="text-sm text-gray-400 text-center">
            24 órán belül visszahívom
          </p>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-3 rounded-xl font-semibold hover:bg-amber-700 transition"
          >
            Jelentkezem
          </button>
        </form>
      </section>

    </div>
  );
}
