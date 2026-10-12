import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  FileText, 
  AlertTriangle, 
  ShieldAlert, 
  Copyright, 
  Sparkles, 
  Mail, 
  CheckCircle2 
} from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-300 py-12 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
        
        {/* Tombol Kembali */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 mb-8 transition group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Kembali ke Beranda</span>
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Syarat dan Ketentuan Layanan</h1>
              <span className="text-[10px] bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full font-bold">
                SnapTask AI
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Versi 1.4.0 • Terakhir Diperbarui: 2026</p>
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-8 border-b border-slate-800 pb-6">
          Selamat datang di <strong>SnapTask AI</strong>. Dengan mengakses atau menggunakan aplikasi kami, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh ketentuan layanan di bawah ini.
        </p>

        {/* Isi Ketentuan */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-300">

          {/* 1. Deskripsi Layanan */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              1. Deskripsi Layanan
            </h2>
            <p className="text-slate-400">
              SnapTask AI adalah platform utilitas berbasis kecerdasan buatan (Artificial Intelligence) yang menyediakan fitur ekstraksi tugas visual, pendeteksi komposisi produk pangan (Halal Checker), asisten resep kulkas (Chef AI), dan sinkronisasi jadwal kalender.
            </p>
          </section>

          {/* 2. Batasan Tanggung Jawab Hasil AI */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </div>
              2. Batasan Tanggung Jawab Hasil AI (Disclaimer AI)
            </h2>
            <ul className="space-y-3 text-slate-400 pl-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span><strong>Akurasi Analisis:</strong> Analisis visual menggunakan teknologi pemrosesan kecerdasan buatan pihak ketiga. Foto buram, pencahayaan minim, atau kemasan rusak dapat memengaruhi hasil ekstraksi data.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span><strong>Fitur Halal Checker:</strong> Pemindaian E-number, enzim, atau aditif pangan berfungsi sebagai referensi skrining awal. Fitur ini tidak menggantikan fatwa atau sertifikasi halal resmi dari lembaga berwenang (seperti BPJPH / MUI).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span><strong>Fitur Chef AI:</strong> Rekomendasi resep dihasilkan otomatis. Pengguna tetap bertanggung jawab memeriksa kesegaran, kebersihan, dan potensi alergi pada bahan makanan sebelum dikonsumsi.</span>
              </li>
            </ul>
          </section>

          {/* 3. Penggunaan yang Diperbolehkan */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center">
                <ShieldAlert className="w-4 h-4" />
              </div>
              3. Penggunaan yang Diperbolehkan
            </h2>
            <p className="text-slate-400 mb-2">
              Pengguna dilarang menggunakan SnapTask AI untuk:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-400">
              <li>Mengunggah gambar yang melanggar hukum, bermuatan pornografi, atau melanggar hak cipta pihak lain.</li>
              <li>Mencoba merekayasa balik (reverse engineering), mengganggu infrastruktur aplikasi, atau menyalahgunakan kuota API AI.</li>
            </ul>
          </section>

          {/* 4. Hak Kekayaan Intelektual */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Copyright className="w-4 h-4" />
              </div>
              4. Hak Kekayaan Intelektual
            </h2>
            <p className="text-slate-400">
              Seluruh merek dagang, desain antarmuka, logo, dan kode sumber SnapTask AI adalah hak cipta penuh dari <strong>Gadget On Official</strong>. Anda memegang kepemilikan mutlak atas foto dan catatan tugas pribadi yang Anda simpan di perangkat Anda.
            </p>
          </section>

          {/* 5. Ketersediaan Layanan */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              5. Ketersediaan Layanan & Modifikasi
            </h2>
            <p className="text-slate-400">
              Kami berhak menambah fitur, memperbaiki antarmuka, atau memperbarui ketentuan ini sewaktu-waktu demi peningkatan kenyamanan dan keamanan layanan.
            </p>
          </section>

          {/* 6. Kontak Pengembang */}
          <section className="bg-slate-800/40 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition">
            <h2 className="text-base font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              6. Kontak & Bantuan Pengembang
            </h2>
            <p className="text-slate-400 mb-3">
              Jika Anda memiliki pertanyaan seputar ketentuan layanan ini, silakan hubungi tim kami:
            </p>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/80 space-y-1.5 text-xs">
              <p>Email: <a href="mailto:officialgadgeton@gmail.com" className="text-indigo-400 hover:underline">officialgadgeton@gmail.com</a></p>
              <p>WhatsApp: <a href="https://wa.me/6287736000922" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">+62 877-3600-0922</a></p>
              <p>Pengembang: <strong>Gadget On Official</strong></p>
            </div>
          </section>

        </div>

        {/* Footer */}
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

export default TermsOfService;
