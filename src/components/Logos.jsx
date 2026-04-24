// src/components/Logos.jsx
import { useEffect, useRef } from "react";

const items = [
  { name: "AWS", src: "/assets/aws.png" },
  { name: "Azure", src: "/assets/azure.png" },
  { name: "GCP", src: "/assets/GCP.png" },
  { name: "Playwright", src: "/assets/Playwright.png" },
  { name: "Cypress", src: "/assets/cypress.png" },
  { name: "Selenium", src: "/assets/selenium.png" },
  { name: "JMeter", src: "/assets/jmeter.svg" },
  { name: "Burp Suite", src: "/assets/burpsuite.svg" },
  { name: "Jira", src: "/assets/jira.svg" },
  { name: "Xray", src: "/assets/xray.svg" },
  { name: "Asana", src: "/assets/asana.svg" },
];

// Double the items so the scroll loops seamlessly
const doubled = [...items, ...items];

export default function Assets() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame;
    let pos = 0;
    const speed = 0.4; // px per frame

    const step = () => {
      pos += speed;
      // Reset when the first set has scrolled out of view
      if (pos >= track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);

    // Pause on hover
    const pause = () => cancelAnimationFrame(frame);
    const resume = () => { frame = requestAnimationFrame(step); };
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section aria-label="ecosystem" className="py-14 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-center text-xs font-semibold tracking-widest text-gray-500 uppercase mb-8">
          Tools & platforms we work with
        </h3>

        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <div ref={trackRef} className="flex gap-5 w-max will-change-transform">
            {doubled.map(({ name, src }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 w-28 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={src}
                  alt={name}
                  loading="lazy"
                  className="mx-auto h-8 w-auto opacity-95"
                />
                <p className="mt-1.5 text-center text-[10px] text-gray-400 truncate">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
