"use client";

import Link from "next/link";
import { Leaf, TrendingUp, Users, Gift, BarChart3, Shield, Upload } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: BarChart3, title: "ESG Scoring", desc: "Score every transaction against 100+ companies with verified ESG data" },
  { icon: TrendingUp, title: "Track Progress", desc: "See your sustainability score trend over time with detailed breakdowns" },
  { icon: Gift, title: "Earn Rewards", desc: "Earn points for sustainable spending — redeem for carbon offsets and more" },
  { icon: Users, title: "Community", desc: "Compare your score on the leaderboard and join sustainability streaks" },
  { icon: Upload, title: "Easy Upload", desc: "Upload bank transactions via CSV or enter them manually" },
  { icon: Shield, title: "Brand Portal", desc: "Banks and brands get analytics, rewards management, and white-label" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-4 pt-24 pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" />
            ESG Customer Engagement Platform
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Know the impact of
            <br />
            <span className="text-primary">every dollar you spend</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            ESG Mesh scores your transactions against real ESG data from 100+ companies.
            Earn points for sustainable choices, track your progress, and redeem rewards.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/dashboard" className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-medium transition-colors">
              View Dashboard
            </Link>
            <Link href="/upload" className="px-6 py-3 border border-border hover:bg-card-hover rounded-xl font-medium transition-colors">
              Upload Transactions
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
            >
              <f.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-muted">
            Built for banks and brands who want to boost customer engagement through sustainability.
          </p>
        </div>
      </section>
    </div>
  );
}
