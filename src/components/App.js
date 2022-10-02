
import '../styles/App.css';
import React, { useState } from 'react';

const App=()=> {
 //code here 
 const [input, setInput] = useState(");
 const [term, setTerm] = useState("):
 
 const handleChange=(e)=>{
  setInput(e.target.value);
 }
 const handleSubmit=(e)=>{
  e.preventDefault();
  setTerm(term+input);
  setInput(");
  }
 
  return (
 <div>
 <input id="" type="text" value={input} onChange={handleChange} />
  <button id="" onClick={handleSubmit}>Submit</button>
    <p>{term}</p>
    </div>
  );
}

export default App;
