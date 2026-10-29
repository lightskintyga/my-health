import { useState, type FormEvent } from "react";
import { ArrowRight, Check, CheckCircle2, LockKeyhole } from "lucide-react";
import { interestOptions, type Interest } from "../model/content";

export function SignupForm() {
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
        {interestOptions.map(({ value, title, note }) => (
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
