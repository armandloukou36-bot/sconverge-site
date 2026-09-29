'use client';

import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a2.25 2.25 0 00-1.061-1.916l-4.677-8.224A2.25 2.25 0 0010.397 4.644L12.25 3m5.5 1.75h-3.5m-3.5 1.75a1.125 1.125 0 102.25 0 1.125 1.125 0 00-2.25 0zM5.75 12h12.5a1.25 1.25 0 011.25 1.25v4.5a1.25 1.25 0 01-1.25 1.25H5.75a1.25 1.25 0 01-1.25-1.25v-4.5a1.25 1.25 0 011.25-1.25z" />
      </svg>
    ),
    label: 'Téléphone',
    value: '+225 27 225 809 36',
    href: 'tel:+2252722580936',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-3-3v-3m-7.5-9L2.25 3m5.25 13.5L9.75 12l3 3.75-1.5 1.5-3-3.75L9.75 9.75z" />
      </svg>
    ),
    label: 'Adresse',
    value: 'Cocody Angré, Abidjan',
    href: '#',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.25a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'contact@sconverge-immobilier.ci',
    href: 'mailto:contact@sconverge-immobilier.ci',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Horaires',
    value: 'Lun – Sam : 8h – 18h',
    href: '#',
  },
];

const formFields = [
  { name: 'name', label: 'Nom complet', type: 'text', placeholder: 'Votre nom', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.com', required: true },
  { name: 'phone', label: 'Téléphone', type: 'tel', placeholder: '+225 xx xx xx xx xx', required: false },
  { name: 'subject', label: 'Sujet', type: 'text', placeholder: 'Sujet de votre demande', required: true },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Décrivez votre projet ou votre demande...',
    required: true,
    rows: 5,
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (data: Record<string, string>) => {
    setFormState('submitting');
    // Simulate send — in production, wire to a real endpoint
    await new Promise((r) => setTimeout(r, 800));
    setFormState('success');
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 navy-gradient-bg overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="contact-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="1" fill="#fbbf24" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-dots)" />
        </svg>
      </div>

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full skew-x-[18deg] bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-amber-200 text-xs font-semibold uppercase tracking-[0.12em] mb-5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Contact
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Parlons de votre{' '}
                <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
                  projet
                </span>
              </h2>
              <p className="text-blue-200/60 text-sm md:text-base leading-relaxed font-light max-w-md">
                Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner
                dans votre projet immobilier.
              </p>
            </div>

            {/* Contact info list */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group p-3 -mx-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-400/15 border border-amber-400/20 flex items-center justify-center text-amber-300 group-hover:bg-amber-400/25 transition-colors">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-amber-400/60 text-xs font-medium uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-white text-sm font-medium group-hover:text-amber-200 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {['Notaire partenaire', 'Architectes agréés', 'Banques partenaires'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200/70 text-xs"
                >
                  <svg className="w-3 h-3 text-amber-400/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.13M15 6.75V4.5a1.5 1.5 0 00-1.5-1.5h-11A1.5 1.5 0 001 4.5v6.75A1.5 1.5 0 002.5 12h1.172a3.066 3.066 0 012.812 2.13 3.066 3.066 0 001.745.723 3.066 3.066 0 015.357 0 3.066 3.066 0 012.812-2.13H17.5A1.5 1.5 0 0019 12v-3.75z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl shadow-black/10">
              {formState === 'success' ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-blue-200/60 text-sm">
                    Merci pour votre message. L'équipe SCONVEGE vous contactera sous 24h.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-5">
                  {formFields.map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-amber-200/80 mb-1.5"
                      >
                        {field.label}
                        {field.required && <span className="text-amber-400 ml-0.5">*</span>}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          rows={field.rows}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/30
                            focus:outline-none focus:border-amber-400/40 focus:ring-2 focus:ring-amber-400/10
                            transition-all duration-200 text-sm resize-none backdrop-blur-sm"
                        />
                      ) : (
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/30
                            focus:outline-none focus:border-amber-400/40 focus:ring-2 focus:ring-amber-400/10
                            transition-all duration-200 text-sm"
                        />
                      )}
                    </div>
                  ))}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-[#0f172a]
                      shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35
                      transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      'Envoyer le message'
                    )}
                  </button>
                  <p className="text-center text-blue-200/40 text-xs">
                    Vos données sont protégées et utilisées uniquement pour répondre à votre demande.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
