import './App.css';
import {useState} from 'react';
function Counter({title, initValue}){
  //let countState = useState(initValue);
  //let count = countState[0];
  //let setCount = countState[1];
  let [count, setCount] = useState(initValue);
  //const up = function(){
  //  setCount(count+1)
  //}
  const up = () => {
    setCount(count+1)
    //setCount(function(oldCount){
    //  console.log("oldCount 1", oldCount);
    //  return oldCount + 1;
    //});
    
    //setCount((oldCount)=>oldCount + 1);
  }
  const down = () => {
    setCount(count-1)
  }
  return <div>
    <h1>{title}</h1> 
    <button onClick={up}>💘</button><button onClick={down}>💘</button> 👉 {count}
  </div>
}
function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10} initValue1={10}></Counter>
      <Counter title="입장객 카운터" initValue={20}></Counter>
    </div>
  );
}

export default App;
