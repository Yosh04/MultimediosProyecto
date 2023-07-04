import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import { Home, News, NotFound } from './Routes.jsx';
import { createRoot } from 'react-dom'; 
const rootElement = document.getElementById('root');

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
createRoot(rootElement).render(<App />);

export default App;
