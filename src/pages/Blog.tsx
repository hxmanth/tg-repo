
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Newspaper, Book } from "lucide-react";
import { useState } from "react";

const posts = [
  {
    title: "Top 5 Study Tips for School Success",
    excerpt: "Learn simple habits that boost focus and learning at any age.",
    content: `1. Set a regular study schedule. 
2. Break study sessions into small, focused blocks.
3. Eliminate distractions (like phone notifications).
4. Summarize key points in your own words.
5. Review regularly, not just before exams.`,
    date: "Apr 2025",
  },
  {
    title: "How to Stay Motivated During Exams",
    excerpt: "Motivation is key. Here are ways to keep your drive up during exams!",
    content: `- Break goals into achievable tasks.\n- Celebrate small wins.\n- Study with friends to stay accountable.\n- Take regular short breaks.\n- Remind yourself of your end goals and progress.`,
    date: "Mar 2025",
  },
  {
    title: "Benefits of Group Learning Sessions",
    excerpt: "Discover how group tuitions can help your child learn better and build confidence.",
    content: `Learning with others helps clarify doubts, build confidence in expressing ideas, and keeps students engaged. TuteGuy’s group sessions are capped at 6 for good attention!`,
    date: "Feb 2025",
  },
];

export default function Blog() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
      <Navbar />
      <main className="flex-1 section-padding max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-9">
          <Newspaper className="w-8 h-8 text-green-700" />
          <h2 className="text-4xl font-bold text-green-800">Blog & Tips</h2>
        </div>
        <div className="flex flex-col gap-10">
          {posts.map((post, idx) => (
            <article key={idx} className="bg-white rounded-2xl shadow-lg p-7 border hover:shadow-xl transition group relative">
              <div
                className={`cursor-pointer`}
                onClick={() => setActive(active === idx ? null : idx)}
                role="button"
                tabIndex={0}
              >
                <h3 className="text-2xl font-semibold text-green-700 mb-2 flex gap-2 group-hover:underline">
                  <Book className="w-5 h-5 text-green-400" /> {post.title}
                </h3>
                <p className="text-lg text-gray-700 mb-2">{post.excerpt}</p>
                <span className="text-xs text-gray-500">{post.date}</span>
                {active === idx && (
                  <div className="mt-5 p-4 rounded bg-green-50 text-gray-800 text-base shadow-inner border-t border-green-100">
                    {post.content.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
                <span className="absolute top-5 right-6 text-green-400 text-xs bg-green-100 px-3 py-1 rounded-full shadow hidden group-hover:block">
                  {active === idx ? "Close" : "Read"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
