import { ArrowUpRight, Phone, Star } from "lucide-react";
import { business, navigation } from "@/lib/business";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand-column">
            <a href="#top" className="footer-brand-link">
              <Brand tone="light" />
            </a>
            <p>Driving lessons across the Swansea area.</p>
            <span className="footer-rating">
              {business.rating} on Google · {business.reviewCount} reviews
            </span>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Explore</p>
            <nav aria-label="Footer navigation">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Get in touch</p>
            <a className="footer-contact-link" href={business.phoneHref}>
              <Phone size={16} aria-hidden="true" />
              {business.phoneDisplay}
            </a>
            <a
              className="footer-contact-link"
              href={business.facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer-f" aria-hidden="true">
                f
              </span>
              Message on Facebook
            </a>
            <a className="footer-contact-link" href="#contact">
              Prepare an enquiry
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="footer-column footer-area-column">
            <p className="footer-heading">Local to</p>
            <p>
              Swansea · Neath · Port Talbot · Brynaman · Llanelli ·
              Ystradgynlais
            </p>
          </div>
        </div>

        <div className="shell footer-bottom">
          <span>
            © {new Date().getFullYear()} {business.name}
          </span>
          <span>Pontardawe, Swansea area</span>
          <a href="#top">Back to the top ↑</a>
        </div>
      </footer>

      <div className="mobile-dock" aria-label="Quick contact">
        <a href={business.phoneHref}>
          <Phone size={17} aria-hidden="true" />
          Call me
        </a>
        <a href="#contact">
          Contact Me
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>

      <a className="contact-float" href="#contact">
        Contact Me
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>

      <a
        className="review-float"
        href={business.googleUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Read Peffers Driving School's five-star Google reviews"
      >
        <span className="review-float-stars" aria-hidden="true">
          <Star size={13} fill="currentColor" strokeWidth={0} />
          <Star size={13} fill="currentColor" strokeWidth={0} />
          <Star size={13} fill="currentColor" strokeWidth={0} />
          <Star size={13} fill="currentColor" strokeWidth={0} />
          <Star size={13} fill="currentColor" strokeWidth={0} />
        </span>
        <span>5★ Reviews</span>
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </>
  );
}
