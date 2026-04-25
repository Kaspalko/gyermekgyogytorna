<form
  action="https://formspree.io/f/mlgaznyv"
  method="POST"
  className="space-y-4"
>
  <input
    type="hidden"
    name="_next"
    value="https://www.gyermekgyt-bp.hu/koszonjuk"
  />

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
    className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400"
  />

  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400"
  />

  <input
    type="tel"
    name="phone"
    placeholder="Telefonszám"
    className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400"
  />

  <textarea
    name="message"
    placeholder="Miben tudok segíteni?"
    rows={4}
    className="w-full p-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400"
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
</form>
