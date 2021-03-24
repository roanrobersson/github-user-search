import Navbar from 'core/components/Navbar';
import Search from 'pages/search';
import React from 'react';
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Search/>
      </div>
    </>
  );
}

export default App;
