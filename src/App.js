import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from './services/history';
import Routes from './routes';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('@user:User', JSON.stringify(user));
      } else {
        localStorage.clear();
        history.push('/');
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </BrowserRouter>
  );
}

export default App;
