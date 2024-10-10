import React,{useMemo,useState} from 'react'



const CounterApp=React.memo(({count,inputData})=>{
    return (
      <>
      <h4>Count is {count}</h4>
      <div>
        {inputData.length > 0 ?
        inputData.map((item)=>
          <li>{item}</li>
        )
      :(
        <>
        <li>null</li>
        </>
      )
      }
     
      </div>
      </>
      
    )
    })


export default CounterApp;


// CounterApp Component
// import React from 'react';

// const CounterApp = React.memo(({ count, inputData }) => {
//   return (
//     <>
//       <h4>Count is {count}</h4>
//       <div>
//         <ul>
//           {inputData.length > 0 ? (
//             inputData.map((data, index) => <li key={data + index}>{data}</li>) // Use a unique key
//           ) : (
//             <li>No data submitted</li>
//           )}
//         </ul>
//       </div>
//     </>
//   );
// });

// export default CounterApp;