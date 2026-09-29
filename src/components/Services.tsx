import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-6-6l6 6 6-6" />
      </svg>
    ),
    title: 'Achat',
    description: 'Trouvez la propriété de vos rêves. Nous vous accompagnons dans chaque étape de l\'acquisition, du premier visite à la signature chez le notaire.',
    color: 'from-amber-400 to-amber-500',
    bgColor: 'bg-amber-50 border-amber-200',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Vente',
    description: 'Maximizez la valeur de votre patrimoine. Notre expertise de négociation et notre réseau de buyers garantissent les meilleures conditions de vente.',
    color: 'from-amber-400 to-amber-500',
    bgColor: 'bg-amber-50 border-amber-200',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M12 18.75h.008v.008H12V18.75zm0 0v-.008" />
      </svg>
    ),
    title: 'Location',
    description: 'Trouvez votre logement idéal ou listez votre bien. Nous garantissons une location de qualité avec des taux d\'occupation optimaux.',
    color: 'from-amber-400 to-amber-500',
    bgColor: 'bg-amber-50 border-amber-200',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5 0.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5 0.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5 0.75.75 0 010 1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75h-9m0 0l-2.25 3.375 2.25 3.375" />
      </svg>
    ),
    title: 'Gestion Immobilière',
    description: 'Confiez-nous la gestion complète de vos biens : encaissement de loyers, entretien, organisation des visites et reporting régulier.',
    color: 'from-amber-400 to-amber-500',
    bgColor: 'bg-amber-50 border-amber-200',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.67.408-.958.275-.355.65-.57 1.049-.786.409-.216.854-.322 1.316-.367.446-.045.909.048 1.232.223.306.167.568.42.761.743.199.337.294.71.245 1.06-.05.355-.186.662-.408.904-.275.275-.65.43-1.05.537-.4.108-.854.162-1.316.162H8.25V19.5h12V6.75h-4.667c.462 0 .917.054 1.316.162.4.107.775.262 1.05.537.222.242.358.549.408.904.052.35-.044.722-.243 1.06-.194.324-.456.577-.761.743-.323.175-.785.268-1.232.224-.463-.045-.909-.15-.1.222-.403.216-.854.322-1.316.367-.399.216-.585.43-.76.743-.195.333-.29.706-.242 1.059.05.352.186.657.408.878.275.254.65.422 1.05.529.4.107.854.16.1.16h-3.75v4.5h3.75c.46.002.914-.051 1.316-.162.4-.107.775-.262 1.05-.537.222-.242.358-.549.408-.904.052-.35-.044-.722-.243-1.059-.194-.324-.456-.577-.76-.743-.323-.175-.785-.268-1.232-.224-.466.045-.912.15-.1.222-.4.216-.854.322-1.316.367-.399.216-.585.43-.76.743-.195.333-.29.706-.242 1.06.05.352.186.662.408.878.275.254.649.422 1.05.529.399.104.854.157 1.316.162H16.5V6.087z" />
      </svg>
    ),
    title: 'Construction',
    description: 'Faites réaliser votre projet de construction sur mesure. Plans, devis, suivi de chantier — nous vous accompagnons du concept à la clé en main.',
    color: 'from-amber-400 to-amber-500',
    bgColor: 'bg-amber-50 border-amber-200',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3.75-18.75H18a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0018 4.5h-3.75m-3.75 2.25v9.75m3.75-9.75h-15a2.25 2.25 0 00-2.25 2.25v11.25A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-.208-1.622l-3.411-7.984a2.25 2.25 0 00-1.88-1.244H7.5v-2.25" />
      </svg>
    ),
    title: 'Plans & Devis',
    description: 'Établissement de plans d\'architecte et devis détaillés pour vos projets de construction et de rénovation. Transparence et précision garanties.',
    color: 'from-amber-400 to-amber-500',
    bgColor: 'bg-amber-50 border-amber-200',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-white">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0f172a" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-xs font-semibold uppercase tracking-[0.12em] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Nos prestations
          </div>
          <h2 className="section-title mb-4">
            Des services{' '}
            <span className="gold-text">complets</span>
            {' '}pour votre patrimoine
          </h2>
          <p className="section-subtitle mx-auto">
            De l\'achat à la gestion, de la construction au conseil — SCONVERGE IMMOBILIER vous accompagne
            avec expertise et transparence à chaque étape de votre projet immobilier.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border bg-white p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/20 hover:-translate-y-1"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
            >
              {/* Gold accent top bar */}
              <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-[#0f172a] shadow-sm mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] font-serif mb-3">
                {service.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-5 flex items-center gap-1 text-amber-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>En savoir plus</span>
                <svg className="w-3.5 h-3.5 animate-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
