import { Shield, Award, Building2, Stethoscope } from 'lucide-react';

const credentials = [
  {
    icon: Shield,
    title: 'NICE Compliant',
    description: 'Following national guidelines',
  },
  {
    icon: Award,
    title: 'HCPC Registered',
    description: 'Registered practitioners',
  },
  {
    icon: Building2,
    title: 'CQC Registration',
    description: 'Pending approval',
  },
  {
    icon: Stethoscope,
    title: 'NHS Right to Choose',
    description: 'Coming soon',
  },
];

export default function Credentials() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Professional Standards
          </h2>
          <p className="text-slate-600">
            Committed to the highest levels of professional practice
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <credential.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">
                {credential.title}
              </h3>
              <p className="text-sm text-slate-500">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
