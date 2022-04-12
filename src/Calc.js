import React,{useState} from 'react';
import './styles.css';


function Calc() {
  const [input,setInput]=useState("");
const setText=(e)=>{
  setInput(input.concat( e.target.innerHTML));
}
const clearEntry=()=>{
  setInput(input.slice(0, -1));
}
const reset=()=>{
 setInput("");
}
const evaluate=()=>{
  //console.log(typeof eval(input));
  setInput(eval(input).toString());
}
  
  return (
   
      <div className="calculator-grid">
      
      <input type="text" className="item-input" value={input}/>
      <button className="item" onClick={clearEntry} >CE</button>
      <button className="item" onClick={setText} >7</button>
      <button className="item" onClick={setText}>8</button>
      <button className="item" onClick={setText}>9</button>
      <button className="item" onClick={setText}>/</button>
      <button className="item" onClick={setText}>4</button>
      <button className="item" onClick={setText}>5</button>
      <button className="item" onClick={setText}>6</button>
      <button className="item" onClick={setText}>-</button>
      <button className="item" onClick={setText}>1</button>
      <button className="item" onClick={setText}>2</button>
      <button className="item"onClick={setText}>3</button>
      <button className="item" onClick={setText}>+</button>
      <button className="item" onClick={reset}>AC</button>
      <button className="item" onClick={setText}>0</button>
      <button className="item" onClick={setText}>.</button>
      <button className="item"onClick={evaluate}>=</button>

      
    </div>
    
    
  );
}

export default Calc;
