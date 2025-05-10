
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Mail, Book, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Career() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
      <Navbar />
      <main className="flex-1 section-padding max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-6 flex gap-2 items-center">
          <User className="text-green-600" /> Join Our Team
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mb-8">
          Are you passionate about teaching and making a difference in children’s lives?
          Join TuteGuy Tutorials as a <span className="font-semibold">Tutor</span> or <span className="font-semibold">Support Staff</span>!
        </p>
        <ul className="mb-8 list-disc ml-7 text-green-700 text-lg">
          <li>Flexible hours and locations</li>
          <li>Supportive, growth-focused environment</li>
          <li>Competitive compensation</li>
        </ul>
        <p className="mb-8 text-lg">
          Interested? Fill the form below to apply!
        </p>
        {!submitted ? (
          <form
            className="bg-white rounded-2xl p-8 max-w-xl mx-auto shadow-lg border"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <User className="text-green-400" />
              <label className="font-semibold text-green-900 w-40" htmlFor="name">Full Name</label>
              <input required id="name" name="name" type="text" className="flex-1 rounded border px-3 py-2" />
            </div>
            <div className="mb-5 flex items-center gap-3">
              <Mail className="text-green-400" />
              <label className="font-semibold text-green-900 w-40" htmlFor="email">Email</label>
              <input required id="email" name="email" type="email" className="flex-1 rounded border px-3 py-2" />
            </div>
            <div className="mb-5 flex items-center gap-3">
              <Book className="text-green-400" />
              <label className="font-semibold text-green-900 w-40" htmlFor="role">Role Applying For</label>
              <select required id="role" name="role" className="flex-1 rounded border px-3 py-2 bg-green-50">
                <option value="">Select...</option>
                <option value="Tutor">Tutor</option>
                <option value="Support">Support Staff</option>
              </select>
            </div>
            <div className="mb-5 flex items-start gap-3">
              <MessageSquare className="text-green-400 mt-2" />
              <label className="font-semibold text-green-900 w-40" htmlFor="message">Why do you want to join?</label>
              <textarea required id="message" name="message" rows={4} className="flex-1 rounded border px-3 py-2" />
            </div>
            <button type="submit" className="green-btn w-full text-xl mt-2">Submit Application</button>
          </form>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-lg text-green-700 text-center max-w-xl mx-auto">
            <h3 className="text-3xl font-bold mb-3">Thank you for applying!</h3>
            <p className="text-lg">We'll get in touch with you soon.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
