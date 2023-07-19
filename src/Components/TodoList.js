import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({
  todos, deleteItem, editItem, toggleCompleted,
}) {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteItem={deleteItem}
          editItem={editItem}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

export default TodoList;
