import { ArrowUpRight, Star } from "lucide-react";
import { business, reviews } from "@/lib/business";
import { PassReel } from "./PassReel";

export function Reviews() {
  return (
    <section
      className="section reviews-section"
      id="reviews"
      aria-labelledby="reviews-title"
    >
      <div className="shell">
        <div className="reviews-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Reviews
            </p>
            <h2 id="reviews-title">
              What my learners
              <span className="display-accent">say about me.</span>
            </h2>
          </div>

          <a
            className="rating-lockup"
            href={business.googleUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${business.rating} out of 5 from ${business.reviewCount} Google reviews`}
          >
            <span className="rating-number">{business.rating}</span>
            <span className="rating-detail">
              <span className="stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span>{business.reviewCount} Google reviews</span>
            </span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>

        <PassReel />

        <div className="review-grid">
          {reviews.map((review, index) => (
            <blockquote
              className={`review-card review-card--${index + 1}`}
              key={review.name}
            >
              <div className="review-card-topline">
                <span className="stars" aria-label={`${review.rating} out of 5 stars`}>
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                      aria-hidden="true"
                    />
                  ))}
                </span>
                <span className="google-mark" aria-label="Google review">
                  G
                </span>
              </div>
              <p className="review-quote">“{review.quote}”</p>
              <footer>
                <strong>{review.name}</strong>
                <span>{review.source}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="reviews-footer">
          <p>
            Reviews from Google. Checked November 2026.
          </p>
          <a
            className="text-link"
            href={business.googleUrl}
            target="_blank"
            rel="noreferrer"
          >
            Read the reviews on Google
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
