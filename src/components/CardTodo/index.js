import React from 'react';
import PropTypes from 'prop-types';
import { FiCheckCircle, FiCircle, FiDelete } from 'react-icons/fi';

import { Container, CheckBox } from './styles';

const CardTodo = ({
  todo,
  handleOpenModal,
  handleChangeCompletedTodo,
  handleDeleteTodo,
}) => {
  return (
    <Container>
      <div onClick={() => handleOpenModal(todo)}>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
      </div>
      <CheckBox>
        {todo.completed ? (
          <FiCheckCircle
            onClick={() => handleChangeCompletedTodo(todo)}
            size={16}
          />
        ) : (
          <FiCircle onClick={() => handleChangeCompletedTodo(todo)} size={16} />
        )}
        <FiDelete onClick={() => handleDeleteTodo(todo.id)} size={16} />
      </CheckBox>
    </Container>
  );
};

CardTodo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleChangeCompletedTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};

export default CardTodo;
