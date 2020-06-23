import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { toast } from 'react-toastify';
import { AiOutlineDelete } from 'react-icons/ai';

import { Container, DivListTodos, FabAddTodo, Header } from './styles';

import ModalTodo from '../../components/ModalTodo';
import todoRest from '../../services/rest/todo';

function Home() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function indexTodo() {
      try {
        setTodos(await todoRest.index());
      } catch (error) {
        toast(error.message, { type: 'error' });
      }
    }

    indexTodo();
  }, []);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('@user:User')));
  }, []);

  function handleLogout() {
    firebase.auth().signOut();
  }

  function handleOpenNewModal() {
    setEditTodo({ id: '', title: '', content: '', completed: false });
    setIsModalOpen(true);
  }

  function handleOpenModal(todo) {
    setEditTodo(todo);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    getTodos();
  }

  async function getTodos() {
    try {
      setTodos(await todoRest.index());
    } catch (error) {
      toast(error.message, { type: 'error' });
    }
  }

  async function handleChangeCompletedTodo(todo) {
    todoRest
      .update({ ...todo, completed: !todo.completed })
      .then(() => {
        getTodos();
      })
      .catch(error => {
        toast(error.message, { type: 'error' });
      });
  }

  async function handleDeleteTodo(id) {
    todoRest
      .delet(id)
      .then(() => {
        getTodos();
      })
      .catch(error => {
        toast(error.message, { type: 'error' });
      });
  }

  return (
    <Container>
      <Header>
        <h3>{user && user.displayName}'s ToDo</h3>
        <button type="button" onClick={handleLogout}>
          SAIR
        </button>
      </Header>
      <DivListTodos>
        {todos.map(todo => (
          <div className="content" key={todo.id}>
            <button
              type="button"
              onClick={() => {
                handleOpenModal(todo);
              }}
            >
              <h3>{todo.title}</h3>
              <p>{todo.content}</p>
            </button>
            <div className="footer">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleChangeCompletedTodo(todo)}
              />
              <AiOutlineDelete
                className="deleteTodo"
                size={18}
                onClick={() => handleDeleteTodo(todo.id)}
              />
            </div>
          </div>
        ))}
      </DivListTodos>
      <FabAddTodo onClick={handleOpenNewModal}>
        <p>+</p>
      </FabAddTodo>
      <ModalTodo
        isModalOpen={isModalOpen}
        todo={editTodo}
        handleCloseModal={handleCloseModal}
      />
    </Container>
  );
}

export default Home;
