import { Book, Users, MessagesSquare } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Educational Services - TuteGuy Tutorials</title>
        <meta name="description" content="Discover our comprehensive tutoring services including one-on-one sessions, group classes, and specialized programs for students aged 4-18." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "TuteGuy Tutorials",
              "description": "Premium home tutoring services for students",
              "offers": {
                "@type": "Offer",
                "category": "Educational Services"
              },
              "address": {
               "@type": "PostalAddress",
                "streetAddress": "No 17, Muniyappa Layout",
                "addressLocality": "Hongasandra",
                "addressRegion": "Bangalore Urban",
                "postalCode": "560068",
                "addressCountry": "INDIA"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
        <Navbar />
        <main className="flex-1 section-padding max-w-5xl mx-auto" role="main">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-green-800 mb-8 flex gap-2 items-center">
              <Book className="text-green-600" aria-hidden="true" /> 
              Our Educational Services
            </h1>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              At TuteGuy Tutorials, we offer comprehensive educational support tailored to each student's unique learning journey. Our services are designed to build confidence, improve academic performance, and foster a love for learning.
            </p>
          </header>
          
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <ServiceCard
              icon={<Users className="w-8 h-8 text-green-400 mb-2" />}
              title="One-on-One Tutoring"
              description="Personalized attention and customized learning plans to help students excel in their subjects. Flexible scheduling and experienced tutors."
              link="/contact"
            />
            <ServiceCard
              icon={<MessagesSquare className="w-8 h-8 text-green-400 mb-2" />}
              title="Online Classes"
              description="Interactive virtual sessions with expert tutors. Learn from anywhere using our digital tools and live whiteboards for enhanced understanding."
              link="/contact"
            />
            <ServiceCard
              icon={<Users className="w-8 h-8 text-green-400 mb-2" />}
              title="Group Study Sessions"
              description="Small group sessions (2-6 students) that promote collaborative learning, peer interaction, and knowledge sharing in a supportive environment."
              link="/contact"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Specialized Programs</h3>
              <ul className="list-disc ml-7 text-gray-700 space-y-3 text-lg">
                <li>Olympiad Preparation Courses</li>
                <li>English Speaking & Communication Skills</li>
                <li>Remedial Classes for Learning Gaps</li>
                <li>Exam Preparation Workshops</li>
                <li>Study Skills Development</li>
                <li>Academic Writing Support</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Additional Support</h3>
              <ul className="list-disc ml-7 text-gray-700 space-y-3 text-lg">
                <li>Weekly Progress Assessments</li>
                <li>Customized Study Materials</li>
                <li>Parent-Teacher Meetings</li>
                <li>Academic Counseling</li>
                <li>Career Guidance Sessions</li>
                <li>Student Mentorship Program</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border border-green-100 mb-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Why Choose TuteGuy?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-green-800 mb-2">Quality Education</h4>
                <p className="text-gray-700">Experienced tutors, proven teaching methods, and comprehensive study materials ensure the best learning experience.</p>
              </div>
              <div>
                <h4 className="font-medium text-green-800 mb-2">Flexible Schedule</h4>
                <p className="text-gray-700">Choose timings that work best for you with our flexible scheduling options.</p>
              </div>
              <div>
                <h4 className="font-medium text-green-800 mb-2">Personalized Approach</h4>
                <p className="text-gray-700">Tailored learning plans that adapt to each student's pace and learning style.</p>
              </div>
              <div>
                <h4 className="font-medium text-green-800 mb-2">Regular Assessment</h4>
                <p className="text-gray-700">Track progress with regular evaluations and detailed feedback reports.</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
