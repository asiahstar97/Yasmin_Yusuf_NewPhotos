import React from 'react';
import { ARTIST_INFO } from '../data/makeupData';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Calculator } from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  const whatsappMessage = encodeURIComponent(
    t(
      'Salam Kak Yasmin! Saya berminat nak tempah makeup untuk majlis saya. Boleh semak kekosongan tarikh?',
      'Hi Kak Yasmin! I am interested in booking makeup for my event. Could you please check date availability?'
    )
  );
  const whatsappHref = `https://wa.me/${ARTIST_INFO.phoneRaw}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Ambient pink gradient background */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 -z-10 w-[600px] h-[600px] bg-gradient-to-br from-[#F5C3C3]/30 via-pink-100/40 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-0 -z-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#F5C3C3]/20 via-rose-100/30 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Column 1: Editorial Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.12] text-[#592332] font-bold tracking-tight text-balance">
              Make Up Syarie by Yasmin Yusuf
            </h1>

            {/* Small font description below the title */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
              Makeup artist based in Melaka Tengah, specializing in natural makeup, soft glam, and signature glass skin looks. Enhancing your natural features with a soft, elegant, and timeless finish.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-[#4A202A] bg-[#F5C3C3] hover:bg-[#e8b4b4] active:bg-[#dc9f9f] rounded-xl shadow-md hover:shadow-lg transition-all tracking-wide"
              >
                <MessageCircle className="w-4 h-4 text-[#4A202A]" />
                <span>WhatsApp: {ARTIST_INFO.phone}</span>
              </a>

              <a
                href="#pakej"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#592332] bg-white hover:bg-[#FFF0F2] border-2 border-[#F5C3C3] rounded-xl transition-all shadow-sm"
              >
                <Calculator className="w-4 h-4 text-[#A85868]" />
                <span>{t('Pakej harga', 'Package rates')}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Visual Focal Carrier with Widescreen Hero Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Decorative luxury frame background */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 bg-gradient-to-tr from-[#F5C3C3]/50 via-pink-200/40 to-rose-100/50 rounded-3xl -rotate-1 blur-sm"
              />

              {/* Main image container: Widescreen (16:9) sizing */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#F5C3C3] shadow-xl bg-white aspect-video w-full">
                <img
                  src="/images/Hero_New.png"
                  alt="Hero - Make Up Syarie by Yasmin Yusuf"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
