import React, { useState } from 'react';
import Tweet from './tweet';

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    {name: "Ran", message: "I like pizza", likes: "10" },
    {name: "Ben", message: "I like to sleep", likes: "20" },
    {name: "Lee", message: "I like to dance", likes: "40" }
  ]);

  const Increment = () => {
    setCount(count + 1);
  }
  
  const changeColor = () => {
    setRed(!isRed);
  }

  return(
    <div className="app">
      <h2 className={isRed ? "red" : ""}>Change my color!</h2>
      <button onClick={ changeColor }>Change color</button>
      <h1>{count}</h1>
      <button onClick={ Increment }>Increment</button>
      {users.map(u => (
        <Tweet name={u.name} message={u.message} likes={u.likes} />
      ))}
    </div>
  );
}

export default App;