import React, {useState, useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState()

    const handleClick = () =>{
        setIdFromButtonClick(id);
    }
    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res =>{
            console.log(res);
            setPosts(res.data);
        })
        .catch(err => {console.log(err)})
    }, [idFromButtonClick])
  return (
    <div>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)}></input>
        <button type= "button" onClick={handleClick}>Fetch Data</button>
        <div>{posts.title}</div>
    {/* <ul>
        {posts.map(x => (
            <li key={x.id}>{x.title}</li>
        ))}
    </ul> */}
    </div>
  )
}

export default DataFetching