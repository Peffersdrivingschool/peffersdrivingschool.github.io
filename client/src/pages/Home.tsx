import { Contact } from "@/components/site/Contact";
import { Coverage } from "@/components/site/Coverage";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Lessons } from "@/components/site/Lessons";
import { Reviews } from "@/components/site/Reviews";

export default function Home() {
  return (
    <div className="site-page">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Coverage />
        <Reviews />
        <Lessons />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
