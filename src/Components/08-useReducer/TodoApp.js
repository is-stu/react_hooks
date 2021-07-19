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
  const [todos] = useReducer(todoReducer, initialState);
  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      {console.log(todos)}
      <div className='row'>
        <div className='col-7'>
          {todos.map((todo) => (
            <div key={todo.id} className='container_todo'>
              {todo.description}
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
        <div className='col-5'>
          <h4>Add TODO</h4>
          <form>
            <input
              type='text'
              name='description'
              placeholder='Todo'
              autoComplete='offf'
              className='form-control'
            />
            <div className='d-grid gap-2'>
              <button className='btn btn-outline-primary mt-3'>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
