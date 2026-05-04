import React, { useState } from "react";

export default function Contact() {
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
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">

      <input type="hidden" name="_subject" value="Új jelentkezés a weboldalról" />

      <input
        type="text"
        name="name"
        placeholder="Név"
        required
        className="w-full p-3 rounded-xl border bg-gray-800 text-white border-gray-600"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-3 rounded-xl border bg-gray-800 text-white border-gray-600"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Telefonszám"
        className="w-full p-3 rounded-xl border bg-gray-800 text-white border-gray-600"
      />

      <textarea
        name="message"
        placeholder="Miben tudok segíteni?"
        rows={4}
        className="w-full p-3 rounded-xl border bg-gray-800 text-white border-gray-600"
      />

      <p className="text-gray-400 text-sm text-center">
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
  );
}
