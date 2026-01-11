import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is the CQC and why does registration matter?',
    answer: 'The Care Quality Commission (CQC) is the independent regulator of health and social care services in England. CQC registration means a service has been inspected and meets fundamental standards of quality and safety. Choosing a CQC-registered provider ensures you receive care from a properly regulated organisation that is accountable for maintaining high standards.',
  },
  {
    question: 'Why is The Neurodiversity Service awaiting CQC registration?',
    answer: 'We are committed to operating to the highest professional standards from day one. Rather than rushing to launch, we are taking the time to complete the full CQC registration process. This demonstrates our dedication to quality, safety, and providing you with a service you can trust completely.',
  },
  {
    question: 'When will the service be available?',
    answer: 'We are planning to launch in Spring 2026, subject to completing our CQC registration. By registering your interest now, you will be notified as soon as appointments become available and will be among the first to book.',
  },
  {
    question: 'What happens after I register my interest?',
    answer: 'Once you register, your details are securely stored and you will receive email updates about our launch progress. When we go live, you will be notified immediately and given priority access to book appointments. Early registrants benefit from zero waiting times as our founding clients.',
  },
  {
    question: 'Who will be conducting the assessments?',
    answer: 'Our assessments are conducted by highly experienced clinicians. Our core team and directors have over 10 years of direct experience working in child autism diagnostic pathways within the NHS. This extensive background ensures you receive expert, evidence-based assessments delivered with compassion and understanding.',
  },
  {
    question: 'What types of assessments do you offer?',
    answer: 'We offer comprehensive autism and ADHD assessments for both children and adults. Each assessment is tailored to the individual and includes thorough evaluation, clear diagnostic conclusions, and detailed recommendations. We also provide post-diagnostic support to help you understand and apply your diagnosis in everyday life.',
  },
  {
    question: 'Will my assessment be recognised by the NHS and other services?',
    answer: 'Yes. Our assessments are conducted by qualified healthcare professionals using evidence-based diagnostic tools and criteria. As a CQC-registered service, our assessments and reports are recognised by the NHS, schools, employers, and other healthcare providers.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our service, CQC registration, and what to expect.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
              >
                <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
