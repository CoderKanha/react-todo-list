import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import {Modal} from "react-bootstrap";
import AddTodo from "./AddTodo";

Todos.propTypes = {
  todos: PropTypes.array,
  onDelete: PropTypes.func,
  addTodo: PropTypes.func
};

function Todos(props) {
  let [modalStatus, setModalStatus] = useState(false)

  let openModal = () => {
    setModalStatus(true)
  }

  let closeModal = () => {
    setModalStatus(false)
  }

  return (
    <div>
      <div className='border-bottom m-3 p-4 container'>
        <div className='row'>
          <h4 className="col-xs-6">TODO List Item</h4>
        </div>
        <div className='row'>
          <button onClick={openModal} type="button" className="ml-3 btn btn-success col-xs-6">+ Add TODO</button>
        </div>
      </div>
      {props.todos.length ?
        <div className='border border-4 container mb-4 p-4'>
          {props.todos.map((todo) => {
            return <TodoItem key={todo.id} onDelete={props.onDelete} todo={todo}/>
          })}
        </div> :
        <div className='border border-4 container mb-4 p-4'>
          <span className='m-4'>No item to do in list. Add one</span>
          <button onClick={openModal} type="button" className="ml-3 btn btn-success">+ Add TODO</button>
        </div>
      }
      <Modal show={modalStatus} keyboard={false} centered={true} onHide={closeModal} backdrop={'static'}>
        <AddTodo isOpen={modalStatus} closeModal={closeModal} addTodo={props.addTodo}/>
      </Modal>
    </div>
  );
}

export default Todos;