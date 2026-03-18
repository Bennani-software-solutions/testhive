import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Section from "../components/Section";
import { Search } from "lucide-react";
import { useState } from "react";
import docs from "../data/docs";

export default function KnowledgeBase() {
  const [search, setSearch] = useState("");
  const lowerSearch = search.toLowerCase();

  const filtered = docs
    .map((s) => ({
      ...s,
      articles: s.articles.filter(
        (a) =>
          a.title.toLowerCase().includes(lowerSearch) ||
          a.desc.toLowerCase().includes(lowerSearch)
      ),
    }))
    .filter((s) => s.articles.length > 0);

  return (
    <>
    <SEO
      title="Documentation"
      description="API reference, integration guides, and tutorials for the TestHive Platform. Everything you need to set up and master AI test automation."
      path="docs"
    />
    <Section className="bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Knowledge Base
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Everything you need to get the most out of the TestHive Platform.
          Guides, tutorials, and API reference.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-16">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-slate-50 py-4 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition"
          />
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-14">
        {filtered.map((section, si) => {
          const Icon = section.icon;
          return (
            <m.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: si * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-xl bg-indigo-50 p-2.5">
                  <Icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  {section.title}
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {section.articles.map((article) => (
                  <Link
                    to={`/docs/${article.slug}`}
                    key={article.slug}
                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition"
                  >
                    <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{article.desc}</p>
                    <p className="mt-3 text-xs text-slate-400">{article.time}</p>
                  </Link>
                ))}
              </div>
            </m.div>
          );
        })}
      </div>

      {/* API Reference CTA */}
      <div className="mt-20 text-center rounded-3xl bg-slate-900 p-10 text-white">
        <h2 className="text-2xl font-bold">API Reference</h2>
        <p className="mt-2 text-slate-300 max-w-lg mx-auto">
          Build custom integrations with the TestHive REST API. Full
          documentation with examples in cURL, JavaScript, and Python.
        </p>
        <button className="mt-6 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md hover:bg-slate-100 transition">
          View API Docs (Coming Soon)
        </button>
      </div>
    </Section>
    </>
  );
}
