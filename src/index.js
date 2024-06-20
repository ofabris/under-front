import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Cria uma raiz para renderização usando ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do modo estrito (StrictMode)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
