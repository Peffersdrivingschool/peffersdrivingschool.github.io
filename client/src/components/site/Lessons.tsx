import { ArrowUpRight } from "lucide-react";
import { faqs, lessonTypes } from "@/lib/business";
import { Pricing } from "./Pricing";

export function Lessons() {
  return (
    <section
      className="section lessons-section"
      id="lessons"
      aria-labelledby="lessons-title"
    >
      <div className="shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Lessons
            </p>
            <h2 id="lessons-title">Driving lessons.</h2>
          </div>
          <div className="section-heading-aside">
            <p>I teach new drivers, returning drivers and test preparation.</p>
            <a className="text-link" href="#contact">
              Contact me
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="simple-lesson-list">
          {lessonTypes.map((lesson) => (
            <article className="simple-lesson-row" key={lesson.title}>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
              <a href="#contact" aria-label={`Ask about ${lesson.title}`}>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="lesson-start-grid">
          <div className="lesson-start-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Before we start
            </p>
            <h3>What happens first?</h3>
            <p>
              I will explain the car and start at a pace that suits you. Bring
              your provisional licence, glasses or contact lenses if you need
              them, and comfortable shoes.
            </p>
          </div>
          <div className="lesson-faq-list" id="lesson-faqs">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
      <Pricing embedded />
    </section>
  );
}
