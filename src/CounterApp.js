import React,{useMemo,useState} from 'react'



const CounterApp=React.memo(({count})=>{
    return (
      <>Count is {count}</>
    )
    })


export default CounterApp;