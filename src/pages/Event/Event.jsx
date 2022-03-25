import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EventForm } from '../../components/EventForm/EventForm.jsx';
import { LoginFooter } from '../../components/LoginFooter/LoginFooter.jsx';
import { Nav } from '../../components/Nav/Nav.jsx';
import { Registrations } from '../../components/Registrations/Registrations.jsx';
import s from './Event.module.scss';

export function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      setErrors(null);
      try {
        const url = `https://vef2-20222-v3-synilausn.herokuapp.com/events/${id}`;
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
  }, [id]);

  if (errors) {
    return <h1> {errors} </h1>;
  }
  if (!event || isLoading) {
    return <h1 className={s.Event__loading}> loading ... </h1>;
  }
  return (
    <>
      <div className={s.Event__container}>
        <h1> {event.name} </h1>
        <p className={s.Event__description}> {event.description}</p>
        <h2>Skráningar á viðburð</h2>
        <Registrations registrations={event.registrations} />
        <EventForm id={id} />
        <Nav />
      </div>
      <LoginFooter />
    </>
  );
}
