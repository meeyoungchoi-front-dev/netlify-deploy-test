import React from 'react';
import ReactDOM from 'react-dom/client'; // react-dom/client에서 가져오기
import App from './App'; // App 컴포넌트 가져오기

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
