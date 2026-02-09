"use client";

import Link from "next/link";
import {
  Leaf,
  TrendingUp,
  Users,
  Gift,
  BarChart3,
  Shield,
  Upload,
  Building2,
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Globe,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const features = [
  { icon: BarChart3, title: "ESG Scoring", desc: "Score every transaction against 100+ companies with verified ESG data" },
  { icon: TrendingUp, title: "Track Progress", desc: "See your sustainability score trend over time with detailed breakdowns" },
  { icon: Gift, title: "Earn Rewards", desc: "Earn points for sustainable spending — redeem for carbon offsets and more" },
  { icon: Users, title: "Community", desc: "Compare your score on the leaderboard and join sustainability streaks" },
  { icon: Upload, title: "Easy Upload", desc: "Upload bank transactions via CSV or enter them manually" },
  { icon: Shield, title: "Brand Portal", desc: "Banks and brands get analytics, rewards management, and white-label" },
];

const steps = [
  { num: 1, icon: Upload, title: "Upload Transactions", desc: "Drop a CSV or connect your bank — we handle the rest." },
  { num: 2, icon: Zap, title: "AI Scoring", desc: "Every transaction is scored across E, S, and G dimensions in real time." },
  { num: 3, icon: Gift, title: "Earn Rewards", desc: "Accumulate points for sustainable purchases and redeem them for offsets." },
];

const stats = [
  { icon: Building2, value: "100+", label: "Companies rated" },
  { icon: Globe, value: "3", label: "ESG dimensions" },
  { icon: Zap, value: "Real-time", label: "Scoring engine" },
];

const bankBenefits = [
  "White-label analytics",
  "Customer engagement",
  "ESG compliance",
  "Reward management",
];

const trustBadges = [
  "No credit card",
  "Free tier available",
  "Enterprise ready",
];

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative isolate">
        {/* Animated gradient mesh background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          {/* Large radial glow — top-left */}
          <motion.div
            className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" as const }}
          />
          {/* Secondary glow — right */}
          <motion.div
            className="absolute top-24 right-0 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" as const }}
          />
          {/* Grid dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 pt-28 pb-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Pill badge */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" as const }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium ring-1 ring-primary/20">
                <Leaf className="w-4 h-4" />
                ESG Customer Engagement Platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            >
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Know the impact of
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                every dollar you spend
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="mt-6 text-lg text-muted max-w-2xl mx-auto"
            >
              ESG Mesh scores your transactions against real ESG data from 100+
              companies. Earn points for sustainable choices, track your
              progress, and redeem rewards.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/dashboard"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-medium transition-colors"
              >
                View Dashboard
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border hover:border-primary/40 hover:bg-card-hover rounded-xl font-medium transition-colors"
              >
                Upload Transactions
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW IT WORKS                                                 */}
      {/* ============================================================ */}
      <section className="py-24 border-t border-border">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="text-sm font-medium text-primary uppercase tracking-widest"
            >
              How it works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Three steps to sustainable spending
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 relative"
          >
            {/* Connector lines — desktop only */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30"
            />

            {steps.map((s) => (
              <motion.div
                key={s.num}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number ring */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 ring-1 ring-primary/20 mb-5">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 md:right-auto md:-top-1 md:-left-1 text-xs font-bold text-primary bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center ring-1 ring-primary/20">
                  {s.num}
                </span>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted max-w-xs">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS / IMPACT BAR                                           */}
      {/* ============================================================ */}
      <section className="border-t border-border bg-card/50">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 sm:divide-x sm:divide-border"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className="flex flex-col items-center gap-2 sm:px-12"
              >
                <s.icon className="w-5 h-5 text-primary mb-1" />
                <span className="text-2xl font-bold text-primary">{s.value}</span>
                <span className="text-sm text-muted">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FEATURES GRID                                                */}
      {/* ============================================================ */}
      <section className="py-24 border-t border-border">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="text-sm font-medium text-primary uppercase tracking-widest"
            >
              Features
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Everything you need to spend sustainably
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" as const }}
                className="group relative bg-card border border-border rounded-2xl p-6 transition-colors hover:border-primary/30"
              >
                {/* Hover gradient overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
                <div className="relative">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1.5">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOR BANKS & BRANDS                                           */}
      {/* ============================================================ */}
      <section className="py-24 border-t border-border">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-card-hover p-8 sm:p-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
          >
            {/* Left — copy */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <Building2 className="w-4 h-4" />
                For Banks &amp; Brands
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Boost customer engagement through sustainability
              </h2>
              <p className="text-muted leading-relaxed">
                Integrate ESG scoring into your banking app or loyalty program.
                Provide white-label analytics dashboards, manage branded
                rewards, and stay ahead of ESG compliance requirements.
              </p>
            </motion.div>

            {/* Right — benefit pills */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="lg:w-1/2 grid sm:grid-cols-2 gap-3"
            >
              {bankBenefits.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-primary/5 border border-primary/10 text-sm font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {b}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA SECTION                                                  */}
      {/* ============================================================ */}
      <section className="py-24 border-t border-border">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
            className="relative rounded-2xl border border-primary/20 bg-card p-10 sm:p-14 text-center overflow-hidden"
          >
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
            />

            <div className="relative">
              <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" as const }}>
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
              >
                Start tracking your impact
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className="text-muted max-w-md mx-auto mb-8"
              >
                Upload your first transactions and see your ESG score in
                seconds. No credit card required.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                <Link
                  href="/upload"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-medium transition-colors"
                >
                  Get Started
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border hover:border-primary/40 hover:bg-card-hover rounded-xl font-medium transition-colors"
                >
                  Learn More
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted"
              >
                {trustBadges.map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-primary/60" />
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER                                                       */}
      {/* ============================================================ */}
      <footer className="border-t border-border py-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-muted">
            Built by{" "}
            <span className="text-foreground font-medium">
              Mithun Manjunatha
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
