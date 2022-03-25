import { Link } from 'react-router-dom';
import s from './ListEvent.module.scss';

export function ListEvent({ event }) {
  return (
    <div className={s.Event__container}>
      <Link to={`/events/${event.id}`}>
        <h1 className={s.Event__title}> {event.name} </h1>
      </Link>
      <p>{event.description}</p>
    </div>
  );
}
