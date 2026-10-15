import React, { useState } from 'react';
import { PORTFOLIO_GALLERY, ARTIST_INFO } from '../data/makeupData';
import { PortfolioItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Eye, X, CheckCircle2 } from 'lucide-react';

export const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const { lang, t } = useLanguage();

  const filterTabs = [
    { id: 'all', label: t('Semua Jenis Solekan', 'All Makeup Types') },
    { id: 'nikah', label: t('Akad Nikah', 'Solemnization') },
    { id: 'sanding', label: t('Sanding & Pelamin', 'Reception (Sanding)') },
    { id: 'sambut-menantu', label: t('Sambut Menantu', 'Sambut Menantu') },
    { id: 'graduation', label: t('Graduasi / Konvo', 'Graduation / Convo') },
    { id: 'engagement', label: t('Pertunangan', 'Engagement') },
    { id: 'bridesmaid', label: t('Bridesmaid', 'Bridesmaid') },
    { id: 'dinner', label: t('Dinner & Event', 'Dinner & Event') },
    { id: 'family', label: t('Ibu Pengantin & Keluarga', 'Family & Mother of Bride') },
    { id: 'hightea', label: t('Hi-Tea & Outdoor', 'High Tea & Outdoor') },
    { id: 'glass-skin', label: t('Glass Skin Glow', 'Glass Skin Glow') },
  ];

  const filteredItems = PORTFOLIO_GALLERY.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'sanding' && item.category === 'sambut-menantu') return true;
    if (activeFilter === 'hightea' && item.category === 'graduation') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-20 bg-[#FFF9FA] border-t border-[#F5C3C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#592332] font-bold tracking-tight">
            {t('Koleksi Portfolio', 'Portfolio Collection')}
          </h2>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap justify-center items-center gap-1.5 p-1.5 bg-[#FFF0F2] border border-[#F5C3C3] rounded-2xl max-w-full mx-auto mt-4">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#F5C3C3] text-[#4A202A] shadow-sm'
                    : 'text-neutral-700 hover:text-[#592332] hover:bg-[#fde2e2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid: 2 images per row on phone, 5 images per row on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-white border-2 border-[#F5C3C3]/60 shadow-sm hover:shadow-xl hover:border-[#E8B4B4] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-rose-50">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-65 group-hover:opacity-85 transition-opacity" />

                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md p-1.5 rounded-full text-[#592332] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5 text-[#A85868]" />
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-bold text-rose-200 block mb-0.5">
                    {item.lookType[lang]}
                  </span>
                  <h3 className="font-serif text-xs sm:text-sm lg:text-xs xl:text-sm font-bold leading-snug text-white group-hover:text-[#F5C3C3] transition-colors line-clamp-2">
                    {item.title[lang]}
                  </h3>
                </div>
              </div>

              <div className="p-2.5 sm:p-3.5 space-y-1.5 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] sm:text-xs">
                    <span className="text-neutral-500 font-medium">
                      {t('Kemasan:', 'Finish:')}
                    </span>
                    <span className="font-bold text-[#592332] text-right truncate max-w-[65%]">{item.finish[lang]}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-neutral-600 line-clamp-2 leading-relaxed mt-1">
                    {item.notes[lang]}
                  </p>
                </div>
                <div className="pt-1 text-right">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#592332] group-hover:underline inline-flex items-center gap-1">
                    {t('Perincian Look', 'View Look Details')} &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detail view */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border-2 border-[#F5C3C3] max-h-[90vh] flex flex-col md:flex-row">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                aria-label="Tutup"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-neutral-800 shadow-md transition-colors"
              >
                <X className="w-5 h-5 text-[#592332]" />
              </button>

              {/* Image half */}
              <div className="md:w-1/2 relative bg-rose-50 aspect-[3/4] md:aspect-auto">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details half */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#A85868]">
                      {activeModalItem.lookType[lang]}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#592332]">
                      {activeModalItem.title[lang]}
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs text-neutral-700">
                    <p className="font-bold text-[#592332]">
                      {t('Kemasan:', 'Finish:')}{' '}
                      <span className="font-semibold text-neutral-800">
                        {activeModalItem.finish[lang]}
                      </span>
                    </p>
                    <p className="leading-relaxed text-neutral-600">
                      {activeModalItem.notes[lang]}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FFF0F2] border border-[#F5C3C3] space-y-1">
                    <p className="text-[11px] font-bold text-[#592332] uppercase">
                      {t('Penjagaan Kulit & Produk:', 'Skin Prep & Cosmetics:')}
                    </p>
                    <p className="text-xs text-neutral-700">
                      {activeModalItem.productsHighlight[lang]}
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-neutral-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A85868] shrink-0" />
                      <span>{t('100% Bulu mata asli (tanpa palsu)', '100% Natural lashes without fake falsies')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A85868] shrink-0" />
                      <span>{t('Formulasi halal mesra wudhu', 'Halal wudhu-friendly certified')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A85868] shrink-0" />
                      <span>{t('Tahan peluh cuaca Melaka', 'Sweat-resistant for Melaka climate')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F5C3C3]/60">
                  <a
                    href={`https://wa.me/${ARTIST_INFO.phoneRaw}?text=${encodeURIComponent(
                      t(
                        `Salam Kak Yasmin, saya sangat suka look "${activeModalItem.title.bm}". Boleh saya tempah gaya solekan ini untuk majlis saya?`,
                        `Hi Kak Yasmin, I really love the "${activeModalItem.title.en}" look. May I book this style for my event?`
                      )
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-[#4A202A] bg-[#F5C3C3] hover:bg-[#e8b4b4] transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-[#4A202A]" />
                    <span>{t('Tempah Look Ini di WhatsApp', 'Book This Look on WhatsApp')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
