import { Zap, Github, Twitter, Instagram, Mail, MessageCircle } from 'lucide-react';

const links = {
  Produk: [
    { label: 'Fitur', href: '#fitur' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Install PWA', href: '#cta' },
  ],
  'Sumber Daya': [
    { label: 'Dokumentasi', href: '#' },
    { label: 'Tutorial', href: '#' },
    { label: 'Kebijakan Privasi', href: '#privacy' },
    { label: 'Syarat Layanan', href: '#' },
  ],
  Kontak: [
    { label: 'Email', href: 'mailto:officialgadgeton@gmail.com' },
    { label: 'WhatsApp', href: 'https://wa.me/6287736000922' },
    { label: 'Komunitas', href: '#' },
    { label: 'Bantuan', href: '#' },
  ],
};

const socials = [
  { icon: Github, href: 'https://github.com/officialgadgeton-droid', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: 'mailto:officialgadgeton@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 dark:bg-black text-gray-400 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-extrabold text-white">SnapTask AI</span>
                  <span className="text-[10px] font-bold text-gray-500">v1.4.0</span>
                </div>
                <span className="inline-flex items-center gap-1 mt-0.5 px-1.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[9px] font-bold tracking-wider">
                  PRO
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Ekstraksi Tugas Visual, Halal Checker, & Asisten AI Harian.
              Scan foto untuk menganalisis komposisi, resep, dan jadwal — semua dalam satu aplikasi.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white transition-all hover:scale-105"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-gray-400 hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      {link.label === 'WhatsApp' && <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />}
                      {link.label === 'Email' && <Mail className="w-3.5 h-3.5 text-indigo-400" />}
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Powered by */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800">
          <div className="text-xs text-gray-500 text-center sm:text-left">
            Powered by{' '}
            <span className="font-bold text-gray-300">Gadget On Official</span>
          </div>
          <div className="text-xs text-gray-500 text-center sm:text-right">
            Copyright &copy; 2026 SnapTask AI. Hak cipta dilindungi.
          </div>
        </div>
      </div>
    </footer>
  );
}
