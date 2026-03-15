import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { cikkek } from "../data/cikkek";

export default function Cikk() {
  const { slug } = useParams();
  const cikk = cikkek.find((c) => c.slug === slug);
  useEffect(() => {
  if (!cikk) return;

  document.title = `${cikk.title} | Gyermek gyógytorna Budapest`;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", cikk.description);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", cikk.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", cikk.description);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute("content", cikk.image);

}, [cikk]);

  if (!cikk) {
    return <div className="p-20">Cikk nem található</div>;
  }

  const words = cikk.content.split(" ").length;
  const readingTime = Math.ceil(words / 200);

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

       <div className="prose max-w-none whitespace-pre-line">
  {cikk.content}
</div>

      </div>
    </section>
  );
}
