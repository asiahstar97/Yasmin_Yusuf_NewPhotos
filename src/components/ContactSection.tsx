import React from 'react';
import { ARTIST_INFO } from '../data/makeupData';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Instagram, MapPin, MessageCircle, Facebook } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const whatsappHref = `https://wa.me/${ARTIST_INFO.phoneRaw}?text=${encodeURIComponent(
    t(
      'Salam Kak Yasmin! Saya berminat untuk dapatkan info lanjut tentang slot makeup.',
      'Hi Kak Yasmin! I would like to get more information regarding available makeup slots.'
    )
  )}`;

  return (
    <section id="kontak" className="py-20 bg-[#FFF5F7] border-t border-[#F5C3C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#592332] font-bold tracking-tight">
                {t('Hubungi Makeup Artist', 'Contact Makeup Artist')}
              </h2>
            </div>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              {t(
                'Tempahan awal amat disarankan bagi mengunci tarikh majlis anda bersama Yasmin Yusuf.',
                'Early booking is recommended to secure your event date with Yasmin Yusuf.'
              )}
            </p>

            <div className="space-y-4 pt-2">
              {/* WhatsApp Card */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[#F5C3C3] shadow-sm hover:shadow-md hover:border-[#E8B4B4] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F5C3C3] text-[#4A202A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <MessageCircle className="w-6 h-6 text-[#4A202A]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#592332]">
                    {t('WhatsApp Rasmi (Utama)', 'Official WhatsApp (Direct)')}
                  </p>
                  <p className="font-serif text-lg font-bold text-neutral-900 group-hover:text-[#592332] transition-colors">
                    {ARTIST_INFO.phone}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    {t('Klik untuk terus berhubung di WhatsApp', 'Click to chat directly on WhatsApp')}
                  </p>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[#F5C3C3] shadow-sm hover:shadow-md hover:border-[#E8B4B4] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0F2] text-[#592332] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5C3C3]">
                  <Facebook className="w-6 h-6 text-[#592332]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#592332]">
                    {t('Facebook Rasmi', 'Official Facebook')}
                  </p>
                  <p className="text-sm font-bold text-neutral-900 group-hover:text-[#592332] transition-colors">
                    {ARTIST_INFO.facebook}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    {t('Halaman rasmi Facebook MUA', 'Official MUA Facebook page')}
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${ARTIST_INFO.email}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[#F5C3C3] shadow-sm hover:shadow-md hover:border-[#E8B4B4] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0F2] text-[#592332] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5C3C3]">
                  <Mail className="w-6 h-6 text-[#592332]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#592332]">
                    {t('E-mel Hubungan', 'Contact Email')}
                  </p>
                  <p className="text-sm font-bold text-neutral-900 group-hover:text-[#592332] transition-colors">
                    {ARTIST_INFO.email}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    {t('Untuk pertanyaan formal atau jemputan', 'For formal inquiries or invites')}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Card & Social Channels */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#F5C3C3] shadow-xl relative overflow-hidden space-y-6">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 bg-gradient-to-br from-[#F5C3C3]/40 to-pink-100 rounded-full blur-2xl pointer-events-none"
              />

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#592332]">
                  {t('Follow Kami di Social Media', 'Follow Us on Social Media')}
                </h3>
              </div>

              {/* Social Accounts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* Threads */}
                <a
                  href={ARTIST_INFO.threadsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#FFF0F2] border border-[#F5C3C3] hover:border-[#592332]/40 hover:bg-[#ffe8ec] hover:shadow-md transition-all flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F5C3C3] text-[#4A202A] flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 text-[#4A202A]" viewBox="0 0 192 192" fill="currentColor">
                      <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4184 44.7441 97.2748 44.7441 97.1312 44.745C75.882 44.881 60.1064 57.3483 55.4544 77.7126C55.4414 77.7701 55.4287 77.8277 55.4162 77.8856C51.6859 95.034 56.6664 110.871 69.4589 122.502C81.8211 133.743 98.4415 137.994 116.326 134.484C128.536 132.086 138.868 126.115 146.997 116.744L135.534 107.01C128.981 114.564 120.672 119.387 110.852 121.315C98.4063 123.758 86.4173 120.669 77.4429 112.511C68.9723 104.811 65.656 94.0249 67.9255 82.5276C71.2166 68.043 81.9329 59.2785 97.1702 59.181C114.616 59.2923 124.622 70.3667 125.795 89.9238C117.818 90.7388 110.134 92.4284 102.825 94.9751C83.3361 101.766 73.1118 112.551 76.5414 127.671C79.4674 140.573 91.0772 148.973 105.474 148.599C117.065 148.298 127.362 142.146 134.502 131.259C140.528 140.407 148.558 147.23 158.423 150.939L163.666 137.04C155.69 134.041 149.123 128.324 144.277 120.354C151.724 110.702 155.657 99.1171 155.938 86.046C156.326 67.9946 149.496 52.8806 136.634 43.4357C125.759 35.4503 111.455 31.0601 96.3458 31.0264L96.0888 31.0264C77.4093 31.0264 60.5218 37.5255 48.6015 49.3323C36.3228 61.4944 29.5668 78.4717 29.5668 97.1352C29.5668 115.801 36.3246 132.78 48.6053 144.945C60.5262 156.753 77.4151 163.253 96.0963 163.253C114.776 163.253 131.664 156.753 143.583 144.948L133.454 134.823C124.088 144.113 110.741 149.253 96.0963 149.253C81.4504 149.253 68.1026 144.113 58.7352 134.82C48.9712 125.139 43.5668 111.666 43.5668 97.1352C43.5668 82.6063 48.9697 69.1352 58.7315 59.4566C68.0975 50.1654 81.4442 45.0264 96.0888 45.0264L96.2941 45.0264C107.989 45.0526 119.062 48.4419 127.464 54.6133C137.401 61.912 142.383 73.5786 142.084 87.404C141.921 95.0343 139.73 101.815 135.698 107.502C130.686 98.4287 122.955 93.3039 112.569 92.1522C111.144 91.9944 109.687 91.9143 108.204 91.9143C102.665 91.9143 97.4206 93.4116 92.9372 96.2575C88.2253 99.2486 85.3409 103.737 84.8143 108.917C84.0954 116.035 88.5866 122.428 95.8924 124.695C98.4716 125.495 101.449 125.767 104.708 125.503C114.73 124.693 122.613 118.847 127.054 108.914C129.833 102.7 131.258 95.819 131.258 88.665C131.258 88.5714 131.258 88.4778 131.257 88.3842C134.787 88.4552 138.257 88.6587 141.537 88.9883ZM103.957 111.666C100.865 111.917 98.0583 110.279 97.4326 107.868C96.9634 106.059 97.6419 104.225 99.288 103.18C101.69 101.656 104.767 100.804 108.196 100.804C109.283 100.804 110.354 100.89 111.401 101.061C109.824 108.681 105.748 111.521 103.957 111.666Z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-neutral-900 group-hover:text-[#592332] transition-colors truncate">{ARTIST_INFO.threads}</p>
                    <p className="text-[11px] text-neutral-500">
                      {t('Threads Rasmi', 'Official Threads')}
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={ARTIST_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#FFF0F2] border border-[#F5C3C3] hover:border-[#592332]/40 hover:bg-[#ffe8ec] hover:shadow-md transition-all flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F5C3C3] text-[#4A202A] flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5 text-[#4A202A]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-neutral-900 group-hover:text-[#592332] transition-colors truncate">{ARTIST_INFO.instagram}</p>
                    <p className="text-[11px] text-neutral-500">
                      {t('Instagram Rasmi', 'Official Instagram')}
                    </p>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href={ARTIST_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#FFF0F2] border border-[#F5C3C3] hover:border-[#592332]/40 hover:bg-[#ffe8ec] hover:shadow-md transition-all flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F5C3C3] text-[#4A202A] flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                    <Facebook className="w-5 h-5 text-[#4A202A]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-neutral-900 group-hover:text-[#592332] transition-colors truncate">{ARTIST_INFO.facebook}</p>
                    <p className="text-[11px] text-neutral-500">
                      {t('Facebook Rasmi', 'Official Facebook')}
                    </p>
                  </div>
                </a>
              </div>

              {/* Fast Booking CTA Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FFF0F2] via-pink-50 to-[#FFF8FA] border border-[#F5C3C3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-base font-bold text-[#592332]">
                    {t('Kunci Tarikh Majlis Anda Sekarang', 'Lock Your Wedding Date Now')}
                  </p>
                  <p className="text-xs text-neutral-600">
                    {t('Deposit tetap MYR 50 sahaja untuk semua pakej.', 'Fixed deposit of MYR 50 only for any package.')}
                  </p>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#F5C3C3] text-[#4A202A] text-xs font-bold hover:bg-[#e8b4b4] transition-all whitespace-nowrap shadow-sm"
                >
                  {t('WhatsApp Sekarang', 'WhatsApp Now')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
