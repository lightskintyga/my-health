import { ArrowRight } from "lucide-react";
import { benefits } from "../model/content";

export function BenefitsSection() {
  return (
    <section className="section benefits-section" id="about">
      <div className="container">
        <div className="section-heading centered">
          <p className="kicker">Порядок вместо хаоса</p>
          <h2>Важное о здоровье не должно теряться</h2>
          <p className="lede">MyHealth собирает медицинскую историю в понятную систему, которой легко пользоваться каждый день.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text, tone }) => (
            <article className="benefit" key={title}>
              <span className={`benefit-icon ${tone}`} aria-hidden="true"><Icon size={24} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#signup">Хочу попробовать <ArrowRight size={16} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
