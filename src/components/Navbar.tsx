import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/makeupData';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t('Pilih Servis', 'Select Service'), href: '#kalkulator' },
    { label: t('Pakej Harga', 'Package Rates'), href: '#pakej' },
    { label: t('Portfolio', 'Portfolio'), href: '#portfolio' },
    { label: t('T&C', 'T&C'), href: '#syarat' },
    { label: t('FAQ', 'FAQ'), href: '#faq' },
  ];

  const whatsappMessage = encodeURIComponent(
    t(
      'Salam Kak Yasmin, saya nak semak kekosongan tarikh untuk servis makeup.',
      'Hi Kak Yasmin, I would like to check date availability for makeup service.'
    )
  );
  const whatsappHref = `https://wa.me/${ARTIST_INFO.phoneRaw}?text=${whatsappMessage}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9FA]/95 backdrop-blur-md border-b border-[#F5C3C3] transition-all shadow-[0_2px_10px_rgba(245,195,195,0.25)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Zone 1: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-700">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#F5C3C3] after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
                  idx === 0
                    ? 'text-[#592332] font-bold bg-[#FFF0F2] px-3 py-1 rounded-full border border-[#F5C3C3]'
                    : 'hover:text-[#592332]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 2: Desktop Language Switcher & WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="flex items-center bg-[#FFF0F2] border border-[#F5C3C3] rounded-full p-1 text-xs font-bold">
              <button
                type="button"
                onClick={() => setLang('bm')}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === 'bm'
                    ? 'bg-[#F5C3C3] text-[#4A202A] shadow-xs'
                    : 'text-[#592332] hover:bg-[#fde2e2]'
                }`}
              >
                BM
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-[#F5C3C3] text-[#4A202A] shadow-xs'
                    : 'text-[#592332] hover:bg-[#fde2e2]'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#4A202A] bg-[#F5C3C3] hover:bg-[#e8b4b4] active:bg-[#dc9f9f] rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0 tracking-wide"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#4A202A]" />
              <span>{t('WhatsApp Sekarang', 'WhatsApp Now')}</span>
            </a>
          </div>

          {/* Zone 3: Mobile bar with Language Switcher & Actions */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <div className="flex items-center bg-[#FFF0F2] border border-[#F5C3C3] rounded-full p-0.5 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLang('bm')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === 'bm'
                    ? 'bg-[#F5C3C3] text-[#4A202A] shadow-xs'
                    : 'text-[#592332]'
                }`}
              >
                BM
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-[#F5C3C3] text-[#4A202A] shadow-xs'
                    : 'text-[#592332]'
                }`}
              >
                EN
              </button>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 text-[#4A202A] bg-[#F5C3C3] rounded-full shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-700 hover:text-[#592332] hover:bg-rose-100/50 rounded-lg transition-colors"
                aria-label="Buka Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#592332]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#F5C3C3] bg-[#FFF8FA] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  idx === 0
                    ? 'text-[#592332] bg-[#FFF0F2] border border-[#F5C3C3] shadow-xs font-bold'
                    : 'text-neutral-800 hover:text-[#592332] hover:bg-[#FFF0F2]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#F5C3C3]">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-[#4A202A] bg-[#F5C3C3] hover:bg-[#e8b4b4] rounded-xl shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#4A202A]" />
              <span>WhatsApp: {ARTIST_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
