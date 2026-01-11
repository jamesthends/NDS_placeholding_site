import { Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <MessageCircle className="w-8 h-8 text-blue-600" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Have questions about our services? We'd love to hear from you.
          Reach out and we'll respond as soon as we can.
        </p>

        <a
          href="mailto:info@theneurodiversityservice.co.uk"
          className="inline-flex items-center gap-3 text-xl text-blue-600 hover:text-blue-700 font-medium transition-colors group"
        >
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <Mail className="w-6 h-6" />
          </div>
          info@theneurodiversityservice.co.uk
        </a>
      </div>
    </section>
  );
}
