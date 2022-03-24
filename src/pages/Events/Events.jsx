import { LoginFooter } from '../../components/LoginFooter/LoginFooter.jsx';
import { ListEvent } from '../../components/ListEvent/ListEvent.jsx';
import { useState, useEffect, useContext } from 'react';
import s from './Events.module.scss';
export function Events() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        async function loadData() {
            setIsLoading(true);
            setErrors(null);
            try {
                const data = await fetch('https://vef2-20222-v3-synilausn.herokuapp.com/events');
                const eventsData = await data.json();
                setEvents(eventsData.items);
            } catch (err) {
                setErrors(`Villa kom upp: ${err.message}`);
                return;
            } finally {
                setIsLoading(false);
            }
        }
        loadData();
    },[]);

    if(isLoading) {
        return (<h1 className={s.Events__loading}> loading... </h1>);
    }

    if(errors) {
        return (<h1 className={s.Events__title}> {errors} </h1>);
    }

    return (
        <>
            <div className={s.Events__container}>
                <h2 className={s.Events__title}>Viðburðir á næstunni</h2>
                <ul className={s.Events__list}>
                    {(events ?? []).map((event, i)=> (
                     <li key={i}>
                        <ListEvent event={event}/>
                     </li>
                    ))}
                </ul>
            </div>
            <LoginFooter />
        </>
    );    
}