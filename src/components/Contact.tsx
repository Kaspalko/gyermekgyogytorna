import React, { useState } from "react";

export default function Registration() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await fetch("https://formspree.io/f/mlgaznyv", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      window.location.href = "/koszonjuk";
    } else {
      setStatus("Hiba történt, próbáld újra.");
    }
  };

  return (
    <section id="kapcsolat" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Jelentkezés gyermek gyógytornára
          </h2>

          <div className="bg-white rounded-2xl shadow-md p-6">

           import { useState } from "react";

export default function GyermekGyogytornaBudapest() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await fetch("https://formspree.io/f/mlgaznyv", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {

      // ✅ GOOGLE ANALYTICS EVENT
      window.gtag?.("event", "form_submit", {
        event_category: "engagement",
        event_label: "gyogytorna_budapest",
      });

      // ✅ ÁTIRÁNYÍTÁS
      window.location.href = "/koszonjuk";

    } else {
      setStatus("Hiba történt, próbáld újra.");
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-12 space-y-12">

        {/* ... HERO marad */}

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

          {/* ✅ ÚJ FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

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

            {status && (
              <p className="text-red-400 text-center">{status}</p>
            )}

          </form>
          </div>
        </div>
      </div>
    </section>
  );
}
