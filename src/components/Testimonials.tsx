import { useState } from "react";

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
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Szülők mondták
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-amber-100 min-h-[180px] flex flex-col justify-center">

            <p className="text-gray-700 text-lg italic mb-4">
              „{testimonials[index].text}”
            </p>

            <p className="text-sm text-gray-500">
              – {testimonials[index].name}
            </p>

          </div>

          {/* NAV */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100"
            >
              ←
            </button>

            <button
              onClick={next}
              className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
