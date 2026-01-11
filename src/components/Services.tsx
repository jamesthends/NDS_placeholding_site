import { Baby, User, Sparkles, Brain, Zap, Clock } from 'lucide-react';

const services = [
  {
    icon: Baby,
    title: 'Child Autism Assessment',
    description: 'Specialist assessments for children and young people, tailored to their developmental stage and individual needs.',
    color: 'bg-sky-50 text-sky-600',
    hoverBg: 'hover:bg-sky-50',
  },
  {
    icon: User,
    title: 'Adult Autism Assessment',
    description: 'Comprehensive evaluations for adults seeking clarity and understanding about their experiences.',
    color: 'bg-blue-50 text-blue-600',
    hoverBg: 'hover:bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Child ADHD Assessment',
    description: 'Thorough ADHD assessments for children and young people, helping families understand and support their child.',
    color: 'bg-amber-50 text-amber-600',
    hoverBg: 'hover:bg-amber-50',
  },
  {
    icon: Brain,
    title: 'Adult ADHD Assessment',
    description: 'Detailed ADHD evaluations for adults, providing insight into attention, focus, and executive functioning.',
    color: 'bg-rose-50 text-rose-600',
    hoverBg: 'hover:bg-rose-50',
  },
  {
    icon: Sparkles,
    title: 'Post-Diagnostic Support',
    description: 'Continued guidance and practical strategies to help you understand your diagnosis, adapt, and thrive.',
    color: 'bg-emerald-50 text-emerald-600',
    hoverBg: 'hover:bg-emerald-50',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Our Services
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-4">
            <Clock className="w-4 h-4" />
            Launching Spring 2026
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive assessment and support services for neurodivergent individuals of all ages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl bg-white ${service.hoverBg} transition-all hover:shadow-lg group cursor-default relative overflow-hidden`}
            >
              <div className="absolute top-4 right-4">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                  Coming Soon
                </span>
              </div>
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
