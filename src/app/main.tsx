import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { LandingPage } from "@/pages/landing";
import { PhonePage } from "@/pages/phone";
import { DesktopPage } from "@/pages/desktop";

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

const view = new URLSearchParams(window.location.search).get("view");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {view === "phone" ? <PhonePage /> : view === "desktop" ? <DesktopPage /> : <LandingPage />}
  </React.StrictMode>,
);
