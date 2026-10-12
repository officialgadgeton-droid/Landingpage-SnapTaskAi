import { useState } from 'react';
import { Search, Camera, Upload, ChefHat, Clock, Flame, Utensils, X } from 'lucide-react';

const categories = ['Semua Kategori', 'Kuliner', 'Pendidikan'];

const sampleResults = [
  {
    category: 'Kuliner',
    type: 'Ide Masak',
    title: 'Daging Sapi Panggang dengan Sayuran',
    time: '45 menit',
    difficulty: 'Mudah',
    icon: ChefHat,
    gradient: 'from-amber-500 to-orange-500',
    ingredients: ['Daging Sapi', 'Bawang Putih', 'Tomat', 'Wortel', 'Rosemary'],
  },
  {
    category: 'Kuliner',
    type: 'Resep Cepat',
    title: 'Telur Dadar Sayur',
    time: '15 menit',
    difficulty: 'Mudah',
    icon: Utensils,
    gradient: 'from-orange-500 to-red-500',
    ingredients: ['Telur', 'Bayam', 'Bawang', 'Cabai'],
  },
  {
    category: 'Pendidikan',
    type: 'Jadwal Kuliah',
    title: 'Matematika Diskrit — Ruang 3.2',
    time: '08:00 - 09:40',
    difficulty: 'Wajib Hadir',
    icon: Clock,
    gradient: 'from-purple-500 to-violet-600',
    ingredients: ['Senin', 'Ruang 3.2', 'Dosen: Dr. Andi', 'Alarm aktif'],
  },
];

export default function AppMockup() {
  const [activeCategory, setActiveCategory] = useState('Semua Kategori');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = sampleResults.filter(
    (r) =>
      (activeCategory === 'Semua Kategori' || r.category === activeCategory) &&
      (searchQuery === '' || r.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            {/* Phone frame */}
            <div className="relative w-full max-w-sm">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-2xl" />

              <div className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] border-4 border-gray-900 dark:border-gray-800 shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="bg-gray-900 dark:bg-black px-6 py-2 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold">9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px]">SnapTask AI</span>
                    <span className="px-1.5 py-0.5 rounded bg-amber-500 text-[8px] font-bold">PRO</span>
                  </div>
                </div>

                {/* App content */}
                <div className="p-5 bg-gray-50 dark:bg-gray-950 min-h-[480px] max-h-[480px] overflow-y-auto">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">Tugas Saya</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{filtered.length} hasil ditemukan</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform">
                        <Camera className="w-4 h-4" />
                      </button>
                      <button className="flex items-center justify-center w-9 h-9 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
                        <Upload className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Search bar */}
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Cari tugas..."
                      className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Category filters */}
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                          activeCategory === cat
                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-3">
                    {filtered.map((result, i) => (
                      <div
                        key={result.title}
                        className="group p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all animate-slide-in"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${result.gradient} shadow-md flex-shrink-0`}>
                            <result.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-gradient-to-r ${result.gradient} text-white`}>
                                {result.type}
                              </span>
                              <span className="text-[10px] text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {result.time}
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-snug truncate">
                              {result.title}
                            </h4>
                            <div className="flex items-center gap-1 mt-1 text-[10px] text-gray-500 dark:text-gray-400">
                              <Flame className="w-3 h-3" />
                              {result.difficulty}
                            </div>
                          </div>
                        </div>
                        {/* Ingredient pills */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {result.ingredients.map((ing) => (
                            <span
                              key={ing}
                              className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-[10px] font-medium"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}

                    {filtered.length === 0 && (
                      <div className="text-center py-12">
                        <div className="text-3xl mb-2">🔍</div>
                        <p className="text-sm text-gray-400">Tidak ada hasil untuk "{searchQuery}"</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom tab bar */}
                <div className="bg-gray-900 dark:bg-black px-6 py-3 flex items-center justify-around">
                  {['Home', 'Scan', 'Jadwal', 'Profil'].map((tab, i) => (
                    <div
                      key={tab}
                      className={`flex flex-col items-center gap-1 text-[10px] ${
                        i === 0 ? 'text-indigo-400' : 'text-gray-500'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-indigo-400' : 'bg-transparent'}`} />
                      {tab}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating scan button */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-500/40 animate-bounce-soft">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
