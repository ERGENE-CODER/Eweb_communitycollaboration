"use client"
import { CSSProperties } from "react"
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
    const parenttableStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250,1fr))",
        backgroundColor: "#ffffff",
        width: "100%",
        minHeight: "800px"
    }
    return (
        <main>
            <section className="relative min-h-screen w-full bg-[#F4F7F5]">
                
                <header className="flex flex-col items-center justify-start px-6 py-4 md:flex-row md:items-center md:px-16 pb-0"
                    style={{
                        borderBottom: "1px solid #ffffff", marginTop: "-1.5rem", backgroundColor: "#FFFFFF"
                    }}>

                    {/* Logo Container */}
                    <div className="mb-4 md:mb-0">
                        <Image
                            src="/logo5.png"
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
                                className="hover:text-blue-400 transition-colors duration-200 text-slate-700"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </header>
                <div className="flex  flex-col py-30 px-20">
                    <p className="text-black text-[40px] ">Welcome to ergene web community</p>
                    <p className="text-black flex flex-col px-10">-Eweb community our sweats make our world shine</p>
                </div>

            </section>
            {/* grid section that contain commitee leaders */}
            <section className="bg-[#ffffff] min-h-screen w-full ">
                < p className="flex flex-col items-center justify-center text-black py-10 text-[20px]  ">About our community</p>
                <p className="text-black flex px-70 ">Meet the talented  minds and dedicated individual driving innovation and leading our community forward</p>
                <div style={parenttableStyle}>

                </div>
            </section>
        </main>

    )
}