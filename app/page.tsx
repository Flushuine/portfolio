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
    tech: ["Node.js", "Fastify", "Prisma", "MongoDB", "Docker Compose"],
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
    impact: "Cut manual monitoring time 30% · ~98% on-time project delivery",
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
            href="mailto:aqillatas33@gmail.com"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-300"
          >
            aqillatas33@gmail.com
          </a>
          <a
            href="/resume.pdf"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-zinc-700 transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-agil"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-zinc-700 transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
          >
            LinkedIn
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
