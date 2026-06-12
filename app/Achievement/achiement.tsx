import { useState } from "react";

const courses = [
  {
    id: 1,
    badge: "Popular",
    badgeColor: "#4a4a4a",
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
    badgeColor: "#4a4a4a",
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
    badgeColor: "#4a4a4a",
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
];

export default function CourseCards() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        backgroundColor: "#f0f2f5",
        padding: "60px 80px",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "28px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            onMouseEnter={() => setHovered(course.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow:
                hovered === course.id
                  ? "0 8px 32px rgba(0,0,0,0.13)"
                  : "0 2px 10px rgba(0,0,0,0.07)",
              transition: "box-shadow 0.2s ease, transform 0.2s ease",
              transform: hovered === course.id ? "translateY(-4px)" : "none",
              display: "flex",
              flexDirection: "column",
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
              {/* Badge */}
              <span
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  backgroundColor: "rgba(60,60,60,0.85)",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: "600",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  letterSpacing: "0.3px",
                }}
              >
                {course.badge}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: "22px 22px 20px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  color: "#2d6a4f",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                {course.category}
              </p>
              <h2
                style={{
                  color: "#111",
                  fontSize: "17px",
                  fontWeight: "700",
                  lineHeight: "1.35",
                  marginBottom: "12px",
                }}
              >
                {course.title}
              </h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "13.5px",
                  lineHeight: "1.6",
                  flexGrow: 1,
                  marginBottom: "18px",
                }}
              >
                {course.description}
              </p>

              {/* Divider */}
              <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "0 0 16px" }} />

              {/* Footer */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#888", fontSize: "13px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {course.hours}
                </span>
                <span
                  style={{
                    color: "#2d6a4f",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  {course.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}