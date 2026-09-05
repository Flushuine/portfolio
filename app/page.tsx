type Project = {
  name: string;
  tagline: string;
  description: string;
  impact?: string;
  tech: string[];
};

const projects: Project[] = [
  {
    name: "MUF App",
    tagline: "Vehicle financing & dealer platform",
    description:
      "Backend for a multifinance vehicle-loan business: dealer management, BPKB collateral, loan installments, insurance, KYC identity checks, credit simulation, and payment/SSO integrations.",
    impact:
      "297K+ downloads · 269K+ registered users · 49K+ MAU · 4.87★ across 1,188 reviews",
    tech: ["Go", "PostgreSQL", "Redis", "MongoDB", "AWS S3", "Firebase FCM", "Docker"],
  },
  {
    name: "LeadSync",
    tagline: "Lead management & CRM sync",
    description:
      "Source-of-truth leads system for a financing ecosystem: lead capture, credit/tenor calculators, dealer catalogs, and event management, syncing into sibling platforms via Google Sheets.",
    tech: ["Go", "PostgreSQL", "MongoDB", "Verihubs", "Docker"],
  },
  {
    name: "Lajoe",
    tagline: "E-commerce marketplace with bidding",
    description:
      "Marketplace backend covering products, cart, orders, and vouchers, plus a bidding/auction feature, giveaways, and courier tracking integration.",
    tech: ["Go", "MySQL", "Redis", "MongoDB", "Docker", "Jenkins CI"],
  },
  {
    name: "i-Solutions",
    tagline: "HR & talent microservices platform",
    description:
      "Multi-service HR platform decomposed into an API gateway plus separate services for employer management, a talent/job marketplace, employee wellness, and scheduled jobs.",
    tech: ["Node.js", "Fastify", "Prisma", "MongoDB", "Docker"],
  },
  {
    name: "Dokumo",
    tagline: "Document management & e-signature platform",
    description:
      "Employee document management with e-signature workflows (sign areas, templates, participants, audit log), plus division-based media folder sharing and internal chat. Integrates an internal AI API for OCR text extraction and document summarization.",
    tech: ["Go", "PostgreSQL", "Docker"],
  },
  {
    name: "Lingkaran",
    tagline: "E-learning platform with government integration",
    description:
      "LMS platform (courses, mentors, learners, events) integrated with Indonesia's Prakerja pre-employment program, split across a Laravel CMS, an admin dashboard, an API gateway, and an LMS service.",
    tech: ["Nuxt.js", "Node.js", "Fastify", "Laravel", "MongoDB", "MySQL"],
  },
  {
    name: "Obserra",
    tagline: "School & childcare IoT monitoring",
    description:
      "Camera-feed monitoring system over MQTT for student attendance, pickup tracking, and parent linkage in an education-safety context.",
    tech: ["Go", "PostgreSQL", "MongoDB", "MQTT", "Docker"],
  },
  {
    name: "HydroTani",
    tagline: "Hydroponic IoT backend · co-founded",
    description:
      "Co-founded IoT + backend systems for 2 hydroponic farms, including 2 custom monitoring devices tracking nutrient levels, pH, and water temperature.",
    tech: ["Go", "GORM", "MQTT", "Docker"],
  },
];

const skills: { label: string; items: string[] }[] = [
  { label: "Backend", items: ["Go (Chi, Fiber)", "Node.js (Fastify, Express)", "PHP (Laravel)"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { label: "Tools & Infra", items: ["Docker", "Git", "MQTT"] },
  { label: "Payments & Messaging", items: ["Xendit", "Midtrans", "Firebase Cloud Messaging"] },
  {
    label: "Observability & Integrations",
    items: ["Bugsnag", "OpenTelemetry", "Twilio", "Verihubs", "Google Sheets API"],
  },
];

const experience: { role: string; org: string; period: string; summary: string }[] = [
  {
    role: "Backend Developer",
    org: "Elemes Group",
    period: "Feb 2022 – Present",
    summary:
      "Core Go backend for a multi-role fintech/dealer platform, plus CRM, cron/reporting, and an AI-powered document assistant.",
  },
  {
    role: "Co-Founder",
    org: "Hydrotani Tech",
    period: "Jan 2023 – Oct 2023",
    summary: "IoT + backend systems for 2 hydroponic farms, from concept to deployment.",
  },
  {
    role: "Freelance Backend Developer",
    org: "Independent",
    period: "Sep 2021 – Jan 2022",
    summary: "Scalable Node.js APIs for a CMS and an e-commerce platform.",
  },
];

export default function Home() {
  return (
    <div className="flex-1 bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
      <header className="mx-auto max-w-4xl px-6 pt-24 pb-16 sm:pt-32">
        <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
          Muhammad Agil
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Backend engineer
        </h1>
        <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          4+ years building production Go and Node.js services for
          high-traffic mobile platforms in fintech, e-commerce, HR, and IoT,
          from API design to payment integration to production incident
          response.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
          <a
            href="mailto:muhagil.dev@gmail.com"
            className="flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-300"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            muhagil.dev@gmail.com
          </a>
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-zinc-700 transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
              <path d="M14 2v6h6" />
            </svg>
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-agil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-zinc-700 transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.11 20.45H3.56V9h3.55v11.45Z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/Flushuine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-zinc-700 transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.32 9.32 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </svg>
            GitHub
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
          Skills
        </h2>
        <div className="mt-4 space-y-3">
          {skills.map((group) => (
            <div key={group.label} className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              <p className="w-48 shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
          Experience
        </h2>
        <div className="mt-4 space-y-6">
          {experience.map((job) => (
            <div key={job.role + job.org} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <p className="w-48 shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {job.period}
              </p>
              <div>
                <p className="text-sm font-semibold">
                  {job.role} · {job.org}
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  {job.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-6 pb-32">
        <h2 className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
          Selected work
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {project.tagline}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>
              {project.impact && (
                <p className="mt-3 font-mono text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  {project.impact}
                </p>
              )}
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center font-mono text-xs text-zinc-400 dark:border-zinc-800">
        © {new Date().getFullYear()} Muhammad Agil
      </footer>
    </div>
  );
}
