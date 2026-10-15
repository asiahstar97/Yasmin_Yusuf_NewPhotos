import React, { useState } from 'react';
import { FAQ_ITEMS, ARTIST_INFO } from '../data/makeupData';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang, t } = useLanguage();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-[#F5C3C3]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#592332] font-bold tracking-tight">
            {t('FAQ', 'FAQ')}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl border-2 border-[#F5C3C3] bg-[#FFF8FA] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-[#FFF0F2]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#592332] pr-4">
                    {item.question[lang]}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#A85868] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-neutral-700 text-xs sm:text-sm leading-relaxed border-t border-[#F5C3C3]/60 pt-3">
                    {item.answer[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#FFF0F2] border-2 border-[#F5C3C3] text-center space-y-3">
          <p className="font-serif text-xl font-bold text-[#592332]">
            {t('Ada Soalan Lain Yang Ingin Ditanya?', 'Have Any Further Questions?')}
          </p>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto">
            {t(
              'Jangan segan untuk menghubungi Kak Yasmin terus di WhatsApp untuk sebarang semakan jadual atau konsultasi.',
              'Feel free to message Kak Yasmin directly on WhatsApp for schedule checks or personalized advice.'
            )}
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${ARTIST_INFO.phoneRaw}?text=${encodeURIComponent(
                t(
                  'Salam Kak Yasmin, saya ada soalan mengenai servis makeup natural.',
                  'Hi Kak Yasmin, I have a question regarding your natural makeup service.'
                )
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F5C3C3] text-[#4A202A] text-xs font-bold hover:bg-[#e8b4b4] transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#4A202A]" />
              <span>
                {t('Tanya Yasmin di WhatsApp', 'Chat with Yasmin on WhatsApp')} ({ARTIST_INFO.phone})
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
