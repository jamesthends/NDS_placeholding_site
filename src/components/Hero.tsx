import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex items-center justify-center bg-gradient-to-b from-slate-50 to-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-8">
          Coming Soon
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
          Expert Neurodiversity
          <span className="block text-blue-600">Assessments & Support</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto">
          Specialists in Autism and ADHD Assessments for Children and Adults
        </p>

        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
          Comprehensive, evidence-based assessments with a strong focus on
          post-diagnostic support to help you understand, adapt, and thrive.
        </p>

        <button
          onClick={scrollToSignup}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 group"
        >
          Register Your Interest
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
