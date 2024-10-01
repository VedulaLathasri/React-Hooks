import React, { useState } from 'react'

function CounterWithPrevState() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementCount = () => {
        setCount(prevCount => prevCount +1)
    }
    return (
    <div>
        <button onClick={ incrementCount}> Increment</button>
        <p> CounterWithPrevState { count } times</p>
        </div>
  )
}

export default CounterWithPrevState