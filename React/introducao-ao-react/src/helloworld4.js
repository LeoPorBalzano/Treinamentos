import React , {Component} from 'react';
import './App.css';

const text="Hello World";

function write4(){
  return(
    <div>
      <h1>
        {text.split("").reverse().join("")}
      </h1>
    </div>
  );
}



export class HelloWorld4 extends Component {
    render() {
        return write4();
    }
}