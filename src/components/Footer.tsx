import { Sparkles, Mail, Shield, Award, Building2, Stethoscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold">
                The Neurodiversity Service
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Expert Autism and ADHD assessments for children and adults,
              with comprehensive post-diagnostic support to help you thrive.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-300">Contact</h3>
            <a
              href="mailto:info@theneurodiversityservice.co.uk"
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@theneurodiversityservice.co.uk
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-t border-slate-800 mb-8">
          <div className="flex items-center gap-2 text-slate-400">
            <Shield className="w-5 h-5" />
            <span className="text-sm">NICE Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Award className="w-5 h-5" />
            <span className="text-sm">HCPC Registered</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Building2 className="w-5 h-5" />
            <span className="text-sm">CQC Pending</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Stethoscope className="w-5 h-5" />
            <span className="text-sm">NHS RtC Coming Soon</span>
          </div>
        </div>

        <div className="text-center text-slate-500 text-sm space-y-1">
          <p>&copy; {new Date().getFullYear()} The Neurodiversity Service. All rights reserved.</p>
          <p>Company Registration No. 16496089</p>
        </div>
      </div>
    </footer>
  );
}
