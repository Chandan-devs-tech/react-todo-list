import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';
import PropTypes from 'prop-types';

function TodoItem({
  todo, deleteItem, editItem, toggleCompleted,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleDelete = () => {
    deleteItem(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedTitle.trim() !== '') {
      editItem(todo.id, editedTitle);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(todo.title);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleToggleCompleted = () => {
    toggleCompleted(todo.id);
  };

  return (
    <div className={`todoItem ${todo.completed ? 'completed' : ''}`}>
      <div className="checkText">
        <input
          type="checkbox"
          className="check-state"
          checked={todo.completed}
          onChange={handleToggleCompleted}
        />
        {isEditing ? (
          <input
            type="text"
            className="edit-input"
            value={editedTitle}
            onChange={handleTitleChange}
          />
        ) : (
          <p className={todo.completed ? 'todo-item-text completed' : 'todo-item-text'}>{todo.title}</p>
        )}
      </div>
      <div className="editDelete">
        {isEditing ? (
          <>
            <button type="button" className="save-button" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
            <FontAwesomeIcon icon={faPen} onClick={handleEdit} />
          </>
        )}
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

export default TodoItem;
