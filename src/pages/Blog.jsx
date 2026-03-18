import SEO from '../components/SEO'
import Blog from '../components/Blog'

export default function Page() {
  return (
    <>
      <SEO
        title="Blog"
        description="Practical insights on test automation, QA strategy, and software quality. Expert articles from the TestHive team."
        path="blog"
      />
      <Blog />
    </>
  );
}
