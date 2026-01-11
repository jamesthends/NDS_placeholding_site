import { Sparkles, Mail } from 'lucide-react';

export default function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-100 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <span className="text-xl font-semibold text-slate-800">
              The Neurodiversity Service
            </span>
            <span className="text-xs sm:text-sm text-amber-600 font-medium">
              Launching Spring 2026
            </span>
          </div>
        </div>
        <button
          onClick={scrollToContact}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span className="hidden sm:inline">Contact</span>
        </button>
      </div>
    </header>
  );
}
