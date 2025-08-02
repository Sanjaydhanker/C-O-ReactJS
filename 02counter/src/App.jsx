import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
     if(count==20)
  {
    alert("high value arrived")
    setCount(count)
  }
  }
  const decrement = () => {
    setCount(count - 1)
     if(count==0)
  {
    alert("low avlue arrived")
    setCount(count)
  }
  }


  return (
    <>  
      <h1>Count Now</h1>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
