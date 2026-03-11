import { useParams, Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import Section from "../components/Section";
import docs from "../data/docs";

function findArticle(slug) {
  for (const section of docs) {
    for (const article of section.articles) {
      if (article.slug === slug) {
        return { article, section };
      }
    }
  }
  return null;
}

function findAdjacentArticles(slug) {
  const allArticles = docs.flatMap((s) => s.articles);
  const idx = allArticles.findIndex((a) => a.slug === slug);
  return {
    prev: idx > 0 ? allArticles[idx - 1] : null,
    next: idx < allArticles.length - 1 ? allArticles[idx + 1] : null,
  };
}

export default function DocsArticle() {
  const { slug } = useParams();
  const result = findArticle(slug);

  if (!result) {
    return (
      <Section className="bg-white">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-slate-900">Article not found</h1>
          <Link to="/docs" className="mt-4 inline-block text-indigo-600 hover:text-indigo-700">
            Back to Knowledge Base
          </Link>
        </div>
      </Section>
    );
  }

  const { article, section } = result;
  const { prev, next } = findAdjacentArticles(slug);
  const Icon = section.icon;

  return (
    <Section className="bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Knowledge Base
          </Link>

          <div className="flex items-center gap-2 mt-3">
            <div className="rounded-lg bg-indigo-50 p-1.5">
              <Icon className="h-4 w-4 text-indigo-600" />
            </div>
            <span className="text-sm font-medium text-slate-500">
              {section.title}
            </span>
          </div>
        </m.div>

        {/* Title */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            {article.title}
          </h1>
          <p className="mt-3 text-lg text-slate-600">{article.desc}</p>
          <div className="flex items-center gap-2 mt-4 text-sm text-slate-400">
            <Clock className="h-4 w-4" />
            {article.time}
          </div>
        </m.div>

        {/* Content */}
        <div className="mt-12 space-y-10">
          {article.content.map((block, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                {block.heading}
              </h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                {block.text.split("\n\n").map((paragraph, pi) => {
                  // Check if paragraph looks like code/config
                  const isCode =
                    paragraph.startsWith("curl ") ||
                    paragraph.startsWith("GET ") ||
                    paragraph.startsWith("POST ") ||
                    paragraph.includes("Authorization:") ||
                    (paragraph.includes("  ") && paragraph.includes('"')) ||
                    paragraph.startsWith("- \"");

                  if (isCode || paragraph.startsWith("Feature:") || paragraph.startsWith("Given ") || paragraph.startsWith("When ") || paragraph.startsWith("Then ") || paragraph.startsWith("Scenario:")) {
                    return (
                      <pre
                        key={pi}
                        className="my-4 rounded-xl bg-slate-900 text-slate-200 p-5 text-sm overflow-x-auto font-mono leading-relaxed"
                      >
                        {paragraph}
                      </pre>
                    );
                  }

                  // Check for list items
                  if (paragraph.startsWith("- ") || paragraph.startsWith("1. ")) {
                    return (
                      <ul key={pi} className="my-3 space-y-1.5">
                        {paragraph.split("\n").map((line, li) => (
                          <li key={li} className="flex items-start gap-2 text-sm">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                            {line.replace(/^- /, "").replace(/^\d+\. /, "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return <p key={pi} className="mb-3">{paragraph}</p>;
                })}
              </div>
            </m.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/docs/${prev.slug}`}
              className="group rounded-xl border border-slate-200 p-4 hover:border-indigo-200 hover:shadow-sm transition"
            >
              <span className="text-xs text-slate-400">Previous</span>
              <p className="mt-1 font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/docs/${next.slug}`}
              className="group rounded-xl border border-slate-200 p-4 hover:border-indigo-200 hover:shadow-sm transition text-right"
            >
              <span className="text-xs text-slate-400">Next</span>
              <p className="mt-1 font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </Section>
  );
}
