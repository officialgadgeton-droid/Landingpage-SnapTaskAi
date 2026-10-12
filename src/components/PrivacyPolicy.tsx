import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  HardDrive, 
  Camera, 
  Cpu, 
  Trash2, 
  Mail, 
  Sparkles,
  Lock
} from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-300 py-12 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
        
        {/* Tombol Navigasi Kembali */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 mb-8 transition group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Kembali ke Beranda</span>
        </button>

        {/* Header Kebijakan Privasi */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Kebijakan Privasi</h1>
              <span className="text-[10px] bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full font-bold">
                SnapTask AI
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Versi 1.4.0 • Terakhir Diperbarui: 2026</p>
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-8 border-b border-slate-800 pb-6">
          Kami di <strong>Gadget On Official</strong> berkomitmen penuh untuk menjaga transparansi dan privasi data pengguna saat mengoperasikan aplikasi <strong>SnapTask AI</strong>.
        </p>

        {/* Daftar 6 Poin Kebijakan Privasi */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-300">

          {/* 1. Komitmen Privasi */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              1. Komitmen Privasi
            </h2>
            <p className="text-slate-400">
              SnapTask AI menghargai dan melindungi privasi Anda. Kebijakan ini menjelaskan bagaimana data, foto, dan informasi tugas Anda dikelola secara aman saat Anda menggunakan layanan kami.
            </p>
          </section>

          {/* 2. Penyimpanan Lokal Perangkat */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <HardDrive className="w-4 h-4" />
              </div>
              2. Penyimpanan Lokal Perangkat (Client-Side Storage)
            </h2>
            <p className="text-slate-400">
              Seluruh daftar tugas, riwayat pemindaian, resep, jadwal pelajaran, dan setelan tema disimpan secara eksklusif di penyimpanan browser perangkat Anda (<code className="text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded text-xs">localStorage</code>). Kami tidak memiliki peladen pangkalan data tersendiri untuk menampung, melacak, atau memperjualbelikan data Anda kepada pihak lain.
            </p>
          </section>

          {/* 3. Akses Kamera & Berkas Galeri */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Camera className="w-4 h-4" />
              </div>
              3. Akses Kamera & Berkas Galeri
            </h2>
            <p className="text-slate-400">
              Aplikasi hanya mengakses kamera atau galeri ketika Anda secara sadar menekan tombol ambil foto atau memilih gambar tangkapan layar. Foto tersebut diproses secara langsung untuk ekstraksi visual dan tidak disimpan di peladen publik.
            </p>
          </section>

          {/* 4. Pemrosesan Kecerdasan Buatan */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              4. Pemrosesan Kecerdasan Buatan (AI API)
            </h2>
            <p className="text-slate-400">
              Untuk menganalisis teks, spesifikasi perangkat, jadwal, dan bahan masakan, gambar dikirimkan melalui jalur terenkripsi aman (HTTPS/TLS) ke OpenAI API. Gambar hanya diproses sementara selama inferensi berlangsung dan tidak digunakan sebagai materi pelatihan model kecerdasan buatan publik.
            </p>
          </section>

          {/* 5. Hak Kendali & Penghapusan Data */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Trash2 className="w-4 h-4" />
              </div>
              5. Hak Kendali & Penghapusan Data
            </h2>
            <p className="text-slate-400">
              Anda memiliki hak mutlak atas seluruh data Anda. Kapan pun Anda menghendaki, Anda dapat mengunduh berkas cadangan JSON, mengekspor catatan teks, menghapus tugas satuan, atau menghapus riwayat pemindaian secara permanen melalui tombol di antarmuka aplikasi.
            </p>
          </section>

          {/* 6. Kontak & Pengembang */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              6. Kontak & Pengembang
            </h2>
            <p className="text-slate-400 mb-3">
              Apabila Anda memiliki pertanyaan, saran, atau masukan mengenai kebijakan privasi ini, silakan hubungi saluran resmi pengembang kami:
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300">
              <Mail className="w-4 h-4 text-indigo-400" />
              <a href="mailto:officialgadgeton@gmail.com" className="text-indigo-400 hover:underline">
                officialgadgeton@gmail.com
              </a>
            </div>
          </section>

        </div>

        {/* Footer Card */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
          <p>Powered by <span className="text-slate-400 font-semibold">Gadget On Official</span></p>
          <button 
            onClick={onBack} 
            className="text-indigo-400 hover:text-indigo-300 transition font-medium"
          >
            ← Kembali ke Halaman Utama
          </button>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
