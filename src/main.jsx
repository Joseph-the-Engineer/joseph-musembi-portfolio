import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Set the favicon to the profile image (resolved with Vite so base path is handled)
try {
  const profileFavicon = new URL('/images/profile.jpg', import.meta.url).href;
  const setFavicon = (href) => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = href;
  };
  // Defer until DOM is available
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setFavicon(profileFavicon));
  } else {
    setFavicon(profileFavicon);
  }
} catch (e) {
  // noop if resolution fails
  // console.warn('Failed to set profile favicon', e);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
