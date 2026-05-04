import Registration from "../components/Registration";

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

      {/* FORM */}
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

        {/* ✅ DARK mód bekapcsolva */}
        <Registration dark />
      </section>

    </div>
  );
}
