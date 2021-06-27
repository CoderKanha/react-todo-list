import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

Todos.propTypes = {
  todos: PropTypes.array,
  onDelete: PropTypes.func
};

function Todos(props) {
  return (
    <div>
      <h4 className='border-bottom m-3 p-4'>TODO List Item</h4>
      {props.todos.length ?
        <div className='border border-4 container mb-4 p-4'>
          {props.todos.map((todo, index) => {
            return <TodoItem key={todo.id} onDelete={props.onDelete} todo={todo}/>
          })}
        </div> :
        <div className='border border-4 container mb-4 p-4'>
          <span className='m-4'>No item to do in list. Add one</span>
          <button type="button" className="ml-3 btn btn-success">+ Add TODO</button>
        </div>
      }
    </div>
  );
}

export default Todos;