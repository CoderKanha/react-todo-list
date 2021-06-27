import React from 'react';
import PropTypes from 'prop-types';

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func
};

function TodoItem(props) {
  return (
    <div>
      <div className="card container my-4 w-25">
        <div className="card-body">
          <h5 className="card-title">{props.todo.title}</h5>
          <p className="card-text">{props.todo.desc}</p>
          <button onClick={() => {
            props.onDelete(props.todo.id)
          }} className="btn-sm btn btn-danger">Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;