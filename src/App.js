import React, { useState ,useMemo} from "react";
import "./style.css";
import CounterApp from './CounterApp'



export default function App() {
  const [count,setCount]=useState(0);
  const [otherstate,setOtherstate]=useState('');
  const doublecount=useMemo(()=>{
return count * 2;
  },[count]);
  return (
    <div className="main_container" >
      <h4>Memoisation used in React app</h4>
     <h4>Double count is {doublecount}</h4>
      <button onClick={()=>setCount(count+1)}>Increment</button>
   
      <input type='text' placeholder="Type here...." value={otherstate}onChange={(e)=>setOtherstate(e.target.value)}></input>
    
    <CounterApp count={count}/>
    </div>
  );
  
}
