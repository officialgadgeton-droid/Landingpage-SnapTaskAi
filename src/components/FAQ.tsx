import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Apakah SnapTask AI gratis?',
    a: 'SnapTask AI v1.4.0 PRO tersedia sebagai Progressive Web App (PWA) yang bisa diinstall langsung di HP Anda. Versi PRO membuka semua fitur scan tanpa batas.',
  },
  {
    q: 'Berapa foto yang bisa saya scan sekaligus?',
    a: 'Anda bisa upload 1 sampai 5 foto sekaligus, atau ambil foto langsung menggunakan kamera instan. Screenshot juga didukung untuk analisis jadwal.',
  },
  {
    q: 'Bagaimana cara kerja Halal Checker?',
    a: 'AI membaca daftar komposisi dari foto kemasan, mengecek E-number additive, mendeteksi gelatin dan enzyme, lalu menandai poin kritis status halal untuk Anda.',
  },
  {
    q: 'Apakah Chef AI bisa mendeteksi bahan dari foto kulkas?',
    a: 'Ya! Cukup foto isi kulkas atau bahan mentah, AI akan mendeteksi item seperti daging, telur, tomat, bawang, dan menghasilkan resep dengan tutorial langkah demi langkah.',
  },
  {
    q: 'Bisakah jadwal kuliah sinkron ke Google Calendar?',
    a: 'Tentu. Scan jadwal kuliah Anda, dan SnapTask AI akan otomatis menyinkronkan ke Google/Apple Calendar lengkap dengan alarm pintar pengingat.',
  },
  {
    q: 'Apakah aplikasi bekerja offline?',
    a: 'Sebagai PWA, SnapTask AI dapat diinstall di layar utama HP dan bekerja seperti aplikasi native. Beberapa fitur memerlukan koneksi internet untuk analisis AI.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 text-xs font-bold tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Pertanyaan Umum
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Jawaban untuk pertanyaan yang sering ditanyakan.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-indigo-300 dark:border-indigo-700 bg-white dark:bg-gray-800 shadow-lg'
                    : 'border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-gray-800/40 hover:border-gray-200 dark:hover:border-gray-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors ${
                    isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-white'
                  }`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'text-indigo-600 dark:text-indigo-400 rotate-180'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
