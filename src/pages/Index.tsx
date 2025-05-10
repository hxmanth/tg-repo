import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BookOpen, Users, CheckCircle, Sparkles } from "lucide-react";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>TuteGuy Tutorials - Premium Home Tutoring Services in Bangalore</title>
        <meta name="description" content="TuteGuy Tutorials offers personalized home tutoring services for students aged 4-18 in Bangalore. Expert tutors, flexible schedules, and comprehensive academic support across all subjects including Math, Science, English, and more." />
        <meta name="keywords" content="home tutoring bangalore, private tutor bangalore, online tutoring india, math tutor bangalore, science tutor bangalore, cbse tutor, icse tutor, home tuition bangalore" />
        <link rel="canonical" href="https://tuteguy.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="TuteGuy Tutorials - Premium Home Tutoring Services in Bangalore" />
        <meta property="og:description" content="Expert home tutoring services for students aged 4-18. Personalized learning, experienced tutors, and comprehensive academic support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tuteguy.com" />
        <meta property="og:image" content="https://tuteguy.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TuteGuy Tutorials - Premium Home Tutoring Services" />
        <meta name="twitter:description" content="Expert home tutoring services for students aged 4-18. Personalized learning, experienced tutors, and comprehensive academic support." />
        <meta name="twitter:image" content="https://tuteguy.com/logo.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "TuteGuy Tutorials",
              "url": "https://tuteguy.com",
              "logo": "https://tuteguy.com/logo.png",
              "description": "High-quality tuition for ages 4-18. Private home tuitions, engaging online classes, and group sessions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No 17, Muniyappa Layout",
                "addressLocality": "Hongasandra",
                "addressRegion": "Bangalore Urban",
                "addressCountry": "INDIA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 80950 83041",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Kannada"]
              },
              "sameAs": [
                "https://facebook.com/tuteguy",
                "https://twitter.com/tuteguy",
                "https://instagram.com/tuteguy"
              ],
              "offers": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Home Tutoring Services",
                  "description": "Personalized home tutoring for students aged 4-18"
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "Bangalore"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="py-12 md:py-20 px-4 sm:px-6 text-center w-full" aria-labelledby="welcome-heading">
            <div className="max-w-5xl mx-auto">
              <h1 id="welcome-heading" className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-800 mb-6 tracking-tight drop-shadow">
                Welcome to <span className="text-green-600">TuteGuy Tutorials</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
                High-quality tuition for ages 4-18. <br className="hidden sm:block" />
                Private home tuitions, engaging online classes, and group sessions led by experienced, caring educators.
              </p>
              <a href="https://wa.me/+918095083041" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors duration-300 text-xl px-8 py-4 mb-8 shadow-lg hover:shadow-xl hover:scale-105">
                Book Demo Now
              </a>

              {/* Stats/Numbers Section */}
              <div className="grid grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
                <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:bg-opacity-100">
                  <span className="block text-3xl md:text-4xl font-bold text-green-600">80++</span>
                  <span className="text-gray-600">Happy Students</span>
                </div>
                <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:bg-opacity-100">
                  <span className="block text-3xl md:text-4xl font-bold text-green-600">12+</span>
                  <span className="text-gray-600">Subjects</span>
                </div>
                <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:bg-opacity-100">
                  <span className="block text-3xl md:text-4xl font-bold text-green-600">99%</span>
                  <span className="text-gray-600">Success Rate</span>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Why Choose TuteGuy Tutorials</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-green-300 hover:bg-gradient-to-br hover:from-white hover:to-green-100 flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 transition-colors hover:bg-green-200">
                    <BookOpen className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Expert Educators</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>Experience with CBSE, ICSE & IB boards</li>
                    <li>Regular teacher training programs</li>
                    <li>Subject matter experts for all grades</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-green-300 hover:bg-gradient-to-br hover:from-white hover:to-green-100 flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 transition-colors hover:bg-green-200">
                    <Sparkles className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Personalized Learning</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>Customized learning plans</li>
                    <li>Regular progress assessments</li>
                    <li>Adaptive teaching methods</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-green-300 hover:bg-gradient-to-br hover:from-white hover:to-green-100 flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 transition-colors hover:bg-green-200">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Flexible Options</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>1-on-1 Private Tuitions</li>
                    <li>Online classes with digital tools</li>
                    <li>Small group sessions (up to 6 students)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Academic Support Section */}
          <section className="py-16 px-4 sm:px-6 bg-green-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Comprehensive Academic Support</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Mathematics & Science",
                  "English & Other Languages",
                  "Social Studies",
                  "Computer Science & Coding",
                  "Competitive Exam Prep",
                  "Homework Support",
                  "Holiday Learning Programs",
                  "Study Skills Development",
                  "Project Assistance"
                ].map((subject, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:bg-green-50">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-800">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <Testimonials extra />

          {/* FAQ Section */}
          <div className="px-4 sm:px-6 py-8">
            <div className="max-w-6xl mx-auto">
              <FAQ />
            </div>
          </div>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 text-center">
            <div className="max-w-4xl mx-auto bg-green-600 text-white rounded-2xl p-8 sm:p-12 shadow-xl hover:shadow-2xl hover:bg-green-700 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
              <p className="text-xl mb-8">Book a free demo session and experience the TuteGuy difference!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/+918095083041" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-green-700 rounded-lg font-bold text-lg hover:bg-green-100 transition-colors shadow-md hover:shadow-lg hover:scale-105">
                  Book Demo
                </a>
                <Link to="/services" className="px-8 py-3 bg-green-700 text-white rounded-lg font-bold text-lg hover:bg-green-800 transition-colors shadow-md hover:shadow-lg hover:scale-105">
                  Explore Services
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
