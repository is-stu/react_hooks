import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './TodoApp.css';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Learn React',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      description: 'Learn React',
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    dispatch(action);
  };

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      {console.log(todos)}
      <div className='row'>
        <div className='col-8'>
          {todos.map((todo) => (
            <div key={todo.id} className='card text-center p-2 m-3'>
              <div className='card-body'>
                <p className='card-text'>{todo.description}</p>
              </div>
              <strong>{todo.done ? 'Done' : 'pending'}</strong>
              <button
                className={
                  todo.done
                    ? 'btn btn-outline-danger mt-3'
                    : 'btn btn-outline-primary mt-3'
                }>
                {todo.done ? 'Undone' : 'Complete'}
              </button>
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
              autoComplete='offf'
              className='form-control'
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
