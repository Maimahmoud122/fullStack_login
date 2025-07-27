// src/App.jsx
import React from 'react';
import Books from './components/bookList.jsx';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📚 Book Store</h1>
      <Books />
    </div>
  );
};

export default App;
