
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
 const [inputValue, setInputValue] = useState(");
 const [text, setText] = useState(");
 
 const changeInput=(e)=>{
  setInputValue(e.target.value);
 }
 let textCon = document.getElementById("text");
 
 
 const buttonClick=(e)=>{
  e.preventDefault();
  setText(text+inputValue);
  setInputValue(");
  }
 
  return (
 <div>
 <input id="input" value={inputValue} onChange={changeInput} />
   <p id="intro">Concated String</p>
   <p id="text">{text}</P>
  <button id="button" onClick={buttonClick}>Click me</button>
    </div>
  );
}

