import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>

    </div>
  );
}


function LoadComments() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])
  return (
    <div>
      <h2>Comments: {comments.length}</h2>
      {
        comments.map(comment => <Comment name={comment.name} email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div className='component'>
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
      <p>{props.body}</p>
    </div>
  )
}








function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrese = () => setCount(count + 1);
  const handleDecrese = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrese}>Incease</button>
      <button onClick={handleDecrese}>Decrease</button>
    </div>
  )
}


export default App;
