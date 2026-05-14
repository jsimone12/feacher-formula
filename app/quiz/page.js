"use client";
import { useState } from "react";

const questions = [
  { q: "Do you know what an independent insurance adjuster does?", opts: ["Yes, very well", "Kind of", "Not really", "Never heard of it"], scores: [0, 1, 2, 3], reveal: "Independent adjusters work for themselves — not for any single insurance company. They get hired on a per-claim basis, which means the more claims they handle, the more they earn." },
  { q: "Who do you think independent adjusters work for?", opts: ["Insurance companies only", "The government", "Themselves (independent)", "Not sure"], scores: [2, 2, 0, 3], reveal: "Independent adjusters are self-employed contractors. They can work with multiple insurance companies at once, which means more opportunities and more earning potential." },
  { q: "How much do you think independent adjusters can make during a busy season?", opts: ["$1K–$2K per week", "$3K–$5K per week", "$5K–$10K+ per week", "No idea"], scores: [3, 2, 0, 3], reveal: "During peak CAT season, experienced adjusters regularly clear $5K–$10K+ per week. Some top earners pull six figures in a single deployment." },
  { q: "What do you think you need to become an adjuster?", opts: ["A college degree", "A special license", "Years of experience", "Not sure"], scores: [3, 0, 3, 3], reveal: "You need a state adjuster license — no degree, no years of experience required. Many people get licensed and deployed within 60–90 days of starting." },
  { q: "How long do you think it takes to get started?", opts: ["A few days", "A few weeks", "Several months", "Over a year"], scores: [3, 1, 2, 3], reveal: "Most people can get licensed and ready to deploy in 4–8 weeks with the right guidance. The barrier is lower than most people think." },
  { q: "When do adjusters make the most money?", opts: ["Around holidays", "After natural disasters", "During tax season", "Not sure"], scores: [3, 0, 3, 2], reveal: "Disasters are the trigger. When a major hurricane or wildfire hits, demand for adjusters spikes immediately and companies pay premium rates to fill the need fast." },
  { q: "What kind of lifestyle do you think adjusters have?", opts: ["9–5 office job", "Remote/work from anywhere", "Travel-heavy", "Not sure"], scores: [3, 2, 0, 2], reveal: "CAT adjusting is travel-heavy by nature — you go to where the disaster hit. But between deployments you control your own time completely." },
  { q: "How do you think adjusters get paid?", opts: ["Hourly", "Salary", "Per claim (per job)", "Not sure"], scores: [3, 3, 0, 2], reveal: "Per claim. The more claims you close efficiently, the more you earn. Top adjusters build systems to process claims fast and maximize their payout per deployment." },
  { q: "Have you ever considered a career where you can deploy and make money fast?", opts: ["Yes", "Maybe", "No", "Never thought about it"], scores: [0, 1, 2, 3], reveal: "Most people in this career stumbled on it by accident. The ones who act on it quickly are the ones who get to the front of the line when the next storm hits." },
  { q: "Before this conversation, how much did you know about this industry?", opts: ["A lot", "A little", "Almost nothing", "Absolutely nothing"], scores: [0, 1, 2, 3], reveal: "The less you knew, the more upside you have. You're discovering something most people never will — and now you know exactly where to start." },
];

const PRIMARY = "#1B3A2D";
const ACCENT = "#D4A853";
const BG = "#F2EDE4";
const SAGE = "#7A9E87";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const total = Object.entries(answers).reduce((sum, [i, a]) => sum + questions[i].scores[a], 0);
  const max = questions.reduce((s, q) => s + Math.max(...q.scores), 0);
  const pct = Math.round((total / max) * 100);

  function select(i) { setAnswers({ ...answers, [current]: i }); }
  function goNext() { if (current < questions.length - 1) setCurrent(current + 1); else setDone(true); }
  function goBack() { if (current > 0) setCurrent(current - 1); }

  const letters = ["A", "B", "C", "D"];

  if (done) {
    return (
      <main style={{ ...s.wrap, background: BG }}>
        <div style={s.resultHero}>
          <div style={s.score}>{pct}%</div>
          <div style={s.scoreLabel}>knowledge score</div>
          <div style={s.resultHeadline}>You could be making extra money faster than you thought.</div>
          <div style={s.resultSub}>You know more than you think — and now you know this industry is real. A 15-minute call with Larry will show you exactly how to turn that curiosity into income.</div>
        </div>
        <div style={s.reveals}>
          {questions.map((q, i) => (
            <div key={i} style={s.revealItem}>
              <div style={s.revealDot} />
              <div style={s.revealText}>{q.reveal}</div>
            </div>
          ))}
        </div>
        <div style={s.ctaCard}>
          <div style={s.ctaTitle}>Your next step is clear</div>
          <div style={s.ctaSub}>Book a free 15-minute call with Larry to get a roadmap built around your exact situation.</div>
          <a href="https://cat.jsimonesolutions.com/opt-in" style={s.ctaBtn}>Book your free call</a>
        </div>
      </main>
    );
  }

  return (
    <main style={{ ...s.wrap, background: BG }}>
      <div style={s.hero}>
        <div style={s.heroTag}>60-second quiz</div>
        <h1 style={s.heroTitle}>How much do you <span style={{ color: ACCENT }}>actually know?</span></h1>
        <p style={s.heroSub}>Most people scrolling right now have no idea this career exists. Answer 10 quick questions and find out if you're sitting on an opportunity you've been sleeping on.</p>
      </div>
      <div style={s.progressBar}>
        <div style={{ ...s.progressFill, width: `${((current + 1) / questions.length) * 100}%` }} />
      </div>
      <div style={s.qLabel}>Question {current + 1} of {questions.length}</div>
      <div style={s.qText}>{questions[current].q}</div>
      <div style={s.options}>
        {questions[current].opts.map((opt, i) => (
          <div key={i} style={{ ...s.opt, ...(answers[current] === i ? s.optSelected : {}) }} onClick={() => select(i)}>
            <div style={{ ...s.optMarker, ...(answers[current] === i ? s.optMarkerSelected : {}) }}>{letters[i]}</div>
            <div style={s.optText}>{opt}</div>
          </div>
        ))}
      </div>
      <div style={s.navRow}>
        {current > 0 && <button style={s.btnBack} onClick={goBack}>Back</button>}
        <button style={{ ...s.btnNext, opacity: answers[current] === undefined ? 0.35 : 1 }} disabled={answers[current] === undefined} onClick={goNext}>
          {current === questions.length - 1 ? "See my results" : "Continue"}
        </button>
        <span style={s.qCount}>{questions.length - current - 1} left</span>
      </div>
    </main>
  );
}

const s = {
  wrap: { maxWidth: 640, margin: "0 auto", padding: "1.5rem 1rem", fontFamily: "Georgia, serif", minHeight: "100vh" },
  hero: { background: PRIMARY, borderRadius: 16, padding: "2rem 1.5rem", marginBottom: "1.25rem" },
  heroTag: { display: "inline-block", background: ACCENT, color: PRIMARY, fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, marginBottom: 12, fontFamily: "system-ui, sans-serif" },
  heroTitle: { fontFamily: "Georgia, serif", fontSize: "2rem", color: "#F2EDE4", lineHeight: 1.1, marginBottom: 12 },
  heroSub: { fontSize: 13, color: "rgba(242,237,228,0.75)", lineHeight: 1.6, margin: 0, fontFamily: "system-ui, sans-serif" },
  progressBar: { height: 4, background: "#C8C0B4", borderRadius: 2, marginBottom: "1.25rem", overflow: "hidden" },
  progressFill: { height: "100%", background: ACCENT, borderRadius: 2, transition: "width 0.4s ease" },
  qLabel: { fontSize: 11, fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase", color: ACCENT, marginBottom: 6, fontFamily: "system-ui, sans-serif" },
  qText: { fontSize: "1rem", fontWeight: 600, marginBottom: "1rem", lineHeight: 1.4, color: PRIMARY, fontFamily: "Georgia, serif" },
  options: { display: "flex", flexDirection: "column", gap: 8, marginBottom: "1.25rem" },
  opt: { display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", border: "1px solid #C8C0B4", borderRadius: 10, cursor: "pointer", background: "#fff", fontFamily: "system-ui, sans-serif" },
  optSelected: { borderColor: ACCENT, background: "#FBF5E8" },
  optMarker: { width: 22, height: 22, borderRadius: "50%", border: "1.5px solid #C8C0B4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, flexShrink: 0, color: "#888" },
  optMarkerSelected: { background: ACCENT, borderColor: ACCENT, color: PRIMARY },
  optText: { fontSize: 13, color: "#2C2C2A" },
  navRow: { display: "flex", gap: 10, alignItems: "center" },
  btnNext: { background: ACCENT, color: PRIMARY, border: "none", padding: "11px 26px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "system-ui, sans-serif" },
  btnBack: { background: "transparent", color: "#888", border: "1px solid #C8C0B4", padding: "11px 18px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontFamily: "system-ui, sans-serif" },
  qCount: { fontSize: 12, color: "#888", marginLeft: "auto", fontFamily: "system-ui, sans-serif" },
  resultHero: { background: PRIMARY, borderRadius: 16, padding: "2rem 1.5rem", marginBottom: "1.25rem", textAlign: "center" },
  score: { fontFamily: "Georgia, serif", fontSize: "4.5rem", color: ACCENT, lineHeight: 1 },
  scoreLabel: { fontSize: 12, color: "rgba(242,237,228,0.6)", letterSpacing: "1px", textTransform: "uppercase", marginTop: 4, fontFamily: "system-ui, sans-serif" },
  resultHeadline: { fontFamily: "Georgia, serif", fontSize: "1.4rem", color: "#F2EDE4", marginTop: 14, lineHeight: 1.3 },
  resultSub: { fontSize: 13, color: "rgba(242,237,228,0.75)", lineHeight: 1.6, marginTop: 8, fontFamily: "system-ui, sans-serif" },
  reveals: { display: "flex", flexDirection: "column", gap: 8, marginBottom: "1.25rem" },
  revealItem: { display: "flex", gap: 12, alignItems: "flex-start", padding: "11px 14px", borderRadius: 10, border: "1px solid #C8C0B4", background: "#fff" },
  revealDot: { width: 8, height: 8, borderRadius: "50%", flexShrink: 0, marginTop: 5, background: SAGE },
  revealText: { fontSize: 13, color: "#2C2C2A", lineHeight: 1.5, fontFamily: "system-ui, sans-serif" },
  ctaCard: { background: PRIMARY, borderRadius: 12, padding: "1.5rem", textAlign: "center" },
  ctaTitle: { fontFamily: "Georgia, serif", fontSize: "1.4rem", color: ACCENT, marginBottom: 6 },
  ctaSub: { fontSize: 13, color: "rgba(242,237,228,0.75)", marginBottom: "1rem", lineHeight: 1.5, fontFamily: "system-ui, sans-serif" },
  ctaBtn: { display: "inline-block", background: ACCENT, color: PRIMARY, padding: "12px 30px", borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: "none", fontFamily: "system-ui, sans-serif" },
};
