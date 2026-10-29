import { BellRing, ChevronRight, FileHeart, FlaskConical } from "lucide-react";

export function ResultSheet() {
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
