// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import StudentForm from './components/StudentForm';
import SearchBar from './components/SearchBar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div className="container">
      <div className="theme-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
        <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </div>
      <Header />
      <StudentForm />
      <SearchBar />
    </div>
  );
}

export default App;
