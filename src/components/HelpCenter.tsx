import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  HelpCircle, 
  Camera, 
  WifiOff, 
  RotateCcw, 
  FileQuestion, 
  Mail, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';

interface HelpCenterProps {
  onBack: () => void;
}

export const HelpCenter: React.FC<HelpCenterProps> = ({ onBack }) => {
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

        {/* Header Bantuan */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Pusat Bantuan</h1>
              <span className="text-[10px] bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full font-bold">
                SnapTask AI
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Panduan Penyelesaian Masalah & Dukungan Pengguna</p>
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-8 border-b border-slate-800 pb-6">
          Butuh bantuan saat menggunakan SnapTask AI? Temukan solusi cepat untuk masalah umum yang sering dihadapi di bawah ini, atau hubungi langsung pengembang kami.
        </p>

        {/* Daftar Solusi Kendala Populer */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-300">

          {/* 1. Kendala Kamera / Gambar */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Camera className="w-4 h-4" />
              </div>
              Kamera Tidak Bisa Terbuka atau Gambar Gagal Terbaca
            </h2>
            <ul className="space-y-1.5 text-slate-400 list-disc list-inside pl-1">
              <li>Pastikan izin kamera (*camera permission*) di browser telah diizinkan (*Allow*).</li>
              <li>Pastikan pencahayaan cukup terang saat memotret tabel komposisi atau teks jadwal.</li>
              <li>Hindari pantulan cahaya lampu atau bayangan tajam pada kemasan plastik.</li>
            </ul>
          </section>

          {/* 2. Gagal Analisis AI */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <WifiOff className="w-4 h-4" />
              </div>
              Proses Pemindaian AI Berhenti atau Loading Lama
            </h2>
            <p className="text-slate-400 mb-2">
              Analisis visual membutuhkan pertukaran data ke server AI secara aman. Periksa hal berikut:
            </p>
            <ul className="space-y-1.5 text-slate-400 list-disc list-inside pl-1">
              <li>Pastikan koneksi internet ponsel atau PC Anda stabil saat menekan tombol scan.</li>
              <li>Jika menggunakan kuota API pribadi, periksa kembali saldo limit OpenAI API Anda.</li>
            </ul>
          </section>

          {/* 3. Cadangan & Reset Data */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <RotateCcw className="w-4 h-4" />
              </div>
              Data Tersimpan di Mana & Cara Mencadangkannya?
            </h2>
            <p className="text-slate-400">
              Semua data disimpan di peramban (<code className="text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded text-xs">localStorage</code>) perangkat Anda. Disarankan untuk rutin menekan tombol <strong>Export/Backup JSON</strong> di menu aplikasi agar data tidak hilang ketika riwayat browser dibersihkan.
            </p>
          </section>

          {/* 4. Dukungan Langsung */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <FileQuestion className="w-4 h-4" />
              </div>
              Masih Menemukan Kendala atau Bug Aplikasi?
            </h2>
            <p className="text-slate-400 mb-4">
              Tim pengembang siap membantu Anda secara langsung melalui saluran bantuan berikut:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <a 
                href="mailto:officialgadgeton@gmail.com" 
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-indigo-500 transition group"
              >
                <Mail className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-white">Kirim Email</div>
                  <div className="text-slate-400">officialgadgeton@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://wa.me/6287736000922" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-emerald-500 transition group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-white">Chat WhatsApp</div>
                  <div className="text-slate-400">+62 877-3600-0922</div>
                </div>
              </a>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
          <p>Dukungan Resmi oleh <span className="text-slate-400 font-semibold">Gadget On Official</span></p>
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

export default HelpCenter;
