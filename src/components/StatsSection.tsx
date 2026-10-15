import React from 'react';
import { BUSINESS_STATS, ARTIST_INFO } from '../data/makeupData';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, MessageCircle, ShieldCheck, Heart, Award } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const whatsappHref = `https://wa.me/${ARTIST_INFO.phoneRaw}?text=${encodeURIComponent(
    t(
      'Salam Kak Yasmin! Saya berminat untuk semak tarikh dan tempah makeup natural.',
      'Hi Kak Yasmin! I am interested in checking date availability and booking natural makeup.'
    )
  )}`;

  return (
    <section id="statistik" className="py-20 bg-gradient-to-b from-[#FFF5F7] via-[#FFF9FA] to-white border-t-2 border-[#F5C3C3]/60 relative overflow-hidden">
      {/* Soft ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F5C3C3]/20 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#592332] font-bold tracking-tight">
            {t('Statistik & Pencapaian', 'Key Statistics')}
          </h2>
        </div>

        {/* 6 Key Stat Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {BUSINESS_STATS.map((stat, idx) => (
            <div
              key={stat.id || idx}
              className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#F5C3C3] shadow-sm hover:shadow-md hover:border-[#E8B4B4] transition-all flex flex-col justify-between text-center space-y-3 group"
            >
              <div className="space-y-2">
                {stat.badge && (
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#FFF0F2] text-[#592332] border border-[#F5C3C3]/70">
                    {stat.badge[lang]}
                  </span>
                )}

                <div className="font-serif text-2xl sm:text-3xl lg:text-3xl font-bold text-[#592332] tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>

                <h3 className="font-sans text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                  {stat.label[lang]}
                </h3>
              </div>

              <div className="pt-2 border-t border-[#F5C3C3]/50">
                <p className="text-[11px] text-neutral-600 leading-relaxed">
                  {stat.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust & Booking Banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-[#F5C3C3] shadow-md flex flex-col lg:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#592332]">
              <Sparkles className="w-4 h-4 text-[#A85868]" />
              <span>{t('Kunci Slot Majlis Anda Dengan Selamat', 'Secure Your Event Slot Safely')}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#592332]">
              {t('Deposit Tetap MYR 50 Sahaja Untuk Semua Pakej', 'Fixed MYR 50 Deposit Across All Packages')}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-xl">
              {t(
                'Kadar telus tanpa caj tersembunyi. Khusus untuk wanita & pengantin perempuan di Melaka Tengah dan kawasan sekitar.',
                'Transparent rates with zero hidden charges. Tailored strictly for women & brides in Melaka Tengah and surrounding areas.'
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold text-[#4A202A] bg-[#F5C3C3] hover:bg-[#e8b4b4] active:bg-[#dc9f9f] rounded-xl shadow-sm hover:shadow-md transition-all whitespace-nowrap tracking-wide"
            >
              <MessageCircle className="w-4 h-4 text-[#4A202A]" />
              <span>{t('WhatsApp Tempah Sekarang', 'WhatsApp Book Now')}</span>
            </a>

            <a
              href="#kalkulator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold text-[#592332] bg-[#FFF0F2] hover:bg-[#fde2e2] border border-[#F5C3C3] rounded-xl transition-all whitespace-nowrap"
            >
              <span>{t('Pakej harga', 'Package rates')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
