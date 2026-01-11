import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const interestOptions = [
  { value: '', label: 'Select your interest area' },
  { value: 'Child Autism', label: 'Child Autism Assessment' },
  { value: 'Adult Autism', label: 'Adult Autism Assessment' },
  { value: 'Child ADHD', label: 'Child ADHD Assessment' },
  { value: 'Adult ADHD', label: 'Adult ADHD Assessment' },
  { value: 'Post-Diagnostic Support', label: 'Post-Diagnostic Support' },
  { value: 'General Enquiry', label: 'General Enquiry' },
];

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interestArea, setInterestArea] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !interestArea) {
      setStatus('error');
      setErrorMessage('Please fill in all fields');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const { error } = await supabase
      .from('interest_signups')
      .insert([{ name: name.trim(), email: email.trim(), interest_area: interestArea }]);

    if (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      return;
    }

    setStatus('success');
    setName('');
    setEmail('');
    setInterestArea('');
  };

  return (
    <section id="signup" className="py-24 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Register Your Interest
          </h2>
          <p className="text-lg text-slate-600">
            Be the first to know when we launch. Sign up to receive updates and priority booking.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              Thank You!
            </h3>
            <p className="text-slate-600 mb-6">
              We've received your registration. We'll be in touch soon with updates about our launch.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Register another interest
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">
                  Area of Interest
                </label>
                <select
                  id="interest"
                  value={interestArea}
                  onChange={(e) => setInterestArea(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all bg-white"
                >
                  {interestOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Register Interest
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
