import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Info, Users, Book, Briefcase, User, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
      <Helmet>
        <title>About TuteGuy Tutorials - Our Mission and Team</title>
        <meta name="description" content="Learn about TuteGuy Tutorials, our mission, and our dedicated team of educators committed to personalized learning experiences for students." />
        <meta name="keywords" content="TuteGuy Tutorials, education mission, tutoring team, home tutoring, private tutors" />
        <link rel="canonical" href="https://tuteguy.com/about" />
      </Helmet>
      
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-12">
          <section className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 flex gap-2 items-center justify-center">
              <Info className="text-green-600" /> About TuteGuy Tutorials
            </h1>
            <p className="text-xl text-gray-700">
              A student-focused educational initiative dedicated to delivering quality private home tuition at reasonable prices. Founded by passionate educators with a vision to enhance academic learning.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="/oldtg.png"
              alt="Students learning"
              className="rounded-2xl shadow-lg w-full h-auto object-contain"
            />
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800">Our Mission</h2>
              <blockquote className="text-xl italic text-gray-700 border-l-4 border-green-500 pl-4">
                "Empower every student with personalized, holistic education that nurtures academic success, critical thinking, and emotional resilience."
              </blockquote>
              <p className="text-gray-700">
                We strive to create a supportive learning environment where students not only improve their academic performance but also develop the skills and mindset needed to face future challenges.
              </p>
            </div>
          </div>

          {/* Leadership Section */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Our Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Founder Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-green-300 hover:bg-gradient-to-br hover:from-white hover:to-green-50">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center shrink-0 border-4 border-green-200">
                    <User size={48} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-700 mb-2">Hemanth Sai</h3>
                    <p className="text-lg font-semibold text-green-600 mb-4">Founder & Director</p>
                    <p className="text-gray-700 mb-4">
                      Hemanth Sai is the Founder and Director of TUTEGUY Tutorials, driven by a passion for education and innovation. Currently pursuing his MBA, he leads the organization with a focus on delivering quality, personalized learning experiences and promoting overall student development.
                    </p>
                    <div className="flex gap-3">
                      <a href="#" aria-label="LinkedIn profile" className="text-green-600 hover:text-green-800 transition-colors">
                        <Globe size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* COO Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-green-300 hover:bg-gradient-to-br hover:from-white hover:to-green-50">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center shrink-0 border-4 border-green-200">
                    <User size={48} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-700 mb-2">Purna Chandrika</h3>
                    <p className="text-lg font-semibold text-green-600 mb-4">Chief Operating Officer (COO)</p>
                    <p className="text-gray-700 mb-4">
                      Purna Chandrika, Co-founder and COO of TUTEGUY Tutorials, oversees daily operations and ensures high-quality tutoring services. Her strong organizational skills and focus on excellence help drive the company's mission of accessible, student-centered education.
                    </p>
                    <div className="flex gap-3">
                      <a href="#" aria-label="LinkedIn profile" className="text-green-600 hover:text-green-800 transition-colors">
                        <Globe size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-green-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="text-green-600" />
                  Personalized Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We understand that each student has unique learning needs. Our services are tailored to foster both academic excellence and overall development.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-green-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="text-green-600" />
                  Innovative Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Weekly assessments, math tricks for fast calculations, and customized worksheets and question papers to enhance learning.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-green-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="text-green-600" />
                  Expert Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Monthly expert consultations to help manage academic stress and ensure mental well-being of our students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
