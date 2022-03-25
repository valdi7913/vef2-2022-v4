import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AuthContext from './components/AuthContext/AuthContext.jsx';
import './index.css';
import { Event } from './pages/Event/Event.jsx';
import { Events } from './pages/Events/Events.jsx';
import { Login } from './pages/Login/Login.jsx';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import reportWebVitals from './reportWebVitals';


const root = document.getElementById('root');

ReactDOM.render(
  <AuthContext>
    <App>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Events />} />
          <Route path='/login' element={<Login />} />
          <Route path='/events/:id' element={<Event />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </App>
  </AuthContext>,
  root
);

reportWebVitals();
