import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import todoRest from '../../services/rest/todo';

import { Modal, Container, HeaderModalTask } from './styles';

Modal.setAppElement(document.getElementById('root'));

function ModelTodo({ isModalOpen, todo, handleCloseModal }) {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setId(todo.id);
    setTitle(todo.title);
    setContent(todo.content);
    setCompleted(todo.completed);
  }, [todo]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (todo.id) {
        await todoRest.update({ id, title, content, completed });
        toast('Updated task.', { type: 'success' });
      } else {
        await todoRest.create({
          title,
          content,
          completed,
        });
        toast('Created task', { type: 'success' });
      }
      handleCloseModal();
    } catch (error) {
      toast(error.message, { type: 'error' });
    }
  }

  return (
    <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
      <form onSubmit={handleSubmit}>
        <HeaderModalTask>
          <h3>Task</h3>
          <button type="submit">SAVE</button>
        </HeaderModalTask>
        <Container>
          <div>
            <input
              className="title"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <input
              className="completed"
              type="checkbox"
              checked={completed}
              onChange={() => setCompleted(!completed)}
            />
          </div>
          <textarea
            className="content"
            placeholder="Description"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </Container>
      </form>
    </Modal>
  );
}

ModelTodo.defaultProps = {
  todo: PropTypes.shape({
    title: '',
    content: '',
    completed: false,
  }),
};

ModelTodo.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    completed: PropTypes.bool,
  }),
  handleCloseModal: PropTypes.func.isRequired,
};

export default ModelTodo;
