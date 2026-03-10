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

        <p className="text-gray-700">
          Itt jelenik majd meg a teljes cikk tartalma.
        </p>

      </div>
    </section>
  );
}
