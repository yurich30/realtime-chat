import React, {useContext} from 'react'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '.';

function App() {

  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if(loading) return <Loader/>

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
