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
          <h2 style={{ fontFamily: "Georgia, serif",
