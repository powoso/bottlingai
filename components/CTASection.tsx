import {
  DOMAIN_NAME,
  BUY_NOW_URL,
  MAKE_OFFER_URL,
  SEDO_PORTFOLIO_URL,
} from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Own <span className="gradient-text">{DOMAIN_NAME}</span>
        </h2>
        <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto">
          Don&apos;t let someone else build the future on this name. Secure it
          today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={BUY_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-[1.02]"
          >
            Buy This Domain
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href={MAKE_OFFER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-border hover:border-primary/50 text-text-primary font-semibold rounded-xl transition-all duration-300 hover:bg-surface-light"
          >
            Make an Offer
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        <a
          href={SEDO_PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors"
        >
          Or explore the full portfolio
          <svg
            className="w-3 h-3"
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
    </section>
  );
}
