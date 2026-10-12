import { useState, useEffect } from 'react';
import { Zap, Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { label: 'Fitur', href: '#fitur' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-indigo-500/5 border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-2">
                <span className="text-lg font-extrabold text-gray-900 dark:text-white tracking-tight">
                  SnapTask AI
                </span>
                <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500">v1.4.0</span>
              </div>
              <span className="inline-flex w-fit items-center gap-1 mt-0.5 px-1.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[9px] font-bold tracking-wider shadow-sm">
                PRO
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-10 h-10 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <a
              href="#cta"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              Coba Aplikasi
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden glass border-t border-gray-200/50 dark:border-gray-800/50 animate-fade-in">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg"
              >
                <Download className="w-4 h-4" />
                Coba Aplikasi / Install PWA
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
