import { CalendarCheck, FileHeart, LineChart, type LucideIcon } from "lucide-react";

export type Interest = "beta" | "interview" | "both";

export type Benefit = {
  icon: LucideIcon;
  title: string;
  text: string;
  tone: "violet" | "green" | "orange";
};

export const benefits: Benefit[] = [
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

export type WorkflowStep = {
  number: string;
  title: string;
  text: string;
};

export const steps: WorkflowStep[] = [
  { number: "01", title: "Добавляйте", text: "Сохраняйте документ или создавайте медицинское событие вручную." },
  { number: "02", title: "Организуйте", text: "Привязывайте результаты к приёмам, датам и категориям." },
  { number: "03", title: "Находите", text: "Ищите по врачу, клинике, показателю или заметке за несколько секунд." },
];

export type InterestOption = {
  value: Interest;
  title: string;
  note: string;
};

export const interestOptions: InterestOption[] = [
  { value: "beta", title: "Beta-тест", note: "Попробовать приложение первым" },
  { value: "interview", title: "Интервью", note: "30 минут о вашем опыте" },
  { value: "both", title: "Оба варианта", note: "Максимально помочь продукту" },
];
