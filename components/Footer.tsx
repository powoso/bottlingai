import { DOMAIN_NAME, SEDO_PORTFOLIO_URL, CONTACT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-text-secondary">
          <span className="font-semibold text-text-primary">{DOMAIN_NAME}</span>{" "}
          — Premium AI Domain
        </div>

        <div className="flex items-center gap-6 text-sm text-text-secondary">
          <a
            href={SEDO_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            View Portfolio
          </a>
          {CONTACT_EMAIL && (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-accent transition-colors"
            >
              Contact
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
