import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css'
import axios from 'axios'

axios.defaults.baseURL = ' ' // point to backend

function applyThemeFromStorage() {
  try {
    const root = document.documentElement;
    const body = document.body;
    const saved = localStorage.getItem('theme') || 'light'; // read saved preference
    if (saved === 'dark') {
      root.classList.add('dark');
      body && body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body && body.classList.remove('dark');
    }
    window.theme = {
      get: () => localStorage.getItem('theme'),
      set: (next) => { localStorage.setItem('theme', next); applyThemeFromStorage(); }
    };
  } catch (_) {}
}

applyThemeFromStorage();

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />

)