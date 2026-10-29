import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ResearchSection() {
  return (
    <section className="section research-section" id="interview">
      <div className="container research-grid">
        <article className="research-card">
          <p className="mono-label">30 минут · онлайн</p>
          <h2>Расскажите, как вы храните медицинские документы сейчас</h2>
          <p className="lede">
            Мы ищем людей, которые регулярно сдают анализы, посещают врачей или следят за показателями.
            Никаких правильных ответов — интересен ваш реальный опыт.
          </p>
          <ul className="checklist">
            <li><CheckCircle2 size={18} aria-hidden="true" /> Выберите удобное время</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Не нужно показывать личные данные</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Помогите повлиять на продукт</li>
          </ul>
          <a className="button button-light" href="#signup">Хочу на интервью <ArrowRight size={18} aria-hidden="true" /></a>
        </article>

        <figure className="quote-card">
          <blockquote>
            Мы хотим проверить не красивую идею, а реальную потребность. Ваш опыт поможет нам
            не создавать лишнего.
          </blockquote>
          <figcaption>
            <span className="quote-avatar" aria-hidden="true">М</span>
            <div><strong>Команда MyHealth</strong><span>Исследуем продукт вместе с будущими пользователями</span></div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
