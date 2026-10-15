import React, { useState, useEffect } from 'react';
import { PACKAGES, ARTIST_INFO } from '../data/makeupData';
import { ServicePackage } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  MessageCircle,
  Copy,
  Check,
  Mail,
  ShieldCheck,
  Sun,
} from 'lucide-react';

interface BookingCalculatorProps {
  selectedPackage: ServicePackage | null;
  onClearSelectedPackage?: () => void;
}

export const BookingCalculator: React.FC<BookingCalculatorProps> = ({
  selectedPackage,
}) => {
  const { lang, t } = useLanguage();

  const [packageId, setPackageId] = useState<string>(
    selectedPackage ? selectedPackage.id : 'nikah'
  );
  const [paxCount, setPaxCount] = useState<number>(1);
  const [locationType, setLocationType] = useState<'walkin' | 'commute'>('walkin');
  const [commuteZone, setCommuteZone] = useState<'bandaraya' | 'luar-bandar'>('bandaraya');
  const [needHijabAddon, setNeedHijabAddon] = useState<boolean>(false);
  const [isEarlyMorning, setIsEarlyMorning] = useState<boolean>(false);
  const [eventDate, setEventDate] = useState<string>('');
  const [eventSession, setEventSession] = useState<string>('Pagi (07:00 - 11:00)');
  const [clientName, setClientName] = useState<string>('');
  const [venueNotes, setVenueNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Sync when parent selects a package
  useEffect(() => {
    if (selectedPackage) {
      setPackageId(selectedPackage.id);
    }
  }, [selectedPackage]);

  const currentPkg = PACKAGES.find((p) => p.id === packageId) || PACKAGES[0];

  // Transportation rates from reference image:
  // Bandaraya Melaka RM20, Masjid Tanah & Alor Gajah RM50, Walk-in RM0
  const transportFee =
    locationType === 'walkin' ? 0 : commuteZone === 'bandaraya' ? 20 : 50;

  // Add-ons from reference image:
  // Basic hijab styling add on RM20 per pax
  const hijabAddonFee = needHijabAddon ? 20 * paxCount : 0;

  // Early morning makeup add on RM20
  const earlyMorningFee = isEarlyMorning ? 20 : 0;

  // Totals
  const packageTotal = currentPkg.price * paxCount;
  const grandTotal = packageTotal + transportFee + hijabAddonFee + earlyMorningFee;
  
  // Deposit is ALL FIXED to MYR 50 no matter which package!
  const depositAmount = ARTIST_INFO.fixedDeposit; // Fixed 50
  const balanceDue = Math.max(0, grandTotal - depositAmount);

  // Formulate WhatsApp message text in selected language
  const packageName = currentPkg.name[lang];
  const locationLabel =
    locationType === 'walkin'
      ? t('Walk-In ke Studio MUA (Melaka Tengah)', 'Walk-in to MUA Studio (Melaka Tengah)')
      : commuteZone === 'bandaraya'
      ? t('MUA Commute - Kawasan Bandaraya Melaka (+RM20)', 'MUA Commute - Melaka City Area (+RM20)')
      : t('MUA Commute - Masjid Tanah / Alor Gajah (+RM50)', 'MUA Commute - Masjid Tanah / Alor Gajah (+RM50)');

  const messageText =
    lang === 'bm'
      ? `Salam Kak Yasmin! Saya berminat nak semak slot & tempah makeup:

• Nama: ${clientName || '(Nama Pelanggan)'}
• Pakej: ${packageName} (RM${currentPkg.price}/sesi)
• Bilangan Pax: ${paxCount} orang
• Tarikh Majlis: ${eventDate || '(Akan dimaklumkan)'}
• Sesi Waktu: ${eventSession}${isEarlyMorning ? ' [Early Morning +RM20]' : ''}
• Lokasi: ${locationLabel}${venueNotes ? ` (${venueNotes})` : ''}
• Basic Hijab Styling: ${needHijabAddon ? `Ya (+RM${hijabAddonFee})` : 'Tidak'}

Ringkasan Anggaran:
• Pakej: RM${packageTotal}
• Caj Pengangkutan: RM${transportFee}
• Hijab Styling: RM${hijabAddonFee}
• Early Morning Add-on: RM${earlyMorningFee}
• Jumlah Keseluruhan: RM${grandTotal}
• Deposit Tetap (Kunci Slot): MYR 50
• Baki Semasa Majlis: RM${balanceDue}

Boleh sahkan jika slot ini masih ada kekosongan? Terima kasih Kak Yasmin!`
      : `Hi Kak Yasmin! I would like to check date availability and book makeup:

• Name: ${clientName || '(Client Name)'}
• Package: ${packageName} (RM${currentPkg.price}/session)
• Pax Count: ${paxCount} pax
• Event Date: ${eventDate || '(To be confirmed)'}
• Session Time: ${eventSession}${isEarlyMorning ? ' [Early Morning +RM20]' : ''}
• Location: ${locationLabel}${venueNotes ? ` (${venueNotes})` : ''}
• Basic Hijab Styling: ${needHijabAddon ? `Yes (+RM${hijabAddonFee})` : 'No'}

Quotation Summary:
• Package: RM${packageTotal}
• Transportation Fee: RM${transportFee}
• Hijab Styling: RM${hijabAddonFee}
• Early Morning Add-on: RM${earlyMorningFee}
• Grand Total: RM${grandTotal}
• Fixed Deposit (To Lock Date): MYR 50
• Balance on Event Day: RM${balanceDue}

Could you please confirm if this slot is available? Thank you Kak Yasmin!`;

  const whatsappUrl = `https://wa.me/${ARTIST_INFO.phoneRaw}?text=${encodeURIComponent(messageText)}`;
  const emailSubject = encodeURIComponent(
    `Tempahan Makeup Yasmin Yusuf: ${packageName} - ${clientName || 'Pelanggan'}`
  );
  const emailUrl = `mailto:${ARTIST_INFO.email}?subject=${emailSubject}&body=${encodeURIComponent(messageText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="kalkulator" className="py-20 bg-white border-t border-[#F5C3C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#592332] font-bold tracking-tight">
            {t('Harga Make Up', 'Make Up Price')}
          </h2>
        </div>

        {/* 2-Column Interactive Tool */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Form: Parameters */}
          <div className="lg:col-span-7 bg-[#FFF8FA] border-2 border-[#F5C3C3] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#592332] pb-2 border-b border-[#F5C3C3]/60">
              {t('Pilihan Servis', 'Service Selection')}
            </h3>

            {/* Field 1: Choose Package */}
            <div className="space-y-2">
              <label htmlFor="package-select-calc" className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                1. {t('Pilih Servis Solekan:', 'Select Makeup Service:')}
              </label>
              <select
                id="package-select-calc"
                value={packageId}
                onChange={(e) => setPackageId(e.target.value)}
                className="w-full bg-white border border-[#F5C3C3] rounded-xl px-4 py-3 text-sm font-semibold text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#F5C3C3]"
              >
                {PACKAGES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name[lang]} — RM{p.price} ({p.duration[lang]})
                  </option>
                ))}
              </select>
            </div>

            {/* Field 2: Bilangan Pax */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                2. {t('Bilangan Orang (Pax):', 'Number of Pax:')}
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPaxCount(num)}
                    className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl border-2 transition-all ${
                      paxCount === num
                        ? 'bg-[#F5C3C3] text-[#4A202A] border-[#E8B4B4] shadow-sm'
                        : 'bg-white text-neutral-700 border-[#F5C3C3]/60 hover:bg-[#FFF0F2]'
                    }`}
                  >
                    {num} {num === 1 ? 'Pax' : 'Pax'}
                  </button>
                ))}
              </div>
            </div>

            {/* Field 3: Lokasi Servis */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                3. {t('Lokasi Solekan (Studio vs On-Site):', 'Location (Studio vs On-Site):')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setLocationType('walkin')}
                  className={`p-3.5 text-left rounded-xl border-2 transition-all ${
                    locationType === 'walkin'
                      ? 'bg-[#FFF0F2] border-[#E8B4B4] text-neutral-900 font-semibold shadow-xs'
                      : 'bg-white border-[#F5C3C3]/60 text-neutral-700 hover:bg-[#FFF8FA]'
                  }`}
                >
                  <p className="text-xs font-bold flex items-center justify-between">
                    <span>{t('Walk-In Studio', 'Walk-In Studio')}</span>
                    <span className="text-[11px] bg-[#F5C3C3] text-[#4A202A] px-2 py-0.5 rounded font-bold">
                      RM0 ({t('Percuma', 'Free')})
                    </span>
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setLocationType('commute')}
                  className={`p-3.5 text-left rounded-xl border-2 transition-all ${
                    locationType === 'commute'
                      ? 'bg-[#FFF0F2] border-[#E8B4B4] text-neutral-900 font-semibold shadow-xs'
                      : 'bg-white border-[#F5C3C3]/60 text-neutral-700 hover:bg-[#FFF8FA]'
                  }`}
                >
                  <p className="text-xs font-bold flex items-center justify-between">
                    <span>{t('MUA Commute Ke Lokasi', 'MUA Commute to Venue')}</span>
                    <span className="text-[11px] bg-[#F5C3C3] text-[#4A202A] px-2 py-0.5 rounded font-bold">
                      +RM20 - RM50
                    </span>
                  </p>
                </button>
              </div>

              {locationType === 'commute' && (
                <div className="mt-3 p-4 rounded-xl bg-white border border-[#F5C3C3] space-y-2">
                  <label htmlFor="commute-zone-select" className="text-xs font-bold text-neutral-800 block">
                    {t('Pilih Zon Pengangkutan Melaka:', 'Select Melaka Transportation Zone:')}
                  </label>
                  <select
                    id="commute-zone-select"
                    value={commuteZone}
                    onChange={(e) => setCommuteZone(e.target.value as 'bandaraya' | 'luar-bandar')}
                    className="w-full bg-[#FFF0F2] border border-[#F5C3C3] rounded-lg px-3 py-2 text-xs font-semibold text-neutral-800"
                  >
                    <option value="bandaraya">
                      {t('Area Bandaraya Melaka (+RM20 sahaja)', 'Melaka City Area (+RM20 only)')}
                    </option>
                    <option value="luar-bandar">
                      {t('Masjid Tanah & Alor Gajah (+RM50)', 'Masjid Tanah & Alor Gajah (+RM50)')}
                    </option>
                  </select>
                </div>
              )}
            </div>

            {/* Field 4: Add-ons from disclaimer */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                4. {t('Pilihan Add-On Rasmi:', 'Official Add-On Options:')}
              </label>

              {/* Add-on 1: Basic Hijab Styling RM20 */}
              <div className="p-3.5 rounded-xl bg-white border border-[#F5C3C3] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-neutral-800">
                    {t('Servis Basic Hijab Styling', 'Basic Hijab Styling Service')}
                  </p>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needHijabAddon}
                    onChange={(e) => setNeedHijabAddon(e.target.checked)}
                    className="w-4 h-4 text-[#A85868] rounded border-[#F5C3C3] focus:ring-[#F5C3C3]"
                  />
                  <span className="text-xs font-bold text-[#592332]">+RM20</span>
                </label>
              </div>

              {/* Add-on 2: Early Morning RM20 */}
              <div className="p-3.5 rounded-xl bg-white border border-[#F5C3C3] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-[#A85868]" />
                    {t('Makeup Early Morning (Sebelum 7:00 AM)', 'Early Morning Makeup (Before 7:00 AM)')}
                  </p>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isEarlyMorning}
                    onChange={(e) => setIsEarlyMorning(e.target.checked)}
                    className="w-4 h-4 text-[#A85868] rounded border-[#F5C3C3] focus:ring-[#F5C3C3]"
                  />
                  <span className="text-xs font-bold text-[#592332]">+RM20</span>
                </label>
              </div>
            </div>

            {/* Field 5: Tarikh, Sesi & Nama */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#F5C3C3]/60">
              <div className="space-y-1.5">
                <label htmlFor="event-date-picker" className="block text-xs font-bold text-neutral-800">
                  {t('Tarikh Majlis:', 'Event Date:')}
                </label>
                <input
                  id="event-date-picker"
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-white border border-[#F5C3C3] rounded-xl px-3.5 py-2.5 text-xs text-neutral-800 focus:ring-1 focus:ring-[#F5C3C3]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="event-session-picker" className="block text-xs font-bold text-neutral-800">
                  {t('Sesi Waktu:', 'Session Time:')}
                </label>
                <select
                  id="event-session-picker"
                  value={eventSession}
                  onChange={(e) => setEventSession(e.target.value)}
                  className="w-full bg-white border border-[#F5C3C3] rounded-xl px-3.5 py-2.5 text-xs text-neutral-800 focus:ring-1 focus:ring-[#F5C3C3]"
                >
                  <option value="Awal Pagi (05:30 - 07:00)">
                    {t('Awal Pagi (05:30 - 07:00)', 'Early Morning (05:30 - 07:00)')}
                  </option>
                  <option value="Pagi (07:00 - 11:00)">
                    {t('Pagi (07:00 - 11:00)', 'Morning (07:00 - 11:00)')}
                  </option>
                  <option value="Tengahari (11:00 - 14:00)">
                    {t('Tengahari (11:00 - 14:00)', 'Afternoon (11:00 - 14:00)')}
                  </option>
                  <option value="Petang (14:00 - 17:00)">
                    {t('Petang (14:00 - 17:00)', 'Late Afternoon (14:00 - 17:00)')}
                  </option>
                  <option value="Malam (17:00 - 20:00)">
                    {t('Malam (17:00 - 20:00)', 'Evening (17:00 - 20:00)')}
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="client-name-field" className="block text-xs font-bold text-neutral-800">
                  {t('Nama Penuh Anda:', 'Your Full Name:')}
                </label>
                <input
                  id="client-name-field"
                  type="text"
                  placeholder={t('cth: Nurul Farah', 'e.g. Nurul Farah')}
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-white border border-[#F5C3C3] rounded-xl px-3.5 py-2.5 text-xs text-neutral-800 focus:ring-1 focus:ring-[#F5C3C3]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="venue-notes-field" className="block text-xs font-bold text-neutral-800">
                  {t('Catatan Lokasi / Kawasan:', 'Venue / Area Notes:')}
                </label>
                <input
                  id="venue-notes-field"
                  type="text"
                  placeholder={t('cth: Ayer Keroh / Masjid Tanah', 'e.g. Ayer Keroh / Masjid Tanah')}
                  value={venueNotes}
                  onChange={(e) => setVenueNotes(e.target.value)}
                  className="w-full bg-white border border-[#F5C3C3] rounded-xl px-3.5 py-2.5 text-xs text-neutral-800 focus:ring-1 focus:ring-[#F5C3C3]"
                />
              </div>
            </div>
          </div>

          {/* Right Summary: Receipt Breakdown & Action */}
          <div className="lg:col-span-5 bg-white border-2 border-[#F5C3C3] rounded-3xl p-6 sm:p-8 space-y-6 shadow-md sticky top-28">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#592332]">
                {t('Penyata Anggaran Rasmi', 'Official Quotation Statement')}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#592332]">
                {currentPkg.name[lang]}
              </h3>
              <p className="text-xs text-neutral-600">
                {currentPkg.recommendedFor[lang]}
              </p>
            </div>

            {/* Calculations Table */}
            <div className="space-y-3 pt-3 border-t border-[#F5C3C3]/60 text-xs sm:text-sm">
              <div className="flex justify-between text-neutral-700">
                <span>
                  {t('Servis', 'Service')} ({paxCount}x RM{currentPkg.price})
                </span>
                <span className="font-bold tabular-nums text-neutral-900">RM{packageTotal}</span>
              </div>

              <div className="flex justify-between text-neutral-700">
                <span>{t('Caj Pengangkutan', 'Transportation')}</span>
                <span className="font-bold tabular-nums text-neutral-900">
                  {transportFee === 0 ? 'RM0 (Walk-In)' : `+RM${transportFee}`}
                </span>
              </div>

              {needHijabAddon && (
                <div className="flex justify-between text-neutral-700">
                  <span>{t('Basic Hijab Styling', 'Basic Hijab Styling')} ({paxCount}x RM20)</span>
                  <span className="font-bold tabular-nums text-neutral-900">+RM{hijabAddonFee}</span>
                </div>
              )}

              {isEarlyMorning && (
                <div className="flex justify-between text-neutral-700">
                  <span>{t('Early Morning Session', 'Early Morning Session')}</span>
                  <span className="font-bold tabular-nums text-neutral-900">+RM{earlyMorningFee}</span>
                </div>
              )}

              <div className="pt-3 border-t border-[#F5C3C3] flex justify-between items-baseline">
                <span className="font-bold text-neutral-900 text-sm">
                  {t('Jumlah Anggaran:', 'Grand Total:')}
                </span>
                <span className="font-serif text-3xl font-bold text-[#592332] tabular-nums">
                  RM{grandTotal}
                </span>
              </div>

              {/* Deposit Card: FIXED TO MYR 50! */}
              <div className="p-4 rounded-2xl bg-[#FFF0F2] border border-[#F5C3C3] space-y-2 mt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#592332] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#A85868]" />
                    {t('Deposit Tetap (Kunci Slot):', 'Fixed Deposit (To Lock Date):')}
                  </span>
                  <span className="font-bold text-base text-[#592332] tabular-nums">
                    MYR 50
                  </span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-neutral-600 pt-1 border-t border-[#F5C3C3]/50">
                  <span>{t('Baki Pada Hari Majlis:', 'Balance on Event Day:')}</span>
                  <span className="font-semibold text-neutral-800 tabular-nums">RM{balanceDue}</span>
                </div>
                <p className="text-[10px] text-neutral-500 italic">
                  * {t('Deposit tetap MYR 50 untuk semua pakej.', 'Fixed MYR 50 deposit across all packages.')}
                </p>
              </div>
            </div>

            {/* Direct CTA Action Button to WhatsApp (#F5C3C3 button color!) */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm font-bold text-[#4A202A] bg-[#F5C3C3] hover:bg-[#e8b4b4] active:bg-[#dc9f9f] shadow-md hover:shadow-lg transition-all tracking-wide text-center"
              >
                <MessageCircle className="w-5 h-5 text-[#4A202A]" />
                <span>{t('WhatsApp Sekarang', 'WhatsApp Now')}</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold rounded-lg bg-[#FFF0F2] hover:bg-[#fde5e5] text-[#592332] border border-[#F5C3C3] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">{t('Mesej Disalin!', 'Copied!')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#592332]" />
                      <span>{t('Salin Mesej', 'Copy Message')}</span>
                    </>
                  )}
                </button>

                <a
                  href={emailUrl}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium rounded-lg bg-white hover:bg-[#FFF0F2] text-neutral-700 border border-[#F5C3C3] transition-colors"
                  title="Send via email"
                >
                  <Mail className="w-3.5 h-3.5 text-[#592332]" />
                  <span>{t('E-mel', 'Email')}</span>
                </a>
              </div>

              <div className="text-center">
                <span className="text-[11px] text-neutral-500">
                  WhatsApp: <strong className="text-[#592332]">{ARTIST_INFO.phone}</strong> · {ARTIST_INFO.facebook}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
