import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

let text="Hello World";


function hide() {
    if(text==="Ola Mundo"){
      text ='Hello World'
    }else{
      text = 'Ola Mundo'
    }
    ReactDOM.render(
      text,
      document.getElementById('text2')
  );  
};


function write2(){
  
  return(
    <div class='botaodolado'>
      <h1 id='text2'>{text}</h1><button onClick={hide} class='btn'>Translate</button>
    </div>
  );
}

export class HelloWord2 extends Component {
  render() {
      return write2();
  }
}