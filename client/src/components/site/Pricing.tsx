import { lessonPlans } from "@/lib/business";

export function Pricing({ embedded = false }: { embedded?: boolean }) {
  const Wrapper = embedded ? "div" : "section";

  return (
    <Wrapper
      className="section pricing-section pricing-section--simple"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="shell">
        <h2 id="pricing-title">Simple prices.</h2>
        <div className="simple-price-list">
          {lessonPlans.map((plan) => (
            <div className="simple-price-row" key={plan.title}>
              <span>{plan.title}</span>
              <strong>
                {plan.price}
                <small>{plan.priceDetail}</small>
              </strong>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
