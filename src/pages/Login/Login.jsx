import { Nav } from '../../components/Nav/Nav.jsx';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { LoginFooter } from '../../components/LoginFooter/LoginFooter';
import s from './Login.module.scss';
import { AuthenticationContext } from '../../components/AuthContext/AuthContext.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


export function Login() {
    const navigation = useNavigate();
    const {isLoggedIn} = useContext(AuthenticationContext);

    if(isLoggedIn){
        navigation('/');
    }

    return (
        <>
            <div className={s.Login__container}>
                <h1> Innskráning </h1>
                <Form>
                    <Input text="Notendanafn" type="text" />
                    <Input text="Lykilorð" type="text" />
                    <button> Innskrá </button>
                </Form>
                <Nav />
            </div>
            <LoginFooter />
        </>
    );
}