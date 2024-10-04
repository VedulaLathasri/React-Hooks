import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)

    // 1. Simple counter rendered after every update
    // useEffect(() => {
    //     document.title = `Clicked ${count} times`
    // })

    //2. Conditionally run the useEffect Hook
    const [name, setName] = useState('');
    useEffect(() => {
      console.log(`useEffect called`);
      document.title = `Clicked ${count} times`
  })
  return (
    <div>
      <input type='text' value={name} onChange={ e => setName(e.target.value)}/>
        <button onClick={() => setCount(count+1)}> Click {count} times</button>
    </div>
  )
}

export default HookCounterOne