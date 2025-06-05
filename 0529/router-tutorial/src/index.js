import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ createRoot 사용
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container); // ✅ React 18용 root 생성

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

serviceWorker.unregister();
