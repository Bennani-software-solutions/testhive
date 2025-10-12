import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "To Automate or Not to Automate",
    excerpt:
      "When should you automate your tests and when is it better to pause? Insights from real projects on how to make automation work for you.",
    date: "2025-10-05",
    href: "/blog/to-automate-or-not-to-automate",
    tag: "Test Automation",
    img: "/assets/automation.png",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Insights & Articles
          </h2>

        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Motion.li
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              {p.img && (
                <div className="aspect-[16/9] w-full bg-gray-50">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-auto object-contain rounded-t-2xl bg-white"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center rounded-full bg-sky-50 px-2 py-1 font-medium text-sky-700">
                    {p.tag}
                  </span>
                  <time dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString()}
                  </time>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                <Link
                  to={p.href}
                  className="mt-4 inline-block text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Read more →
                </Link>
              </div>
            </Motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
