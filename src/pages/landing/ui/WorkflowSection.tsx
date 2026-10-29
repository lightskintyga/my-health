import { ChevronRight, FileHeart, Search } from "lucide-react";
import { steps } from "../model/content";

const historyRecords = [
  ["12", "июн", "Биохимический анализ", "Invitro · 8 показателей", "violet"],
  ["04", "июн", "УЗИ щитовидной железы", "Медси · обследование", "green"],
  ["21", "май", "Приём эндокринолога", "Д-р Волкова · Рассвет", "blue"],
];

export function WorkflowSection() {
  return (
    <section className="section workflow-section" id="how">
      <div className="container workflow-grid">
        <div>
          <div className="section-heading">
            <p className="kicker">Простой процесс</p>
            <h2>От документа до понятной истории</h2>
            <p className="lede">Без сложных настроек, интеграций и медицинского жаргона.</p>
          </div>
          <ol className="steps">
            {steps.map(({ number, title, text }) => (
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
          {historyRecords.map(([date, month, title, meta, tone]) => (
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
  );
}
