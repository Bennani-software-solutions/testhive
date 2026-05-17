import { motion as m } from "framer-motion";

const members = [
  {
    name: "Abdelaziz Bannani",
    role: "Founder · Senior QA Engineer",
    location: "Nador, MA",
    initials: "AB",
    linkedin: "https://www.linkedin.com/in/[linkedin-handle]/",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    name: "[Engineer 2]",
    role: "[Senior QA Automation]",
    location: "[Nador, MA]",
    initials: "[E2]",
    linkedin: "",
    color: "from-sky-500 to-sky-700",
  },
  {
    name: "[Engineer 3]",
    role: "[Functional Tester]",
    location: "[Nador, MA]",
    initials: "[E3]",
    linkedin: "",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    name: "[Engineer 4]",
    role: "[Senior QA Engineer]",
    location: "[Nador, MA]",
    initials: "[E4]",
    linkedin: "",
    color: "from-amber-500 to-amber-700",
  },
];

function Avatar({ initials, color }) {
  return (
    <div
      className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${color} text-white font-semibold text-xl shadow-md`}
      aria-hidden
    >
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <m.div
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            The team
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            The people who actually do the work.
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            No anonymous &ldquo;team&rdquo;. These are the engineers who will be in your
            standups, on your PRs, and in your Slack.
          </p>
        </m.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((p, i) => (
            <m.div
              key={p.name + i}
              initial={{ y: 12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex flex-col items-center text-center rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
            >
              <Avatar initials={p.initials} color={p.color} />
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-slate-700">{p.role}</p>
              <p className="mt-1 text-xs text-slate-500">{p.location}</p>
              {p.linkedin && (
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-xs font-medium text-indigo-600 hover:text-indigo-700"
                >
                  LinkedIn
                </a>
              )}
            </m.div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Hiring? See our{" "}
          <a href="/careers" className="text-indigo-600 hover:text-indigo-700 font-medium">
            careers page
          </a>
          .
        </p>
      </div>
    </section>
  );
}
