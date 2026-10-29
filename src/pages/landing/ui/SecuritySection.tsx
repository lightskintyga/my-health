import { Check, ShieldCheck } from "lucide-react";

export function SecuritySection() {
  return (
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
  );
}
