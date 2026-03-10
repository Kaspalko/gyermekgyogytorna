import { useParams } from "react-router-dom";
import { cikkek } from "../data/cikkek";

export default function Cikk() {
  const { slug } = useParams();

  const cikk = cikkek.find((c) => c.slug === slug);

  if (!cikk) {
    return <div className="p-20">Cikk nem található</div>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">

        <div className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-amber-700">Főoldal</a>
          <span className="mx-2">/</span>
          <a href="/tudastar" className="hover:text-amber-700">Tudástár</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{cikk.title}</span>
        </div>

        <img
          src={cikk.image}
          className="w-full h-72 object-cover rounded-xl mb-8"
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {cikk.title}
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          {cikk.description}
        </p>

        <p className="text-gray-700 mb-6">
          A gyermek fejlődése az első életévekben rendkívül gyors és érzékeny
          folyamat. Ebben az időszakban alakulnak ki a mozgás, a kommunikáció,
          az érzékelés, a gondolkodás és a szociális kapcsolatok alapjai.
        </p>

        <p className="text-gray-700 mb-6">
          Éppen ezért különösen fontos, hogy a gyermek fejlődését már a
          legkorábbi életkorban figyelemmel kísérjük, és szükség esetén
          időben biztosítsunk számára megfelelő támogatást.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Miért fontos a korai szűrés?
        </h2>

        <p className="text-gray-700 mb-6">
          A fejlődési szűrővizsgálatok célja, hogy minél korábban észrevegyük,
          ha egy gyermek fejlődése eltér a megszokott ütemtől.
        </p>

        <ul className="list-disc ml-6 mb-8 text-gray-700 space-y-2">
          <li>a mozgás fejlődését</li>
          <li>az érzékelést</li>
          <li>a kommunikációt</li>
          <li>a viselkedést</li>
          <li>az általános fejlődési mintázatokat</li>
        </ul>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-12">
          <p className="text-gray-700">
            Ha bizonytalan a gyermek mozgásfejlődésével kapcsolatban,
            egy személyes állapotfelmérés segíthet tisztábban látni a
            fejlődés menetét és eldönteni, hogy szükség van-e további
            támogatásra.
          </p>
        </div>

      </div>
    </section>
  );
}
