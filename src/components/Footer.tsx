const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-12 pb-8">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 relative">
                <img
                  src="/logo.png"
                  alt="SCONVERGE IMMOBILIER"
                  className="w-full h-full object-contain"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <span className="font-serif text-base font-bold text-white tracking-tight">SCONVERGE</span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-500 ml-1">IMMOBILIER</span>
              </div>
            </div>
            <p className="text-blue-200/50 text-sm leading-relaxed max-w-xs">
              Votre avenir immobilier sûr et réussi. Expertise, confiance et excellence au service de votre patrimoine.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { label: 'Facebook', icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                )},
                { label: 'Instagram', icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2.222a8.507 8.507 0 00-9.48 4.142 8.275 8.275 0 011.17 4.379 7.562 7.562 0 004.386-1.267 8.45 8.45 0 003.966 1.78 8.857 8.857 0 01-2.222 6.677 8.252 8.252 0 003.92 1.073c-.355.06-.715.094-1.076.094-2.257 0-4.312-1.218-5.02-2.993a1.53 1.53 0 01-.508-1.11 11.04 11.04 0 00.516-4.41 1.996 1.996 0 012.026-1.53 1.53 1.53 0 01.472.074c.38.094.76.148 1.176.148a3.543 3.543 0 010 7.086 3.543 3.543 0 01-.526-.094 1.53 1.53 0 01-2.026-1.53A8.504 8.504 0 0010 2.222zm0 2.328A6.182 6.182 0 0010 4.142a6.24 6.24 0 014.156 2.07 6.24 6.24 0 01-4.156 2.07zM10 10.35a.85.85 0 100-1.7 1.68 1.68 0 001.925-.87A7.873 7.873 0 0010 10.35z" clipRule="evenodd" /></svg>
                )},
                { label: 'LinkedIn', icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.5 3A1.5 1.5 0 016 1.5v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5V1.5A1.5 1.5 0 014.5 0h1.25a1.5 1.5 0 011.5 1.5v8.25a1.5 1.5 0 001.5 1.5h.25a1.5 1.5 0 011.5 1.5H12a1.5 1.5 0 011.5-1.5v-8.25A1.5 1.5 0 0115.5 0h1.25A1.5 1.5 0 0118 1.5v8.25a1.5 1.5 0 01-1.5 1.5h-.25A1.5 1.5 0 0115 17.25v-.75A1.5 1.5 0 0115 15V8.25a1.5 1.5 0 00-1.5-1.5h-.25A1.5 1.5 0 0112 6.75V5.5A1.5 1.5 0 0113.5 4h.25A1.5 1.5 0 0115 5.5v1.25A1.5 1.5 0 0115 8.25v8.25a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5v-.25A1.5 1.5 0 0112 15v.75A1.5 1.5 0 0112 17.25V17.25a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18.75V8.25A1.5 1.5 0 014.5 3z" clipRule="evenodd" /></svg>
                )},
              ].map((s) => (
                <a key={s.label} href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-200/60 hover:bg-amber-400/15 hover:border-amber-400/20 hover:text-amber-300 transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-4">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Services', href: '#services' },
                { label: 'À propos', href: '#apropos' },
                { label: 'Biens', href: '#biens' },
                { label: 'Témoignages', href: '#temoignages' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-blue-200/50 hover:text-amber-300 text-sm transition-colors duration-200 group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-blue-200/50">
              {[
                'Achat de biens',
                'Vente de biens',
                'Location',
                'Gestion immobilière',
                'Construction',
                'Plans et devis',
              ].map((s) => (
                <li key={s} className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
                  <a href="#services" className="hover:text-amber-300 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-500/70 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a2.25 2.25 0 00-1.061-1.916l-4.677-8.224A2.25 2.25 0 0010.397 4.644L12.25 3m5.5 1.75h-3.5m-3.5 1.75a1.125 1.125 0 102.25 0 1.125 1.125 0 00-2.25 0z" />
                </svg>
                <a href="tel:+2252722580936" className="text-blue-200/70 hover:text-amber-300 transition-colors">
                  +225 27 225 809 36
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-500/70 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.25a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:contact@sconverge-immobilier.ci" className="text-blue-200/70 hover:text-amber-300 transition-colors">
                  contact@sconverge-immobilier.ci
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-500/70 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Cocody Angré, Abidjan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/40 text-xs text-center sm:text-left">
            &copy; {currentYear} SCONVERGE IMMOBILIER. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-blue-200/40 text-xs">
            <a href="#" className="hover:text-amber-400/60 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-amber-400/60 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-amber-400/60 transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
