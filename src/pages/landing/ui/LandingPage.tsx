import "./landing.css";
import { BenefitsSection } from "./BenefitsSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ResearchSection } from "./ResearchSection";
import { SecuritySection } from "./SecuritySection";
import { SignupSection } from "./SignupSection";
import { WorkflowSection } from "./WorkflowSection";

export function LandingPage() {
  return (
    <div className="landing" id="top">
      <a className="skip-link" href="#main">Перейти к содержанию</a>
      <Header />
      <main id="main">
        <Hero />
        <BenefitsSection />
        <WorkflowSection />
        <SecuritySection />
        <ResearchSection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
}
