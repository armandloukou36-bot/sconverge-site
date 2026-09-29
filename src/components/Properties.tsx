'use client';

import Image from 'next/image';

const properties = [
  {
    id: 'prop-1',
    category: 'Villa',
    price: '45 000 000 FCFA',
    location: 'Cocody, Angré',
    beds: 4,
    baths: 2,
    surface: '280 m²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    featured: true,
    available: 'Disponible',
    availableColor: 'bg-green-500',
  },
  {
    id: 'prop-2',
    category: 'Appartement',
    price: '18 500 000 FCFA',
    location: 'Cocody, Résidence Les Palmiers',
    beds: 3,
    baths: 2,
    surface: '145 m²',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    featured: false,
    available: 'En négociation',
    availableColor: 'bg-amber-500',
  },
  {
    id: 'prop-3',
    category: 'Terrain',
    price: '12 000 000 FCFA',
    location: "Cocody, Angré, Cl'st Roch",
    beds: '-',
    baths: '-',
    surface: '550 m²',
    image: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=600&q=80',
    featured: false,
    available: 'Disponible',
    availableColor: 'bg-green-500',
  },
  {
    id: 'prop-4',
    category: 'Appartement',
    price: '22 000 000 FCFA',
    location: 'Cocody, Résidence du Lac',
    beds: 3,
    baths: 1,
    surface: '98 m²',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    featured: false,
    available: 'Consultation',
    availableColor: 'bg-blue-500',
  },
  {
    id: 'prop-5',
    category: 'Villa',
    price: '68 000 000 FCFA',
    location: 'Cocody, Villa Sylvie',
    beds: 5,
    baths: 3,
    surface: '420 m²',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3c1?w=600&q=80',
    featured: true,
    available: 'Disponible',
    availableColor: 'bg-green-500',
  },
  {
    id: 'prop-6',
    category: 'Local commercial',
    price: '9 500 000 FCFA',
    location: 'Cocody Centre',
    beds: '-',
    baths: '-',
    surface: '120 m²',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    featured: false,
    available: 'Bientôt disponible',
    availableColor: 'bg-amber-400',
  },
];

export default function PropertiesSection() {
  const handlePropertyClick = () => {
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section id="biens" className="relative py-20 md:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-xs font-semibold uppercase tracking-[0.12em] mb-5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4.332 1.556a1.5 1.5 0 00-1.021.713L1.407 5.834a1.5 1.5 0 00.93 1.684l1.452-.347c.038.005.076.008.115.008a1.5 1.5 0 00.986-1.017l.347-1.452a1.5 1.5 0 00-.713-1.021L1.556 4.332a1.5 1.5 0 00-1.017-.986L.347 2.507a1.5 1.5 0 00-1.684.93l.347 1.452a1.5 1.5 0 000 .156m13.843 0a1.5 1.5 0 00-1.684-.93L5.834 10.77a2.5 2.5 0 01.516-1.76l.85-.363a1.5 1.5 0 00-.986-1.017L4.332 5.166a1.5 1.5 0 00-1.017.986l-.85.363A2.5 2.5 0 011.834 7.25l.347 1.452a1.5 1.5 0 00.713 1.021l1.452-.347c.038.005.076.008.115.008a1.5 1.5 0 00.986-1.017z" />
            </svg>
            Nos biens
          </div>
          <h2 className="section-title mb-4">
            Une sélection de biens{' '}
            <span className="gold-text">d'exception</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Découvrez nos propriétés disponibles à Cocody et dans les quartiers de standing d'Abidjan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, i) => (
            <div
              key={property.id}
              className={`group relative rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                property.featured ? 'ring-2 ring-amber-400/40 ring-offset-2 ring-offset-white' : ''
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image}
                  alt={`${property.category} à ${property.location}`}
                  fill
                  className={`object-cover transition-all duration-700 group-hover:scale-[1.05] ${
                    property.featured ? 'brightness-90' : ''
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Available badge */}
                <div
                  className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-white shadow-md ${property.availableColor}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  {property.available}
                </div>
                {/* Featured badge */}
                {property.featured && (
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/90 text-[#0f172a] text-[11px] font-bold tracking-wider shadow-md">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.545.45-1.41.133-1.54-.59l-1.07-3.292a1 1 0 00-.95-.69l-2.8-2.034c-.784-.61-1.084-1.902-.588-2.624l1.07-3.292a1 1 0 00.95-.69L1.54 6.174a1 1 0 01.588-2.624l2.8-2.034a1 1 0 001.175 0l2.8 2.034a1 1 0 00.95.69h3.462a1 1 0 00.588-1.81L9.049 2.927z" />
                    </svg>
                    Vedette
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-4 md:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                    {property.category}
                  </span>
                  <span className="text-xs text-[#64748b]">{property.surface}</span>
                </div>

                <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-amber-700 transition-colors">
                  {property.location}
                </h3>

                <div className="flex items-center gap-4 text-sm text-[#64748b] py-2 border-y border-gray-100">
                  {property.beds !== '-' && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5h18M3 14.5h18M3 18.5h18M4.5 6h15A1.5 1.5 0 0121 7.5v11a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 19V7.5A1.5 1.5 0 014.5 6z" />
                      </svg>
                      {property.beds} ch.
                    </span>
                  )}
                  {property.beds !== '-' && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {property.baths} salle(s)
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-lg md:text-xl font-bold text-[#0f172a] font-serif">
                    {property.price} <span className="text-sm font-normal text-[#64748b]">FCFA</span>
                  </span>
                  <button
                    className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors cursor-pointer"
                    onClick={handlePropertyClick}
                  >
                    Détails
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border-2 border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white transition-all duration-300 group"
          >
            Parcourir toutes nos propriétés
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
