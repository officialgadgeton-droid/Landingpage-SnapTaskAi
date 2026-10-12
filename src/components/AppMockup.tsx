import { useState } from 'react';
import {
  Zap,
  Download,
  Moon,
  Upload,
  Camera,
  Layers,
  ListTodo,
  CheckCircle2,
  AlertTriangle,
  Search,
  Tag,
  UtensilsCrossed,
  GraduationCap,
  Copy,
  ChevronDown,
  Home,
  History,
  Menu,
  Sparkles,
} from 'lucide-react';

const statusTabs = ['Semua', 'Aktif', 'Selesai', 'Terlambat'] as const;

const categoryTags = [
  { label: 'Semua Kategori', icon: Tag, active: true },
  { label: 'Kuliner', icon: UtensilsCrossed, active: false },
  { label: 'Pendidikan', icon: GraduationCap, active: false },
];

const stats = [
  { icon: Layers, value: '4', label: 'Total Tu...', color: 'text-gray-700', bg: 'bg-gray-100', accent: '' },
  { icon: ListTodo, value: '4', label: 'Aktif', color: 'text-indigo-600', bg: 'bg-indigo-50', accent: 'ring-indigo-200' },
  { icon: CheckCircle2, value: '0', label: 'Selesai', color: 'text-emerald-600', bg: 'bg-emerald-50', accent: 'ring-emerald-200' },
  { icon: AlertTriangle, value: '4', label: 'Terlambat', color: 'text-rose-600', bg: 'bg-rose-50', accent: 'ring-rose-200' },
];

const detectedIngredients = [
  'Daging sapi',
  'Telur',
  'Tomat',
  'Bawang putih',
  'Bawang merah',
  'Kacang hijau',
  'Stroberi',
  'Anggur',
];

export default function AppMockup() {
  const [activeTab, setActiveTab] = useState<typeof statusTabs[number]>('Semua');
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Description */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold tracking-wider mb-4">
              LIVE PREVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Lihat Hasil Analisis AI secara Langsung
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Coba mockup interaktif di samping. Pilih kategori, cari tugas, dan lihat
              bagaimana SnapTask AI menampilkan hasil analisis foto Anda — lengkap dengan
              bahan terdeteksi dan saran tindakan.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { label: 'Kategori', value: '3+' },
                { label: 'Bahan Terdeteksi', value: '50+' },
                { label: 'Bahasa', value: 'ID' },
              ].map((item) => (
                <div key={item.label} className="text-center lg:text-left">
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive phone mockup */}
          <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-[380px]">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-3xl" />

              {/* Phone frame — always light theme to match real app */}
              <div className="relative bg-white rounded-[2.5rem] border-[5px] border-gray-900 shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="bg-gray-900 px-6 py-2 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold">9:41</span>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/></svg>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                  </div>
                </div>

                {/* App content — light gray/lavender background */}
                <div className="bg-[#f5f6fa] px-4 pt-4 pb-24 min-h-[640px] max-h-[640px] overflow-y-auto">
                  {/* === Top Header Bar === */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      {/* App icon */}
                      <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-500/25 flex-shrink-0">
                        <Zap className="w-5 h-5 text-white" fill="white" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-[15px] font-extrabold text-gray-900 leading-none">SnapTask AI</h3>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[8px] font-bold tracking-wider shadow-sm">
                            PRO
                          </span>
                        </div>
                        <p className="text-[9px] text-gray-400 leading-snug mt-1 truncate">
                          Ekstraksi tugas visual, halal checker, &amp; ide resep kuliner, &amp; jadwal kuliah.
                        </p>
                      </div>
                    </div>
                    {/* Action buttons */}
                    <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                      <button className="flex items-center gap-1 px-2.5 py-2 rounded-xl bg-white border border-gray-200 text-gray-600 text-[10px] font-semibold shadow-sm hover:shadow-md transition-all">
                        <Download className="w-3.5 h-3.5" />
                        Ekspor
                      </button>
                      <button className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-500/25 hover:scale-105 transition-transform">
                        <Moon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* === Top Action Buttons (2 Big Grid Cards) === */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Card 1: Upload */}
                    <div className="relative p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-md mb-2.5">
                        <Upload className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-[11px] font-bold text-gray-900 leading-tight">Pilih Foto / Screenshot</h4>
                      <p className="text-[9px] text-gray-400 mt-1 leading-snug">Bisa pilih sekaligus 1 - 5 foto</p>
                      <div className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 text-[8px] font-semibold">
                        <Layers className="w-2.5 h-2.5" />
                        Multi-select JPG, PNG
                      </div>
                    </div>

                    {/* Card 2: Camera */}
                    <div className="relative p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-md mb-2.5">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-[11px] font-bold text-gray-900 leading-tight">Buka Kamera</h4>
                      <p className="text-[9px] text-gray-400 mt-1 leading-snug">Foto langsung komposisi, kulkas, atau jadwal</p>
                      <div className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[8px] font-semibold">
                        <Sparkles className="w-2.5 h-2.5" />
                        Kamera HP Instan
                      </div>
                    </div>
                  </div>

                  {/* === Task Statistics Bar (4 columns) === */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className={`flex flex-col items-center justify-center p-2 rounded-xl ${stat.bg} ${stat.accent ? `ring-1 ${stat.accent}` : 'border border-gray-100'} shadow-sm`}
                      >
                        <stat.icon className={`w-4 h-4 ${stat.color} mb-1`} />
                        <span className={`text-base font-extrabold ${stat.color} leading-none`}>{stat.value}</span>
                        <span className="text-[8px] text-gray-400 mt-0.5 truncate w-full text-center">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* === Filter & Search Section === */}
                  <div className="mb-4">
                    {/* Section title + status tabs */}
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-[10px] font-extrabold text-gray-700 tracking-wider">
                        DAFTAR TUGAS &amp; ANALISIS
                      </h4>
                      <div className="flex items-center gap-1">
                        {statusTabs.map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-2 py-1 rounded-md text-[9px] font-semibold transition-all ${
                              activeTab === tab
                                ? 'bg-indigo-600 text-white shadow-sm'
                                : 'bg-white text-gray-400 border border-gray-200 hover:text-gray-600'
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Category tags */}
                    <div className="flex items-center gap-2 mb-3">
                      {categoryTags.map((cat) => (
                        <button
                          key={cat.label}
                          className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[10px] font-semibold transition-all ${
                            cat.active
                              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                              : 'bg-white text-gray-500 border border-gray-200 hover:border-indigo-300'
                          }`}
                        >
                          <cat.icon className="w-3 h-3" />
                          {cat.label}
                        </button>
                      ))}
                    </div>

                    {/* Search bar */}
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Cari nama, bahan halal, resep masakan, jadwal kuliah, catatan..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-gray-200 text-[10px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all shadow-sm"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* === Sample Analysis Card === */}
                  <div className="relative rounded-2xl bg-white border border-gray-100 shadow-md overflow-hidden">
                    {/* Orange left accent border */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-amber-500" />

                    <div className="pl-4 pr-3.5 py-3.5">
                      {/* Title row */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 min-w-0">
                          {/* Radio indicator */}
                          <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-orange-400 flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                          </div>
                          <h4 className="text-[12px] font-bold text-gray-900 leading-snug">
                            Ide Masak: Daging Sapi Panggang dengan Sayuran
                          </h4>
                        </div>
                        <button className="flex items-center justify-center w-7 h-7 rounded-lg bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all flex-shrink-0">
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Detected ingredients */}
                      <p className="text-[10px] font-semibold text-gray-700 mb-2">
                        Bahan Terdeteksi di Foto:
                      </p>
                      <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-3">
                        {detectedIngredients.map((ing) => (
                          <div key={ing} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                            <span className="text-[10px] text-gray-600">{ing}</span>
                          </div>
                        ))}
                      </div>

                      {/* Collapsed detail */}
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-xl bg-amber-50 border border-amber-100 hover:bg-amber-100 transition-all"
                      >
                        <span className="text-[10px] font-semibold text-amber-700">
                          Bumbu &amp; Bahan Tambahan yang Dibutuhkan:
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 text-amber-600 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                      </button>

                      {expanded && (
                        <div className="mt-2 px-3 py-2.5 rounded-xl bg-amber-50/50 border border-amber-100/50 animate-fade-in">
                          <ul className="space-y-1">
                            {['Garam, lada, ketumbar', 'Minyak zaitun', 'Bawang bombay', 'Saus BBQ'].map((item) => (
                              <li key={item} className="flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                                <span className="text-[10px] text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* === Floating Bottom Navigation Bar === */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-white shadow-xl border border-gray-100">
                    {/* Tugas (active) */}
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
                      <Home className="w-4 h-4" />
                      <span className="text-[11px] font-bold">Tugas</span>
                    </button>
                    {/* Riwayat */}
                    <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
                      <History className="w-4 h-4" />
                      <span className="text-[11px] font-semibold">Riwayat</span>
                    </button>
                    {/* Menu */}
                    <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
                      <Menu className="w-4 h-4" />
                      <span className="text-[11px] font-semibold">Menu</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating sparkle accent */}
              <div className="absolute -top-3 -right-3 flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl shadow-amber-500/30 animate-bounce-soft">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
