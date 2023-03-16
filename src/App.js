import './App.css';
import {useEffect, useState} from 'react';
function Counter({title}){
    const [count, setCount] = useState(0);
    const change = async (value) => {
      const resp = await fetch('http://localhost:9999/counter',{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({value: count+value})
      });
      const result = await resp.json();
      setCount(result.value);
    }
    const up = () => change(1);
    const down = () => change(-1);
    useEffect(()=>{
      fetch('http://localhost:9999/counter')
        .then(res=>res.json())
        .then(result=>{ 
          setCount(result.value);
        })
    })
  return <>
    <h1>{title}</h1> 
    <button style={{marginRight : "10px"}} onClick={up}>💘</button>
    <button className ="spaceRight" onClick={down}>💘</button> 👉 {count}
  </>
}
function App() {
  return (
    <div>
      <Counter title="참여자 카운터" ></Counter>
    </div>
  );
}

export default App;
