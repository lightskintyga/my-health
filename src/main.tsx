import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import DesktopApp from './DesktopApp'
import Landing from './Landing'
import './index.css'

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'))
}

const view = new URLSearchParams(window.location.search).get('view')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {view === 'phone' ? <App /> : view === 'desktop' ? <DesktopApp /> : <Landing />}
  </React.StrictMode>,
)
