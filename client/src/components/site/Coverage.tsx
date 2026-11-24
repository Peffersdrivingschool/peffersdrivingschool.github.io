import { ArrowUpRight, ExternalLink, MapPin } from "lucide-react";
import { business } from "@/lib/business";
import { SwanseaRadiusMap } from "./SwanseaRadiusMap";

const googleMapsLink =
  "https://www.google.com/maps/search/?api=1&query=Swansea%2C%20Wales";

export function Coverage() {
  return (
    <section
      className="section coverage-section"
      id="areas"
      aria-labelledby="coverage-title"
    >
      <div className="shell coverage-grid">
        <div className="coverage-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Local coverage
          </p>
          <h2 id="coverage-title">
            Where I teach.
          </h2>
          <p className="coverage-lede">
            My teaching covers Swansea City Centre and many surrounding areas
            in the greater Swansea area.
          </p>

          <div className="area-chips" aria-label="Areas covered">
            {business.areas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>

          <div className="coverage-note">
            <MapPin size={19} strokeWidth={1.7} aria-hidden="true" />
            <p>
              This is a rough guide to my area. Get in touch if you are not
              sure whether I can pick you up.
            </p>
          </div>

          <a className="text-link" href="#contact">
            Ask about your area
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="coverage-map-card coverage-map-card--google">
          <div className="map-topline">
            <span>Google Maps coverage</span>
            <span>Teaching area</span>
          </div>

          <div className="google-map-canvas">
            <SwanseaRadiusMap />
          </div>

          <div className="map-footer map-footer--google">
            <span>Swansea and surrounding area</span>
            <a href={googleMapsLink} target="_blank" rel="noreferrer">
              Open in Google Maps
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
