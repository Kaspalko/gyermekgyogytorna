import { useParams } from "react-router-dom";
import { cikkek } from "../data/cikkek";

export default function Cikk() {
  const { slug } = useParams();
  const cikk = cikkek.find((c) => c.slug === slug);
  const words = cikk.content.split(" ").length;
const readingTime = Math.ceil(words / 200);

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
          alt={cikk.title}
          className="w-full h-72 object-cover rounded-xl mb-8"
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {cikk.title}
        </h1>
<p className="text-sm text-gray-500 mb-4">
  {cikk.date} • {readingTime} perc olvasás
</p>
        <p className="text-lg text-gray-600 mb-10">
          {cikk.description}
        </p>

        <div className="text-gray-700 space-y-6">
          {cikk.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

      </div>
    </section>
  );
}
