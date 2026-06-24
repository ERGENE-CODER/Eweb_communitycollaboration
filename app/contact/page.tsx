import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { siFacebook, siInstagram } from "simple-icons/icons";

function SocialLink({
  svgPath,
  viewBox = "0 0 24 24",
  label,
}: {
  svgPath: string;
  viewBox?: string;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-emerald-700 hover:border-emerald-700 transition"
    >
      <svg viewBox={viewBox} className="w-4 h-4" role="img" aria-hidden="true">
        <path d={svgPath} fill="currentColor" />
      </svg>
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            E
          </div>
          <span className="text-xl font-bold text-emerald-800">Eweb Community</span>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-emerald-700 transition">
            Home
          </a>
          <a href="#" className="hover:text-emerald-700 transition">
            About
          </a>
          <a href="#" className="hover:text-emerald-700 transition">
            Announcements
          </a>
          <a href="#" className="hover:text-emerald-700 transition">
            Achievements
          </a>
          <a href="#" className="hover:text-emerald-700 transition">
            Courses
          </a>
          <a href="#" className="hover:text-emerald-700 transition">
            Bank
          </a>
          <a
            href="#"
            className="text-emerald-700 border-b-2 border-emerald-700 pb-1"
          >
            Contact Us
          </a>
        </div>

        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
          Login
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Information */}
        <div className="md:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              • GET IN TOUCH
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-500 leading-relaxed text-sm">
              Questions, ideas, or support? Our team replies within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-emerald-700">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Address
                </h4>
                <p className="text-sm text-gray-700 font-medium mt-0.5">
                  123 Community Avenue, Digital District, TX 10001
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-emerald-700">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Email
                </h4>
                <a
                  href="mailto:hello@ewebcommunity.org"
                  className="text-sm text-gray-700 font-medium mt-0.5 block hover:underline"
                >
                  hello@ewebcommunity.org
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-emerald-700">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Phone
                </h4>
                <p className="text-sm text-gray-700 font-medium mt-0.5">
                  +1 (800) 332-7744
                </p>
              </div>
            </div>
          </div>

          {/* Social Follow */}
          <div className="pt-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">
              Follow the community
            </h4>
            <div className="flex space-x-3">
              {/*<SocialLink svgPath={siTwitter.svg} label="Twitter" />
              <SocialLink svgPath={siLinkedin.svg} label="LinkedIn" />*/}
              <SocialLink svgPath={siFacebook.svg} label="Facebook" />
              <SocialLink svgPath={siInstagram.svg} label="Instagram" />
            </div>
          </div>
        </div>

        {/* Right Side: Message Form Box */}
        <div className="md:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-gray-100/80">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Send Us a Message</h3>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-emerald-600 focus:bg-white transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-emerald-600 focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-emerald-600 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Subject
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-emerald-600 focus:bg-white appearance-none text-gray-500 transition">
                  <option>Select a topic...</option>
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Feedback</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-emerald-600 focus:bg-white resize-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2A6F4D] hover:bg-[#21563B] text-white font-medium py-3 rounded-xl transition shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
