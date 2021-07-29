import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../Hooks/useForm';
import DeleteIcon from '@material-ui/icons/Delete';
import './TodoApp.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  const handleDelete = (todoId) => {
    console.log(todoId);

    const deleteAction = {
      type: 'delete',
      payload: todoId,
    };

    dispatch(deleteAction);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <div className='row'>
        <div className='col-8'>
          {todos.map((todo) => (
            <div key={todo.id} className='card text-center p-2 m-3'>
              <div className='card-body'>
                <p className={todo.done && 'complete'}>{todo.description}</p>
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
          ))}
        </div>

        <div className='col'>
          <h4>Add TODO</h4>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='description'
              placeholder='Todo'
              autoComplete='off'
              className='form-control'
              value={description}
              onChange={handleInputChange}
            />
            <div className='d-grid gap-2'>
              <button type='submit' className='btn btn-outline-primary mt-3'>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
