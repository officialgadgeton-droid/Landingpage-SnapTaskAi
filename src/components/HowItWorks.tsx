import { Camera, Sparkles, CalendarCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Camera,
    title: 'Upload 1–5 Foto atau Ambil Foto Live',
    desc: 'Pilih beberapa foto sekaligus atau langsung ambil foto dengan kamera instan. Screenshot juga didukung.',
    gradient: 'from-indigo-500 to-blue-600',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    border: 'border-indigo-200 dark:border-indigo-800/50',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Ekstraksi & Klasifikasi Visual AI Instan',
    desc: 'AI langsung menganalisis gambar, mendeteksi bahan/komposisi/jadwal, dan mengklasifikasikan ke kategori yang sesuai.',
    gradient: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800/50',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Export atau Simpan ke Kalender & Riwayat',
    desc: 'Simpan hasil ke riwayat tugas, export ke Google/Apple Calendar, atau bagikan. Semua tersinkron otomatis.',
    gradient: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-200 dark:border-emerald-800/50',
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 text-xs font-bold tracking-wider mb-4">
            CARA KERJA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Tiga Langkah Sederhana
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Dari foto ke hasil analisis dalam hitungan detik.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-emerald-300 dark:from-indigo-800 dark:via-purple-800 dark:to-emerald-800" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Step number circle */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-xl ${step.border} border-2 relative z-10`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <span className={`absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 rounded-full bg-white dark:bg-gray-900 ${step.border} border-2 text-xs font-extrabold text-gray-900 dark:text-white shadow-md z-20`}>
                  {i + 1}
                </span>
              </div>

              <div className={`rounded-3xl ${step.bg} border ${step.border} p-6 text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}>
                <div className={`text-4xl font-extrabold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent mb-3`}>
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </div>

              {/* Arrow between steps (mobile) */}
              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <ArrowRight className="w-5 h-5 text-gray-300 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <Camera className="w-5 h-5" />
            Mulai Scan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
