import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import * as ReactDOMClient from 'react-dom/client';

import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);