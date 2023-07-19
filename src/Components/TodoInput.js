import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './TodoInput.css';
import PropTypes from 'prop-types';

function InputTodo({ addItem }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addItem(title);
      setTitle('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          className="todoInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="circleplus">
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </form>
    </>
  );
}

InputTodo.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default InputTodo;
