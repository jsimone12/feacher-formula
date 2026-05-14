import Link from "next/link";

const PRIMARY = "#1B3A2D";
const ACCENT = "#D4A853";
const BG = "#F2EDE4";
const SAGE = "#7A9E87";

export default function Home() {
  return (
    <main style={{ background: BG, fontFamily: "system-ui, sans-serif", minHeight: "100vh" }}>

      {/* HERO */}
      <div style={{ background: PRIMARY, padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: ACCENT, color: PRIMARY, fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "4px 12px", borderRadius: 4, marginBottom: 20 }}>
          Free 60-Second Quiz
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", color: "#F2EDE4", lineHeight: 1.15, maxWidth: 700, margin: "0 auto 1.25rem" }}>
          Most people have never heard of this career.<br />
          <span style={{ color: ACCENT }}>That's exactly why it pays so well.</span>
        </h1>
        <p style={{ fontSize: 16, color: "rgba(242,237,228,0.75)", lineHeight: 1.7, maxWidth: 540, margin: "0 auto 2rem" }}>
          No degree. No office. After disasters hit, trained adjusters can clear $5K–$10K in a single week. Take this quiz to see if this is the side hustle for you.
        </p>
        <Link href="/quiz" style={{ display: "inline-block", background: ACCENT, color: PRIMARY, padding: "14px 36px", borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: "none", letterSpacing: "0.3px" }}>
          Take the Free Quiz
        </Link>
        <div style={{ fontSize: 12, color: "rgba(242,237,228,0.45)", marginTop: 12 }}>Takes 60 seconds. No email required.</div>
      </div>

      {/* WHAT IS A CAT ADJUSTER */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: ACCENT, marginBottom: 8 }}>What is a CAT adjuster?</div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", color: PRIMARY, marginBottom: 16, lineHeight: 1.3 }}>Every disaster creates demand. Someone has to get paid to assess it.</h2>
        <p style={{ fontSize: 15, color: "#444", lineHeight: 1.75, marginBottom: 12 }}>
          When a hurricane, wildfire, or major flood hits, insurance companies need trained people on the ground fast. They need someone to assess the damage, document everything, and help homeowners get paid.
        </p>
        <p style={{ fontSize: 15, color: "#444", lineHeight: 1.75 }}>
          That person is a CAT adjuster. CAT stands for catastrophe. You get called, you deploy, you get paid per claim. No college degree required. No 9-to-5. No ceiling on what you can earn.
        </p>
      </div>

      {/* BENEFITS */}
      <div style={{ background: PRIMARY, padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: ACCENT, marginBottom: 8, textAlign: "center" }}>Why people are making the switch</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", color: "#F2EDE4", textAlign: "center", marginBottom: 2rem, lineHeight: 1.3 }}>Three reasons this career keeps growing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginTop: "1.5rem" }}>
            {[
              { icon: "💰", title: "High income potential", body: "Experienced adjusters regularly clear $5K–$10K per week during peak CAT season." },
              { icon: "📍", title: "You control your time", body: "Between deployments you work when you want. No boss, no schedule, no office." },
              { icon: "⚡", title: "Fast to get started", body: "Most people can get licensed and deployment-ready in 4–8 weeks with the right guidance." },
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(242,237,228,0.06)", border: "1px solid rgba(242,237,228,0.1)", borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 15, color: ACCENT, fontWeight: 600, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "rgba(242,237,228,0.7)", lineHeight: 1.6 }}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECOND CTA */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "3rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", color: PRIMARY, marginBottom: 12, lineHeight: 1.3 }}>Find out where you stand in 60 seconds</h2>
        <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, marginBottom: 24, maxWidth: 460, margin: "0 auto 1.5rem" }}>
          Take the free quiz. See your score. Get a clear picture of your next step.
        </p>
        <Link href="/quiz" style={{ display: "inline-block", background: PRIMARY, color: "#F2EDE4", padding: "14px 36px", borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
          Take the Free Quiz
        </Link>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #C8C0B4", padding: "1.5rem", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: "#888" }}>The Feacher Formula &copy; {new Date().getFullYear()} &nbsp;|&nbsp; Presented by Larry Feacher II</div>
      </div>

    </main>
  );
}
