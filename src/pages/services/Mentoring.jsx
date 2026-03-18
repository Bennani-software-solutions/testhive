// src/pages/services/Mentoring.jsx
import SEO from "../../components/SEO";
import MentoringSection from "../../components/MentoringSection";

export default function Mentoring() {
    return (
        <main className="bg-white">
            <SEO
              title="QA Mentoring"
              description="Level up your QA skills with hands-on mentoring. Learn test automation, strategy, and best practices from experienced practitioners."
              path="services/mentoring"
            />
            <MentoringSection />
        </main>
    );
}

