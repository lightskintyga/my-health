import { useState, type ReactNode } from "react";
import {
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  Clock3,
  FileHeart,
  FileText,
  FlaskConical,
  HeartPulse,
  Home,
  LineChart,
  MoreHorizontal,
  Paperclip,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Stethoscope,
  X,
  type LucideIcon,
} from "lucide-react";
import "./desktop.css";

type DesktopTab = "home" | "calendar" | "history" | "metrics" | "profile";

const desktopNav: { id: DesktopTab; label: string; icon: LucideIcon }[] = [
  { id: "home", label: "Обзор", icon: Home },
  { id: "calendar", label: "Календарь", icon: CalendarDays },
  { id: "history", label: "Медицинская история", icon: FileHeart },
  { id: "metrics", label: "Показатели", icon: LineChart },
];

const desktopRecords = [
  { icon: FlaskConical, tone: "violet", title: "Биохимический анализ крови", meta: "Invitro · 8 показателей", date: "12 июня, 2025", file: "PDF" },
  { icon: HeartPulse, tone: "green", title: "УЗИ щитовидной железы", meta: "Медси · обследование", date: "4 июня, 2025", file: "JPG" },
  { icon: Stethoscope, tone: "blue", title: "Приём эндокринолога", meta: "Д-р Волкова · Клиника «Рассвет»", date: "21 мая, 2025", file: "—" },
];

function DesktopButton({ children, kind = "primary", onClick }: { children: ReactNode; kind?: "primary" | "secondary"; onClick?: () => void }) {
  return <button className={`desktop-button ${kind}`} onClick={onClick}>{children}</button>;
}

function AddDesktopModal({ onClose }: { onClose: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <div className="desktop-modal-backdrop">
      <div className="desktop-modal" role="dialog" aria-modal="true">
        <div className="desktop-modal-head">
          <div><span>НОВАЯ ЗАПИСЬ</span><h2>{done ? "Событие добавлено" : "Добавить событие"}</h2></div>
          <button onClick={onClose} aria-label="Закрыть"><X size={20} /></button>
        </div>
        {done ? (
          <div className="desktop-success"><span><CalendarDays size={28} /></span><h3>Готово</h3><p>Общий анализ крови появился в календаре на 19 июня, 09:30.</p><DesktopButton onClick={onClose}>Вернуться к обзору</DesktopButton></div>
        ) : (
          <>
            <div className="desktop-segments"><button className="active">Анализы</button><button>Приём</button><button>Обследование</button></div>
            <label className="desktop-field"><span>Название</span><input defaultValue="Общий анализ крови" /></label>
            <div className="desktop-form-row">
              <label className="desktop-field"><span>Дата</span><input defaultValue="19 июня 2025" /></label>
              <label className="desktop-field"><span>Время</span><input defaultValue="09:30" /></label>
            </div>
            <label className="desktop-field"><span>Организация</span><input defaultValue="Лаборатория «Гемотест»" /></label>
            <div className="desktop-reminder"><Bell size={18} /><div><b>Напоминание</b><span>За 1 час до события</span></div><ChevronRight size={18} /></div>
            <div className="desktop-modal-actions"><DesktopButton kind="secondary" onClick={onClose}>Отмена</DesktopButton><DesktopButton onClick={() => setDone(true)}>Добавить событие</DesktopButton></div>
          </>
        )}
      </div>
    </div>
  );
}

function Dashboard({ onAdd }: { onAdd: () => void }) {
  return (
    <>
      <div className="desktop-page-head">
        <div><span>СРЕДА, 18 ИЮНЯ</span><h1>Добрый день, Анна</h1><p>Вот что запланировано и требует внимания.</p></div>
        <DesktopButton onClick={onAdd}><Plus size={18} /> Добавить запись</DesktopButton>
      </div>
      <div className="desktop-dashboard-grid">
        <section className="desktop-main-column">
          <div className="desktop-section-title"><div><h2>Ближайшие события</h2><span>3 события на этой неделе</span></div><button>Открыть календарь <ChevronRight size={16} /></button></div>
          <div className="desktop-event-list">
            <article className="desktop-event-card featured">
              <div className="desktop-date-tile"><span>ЧТ</span><b>19</b><small>ИЮН</small></div>
              <div className="desktop-event-type"><FlaskConical size={20} /></div>
              <div className="desktop-event-copy"><span>АНАЛИЗЫ · 09:30</span><h3>Общий анализ крови</h3><p>Лаборатория «Гемотест» · Натощак</p></div>
              <div className="desktop-event-meta"><span><Bell size={14} /> За 1 час</span><button><MoreHorizontal size={20} /></button></div>
            </article>
            <article className="desktop-event-card">
              <div className="desktop-date-tile"><span>СБ</span><b>21</b><small>ИЮН</small></div>
              <div className="desktop-event-type green"><Stethoscope size={20} /></div>
              <div className="desktop-event-copy"><span>ПРИЁМ · 16:00</span><h3>Эндокринолог</h3><p>Д-р Волкова · Клиника «Рассвет»</p></div>
              <div className="desktop-event-meta"><span><Paperclip size={14} /> 2 документа</span><button><MoreHorizontal size={20} /></button></div>
            </article>
          </div>
          <div className="desktop-section-title records-title"><div><h2>Недавние записи</h2><span>Последние добавленные документы и результаты</span></div><button>Вся история <ChevronRight size={16} /></button></div>
          <div className="desktop-record-table">
            <div className="desktop-table-head"><span>ЗАПИСЬ</span><span>ДАТА</span><span>ФАЙЛ</span><span>СТАТУС</span><span /></div>
            {desktopRecords.map((record) => {
              const Icon = record.icon;
              return <div className="desktop-table-row" key={record.title}>
                <div className="desktop-record-name"><i className={record.tone}><Icon size={19} /></i><span><b>{record.title}</b><small>{record.meta}</small></span></div>
                <span>{record.date}</span><span>{record.file}</span><span className="desktop-status">Сохранено</span><button><ChevronRight size={17} /></button>
              </div>;
            })}
          </div>
        </section>
        <aside className="desktop-side-column">
          <div className="desktop-mini-calendar">
            <div className="mini-calendar-head"><button><ChevronRight className="flip" size={18} /></button><b>Июнь 2025</b><button><ChevronRight size={18} /></button></div>
            <div className="mini-calendar-week">{["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"].map((day) => <span key={day}>{day}</span>)}</div>
            <div className="mini-calendar-grid">
              {[26,27,28,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1].map((day, i) => <button className={`${i < 3 || i === 34 ? "muted" : ""} ${day === 18 && i > 10 ? "active" : ""} ${[8,19,21].includes(day) ? "marked" : ""}`} key={`${day}-${i}`}>{day}</button>)}
            </div>
          </div>
          <div className="desktop-attention">
            <div className="attention-head"><span><Clock3 size={17} /></span><div><b>Требует внимания</b><small>1 рекомендация по планированию</small></div></div>
            <h3>Пора повторить анализ ТТГ</h3><p>Последний результат был добавлен 6 месяцев назад.</p>
            <button onClick={onAdd}>Запланировать <ArrowIcon /></button>
          </div>
          <div className="desktop-metric-card">
            <div className="metric-card-head"><div><span>ДИНАМИКА</span><h3>Ферритин</h3></div><span className="desktop-status">В норме</span></div>
            <div className="metric-number"><b>42</b><span>нг/мл</span><small>+8 за 6 месяцев</small></div>
            <svg viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true"><path className="area" d="M3 80 C35 76 53 84 83 66 S130 60 155 62 S205 48 230 43 S270 36 297 25 L297 99 L3 99Z" /><path className="line" d="M3 80 C35 76 53 84 83 66 S130 60 155 62 S205 48 230 43 S270 36 297 25" /></svg>
            <div className="desktop-chart-labels"><span>ЯНВ</span><span>ФЕВ</span><span>МАР</span><span>АПР</span><span>ИЮН</span></div>
          </div>
        </aside>
      </div>
    </>
  );
}

function PlaceholderPage({ tab, onAdd }: { tab: DesktopTab; onAdd: () => void }) {
  const data = {
    calendar: ["Календарь", "Все медицинские события в одном расписании.", CalendarDays],
    history: ["Медицинская история", "Документы, результаты и приёмы по датам.", FileHeart],
    metrics: ["Показатели", "Динамика однородных результатов анализов.", LineChart],
    profile: ["Профиль и настройки", "Уведомления, приватность и учётная запись.", CircleUserRound],
    home: ["Обзор", "", Home],
  }[tab];
  const Icon = data[2] as LucideIcon;
  return (
    <div className="desktop-placeholder">
      <div className="desktop-page-head"><div><span>MYHEALTH</span><h1>{data[0] as string}</h1><p>{data[1] as string}</p></div><DesktopButton onClick={onAdd}><Plus size={18} /> Добавить запись</DesktopButton></div>
      <div className="placeholder-card"><span><Icon size={30} /></span><h2>{data[0] as string}</h2><p>В полном продукте здесь будет рабочий раздел. Для smoke-теста основная детализация показана на экране «Обзор».</p><DesktopButton kind="secondary" onClick={onAdd}>Добавить первую запись</DesktopButton></div>
    </div>
  );
}

function ArrowIcon() {
  return <ChevronRight size={16} />;
}

export default function DesktopApp() {
  const [activeTab, setActiveTab] = useState<DesktopTab>("home");
  const [adding, setAdding] = useState(false);
  return (
    <div className="desktop-app">
      <aside className="desktop-sidebar">
        <div className="desktop-logo"><span><HeartPulse size={22} /></span><b>MyHealth</b></div>
        <nav>
          <p>РАБОЧЕЕ ПРОСТРАНСТВО</p>
          {desktopNav.map((item) => {
            const Icon = item.icon;
            return <button className={activeTab === item.id ? "active" : ""} onClick={() => setActiveTab(item.id)} key={item.id}><Icon size={19} /><span>{item.label}</span>{item.id === "calendar" && <i>3</i>}</button>;
          })}
          <p className="sidebar-group">НАСТРОЙКИ</p>
          <button className={activeTab === "profile" ? "active" : ""} onClick={() => setActiveTab("profile")}><Settings size={19} /><span>Настройки</span></button>
        </nav>
        <div className="desktop-privacy"><ShieldCheck size={19} /><div><b>Данные защищены</b><span>Доступны только вам</span></div></div>
        <div className="desktop-user"><span>АА</span><div><b>Анна Алексеева</b><small>anna@example.com</small></div><ChevronDown size={16} /></div>
      </aside>
      <div className="desktop-workspace">
        <header className="desktop-topbar">
          <label><Search size={18} /><input placeholder="Найти анализ, врача или документ" /><kbd>⌘ K</kbd></label>
          <a href="/">Лендинг</a><a href="?view=phone">Мобильная версия</a>
          <button className="desktop-notification" aria-label="Уведомления"><Bell size={19} /><i /></button>
        </header>
        <main className="desktop-content">
          {activeTab === "home" ? <Dashboard onAdd={() => setAdding(true)} /> : <PlaceholderPage tab={activeTab} onAdd={() => setAdding(true)} />}
        </main>
      </div>
      {adding && <AddDesktopModal onClose={() => setAdding(false)} />}
    </div>
  );
}
