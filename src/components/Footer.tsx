import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-100 text-green-900 mt-20 py-12 px-6 rounded-t-2xl shadow-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-xl">TuteGuy Tutorials</h3>
          <p className="text-green-800 text-sm max-w-xs">
            Empowering students with personalized, holistic education that nurtures academic success and critical thinking.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-green-700">About Us</Link></li>
            <li><Link to="/services" className="hover:text-green-700">Our Services</Link></li>
            <li><Link to="/career" className="hover:text-green-700">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-green-700">Blog</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: info@tuteguy.in</li>
            <li>Phone: +91 80950 83041</li>
            <li>Address: No 17, Muniyappa Layout, Hongasandra, Bangalore-068</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/tuteguy-tutorials/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/tuteguytutorials.in/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-green-200 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="text-green-800 font-semibold">TuteGuy Tutorials</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
