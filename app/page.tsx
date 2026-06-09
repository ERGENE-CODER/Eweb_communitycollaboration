"use client"

import Link from "next/link"
import Image from "next/image"
export default function Home() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About us", href: "/about" },
        { name: "Achievement", href: "/achievement" },
        { name: "Announcement", href: "/announcement" },
        { name: "Courses", href: "/course" },
        { name: "Bank", href: "/bank" },
        { name: "Contact Us", href: "/contact" },
        { name: "Login", href: "/login" },
    ]
    return (
        <main className="relative min-h-screen w-full bg-[url('/backgroundimage.png')] bg-cover bg-center text-white">
            {/* 
        Changed py-6 to py-4 to bring the whole bar up.
        Added md:items-center so the logo and menu align perfectly on the same horizontal line.
      */}
            <header className="flex flex-col items-center justify-start px-6 py-4 md:flex-row md:items-center md:px-16 pb-0"
                style={{
                    borderBottom: "1px solid #ffffff", marginTop: "-1.5rem"

                }}>

                {/* Logo Container */}
                <div className="mb-4 md:mb-0">
                    <Image
                        src="/logo.png"
                        alt="Eweb Community Logo"
                        width={200} // Slightly reduced width to prevent it from pushing upward
                        height={60}
                        className="object-contain"
                        priority
                    />
                </div>
                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium transition-colors md:gap-8 md:text-base px-20">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

            </header>
        </main>
    )
}