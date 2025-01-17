import React , {useImperativeHandle, forwardRef} from 'react'

function Child(props, ref) {

    useImperativeHandle(
      ref,
      () => {
        return{
            hi: () => sayHi(),
        }
      },
    )

    const sayHi = () =>{
        console.log("Hi, Everyone");
    }

  return (
    <div>Child Component</div>
  )
}

export default forwardRef(Child)