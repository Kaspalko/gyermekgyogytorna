import { useParams } from "react-router-dom";

export default function KoraiFelismeres() {

  const { slug } = useParams();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">

        <img
          src="/images/pexels-fotios-photos-5435599.jpg"
          alt="Baba fejlődésének megfigyelése"
          className="w-full h-72 object-cover rounded-2xl mb-8"
        />

        <p className="text-sm text-gray-500 mb-2">
          2026 • 6 perc olvasás
        </p>

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          A korai felismerés szerepe a gyermek fejlődésében
        </h1>
        <p className="text-gray-700 mb-6">
          A gyermek fejlődése az első életévekben rendkívül gyors és érzékeny folyamat.
          Ebben az időszakban alakulnak ki a mozgás, a kommunikáció, az érzékelés,
          a gondolkodás és a szociális kapcsolatok alapjai.
        </p>

        <p className="text-gray-700 mb-6">
          Éppen ezért különösen fontos, hogy a gyermek fejlődését már a legkorábbi
          életkorban figyelemmel kísérjük, és szükség esetén időben biztosítsunk
          számára megfelelő támogatást.
        </p>

        <p className="text-gray-700 mb-10">
          A korai felismerés lehetőséget ad arra, hogy a gyermek a fejlődéséhez
          szükséges segítséget minél hamarabb megkaphassa.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Miért fontos a korai szűrés?
        </h2>

        <p className="text-gray-700 mb-6">
          A fejlődési szűrővizsgálatok célja, hogy minél korábban észrevegyük,
          ha egy gyermek fejlődése eltér a megszokott ütemtől.
        </p>

        <p className="text-gray-700 mb-6">
          A szűrés nem diagnózis, hanem egy első lépés. Segít felismerni azokat a
          jeleket, amelyek esetleg további vizsgálatot indokolhatnak.
        </p>

        <p className="text-gray-700 mb-4">
          A szűrések során a szakemberek több területet is figyelembe vesznek:
        </p>

        <ul className="list-disc ml-6 mb-8 text-gray-700 space-y-2">
          <li>a mozgás fejlődését</li>
          <li>az érzékelést</li>
          <li>a kommunikációt</li>
          <li>a viselkedést</li>
          <li>az általános fejlődési mintázatokat</li>
        </ul>

        <p className="text-gray-700 mb-10">
          A rendszeres szűrések fontos szerepet töltenek be abban is, hogy
          megnyugtassák a szülőket, ha a gyermek fejlődése megfelelő ütemben
          halad.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          A diagnosztika szerepe
        </h2>

        <p className="text-gray-700 mb-6">
          Ha a szűrés során felmerül, hogy a gyermek fejlődése eltérhet az
          átlagostól, akkor részletesebb vizsgálatok következnek.
        </p>

        <p className="text-gray-700 mb-4">
          A szakemberek ilyenkor többek között azt vizsgálják:
        </p>

        <ul className="list-disc ml-6 mb-8 text-gray-700 space-y-2">
          <li>hogyan mozog a gyermek</li>
          <li>hogyan kommunikál</li>
          <li>hogyan érzékeli a környezetét</li>
          <li>hogyan kapcsolódik másokhoz</li>
          <li>milyen erősségei és milyen nehézségei vannak</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Milyen módszerekkel történik a vizsgálat?
        </h2>

        <ul className="list-disc ml-6 mb-10 text-gray-700 space-y-2">
          <li>megfigyelés játék és hétköznapi helyzetek során</li>
          <li>beszélgetés a szülőkkel</li>
          <li>fejlődési kérdőívek és tesztek</li>
          <li>speciális vizsgálatok különböző fejlődési területeken</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Mikor beszélünk fejlődési eltérésről?
        </h2>

        <p className="text-gray-700 mb-6">
          A gyermekek fejlődése természetesen nem teljesen egyforma. Minden
          gyermeknek megvan a saját fejlődési tempója.
        </p>

        <p className="text-gray-700 mb-6">
          Előfordulhat azonban, hogy a fejlődés mennyiségében vagy minőségében
          eltérés figyelhető meg.
        </p>

        <p className="text-gray-700 mb-10">
          Az ilyen jelek nem feltétlenül jelentenek komoly problémát, de érdemes
          szakemberrel megbeszélni őket.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          A szülők szerepe
        </h2>

        <p className="text-gray-700 mb-10">
          A szülők ismerik legjobban gyermeküket, ezért kulcsszerepük van a
          fejlődés nyomon követésében.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="text-gray-700">
            Ha bizonytalan a gyermek mozgásfejlődésével kapcsolatban, egy
            személyes állapotfelmérés segíthet tisztábban látni a fejlődés
            menetét és eldönteni, hogy szükség van-e további támogatásra.
          </p>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mt-16 mb-6">
          Kapcsolódó cikkek
</h3>

<div className="grid md:grid-cols-3 gap-6">

<a href="/tudastar/hason-fekves" className="border rounded-xl p-4 hover:shadow">
Miért fontos a hason fekvés?
</a>

<a href="/tudastar/2-honapos-baba" className="border rounded-xl p-4 hover:shadow">
Mit tud egy 2 hónapos baba?
</a>

<a href="/tudastar/korrigalt-eletkor" className="border rounded-xl p-4 hover:shadow">
Korrigált életkor koraszülötteknél
</a>
      </div>
    </section>
  );
}
