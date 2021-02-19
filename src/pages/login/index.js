import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
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
        <h3>Welcome to ToDo Application</h3>
        <p>Make your notes in a simple way.</p>
        <ButtonGoogleLogin type="button" onClick={firebaseLogin}>
          <img src={googleIcon} alt="Google Icon" />
          <span>LOGIN WITH GOOGLE</span>
        </ButtonGoogleLogin>
      </DivLogin>
    </Container>
  );
}

export default Login;
