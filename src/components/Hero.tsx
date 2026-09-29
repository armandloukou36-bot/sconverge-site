'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    badge: 'Nouveau',
    badgeColor: 'bg-green-500',
    title: 'Votre avenir immobilier, notre priorité',
    description: 'Avec SCONVEGE IMMOBILIER, votre avenir immobilier sûr et réussi.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    badge: 'Appartement de luxe',
    badgeColor: 'bg-amber-500',
    title: 'Des logements qui vous ressemblent',
    description: 'Chaque projet est unique. Nous adaptons notre stratégie à vos objectifs, budget et délais.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1200&q=80',
    badge: 'Construction neuve',
    badgeColor: 'bg-blue-400',
    title: 'Construisez votre avenir aujourd\'hui',
    description: 'Faites réaliser votre projet de construction sur mesure. Plans, devis, suivi de chantier.',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = slides.length;

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % totalSlides);
  }, []);

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + totalSlides) % totalSlides);
  }, []);

  // Drag / touch
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setIsPaused(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    if (delta > 60) { next(); setIsDragging(false); setStartX(e.clientX); setIsPaused(false); }
    else if (delta < -60) { prev(); setIsDragging(false); setStartX(e.clientX); setIsPaused(false); }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const slide = slides[current];

  return (
    <>
      <div className="h-16 md:h-20" />

      {/* HERO : SLIDER EN PREMIER PLAN + TEXTE OVERLAY */}
      <section className="relative w-full overflow-hidden">

        {/* SLIDER D'IMAGES EN PREMIER PLAN */}
        <div className="relative w-full h-[500px] md:h-[560px] lg:h-[620px]">
          <div
            className="flex transition-transform duration-1000 ease-in-out h-full w-full"
            style={{ transform: `translateX(${-current * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={s.id} className="flex-shrink-0 w-full h-full relative overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  style={{ animation: 'zoomIn 8s ease-in-out infinite alternate', transformOrigin: 'center center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/30 to-navy-deep/50" />
              </div>
            ))}
          </div>

          <div className="absolute top-4 left-4 z-20">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold tracking-wider shadow-lg ${slide.badgeColor}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              {slide.badge}
            </span>
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex z-20">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-amber-400/30 hover:text-white transition-all duration-200 shadow-lg cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex z-20">
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-amber-400/30 hover:text-white transition-all duration-200 shadow-lg cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* TEXTE EN AVANT-PLAN (overlay) */}
        <div className="absolute inset-0 z-30 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
            <div className="max-w-3xl lg:max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Agence immobilière premium
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
                Votre avenir
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">immobilier</span>
                , notre <span className="relative">priorité<span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-300/50 to-amber-500/50 rounded-full" /></span>
              </h1>

              <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed font-light mb-5 drop-shadow">
                Avec SCONVEGE IMMOBILIER, votre avenir immobilier sûr et réussi.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-[#0f172a] shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer">
                  Nous contacter <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                </a>
                <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 border-white/30 text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer">
                  Découvrir nos services
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-4">
                {[{ v: '+200', l: 'CLIENTS SATISFAITS' }, { v: '15+', l: "ANS D'EXPÉRIENCE" }, { v: '300+', l: 'BIENS TRANSACTIONNÉS' }, { v: '100%', l: 'FIABILITÉ & TRANSPARENCE' }].map((st) => (
                  <div key={st.l} className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-white font-serif">{st.v}</div>
                    <div className="text-[10px] md:text-xs text-white/50 font-medium uppercase tracking-wider mt-0.5">{st.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contrôles slider */}
      <div className="bg-navy-950 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-amber-400 w-5 shadow-sm shadow-amber-500/30' : 'bg-blue-300/20 hover:bg-blue-300/40'}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-blue-200/30 text-[10px] font-mono">
              {String(current + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`w-7 h-7 rounded flex items-center justify-center transition-all duration-200 cursor-pointer ${isPaused ? 'bg-amber-400/20 text-amber-300' : 'bg-white/5 text-blue-200/50 hover:text-amber-300'}`}
            >
              {isPaused ? (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.279l9.344-5.89a1.5 1.5 0 000-2.558L6.3 2.84z" /></svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M5.75 3a.75.75 0 01.75.75v12.5a.75.75 0 01-1.5 0V3.75a.75.75 0 01.75-.75zm11.5 0a.75.75 0 01.75.75v12.5a.75.75 0 01-1.5 0V3.75a.75.75 0 01.75-.75z" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Features bar */}
      <section className="relative bg-[#0f172a] py-12 md:py-16 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <pattern id="bars" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect width="30" height="60" fill="#fbbf24" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bars)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
            {[
              { t: "Équipe d'experts", d: 'Professionnels certifiés avec une connaissance approfondie du marché immobilier abidjanais.', i: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.105a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.678 0-5.216-.5-7.499-1.437m.979 1.953a7.5 7.5 0 0014.998 0 17.933 17.933 0 007.499-1.437m-.979-1.953a7.5 7.5 0 01-14.998 0 17.933 17.933 0 01-7.499-1.437" /></svg> },
              { t: 'Approche personnalisée', d: 'Chaque projet est unique. Nous adaptons notre stratégie à vos objectifs, budget et délais.', i: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.007 9.007 0 009.926-6.75M12 21a9.007 9.007 0 01-9.926-6.75M12 21c0 0-3.926-7.5-9.926-7.5M12 21a9.007 9.007 0 00-9.926 6.75M12 21a9.007 9.007 0 019.926 6.75m0 0c3.926 0 9.926-7.5 9.926-7.5" /></svg> },
              { t: 'Réseau étendu', d: "Un large réseau d'interlocuteurs : notaires, architectes, promoteurs, banques, clients.", i: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75v0.521c2.662.05 5.112.523 7.5 1.385C15.988 5.635 18.438 6.105 21 7.5c.575.477 1.028.923 1.385 1.385A2.25 2.25 0 0121 18.75v.521c-2.662.05-5.112.523-7.5 1.385C8.012 20.635 5.562 21.105 3 22.5a2.25 2.25 0 01-3-3.75v-.521c4.062-1.127 7.5-1.599 10.5-1.599a4.5 4.5 0 014.5 4.5v.521" /></svg> },
              { t: 'Transparence totale', d: 'Honoraires clairs, informations vérifiées, suivi en temps réel. Zéro surprise, zéro compromis.', i: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.959 11.959 0 003.598 6M12 21a9.007 9.007 0 01-1.598-3.75" /></svg> },
            ].map((f) => (
              <div key={f.t} className="flex items-start gap-3 group">
                <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/30 transition-colors duration-300">{f.i}</div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{f.t}</h3>
                  <p className="text-blue-200/50 text-xs mt-0.5 leading-relaxed">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@keyframes zoomIn { 0% { transform: scale(1); } 100% { transform: scale(1.12); } }`}</style>
    </>
  );
}
