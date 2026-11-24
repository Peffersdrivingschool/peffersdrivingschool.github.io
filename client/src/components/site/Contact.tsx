import { useRef, useState, type FormEvent } from "react";
import {
  Check,
  Clipboard,
  MessageCircle,
  Send,
} from "lucide-react";
import { buildEnquiryText, business } from "@/lib/business";

type EnquiryDetails = {
  name: string;
  phone: string;
  postcode: string;
  lessonType: string;
  message: string;
};

const initialDetails: EnquiryDetails = {
  name: "",
  phone: "",
  postcode: "",
  lessonType: "First lesson",
  message: "",
};

export function Contact() {
  const [details, setDetails] = useState<EnquiryDetails>(initialDetails);
  const [prepared, setPrepared] = useState(false);
  const [enquiryText, setEnquiryText] = useState("");
  const [smsHref, setSmsHref] = useState(business.smsHref);
  const [copyStatus, setCopyStatus] = useState("");
  const enquiryCardRef = useRef<HTMLDivElement>(null);

  const updateField = (field: keyof EnquiryDetails, value: string) => {
    setDetails((current) => ({ ...current, [field]: value }));
    if (prepared) {
      setPrepared(false);
      setCopyStatus("");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = buildEnquiryText(details);
    setEnquiryText(text);
    setSmsHref(`${business.smsHref}?body=${encodeURIComponent(text)}`);
    setPrepared(true);
    setCopyStatus("");

    window.setTimeout(() => {
      const card = enquiryCardRef.current;
      if (!card) return;
      const top = card.getBoundingClientRect().top + window.scrollY - 94;
      window.scrollTo({ top, behavior: "smooth" });
    }, 80);
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(enquiryText);
      setCopyStatus("Message copied.");
    } catch {
      setCopyStatus("Select the message above and copy it manually.");
    }
  };

  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-contour" aria-hidden="true">
        <svg viewBox="0 0 900 900" fill="none">
          <path d="M-50 240C120 140 260 235 390 115C500 15 620 70 910 160" />
          <path d="M-70 340C130 220 280 325 430 190C550 82 680 135 930 235" />
          <path d="M-80 455C145 320 310 430 465 285C585 173 715 220 950 325" />
          <path d="M-90 585C165 430 330 545 500 390C620 280 750 320 970 430" />
        </svg>
      </div>

      <div className="shell contact-grid contact-grid--form-only">
        <div className="enquiry-card" ref={enquiryCardRef}>
          <div className="enquiry-card-heading">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Lesson enquiry
            </p>
            <h3>Contact Me</h3>
            <p>
              This form prepares a text message on your phone. You can check
              every word before it is sent.
            </p>
          </div>

          {!prepared ? (
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-row form-row--two">
                <label>
                  <span>Your name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="e.g. Alex Morgan"
                    value={details.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    required
                  />
                </label>
                <label>
                  <span>Mobile number</span>
                  <input
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="e.g. 07700 900000"
                    value={details.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    required
                  />
                </label>
              </div>

              <div className="form-row form-row--two">
                <label>
                  <span>Postcode</span>
                  <input
                    type="text"
                    name="postcode"
                    autoComplete="postal-code"
                    placeholder="e.g. SA8 4"
                    value={details.postcode}
                    onChange={(event) =>
                      updateField("postcode", event.target.value.toUpperCase())
                    }
                    required
                  />
                </label>
                <label>
                  <span>What are you looking for?</span>
                  <select
                    name="lessonType"
                    value={details.lessonType}
                    onChange={(event) =>
                      updateField("lessonType", event.target.value)
                    }
                  >
                    <option>First lesson</option>
                    <option>Refresher lesson</option>
                    <option>Test preparation</option>
                    <option>Theory support</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>

              <label>
                <span>Anything I should know? (optional)</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your experience so far, what you want to work on, or a question…"
                  value={details.message}
                  onChange={(event) => updateField("message", event.target.value)}
                />
              </label>

              <button className="button button--ink button--full" type="submit">
                Prepare my text
                <Send size={17} aria-hidden="true" />
              </button>

              <p className="form-note">
                No account needed. Nothing is sent from this page — your
                details become a message you can review and send.
              </p>
            </form>
          ) : (
            <div className="enquiry-prepared" aria-live="polite">
              <div className="prepared-icon">
                <Check size={23} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <p className="prepared-kicker">Your text is ready</p>
              <h4>One last tap.</h4>
              <p className="prepared-lede">
                Open your messaging app to review and send this message to
                me.
              </p>

              <div className="enquiry-preview" aria-label="Your prepared message">
                {enquiryText}
              </div>

              <a className="button button--ink button--full" href={smsHref}>
                Open my text
                <MessageCircle size={17} aria-hidden="true" />
              </a>

              <div className="prepared-actions">
                <button type="button" onClick={copyMessage}>
                  <Clipboard size={15} aria-hidden="true" />
                  Copy message
                </button>
                <button type="button" onClick={() => setPrepared(false)}>
                  Edit details
                </button>
              </div>

              <p className="form-note">
                Nothing has been sent yet. If your messaging app does not open,
                copy the message and text{" "}
                <a href={business.phoneHref}>{business.phoneDisplay}</a>.
              </p>
              <p className="copy-status" aria-live="polite">
                {copyStatus}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
