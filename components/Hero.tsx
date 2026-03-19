import { DOMAIN_NAME, BUY_NOW_URL, MAKE_OFFER_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] animate-glow-pulse" />
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface-light/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-text-secondary">
            Premium Domain — Available Now
          </span>
        </div>

        {/* Domain name */}
        <h1 className="animate-fade-in-up-delay-1 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
          <span className="gradient-text">{DOMAIN_NAME}</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          A category-defining domain for the next generation of{" "}
          <span className="text-text-primary font-medium">
            AI-powered automation
          </span>
          ,{" "}
          <span className="text-text-primary font-medium">
            intelligent systems
          </span>
          , and{" "}
          <span className="text-text-primary font-medium">
            industrial intelligence
          </span>
          .
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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

        {/* Trust line */}
        <p className="animate-fade-in-up-delay-3 text-sm text-text-secondary/60">
          Secure transaction via Sedo — the world&apos;s largest domain
          marketplace
        </p>
      </div>
    </section>
  );
}
