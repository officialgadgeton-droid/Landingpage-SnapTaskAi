import { Camera, Upload, Sparkles, CheckCircle2, Clock, AlertTriangle, ListTodo } from 'lucide-react';

const stats = [
  { label: 'Total Tugas', value: '248', icon: ListTodo, color: 'indigo', bg: 'from-indigo-500 to-blue-600' },
  { label: 'Aktif', value: '42', icon: Clock, color: 'amber', bg: 'from-amber-500 to-orange-500' },
  { label: 'Selesai', value: '196', icon: CheckCircle2, color: 'emerald', bg: 'from-emerald-500 to-green-600' },
  { label: 'Terlambat', value: '10', icon: AlertTriangle, color: 'rose', bg: 'from-rose-500 to-red-600' },
];

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-400/10 dark:bg-emerald-600/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Powered by Gadget On Official
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.15] tracking-tight">
              Ekstraksi Tugas Visual,
              <span className="block mt-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Halal Checker &amp; Asisten AI Harian
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Scan 1–5 foto atau ambil foto instan untuk menganalisis komposisi makanan,
              resep dari isi kulkas, dan jadwal kuliah — semua dalam satu aplikasi bertenaga AI.
            </p>

            {/* Dual CTAs */}
            <div id="cta" className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all overflow-hidden">
                <span className="absolute inset-0 shimmer-bg animate-shimmer" />
                <Camera className="w-5 h-5 relative" />
                <span className="relative">Buka Kamera Instan</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:scale-105 active:scale-95 transition-all shadow-sm">
                <Upload className="w-5 h-5" />
                Upload Foto / Screenshot
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-gray-500 dark:text-gray-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Tanpa registrasi</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> PWA — install di HP</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Bahasa Indonesia</span>
            </div>
          </div>

          {/* Right: Stats dashboard cards */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4 p-5 sm:p-6 rounded-3xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 shadow-2xl shadow-indigo-500/5">
              {/* Floating glow */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-float" />

              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white dark:bg-gray-800 shadow-md text-[10px] font-bold text-gray-500 dark:text-gray-400 tracking-wider border border-gray-100 dark:border-gray-700">
                DASHBOARD PREVIEW
              </div>

              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="group relative p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all animate-scale-in"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className={`flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${stat.bg} shadow-md mb-3`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">AI-Powered</div>
                <div className="text-[10px] text-gray-500">Analisis instan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
