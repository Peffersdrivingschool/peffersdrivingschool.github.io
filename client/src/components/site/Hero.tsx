import { ArrowDownRight, ArrowUpRight, MapPin, Phone, Star } from "lucide-react";
import { business } from "@/lib/business";

const andyFacts = [
  "Over 6 years of experience",
  "Certified dual-control manual car",
  "Over 70 5* reviews on Google",
  "Experience with neurodivergent drivers",
  "Simple and competitive prices",
  "Based near Swansea",
];

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-contour" aria-hidden="true">
        <svg viewBox="0 0 900 900" fill="none">
          <path d="M-80 380C80 280 210 300 320 190C440 72 550 50 740 92C870 120 930 52 1000 10" />
          <path d="M-60 480C110 360 230 390 360 270C490 150 600 120 790 160C880 179 960 120 1010 88" />
          <path d="M-30 600C150 470 290 500 410 380C530 260 650 225 840 255C925 269 980 225 1030 195" />
          <path d="M20 720C190 600 340 610 470 490C600 370 710 335 890 350C960 357 1000 330 1040 305" />
        </svg>
      </div>

      <div className="shell hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            Learn to drive
            <span className="hero-title-accent">with me.</span>
          </h1>

          <p className="hero-lede">
            I'm Andy, a driving instructor based near Swansea. I help new and
            returning drivers learn in a calm, relaxed way.
          </p>

          <ul className="hero-facts" aria-label="About Andy">
            {andyFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <a className="button button--sun" href="#contact">
              Book a lesson
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--quiet" href={business.phoneHref}>
              <Phone size={17} aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>

          <div className="hero-proof" aria-label="Local credibility">
            <div className="hero-rating">
              <span className="stars" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                    strokeWidth={0}
                    aria-hidden="true"
                  />
                ))}
              </span>
              <strong>{business.rating}</strong>
              <span>{business.reviewCount} Google reviews</span>
            </div>
            <span className="hero-proof-rule" aria-hidden="true" />
            <div className="hero-local">
              <MapPin size={15} aria-hidden="true" />
              Local roads, local knowledge
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              className="hero-image"
              src={business.heroImage}
              alt="Andy beside the learner car"
              width="612"
              height="403"
              fetchPriority="high"
            />
            <div className="hero-image-shade" aria-hidden="true" />
            <div className="hero-image-caption">
              <span>Driving lessons</span>
              <strong>Across the Swansea area.</strong>
            </div>
          </div>

          <div className="hero-visual-meta">
            <div className="hero-review-card">
              <span className="hero-review-number">{business.rating}</span>
              <span>
                <span className="stars" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </span>
                <small>Learner rated on Google</small>
              </span>
            </div>

            <a
              className="hero-map-link"
              href="#areas"
              aria-label="See the lesson coverage area"
            >
              <span>SA8</span>
              <span>
                See the
                <br />
                lesson area
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-footer shell">
        <span>First lessons</span>
        <span aria-hidden="true">/</span>
        <span>Refreshers</span>
        <span aria-hidden="true">/</span>
        <span>Test preparation</span>
        <a href="#lessons">
          Explore the lessons
          <ArrowDownRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
