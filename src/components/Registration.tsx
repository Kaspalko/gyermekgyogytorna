export default function Registration() {
  return (
    <section id="jelentkezes" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            Jelentkezés gyermek gyógytornára
          </h2>

          <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6">

            <form
              action="https://formspree.io/f/mlgaznyv"
              method="POST"
              className="space-y-4"
            >
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
                className="w-full bg-amber-600 text-white py-3 rounded-xl font-semibold hover:bg-amber-700 transition"
              >
                Jelentkezem
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
