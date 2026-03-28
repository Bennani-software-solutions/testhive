import { Helmet } from "react-helmet-async";

const defaults = {
  siteName: "TestHive",
  siteUrl: "https://testhive.ma",
  image: "https://testhive.ma/assets/testHive.png",
};

export default function SEO({ title, description, path = "", image }) {
  const fullTitle = title
    ? `${title} | ${defaults.siteName}`
    : `${defaults.siteName} | QA Services & Test Automation`;
  const url = `${defaults.siteUrl}${path ? `/#/${path}` : ""}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image || defaults.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
