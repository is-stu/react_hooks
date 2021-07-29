import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

export const TodoList = ({ todo, handleToggle, handleDelete }) => {
  return (
    <div key={todo.id} className='card text-center p-2 m-3'>
      <div className='card-body'>
        <p className={todo.done ? 'complete card-text' : 'card-text'}>
          {todo.description}
        </p>
      </div>
      <strong>{todo.done ? 'Done' : 'Pending'}</strong>
      <div className='buttons-container mt-3'>
        <button
          className={
            todo.done
              ? 'btn btn-outline-danger buttoncustom'
              : 'btn btn-outline-primary buttoncustom'
          }
          onClick={() => handleToggle(todo.id)}>
          {todo.done ? 'Undone' : 'Complete'}
        </button>
        <button
          className='btn btn-outline-primary icon-button'
          onClick={() => handleDelete(todo.id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
