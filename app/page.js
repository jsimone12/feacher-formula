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

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const total = Object.entries(answers).reduce((sum, [i, a]) => sum + questions[i].scores[a], 0);
  const max = questions.reduce((s, q) => s + Math.max(...q.scores), 0);
  const pct = Math.round((total / max) * 100);

  function select(i) {
    setAnswers({ ...answers, [current]: i });
  }

  function goNext() {
    if (current < questions.length - 1) setCurrent(current + 1);
    else setDone(true);
  }

  function goBack() {
    if (current > 0) setCurrent(current - 1);
  }

  const letters = ["A", "B", "C", "D"];

  if (done) {
    return (
      <main style={styles.wrap}>
        <div style={styles.resultHero}>
          <div style={styles.score}>{pct}%</div>
          <div style={styles.scoreLabel}>knowledge score</div>
          <div style={styles.resultHeadline}>You could be making extra money faster than you thought.</div>
          <div style={styles.resultSub}>You know more than you think — and now you know this industry is real. A 15-minute call with Larry will show you exactly how to turn that curiosity into income.</div>
        </div>
        <div style={styles.reveals}>
          {questions.map((q, i) => (
            <div key={i} style={styles.revealItem}>
              <div style={styles.revealDot} />
              <div style={styles.revealText}>{q.reveal}</div>
            </div>
          ))}
        </div>
        <div style={styles.ctaCard}>
          <div style={styles.ctaTitle}>Your next step is clear</div>
          <div style={styles.ctaSub}>Book a free 15-minute call with Larry to get a roadmap built around your exact situation.</div>
          <a href="https://api.leadconnectorhq.com/widget/bookings/larry-intake-call" style={styles.ctaBtn}>Book your free call</a>
        </div>
      </main>
    );
  }

  return (
    <main style={styles.wrap}>
      <div style={styles.hero}>
        <div style={styles.heroTag}>60-second quiz</div>
        <h1 style={styles.heroTitle}>How much do you <span style={styles.heroAccent}>actually know?</span></h1>
        <p style={styles.heroSub}>Most people scrolling right now have no idea this career exists. Answer 10 quick questions and find out if you're sitting on an opportunity you've been sleeping on.</p>
      </div>
      <div style={styles.progressBar}>
        <div style={{ ...styles.progressFill, width: `${((current + 1) / questions.length) * 100}%` }} />
      </div>
      <div style={styles.qLabel}>Question {current + 1} of {questions.length}</div>
      <div style={styles.qText}>{questions[current].q}</div>
      <div style={styles.options}>
        {questions[current].opts.map((opt, i) => (
          <div key={i} style={{ ...styles.opt, ...(answers[current] === i ? styles.optSelected : {}) }} onClick={() => select(i)}>
            <div style={{ ...styles.optMarker, ...(answers[current] === i ? styles.optMarkerSelected : {}) }}>{letters[i]}</div>
            <div style={styles.optText}>{opt}</div>
          </div>
        ))}
      </div>
      <div style={styles.navRow}>
        {current > 0 && <button style={styles.btnBack} onClick={goBack}>Back</button>}
        <button style={{ ...styles.btnNext, opacity: answers[current] === undefined ? 0.35 : 1 }} disabled={answers[current] === undefined} onClick={goNext}>
          {current === questions.length - 1 ? "See my results" : "Continue"}
        </button>
        <span style={styles.qCount}>{questions.length - current - 1} left</span>
      </div>
    </main>
  );
}

const styles = {
  wrap: { maxWidth: 640, margin: "0 auto", padding: "1.5rem 1rem", fontFamily: "system-ui, sans-serif" },
  hero: { background: "#0E1B33", borderRadius: 16, padding: "2rem 1.5rem", marginBottom: "1.25rem" },
  heroTag: { display: "inline-block", background: "#C9A84C", color: "#0E1B33", fontSize: 11, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, marginBottom: 12 },
  heroTitle: { fontFamily: "Georgia, serif", fontSize: "2rem", color: "#F7F3EC", lineHeight: 1.1, marginBottom: 12 },
  heroAccent: { color: "#C9A84C" },
  heroSub: { fontSize: 13, color: "rgba(247,243,236,0.7)", lineHeight: 1.6, margin: 0 },
  progressBar: { height: 4, background: "#e5e7eb", borderRadius: 2, marginBottom: "1.25rem", overflow: "hidden" },
  progressFill: { height: "100%", background: "#C9A84C", borderRadius: 2, transition: "width 0.4s ease" },
  qLabel: { fontSize: 11, fontWeight: 500, letterSpacing: "1.2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: 6 },
  qText: { fontSize: "1rem", fontWeight: 500, marginBottom: "1rem", lineHeight: 1.4 },
  options: { display: "flex", flexDirection: "column", gap: 8, marginBottom: "1.25rem" },
  opt: { display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", border: "1px solid #e5e7eb", borderRadius: 10, cursor: "pointer", background: "#fff" },
  optSelected: { borderColor: "#C9A84C", background: "#fdf8ee" },
  optMarker: { width: 22, height: 22, borderRadius: "50%", border: "1.5px solid #d1d5db", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, flexShrink: 0, color: "#6b7280" },
  optMarkerSelected: { background: "#C9A84C", borderColor: "#C9A84C", color: "#0E1B33" },
  optText: { fontSize: 13 },
  navRow: { display: "flex", gap: 10, alignItems: "center" },
  btnNext: { background: "#C9A84C", color: "#0E1B33", border: "none", padding: "11px 26px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer" },
  btnBack: { background: "transparent", color: "#6b7280", border: "1px solid #e5e7eb", padding: "11px 18px", borderRadius: 8, fontSize: 13, cursor: "pointer" },
  qCount: { fontSize: 12, color: "#9ca3af", marginLeft: "auto" },
  resultHero: { background: "#0E1B33", borderRadius: 16, padding: "2rem 1.5rem", marginBottom: "1.25rem", textAlign: "center" },
  score: { fontFamily: "Georgia, serif", fontSize: "4.5rem", color: "#C9A84C", lineHeight: 1 },
  scoreLabel: { fontSize: 12, color: "rgba(247,243,236,0.6)", letterSpacing: "1px", textTransform: "uppercase", marginTop: 4 },
  resultHeadline: { fontFamily: "Georgia, serif", fontSize: "1.4rem", color: "#F7F3EC", marginTop: 14, lineHeight: 1.2 },
  resultSub: { fontSize: 13, color: "rgba(247,243,236,0.7)", lineHeight: 1.6, marginTop: 8 },
  reveals: { display: "flex", flexDirection: "column", gap: 8, marginBottom: "1.25rem" },
  revealItem: { display: "flex", gap: 12, alignItems: "flex-start", padding: "11px 14px", borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff" },
  revealDot: { width: 8, height: 8, borderRadius: "50%", flexShrink: 0, marginTop: 5, background: "#BA7517" },
  revealText: { fontSize: 13, color: "#4b5563", lineHeight: 1.5 },
  ctaCard: { background: "#C9A84C", borderRadius: 12, padding: "1.5rem", textAlign: "center" },
  ctaTitle: { fontFamily: "Georgia, serif", fontSize: "1.4rem", color: "#0E1B33", marginBottom: 6 },
  ctaSub: { fontSize: 13, color: "rgba(14,27,51,0.75)", marginBottom: "1rem", lineHeight: 1.5 },
  ctaBtn: { display: "inline-block", background: "#0E1B33", color: "#F7F3EC", padding: "12px 30px", borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: "none" },
};
