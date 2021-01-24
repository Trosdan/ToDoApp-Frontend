import React, { useState, useEffect, useMemo, useCallback } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { toast } from 'react-toastify';
import { FiLogOut } from 'react-icons/fi';

import { useLocation } from 'react-router-dom';
import { Container, Main, FabAddTodo, Header, HeaderContent } from './styles';

import ModalTodo from '../../components/ModalTodo';
import todoRest from '../../services/rest/todo';
import CardTodo from '../../components/CardTodo';

function Home() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState({});
  const [user, setUser] = useState(null);
  const { search } = useLocation();

  useEffect(() => {
    if (search.includes('?todo=new')) handleOpenNewModal();
  }, []);

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

  const handleLogout = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  const handleOpenNewModal = useCallback(() => {
    setEditTodo({ id: '', title: '', content: '', completed: false });
    setIsModalOpen(true);
  }, []);

  const handleOpenModal = useCallback(todo => {
    setEditTodo(todo);
    setIsModalOpen(true);
  }, []);

  const getTodos = useCallback(async () => {
    try {
      setTodos(await todoRest.index());
    } catch (error) {
      toast(error.message, { type: 'error' });
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    getTodos();
  }, [getTodos]);

  const handleChangeCompletedTodo = useCallback(
    todo => {
      todoRest
        .update({ ...todo, completed: !todo.completed })
        .then(() => {
          getTodos();
        })
        .catch(error => {
          toast(error.message, { type: 'error' });
        });
    },
    [getTodos]
  );

  const handleDeleteTodo = useCallback(
    id => {
      todoRest
        .delet(id)
        .then(() => {
          const newListTodo = todos.filter(todo => id !== todo.id && todo);
          setTodos(newListTodo);
        })
        .catch(error => {
          toast(error.message, { type: 'error' });
        });
    },
    [todos]
  );

  const userDisplayName = useMemo(() => {
    if (user) {
      return user.displayName.split(' ')[0];
    }
    return '';
  }, [user]);

  return (
    <Container>
      <Header>
        <div>
          <HeaderContent>
            <h3>
              Hello,
              <strong>{userDisplayName}</strong>
            </h3>
            <p>Organize your tasks</p>
          </HeaderContent>
          <div>
            <button type="button" onClick={handleLogout}>
              <FiLogOut size={28} />
            </button>
          </div>
        </div>
      </Header>
      <Main>
        {todos.map(todo => (
          <CardTodo
            key={todo.id}
            todo={todo}
            handleOpenModal={handleOpenModal}
            handleChangeCompletedTodo={handleChangeCompletedTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </Main>
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
