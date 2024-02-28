import React from 'react';

// React 18
import { createRoot } from 'react-dom/client';


import ConnectedApp from './entry';
import reportWebVitals from './reportWebVitals';

// Style
import './index.css';

// React 18
const container = document.getElementById('app-root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ConnectedApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();