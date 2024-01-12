import { useState} from "react";


function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  //1st input is value and 2nd is a function to that value. "now" is the starting point
  const [time, setTime] = useState(now);

  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}


export default App;



// function App() {
//   const [count, setCount] = useState(0);

//   function increase(){
//     setCount(count + 1); 
//   }

//   function decrease(){
//     setCount(count - 1)
//   }

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }