import { SEDO_PORTFOLIO_URL } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="glow-border rounded-2xl bg-surface-card border border-border p-10 sm:p-14">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25L12 17.25 2.25 12l4.179-2.25m11.142 0l4.179 2.25L12 22.5l-9.75-5.25 4.179-2.25"
              />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Explore More Premium AI Domains
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            This is part of a curated portfolio of high-value AI domain names.
            Find the perfect brand for your next venture.
          </p>
          <a
            href={SEDO_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 hover:border-accent/40 font-semibold rounded-xl transition-all duration-300"
          >
            View Full Portfolio
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
