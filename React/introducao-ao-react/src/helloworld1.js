import React , {Component} from 'react';
import './App.css';


const text="Hello World ";
const Vtext = text.split("");

function write(){
  const charList = [];
  for(var count=0;count<Vtext.length;count++){
    charList.push(<span class='hw1'>{Vtext[count]}</span>)
  }
  return(
    <div id="exibe">
      <h1>
        {charList}
      </h1>
    </div>
  );
}

let char = 0;
setInterval(onTick,300);

function onTick(){
  let span = document.getElementById('exibe').querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if(char===Vtext.length){
    char=0;
    complete();
    return;
  }
}

function complete(){
  for(var cont=0;cont<Vtext.length;cont++){
    const span = document.getElementById('exibe').querySelectorAll('span')[cont];
    span.classList.remove('fade');
  }
}

export class HelloWorld1 extends Component {
  render() {
      return write();
  }
}