
import './App.css';
// import React from 'react'
import { MyChildFunction } from './MyComponent';
import MyFunction from './MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Component</h1>
      <MyFunction/>
      <MyChildFunction />
    </div>
  );
}

export default App;
