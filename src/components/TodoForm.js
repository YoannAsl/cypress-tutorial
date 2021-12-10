import React from 'react';

export default ({ currentTodo, handleNewTodoChange, handleTodoSubmit }) => (
    <form onSubmit={handleTodoSubmit}>
        <input
            type='text'
            className='new-todo'
            placeholder='What needs to be done?'
            autoFocus
            value={currentTodo}
            onChange={handleNewTodoChange}
        />
    </form>
);
