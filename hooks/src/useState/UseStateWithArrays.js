import React, {useState} from 'react'

function UseStateWithArrays() {

    const [listItem, setListItem] = useState([]);

    const addItem = () =>{
        const newNumber = Number(Math.floor(Math.random() *10));
        console.log(`newNum: ${newNumber}`);
        // console.log(listItem);
        setListItem([...listItem,{
            id: listItem.length,
            value: newNumber
        }])
    }

  return (
    <div>
        <button onClick={addItem}>AddItem</button>
        <ul>
            {listItem.map(item => (
                <li key = {item.id}> {item.value}</li>
            ))}
            <li>
            {listItem}
            </li>
        </ul>
    </div>
  )
}

export default UseStateWithArrays