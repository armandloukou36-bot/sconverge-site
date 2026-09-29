'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    category: 'Villa',
    title: 'Villa de standing à Cocody',
    description: '4 chambres, 2 salles de bain, piscine, jardin. 280 m² de pur confort.',
    price: '45 000 000 FCFA',
    location: 'Cocody, Angré',
    color: 'from-amber-400 to-amber-600',
    badge: 'Nouveau',
    badgeColor: 'bg-green-500',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    category: 'Appartement',
    title: 'Appartement cosy — Résidence Les Palmiers',
    description: '3 chambres, vue panoramique, sécurité 24h/24. Dans l\'enceinte de Cocody.',
    price: '18 500 000 FCFA',
    location: 'Cocody, Les Palmiers',
    color: 'from-amber-300 to-amber-500',
    badge: 'En négociation',
    badgeColor: 'bg-amber-500',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80',
    category: 'Terrain',
    title: 'Terrain à vendre — Cl\'est Roch, Angré',
    description: '550 m², terrain viabilisé, plein sud. Parfait pour construction ou investissement.',
    price: '12 000 000 FCFA',
    location: 'Cocody, Angré',
    color: 'from-amber-500 to-amber-700',
    badge: 'Disponible',
    badgeColor: 'bg-green-500',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3c1?w=800&q=80',
    category: 'Villa',
    title: 'Grand domaine — Villa Sylvie',
    description: '5 chambres, 3 salles de bain, salon spacieux, terrain paysager. Exceptionnel.',
    price: '68 000 000 FCFA',
    location: 'Cocody, Villa Sylvie',
    color: 'from-amber-400 to-amber-600',
    badge: 'Disponible',
    badgeColor: 'bg-green-500',
  },
];

const COLORS = [
  'bg-gradient-to-r from-amber-400 to-amber-600',
  'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500',
  'bg-gradient-to-r from-amber-500 to-amber-700',
  'bg-gradient-to-r from-amber-400 to-amber-600',
];

export default function PropertySlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = slides.length;

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(prev => (prev === 0 ? 1 : 0));
      setCurrent(prev => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = useCallback((index: number, dir: number = 0) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % totalSlides);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + totalSlides) % totalSlides);
  }, []);

  // Touch / drag support
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    if (delta > 50) {
      next();
      setIsDragging(false);
      setStartX(e.clientX);
      setIsPaused(false);
    } else if (delta < -50) {
      prev();
      setIsDragging(false);
      setStartX(e.clientX);
      setIsPaused(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <section className="relative w-full bg-navy-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-mid/90 to-navy-950" />
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="dots-slider" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="8" cy="8" r="1" fill="#fbbf24" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-slider)" />
        </svg>
      </div>

      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      {/* Slider container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header du slider */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Galerie en continu
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-serif tracking-tight">
            Découvrez nos <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">biens d&apos;exception</span>
          </h2>
          <p className="text-blue-200/50 text-sm mt-2 max-w-md mx-auto">
            Une sélection continue de propriétés uniques — défilez pour explorer
          </p>
        </div>

        {/* Boutons contrôle + compteurs */}
        <div className="flex items-center justify-between mb-8">
          {/* Indicateurs (dots) */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-amber-400 w-6'
                    : 'bg-blue-300/40 hover:bg-blue-300/60'
                }`}
                aria-label={`Aller au slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-amber-300 hover:bg-amber-400/20 hover:border-amber-500/30 transition-all duration-200"
              aria-label="Slide précédent"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Play/Pause */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                isPaused
                  ? 'bg-amber-400/20 border border-amber-400/40 text-amber-300'
                  : 'bg-white/10 border border-white/10 text-blue-200/60 hover:text-amber-300 hover:bg-amber-400/20'
              }`}
              aria-label={isPaused ? 'Reprendre' : 'Pauser'}
            >
              {isPaused ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.279l9.344-5.89a1.5 1.5 0 000-2.558L6.3 2.84z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.75 3a.75.75 0 01.75.75v12.5a.75.75 0 01-1.5 0V3.75a.75.75 0 01.75-.75zm11.5 0a.75.75 0 01.75.75v12.5a.75.75 0 01-1.5 0V3.75a.75.75 0 01.75-.75z" />
                </svg>
              )}
            </button>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-amber-300 hover:bg-amber-400/20 hover:border-amber-500/30 transition-all duration-200"
              aria-label="Slide suivant"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Zone Slides */}
        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ touchAction: 'none' }}
        >
          {/* Slide en mouvement (transform pour animation) */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${-current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-full flex"
              >
                {/* Slide 1 (image principale gauche) */}
                <div className="w-1/2 relative h-[420px] md:h-[480px] lg:h-[520px]">
                  <Image
                    src={slides[i].image}
                    alt={slides[i].title}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent" />
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-white shadow-lg ${slides[i].badgeColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                    {slides[i].badge}
                  </div>
                </div>

                {/* Slide 2 (overlay droit — info + image secondaire) */}
                <div className="w-1/2 relative flex flex-col justify-end p-6 md:p-8 lg:p-10">
                  {/* Image secondaire en haut à droite du panneau droit */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-lg overflow-hidden shadow-lg border-2 border-white/10">
                    <Image
                      src={slides[(i + 1) % totalSlides].image}
                      alt={`${slides[(i + 1) % totalSlides].title}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Badge category + prix en haut */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-400/15 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {slides[i].category}
                    </span>
                    <span className="text-right">
                      <span className="text-amber-400 font-serif font-bold text-lg md:text-xl">
                        {slides[i].price}
                      </span>
                      <span className="text-blue-300/40 text-xs ml-1">FCFA</span>
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className={`text-xl md:text-2xl font-bold text-white font-serif mb-2 leading-snug`}>
                    {slides[i].title}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-200/70 text-sm leading-relaxed mb-4 max-w-sm">
                    {slides[i].description}
                  </p>

                  {/* Séparateur doré */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-amber-500/40 to-transparent" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                    <div className="h-px flex-1 bg-gradient-to-l from-amber-500/40 to-transparent" />
                  </div>

                  {/* Location + CTA */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-blue-200/60 text-xs">
                      <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {slides[i].location}
                    </div>
                    <button
                      onClick={() => {
                        const contact = document.getElementById('contact');
                        if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 text-navy-950 text-xs font-bold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      En savoir plus →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flèches de navigation verticales (sides) — supplémentaires */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-300/70 hover:bg-amber-400/20 hover:text-amber-300 transition-all duration-200 -ml-4"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5 -ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-300/70 hover:bg-amber-400/20 hover:text-amber-300 transition-all duration-200 -mr-4"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5 -mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Compteur de slides */}
        <div className="text-center mt-6">
          <span className="text-blue-200/40 text-xs font-mono">
            {String(current + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}
