import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import history from '../../services/history';
import googleIcon from '../../assets/g-logo.png';

import { Container, DivLogin, ButtonGoogleLogin } from './styles';

function Login() {
  const [token, setToken] = useState('');

  async function firebaseLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    setToken(await firebase.auth().currentUser.getIdToken(true));
    history.push('/home');
  }

  useEffect(() => {
    if (token) {
      localStorage.setItem('@user:Token', token);
    }
  }, [token]);

  return (
    <Container>
      <DivLogin>
        <h3>Bem vindo ao ToDo Application</h3>
        <p>Faça suas anotações de uma forma simples.</p>
        <ButtonGoogleLogin type="button" onClick={firebaseLogin}>
          <img src={googleIcon} alt="Google Icon" />
          <span>FAÇA LOGIN COM GOOGLE</span>
        </ButtonGoogleLogin>
      </DivLogin>
    </Container>
  );
}

export default Login;
