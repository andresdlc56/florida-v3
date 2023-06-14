import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { FloridaApp } from './FloridaApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FloridaApp />
    </BrowserRouter>
  </React.StrictMode>,
)
