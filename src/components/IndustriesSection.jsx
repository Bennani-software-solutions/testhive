import { motion as Motion } from "framer-motion"
import {
  ShoppingCart,
  CircleDollarSign,
  Users,
  HeartPulse,
  Rocket,
  Gamepad2,
} from "lucide-react"

const industries = [
  {
    icon: ShoppingCart,
    title: "eCommerce",
    text: "We optimize user experience and payment gateway integrations. Our testing ensures smooth operations during high‑traffic periods.",
    tint: "from-orange-50 to-rose-50",
    iconTint: "bg-orange-50 text-orange-600",
  },
  {
    icon: CircleDollarSign,
    title: "Fintech",
    text: "We focus on transaction security and system stability. Our team specializes in penetration testing and stress testing for financial apps.",
    tint: "from-cyan-50 to-cyan-50",
    iconTint: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Users,
    title: "HR",
    text: "We ensure data privacy and ATS integrations. Our testing covers applicant tracking systems and resume parsing accuracy.",
    tint: "from-fuchsia-50 to-pink-50",
    iconTint: "bg-fuchsia-50 text-fuchsia-600",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    text: "We ensure HIPAA compliance and data security. Our testing covers patient data protection and medical device software reliability.",
    tint: "from-red-50 to-rose-50",
    iconTint: "bg-red-50 text-red-600",
  },
  {
    icon: Rocket,
    title: "Startup",
    text: "Software testing services for startups to ensure flawless performance before launch and reliable scaling after release.",
    tint: "from-violet-50 to-indigo-50",
    iconTint: "bg-violet-50 text-violet-600",
  },
  {
    icon: Gamepad2,
    title: "Media & Entertainment",
    text: "We validate content delivery and cross‑platform compatibility. Specialized in performance testing for streaming experiences.",
    tint: "from-amber-50 to-yellow-50",
    iconTint: "bg-amber-50 text-amber-600",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-between max-w-5xl mx-auto"
        >
          <div>
            <Motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Our QA Testing Services Support Your Industry
            </Motion.h2>
          </div>
          <Motion.a
            href="#"
            variants={fadeUp}
            className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1"
          >
            
          </Motion.a>
        </Motion.div>

        {/* Grid */}
        <Motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map(({ icon: Icon, title, text, tint, iconTint }) => (
            <Motion.li
              key={title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition"
            >
              {/* soft background tint */}
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${tint} blur-2xl`}
              />

              {/* icon */}
              <div
                className={`mb-4 inline-flex items-center justify-center rounded-xl ${iconTint} p-3`}
              >
                <Icon className="h-6 w-6" aria-hidden />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{text}</p>
            </Motion.li>
          ))}
        </Motion.ul>
      </div>
    </section>
  )
}
