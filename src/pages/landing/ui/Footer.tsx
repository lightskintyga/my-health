import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Brand />
          <p>Организуйте медицинскую историю без лишней сложности.</p>
        </div>
        <nav aria-label="Ссылки в подвале">
          <a href="#security">Приватность</a>
        </nav>
        <p className="footer-legal">© 2026 MyHealth. Не является медицинским сервисом и не заменяет консультацию врача.</p>
      </div>
    </footer>
  );
}
