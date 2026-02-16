"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--text-main)]">
      
      {/* Header */}
      <header className="border-b border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">
            Task Board
          </h1>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-[color:var(--text-muted)] hover:text-[color:var(--text-main)] transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="
                text-sm font-medium
                bg-[color:var(--accent)]
                text-white
                px-4 py-2
                rounded-lg
                transition
                hover:opacity-90
                hover:-translate-y-0.5
              "
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="max-w-6xl mx-auto px-6 py-24 space-y-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-semibold tracking-tight leading-tight">
              Organize your work.
              <br />
              <span className="text-[color:var(--accent)]">
                Stay focused.
              </span>
            </h2>

            <p className="text-lg text-[color:var(--text-muted)] max-w-lg">
              Capture tasks instantly, track progress clearly,
              and move work forward without distraction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/signup"
                className="
                  bg-[color:var(--accent)]
                  text-white
                  px-6 py-3
                  rounded-xl
                  text-sm font-medium
                  transition
                  hover:opacity-90
                  hover:-translate-y-0.5
                  text-center
                "
              >
                Create Free Account
              </Link>

              <Link
                href="/login"
                className="
                  border border-[color:var(--border)]
                  px-6 py-3
                  rounded-xl
                  text-sm font-medium
                  transition
                  hover:bg-[color:var(--surface-muted)]
                  hover:-translate-y-0.5
                  text-center
                "
              >
                Sign In
              </Link>
            </div>
          </motion.div>

          {/* Right Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="
                rounded-2xl
                border border-[color:var(--border)]
                bg-[color:var(--surface)]
                shadow-sm
                p-6
                space-y-4
                transition
                hover:shadow-md
              "
            >
              <div className="text-sm font-medium">
                Example Tasks
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center bg-[color:var(--surface-muted)] rounded-lg px-4 py-3 transition hover:scale-[1.02]">
                  <span className="text-sm">Design dashboard UI</span>
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                    In Progress
                  </span>
                </div>

                <div className="flex justify-between items-center bg-[color:var(--surface-muted)] rounded-lg px-4 py-3 transition hover:scale-[1.02]">
                  <span className="text-sm">Implement authentication</span>
                  <span className="text-xs bg-emerald-600 text-white px-2 py-1 rounded-full">
                    Done
                  </span>
                </div>

                <div className="flex justify-between items-center bg-[color:var(--surface-muted)] rounded-lg px-4 py-3 transition hover:scale-[1.02]">
                  <span className="text-sm">Write documentation</span>
                  <span className="text-xs bg-slate-600 text-white px-2 py-1 rounded-full">
                    Todo
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-40 h-40 bg-[color:var(--accent-soft)] rounded-full blur-3xl opacity-40 pointer-events-none" />
          </motion.div>
        </div>

        {/* FEATURES SECTION */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Simple Task Tracking",
              desc: "Create and update tasks with clarity and zero clutter."
            },
            {
              title: "Secure Authentication",
              desc: "Encrypted passwords and protected routes built properly."
            },
            {
              title: "Clean Workflow",
              desc: "Todo, In Progress, Done — nothing more, nothing less."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="
                p-6
                rounded-2xl
                border border-[color:var(--border)]
                bg-[color:var(--surface)]
                transition
                hover:shadow-md
              "
            >
              <h3 className="font-semibold text-lg">
                {feature.title}
              </h3>
              <p className="text-sm text-[color:var(--text-muted)] mt-2">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-[color:var(--text-muted)] text-center">
          © {new Date().getFullYear()} Task Board — Built with Next.js & Prisma.
        </div>
      </footer>
    </div>
  );
}
