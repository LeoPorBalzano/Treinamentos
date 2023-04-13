import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {write} from './helloworld1.js'
import {write2} from './helloworld2.js'

class HelloWord1 extends React.Component {
  render() {
      return write();
  }
}

class HelloWord2 extends React.Component {
  render() {
      return write2();
  }
}

function App() {
  return (
    <div className="App">
      <HelloWord1 />
      <HelloWord2 />
    </div>
  );
}





export default App;
