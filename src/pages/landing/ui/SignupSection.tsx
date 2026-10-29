import { SignupForm } from "./SignupForm";

export function SignupSection() {
  return (
    <section className="signup-section" id="signup">
      <div className="container signup-grid">
        <div className="signup-copy">
          <p className="kicker">Присоединяйтесь</p>
          <h2>Станьте одним из первых пользователей MyHealth</h2>
          <p className="lede">Получите ранний доступ и помогите создать сервис, который действительно упрощает заботу о здоровье.</p>
          <dl className="stats">
            <div><dt>1&nbsp;минуту</dt><dd>займёт заявка</dd></div>
            <div><dt>0&nbsp;₽</dt><dd>участие бесплатно</dd></div>
          </dl>
        </div>
        <SignupForm />
      </div>
    </section>
  );
}
