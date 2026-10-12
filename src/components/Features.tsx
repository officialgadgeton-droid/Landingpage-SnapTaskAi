import { ScanLine, ChefHat, CalendarClock, Check } from 'lucide-react';

const features = [
  {
    icon: ScanLine,
    badge: 'Halal Checker',
    title: 'Scan Komposisi Halal',
    desc: 'AI membaca daftar komposisi, mengecek additive E-number, gelatin/enzyme, dan menandai status halal kritis dengan jelas.',
    color: 'emerald',
    gradient: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-200 dark:border-emerald-800/50',
    text: 'text-emerald-600 dark:text-emerald-400',
    points: ['Deteksi E-number additive', 'Cek gelatin & enzyme', 'Status halal kritis'],
    image: '/halal-snack.jpg',
  },
  {
    icon: ChefHat,
    badge: 'Chef AI',
    title: 'Chef AI & Stok Kulkas',
    desc: 'Foto isi kulkas atau bahan mentah, AI mendeteksi item (daging sapi, telur, tomat, bawang) dan menghasilkan resep lezat dengan tutorial langkah demi langkah.',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-200 dark:border-amber-800/50',
    text: 'text-amber-600 dark:text-amber-400',
    points: ['Deteksi bahan otomatis', 'Resep dari sisa stok', 'Tutorial langkah demi langkah'],
    image: 'https://images.pexels.com/photos/35594805/pexels-photo-35594805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: CalendarClock,
    badge: 'Jadwal & Kalender',
    title: 'Jadwal Kuliah & Pengingat Kalender',
    desc: 'Scan jadwal sekolah/kuliah dan sinkronisasi otomatis langsung ke Google/Apple Calendar dengan alarm pintar.',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800/50',
    text: 'text-purple-600 dark:text-purple-400',
    points: ['Scan jadwal kuliah', 'Sync Google/Apple Calendar', 'Alarm pintar otomatis'],
    image: 'https://images.pexels.com/photos/8640284/pexels-photo-8640284.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function Features() {
  return (
    <section id="fitur" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-bold tracking-wider mb-4">
            FITUR UTAMA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Tiga Pilar AI untuk Kehidupan Sehari-hari
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Dari cek halal sampai jadwal kuliah — semua dengan satu kali scan foto.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative rounded-3xl ${f.bg} border-2 ${f.border} p-6 sm:p-7 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-fade-in-up`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Decorative blur */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${f.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />

              {/* Image */}
              <div className="relative mb-5 rounded-2xl overflow-hidden shadow-lg h-40">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${f.gradient} opacity-20`} />
                <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${f.gradient} text-white text-[10px] font-bold tracking-wider shadow-lg`}>
                  {f.badge}
                </div>
              </div>

              {/* Icon */}
              <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${f.gradient} shadow-lg mb-4`}>
                <f.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{f.desc}</p>

              <ul className="space-y-2">
                {f.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <div className={`flex items-center justify-center w-5 h-5 rounded-full ${f.bg} ${f.border} border`}>
                      <Check className={`w-3 h-3 ${f.text}`} />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
