import React, { useState } from 'react';
import { PACKAGES, ARTIST_INFO } from '../data/makeupData';
import { ServicePackage } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Check, Clock, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (pkg: ServicePackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'wedding' | 'occasion'>('all');
  const { lang, t } = useLanguage();

  const filteredPackages = PACKAGES.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'wedding') return p.category === 'wedding' || p.category === 'combo';
    return p.category === 'occasion';
  });

  return (
    <section id="pakej" className="py-20 bg-[#FFF8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#592332] font-bold tracking-tight">
              {t('Pakej Harga', 'Package Rates')}
            </h2>

            {/* Interactive Filter Controls */}
            <div className="flex flex-wrap justify-center items-center gap-1.5 p-1.5 bg-[#FFF0F2] border border-[#F5C3C3] rounded-2xl shadow-inner mt-4 max-w-full">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-[#F5C3C3] text-[#4A202A] shadow-sm'
                    : 'text-neutral-700 hover:text-[#592332]'
                }`}
              >
                {t('Semua Servis', 'All Services')} ({PACKAGES.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('wedding')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'wedding'
                    ? 'bg-[#F5C3C3] text-[#4A202A] shadow-sm'
                    : 'text-neutral-700 hover:text-[#592332]'
                }`}
              >
                {t('Pengantin & Sanding', 'Bridal & Solemnization')} (
                {PACKAGES.filter((p) => p.category === 'wedding' || p.category === 'combo').length}
                )
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('occasion')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'occasion'
                    ? 'bg-[#F5C3C3] text-[#4A202A] shadow-sm'
                    : 'text-neutral-700 hover:text-[#592332]'
                }`}
              >
                {t('Occasion, Dinner & Walk-In', 'Occasion, Dinner & Walk-In')} (
                {PACKAGES.filter((p) => p.category === 'occasion').length}
                )
              </button>
            </div>
          </div>

          {/* Packages Grid without photos (clean pricing card presentation) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredPackages.map((pkg) => {
              const isPopular = pkg.popular;
              return (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col justify-between rounded-3xl bg-white overflow-hidden transition-all duration-300 border-2 ${
                    isPopular
                      ? 'border-[#E8B4B4] shadow-lg ring-2 ring-[#F5C3C3]/50'
                      : 'border-[#F5C3C3]/70 shadow-sm hover:shadow-md hover:border-[#E8B4B4]'
                  }`}
                >
                  {/* Popularity label */}
                  {isPopular && (
                    <div className="absolute top-3.5 right-3.5 z-10 bg-[#F5C3C3] text-[#4A202A] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1 border border-[#E8B4B4]">
                      <Sparkles className="w-3 h-3 text-[#592332]" />
                      {t('Paling Popular', 'Most Popular')}
                    </div>
                  )}

                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Category & Title */}
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-[#A85868]">
                        {pkg.category === 'wedding'
                          ? t('Pakej Pengantin', 'Bridal Service')
                          : pkg.category === 'combo'
                          ? t('Pakej Kombo Lengkap', 'Complete Combo Package')
                          : t('Majlis / Acara', 'Occasion / Event')}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#592332] mt-0.5">
                        {pkg.name[lang]}
                      </h3>
                    </div>

                    {/* Price in RM */}
                    <div className="pt-1 pb-2 border-b border-[#F5C3C3]/50 flex items-baseline gap-2">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#592332] tabular-nums">
                        RM{pkg.price}
                      </span>
                      <span className="text-xs text-neutral-500 font-semibold">
                        / {t('sesi', 'session')}
                      </span>
                    </div>

                    {/* Description & Duration */}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed min-h-[36px]">
                      {pkg.description[lang]}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-neutral-500 pt-1">
                      <Clock className="w-3.5 h-3.5 text-[#A85868]" />
                      <span>
                        {t('Masa sesi:', 'Session duration:')} {pkg.duration[lang]}
                      </span>
                    </div>

                    {/* Inclusions List */}
                    <div className="pt-2 space-y-2">
                      <p className="text-xs font-bold text-neutral-800 uppercase tracking-wide">
                        {t('Termasuk Dalam Pakej:', 'Package Inclusions:')}
                      </p>
                      <ul className="space-y-1.5">
                        {pkg.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                            <Check className="w-3.5 h-3.5 text-[#A85868] shrink-0 mt-0.5" />
                            <span>{inc[lang]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-5 mt-5 border-t border-[#F5C3C3]/50 space-y-2">
                    <button
                      type="button"
                      onClick={() => onSelectPackage(pkg)}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#4A202A] bg-[#F5C3C3] hover:bg-[#e8b4b4] active:bg-[#dc9f9f] shadow-sm transition-all"
                    >
                      <span>{t('Pilih & Kira Tempahan', 'Select & Calculate Quote')}</span>
                      <ArrowRight className="w-4 h-4 text-[#4A202A]" />
                    </button>

                    <a
                      href={`https://wa.me/${ARTIST_INFO.phoneRaw}?text=${encodeURIComponent(
                        t(
                          `Salam Kak Yasmin, saya nak tanya tentang ${pkg.name.bm} (RM${pkg.price}). Ada slot kosong tak?`,
                          `Hi Kak Yasmin, I would like to inquire about ${pkg.name.en} (RM${pkg.price}). Is this slot available?`
                        )
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-neutral-600 hover:text-[#592332] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#A85868]" />
                      <span>{t('Tanya di WhatsApp', 'Inquire on WhatsApp')}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transportation & Add-on Disclaimer Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#F5C3C3] shadow-sm max-w-4xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold tracking-widest uppercase bg-[#FFF0F2] text-[#592332] px-2.5 py-1 rounded-md border border-[#F5C3C3]">
                {t('Maklumat Tambahan & Logistik', 'Additional Add-Ons & Travel')}
              </span>
              <h4 className="font-serif text-xl font-bold text-[#592332]">
                {t('Kadar Caj Tambahan & Pengangkutan Melaka', 'Official Melaka Travel & Add-On Fees')}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                • <strong>{t('Deposit Tetap:', 'Fixed Deposit:')}</strong> MYR 50 sahaja bagi semua jenis pakej
                <br />• <strong>{t('Servis Basic Hijab Styling:', 'Basic Hijab Styling Service:')}</strong> Add on RM20
                <br />• <strong>{t('Makeup Early Morning:', 'Early Morning Makeup:')}</strong> Add on RM20 (sebelum 7:00 AM)
                <br />• <strong>{t('Caj Pengangkutan:', 'Transportation Charge:')}</strong> Bandaraya Melaka RM20 sahaja · Masjid Tanah & Alor Gajah RM50 · Walk-in Studio RM0 (Percuma)
              </p>
            </div>
            <a
              href="#kalkulator"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#F5C3C3] text-[#4A202A] text-xs font-bold rounded-xl hover:bg-[#e8b4b4] transition-all whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>{t('Kira Anggaran Kos', 'Calculate Total')}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
