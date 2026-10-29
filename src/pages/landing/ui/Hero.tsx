import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { ResultSheet } from "./ResultSheet";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-badge"><Sparkles size={15} aria-hidden="true" /> Скоро в beta</p>
          <h1>Вся история здоровья — <em>в&nbsp;одном месте</em></h1>
          <p className="hero-lede">
            MyHealth помогает хранить результаты анализов и обследований, планировать визиты к врачам
            и замечать изменения показателей.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#signup">
              Записаться на beta-тест <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#interview">Принять участие в интервью</a>
          </div>
          <ul className="hero-trust">
            <li><ShieldCheck size={18} aria-hidden="true" /> Безопасное хранение</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Бесплатное участие</li>
          </ul>
        </div>
        <ResultSheet />
      </div>
    </section>
  );
}
