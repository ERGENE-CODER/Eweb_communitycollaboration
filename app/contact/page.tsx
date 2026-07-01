import React from "react";
import Link from "next/link";
import Image from "next/image";
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
      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-400 transition"
    >
      <svg viewBox={viewBox} className="w-4 h-4" role="img" aria-hidden="true">
        <path d={svgPath} fill="currentColor" />
      </svg>
    </a>
  );
}

export default function ContactPage() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Achievement", href: "/achievement" },
    { name: "Announcement", href: "/announcement" },
    { name: "Courses", href: "/course" },
    { name: "Bank", href: "/bank" },
    { name: "Contact Us", href: "/contact" },
    { name: "Login", href: "/login" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7F5] text-gray-800 font-sans">
      {/* Navigation Bar matched with template design */}
      <header 
        className="flex flex-col items-center justify-start px-6 py-4 md:flex-row md:items-center md:px-16 pb-0"
        style={{
          borderBottom: "1px solid #ffffff", 
          marginTop: "-1.5rem", 
          backgroundColor: "#FFFFFF"
        }}
      >
        {/* Logo Container */}
        <div className="mb-4 md:mb-0">
          <Image
            src="/logo5.png"
            alt="Eweb Community Logo"
            width={200}
            height={60}
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Links matching global structure */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium transition-colors md:gap-8 md:text-base px-20">
          {navLinks.map((link) => {
            const isContactPage = link.href === "/contact";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isContactPage 
                    ? "text-blue-500 font-semibold border-b-2 border-blue-400 pb-1" 
                    : "text-slate-700 hover:text-blue-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Information */}
        <div className="md:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
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
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-blue-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Address
                </h4>
                <p className="text-sm text-gray-700 font-medium mt-0.5">
                  Kigali, Rwanda
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-blue-500">
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
                ewebcommunity@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-blue-500">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Phone
                </h4>
                <p className="text-sm text-gray-700 font-medium mt-0.5">
                  +250 793 839 740
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
                  placeholder="Bright"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-blue-400 focus:bg-white transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="SHEMA"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-blue-400 focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="shemabright@example.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-blue-400 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Subject
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-blue-400 focus:bg-white appearance-none text-gray-500 transition">
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
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-blue-400 focus:bg-white resize-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}