import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  FileHeart,
  FlaskConical,
  HeartPulse,
  LineChart,
  LockKeyhole,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import "./landing.css";

type Interest = "beta" | "interview" | "both";

const benefits = [
  {
    icon: FileHeart,
    title: "Все документы рядом",
    text: "Анализы, заключения и назначения больше не теряются в почте, чатах и галерее.",
    tone: "violet",
  },
  {
    icon: CalendarCheck,
    title: "Здоровье по плану",
    text: "События и напоминания помогают вовремя сдавать анализы и посещать врачей.",
    tone: "green",
  },
  {
    icon: LineChart,
    title: "Понятная динамика",
    text: "Однородные показатели собраны по датам — изменения заметны без ручных таблиц.",
    tone: "orange",
  },
];

const steps = [
  ["01", "Добавляйте", "Сохраняйте документ или создавайте медицинское событие вручную."],
  ["02", "Организуйте", "Привязывайте результаты к приёмам, датам и категориям."],
  ["03", "Находите", "Ищите по врачу, клинике, показателю или заметке за несколько секунд."],
];

const interestOptions: [Interest, string, string][] = [
  ["beta", "Beta-тест", "Попробовать приложение первым"],
  ["interview", "Интервью", "30 минут о вашем опыте"],
  ["both", "Оба варианта", "Максимально помочь продукту"],
];

function Brand({ href = "#top" }: { href?: string }) {
  return (
    <a className="brand" href={href} aria-label="MyHealth — на главную">
      <span className="brand-mark" aria-hidden="true"><HeartPulse size={20} /></span>
      <span className="brand-name">MyHealth</span>
    </a>
  );
}

function ResultSheet() {
  return (
    <div className="result-wrap">
      <div className="result-sheet" aria-hidden="true">
        <div className="sheet-head">
          <div>
            <p className="mono-label">Лист результатов</p>
            <p className="sheet-date">12 июня 2025</p>
          </div>
          <span className="sheet-source">Invitro</span>
        </div>

        <div className="sheet-metric">
          <div className="metric-top">
            <p className="metric-name">Ферритин, сыворотка</p>
            <span className="stamp">В норме</span>
          </div>
          <p className="metric-value">42 <small>нг/мл</small></p>
          <div className="range">
            <div className="range-track" aria-hidden="true">
              <span className="range-band" />
              <span className="range-marker" />
            </div>
            <div className="range-scale" aria-hidden="true">
              <span>0</span><span>15</span><span>150</span><span>300</span>
            </div>
          </div>
          <p className="range-note">Референсный диапазон 15–150&nbsp;нг/мл</p>
        </div>

        <div className="sheet-trend">
          <p className="mono-label">Динамика · 6 месяцев</p>
          <svg viewBox="0 0 320 76" aria-hidden="true">
            <defs>
              <linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="currentColor" stopOpacity="0.18" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="trend-area" d="M8,62 C44,56 64,60 96,56 S150,44 180,46 S240,34 268,32 S300,26 312,20 L312,70 L8,70 Z" />
            <path className="trend-line" d="M8,62 C44,56 64,60 96,56 S150,44 180,46 S240,34 268,32 S300,26 312,20" />
            {[["8", "62"], ["96", "56"], ["180", "46"], ["268", "32"], ["312", "20"]].map(([cx, cy]) => (
              <circle key={cx} cx={cx} cy={cy} r="3.5" />
            ))}
          </svg>
          <div className="trend-scale" aria-hidden="true">
            <span>Янв</span><span>Фев</span><span>Мар</span><span>Апр</span><span>Июн</span>
          </div>
        </div>

        <ul className="sheet-records">
          <li>
            <span className="record-icon violet" aria-hidden="true"><FlaskConical size={18} /></span>
            <span className="record-copy"><strong>Биохимический анализ</strong><span>12 июня · 8 показателей</span></span>
            <ChevronRight size={18} className="record-arrow" aria-hidden="true" />
          </li>
          <li>
            <span className="record-icon green" aria-hidden="true"><FileHeart size={18} /></span>
            <span className="record-copy"><strong>УЗИ щитовидной железы</strong><span>4 июня · Медси</span></span>
            <ChevronRight size={18} className="record-arrow" aria-hidden="true" />
          </li>
        </ul>

        <p className="sheet-foot"><BellRing size={16} aria-hidden="true" /> Напоминание о приёме: 19 июня, 09:30</p>
      </div>
      <p className="visually-hidden">
        Пример экрана приложения: результат ферритина 42 нг/мл в пределах нормы, график динамики,
        список документов и напоминание о приёме.
      </p>
    </div>
  );
}

function SignupForm() {
  const [interest, setInterest] = useState<Interest>("both");
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="success-mark" aria-hidden="true"><CheckCircle2 size={32} /></span>
        <h2>Спасибо, вы в списке</h2>
        <p>Напишем на указанную почту, когда начнётся beta-тестирование, или предложим удобное время для интервью.</p>
        <button className="button button-secondary" type="button" onClick={() => setSubmitted(false)}>
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form className="signup-form" onSubmit={submit}>
      <div className="form-heading">
        <p className="mono-label">Ранний доступ</p>
        <h2>Помогите сделать MyHealth полезнее</h2>
        <p>Выберите удобный формат участия. Это бесплатно и ни к чему не обязывает.</p>
      </div>

      <fieldset className="interest-group">
        <legend className="visually-hidden">Формат участия</legend>
        {interestOptions.map(([value, title, note]) => (
          <button
            type="button"
            key={value}
            className={interest === value ? "interest active" : "interest"}
            aria-pressed={interest === value}
            onClick={() => setInterest(value)}
          >
            <span className="interest-check" aria-hidden="true">{interest === value && <Check size={13} />}</span>
            <span><strong>{title}</strong><small>{note}</small></span>
          </button>
        ))}
      </fieldset>

      <div className="field-row">
        <label className="field">
          <span>Как вас зовут</span>
          <input required name="name" autoComplete="given-name" placeholder="Анна" />
        </label>
        <label className="field">
          <span>Email</span>
          <input required type="email" name="email" autoComplete="email" spellCheck={false} placeholder="anna@example.com" />
        </label>
      </div>

      <label className="consent">
        <input required type="checkbox" name="consent" />
        <span className="consent-box" aria-hidden="true"><Check size={13} /></span>
        <span>Соглашаюсь на обработку данных и получение писем о beta-тестировании</span>
      </label>

      <button className="button button-primary submit" type="submit">
        Оставить заявку <ArrowRight size={18} aria-hidden="true" />
      </button>
      <p className="form-privacy"><LockKeyhole size={14} aria-hidden="true" /> Никакого спама. Только новости о запуске MyHealth.</p>
    </form>
  );
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="landing" id="top">
      <a className="skip-link" href="#main">Перейти к содержанию</a>

      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav
            id="site-nav"
            className={menuOpen ? "site-nav open" : "site-nav"}
            aria-label="Основная навигация"
          >
            <a href="#about" onClick={() => setMenuOpen(false)}>Возможности</a>
            <a href="#how" onClick={() => setMenuOpen(false)}>Как работает</a>
            <a href="#security" onClick={() => setMenuOpen(false)}>Безопасность</a>
            <a href="?view=phone">Прототип</a>
            <a className="nav-cta" href="#signup" onClick={() => setMenuOpen(false)}>Стать beta-тестером</a>
          </nav>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main">
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

        <section className="chaos-strip" aria-label="Знакомые проблемы">
          <div className="container chaos-inner">
            <span className="mono-label">Знакомо?</span>
            <ul>
              <li>Результат анализа в почте</li>
              <li>Заключение врача в галерее</li>
              <li>Дата приёма в заметках</li>
            </ul>
          </div>
        </section>

        <section className="section benefits-section" id="about">
          <div className="container">
            <div className="section-heading centered">
              <p className="kicker">Порядок вместо хаоса</p>
              <h2>Важное о здоровье не должно теряться</h2>
              <p className="lede">MyHealth собирает медицинскую историю в понятную систему, которой легко пользоваться каждый день.</p>
            </div>
            <div className="benefit-grid">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="benefit" key={item.title}>
                    <span className={`benefit-icon ${item.tone}`} aria-hidden="true"><Icon size={24} /></span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <a href="#signup">Хочу попробовать <ArrowRight size={16} aria-hidden="true" /></a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section workflow-section" id="how">
          <div className="container workflow-grid">
            <div>
              <div className="section-heading">
                <p className="kicker">Простой процесс</p>
                <h2>От документа до понятной истории</h2>
                <p className="lede">Без сложных настроек, интеграций и медицинского жаргона.</p>
              </div>
              <ol className="steps">
                {steps.map(([number, title, text]) => (
                  <li className="step" key={number}>
                    <span className="step-num">{number}</span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="history-panel">
              <div className="panel-head">
                <div><span>История</span><strong>24 записи</strong></div>
                <button className="icon-button" type="button" aria-label="Искать в истории"><Search size={18} aria-hidden="true" /></button>
              </div>
              <div className="panel-filters" aria-label="Фильтры истории">
                <span className="active">Все</span><span>Анализы</span><span>Приёмы</span>
              </div>
              {[
                ["12", "июн", "Биохимический анализ", "Invitro · 8 показателей", "violet"],
                ["04", "июн", "УЗИ щитовидной железы", "Медси · обследование", "green"],
                ["21", "май", "Приём эндокринолога", "Д-р Волкова · Рассвет", "blue"],
              ].map(([date, month, title, meta, tone]) => (
                <div className="panel-record" key={title}>
                  <time><strong>{date}</strong><span>{month}</span></time>
                  <span className={`record-icon ${tone}`} aria-hidden="true"><FileHeart size={18} /></span>
                  <span className="record-copy"><strong>{title}</strong><span>{meta}</span></span>
                  <ChevronRight size={17} className="record-arrow" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="security-section" id="security">
          <div className="container security-grid">
            <div className="security-mark" aria-hidden="true"><ShieldCheck size={36} /></div>
            <div>
              <p className="kicker">Приватность по умолчанию</p>
              <h2>Медицинские данные принадлежат только вам</h2>
              <p className="lede">
                Мы проектируем MyHealth с фокусом на защиту и прозрачность. Приложение не ставит диагнозы
                и не заменяет консультацию врача.
              </p>
            </div>
            <ul className="security-list">
              <li><Check size={16} aria-hidden="true" /> Контроль доступа</li>
              <li><Check size={16} aria-hidden="true" /> Никаких медицинских рекомендаций</li>
              <li><Check size={16} aria-hidden="true" /> Понятные настройки приватности</li>
            </ul>
          </div>
        </section>

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

        <section className="signup-section" id="signup">
          <div className="container signup-grid">
            <div className="signup-copy">
              <p className="kicker">Присоединяйтесь</p>
              <h2>Станьте одним из первых пользователей MyHealth</h2>
              <p className="lede">Получите ранний доступ и помогите создать сервис, который действительно упрощает заботу о здоровье.</p>
              <dl className="stats">
                <div><dt>2 минуты</dt><dd>займёт заявка</dd></div>
                <div><dt>0&nbsp;₽</dt><dd>участие бесплатно</dd></div>
              </dl>
            </div>
            <SignupForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Brand />
            <p>Организуйте медицинскую историю без лишней сложности.</p>
          </div>
          <nav aria-label="Ссылки в подвале">
            <a href="#security">Приватность</a>
            <a href="mailto:hello@myhealth.app">hello@myhealth.app</a>
          </nav>
          <p className="footer-legal">© 2025 MyHealth. Не является медицинским сервисом и не заменяет консультацию врача.</p>
        </div>
      </footer>
    </div>
  );
}
