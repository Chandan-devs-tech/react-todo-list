import React, { useEffect, useState } from 'react';
import './App.css';
import TodoLogic from './Components/TodoLogic';
import Header from './Components/Header';

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    const storedCounter = localStorage.getItem('counter');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    if (storedCounter) {
      setCounter(parseInt(storedCounter, 10));
    }
  }, []);

  return (
    <div className="todoApp">
      <Header />
      <TodoLogic todos={todos} setTodos={setTodos} counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
