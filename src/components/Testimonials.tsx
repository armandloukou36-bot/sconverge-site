const testimonials = [
  {
    name: 'Jean-Marie B.',
    role: 'Acquéreur',
    text: 'SCONVEGE a facilité notre premier achat immobilier à Abidjan. Professionnels, transparents et toujours à l\'écoute. Nous recommandons vivement.',
    rating: 5,
    avatar: 'JB',
    color: 'from-amber-400 to-amber-600',
  },
  {
    name: 'Cécile D.',
    role: 'Location',
    text: 'J\'ai loué mon appartement via SCONVEGE. Le processus était rapide et le bien correspondait parfaitement à mes critères. Service irréprochable.',
    rating: 5,
    avatar: 'CD',
    color: 'from-amber-300 to-amber-500',
  },
  {
    name: 'Samuel K.',
    role: 'Investisseur',
    text: 'La gestion de mes biens par SCONVEGE est exemplaire. Loyers encaissés régulièrement, communication transparente, zéro souci pour moi.',
    rating: 5,
    avatar: 'SK',
    color: 'from-amber-500 to-amber-700',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-xs font-semibold uppercase tracking-[0.12em] mb-5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Témoignages
          </div>
          <h2 className="section-title mb-4">
            Ce que disent nos{' '}
            <span className="gold-text">clients</span>
          </h2>
          <p className="section-subtitle mx-auto">
            La confiance de nos clientes et clients est notre plus grande fierté.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="group relative rounded-2xl p-6 md:p-8 bg-soft-gray border border-gray-100 hover:border-amber-200/80 hover:shadow-xl hover:shadow-amber-100/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gold top accent */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-amber-300 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Quote icon */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12a1 1 0 100-2 1 1 0 000 2zm-3 2a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.545.45-1.41.133-1.54-.59l-1.07-3.292a1 1 0 00-.95-.69l-2.8-2.034c-.784-.61-1.084-1.902-.588-2.624l1.07-3.292a1 1 0 00.95-.69L1.54 6.174a1 1 0 01.588-2.624l2.8-2.034a1 1 0 001.175 0l2.8 2.034a1 1 0 00.95.69h3.462a1 1 0 00.588-1.81L9.049 2.927z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-[#475569] leading-relaxed text-sm md:text-base mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/80">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-[#0f172a] font-bold text-sm shadow-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0f172a]">{t.name}</div>
                  <div className="text-xs text-[#64748b]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
