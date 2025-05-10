
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Parent of a 9th grader",
    text: "TuteGuy helped my son excel in math. The tutors are patient and know how to teach kids!",
    rating: 5
  },
  {
    name: "Priya Singh",
    role: "Parent of a 6th grader",
    text: "The online classes are engaging and fun. My daughter looks forward to every session.",
    rating: 5
  },
  {
    name: "Neha Patel",
    role: "Parent of twins in 4th grade",
    text: "We love the flexible home tuition services. It really fits our busy schedule.",
    rating: 5
  },
  {
    name: "Sohail Mistry",
    role: "Parent of a 12th grader",
    text: "The tutors motivate students to do their best. Regular feedback is a plus for parents.",
    rating: 5
  },
  {
    name: "Megha Rao",
    role: "Parent of an 8th grader",
    text: "Group sessions built my son's confidence. He actually enjoys learning now.",
    rating: 5
  },
  {
    name: "Rahul Gupta",
    role: "Parent of a 10th grader",
    text: "Quick support and easy demo booking! Thank you TuteGuy team.",
    rating: 5
  },
];

export default function Testimonials({ extra }: { extra?: boolean }) {
  const shown = extra ? testimonials : testimonials.slice(0, 3);
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          What Our Parents & Students Say
        </h2>
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((t, i) => (
            <div 
              key={i} 
              className="p-6 rounded-xl border bg-gradient-to-br from-white to-green-50 flex flex-col items-start shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] hover:border-green-300 hover:bg-gradient-to-br hover:from-white hover:to-green-100"
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-green-100 rounded-bl-xl flex items-center justify-center transform rotate-12 group-hover:bg-green-200 transition-colors">
                <Quote size={16} className="text-green-600 transform -rotate-12" />
              </div>
              <div className="flex gap-1 text-yellow-500 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-current" aria-label="star" />
                ))}
              </div>
              <blockquote className="italic text-gray-700 mb-4 flex-1 z-10">"{t.text}"</blockquote>
              <div className="mt-auto">
                <span className="font-semibold text-green-800 block">{t.name}</span>
                <span className="text-sm text-gray-600">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
