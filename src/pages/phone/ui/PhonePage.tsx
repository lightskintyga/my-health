import { useMemo, useState, type ReactNode } from "react";
import {
  Bell, CalendarDays, ChevronLeft, ChevronRight, CircleUserRound, Clock3, FileHeart,
  FileText, FlaskConical, HeartPulse, Home, ImagePlus, LockKeyhole, MoreHorizontal,
  Paperclip, Plus, Search, Settings2, ShieldCheck, SlidersHorizontal, Sparkles,
  Stethoscope, TrendingUp, UserRound, X, type LucideIcon,
} from "lucide-react";
import "./phone.css";

type Tab = "home" | "calendar" | "records" | "search" | "profile";
type AddMode = "event" | "document" | null;

const navItems: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: "home", label: "Главная", icon: Home },
  { id: "calendar", label: "Календарь", icon: CalendarDays },
  { id: "records", label: "История", icon: FileHeart },
  { id: "search", label: "Поиск", icon: Search },
  { id: "profile", label: "Профиль", icon: UserRound },
];

const week = [
  { day: "Пн", date: "16" }, { day: "Вт", date: "17" },
  { day: "Ср", date: "18", active: true }, { day: "Чт", date: "19", marked: true },
  { day: "Пт", date: "20" }, { day: "Сб", date: "21", marked: true }, { day: "Вс", date: "22" },
];

const monthDays = [
  { value: 26, muted: true }, { value: 27, muted: true }, { value: 28, muted: true },
  { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 },
  { value: 5 }, { value: 6 }, { value: 7 }, { value: 8, dot: true }, { value: 9 }, { value: 10 }, { value: 11 },
  { value: 12 }, { value: 13 }, { value: 14, dot: true }, { value: 15 }, { value: 16 }, { value: 17 }, { value: 18, active: true },
  { value: 19, dot: true }, { value: 20 }, { value: 21, dot: true }, { value: 22 }, { value: 23 }, { value: 24 }, { value: 25 },
  { value: 26 }, { value: 27 }, { value: 28 }, { value: 29 }, { value: 30 }, { value: 31 }, { value: 1, muted: true },
];

function PageTitle({ eyebrow, children, action }: { eyebrow?: string; children: ReactNode; action?: ReactNode }) {
  return (
    <div className="page-title">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <div className="title" role="heading" aria-level={1}>{children}</div>
      </div>
      {action}
    </div>
  );
}

function IconButton({ label, children, onClick }: { label: string; children: ReactNode; onClick?: () => void }) {
  return <button className="icon-button" aria-label={label} onClick={onClick}>{children}</button>;
}

function Button({ children, variant = "primary", onClick, icon: Icon }: {
  children: ReactNode; variant?: "primary" | "secondary" | "ghost"; onClick?: () => void; icon?: LucideIcon;
}) {
  return <button className={`button button-${variant}`} onClick={onClick}>{Icon && <Icon size={18} strokeWidth={2.2} />}{children}</button>;
}

function SectionHeader({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  return (
    <div className="section-header">
      <div className="section-title" role="heading" aria-level={2}>{title}</div>
      {action && <button className="text-button" onClick={onAction}>{action}</button>}
    </div>
  );
}

function HomeScreen({ navigate, openAdd }: { navigate: (tab: Tab) => void; openAdd: (mode: AddMode) => void }) {
  return (
    <div className="screen">
      <PageTitle eyebrow="СРЕДА, 18 ИЮНЯ" action={<IconButton label="Уведомления"><Bell size={20} /><span className="notification-dot" /></IconButton>}>
        Добрый день, Анна
      </PageTitle>
      <div className="week-strip" aria-label="Неделя">
        {week.map((item) => (
          <button key={item.date} className={`week-day ${item.active ? "is-active" : ""}`}>
            <span>{item.day}</span><strong>{item.date}</strong>{item.marked && <i />}
          </button>
        ))}
      </div>
      <section className="next-event-card">
        <div className="card-topline">
          <span className="badge badge-light"><Clock3 size={13} /> Ближайшее</span>
          <button className="plain-icon" aria-label="Меню события"><MoreHorizontal size={20} /></button>
        </div>
        <div className="event-date">Завтра, 09:30</div>
        <div className="event-name">Общий анализ крови</div>
        <div className="event-place"><FlaskConical size={16} /> Лаборатория «Гемотест»</div>
        <div className="event-footer"><div className="avatars"><span>АА</span></div><span>Напомним за 1 час</span><ChevronRight size={18} /></div>
      </section>
      <div className="attention-card">
        <div className="attention-icon"><Sparkles size={19} /></div>
        <div className="attention-copy"><strong>Требует внимания</strong><span>Пора повторить анализ ТТГ</span></div>
        <button onClick={() => openAdd("event")}>Запланировать</button>
      </div>
      <SectionHeader title="Быстрые действия" />
      <div className="quick-grid">
        <button className="quick-action" onClick={() => openAdd("event")}><span className="quick-icon lavender"><CalendarDays size={21} /></span><span>Событие</span></button>
        <button className="quick-action" onClick={() => openAdd("document")}><span className="quick-icon mint"><FileText size={21} /></span><span>Документ</span></button>
        <button className="quick-action" onClick={() => navigate("calendar")}><span className="quick-icon blue"><CalendarDays size={21} /></span><span>Календарь</span></button>
        <button className="quick-action" onClick={() => navigate("search")}><span className="quick-icon peach"><Search size={21} /></span><span>Найти</span></button>
      </div>
      <SectionHeader title="Недавние результаты" action="Все" onAction={() => navigate("records")} />
      <div className="result-list">
        <button className="result-row" onClick={() => navigate("search")}>
          <span className="result-icon"><FlaskConical size={20} /></span>
          <span className="result-copy"><strong>Ферритин</strong><small>12 июня · Invitro</small></span>
          <span className="result-value"><strong>42</strong><small>нг/мл</small></span><span className="status-pill success">В норме</span>
        </button>
        <button className="result-row" onClick={() => navigate("records")}>
          <span className="result-icon rose"><FileText size={20} /></span>
          <span className="result-copy"><strong>Заключение УЗИ</strong><small>4 июня · Медси</small></span>
          <Paperclip size={17} className="muted-icon" /><ChevronRight size={18} className="muted-icon" />
        </button>
      </div>
      <div className="medical-note"><ShieldCheck size={16} /> Сервис хранит данные и не заменяет консультацию врача</div>
    </div>
  );
}

function CalendarScreen({ openAdd }: { openAdd: (mode: AddMode) => void }) {
  return (
    <div className="screen">
      <PageTitle action={<IconButton label="Добавить событие" onClick={() => openAdd("event")}><Plus size={21} /></IconButton>}>Календарь</PageTitle>
      <div className="month-switcher">
        <IconButton label="Предыдущий месяц"><ChevronLeft size={20} /></IconButton><strong>Июнь 2025</strong><IconButton label="Следующий месяц"><ChevronRight size={20} /></IconButton>
      </div>
      <div className="calendar-card">
        <div className="calendar-weekdays">{["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"].map((day) => <span key={day}>{day}</span>)}</div>
        <div className="calendar-grid">
          {monthDays.map((day, index) => <button key={`${day.value}-${index}`} className={`calendar-day ${day.active ? "active" : ""} ${day.muted ? "muted" : ""}`}><span>{day.value}</span>{day.dot && <i />}</button>)}
        </div>
      </div>
      <SectionHeader title="18 июня, среда" />
      <div className="timeline"><div className="time-label">09:30</div><div className="timeline-event purple">
        <div className="event-kind"><FlaskConical size={15} /> АНАЛИЗЫ</div><strong>Общий анализ крови</strong><span>Гемотест · Натощак</span><div className="reminder"><Bell size={14} /> За 1 час</div>
      </div></div>
      <div className="timeline"><div className="time-label">16:00</div><div className="timeline-event green">
        <div className="event-kind"><Stethoscope size={15} /> ПРИЁМ</div><strong>Эндокринолог</strong><span>Д-р Волкова · Клиника «Рассвет»</span><div className="reminder"><Paperclip size={14} /> 2 документа</div>
      </div></div>
      <Button icon={Plus} variant="secondary" onClick={() => openAdd("event")}>Добавить событие</Button>
    </div>
  );
}

const records = [
  { date: "12", month: "ИЮН", title: "Биохимический анализ", meta: "Invitro · 8 показателей", icon: FlaskConical, tone: "purple", attachment: true },
  { date: "04", month: "ИЮН", title: "УЗИ щитовидной железы", meta: "Медси · обследование", icon: HeartPulse, tone: "green", attachment: true },
  { date: "21", month: "МАЙ", title: "Приём эндокринолога", meta: "Д-р Волкова · Рассвет", icon: Stethoscope, tone: "blue", attachment: false },
  { date: "06", month: "МАЙ", title: "Общий анализ крови", meta: "Гемотест · 14 показателей", icon: FlaskConical, tone: "purple", attachment: true },
];

function RecordsScreen({ openAdd }: { openAdd: (mode: AddMode) => void }) {
  const [filter, setFilter] = useState("Все");
  return (
    <div className="screen">
      <PageTitle action={<IconButton label="Добавить документ" onClick={() => openAdd("document")}><Plus size={21} /></IconButton>}>История</PageTitle>
      <div className="search-field compact"><Search size={18} /><span>Поиск в истории</span></div>
      <div className="filter-row">{["Все", "Анализы", "Приёмы", "Обследования"].map((item) => <button key={item} onClick={() => setFilter(item)} className={`filter-chip ${filter === item ? "active" : ""}`}>{item}</button>)}</div>
      <div className="history-meta"><span>24 записи</span><button><SlidersHorizontal size={16} /> Фильтры</button></div>
      <div className="record-list">
        {records.map((record) => { const Icon = record.icon; return (
          <button className="record-card" key={record.title}>
            <span className="record-date"><strong>{record.date}</strong><small>{record.month}</small></span>
            <span className={`record-type ${record.tone}`}><Icon size={20} /></span>
            <span className="record-copy"><strong>{record.title}</strong><small>{record.meta}</small></span>
            {record.attachment && <Paperclip size={16} className="muted-icon" />}<ChevronRight size={18} className="muted-icon" />
          </button>
        ); })}
      </div>
      <Button icon={ImagePlus} onClick={() => openAdd("document")}>Добавить документ</Button>
    </div>
  );
}

function SearchScreen() {
  const [query, setQuery] = useState("");
  const noResults = query.length > 2 && !["ферритин", "анна", "инвитро"].some((term) => term.includes(query.toLowerCase()));
  return (
    <div className="screen">
      <PageTitle>Поиск</PageTitle>
      <label className="search-field active"><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Анализ, врач или клиника" autoComplete="off" />{query && <button onClick={() => setQuery("")} aria-label="Очистить"><X size={17} /></button>}</label>
      <div className="filter-row"><button className="filter-chip active"><SlidersHorizontal size={15} /> Фильтры</button><button className="filter-chip">За год</button><button className="filter-chip">С файлами</button></div>
      {noResults ? (
        <div className="empty-state"><span><Search size={28} /></span><strong>Ничего не нашли</strong><p>Проверьте запрос или измените выбранные фильтры.</p><Button variant="secondary" onClick={() => setQuery("")}>Сбросить поиск</Button></div>
      ) : (<>
        <div className="metric-hero">
          <div className="metric-head"><div><span>Динамика показателя</span><strong>Ферритин</strong></div><span className="status-pill success">В норме</span></div>
          <div className="metric-value"><strong>42</strong><span>нг/мл</span><small><TrendingUp size={15} /> +8 за 6 месяцев</small></div>
          <div className="chart" aria-label="График ферритина">
            <div className="chart-range"><span>120</span><span>60</span><span>15</span></div><div className="reference-zone" />
            <svg viewBox="0 0 280 112" preserveAspectRatio="none" aria-hidden="true">
              <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="currentColor" stopOpacity=".22" /><stop offset="1" stopColor="currentColor" stopOpacity="0" /></linearGradient></defs>
              <path className="chart-area" d="M4,82 C34,75 50,86 78,69 S126,58 148,64 S192,51 214,45 S252,40 276,30 L276,110 L4,110 Z" />
              <path className="chart-line" d="M4,82 C34,75 50,86 78,69 S126,58 148,64 S192,51 214,45 S252,40 276,30" />
              {[["4","82"],["78","69"],["148","64"],["214","45"],["276","30"]].map(([cx, cy]) => <circle key={cx} cx={cx} cy={cy} r="3.5" />)}
            </svg>
            <div className="chart-labels"><span>ЯНВ</span><span>ФЕВ</span><span>МАР</span><span>АПР</span><span>ИЮН</span></div>
          </div>
          <div className="reference-caption"><span /> Референсный диапазон 15–150 нг/мл</div>
        </div>
        <SectionHeader title="Последние измерения" action="Все 5" />
        <div className="measurement-list"><div><span><strong>12 июня 2025</strong><small>Invitro</small></span><b>42 <small>нг/мл</small></b></div><div><span><strong>4 апреля 2025</strong><small>Гемотест</small></span><b>36 <small>нг/мл</small></b></div></div>
        <div className="medical-note"><ShieldCheck size={16} /> Значения показаны справочно и не являются диагнозом</div>
      </>)}
    </div>
  );
}

function ProfileScreen({ onInstall, onLogout }: { onInstall: () => void; onLogout: () => void }) {
  return (
    <div className="screen">
      <PageTitle>Профиль</PageTitle>
      <div className="profile-card"><div className="profile-avatar">АА</div><div><strong>Анна Алексеева</strong><span>anna@example.com</span></div><ChevronRight size={19} /></div>
      <div className="install-card"><span className="install-icon"><HeartPulse size={24} /></span><div><strong>MyHealth всегда под рукой</strong><span>Установите приложение на главный экран</span></div><Button variant="secondary" onClick={onInstall}>Установить</Button></div>
      <SectionHeader title="Настройки" />
      <div className="settings-list">
        {[
          { icon: Bell, title: "Уведомления", note: "События и напоминания", value: "Вкл." },
          { icon: LockKeyhole, title: "Приватность", note: "Доступ и защита данных" },
          { icon: CircleUserRound, title: "Учётная запись", note: "Email, пароль, удаление" },
          { icon: Settings2, title: "Настройки приложения", note: "Язык и оформление" },
        ].map((item) => { const Icon = item.icon; return (
          <button className="setting-row" key={item.title}><span><Icon size={20} /></span><div><strong>{item.title}</strong><small>{item.note}</small></div>{item.value && <i>{item.value}</i>}<ChevronRight size={18} className="muted-icon" /></button>
        ); })}
      </div>
      <div className="privacy-note"><ShieldCheck size={20} /><div><strong>Ваши данные защищены</strong><span>Документы доступны только вам. Мы не используем медицинские данные для рекомендаций.</span></div></div>
      <button className="logout-button" onClick={onLogout}>Выйти из аккаунта</button><div className="version">MyHealth · версия 1.0</div>
    </div>
  );
}

function WelcomeScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-brand"><HeartPulse size={25} /><span>MyHealth</span></div>
      <div className="welcome-visual">
        <div className="orbit orbit-one"><CalendarDays size={20} /></div>
        <div className="orbit orbit-two"><FileText size={20} /></div>
        <div className="welcome-heart"><HeartPulse size={42} /></div>
      </div>
      <div className="welcome-copy">
        <span>ВАША МЕДИЦИНСКАЯ ИСТОРИЯ</span>
        <div role="heading" aria-level={1}>Здоровье — в одном спокойном месте</div>
        <p>Храните результаты, планируйте визиты и следите за динамикой показателей.</p>
      </div>
      <Button onClick={onLogin}>Войти</Button>
      <Button variant="secondary" onClick={onLogin}>Создать аккаунт</Button>
      <div className="welcome-safety"><ShieldCheck size={16} /> Данные защищены и доступны только вам</div>
    </div>
  );
}

function AddSheet({ mode, onClose, onDone }: { mode: AddMode; onClose: () => void; onDone: (message: string) => void }) {
  const [selected, setSelected] = useState(mode === "document" ? "Файл" : "Анализы");
  if (!mode) return null;
  const isEvent = mode === "event";
  const options = isEvent ? ["Анализы", "Приём", "Обследование"] : ["Файл", "Фото", "Показатели"];
  return (
    <div className="sheet-backdrop" onMouseDown={(event) => event.currentTarget === event.target && onClose()}>
      <div className="bottom-sheet" role="dialog" aria-modal="true">
        <div className="sheet-handle" />
        <div className="sheet-heading"><div><span>{isEvent ? "НОВАЯ ЗАПИСЬ" : "НОВЫЙ ДОКУМЕНТ"}</span><strong>{isEvent ? "Добавить событие" : "Загрузить документ"}</strong></div><IconButton label="Закрыть" onClick={onClose}><X size={20} /></IconButton></div>
        <div className="segmented">{options.map((option) => <button className={selected === option ? "active" : ""} onClick={() => setSelected(option)} key={option}>{option}</button>)}</div>
        <label className="form-field"><span>Название</span><input defaultValue={isEvent ? "Общий анализ крови" : "Результаты анализов"} /></label>
        <div className="form-row"><label className="form-field"><span>{isEvent ? "Дата" : "Дата документа"}</span><input defaultValue="19 июня 2025" /></label><label className="form-field"><span>{isEvent ? "Время" : "Организация"}</span><input defaultValue={isEvent ? "09:30" : "Invitro"} /></label></div>
        {isEvent ? <button className="reminder-setting"><Bell size={19} /><span><strong>Напоминание</strong><small>За 1 час до события</small></span><ChevronRight size={18} /></button>
          : <button className="upload-zone"><ImagePlus size={25} /><span><strong>Выбрать файл или фото</strong><small>PDF, JPG или PNG · до 20 МБ</small></span></button>}
        <Button onClick={() => onDone(isEvent ? "Событие добавлено в календарь" : "Документ добавлен в историю")}>{isEvent ? "Добавить событие" : "Сохранить документ"}</Button>
      </div>
    </div>
  );
}

export function PhonePage() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [addMode, setAddMode] = useState<AddMode>(null);
  const [toast, setToast] = useState("");
  const screen = useMemo(() => {
    if (activeTab === "calendar") return <CalendarScreen openAdd={setAddMode} />;
    if (activeTab === "records") return <RecordsScreen openAdd={setAddMode} />;
    if (activeTab === "search") return <SearchScreen />;
    if (activeTab === "profile") return <ProfileScreen onLogout={() => setLoggedIn(false)} onInstall={() => setToast("Откройте меню браузера → «На экран Домой»")} />;
    return <HomeScreen navigate={setActiveTab} openAdd={setAddMode} />;
  }, [activeTab]);
  function showToast(message: string) { setAddMode(null); setToast(message); window.setTimeout(() => setToast(""), 2800); }
  if (!loggedIn) return <div className="app-shell"><WelcomeScreen onLogin={() => { setLoggedIn(true); setActiveTab("home"); }} /></div>;
  return (
    <div className="app-shell">
      <main className="phone-content">{screen}</main>
      <nav className="bottom-nav" aria-label="Основная навигация">
        {navItems.map((item) => { const Icon = item.icon; return <button key={item.id} className={activeTab === item.id ? "active" : ""} onClick={() => setActiveTab(item.id)}><Icon size={21} strokeWidth={activeTab === item.id ? 2.5 : 2} /><span>{item.label}</span></button>; })}
      </nav>
      <AddSheet mode={addMode} onClose={() => setAddMode(null)} onDone={showToast} />
      {toast && <div className="toast"><ShieldCheck size={18} />{toast}</div>}
    </div>
  );
}
