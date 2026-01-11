import { Users, FileCheck, MessageSquare, Heart, Compass } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Quality Over Quantity',
    description: 'A client-focused service where you are the priority, not a number.',
  },
  {
    icon: FileCheck,
    title: 'Evidence-Based Practice',
    description: 'NICE compliant assessments using gold-standard diagnostic tools.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Structured reports with practical, actionable recommendations.',
  },
  {
    icon: Heart,
    title: 'Warm & Compassionate',
    description: 'An understanding approach throughout your entire journey with us.',
  },
  {
    icon: Compass,
    title: 'Ongoing Support',
    description: 'Strong focus on post-diagnostic support to help you thrive.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We believe in providing exceptional care with genuine understanding and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors group"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
