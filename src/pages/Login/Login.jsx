import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../../components/AuthContext/AuthContext.jsx';
import { Button } from '../../components/Button/Button.jsx';
import { Form } from '../../components/Form/Form.jsx';
import { Input } from '../../components/Input/Input.jsx';
import { LoginFooter } from '../../components/LoginFooter/LoginFooter.jsx';
import { Nav } from '../../components/Nav/Nav.jsx';
import s from './Login.module.scss';

export function Login() {
  const navigation = useNavigate();
  const { isLoggedIn } = useContext(AuthenticationContext);

  if (isLoggedIn) {
    navigation('/');
  }

  return (
    <>
      <div className={s.Login__container}>
        <h1> Innskráning </h1>
        <Form>
          <Input text='Notendanafn' type='text' />
          <Input text='Lykilorð' type='text' />
          <Button type='button'> Innskrá </Button>
        </Form>
        <Nav />
      </div>
      <LoginFooter />
    </>
  );
}
