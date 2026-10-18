
import { useState } from "react";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { scrollToSection } from "../utils/scrollToSection";

const testimonials = [
  {
    text: "Nagyon megnyugtató volt a vizsgálat, minden kérdésünkre érthető választ kaptunk Palitól.",
    name: "Édesanya, 6 hónapos baba",
  },
  {
    text: "Pali az első pillanattól kezdve rendkívül alaposan és családbarát módon alakította a gyógytorna foglalkozást a fél éves kisfiamnak. Éneklős, dallamos játékokkal oldotta fel a pici hangulatát, aki ezek után végig együttműködő volt a 45 perc alatt. Hasznos játékos házi feladatokat is kaptunk. Köszönjük a lelkiismeretes és jó hangulatú órát 😊",
    name: "Édesapa, 8 hónapos baba",
  },
  {
    text: "Nemcsak a problémát mondta el, hanem azt is, mit tehetünk otthon. Ez volt a legnagyobb segítség.",
    name: "Édesanya, 1 éves kisgyermek",
  },
  {
    text: "Koraszülött babánkkal mentünk, nagyon figyelmes és szakmailag is meggyőző volt.",
    name: "Édesanya, 4 hónapos",
  },
  {
    text: "Palival nagyon jó tapasztalatunk volt. El tudta érni, hogy Pongi együttműködjön és mindig várja az alkalmakat, hogy újra mehessen Hozzá. - Egyébként még most is szokott Róla beszélni. Mindig megjegyzik, hogy amit épp mutat, azt Tőle tanulta, hallotta...",
    name: "Édesanya, 6 éves fiú",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const testimonial = testimonials[index];

  return (
    <section
      id="velemenyek"
      className="py-20 bg-amber-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">

          {/* CÍM */}
          <div className="mb-10">
            <div className="inline-flex items-center justify-center gap-2 text-amber-700 font-medium mb-3">
              <MessageCircle size={20} />
              <span>Valódi szülői tapasztalatok</span>
            </div>

            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Szülők mondták
            </h2>

            <p className="text-gray-600 leading-relaxed">
              A közös munka során fontos a bizalom, az érthető magyarázat
              és a család mindennapjaiban is használható segítség.
            </p>
          </div>

          {/* VÉLEMÉNY */}
          <div
            className="bg-white rounded-2xl p-6 md:p-10 shadow-md border border-amber-100 min-h-[240px] flex flex-col justify-center"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="text-amber-700 text-4xl leading-none mb-4" aria-hidden="true">
              “
            </div>

            <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
              {testimonial.text}
            </p>

            <p className="text-sm font-semibold text-gray-600">
              – {testimonial.name}
            </p>
          </div>

          {/* NAVIGÁCIÓ */}
          <div className="flex items-center justify-center gap-5 mt-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Előző szülői vélemény"
              className="w-11 h-11 flex items-center justify-center bg-white border border-amber-200 rounded-full hover:bg-amber-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              <ArrowLeft size={20} />
            </button>

            <span className="text-sm text-gray-600 min-w-[70px]">
              {index + 1} / {testimonials.length}
            </span>

            <button
              type="button"
              onClick={next}
              aria-label="Következő szülői vélemény"
              className="w-11 h-11 flex items-center justify-center bg-white border border-amber-200 rounded-full hover:bg-amber-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* KAPCSOLATFELVÉTEL */}
          <div className="mt-10">
            <p className="text-gray-700 mb-4">
              Kérdése van gyermeke mozgásfejlődésével kapcsolatban?
            </p>

            <button
              type="button"
              onClick={() => scrollToSection("jelentkezes")}
              className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition-all shadow-md hover:shadow-lg"
            >
              Kapcsolatfelvétel
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

