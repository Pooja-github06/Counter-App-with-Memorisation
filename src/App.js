import React, { useState } from "react";
import "./style.css";
import CounterApp from './CounterApp'



export default function App() {
  const [count,setCount]=useState(0)
  return (
    <div>
      <h4>Memorisation used in React app</h4>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    <CounterApp count={count}/>
    </div>
  );
}
