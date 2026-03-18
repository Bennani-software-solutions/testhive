import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
export default function NotFound() {
  return (
    <>
    <SEO
      title="Page Not Found"
      description="The page you are looking for does not exist. Browse TestHive's AI test automation platform, services, and documentation."
    />
    <div className="mx-auto max-w-7xl px-6 py-24 text-center">
      <h1 className="text-6xl font-extrabold text-indigo-600">404</h1>
      <p className="mt-4 text-xl font-semibold text-slate-900">Looks like this page wandered off.</p>
      <p className="mt-2 text-slate-600">No worries, here are some places you can go instead:</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link to="/" className="rounded-xl bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition">Home</Link>
        <a href="https://app.testhive.ma" className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition">Platform</a>
        <Link to="/pricing" className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition">Pricing</Link>
        <Link to="/faq" className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition">FAQ</Link>
      </div>
    </div>
    </>
  )
}
