import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './TodoLogic.css';

function TodoLogic({
  todos, setTodos, counter, setCounter,
}) {
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, [setTodos]);

  useEffect(() => {
    const storedCounter = localStorage.getItem('counter');
    if (storedCounter) {
      setCounter(parseInt(storedCounter, 10));
    }
  }, [setCounter]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('counter', counter.toString());
  }, [counter]);

  const addItem = (title) => {
    const newItem = {
      id: counter,
      title,
      completed: false,
    };
    setTodos([...todos, newItem]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const deleteItem = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editItem = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  return (
    <div className="todoLogic">
      <TodoInput addItem={addItem} />
      <TodoList
        todos={todos}
        deleteItem={deleteItem}
        editItem={editItem}
        toggleCompleted={toggleCompleted}
      />
      <button type="button" onClick={clearCompleted} className="clearBtn">
        Clear Completed
      </button>
    </div>
  );
}

TodoLogic.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
};

export default TodoLogic;
