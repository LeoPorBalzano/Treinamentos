import React from 'react';
import './App.css';
import {HelloWord1} from './helloworld1.js'
import {HelloWord2} from './helloworld2.js'
import {HelloWord3} from './helloworld3.js'


function App() {
  return (
    <div className="App">
      <HelloWord1 />
      <HelloWord2 />
      <HelloWord3 />
    </div>
  );
}

export default App;