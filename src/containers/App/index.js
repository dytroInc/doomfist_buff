import React from 'react';
import Workshop from 'containers/Workshop';
import './App.css';

export default function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Workshop />
    </div>
  );
}

