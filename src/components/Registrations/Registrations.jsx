import s from './Registrations.module.scss';

export function Registrations({ registrations }) {
  if (registrations && registrations.length === 0) {
    return <p className={s.Registrations__message}> Engar skráningar </p>;
  }
  return (
    <ul className={s.Registrations__container}>
      {registrations &&
        registrations.map((reg) => (
          <li className={s.Registrations__item} key={reg.name}>
            <p className={s.Registrations__name}>{reg.name}:</p>
            <p className={s.Registrations__comment}>{reg.comment}</p>
          </li>
        ))}
    </ul>
  );
}
