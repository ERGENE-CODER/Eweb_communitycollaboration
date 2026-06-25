"use client"

import Link from "next/link"
import Image from "next/image"

const courses = [
  {
    id: 1,
    badge: "Popular",
    category: "WEB DEVELOPMENT",
    title: "Full-Stack Web Development Bootcamp",
    description:
      "Master HTML, CSS, JavaScript, React, and Node.js through hands-on projects and real-world applications.",
    hours: "48 hours",
    price: "$199",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <polygon points="18,12 38,24 18,36" fill="rgba(255,255,255,0.35)" />
      </svg>
    ),
  },
  {
    id: 2,
    badge: "New",
    category: "CYBERSECURITY",
    title: "Digital Security & Privacy Fundamentals",
    description:
      "Learn essential skills to protect yourself and your organization in the digital age with practical lab sessions.",
    hours: "32 hours",
    price: "$149",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path
          d="M24 6L10 12v10c0 9.4 6 18.2 14 21 8-2.8 14-11.6 14-21V12L24 6z"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: 3,
    badge: "Trending",
    category: "DATA SCIENCE",
    title: "Data Analysis & Visualization with Python",
    description:
      "Explore data storytelling, machine learning basics, and powerful visualizations using Python's leading libraries.",
    hours: "60 hours",
    price: "$229",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="28" width="8" height="14" rx="2" fill="rgba(255,255,255,0.35)" />
        <rect x="20" y="18" width="8" height="24" rx="2" fill="rgba(255,255,255,0.35)" />
        <rect x="32" y="10" width="8" height="32" rx="2" fill="rgba(255,255,255,0.35)" />
      </svg>
    ),
  },
]

export default function Home() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Achievement", href: "/achievement" },
    { name: "Announcement", href: "/announcement" },
    { name: "Courses", href: "/course" },
    { name: "Bank", href: "/bank" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <main style={{ backgroundColor: "#F4F7F5", minHeight: "100vh", fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* ── Header ── */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 64px",
          backgroundColor: "#ffffff",
          borderBottom: "2px solid #2d6a4f",
          minHeight: "72px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src="/logo5.png"
            alt="Eweb Community Logo"
            width={180}
            height={54}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#444444",
                fontSize: "14px",
                fontWeight: 500,
                padding: "8px 12px",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = "#2d6a4f"
                ;(e.currentTarget as HTMLElement).style.backgroundColor = "#e8f5ee"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = "#444444"
                ;(e.currentTarget as HTMLElement).style.backgroundColor = "transparent"
              }}
            >
              {link.name}
            </Link>
          ))}

          {/* Login — styled as a filled green button */}
          <Link
            href="/login"
            style={{
              background: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              marginLeft: "8px",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Login
          </Link>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section style={{ padding: "56px 80px 48px", maxWidth: "1100px", margin: "0 auto" }}>
        <span
          style={{
            display: "inline-block",
            backgroundColor: "#e8f5ee",
            color: "#2d6a4f",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            padding: "5px 14px",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        >
          Learn · Grow · Achieve
        </span>

        <h1
          style={{
            fontSize: "42px",
            fontWeight: 800,
            color: "#111111",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          Grow your skills with{" "}
          <span style={{ color: "#2d6a4f" }}>Eweb Community</span>
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#666666",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginBottom: "28px",
          }}
        >
          Explore hands-on courses in web development, cybersecurity, data science, and more —
          built for real-world impact.
        </p>

        <div style={{ display: "flex", gap: "12px" }}>
          <Link
            href="/course"
            style={{
              background: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)",
              color: "#ffffff",
              padding: "13px 30px",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Browse Courses
          </Link>
          <Link
            href="/about"
            style={{
              background: "transparent",
              color: "#2d6a4f",
              padding: "13px 30px",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              border: "2px solid #2d6a4f",
            }}
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ── Course Cards ── */}
      <section style={{ padding: "0 80px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            color: "#2d6a4f",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Featured
        </p>
        <h2
          style={{
            color: "#111111",
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "24px",
          }}
        >
          Popular Courses
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px rgba(0,0,0,0.13)"
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 10px rgba(0,0,0,0.07)"
                ;(e.currentTarget as HTMLElement).style.transform = "none"
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  position: "relative",
                  background: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)",
                  height: "160px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {course.icon}
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    backgroundColor: "rgba(60,60,60,0.85)",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "20px",
                    letterSpacing: "0.3px",
                  }}
                >
                  {course.badge}
                </span>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "22px 22px 20px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    color: "#2d6a4f",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  {course.category}
                </p>
                <h3
                  style={{
                    color: "#111111",
                    fontSize: "17px",
                    fontWeight: 700,
                    lineHeight: 1.35,
                    marginBottom: "12px",
                  }}
                >
                  {course.title}
                </h3>
                <p
                  style={{
                    color: "#666666",
                    fontSize: "13.5px",
                    lineHeight: 1.6,
                    flexGrow: 1,
                    marginBottom: "18px",
                  }}
                >
                  {course.description}
                </p>

                <hr style={{ border: "none", borderTop: "1px solid #eeeeee", margin: "0 0 16px" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      color: "#888888",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {course.hours}
                  </span>
                  <span style={{ color: "#2d6a4f", fontSize: "18px", fontWeight: 700 }}>
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}