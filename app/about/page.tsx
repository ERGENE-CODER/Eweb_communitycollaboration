"use client"
import Link from "next/link"
import Image from "next/image"
import { CSSProperties } from "react"
import { Lugrasimo } from "next/font/google"
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
    const visionStyle: CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        width: "90%",
        minHeight: "500px",
        marginLeft: "80px",
        paddingTop: "70px",
        gap: "40px",

    }
    const childvisionStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#62bb93",
        border: "1px solid #ffffff#fff",
        borderRadius: "12px"
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
                        <span style={{ display: "inline-block", paddingLeft: "8px", paddingRight: "8px", color: "black", fontWeight: "bold", fontSize: "15px", borderRadius: "5px" }} className="bg-green-500 w-fit ml-[10px]">Chief Executive Officer (CEO)</span>
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
                <div className="w-full px-20 py-15 flex flex-col gap-2">
                    {/* Top Row: Left line, Title, and Right line grouped perfectly together */}
                    <div className="flex items-center w-full gap-3">
                        <div className="w-6 h-[2px] bg-green-400 flex-shrink-0"></div>
                        <h2 className="text-black uppercase tracking-wider font-semibold text-lg whitespace-nowrap">
                            Our Community Members
                        </h2>
                        <div className="flex-grow h-[2px] bg-green-400"></div>
                    </div>

                    {/* Bottom Row: Indented slightly to align perfectly under the title text */}
                    <p className="text-gray-600 text-sm pl-9 max-w-xl">
                        Meet millions of members who have joined the Eweb community since 2026.
                    </p>
                </div>
            </section>
            {/* our memebrs sectionss*/}
            <section style={memeberparentStyle} >
                <div style={memberschildStyle}>
                    <nav className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-green-500 flex-shrink-0">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500  overflow-hidden">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden   ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden  ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500  overflow-hidden ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden  ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden  ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden  ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden  ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden  ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500  overflow-hidden ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
                <div style={memberschildStyle}>
                    <nav className="w-20 h-20 rounded-full border-2 border-green-500 overflow-hidden ">
                        <img src="photo.png" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                    </nav>
                    <nav className="flex flex-col px-2">
                        <p style={{ color: "#000000" }}>Names:</p>
                        <p style={{ color: "#000000" }}>Joined:</p>
                    </nav>
                </div>
            </section>
            {/*vision and mission section */}
            <section style={{ backgroundColor: "#FFFFFF", width: "100%", minHeight: "800px" }}>
                <div style={visionStyle}>
                    <nav style={childvisionStyle}>
                        <p className="flex justify-center items-center text-white text-[22px] py-10 ">Our Mission </p>
                        <ul style={{ listStyleType: "square", lineHeight: "30px", marginLeft: "28px" }}>
                            <li>Teaching coding tool pyhton,c++,UI/UX, next.js framework, and real project</li>
                            <li>Provide chance to make project that solve various problem in society</li>
                            <li>Making some project aim with providing and earning money to the members of the club</li>
                            <li>Giving chance to younger girls and boys be comfortable with making and involving in coding system , by knowing various  way improving them selves about coding skills</li>
                        </ul>
                    </nav>
                    <nav style={childvisionStyle} >
                        <p className="flex justify-center items-center text-white text-[22px] py-10 ">Our Vision</p>
                        <ul style={{ listStyleType: "square", lineHeight: "30px", marginLeft: "28px" }}>
                            <li>Eweb community will be the market place,which provide quality labours who have skills relate to web development,design ,and project management </li>
                            <li>Eweb community will foster exceptional expertise in web development, design, and entrepreneurship, empowering members to launch their own companies,
                                build real-world applications, and succeed</li>
                            <li>Eweb community will serve as a hub for students with skills in coding and design, bringing them together to build impactful,
                                revenue-generating, real-world projects so they can become the tech leaders of tomorrow.</li>
                        </ul>
                    </nav>
                </div>

                {/*our work section*/}
                <p className="flex justify-center items-center text-[22px] text-black py-10 font-bold">our work in numbers </p>
                <div className="flex flex-row justify-center items-center gap-30">
                    {/* First Circle Group */}
                    <div className="flex flex-col items-center">
                        <div className=" w-30 h-30 rounded-full" style={{ backgroundColor: "#62bb93" }}></div>
                        <p className="mt-2 text-black">+1200</p>
                    </div>

                    {/* Second Circle Group */}
                    <div className="flex flex-col items-center">
                        <div className=" w-30 h-30 rounded-full" style={{ backgroundColor: "#62bb93" }}></div>
                        <p className="mt-2 text-black">+200</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className=" w-30 h-30 rounded-full" style={{ backgroundColor: "#62bb93" }}></div>
                        <p className="mt-2 text-black">+300</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className=" w-30 h-30 rounded-full" style={{ backgroundColor: "#62bb93" }}></div>
                        <p className="mt-2 text-black">+200</p>
                    </div>
                </div>
                {/* stakeholders section*/}
                <section style={{ backgroundColor: "#62bb93", width: "95%", height: "300px", marginTop: "30px", marginLeft: "40px", borderRadius: "12px" }}>
                    <p className="flex justify-center items-center text-white text-[30px] " style={{ paddingTop: "10px" }}>our stakeholders</p>
                </section>
                {/* bottom  or footer section*/}
                <footer style={{ backgroundColor: "#62bb93", width: "100%", height: "500px", marginTop: "70px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-6 text-[20px]" style={{ color: "#fffbfb" }}>

                        {/* Column 1: Quick Links */}
                        <div>
                            <h3 className="text-[24px] font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2" style={{ listStyleType: "square", paddingLeft: "20px" }}>
                                <li><Link href="/" className="hover:text-blue-500 transition-colors duration-200">Home</Link></li>
                                <li><Link href="/about" className="hover:text-blue-500 transition-colors duration-200">About Us</Link></li>
                                <li><Link href="/achievments" className="hover:text-blue-500 transition-colors duration-200">Achievement</Link></li>
                                <li><Link href="/announcement" className="hover:text-blue-500 transition-colors duration-200">Announcement</Link></li>
                                <li><Link href="/course" className="hover:text-blue-500 transition-colors duration-200">Course</Link></li>
                                <li><Link href="/bank" className="hover:text-blue-500 transition-colors duration-200">Bank</Link></li>
                                <li><Link href="/contact" className="hover:text-blue-500 transition-colors duration-200">Contact Us</Link></li>
                                <li><Link href="/login" className="hover:text-blue-500 transition-colors duration-200">Login</Link></li>
                            </ul>
                        </div>

                        {/* Column 2: Location */}
                        <div>

                            <h3 className="text-[24px] font-semibold mb-4">Location</h3>
                            <ul style={{ listStyleType: "square" }}>
                                <li><p className="leading-relaxed">kigali, Gikondo campus</p> </li>

                            </ul>
                        </div>

                        {/* Column 3: Course */}
                        <div>
                            <h3 className="text-[24px] font-semibold mb-4">Course</h3>
                            {/* Course content will go here safely under its heading */}
                        </div>

                        {/* Column 4: Contact */}
                        <div>
                            <h3 className="text-[24px] font-semibold mb-4">Contact</h3>
                            {/* Contact details will go here safely under its heading */}
                        </div>

                    </div>
                </footer>

            </section>
        </main >
    )
}