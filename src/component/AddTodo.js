import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Modal} from "react-bootstrap";

AddTodo.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  addTodo: PropTypes.func
};

function AddTodo(props) {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!title || !desc) {
      alert('Title or desc cannot be empty!!!')
    } else {
      props.addTodo(title, desc)
      props.closeModal()
    }
  }

  return (
    <div>
      <Modal.Header>
        <Modal.Title>Add TODO</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={title}
                          onChange={(e) => setTitle(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="desc">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" value={desc}
                          onChange={(e) => setDesc(e.target.value)}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>Close</Button>
        <Button onClick={onSubmit} variant="primary" type="button">Submit</Button>
      </Modal.Footer>
    </div>
  );
}

export default AddTodo;