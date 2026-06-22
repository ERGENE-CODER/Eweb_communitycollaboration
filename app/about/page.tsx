"use client"
import Link from "next/link"
import Image from "next/image"
import { CSSProperties } from "react"
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
    const parenttableStyle: CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        backgroundColor: "#62bb93",
        width: "100%",
        minHeight: "400px"
    }
    const childleaderStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        height: "300px",
        backgroundColor: "#ffffff",
        marginLeft: "20px",
        marginTop: "45px",
        border: "2px solid #0daa41",
        borderRadius: "10px",
        gap: "5px",
        marginRight: "15px"
    }
    const memeberparentStyle: CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        backgroundColor: "#62bb93",
        width: "100%",
        minHeight: "400px",

        // 1. PUSH DOWN FROM TOP: Pushes the first row down
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingLeft: "40px",     // Give the whole section a nice side breathing room
        paddingRight: "40px",

        // 2. EQUAL GAPS: This adds clean space horizontally and vertically between ALL cards
        gap: "20px"
    }
    const memberschildStyle: CSSProperties = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",    // Keeps content vertically centered inside the card
        height: "100px",
        backgroundColor: "#ffffff",
        border: "2px solid #0daa41",
        borderRadius: "10px",
        padding: "12px",         // Internal padding for avatars/text

        // REMOVED: All margins are removed here so the parent's gap property handles it flawlessly!
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
                            width={200}
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

                {/* Fixed py-30 to py-32 here */}
                <div className="flex flex-col py-32 px-20">
                    <p className="text-black text-[40px]">Welcome to About us page</p>
                    <p className="text-black text-[20px]">In this page you will understand more about our activities, our leaders, our vision and mission</p>
                </div>
            </section>

            {/* Committee Leaders Section */}
            <section style={{ backgroundColor: "#FFFFFF", width: "100%", minHeight: "800px" }}>
                <p className="flex flex-col justify-center items-center text-[40px]" style={{ color: "black", paddingTop: "40px", fontWeight: "bold" }}>About our community</p>
                <p className="flex flex-col justify-center items-center text-[20px]" style={{ color: "black" }}>Meet the talented minds and dedicated individuals and leading our community forward </p>
                {/* Added The New Dynamic Header Layout */}
                <div className="flex items-center w-full px-20 py-10">
                    <div className="w-6 h-[2px] bg-green-400"></div>
                    <h2 className="text-black uppercase tracking-wider font-semibold text-lg mx-3 whitespace-nowrap ">
                        Our Leadership Team
                    </h2>
                    <div className="flex-grow h-[2px] bg-green-400"></div>
                </div>
                {/* leaders grid section */}
                <section style={parenttableStyle}>
                    <div style={childleaderStyle}>
                        <img src="photo.png" style={{ borderRadius: " 9px 9px 0 0", filter: "grayscale(100%)" }} />
                        <p style={{ marginLeft: "12px ", color: "black", fontWeight: "bold", fontSize: "15px" }}>Names:</p>
                        <p style={{ marginLeft: "12px", color: "black", fontWeight: "bold", fontSize: "15px" }}>Chief Executive Officer (CEO)</p>
                        <ul style={{ fontSize: "13px", color: "black" }}>
                            <li style={{ marginLeft: "12px" }}>Manages day-to-day operations and ensures that the organization runs smoothly.</li>
                        </ul>
                    </div>
                    <div style={childleaderStyle}>
                        <img src="photo.png" style={{ borderRadius: " 9px 9px 0 0", filter: "grayscale(100%)" }} />
                        <p style={{ marginLeft: "12px ", color: "black", fontWeight: "bold", fontSize: "15px" }}>Names:</p>
                        <p style={{ marginLeft: "12px", color: "black", fontWeight: "bold", fontSize: "15px" }}>Vice president (VPs) </p>
                        <p style={{ fontSize: "13px", color: "black", marginLeft: "11px" }}>Typically report directly to the president or CEO and are responsible for overseeing specific departments or functions.</p>
                    </div>
                    <div style={childleaderStyle}>
                        <img src="photo.png" style={{ borderRadius: " 9px 9px 0 0", filter: "grayscale(100%)" }} />
                        <p style={{ marginLeft: "12px ", color: "black", fontWeight: "bold", fontSize: "15px" }}>Names:</p>
                        <p style={{ marginLeft: "12px", color: "black", fontWeight: "bold", fontSize: "15px" }}>Accountant</p>
                        <p style={{ fontSize: "13px", color: "black", marginLeft: "12px", lineHeight: "1rem" }}>Managing financial records and ensuring compliance with regulations. They provide valuable insights that help individuals and
                            organizations make informed financial decisions.</p>
                    </div>
                    <div style={childleaderStyle}>
                        <img src="photo.png" style={{ borderRadius: " 9px 9px 0 0", filter: "grayscale(100%)" }} />
                        <p style={{ marginLeft: "12px ", color: "black", fontWeight: "bold", fontSize: "15px" }}>Names:</p>
                        <p style={{ marginLeft: "12px", color: "black", fontWeight: "bold", fontSize: "15px" }}> Developer Manager</p>
                        <p style={{ lineHeight: "1rem", marginLeft: "12px", color: "black", fontSize: "13px" }}> Coordinates all teams namely frontend team,backend team to achieve their purpose and correct all errors should be found in coding  stage </p>
                    </div>
                    <div style={childleaderStyle}>
                        <img src="photo.png" style={{ borderRadius: " 9px 9px 0 0", filter: "grayscale(100%)" }} />
                        <p style={{ marginLeft: "12px ", color: "black", fontWeight: "bold", fontSize: "15px" }}>Names:</p>
                        <p style={{ marginLeft: "12px", color: "black", fontWeight: "bold", fontSize: "15px" }}>Advertising manager</p>
                        <p style={{ fontSize: "13px", marginLeft: "12px", color: "black" }}>Responsible for planning, implementing, and managing advertising campaigns to generate interest in products or services</p>
                    </div>
                </section>
                <div className="flex items-center w-full px-20 py-15">
                    <div className="w-6 h-[2px] bg-green-400"></div>
                    <h2 className="text-black uppercase tracking-wider font-semibold text-lg mx-3 whitespace-nowrap ">
                        Our Community Members
                    </h2>
                    <div className="flex-grow h-[2px] bg-green-400"></div>
                </div>
            </section>
            {/* our memebrs sectionss*/}
            <section style={memeberparentStyle} >
                <div style={memberschildStyle}>
                    <nav className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-slate-600/50 flex-shrink-0">
                        <img
                            className="w-full h-full object-cover"
                        />
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="  w-20 h-20 rounded-full border-2">

                    </nav>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
                <div style={memberschildStyle}>
                </div>
            </section>
        </main >
    )
}