import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './TodoApp.css';
import { TodoList } from './TodoList/TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleDelete = (todoId) => {
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

  const handleAdd = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
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
            <TodoList
              key={todo.id}
              todo={todo}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          ))}
        </div>

        <div className='col'>
          <TodoAdd handleAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};
