"use client"

import Link from "next/link"
import Image from "next/image"
import type { CSSProperties } from "react"
import { SpanStatus } from "next/dist/trace"
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
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        backgroundColor: "#ffffff",
        width: "100%",
        minHeight: "800px"
    }
    const parentheaderStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        minHeight: "200px",
        marginTop: "40px",
        marginLeft: "150px",
        marginRight: "150px",
        gap: "15px"

    }
    const childheaderStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        height: "150px",
        backgroundColor: "#f0eeee",
        border: "1px solid #030303"
    }
    // 1. The Parent Container (Handles the overall row layout and wrapping)
    const searchparentStyle: CSSProperties = {
        display: "flex",
        flexWrap: "wrap",        // Allows cards to wrap to the next line when screen space runs out
        gap: "20px",             // Spacing between the cards
        minHeight: "6vh",
        marginLeft: "150px",     // Your custom left margin
        padding: "20px 0",       // Added a little padding just for clean presentation
    };

    const searchchildStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",  // Keeps widths predictable even with padding/borders
        padding: "15px",
        border: "1px solid #ddd",
    };

    return (
        <main>
            <section className="relative min-h-screen w-full bg-[#F4F7F5]">
                {/* 
        Changed py-6 to py-4 to bring the whole bar up.
        Added md:items-center so the logo and menu align perfectly on the same horizontal line.
      */}
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
                {/* body bank page */}
                <section>
                    <div style={{ borderBottom: "2px solid #191b1a", marginLeft: "150px", marginRight: "150px" }}>
                        <p className="text-black text-[40px] font-bold">Bank</p>
                        <p className="text-[20px] text-gray-400">Fee Collection Ledge</p>
                    </div>
                    {/*  hchildhearer secton */}
                    <span style={parentheaderStyle}>
                        <div style={childheaderStyle}>

                        </div>
                        <div style={childheaderStyle}>

                        </div>
                        <div style={childheaderStyle}>
                        </div>
                    </span>
                    {/*  search card , add, pedding,*/}
                    <section style={searchparentStyle}>
                        <div style={{ ...searchchildStyle, width: "45%", backgroundColor: "#f4f4f4" }}>
                            <input
                                type="text"
                                placeholder="search"
                                style={{ color: "#000000", padding: "5px", outline: "none", border: "none" }}
                            />
                        </div>
                        <div style={{ ...searchchildStyle, width: "10%", backgroundColor: "#070707", borderRadius: "20px" }}>
                            <h1 style={{ paddingLeft: "30px" }}>All</h1>
                        </div>
                        <div style={{ ...searchchildStyle, width: "10%", backgroundColor: "#0c0909", borderRadius: "20px" }}>
                            <h1 style={{ paddingLeft: "30px" }}>All</h1>
                        </div>
                        <div style={{ ...searchchildStyle, width: "10%", borderRadius: "20px" }}>
                            <h1 style={{ paddingLeft: "30px" }}>All</h1>
                        </div>
                        <div style={{ ...searchchildStyle, width: "10%", borderRadius: "20px" }}>
                            <h1 style={{ paddingLeft: "30px" }}>All</h1>
                        </div>



                    </section>
                </section>
            </section>


        </main >
    )
}