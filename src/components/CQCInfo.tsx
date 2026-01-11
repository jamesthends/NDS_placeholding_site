import { ShieldCheck, CheckCircle, FileCheck, Eye } from 'lucide-react';

const cqcBenefits = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'CQC inspects services to ensure they meet fundamental standards of quality and safety',
  },
  {
    icon: FileCheck,
    title: 'Professional Standards',
    description: 'Registered providers must demonstrate proper governance, qualified staff, and evidence-based practices',
  },
  {
    icon: Eye,
    title: 'Accountability',
    description: 'CQC monitors services continuously and takes action if standards are not maintained',
  },
  {
    icon: CheckCircle,
    title: 'Recognition',
    description: 'Assessments from CQC-registered providers are recognised by the NHS, schools, and employers',
  },
];

export default function CQCInfo() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              CQC Registration
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Why CQC Registration Matters
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              The Care Quality Commission (CQC) is the independent regulator of health and social
              care services in England. They ensure services provide safe, effective, compassionate,
              and high-quality care.
            </p>
            <p className="text-slate-600 mb-6">
              By pursuing CQC registration before launching, we demonstrate our commitment to
              operating at the highest standards from day one. This means you can be confident
              that our assessments meet rigorous quality and safety requirements.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <h3 className="font-semibold text-blue-900 mb-2">Our Commitment</h3>
              <p className="text-blue-800 text-sm">
                We believe that proper regulation isn't a hurdle, it's a foundation. Taking the time
                to complete CQC registration ensures that when we open our doors in Spring 2026,
                you'll receive care from a service that has been thoroughly vetted and approved.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {cqcBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
