import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../AuthContext/AuthContext.jsx';
import { Button } from '../Button/Button.jsx';
import s from './LoginFooter.module.scss';

export function LoginFooter() {
  const { isLoggedIn, toggleLogin } = useContext(AuthenticationContext);
  return (
    <div className={s.LoginFooter}>
      {isLoggedIn ? (
        <p className={s.LoginFooter__link}>
          {' '}
          Skráð/ur inn sem <b>Test</b>
        </p>
      ) : (
        <Link className={s.LoginFooter__link} to='/login'>
          {' '}
          Innskráning Stjórnanda{' '}
        </Link>
      )}
      <Button onClick={toggleLogin}>
        {isLoggedIn ? 'Útskráning' : 'Nýskráning'}
      </Button>
    </div>
  );
}
