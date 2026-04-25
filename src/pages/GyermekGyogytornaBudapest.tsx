import { Helmet } from "react-helmet-async";

export default function GyermekGyogytornaBudapest() {
  return (
    <>
      <Helmet>
        <title>Gyermek gyógytorna Budapest – mozgásfejlesztés babáknak</title>
        <meta
          name="description"
          content="Gyermek gyógytorna Budapesten. Mikor érdemes gyógytornászhoz fordulni? Időpont akár 1 héten belül."
        />
      </Helmet>

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

        {/* többi rész változatlan marad */}

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
              className="w-full p-3 rounded-xl border bg-white text-gray-800"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded-xl border bg-white text-gray-800"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Telefonszám"
              className="w-full p-3 rounded-xl border bg-white text-gray-800"
            />

            <textarea
              name="message"
              placeholder="Miben tudok segíteni?"
              rows={4}
              className="w-full p-3 rounded-xl border bg-white text-gray-800"
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
    </>
  );
}
