import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business, navigation } from "@/lib/business";
import { Brand } from "./Brand";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${
        menuOpen ? "menu-is-open" : ""
      }`}
    >
      <div className="shell header-inner">
        <a href="#top" className="header-brand" onClick={closeMenu}>
          <Brand tone={scrolled || menuOpen ? "dark" : "light"} />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-call" href={business.phoneHref}>
          <Phone size={16} strokeWidth={1.9} aria-hidden="true" />
          <span>
            <small>Call me</small>
            <strong>{business.phoneDisplay}</strong>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-contact">
          <p>Based in Pontardawe, covering Swansea, Neath and South Wales.</p>
          <a href={business.phoneHref} onClick={closeMenu}>
            <Phone size={17} aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Message on Facebook
          </a>
        </div>
      </div>
    </header>
  );
}
