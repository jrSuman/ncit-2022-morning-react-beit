import { useState } from "react"

function App() {
  // let count = 1;
  let [count, setCount] = useState(0)

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default App
