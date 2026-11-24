import { business } from "@/lib/business";

type BrandProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Brand({ tone = "light", className = "" }: BrandProps) {
  return (
    <span className={`brand-lockup brand-lockup--${tone} ${className}`}>
      <img
        className="brand-mark"
        src="/logo.png"
        alt=""
        width="46"
        height="46"
      />
      <span className="brand-wordmark">
        <span className="brand-name">{business.shortName}</span>
        <span className="brand-descriptor">Driving School</span>
      </span>
    </span>
  );
}
