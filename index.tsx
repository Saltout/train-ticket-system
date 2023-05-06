import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './App';
import TicketPage from './TicketPage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/TicketPage" element={<TicketPage />} />
      </Routes>
    </Router>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
