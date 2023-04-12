import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class HelloWord extends React.Component {
  render() {
      return <div>Hello, world!</div>
  }
}

function App() {
  return (
    <div className="App">
      <HelloWord />
    </div>
  );
}





export default App;
