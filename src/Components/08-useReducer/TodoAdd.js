import React from 'react';
import { useForm } from '../../Hooks/useForm';

export const TodoAdd = ({ handleAdd }) => {
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

    handleAdd(newTodo);
    reset();
  };

  return (
    <div>
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
  );
};
