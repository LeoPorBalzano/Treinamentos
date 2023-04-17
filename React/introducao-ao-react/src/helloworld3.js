import React , {Component} from 'react';
import './App.css';

const text="Hello World ";
const Vtext = text.split("");

function write3(){
  const list = [];
  for(var count=0;count<Vtext.length;count++){
    list.push(<span>{Vtext[count]}</span>)
  }
  return(
    <div id="exibe3">
      <h1>
        {list}
      </h1>
    </div>
  );
}

let char = 0;
let char1 = 0;
let aux =  0;
setInterval(onTick,350);

function onTick(){
  let span = document.getElementById('exibe3').querySelectorAll('span')[char];
  span.classList.add('grown');
  char++;
  if(char===Vtext.length){
    char=0;
  }
    if(aux<3){
        aux++
        if(aux===2){
            setInterval(onTick1,350);
        }
    }
    
}

function onTick1(){
    const span = document.getElementById('exibe3').querySelectorAll('span')[char1];
    span.classList.remove('grown');
    char1++
    if(char1===Vtext.length){
        char1 = 0;
    }
}

export class HelloWorld3 extends Component {
    render() {
        return write3();
    }
}