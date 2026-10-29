import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Brand } from "./Brand";

const navLinks = [
  { href: "#about", label: "Возможности" },
  { href: "#how", label: "Как работает" },
  { href: "#security", label: "Безопасность" },
  { href: "?view=phone", label: "Прототип" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav
          id="site-nav"
          className={menuOpen ? "site-nav open" : "site-nav"}
          aria-label="Основная навигация"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a className="nav-cta" href="#signup" onClick={closeMenu}>Стать beta-тестером</a>
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
  );
}
