
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How do I book a demo session?",
    answer: "You can book a free demo session by filling out the contact form on our website or calling us directly. Our team will arrange a convenient time slot with an appropriate tutor."
  },
  {
    question: "What subjects do you offer tutoring for?",
    answer: "We offer tutoring for all major subjects including Mathematics, Science, English, Hindi, Social Studies, Computer Science, and specialized preparation for Olympiads and competitive exams."
  },
  {
    question: "How much does the tutoring cost?",
    answer: "Our tutoring fees vary based on grade level, subject, and session format (one-on-one or group). Please contact us for a personalized quote based on your specific requirements."
  },
  {
    question: "Can I choose my tutor?",
    answer: "Yes! After the demo session, you can request to continue with the same tutor or ask to try another tutor if you feel a different teaching style would be more suitable."
  },
  {
    question: "How long are the tutoring sessions?",
    answer: "Standard sessions are 60 minutes long, but we offer flexibility based on the student's age, attention span, and learning needs. For younger students, we may recommend 45-minute sessions."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-green-50 rounded-2xl shadow-inner">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'shadow-md bg-white' : 'bg-green-50/50'
              }`}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center gap-4"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="font-semibold text-lg text-green-900">{faq.question}</h3>
                <span className="text-green-600 flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
