import React, {useRef} from 'react'
import Child from './Child'

function Parent() {
    const ref = useRef();
  return (
    <div>
        <Child ref={ref}/>
        <div>Parent Component</div>
        <button onClick={() => ref.current.hi()}> Click me</button>
    </div>
  )
}

export default Parent