import React from 'react';
import { DISCLAIMER_POINTS, ARTIST_INFO } from '../data/makeupData';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

export const TermsSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="syarat" className="py-20 bg-white border-t border-[#F5C3C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#592332] font-bold tracking-tight">
            {t('T&C', 'T&C')}
          </h2>
        </div>

        {/* Disclaimer Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISCLAIMER_POINTS.map((term, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-[#FFF8FA] border-2 border-[#F5C3C3] hover:border-[#E8B4B4] transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#592332] bg-[#FFF0F2] border border-[#F5C3C3] px-3 py-1 rounded-md">
                    {term.badge[lang]}
                  </span>
                  <span className="font-serif text-lg font-bold text-[#A85868] tabular-nums">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#592332] leading-snug">
                  {term.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {term.detail[lang]}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F5C3C3]/60 text-[11px] text-[#592332] font-bold">
                {t('Pematuhan rasmi Yasmin Yusuf', 'Official policy of Yasmin Yusuf')}
              </div>
            </div>
          ))}

          {/* Quick Consultation Callout Box with #F5C3C3 accent */}
          <div className="p-6 rounded-3xl bg-[#592332] text-white flex flex-col justify-between space-y-4 shadow-md">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A202A] bg-[#F5C3C3] px-3 py-1 rounded-md inline-block">
                {t('Pertanyaan Khusus', 'Custom Inquiries')}
              </span>
              <h3 className="font-serif text-xl font-bold text-white leading-snug">
                {t('Ada Pertanyaan Lanjut Majlis Anda?', 'Have Questions Regarding Your Event?')}
              </h3>
              <p className="text-xs text-[#F5C3C3]/90 leading-relaxed">
                {t(
                  'Kami sentiasa bersedia menjawab sebarang persoalan mengenai persediaan kulit, waktu majlis dan deposit tetap MYR 50.',
                  'We are always ready to address any questions regarding skin prep, event timing, and the fixed MYR 50 deposit.'
                )}
              </p>
            </div>

            <a
              href={`https://wa.me/${ARTIST_INFO.phoneRaw}?text=${encodeURIComponent(
                t(
                  'Salam Kak Yasmin, saya nak tanya tentang terma dan syarat tempahan makeup.',
                  'Hi Kak Yasmin, I would like to inquire about booking terms and policies.'
                )
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-[#F5C3C3] text-[#4A202A] hover:bg-[#e8b4b4] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#4A202A]" />
              <span>{t('Hubungi WhatsApp MUA', 'Message MUA on WhatsApp')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
