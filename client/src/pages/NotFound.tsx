import { ArrowLeft, Phone } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { business } from "@/lib/business";

const NOT_FOUND_PATH = "/404";

export default function NotFound() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);

    if (window.location.pathname.replace(/\/$/, "") !== NOT_FOUND_PATH) {
      window.location.replace(NOT_FOUND_PATH);
    }

    return () => robots.remove();
  }, []);

  return (
    <main className="not-found-page">
      <div className="not-found-inner">
        <div className="not-found-mark" aria-hidden="true">
          L
        </div>
        <h1>Wrong turn.</h1>
        <h2>This road doesn’t go anywhere.</h2>
        <p>
          The page you were looking for has moved or no longer exists. Let’s get
          you back to the right place.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="button button--sun"
            onClick={() => setLocation("/")}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to the homepage
          </button>
          <a className="button button--quiet" href={business.phoneHref}>
            <Phone size={17} aria-hidden="true" />
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
}
