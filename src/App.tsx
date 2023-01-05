import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FC } from 'react'
import HelloWorld from './components/HelloWorld';
import List from './components/List';

// Print Hello World 
function App() {
  return (
    <div className="App">
       <HelloWorld />
    </div>
  )
}

// Print List of data
/*const avengers = [
  'Captain America',
  'Iron Man',
  'Black Widow',
  'Thor',
  'Hawkeye',
]

const App: FC = () => {
  return (
    <div className="App">
      <HelloWorld />
      <List data={avengers} />
    </div>
  );
}*/
export default App;
