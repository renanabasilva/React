import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);     //A exclamação no final é a garantia de que o getElement NÃO VAI retornar nulo "non-null assertion"
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
