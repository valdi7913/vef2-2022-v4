import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { LoginFooter } from '../../components/LoginFooter/LoginFooter.jsx';
import { Nav } from '../../components/Nav/Nav.jsx';
import s from './Event.module.scss';
import { AuthenticationContext } from '../../components/AuthContext/AuthContext.jsx';

export function Event() {
    const { id } = useParams();
    const [event, setEvent] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [formData, setFormData] = useState({});
    const { isLoggedIn} = useContext(AuthenticationContext);
    const { registered, addToRegistered, removeFromRegistered } = useContext(AuthenticationContext);

    const url =` http://localhost:3001/events/${id}`;
  
    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            setErrors(null);
            try {
                const data = await fetch(url);
                const eventData = await data.json();
                setEvent(eventData);
            } catch (err) {
                setErrors(`Villa kom upp: ${err.message}`);
                return;
            } finally {
                setIsLoading(false);
            }   
        }
        getData();
    },[id]) 

    const handleRegister = () => {
        addToRegistered(formData)
        setFormData({});
    }

    const handleChange = (e) => {
        const { target } = e;
        const value = target.value;
        const name = target.name;

        setFormData(oldData => ({
            ...oldData,
            ...{[name]: value}
        }));
    }    

    if(errors) {
        return ( <h1> {errors} </h1> );
    }
    if(isLoading) {
       return ( <h1> loading ... </h1> );
    } 

    return (
        <>
            <div className={s.Event__container}>
                <h1 > {event.name}</h1>
                <p className={s.Event__description}> {event.description}</p>
                <h2>Skráningar á viðburð</h2>
                <ul>
                {registered.length > 0 && registered.map(registration => () => (
                    <li key={registration}>
                        <p>{registration.Notendanafn}</p>
                        <p>{registration.Athugasemd}</p>
                    </li>
                ))}

                </ul>
                {isLoggedIn && <Form>
                    <Input text="Athugasemd" type="textarea" onChange={handleChange} />
                    <button onClick={handleRegister} type='submit'> Skrá mig </button>
                </Form>}
                <Nav />
            </div>
            <LoginFooter />
        </>
    )
}