import React from 'react';
import './App.css';
import {HelloWorld1} from './helloworld1.js'
import {HelloWorld2} from './helloworld2.js'
import {HelloWorld3} from './helloworld3.js'
import {HelloWorld4} from './helloworld4.js'


function App() {
  return (
    <div className="App">
      <HelloWorld1 />
      <HelloWorld2 />
      <HelloWorld3 />
      <HelloWorld4 />
    </div>
  );
}

export default App;