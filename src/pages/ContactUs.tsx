
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Get in Touch</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have questions about our tutoring services? Want to schedule a free consultation? 
            We're here to help you find the perfect learning solution for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-md border">
              <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Visit Our Center
              </h3>
              <p className="text-gray-700 mb-2">123 Education Street</p>
              <p className="text-gray-700 mb-2">Academic District</p>
              <p className="text-gray-700">Learning City, LC 12345</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border">
              <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-green-500" />
                Quick Contact
              </h3>
              <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-700 mb-2">Email: info@tuteguy.com</p>
              <p className="text-gray-700">WhatsApp: +1 (555) 123-4567</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border">
              <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-500" />
                Business Hours
              </h3>
              <p className="text-gray-700 mb-2">Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-700 mb-2">Saturday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>

          <form
            className="bg-white rounded-xl p-8 shadow-lg border flex flex-col gap-6"
            onSubmit={e => {
              e.preventDefault();
              alert("Thank you! We will get in touch with you soon.");
            }}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Send us a Message</h3>
            
            <div className="space-y-2">
              <Label htmlFor="contact-name">Full Name</Label>
              <Input required id="contact-name" name="name" placeholder="Your name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input required id="contact-email" name="email" type="email" placeholder="your@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-phone">Phone Number (Optional)</Label>
              <Input id="contact-phone" name="phone" type="tel" placeholder="Your phone number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-subject">Subject</Label>
              <Input required id="contact-subject" name="subject" placeholder="How can we help?" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">Message</Label>
              <textarea 
                required 
                id="contact-message" 
                name="message" 
                rows={4} 
                className="w-full rounded-md border px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tell us more about your requirements..."
              />
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
