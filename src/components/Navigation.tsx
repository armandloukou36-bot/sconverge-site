'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#apropos', label: 'À propos' },
  { href: '#biens', label: 'Biens' },
  { href: '#temoignages', label: 'Témoignages' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 md:w-10 md:h-10">
              <img
                src="/logo.png"
                alt="SCONVERGE IMMOBILIER"
                className="w-full h-full object-contain drop-shadow-sm group-hover:drop-shadow-md transition-shadow"
                width={40}
                height={40}
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-lg md:text-xl font-bold text-[#0f172a] tracking-tight">
                SCONVERGE
              </span>
              <span className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#b45309] ml-1">
                IMMOBILIER
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0f172a] hover:bg-amber-50/80 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-6 bg-gray-200 mx-2" />
            <Link
              href="#contact"
              className="ml-2 inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-full"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                color: '#0f172a',
                boxShadow: '0 4px 14px rgba(251,191,36,0.35)',
              }}
            >
              Contact
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[#475569] hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-[#475569] hover:text-[#0f172a] hover:bg-amber-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-3 border-t border-gray-100">
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-3 text-base font-semibold rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                  color: '#0f172a',
                  boxShadow: '0 4px 14px rgba(251,191,36,0.35)',
                }}
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
