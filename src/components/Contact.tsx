import { useState } from "react";

export default function Registration() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

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
    <section id="kapcsolat" className="...">
    <section id="jelentkezes" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Jelentkezés gyermek gyógytornára
          </h2>

          <div className="bg-white rounded-2xl shadow-md p-6">

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
                className="w-full p-3 rounded-xl border"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 rounded-xl border"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Telefonszám"
                className="w-full p-3 rounded-xl border"
              />

              <textarea
                name="message"
                placeholder="Miben tudok segíteni?"
                rows={4}
                className="w-full p-3 rounded-xl border"
              />

              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-xl font-semibold"
              >
                Jelentkezem
              </button>

              {status && (
                <p className="text-red-500 text-center">{status}</p>
              )}

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
