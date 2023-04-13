import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

let text="Hello World";
const HW = document.getElementById('text2');


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




export function write2(){
  
  return(
    <div id="exibe" class='botaodolado'>
      <h1 id='text2'>{text}</h1><button onClick={hide} class='btn'>Esconde</button>
    </div>
  );
}