import Image from 'next/image';

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Intégrité',
    description: 'Nous agissons toujours dans l\'intérêt de nos clients. Honnêteté, transparence et éthique sont nos piliers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Réactivité',
    description: 'Chaque demande est traitée rapidement. Nous sommes disponibles et réactifs pour accompagner vos décisions.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Confidentialité',
    description: 'Vos informations et vos transactions sont traitées avec la plus stricte confidentialité.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.105a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.678 0-5.216-.5-7.499-1.437m.979 1.953a7.5 7.5 0 0014.998 0 17.933 17.933 0 007.499-1.437m-.979-1.953a7.5 7.5 0 01-14.998 0 17.933 17.933 0 01-7.499-1.437" />
      </svg>
    ),
    title: 'Expertise locale',
    description: 'Une connaissance approfondie du marché de Cocody et des quartiers de standing à Abidjan.',
  },
];

const team = [
  {
    initials: 'AK',
    role: 'Fondateur & Directeur',
    name: 'Armand Kouassi',
  },
  {
    initials: 'MK',
    role: 'Chargé d\'affaires',
    name: 'Marie Konan',
  },
  {
    initials: 'ET',
    role: 'Consultante immobilier',
    name: 'Estelle Traoré',
  },
];

export default function AboutSection() {
  return (
    <section id="apropos" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="space-y-8 animate-fade-up">
            {/* Section header */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-xs font-semibold uppercase tracking-[0.12em] mb-5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6z" clipRule="evenodd" />
                </svg>
                Qui sommes-nous
              </div>
              <h2 className="section-title mb-4">
                L'immobilier avec{' '}
                <span className="gold-text">l'excellence</span>
                {' '}de SCONVERGE
              </h2>
            </div>

            <div className="space-y-4 text-[#475569] leading-relaxed">
              <p>
                SCONVERGE IMMOBILIER est une agence immobilière de standing basée à Cocody Angré, Abidjan.
                Depuis notre création, nous mettons notre expertise au service de ceux qui souhaitent acheter,
                vendre, louer ou investir dans le patrimoine immobilier.
              </p>
              <p>
                Notre approche repose sur une connaissance approfondie du marché local, une éthique de travail
                irréprochable et une attention particulière à la satisfaction de chaque client. Chaque projet est
                traité avec le soin et l'engagement qu'il mérite.
              </p>
            </div>

            {/* Core values */}
            <div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-5">Nos valeurs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="flex gap-3 p-3.5 rounded-xl bg-soft-gray group hover:bg-amber-50/50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 group-hover:bg-amber-200 transition-colors">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#0f172a]">{value.title}</h4>
                      <p className="text-xs text-[#64748b] mt-0.5 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual + Team */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Decorative medal */}
            <div className="relative mx-auto max-w-sm">
              <div className="relative rounded-2xl bg-gradient-to-b from-amber-50 to-amber-100/50 p-6 md:p-8 border border-amber-200/50 shadow-lg">
                {/* Gold badge */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/20 mb-4">
                    <svg className="w-8 h-8 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                  <p className="text-amber-900/70 text-sm font-light italic">
                    « Votre projet, notre priorité »
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[200, 15, 300].map((n, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold text-[#0f172a] font-serif">+{n}</div>
                      <div className="text-[10px] text-amber-700/70 font-medium uppercase tracking-wider">
                        {['Clients', 'Ans exp.', 'Biens'][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-amber-400/20 rounded-tr-2xl" />
            </div>

            {/* Team */}
            <div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-5">Notre équipe</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-soft-gray hover:bg-amber-50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[#0f172a] font-bold text-sm shadow-md">
                      {member.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0f172a] group-hover:text-amber-700 transition-colors">
                        {member.name}
                      </div>
                      <div className="text-xs text-[#64748b]">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
