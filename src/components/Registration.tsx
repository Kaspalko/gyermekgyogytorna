export default function Registration() {
  return (
    <<section id="jelentkezes" className="py-20 bg-amber-50">>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            Jelentkezés gyermek gyógytornára
          </h2>

          <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-4">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScb1msYR5ATpmfXJ-A16C_bQspjxoqHaMYHYIkVnNGtHfBM4g/viewform?embedded=true"
              width="100%"
              height="1200"
              className="rounded-xl"
              loading="lazy"
            >
              Betöltés…
            </iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
