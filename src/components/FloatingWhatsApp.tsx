import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/makeupData';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, t } = useLanguage();

  const directWhatsappUrl = `https://wa.me/${ARTIST_INFO.phoneRaw}?text=${encodeURIComponent(
    t(
      'Salam Kak Yasmin, saya nak check slot makeup untuk majlis saya.',
      'Hi Kak Yasmin, I would like to check makeup slot availability for my event.'
    )
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Mini popup card if expanded */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-3xl bg-white border-2 border-[#F5C3C3] shadow-2xl p-5 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-[#F5C3C3]/50">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#F5C3C3] text-[#4A202A] flex items-center justify-center font-serif font-bold text-base shadow-xs">
                YY
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">{ARTIST_INFO.name}</p>
                <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  {t('Sedia Membantu di WhatsApp', 'Online on WhatsApp')}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup"
              className="text-neutral-400 hover:text-neutral-700 p-1"
            >
              <X className="w-4 h-4 text-[#592332]" />
            </button>
          </div>

          <p className="text-xs text-neutral-600 py-3 leading-relaxed">
            {t(
              'Salam! Ada majlis nikah, sanding atau dinner? Tekan butang di bawah untuk terus berhubung bersama Kak Yasmin di WhatsApp.',
              'Hello! Having a nikah, wedding reception, or dinner? Click below to chat directly with Kak Yasmin on WhatsApp.'
            )}
          </p>

          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-[#4A202A] bg-[#F5C3C3] hover:bg-[#e8b4b4] transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#4A202A]" />
            <span>Chat WhatsApp: {ARTIST_INFO.phone}</span>
          </a>
        </div>
      )}

      {/* Floating trigger button (#F5C3C3 background!) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Hubungi WhatsApp"
        className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#F5C3C3] hover:bg-[#e8b4b4] active:bg-[#dc9f9f] text-[#4A202A] shadow-xl hover:shadow-2xl transition-all duration-300 group font-bold border border-[#E8B4B4]"
      >
        <MessageCircle className="w-5 h-5 text-[#4A202A] group-hover:scale-110 transition-transform" />
        <span className="text-xs tracking-wide hidden sm:inline">
          WhatsApp MUA
        </span>
      </button>
    </div>
  );
};
