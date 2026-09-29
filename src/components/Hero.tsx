import Image from 'next/image';

const stats = [
  { value: '+200', label: 'Clients satisfaits' },
  { value: '15+', label: 'Ans d\'expérience' },
  { value: '300+', label: 'Biens transactionnés' },
  { value: '100%', label: 'Fiabilité & transparence' },
];

const features = [
  {
    title: 'Équipe d\'experts',
    description: 'Professionnels certifiés avec une connaissance approfondie du marché immobilier abidjanais.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.105a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.678 0-5.216-.5-7.499-1.437m.979 1.953a7.5 7.5 0 0014.998 0 17.933 17.933 0 007.499-1.437m-.979-1.953a7.5 7.5 0 01-14.998 0 17.933 17.933 0 01-7.499-1.437" />
      </svg>
    ),
  },
  {
    title: 'Approche personnalisée',
    description: 'Chaque projet est unique. Nous adaptons notre stratégie à vos objectifs, budget et délais.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.007 9.007 0 009.926-6.75M12 21a9.007 9.007 0 01-9.926-6.75M12 21c0 0-3.926-7.5-9.926-7.5M12 21a9.007 9.007 0 00-9.926 6.75M12 21a9.007 9.007 0 019.926 6.75m0 0c3.926 0 9.926-7.5 9.926-7.5" />
      </svg>
    ),
  },
  {
    title: 'Réseau étendu',
    description: 'Un large réseau d\'interlocuteurs : notaires, architectes, promoteurs, banques, clients.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.007 9.007 0 009.926-6.75M12 21a9.007 9.007 0 01-9.926-6.75M12 21c0 0-3.926-7.5-9.926-7.5M12 21a9.007 9.007 0 00-9.926 6.75M12 21a9.007 9.007 0 019.926 6.75m0 0c3.926 0 9.926-7.5 9.926-7.5" />
      </svg>
    ),
  },
  {
    title: 'Transparence totale',
    description: 'Honoraires clairs, informations vérifiées, suivi en temps réel. Zéro surprise, zéro compromis.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.959 11.959 0 003.598 6M12 21a9.007 9.007 0 008.402-5.045" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <>
      {/* Navbar spacer */}
      <div className="h-16 md:h-20" />

      {/* Hero */}
      <section className="relative min-h-[90vh] md:min-h-[88vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 navy-gradient-bg">
          {/* Geometric accents */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="geo" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1.5" fill="#fbbf24" opacity="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#geo)" />
            </svg>
          </div>
          {/* Diagonal gold accent */}
          <div className="absolute bottom-0 right-0 w-[50%] h-[30%] skew-x-[-15deg] bg-gradient-to-b from-amber-500/0 via-amber-400/5 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8 animate-fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-amber-200 text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Agence immobilière premium
              </div>

              {/* Brand line */}
              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                  Votre avenir
                  <br />
                  <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                    immobilier
                  </span>
                  ,{' '}
                  notre{' '}
                  <span className="relative">
                    priorité
                    <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-300/40 to-amber-500/40 rounded-full" />
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-blue-200/80 max-w-xl leading-relaxed font-light">
                  Avec SCONVERGE IMMOBILIER, votre avenir immobilier sûr et réussi.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-[#0f172a] shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Nous contacter
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Découvrir nos services
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white font-serif">
                      {stat.value}
                    </div>
                    <div className="text-xs text-blue-200/60 font-medium uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right decorative element */}
            <div className="hidden lg:flex items-center justify-center animate-fade-in">
              <div className="relative w-full max-w-md aspect-square">
                {/* Main decorative card */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-white/[0.08] to-white/3 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 flex items-center justify-center">
                  {/* Inner content */}
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-xl shadow-amber-500/20 animate-float">
                      <svg className="w-10 h-10 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 15.75l-7.25-7.25a2.125 2.125 0 012.12-3.12l3.12 3.12 3.12-3.12a2.125 2.125 0 013.12 2.12l-3.12 3.12-3.12-3.12a2.125 2.125 0 01-3.12 2.12l7.25 7.25a2.125 2.125 0 010 3.12l-7.25 7.25a2.125 2.125 0 01-2.12-3.12l3.12-3.12-3.12-3.12a2.125 2.125 0 012.12-3.12l3.12 3.12z" />
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm font-light italic">
                      « Chaque projet deserves{' '}
                      <span className="text-amber-300 font-medium">l'exception</span> »
                    </p>
                    <div className="mt-6 flex justify-center gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Ornamental corners */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-400/30" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-400/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Features bar */}
      <section className="relative bg-[#0f172a] py-14 md:py-18 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <pattern id="bars" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect width="30" height="60" fill="#fbbf24" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bars)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
            {features.map((feature, i) => (
              <div key={feature.title} className="flex items-start gap-4 group">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/30 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm md:text-base">{feature.title}</h3>
                  <p className="text-blue-200/50 text-xs md:text-sm mt-1 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
